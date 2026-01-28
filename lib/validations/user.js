import { z } from 'zod';

const phoneRegex = /^5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

export const userUpdateSchema = z.object({
  firstName: z.string().min(1, 'Ad gereklidir').max(50, 'Ad en fazla 50 karakter olabilir'),
  lastName: z.string().min(1, 'Soyad gereklidir').max(50, 'Soyad en fazla 50 karakter olabilir'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz').optional().or(z.literal('')),
});

export const userCreateSchema = z.object({
  phone: z
    .string()
    .min(1, 'Telefon numarası gereklidir')
    .refine(
      (val) => {
        // Remove +90 prefix if present
        let cleaned = val.replace(/^\+90\s*/, '').replace(/^90\s*/, '');
        // Remove all non-digit characters
        cleaned = cleaned.replace(/\D/g, '');
        // Remove leading zero if present (for formats like 0537...)
        if (cleaned.startsWith('0') && cleaned.length === 11) {
          cleaned = cleaned.slice(1);
        }
        // Must be exactly 10 digits starting with 5
        return cleaned.length === 10 && cleaned.startsWith('5');
      },
      {
        message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
      }
    ),
  password: z
    .string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .max(100, 'Şifre en fazla 100 karakter olabilir'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz').optional().or(z.literal('')),
  firstName: z.string().min(1, 'Ad gereklidir').max(50, 'Ad en fazla 50 karakter olabilir'),
  lastName: z.string().min(1, 'Soyad gereklidir').max(50, 'Soyad en fazla 50 karakter olabilir'),
  role: z.enum(['admin', 'moderator', 'user'], {
    errorMap: () => ({ message: 'Geçerli bir rol seçiniz' }),
  }),
  status: z.enum(['active', 'inactive'], {
    errorMap: () => ({ message: 'Geçerli bir durum seçiniz' }),
  }),
});

export const userUpdateAdminSchema = z.object({
  phone: z
    .string()
    .min(1, 'Telefon numarası gereklidir')
    .refine(
      (val) => {
        // Remove +90 prefix if present
        let cleaned = val.replace(/^\+90\s*/, '').replace(/^90\s*/, '');
        // Remove all non-digit characters
        cleaned = cleaned.replace(/\D/g, '');
        // Remove leading zero if present (for formats like 0537...)
        if (cleaned.startsWith('0') && cleaned.length === 11) {
          cleaned = cleaned.slice(1);
        }
        // Must be exactly 10 digits starting with 5
        return cleaned.length === 10 && cleaned.startsWith('5');
      },
      {
        message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
      }
    ),
  email: z.string().email('Geçerli bir e-posta adresi giriniz').optional().or(z.literal('')),
  firstName: z.string().min(1, 'Ad gereklidir').max(50, 'Ad en fazla 50 karakter olabilir'),
  lastName: z.string().min(1, 'Soyad gereklidir').max(50, 'Soyad en fazla 50 karakter olabilir'),
  role: z.enum(['admin', 'moderator', 'user'], {
    errorMap: () => ({ message: 'Geçerli bir rol seçiniz' }),
  }),
  status: z.enum(['active', 'inactive'], {
    errorMap: () => ({ message: 'Geçerli bir durum seçiniz' }),
  }),
  password: z
    .string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .max(100, 'Şifre en fazla 100 karakter olabilir')
    .optional()
    .or(z.literal('')),
});

