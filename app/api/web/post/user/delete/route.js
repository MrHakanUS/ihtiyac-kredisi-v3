import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import { DeleteUserSchema } from '@/app/api/web/interfaces';

/**
 * POST /api/web/post/user/delete
 * Delete user (Admin only)
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} Delete user response
 */
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only admin can delete users
    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const validatedData = DeleteUserSchema.parse(body);

    const { id } = validatedData;

    // Prevent self-deletion
    if (session.user.id === id) {
      return NextResponse.json(
        { error: 'Kendi hesabınızı silemezsiniz' },
        { status: 400 }
      );
    }

    // Check if user exists
    const { data: existingUser } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('id', id)
      .single();

    if (!existingUser) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    const { error } = await supabaseAdmin.from('users').delete().eq('id', id);

    if (error) {
      console.error('User deletion error:', error);
      return NextResponse.json(
        { error: 'Kullanıcı silinirken bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Kullanıcı başarıyla silindi' },
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

    console.error('User deletion error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

