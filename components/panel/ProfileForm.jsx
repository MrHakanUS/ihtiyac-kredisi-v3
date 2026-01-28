'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userUpdateSchema } from '@/lib/validations/user';
import { useCurrentUser, useUpdateUser } from '@/hooks/useUsers';
import { formatPhone } from '@/lib/utils/phone';
import toast from 'react-hot-toast';

export default function ProfileForm() {
  const { data: userData, isLoading: isLoadingUser } = useCurrentUser();
  const updateUser = useUpdateUser();
  const user = userData?.user;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      firstName: user?.first_name || '',
      lastName: user?.last_name || '',
      email: user?.email || '',
    },
  });

  // Reset form when user data loads
  if (user && !isLoadingUser) {
    reset({
      firstName: user.first_name || '',
      lastName: user.last_name || '',
      email: user.email || '',
    });
  }

  const onSubmit = async (data) => {
    try {
      await updateUser.mutateAsync({
        userId: user.id,
        userData: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email || null,
        },
      });
    } catch (error) {
      // Error is handled by mutation
    }
  };

  if (isLoadingUser) {
    return <div className="text-center py-8">Yükleniyor...</div>;
  }

  if (!user) {
    return <div className="text-center py-8 text-red-600">Kullanıcı bulunamadı</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-slate-50 p-4 rounded-lg">
        <p className="text-sm text-slate-600 mb-1">Telefon Numarası</p>
        <p className="font-medium text-slate-900">{formatPhone(user.phone)}</p>
        <p className="text-xs text-slate-500 mt-1">Telefon numarası değiştirilemez</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
            Ad
          </label>
          <input
            id="firstName"
            type="text"
            {...register('firstName')}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
            Soyad
          </label>
          <input
            id="lastName"
            type="text"
            {...register('lastName')}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="bg-slate-50 p-4 rounded-lg">
        <p className="text-sm text-slate-600 mb-1">Rol</p>
        <p className="font-medium text-slate-900 capitalize">{user.role}</p>
      </div>

      <button
        type="submit"
        disabled={updateUser.isPending}
        className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {updateUser.isPending ? 'Güncelleniyor...' : 'Güncelle'}
      </button>
    </form>
  );
}

