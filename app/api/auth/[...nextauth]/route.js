import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth/options';

const NextAuthFn = NextAuth?.default ?? NextAuth;
const handler = NextAuthFn(authOptions);

export { handler as GET, handler as POST };

