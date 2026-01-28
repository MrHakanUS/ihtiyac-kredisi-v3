import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import { UserListQuerySchema } from '@/app/api/web/interfaces';

/**
 * GET /api/web/get/user/list
 * Get list of users with pagination, filtering, and search
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} User list response
 */
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only admin and moderator can access user list
    if (!['admin', 'moderator'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const queryParams = {
      page: searchParams.get('page') || '1',
      limit: searchParams.get('limit') || '10',
      search: searchParams.get('search') || '',
      role: searchParams.get('role') || undefined,
      status: searchParams.get('status') || undefined,
    };

    const validatedParams = UserListQuerySchema.parse(queryParams);

    let query = supabaseAdmin
      .from('users')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    // Apply search filter
    if (validatedParams.search) {
      query = query.or(
        `phone.ilike.%${validatedParams.search}%,email.ilike.%${validatedParams.search}%,first_name.ilike.%${validatedParams.search}%,last_name.ilike.%${validatedParams.search}%`
      );
    }

    // Apply role filter
    if (validatedParams.role) {
      query = query.eq('role', validatedParams.role);
    }

    // Apply status filter
    if (validatedParams.status) {
      query = query.eq('status', validatedParams.status);
    }

    // Apply pagination
    const from = (validatedParams.page - 1) * validatedParams.limit;
    const to = from + validatedParams.limit - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Users fetch error:', error);
      return NextResponse.json(
        { error: 'Kullanıcılar getirilirken bir hata oluştu' },
        { status: 500 }
      );
    }

    // Transform users to match interface
    const users = (data || []).map((user) => ({
      id: user.id,
      phone: user.phone,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role,
      status: user.status,
      created_at: user.created_at,
      updated_at: user.updated_at,
    }));

    const totalPages = Math.ceil((count || 0) / validatedParams.limit);

    return NextResponse.json(
      {
        users,
        pagination: {
          page: validatedParams.page,
          limit: validatedParams.limit,
          total: count || 0,
          totalPages,
        },
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

    console.error('User list GET error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

