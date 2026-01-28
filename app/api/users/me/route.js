import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';

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

    return NextResponse.json({ user });
  } catch (error) {
    console.error('User me GET error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

