'use client';

import { useAuth } from '@/hooks/useAuth';
import OTPToggle from '@/components/panel/OTPToggle';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AyarlarPage() {
  const { isAuthenticated, isLoading, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/giris-yap');
      return;
    }
    if (!isLoading && !isAdmin) {
      router.push('/panel/hesabim');
    }
  }, [isAuthenticated, isLoading, isAdmin, router]);

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

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Ayarlar</h1>
        <p className="text-slate-600 mt-1">Sistem ayarlarını yönetin</p>
      </div>
      <OTPToggle />
    </div>
  );
}

