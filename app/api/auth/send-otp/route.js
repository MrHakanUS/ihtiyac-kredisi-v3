import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { forgotPasswordSchema } from '@/lib/validations/auth';
import { normalizePhone } from '@/lib/utils/phone';
import { generateOTP, getOTPExpiration } from '@/lib/utils/otp';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { smsService } from '@/lib/services/sms-service';

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

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
    const validatedData = forgotPasswordSchema.parse(body);

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

    // Send OTP via SMS service
    try {
      // Use phone number with country code for SMS (NetGSM expects format: 905XXXXXXXXX)
      const phoneForSMS = normalizedPhone.startsWith('90')
        ? normalizedPhone
        : `90${phoneForStorage}`;
      
      await smsService.sendOtp(phoneForSMS, otpCode); 
    } catch (smsError) {
      console.error('SMS send error:', smsError);
      // Don't fail the request if SMS fails, OTP is still saved in DB
      // User can see the code in console for development
      if (process.env.NODE_ENV === 'development') { 
      }
    }

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

    console.error('Send OTP error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

