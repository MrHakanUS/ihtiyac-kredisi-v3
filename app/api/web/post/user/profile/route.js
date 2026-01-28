import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import { z } from 'zod';

/**
 * Update Profile Schema
 */
const updateProfileSchema = z.object({
  firstName: z.string().min(1, 'Ad gereklidir').max(50, 'Ad en fazla 50 karakter olabilir'),
  lastName: z.string().min(1, 'Soyad gereklidir').max(50, 'Soyad en fazla 50 karakter olabilir'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz').optional().or(z.literal('')),
});

/**
 * POST /api/web/post/user/profile
 * Update user profile (first name, last name, email)
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} Update profile response
 */
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = updateProfileSchema.parse(body);

    // Check if user exists
    const { data: existingUser, error: userError } = await supabaseAdmin
      .from('users')
      .select('id, email')
      .eq('id', session.user.id)
      .single();

    if (userError || !existingUser) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // Check if email is already taken by another user (if email is provided and changed)
    const emailToUpdate = validatedData.email?.trim() || null;
    const currentEmail = existingUser.email?.trim() || null;

    if (emailToUpdate && emailToUpdate !== currentEmail) {
      const { data: emailUser } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('email', emailToUpdate.toLowerCase())
        .single();

      if (emailUser) {
        return NextResponse.json(
          { error: 'Bu e-posta adresi başka bir kullanıcı tarafından kullanılıyor' },
          { status: 400 }
        );
      }
    }

    // Update user profile
    const updateData = {
      first_name: validatedData.firstName,
      last_name: validatedData.lastName,
      email: emailToUpdate || null,
    };

    const { data: updatedUser, error: updateError } = await supabaseAdmin
      .from('users')
      .update(updateData)
      .eq('id', session.user.id)
      .select('id, phone, email, first_name, last_name, role, status, created_at, updated_at')
      .single();

    if (updateError) {
      console.error('Profile update error:', updateError);
      return NextResponse.json(
        { error: 'Profil güncellenirken bir hata oluştu' },
        { status: 500 }
      );
    }

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
        message: 'Profil başarıyla güncellendi',
        user: userProfile 
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

    console.error('Update profile error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}
