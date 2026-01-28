import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../config/axios';
import { ENDPOINTS } from '../config/endpoints';
import { queryKeys } from '../config/queryKeys';
import { resolveBankBySlug } from '@/constants/banks';

/**
 * Hook to get all banks
 */
export const useGetBanksQuery = (options = {}) => {
  return useQuery({
    queryKey: queryKeys.banks.list(),
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.BANKS.LIST);
      const banks = data.bankalar.map(slug => {
        const { bank } = resolveBankBySlug({ slug });
        return bank ? { name: bank.bankName, logo: bank.logo } : { name: slug, logo: null };
      });
      return {
        total: data.toplam,
        banks: banks.sort((a, b) => a.name.localeCompare(b.name)),
      };
    },
    ...options,
  });
};