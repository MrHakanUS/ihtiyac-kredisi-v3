'use server';

import { cookies } from 'next/headers';
import { smsService } from '@/lib/services/sms-service';

export async function sendOtpAction(phone) {
    // Clean phone number - ensure it is just digits
    let cleanPhone = phone.replace(/\D/g, '');

    // Normalize: Remove country code if present (90)
    if (cleanPhone.startsWith('90') && cleanPhone.length === 12) {
        cleanPhone = cleanPhone.slice(2);
    }

    if (cleanPhone.length !== 10) {
        // Basic check, though frontend usually handles stricter check
        // We assume it's 10 digits effectively.
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
 

    try {
        await smsService.sendOtp(cleanPhone, otp);

        const cookieStore = await cookies();
        // Store OTP in cookie (Valid for 3 minutes)
        // We store stringified JSON to verify the phone number matches the OTP
        const cookieValue = JSON.stringify({ phone: cleanPhone, otp });

        cookieStore.set('otp_val', cookieValue, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 180,
            path: '/'
        });

        return { success: true, message: 'Doğrulama kodu gönderildi.' };
    } catch (error) {
        console.error('Action Error:', error);
        return { success: false, message: 'SMS gönderimi başarısız oldu: ' + (error.message || 'Bilinmeyen hata') };
    }
}

export async function verifyOtpAction(code, phone) {
    const cookieStore = await cookies();
    const storedValue = cookieStore.get('otp_val')?.value;

    if (!storedValue) {
        return { success: false, message: 'Kodun süresi dolmuş veya geçersiz.' };
    }

    try {
        const { phone: storedPhone, otp: storedOtp } = JSON.parse(storedValue);
        let cleanPhone = phone.replace(/\D/g, '');

        // Normalize: Remove country code if present (90)
        if (cleanPhone.startsWith('90') && cleanPhone.length === 12) {
            cleanPhone = cleanPhone.slice(2);
        }

        if (storedPhone !== cleanPhone) {
            return { success: false, message: 'Telefon numarası eşleşmiyor.' };
        }

        if (storedOtp === code) {
            // Verification successful
            return { success: true, message: 'Telefon başarıyla doğrulandı.' };
        }

        return { success: false, message: 'Girdiğiniz kod hatalı.' };

    } catch (e) {
        return { success: false, message: 'Doğrulama hatası.' };
    }
}
