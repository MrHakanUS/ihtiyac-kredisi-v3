import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import { userUpdateAdminSchema } from '@/lib/validations/user';
import { normalizePhone } from '@/lib/utils/phone';
import bcrypt from 'bcryptjs';

// GET: Get user by ID
export async function GET(request, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;

    // Users can only view their own profile, unless they're admin/moderator
    if (
      session.user.role !== 'admin' &&
      session.user.role !== 'moderator' &&
      session.user.id !== id
    ) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('id, phone, email, first_name, last_name, role, status, created_at, updated_at')
      .eq('id', id)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('User GET error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

// PUT: Update user
export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    const body = await request.json();

    // Check if user exists
    const { data: existingUser } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (!existingUser) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // Regular users can only update their own profile (limited fields)
    if (session.user.id === id && session.user.role === 'user') {
      // Only allow updating profile fields
      const { firstName, lastName, email } = body;

      const updateData = {};
      if (firstName) updateData.first_name = firstName;
      if (lastName) updateData.last_name = lastName;
      if (email !== undefined) updateData.email = email || null;

      const { data: updatedUser, error } = await supabaseAdmin
        .from('users')
        .update(updateData)
        .eq('id', id)
        .select('id, phone, email, first_name, last_name, role, status, created_at, updated_at')
        .single();

      if (error) {
        console.error('User update error:', error);
        return NextResponse.json(
          { error: 'Kullanıcı güncellenirken bir hata oluştu' },
          { status: 500 }
        );
      }

      return NextResponse.json({ message: 'Profil güncellendi', user: updatedUser });
    }

    // Admin/Moderator can update any user
    if (!['admin', 'moderator'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Moderator cannot delete users or change roles
    if (session.user.role === 'moderator') {
      if (body.role && body.role !== existingUser.role) {
        return NextResponse.json(
          { error: 'Moderator rol değiştiremez' },
          { status: 403 }
        );
      }
    }

    const validatedData = userUpdateAdminSchema.parse(body);
    const normalizedPhone = normalizePhone(validatedData.phone);

    // Check if phone is already taken by another user
    if (normalizedPhone !== existingUser.phone) {
      const { data: phoneUser } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('phone', normalizedPhone)
        .single();

      if (phoneUser) {
        return NextResponse.json(
          { error: 'Bu telefon numarası başka bir kullanıcı tarafından kullanılıyor' },
          { status: 400 }
        );
      }
    }

    const updateData = {
      phone: normalizedPhone,
      email: validatedData.email || null,
      first_name: validatedData.firstName,
      last_name: validatedData.lastName,
      role: validatedData.role,
      status: validatedData.status,
    };

    // Update password if provided
    if (validatedData.password) {
      updateData.password_hash = await bcrypt.hash(validatedData.password, 10);
    }

    const { data: updatedUser, error } = await supabaseAdmin
      .from('users')
      .update(updateData)
      .eq('id', id)
      .select('id, phone, email, first_name, last_name, role, status, created_at, updated_at')
      .single();

    if (error) {
      console.error('User update error:', error);
      return NextResponse.json(
        { error: 'Kullanıcı güncellenirken bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Kullanıcı güncellendi', user: updatedUser });
  } catch (error) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.errors },
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

// DELETE: Delete user (Admin only)
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = params;

    // Prevent self-deletion
    if (session.user.id === id) {
      return NextResponse.json(
        { error: 'Kendi hesabınızı silemezsiniz' },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin.from('users').delete().eq('id', id);

    if (error) {
      console.error('User deletion error:', error);
      return NextResponse.json(
        { error: 'Kullanıcı silinirken bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Kullanıcı başarıyla silindi' });
  } catch (error) {
    console.error('User deletion error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

