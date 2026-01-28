export const authConfig = {
  pages: {
    signIn: '/giris-yap',
    error: '/giris-yap',
  },
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
      }
      
      // Update token when session.update() is called
      if (trigger === 'update' && session) {
        if (session.user) {
          token.firstName = session.user.firstName ?? token.firstName;
          token.lastName = session.user.lastName ?? token.lastName;
          token.email = session.user.email ?? token.email;
          token.phone = session.user.phone ?? token.phone;
        }
        
        // Optionally, fetch fresh data from database
        if (token.id) {
          try {
            const { supabaseAdmin } = await import('@/lib/supabase/server');
            const { data: userData } = await supabaseAdmin
              .from('users')
              .select('first_name, last_name, email, phone')
              .eq('id', token.id)
              .single();
            
            if (userData) {
              token.firstName = userData.first_name;
              token.lastName = userData.last_name;
              token.email = userData.email;
              token.phone = userData.phone;
            }
          } catch (error) {
            console.error('Error fetching user data in JWT callback:', error);
          }
        }
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
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days (default)
  },
  secret: process.env.NEXTAUTH_SECRET,
};

