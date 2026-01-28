import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { z } from 'zod';
import { normalizePhone } from '@/lib/utils/phone';
import { generateOTP, getOTPExpiration } from '@/lib/utils/otp';

// Schema for sending OTP (only phone required)
const sendOTPSchema = z.object({
  phone: z
    .string()
    .min(1, 'Telefon numarası gereklidir')
    .refine(
      (val) => {
        const cleaned = val.replace(/\D/g, '');
        const phoneNumber = cleaned.startsWith('90') && cleaned.length === 12
          ? cleaned.slice(2)
          : cleaned;
        return phoneNumber.length === 10 && phoneNumber.startsWith('5');
      },
      {
        message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
      }
    ),
});

/**
 * POST /api/web/post/auth/send-otp
 * Send OTP code to phone number
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} Send OTP response
 */
export async function POST(request) {
  try {
    // Check if OTP is enabled
    const { data: otpSettings } = await supabaseAdmin
      .from('otp_settings')
      .select('enabled')
      .single();

    if (!otpSettings?.enabled) {
      return NextResponse.json(
        { error: 'OTP sistemi şu anda kapalı' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const validatedData = sendOTPSchema.parse(body);

    const normalizedPhone = normalizePhone(validatedData.phone);
    // Remove country code if present (90) for storage
    let phoneForStorage = normalizedPhone;
    if (normalizedPhone.startsWith('90') && normalizedPhone.length === 12) {
      phoneForStorage = normalizedPhone.slice(2);
    }

    // Generate OTP
    const otpCode = generateOTP();
    const expiresAt = getOTPExpiration();

    // Save OTP to database
    const { error: otpError } = await supabaseAdmin
      .from('otp_codes')
      .insert({
        phone: phoneForStorage,
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

    // TODO: Send OTP via SMS service (NetGSM)
    // Use normalizedPhone with country code for SMS
    const phoneForSMS = normalizedPhone.startsWith('90')
      ? normalizedPhone
      : `90${phoneForStorage}`;

    // await sendOTP(phoneForSMS, otpCode);

    // In development, log the OTP code
    if (process.env.NODE_ENV === 'development') { 
    }

    return NextResponse.json(
      {
        message: 'Sıfırlama kodu gönderildi',
        // Only send code in development
        ...(process.env.NODE_ENV === 'development' && { code: otpCode }),
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

    console.error('Send OTP error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}
