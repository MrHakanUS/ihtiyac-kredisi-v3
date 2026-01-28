'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// Fetch OTP settings
export function useOTPSettings() {
  return useQuery({
    queryKey: ['otpSettings'],
    queryFn: async () => {
      const response = await fetch('/api/settings/otp');
      if (!response.ok) {
        throw new Error('OTP ayarları getirilemedi');
      }
      return response.json();
    },
  });
}

// Update OTP settings mutation
export function useUpdateOTPSettings() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (enabled) => {
      const response = await fetch('/api/settings/otp', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'OTP ayarları güncellenemedi');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['otpSettings'] });
      toast.success('OTP ayarları güncellendi');
    },
    onError: (error) => {
      toast.error(error.message || 'OTP ayarları güncellenemedi');
    },
  });
}

