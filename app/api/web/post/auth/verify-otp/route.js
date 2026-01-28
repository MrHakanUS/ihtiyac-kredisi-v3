import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { otpVerifySchema } from '@/lib/validations/auth';
import { normalizePhone } from '@/lib/utils/phone';
import { isOTPExpired } from '@/lib/utils/otp';

/**
 * POST /api/web/post/auth/verify-otp
 * Verify OTP code
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} Verify OTP response
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = otpVerifySchema.parse(body);

    const normalizedPhone = normalizePhone(validatedData.phone);
    // Remove country code if present (90) for storage
    let phoneForStorage = normalizedPhone;
    if (normalizedPhone.startsWith('90') && normalizedPhone.length === 12) {
      phoneForStorage = normalizedPhone.slice(2);
    }

    // Verify OTP
    const { data: otpRecord, error: otpError } = await supabaseAdmin
      .from('otp_codes')
      .select('*')
      .eq('phone', phoneForStorage)
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

    // Mark OTP as used
    await supabaseAdmin
      .from('otp_codes')
      .update({ used: true })
      .eq('id', otpRecord.id);

    return NextResponse.json(
      { message: 'OTP kodu doğrulandı', verified: true },
      { status: 200 }
    );
  } catch (error) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Verify OTP error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}
