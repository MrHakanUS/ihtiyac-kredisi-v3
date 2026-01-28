import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import bcrypt from 'bcryptjs';
import { registerSchema } from '@/lib/validations/auth';
import { normalizePhone } from '@/lib/utils/phone';

/**
 * POST /api/web/post/auth/register
 * Register new user
 * @param {Request} request - Request object
 * @returns {Promise<NextResponse>} Register response
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    let normalizedPhone = normalizePhone(validatedData.phone);
    // Remove country code if present (90)
    if (normalizedPhone.startsWith('90') && normalizedPhone.length === 12) {
      normalizedPhone = normalizedPhone.slice(2);
    }

    // Check if user already exists by phone
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
        phone: normalizedPhone,
        email: validatedData.email || null,
        password_hash: passwordHash,
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        role: 'user',
        status: 'active',
      })
      .select()
      .single();

    if (error) {
      console.error('Registration error:', error);
      return NextResponse.json(
        { error: 'Kayıt işlemi sırasında bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Kayıt başarılı',
        user: {
          id: newUser.id,
          phone: newUser.phone,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error.name === 'ZodError') {
      console.error('Validation error:', error.errors);
      const firstError = error.errors[0];
      return NextResponse.json(
        { 
          error: firstError?.message || 'Geçersiz veri', 
          details: error.errors 
        },
        { status: 400 }
      );
    }

    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Kayıt işlemi sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}
