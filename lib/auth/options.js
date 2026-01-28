import CredentialsProvider from 'next-auth/providers/credentials';
import { supabaseAdmin } from '@/lib/supabase/server';
import * as bcryptModule from 'bcryptjs';
import { authConfig } from './config';

const CredentialsProviderFn = CredentialsProvider?.default ?? CredentialsProvider;
const bcrypt = bcryptModule.default ?? bcryptModule;

export const authOptions = {
  ...authConfig,
  providers: [
    CredentialsProviderFn({
      name: 'Credentials',
      credentials: {
        phone: { label: 'Telefon', type: 'text' },
        password: { label: 'Şifre', type: 'password' },
        rememberMe: { label: 'Beni Hatırla', type: 'checkbox' },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.password) {
          return null;
        }

        try {
          // Normalize phone number (remove spaces, dashes)
          let normalizedPhone = credentials.phone.replace(/\D/g, '');
          // Remove country code if present (90)
          if (normalizedPhone.startsWith('90') && normalizedPhone.length === 12) {
            normalizedPhone = normalizedPhone.slice(2);
          }

          // Get user from database
          const { data: user, error } = await supabaseAdmin
            .from('users')
            .select('*')
            .eq('phone', normalizedPhone)
            .single();

          if (error || !user) {
            return null;
          }

          // Check if user is active
          if (user.status !== 'active') {
            return null;
          }

          // Verify password
          const isValidPassword = await bcrypt.compare(
            credentials.password,
            user.password_hash
          );

          if (!isValidPassword) {
            return null;
          }

          return {
            id: user.id,
            phone: user.phone,
            email: user.email,
            role: user.role,
            status: user.status,
            firstName: user.first_name,
            lastName: user.last_name,
            rememberMe: credentials.rememberMe === 'true' || credentials.rememberMe === true,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.phone = user.phone;
        token.role = user.role;
        token.status = user.status;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.rememberMe = user.rememberMe || false;
      }

      // Call original jwt callback from authConfig
      if (authConfig.callbacks?.jwt) {
        const result = await authConfig.callbacks.jwt({ token, user, trigger, session });
        return result;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.phone = token.phone;
        session.user.role = token.role;
        session.user.status = token.status;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.email = token.email;
        session.maxAge = token.rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60; // 30 days or 1 day
      }

      // Call original session callback from authConfig
      if (authConfig.callbacks?.session) {
        const result = await authConfig.callbacks.session({ session, token });
        return result;
      }

      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // Default 30 days
  },
};

