import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import { CreateUserSchema } from '@/app/api/web/interfaces';
import { normalizePhone } from '@/lib/utils/phone';
import bcrypt from 'bcryptjs';

/**
 * POST /api/web/post/user/create
 * Create new user (Admin only)
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} Create user response
 */
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only admin can create users
    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const validatedData = CreateUserSchema.parse(body);

    const normalizedPhone = normalizePhone(validatedData.phone);
    // Remove country code if present (90)
    let finalPhone = normalizedPhone;
    if (normalizedPhone.startsWith('90') && normalizedPhone.length === 12) {
      finalPhone = normalizedPhone.slice(2);
    }

    // Check if user already exists by phone
    const { data: existingUser } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('phone', finalPhone)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Bu telefon numarası ile kayıtlı bir kullanıcı zaten mevcut' },
        { status: 400 }
      );
    }

    // Check if email already exists (if email is provided)
    if (validatedData.email && validatedData.email.trim() !== '') {
      const { data: existingEmailUser } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('email', validatedData.email.trim().toLowerCase())
        .single();

      if (existingEmailUser) {
        return NextResponse.json(
          { error: 'Bu e-posta adresi ile kayıtlı bir kullanıcı zaten mevcut' },
          { status: 400 }
        );
      }
    }

    // Hash password
    const passwordHash = await bcrypt.hash(validatedData.password, 10);

    // Create user
    const { data: newUser, error } = await supabaseAdmin
      .from('users')
      .insert({
        phone: finalPhone,
        email: validatedData.email || null,
        password_hash: passwordHash,
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        role: validatedData.role,
        status: validatedData.status,
      })
      .select('id, phone, email, first_name, last_name, role, status, created_at, updated_at')
      .single();

    if (error) {
      console.error('User creation error:', error);
      return NextResponse.json(
        { error: 'Kullanıcı oluşturulurken bir hata oluştu' },
        { status: 500 }
      );
    }

    // Transform user to match interface
    const userProfile = {
      id: newUser.id,
      phone: newUser.phone,
      email: newUser.email,
      firstName: newUser.first_name,
      lastName: newUser.last_name,
      role: newUser.role,
      status: newUser.status,
      createdAt: newUser.created_at,
      updatedAt: newUser.updated_at,
    };

    return NextResponse.json(
      {
        message: 'Kullanıcı başarıyla oluşturuldu',
        user: userProfile,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error.name === 'ZodError') {
      const firstError = error.errors[0];
      return NextResponse.json(
        { error: firstError?.message || 'Geçersiz veri', details: error.errors },
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

