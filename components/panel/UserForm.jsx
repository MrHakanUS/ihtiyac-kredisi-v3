'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userCreateSchema, userUpdateAdminSchema } from '@/lib/validations/user';
import { useCreateUser, useUpdateUser } from '@/hooks/useUsers';
import { formatPhone, normalizePhone } from '@/lib/utils/phone';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function UserForm({ user, onSuccess }) {
  const isEdit = !!user;
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(isEdit ? userUpdateAdminSchema : userCreateSchema),
    defaultValues: isEdit
      ? {
        phone: user.phone ? formatPhone(user.phone) : '',
        email: user.email || '',
        firstName: user.first_name || '',
        lastName: user.last_name || '',
        role: user.role || 'user',
        status: user.status || 'active',
        password: '',
      }
      : {
        phone: '',
        email: '',
        firstName: '',
        lastName: '',
        role: 'user',
        status: 'active',
        password: '',
      },
  });

  const phoneValue = watch('phone');

  // Format phone as user types
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    let phoneToFormat = value;

    if (value.startsWith('90') && value.length > 2) {
      phoneToFormat = value.slice(2);
    } else if (value.startsWith('0')) {
      phoneToFormat = value.slice(1);
    }

    // Strict check: Must start with 5
    if (phoneToFormat.length > 0 && !phoneToFormat.startsWith('5')) {
      return; // Do not update state if it doesn't start with 5
    }

    if (phoneToFormat.length <= 10) {
      const formatted = formatPhone(phoneToFormat);
      setValue('phone', formatted);
    }
  };

  // Reset form when user changes
  useEffect(() => {
    if (isEdit && user) {
      reset({
        phone: user.phone ? formatPhone(user.phone) : '',
        email: user.email || '',
        firstName: user.first_name || '',
        lastName: user.last_name || '',
        role: user.role || 'user',
        status: user.status || 'active',
        password: '',
      });
    }
  }, [user, isEdit, reset]);

  const onSubmit = async (data) => {
    try {
      // Format phone number properly
      let phoneNumber = normalizePhone(data.phone);
      // Remove country code if present (90)
      if (phoneNumber.startsWith('90') && phoneNumber.length === 12) {
        phoneNumber = phoneNumber.slice(2);
      }

      if (isEdit) {
        const updateData = {
          id: user.id,
          phone: phoneNumber,
          email: data.email || null,
          firstName: data.firstName,
          lastName: data.lastName,
          role: data.role,
          status: data.status,
        };

        // Only include password if provided
        if (data.password && data.password.trim() !== '') {
          updateData.password = data.password;
        }

        await updateUser.mutateAsync({
          userId: user.id,
          userData: updateData,
        });
      } else {
        await createUser.mutateAsync({
          phone: phoneNumber,
          email: data.email || null,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          role: data.role,
          status: data.status,
        });
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      // Error is handled by mutation
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
            Ad <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            {...register('firstName')}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
            Soyad <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            {...register('lastName')}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
          Telefon Numarası <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="text"
          {...register('phone')}
          onChange={handlePhoneChange}
          value={phoneValue || ''}
          placeholder="5XX XXX XX XX"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          placeholder="ornek@email.com"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {!isEdit && (
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
            Şifre <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="En az 6 karakter"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>
      )}

      {isEdit && (
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
            Yeni Şifre (Değiştirmek istemiyorsanız boş bırakın)
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="Yeni şifre"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
            Rol <span className="text-red-500">*</span>
          </label>
          <select
            id="role"
            {...register('role')}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          >
            <option value="user">Kullanıcı</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-2">
            Durum <span className="text-red-500">*</span>
          </label>
          <select
            id="status"
            {...register('status')}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          >
            <option value="active">Aktif</option>
            <option value="inactive">Pasif</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
          )}
        </div>
      </div>

      <div className="flex gap-2 justify-end pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onSuccess}
          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
        >
          İptal
        </button>
        <button
          type="submit"
          disabled={createUser.isPending || updateUser.isPending}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {(createUser.isPending || updateUser.isPending)
            ? 'Kaydediliyor...'
            : isEdit
              ? 'Güncelle'
              : 'Oluştur'}
        </button>
      </div>
    </form>
  );
}

