'use client';

import { useAuth } from '@/hooks/useAuth';
import UserTable from '@/components/panel/UserTable';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function KullanicilarPage() {
  const { isAuthenticated, isLoading, canAccessAdmin, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/giris-yap');
      return;
    }
    if (!isLoading && !canAccessAdmin) {
      router.push('/panel/hesabim');
    }
  }, [isAuthenticated, isLoading, canAccessAdmin, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !canAccessAdmin) {
    return null;
  }

  return (
    <UserTable canDelete={isAdmin} />
  );
}

