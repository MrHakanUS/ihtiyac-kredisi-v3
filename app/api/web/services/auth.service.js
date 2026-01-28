/**
 * Authentication API Service
 * Client-side service for authentication-related API calls
 */

import { signIn } from 'next-auth/react';

/**
 * Register new user
 * @param {Object} data - Registration data
 * @param {string} data.phone - Phone number
 * @param {string} data.password - Password
 * @param {string} data.confirmPassword - Password confirmation
 * @param {string} [data.email] - Email address (optional)
 * @param {string} data.firstName - First name
 * @param {string} data.lastName - Last name
 * @param {boolean} data.terms - Terms acceptance
 * @returns {Promise<Object>} Register response
 */
export async function register(data) {
  try {
    const response = await fetch('/api/web/post/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: data.phone,
        password: data.password,
        confirmPassword: data.confirmPassword,
        email: data.email || '',
        firstName: data.firstName,
        lastName: data.lastName,
        terms: data.terms,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Kayıt işlemi başarısız');
    }

    return result;
  } catch (error) {
    console.error('Register service error:', error);
    throw error;
  }
}

/**
 * Login user (using NextAuth)
 * @param {Object} data - Login data
 * @param {string} data.phone - Phone number
 * @param {string} data.password - Password
 * @param {boolean} [data.rememberMe] - Remember me option
 * @returns {Promise<Object>} Login response
 */
export async function login(data) {
  try {
    // Normalize phone for API
    let normalizedPhone = data.phone.replace(/\D/g, '');
    // Remove country code if present (90)
    if (normalizedPhone.startsWith('90') && normalizedPhone.length === 12) {
      normalizedPhone = normalizedPhone.slice(2);
    }

    const result = await signIn('credentials', {
      phone: normalizedPhone,
      password: data.password,
      rememberMe: data.rememberMe || false,
      redirect: false,
    });

    if (result?.error) {
      throw new Error('Telefon numarası veya şifre hatalı');
    }

    return { message: 'Giriş başarılı', success: true };
  } catch (error) {
    console.error('Login service error:', error);
    throw error;
  }
}

/**
 * Send OTP code to phone number
 * @param {Object} data - Send OTP data
 * @param {string} data.phone - Phone number
 * @returns {Promise<Object>} Send OTP response
 */
export async function sendOTP(data) {
  try {
    const response = await fetch('/api/web/post/auth/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: data.phone,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Sıfırlama kodu gönderilemedi');
    }

    return result;
  } catch (error) {
    console.error('Send OTP service error:', error);
    throw error;
  }
}

/**
 * Verify OTP code
 * @param {Object} data - Verify OTP data
 * @param {string} data.phone - Phone number
 * @param {string} data.code - 6-digit OTP code
 * @returns {Promise<Object>} Verify OTP response
 */
export async function verifyOTP(data) {
  try {
    const response = await fetch('/api/web/post/auth/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: data.phone,
        code: data.code,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'OTP doğrulanamadı');
    }

    return result;
  } catch (error) {
    console.error('Verify OTP service error:', error);
    throw error;
  }
}
