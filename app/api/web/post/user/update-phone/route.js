import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import { z } from 'zod';
import { normalizePhone, isValidPhone } from '@/lib/utils/phone';
import { isOTPExpired } from '@/lib/utils/otp';

/**
 * Update Phone Schema
 */
const updatePhoneSchema = z.object({
  phone: z.string().min(1, 'Telefon numarası gereklidir'),
  code: z.string().length(6, 'OTP kodu 6 haneli olmalıdır'),
});

/**
 * POST /api/web/post/user/update-phone
 * Update user phone number after OTP verification
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} Update phone response
 */
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = updatePhoneSchema.parse(body);

    // Normalize phone number
    let normalized = normalizePhone(validatedData.phone);
    // Remove country code if present (90)
    if (normalized.length === 12 && normalized.startsWith('90')) {
      normalized = normalized.slice(2);
    }

    // Validate phone format
    if (!isValidPhone(normalized)) {
      return NextResponse.json(
        { error: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)' },
        { status: 400 }
      );
    }

    // Verify OTP
    const { data: otpRecord, error: otpError } = await supabaseAdmin
      .from('otp_codes')
      .select('*')
      .eq('phone', normalized)
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
    const { data: existingUser, error: userError } = await supabaseAdmin
      .from('users')
      .select('id, phone')
      .eq('id', session.user.id)
      .single();

    if (userError || !existingUser) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // Check if phone is already taken by another user
    if (normalized !== existingUser.phone) {
      const { data: phoneUser } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('phone', normalized)
        .single();

      if (phoneUser) {
        return NextResponse.json(
          { error: 'Bu telefon numarası başka bir kullanıcı tarafından kullanılıyor' },
          { status: 400 }
        );
      }
    }

    // Update phone number
    const { data: updatedUser, error: updateError } = await supabaseAdmin
      .from('users')
      .update({ phone: normalized })
      .eq('id', session.user.id)
      .select('id, phone, email, first_name, last_name, role, status, created_at, updated_at')
      .single();

    if (updateError) {
      console.error('Phone update error:', updateError);
      return NextResponse.json(
        { error: 'Telefon numarası güncellenirken bir hata oluştu' },
        { status: 500 }
      );
    }

    // Mark OTP as used
    await supabaseAdmin
      .from('otp_codes')
      .update({ used: true })
      .eq('id', otpRecord.id);

    // Transform user data to match interface
    const userProfile = {
      id: updatedUser.id,
      phone: updatedUser.phone,
      email: updatedUser.email,
      firstName: updatedUser.first_name,
      lastName: updatedUser.last_name,
      role: updatedUser.role,
      status: updatedUser.status,
      createdAt: updatedUser.created_at,
      updatedAt: updatedUser.updated_at,
    };

    return NextResponse.json(
      {
        message: 'Telefon numarası başarıyla güncellendi',
        user: userProfile,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error.name === 'ZodError') {
      const firstError = error.errors[0];
      return NextResponse.json(
        { error: firstError?.message || 'Geçersiz veri', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Update phone error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}
