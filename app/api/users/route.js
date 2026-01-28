import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import { userCreateSchema } from '@/lib/validations/user';
import { normalizePhone } from '@/lib/utils/phone';
import bcrypt from 'bcryptjs';

// GET: List all users (Admin/Moderator only)
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!['admin', 'moderator'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const search = searchParams.get('search') || '';
    const role = searchParams.get('role') || '';
    const status = searchParams.get('status') || '';

    let query = supabaseAdmin
      .from('users')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (search) {
      query = query.or(
        `phone.ilike.%${search}%,email.ilike.%${search}%,first_name.ilike.%${search}%,last_name.ilike.%${search}%`
      );
    }

    if (role) {
      query = query.eq('role', role);
    }

    if (status) {
      query = query.eq('status', status);
    }

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Users fetch error:', error);
      return NextResponse.json(
        { error: 'Kullanıcılar getirilirken bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      users: data,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    console.error('Users GET error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

// POST: Create new user (Admin only)
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const validatedData = userCreateSchema.parse(body);

    const normalizedPhone = normalizePhone(validatedData.phone);

    // Check if user already exists
    const { data: existingUser } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('phone', normalizedPhone)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Bu telefon numarası ile kayıtlı bir kullanıcı zaten mevcut' },
        { status: 400 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(validatedData.password, 10);

    // Create user
    const { data: newUser, error } = await supabaseAdmin
      .from('users')
      .insert({
        phone: normalizedPhone,
        email: validatedData.email || null,
        password_hash: passwordHash,
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        role: validatedData.role,
        status: validatedData.status,
      })
      .select()
      .single();

    if (error) {
      console.error('User creation error:', error);
      return NextResponse.json(
        { error: 'Kullanıcı oluşturulurken bir hata oluştu' },
        { status: 500 }
      );
    }

    // Remove password_hash from response
    const { password_hash, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      { message: 'Kullanıcı başarıyla oluşturuldu', user: userWithoutPassword },
      { status: 201 }
    );
  } catch (error) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.errors },
        { status: 400 }
      );
    }

    console.error('User creation error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

