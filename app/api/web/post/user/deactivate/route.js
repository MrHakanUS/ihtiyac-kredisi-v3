import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';

/**
 * POST /api/web/post/user/deactivate
 * Deactivate user's own account (soft delete - sets status to inactive)
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} Deactivate account response
 */
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

    // Check if user exists
    const { data: existingUser, error: fetchError } = await supabaseAdmin
      .from('users')
      .select('id, status')
      .eq('id', userId)
      .single();

    if (fetchError || !existingUser) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // Check if account is already inactive
    if (existingUser.status === 'inactive') {
      return NextResponse.json(
        { error: 'Hesabınız zaten askıya alınmış durumda' },
        { status: 400 }
      );
    }

    // Update user status to inactive (soft delete)
    const { error: updateError } = await supabaseAdmin
      .from('users')
      .update({ status: 'inactive' })
      .eq('id', userId);

    if (updateError) {
      console.error('Account deactivation error:', updateError);
      return NextResponse.json(
        { error: 'Hesap askıya alınırken bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Hesabınız başarıyla askıya alındı' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Account deactivation error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

