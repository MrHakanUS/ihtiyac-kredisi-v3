import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import { UpdateUserSchema } from '@/app/api/web/interfaces';
import { normalizePhone } from '@/lib/utils/phone';
import bcrypt from 'bcryptjs';

/**
 * POST /api/web/post/user/update
 * Update user (Admin/Moderator only)
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} Update user response
 */
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, ...userData } = body;

    if (!id) {
      return NextResponse.json({ error: 'Kullanıcı ID gereklidir' }, { status: 400 });
    }

    // Check if user exists
    const { data: existingUser, error: userError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (userError || !existingUser) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // Admin/Moderator can update any user
    if (!['admin', 'moderator'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Moderator cannot change roles
    if (session.user.role === 'moderator') {
      if (userData.role && userData.role !== existingUser.role) {
        return NextResponse.json(
          { error: 'Moderator rol değiştiremez' },
          { status: 403 }
        );
      }
    }

    // Validate update data
    const validatedData = UpdateUserSchema.parse(userData);
    const normalizedPhone = normalizePhone(validatedData.phone);
    // Remove country code if present (90)
    let finalPhone = normalizedPhone;
    if (normalizedPhone.startsWith('90') && normalizedPhone.length === 12) {
      finalPhone = normalizedPhone.slice(2);
    }

    // Check if phone is already taken by another user
    if (finalPhone !== existingUser.phone) {
      const { data: phoneUser } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('phone', finalPhone)
        .single();

      if (phoneUser) {
        return NextResponse.json(
          { error: 'Bu telefon numarası başka bir kullanıcı tarafından kullanılıyor' },
          { status: 400 }
        );
      }
    }

    // Check if email is already taken by another user (if email is provided)
    if (validatedData.email && validatedData.email.trim() !== '') {
      const emailToCheck = validatedData.email.trim().toLowerCase();
      const currentEmail = existingUser.email?.trim().toLowerCase() || null;
      
      if (emailToCheck !== currentEmail) {
        const { data: emailUser } = await supabaseAdmin
          .from('users')
          .select('id')
          .eq('email', emailToCheck)
          .single();

        if (emailUser) {
          return NextResponse.json(
            { error: 'Bu e-posta adresi başka bir kullanıcı tarafından kullanılıyor' },
            { status: 400 }
          );
        }
      }
    }

    const updateData = {
      phone: finalPhone,
      email: validatedData.email || null,
      first_name: validatedData.firstName,
      last_name: validatedData.lastName,
      role: validatedData.role,
      status: validatedData.status,
    };

    // Update password if provided
    if (validatedData.password && validatedData.password.trim() !== '') {
      updateData.password_hash = await bcrypt.hash(validatedData.password, 10);
    }

    const { data: updatedUser, error: updateError } = await supabaseAdmin
      .from('users')
      .update(updateData)
      .eq('id', id)
      .select('id, phone, email, first_name, last_name, role, status, created_at, updated_at')
      .single();

    if (updateError) {
      console.error('User update error:', updateError);
      return NextResponse.json(
        { error: 'Kullanıcı güncellenirken bir hata oluştu' },
        { status: 500 }
      );
    }

    // Transform user to match interface
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
        message: 'Kullanıcı başarıyla güncellendi',
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

    console.error('User update error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

