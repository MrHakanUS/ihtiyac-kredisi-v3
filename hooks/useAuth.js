'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const user = session?.user;
  const isAuthenticated = !!user;
  const isLoading = status === 'loading';

  const isAdmin = user?.role === 'admin';
  const isModerator = user?.role === 'moderator';
  const isUser = user?.role === 'user';

  const canAccessAdmin = isAdmin || isModerator;

  const logout = async () => {
    await signOut({ redirect: false });
    router.push('/giris-yap');
    router.refresh();
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    isAdmin,
    isModerator,
    isUser,
    canAccessAdmin,
    logout,
  };
}

