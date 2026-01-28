import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import bcrypt from 'bcryptjs';
import { resetPasswordSchema } from '@/lib/validations/auth';
import { normalizePhone } from '@/lib/utils/phone';
import { isOTPExpired } from '@/lib/utils/otp';

export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = resetPasswordSchema.parse(body);

    const normalizedPhone = normalizePhone(validatedData.phone);

    // Verify OTP
    const { data: otpRecord, error: otpError } = await supabaseAdmin
      .from('otp_codes')
      .select('*')
      .eq('phone', normalizedPhone)
      .eq('code', validatedData.code)
      .eq('used', false)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (otpError || !otpRecord) {
      return NextResponse.json(
        { error: 'Geçersiz veya kullanılmış OTP kodu' },
        { status: 400 }
      );
    }

    // Check if OTP is expired
    if (isOTPExpired(otpRecord.expires_at)) {
      return NextResponse.json(
        { error: 'OTP kodu süresi dolmuş' },
        { status: 400 }
      );
    }

    // Check if user exists
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('phone', normalizedPhone)
      .single();

    if (!user) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    // Hash new password
    const passwordHash = await bcrypt.hash(validatedData.password, 10);

    // Update password
    const { error: updateError } = await supabaseAdmin
      .from('users')
      .update({ password_hash: passwordHash })
      .eq('id', user.id);

    if (updateError) {
      console.error('Password update error:', updateError);
      return NextResponse.json(
        { error: 'Şifre güncellenirken bir hata oluştu' },
        { status: 500 }
      );
    }

    // Mark OTP as used
    await supabaseAdmin
      .from('otp_codes')
      .update({ used: true })
      .eq('id', otpRecord.id);

    return NextResponse.json(
      { message: 'Şifre başarıyla güncellendi' },
      { status: 200 }
    );
  } catch (error) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Reset password error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

