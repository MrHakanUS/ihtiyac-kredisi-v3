import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';

/**
 * GET /api/web/get/user/me
 * Get current user profile
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} User profile response
 */
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('id, phone, email, first_name, last_name, role, status, created_at, updated_at')
      .eq('id', session.user.id)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // Transform user data to match interface
    const userProfile = {
      id: user.id,
      phone: user.phone,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      role: user.role,
      status: user.status,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    };

    return NextResponse.json({ user: userProfile }, { status: 200 });
  } catch (error) {
    console.error('User me GET error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}
