import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const updatePasswordSchema = z.object({
  oldPassword: z.string().min(1, 'Eski şifre gereklidir'),
  newPassword: z.string().min(6, 'Yeni şifre en az 6 karakter olmalıdır').max(100, 'Şifre en fazla 100 karakter olabilir'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Yeni şifreler eşleşmiyor',
  path: ['confirmPassword'],
});

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = updatePasswordSchema.parse(body);

    // Get user with password hash from database
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('id, password_hash')
      .eq('id', session.user.id)
      .single();

    if (userError || !user) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // Verify old password
    const isValidOldPassword = await bcrypt.compare(
      validatedData.oldPassword,
      user.password_hash
    );

    if (!isValidOldPassword) {
      return NextResponse.json(
        { error: 'Eski şifre hatalı' },
        { status: 400 }
      );
    }

    // Check if new password is same as old password
    const isSamePassword = await bcrypt.compare(
      validatedData.newPassword,
      user.password_hash
    );

    if (isSamePassword) {
      return NextResponse.json(
        { error: 'Yeni şifre eski şifreyle aynı olamaz' },
        { status: 400 }
      );
    }

    // Hash new password
    const newPasswordHash = await bcrypt.hash(validatedData.newPassword, 10);

    // Update password in database
    const { error: updateError } = await supabaseAdmin
      .from('users')
      .update({ password_hash: newPasswordHash })
      .eq('id', session.user.id);

    if (updateError) {
      console.error('Password update error:', updateError);
      return NextResponse.json(
        { error: 'Şifre güncellenirken bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Şifre başarıyla güncellendi' },
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

    console.error('Update password error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}
