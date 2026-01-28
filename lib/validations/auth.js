import { z } from 'zod';

// Phone validation: Turkish phone format (5XX XXX XX XX)
const phoneRegex = /^5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

export const loginSchema = z.object({
  phone: z
    .string()
    .min(1, 'Telefon numarası gereklidir')
    .refine(
      (val) => {
        const cleaned = val.replace(/\D/g, '');
        // Remove country code if present (90)
        const phoneNumber = cleaned.startsWith('90') && cleaned.length === 12 
          ? cleaned.slice(2) 
          : cleaned;
        return phoneNumber.length === 10 && phoneNumber.startsWith('5');
      },
      {
        message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
      }
    ),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
});

export const registerSchema = z.object({
  phone: z
    .string()
    .min(1, 'Telefon numarası gereklidir')
    .refine(
      (val) => {
        const cleaned = val.replace(/\D/g, '');
        // Remove country code if present (90)
        const phoneNumber = cleaned.startsWith('90') && cleaned.length === 12 
          ? cleaned.slice(2) 
          : cleaned;
        return phoneNumber.length === 10 && phoneNumber.startsWith('5');
      },
      {
        message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
      }
    ),
  password: z
    .string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .max(100, 'Şifre en fazla 100 karakter olabilir'),
  confirmPassword: z.string(),
  email: z.string().email('Geçerli bir e-posta adresi giriniz').optional().or(z.literal('')),
  firstName: z.string().min(1, 'Ad gereklidir').max(50, 'Ad en fazla 50 karakter olabilir'),
  lastName: z.string().min(1, 'Soyad gereklidir').max(50, 'Soyad en fazla 50 karakter olabilir'),
  terms: z.boolean().refine((val) => val === true, {
    message: 'Üyelik sözleşmesini kabul etmelisiniz',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Şifreler eşleşmiyor',
  path: ['confirmPassword'],
});

export const forgotPasswordSchema = z.object({
  phone: z
    .string()
    .min(1, 'Telefon numarası gereklidir')
    .refine(
      (val) => {
        const cleaned = val.replace(/\D/g, '');
        // Remove country code if present (90)
        const phoneNumber = cleaned.startsWith('90') && cleaned.length === 12 
          ? cleaned.slice(2) 
          : cleaned;
        return phoneNumber.length === 10 && phoneNumber.startsWith('5');
      },
      {
        message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
      }
    ),
});

export const resetPasswordSchema = z.object({
  phone: z
    .string()
    .min(1, 'Telefon numarası gereklidir')
    .refine(
      (val) => {
        const cleaned = val.replace(/\D/g, '');
        // Remove country code if present (90)
        const phoneNumber = cleaned.startsWith('90') && cleaned.length === 12 
          ? cleaned.slice(2) 
          : cleaned;
        return phoneNumber.length === 10 && phoneNumber.startsWith('5');
      },
      {
        message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
      }
    ),
  code: z.string().length(6, 'OTP kodu 6 haneli olmalıdır'),
  password: z
    .string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .max(100, 'Şifre en fazla 100 karakter olabilir'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Şifreler eşleşmiyor',
  path: ['confirmPassword'],
});

export const otpVerifySchema = z.object({
  phone: z
    .string()
    .min(1, 'Telefon numarası gereklidir')
    .refine(
      (val) => {
        const cleaned = val.replace(/\D/g, '');
        // Remove country code if present (90)
        const phoneNumber = cleaned.startsWith('90') && cleaned.length === 12 
          ? cleaned.slice(2) 
          : cleaned;
        return phoneNumber.length === 10 && phoneNumber.startsWith('5');
      },
      {
        message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
      }
    ),
  code: z.string().length(6, 'OTP kodu 6 haneli olmalıdır'),
});

