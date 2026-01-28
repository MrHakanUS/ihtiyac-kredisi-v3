import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import { supabaseAdmin } from '@/lib/supabase/server';
import { z } from 'zod';

const otpSettingsSchema = z.object({
  enabled: z.boolean(),
});

// GET: Get OTP settings
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { data: settings, error } = await supabaseAdmin
      .from('otp_settings')
      .select('*')
      .single();

    if (error) {
      // If no settings exist, return default
      return NextResponse.json({
        settings: {
          enabled: false,
        },
      });
    }

    return NextResponse.json({ settings });
  } catch (error) {
    console.error('OTP settings GET error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

// PUT: Update OTP settings
export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const validatedData = otpSettingsSchema.parse(body);

    // Check if settings exist
    const { data: existingSettings } = await supabaseAdmin
      .from('otp_settings')
      .select('id')
      .single();

    let result;

    if (existingSettings) {
      // Update existing settings
      const { data, error } = await supabaseAdmin
        .from('otp_settings')
        .update({
          enabled: validatedData.enabled,
          updated_by: session.user.id,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingSettings.id)
        .select()
        .single();

      result = { data, error };
    } else {
      // Create new settings
      const { data, error } = await supabaseAdmin
        .from('otp_settings')
        .insert({
          enabled: validatedData.enabled,
          updated_by: session.user.id,
        })
        .select()
        .single();

      result = { data, error };
    }

    if (result.error) {
      console.error('OTP settings update error:', result.error);
      return NextResponse.json(
        { error: 'OTP ayarları güncellenirken bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'OTP ayarları güncellendi',
      settings: result.data,
    });
  } catch (error) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Geçersiz veri', details: error.errors },
        { status: 400 }
      );
    }

    console.error('OTP settings update error:', error);
    return NextResponse.json(
      { error: 'İşlem sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

