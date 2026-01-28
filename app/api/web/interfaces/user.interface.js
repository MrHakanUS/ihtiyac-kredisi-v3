/**
 * User-related interfaces and types
 */

import { z } from 'zod';
import { normalizePhone } from '@/lib/utils/phone';

/**
 * Update Password Request Interface
 * @typedef {Object} UpdatePasswordRequest
 * @property {string} oldPassword - Current password
 * @property {string} newPassword - New password (min 6 characters)
 * @property {string} confirmPassword - Password confirmation
 */

/**
 * Update Password Response Interface
 * @typedef {Object} UpdatePasswordResponse
 * @property {string} message - Success message
 * @property {string} [error] - Error message (if failed)
 */

/**
 * User Profile Interface
 * @typedef {Object} UserProfile
 * @property {string} id - User ID
 * @property {string} phone - Phone number
 * @property {string|null} email - Email address
 * @property {string} firstName - First name
 * @property {string} lastName - Last name
 * @property {string} role - User role (admin, moderator, user)
 * @property {string} status - User status (active, inactive)
 * @property {string} createdAt - Creation date
 * @property {string} updatedAt - Update date
 */

/**
 * Update Profile Request Interface
 * @typedef {Object} UpdateProfileRequest
 * @property {string} firstName - First name
 * @property {string} lastName - Last name
 * @property {string} [email] - Email address (optional)
 */

/**
 * Update Profile Response Interface
 * @typedef {Object} UpdateProfileResponse
 * @property {string} message - Success message
 * @property {UserProfile} user - Updated user profile data
 * @property {string} [error] - Error message (if failed)
 */

/**
 * User Response Interface
 * @typedef {Object} UserResponse
 * @property {UserProfile} user - User profile data
 * @property {string} [error] - Error message (if failed)
 */

// Zod Schemas
const phoneRefine = (val) => {
  const cleaned = normalizePhone(val);
  const phoneNumber = cleaned.startsWith('90') && cleaned.length === 12 
    ? cleaned.slice(2) 
    : cleaned;
  return phoneNumber.length === 10 && phoneNumber.startsWith('5');
};

export const UpdatePasswordSchema = z.object({
  oldPassword: z.string().min(1, 'Eski şifre gereklidir'),
  newPassword: z.string().min(6, 'Yeni şifre en az 6 karakter olmalıdır').max(100, 'Şifre en fazla 100 karakter olabilir'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Yeni şifreler eşleşmiyor',
  path: ['confirmPassword'],
});

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'Ad gereklidir').max(50, 'Ad en fazla 50 karakter olabilir'),
  lastName: z.string().min(1, 'Soyad gereklidir').max(50, 'Soyad en fazla 50 karakter olabilir'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz').optional().or(z.literal('')),
});

export const CreateUserSchema = z.object({
  phone: z.string().min(1, 'Telefon numarası gereklidir').refine(phoneRefine, {
    message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
  }),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır').max(100, 'Şifre en fazla 100 karakter olabilir'),
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

export const UpdateUserSchema = z.object({
  phone: z.string().min(1, 'Telefon numarası gereklidir').refine(phoneRefine, {
    message: 'Geçerli bir telefon numarası giriniz (5XX XXX XX XX)',
  }),
  email: z.string().email('Geçerli bir e-posta adresi giriniz').optional().or(z.literal('')),
  firstName: z.string().min(1, 'Ad gereklidir').max(50, 'Ad en fazla 50 karakter olabilir'),
  lastName: z.string().min(1, 'Soyad gereklidir').max(50, 'Soyad en fazla 50 karakter olabilir'),
  role: z.enum(['admin', 'moderator', 'user'], {
    errorMap: () => ({ message: 'Geçerli bir rol seçiniz' }),
  }),
  status: z.enum(['active', 'inactive'], {
    errorMap: () => ({ message: 'Geçerli bir durum seçiniz' }),
  }),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır').max(100, 'Şifre en fazla 100 karakter olabilir').optional().or(z.literal('')),
});

export const UserListQuerySchema = z.object({
  page: z.string().optional().transform((val) => val ? parseInt(val, 10) : 1),
  limit: z.string().optional().transform((val) => val ? parseInt(val, 10) : 10),
  search: z.string().optional().default(''),
  role: z.enum(['admin', 'moderator', 'user']).optional(),
  status: z.enum(['active', 'inactive']).optional(),
});

export const DeleteUserSchema = z.object({
  id: z.string().uuid('Geçerli bir kullanıcı ID giriniz'),
});

export const UserInterfaces = {
  UpdatePasswordRequest: {
    oldPassword: String,
    newPassword: String,
    confirmPassword: String,
  },
  UpdatePasswordResponse: {
    message: String,
    error: String,
  },
  UpdateProfileRequest: {
    firstName: String,
    lastName: String,
    email: String,
  },
  UpdateProfileResponse: {
    message: String,
    user: Object,
    error: String,
  },
  UserProfile: {
    id: String,
    phone: String,
    email: String,
    firstName: String,
    lastName: String,
    role: String,
    status: String,
    createdAt: String,
    updatedAt: String,
  },
};
