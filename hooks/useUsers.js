'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getUserList, getUserById, createUser, updateUser, deleteUser } from '@/app/api/web/services';

// Fetch users
export function useUsers(filters = {}) {
  return useQuery({
    queryKey: ['users', filters],
    queryFn: async () => {
      return await getUserList(filters);
    },
  });
}

// Fetch single user
export function useUser(userId) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      return await getUserById(userId);
    },
    enabled: !!userId,
  });
}

// Fetch current user
export function useCurrentUser() {
  return useQuery({
    queryKey: ['user', 'me'],
    queryFn: async () => {
      const response = await fetch('/api/users/me');
      if (!response.ok) {
        throw new Error('Kullanıcı bilgileri getirilemedi');
      }
      return response.json();
    },
  });
}

// Create user mutation
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData) => {
      return await createUser(userData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('Kullanıcı başarıyla oluşturuldu');
    },
    onError: (error) => {
      toast.error(error.message || 'Kullanıcı oluşturulamadı');
    },
  });
}

// Update user mutation
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, userData }) => {
      return await updateUser({ id: userId, ...userData });
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['user', variables.userId] });
      queryClient.invalidateQueries({ queryKey: ['user', 'me'] });
      toast.success('Kullanıcı başarıyla güncellendi');
    },
    onError: (error) => {
      toast.error(error.message || 'Kullanıcı güncellenemedi');
    },
  });
}

// Delete user mutation
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId) => {
      return await deleteUser(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('Kullanıcı başarıyla silindi');
    },
    onError: (error) => {
      toast.error(error.message || 'Kullanıcı silinemedi');
    },
  });
}

