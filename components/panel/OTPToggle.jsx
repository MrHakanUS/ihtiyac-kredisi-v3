'use client';

import { useOTPSettings, useUpdateOTPSettings } from '@/hooks/useOTPSettings';
import { FiLoader } from 'react-icons/fi';

export default function OPTToggle() {
  const { data, isLoading } = useOTPSettings();
  const updateSettings = useUpdateOTPSettings();

  const enabled = data?.settings?.enabled || false;

  const handleToggle = async () => {
    await updateSettings.mutateAsync(!enabled);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <FiLoader className="animate-spin" size={20} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-1">OTP Sistemi</h3>
          <p className="text-sm text-slate-600">
            OTP sistemi {enabled ? 'açık' : 'kapalı'}. {enabled ? 'Kullanıcılar giriş yaparken OTP doğrulaması yapılacak.' : 'Kullanıcılar normal şekilde giriş yapabilecek.'}
          </p>
        </div>
        <button
          onClick={handleToggle}
          disabled={updateSettings.isPending}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? 'bg-primary' : 'bg-slate-300'
          } ${updateSettings.isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}

