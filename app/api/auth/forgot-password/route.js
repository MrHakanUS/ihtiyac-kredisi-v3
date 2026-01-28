import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { forgotPasswordSchema } from '@/lib/validations/auth';
import { normalizePhone } from '@/lib/utils/phone';
import { generateOTP, getOTPExpiration } from '@/lib/utils/otp';

export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = forgotPasswordSchema.parse(body);

    const normalizedPhone = normalizePhone(validatedData.phone);

    // Check if user exists
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('id, phone')
      .eq('phone', normalizedPhone)
      .single();

    if (!user) {
      // Don't reveal if user exists for security
      return NextResponse.json(
        { message: 'Eğer bu telefon numarası kayıtlıysa, sıfırlama kodu gönderildi' },
        { status: 200 }
      );
    }

    // Generate OTP
    const otpCode = generateOTP();
    const expiresAt = getOTPExpiration();

    // Save OTP to database
    const { error: otpError } = await supabaseAdmin
      .from('otp_codes')
      .insert({
        phone: normalizedPhone,
        code: otpCode,
        expires_at: expiresAt,
        used: false,
      });

    if (otpError) {
      console.error('OTP save error:', otpError);
      return NextResponse.json(
        { error: 'OTP gönderilirken bir hata oluştu' },
        { status: 500 }
      );
    }

    // TODO: Send OTP via SMS service (placeholder)
    // await sendOTP(normalizedPhone, otpCode);
 

    return NextResponse.json(
      {
        message: 'Sıfırlama kodu gönderildi',
        // In production, don't send code in response
        // code: otpCode, // Only for development
      },
      { status: 200 }
    );
  } catch (error) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

