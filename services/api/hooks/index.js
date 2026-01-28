/**
 * Central export file for all API hooks
 * Import all hooks from here for better organization
 */

// Interest Rates hooks
export {
  useGetInterestRatesQuery,
  useGetBankInterestRateQuery,
  useUpdateInterestRatesMutation,
  useGetInterestRatesByType,
  useCompareInterestRates,
} from './useInterestRates';

// Banks hooks
export {
  useGetBanksQuery,

} from './useBanks';

// System hooks
export {
  useGetSystemStatusQuery,
  useGetSystemInfoQuery,
  useSystemHealthMonitor,
  useGetSystemStatistics,
} from './useSystem';

// Re-export common utilities
export { queryClient, QueryClientProvider, ReactQueryDevtools } from '../config/queryClient';
export { queryKeys, mutationKeys } from '../config/queryKeys';
export { ENDPOINTS } from '../config/endpoints';
