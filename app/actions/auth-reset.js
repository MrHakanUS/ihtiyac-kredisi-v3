'use server';

import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabase/server';
import * as bcryptModule from 'bcryptjs';

const bcrypt = bcryptModule.default ?? bcryptModule;

export async function resetPasswordAction({ phone, code, password }) {
    // Normalize phone number (remove spaces, dashes)
    let cleanPhone = phone.replace(/\D/g, '');
    // Remove country code if present (90)
    if (cleanPhone.startsWith('90') && cleanPhone.length === 12) {
        cleanPhone = cleanPhone.slice(2);
    }
    const cookieStore = await cookies();
    const storedValue = cookieStore.get('otp_val')?.value;

    // 1. Verify OTP again (Secure check)
    if (!storedValue) {
        return { success: false, message: 'Doğrulama süresi dolmuş.' };
    }

    try {
        const { phone: storedPhone, otp: storedOtp } = JSON.parse(storedValue);

        if (storedPhone !== cleanPhone) {
            return { success: false, message: 'Telefon numarası eşleşmiyor.' };
        }
        if (storedOtp !== code) {
            return { success: false, message: 'Geçersiz doğrulama kodu.' };
        }
    } catch (e) {
        return { success: false, message: 'Doğrulama hatası.' };
    }

    // 2. Find User
    const { data: user } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('phone', cleanPhone)
        .single();

    if (!user) {
        return { success: false, message: 'Kullanıcı bulunamadı.' };
    }

    // 3. Update Password
    try {
        const passwordHash = await bcrypt.hash(password, 10);

        const { error: updateError } = await supabaseAdmin
            .from('users')
            .update({ password_hash: passwordHash })
            .eq('id', user.id);

        if (updateError) {
            console.error('Update error:', updateError);
            return { success: false, message: 'Şifre güncellenemedi.' };
        }

        // Clear OTP cookie
        cookieStore.delete('otp_val');

        return { success: true, message: 'Şifreniz başarıyla güncellendi.' };
    } catch (e) {
        console.error('Reset error:', e);
        return { success: false, message: 'Bir hata oluştu.' };
    }
}
