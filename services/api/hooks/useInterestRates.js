import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../config/axios';
import { ENDPOINTS, ENDPOINT_CONFIG } from '../config/endpoints';
import { queryKeys, mutationKeys } from '../config/queryKeys';
import { canonicalBankMap } from '@/constants/banks';

/**
 * Transform interest rates data for better usability
 */
const transformInterestRatesData = (data) => {
  if (!data?.data) return null;

  const { data: rates, guncelleme_tarihi, toplam_banka } = data;
  
  // Transform rates object to array for easier manipulation
  const ratesArray = Object.entries(rates).map(([bankSlug, rates]) => {
    // Get bank name from canonicalBankMap, fallback to formatted slug
    const bankInfo = canonicalBankMap[bankSlug];
    const bankName = bankInfo?.bankName || bankSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      bankSlug,
      bankName,
      ...rates,
    };
  });

  return {
    rates: ratesArray,
    ratesMap: rates,
    lastUpdate: guncelleme_tarihi,
    totalBanks: toplam_banka,
    timestamp: new Date().toISOString(),
  };
};

/**
 * Hook to get all interest rates
 */
export const useGetInterestRatesQuery = (options = {}) => {
  return useQuery({
    queryKey: queryKeys.interestRates.list(),
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.INTEREST_RATES.ALL);
      return transformInterestRatesData(data);
    },
    staleTime: ENDPOINT_CONFIG.STALE_TIME.INTEREST_RATES,
    cacheTime: ENDPOINT_CONFIG.CACHE_TIME.INTEREST_RATES,
    refetchInterval: ENDPOINT_CONFIG.REFETCH_INTERVAL.INTEREST_RATES,
    ...options,
  });
};

/**
 * Hook to get interest rates for a specific bank
 */
export const useGetBankInterestRateQuery = (bankSlug, options = {}) => {
  return useQuery({
    queryKey: queryKeys.interestRates.detail(bankSlug),
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.INTEREST_RATES.BY_BANK(bankSlug));
      
      // Get bank name from canonicalBankMap, fallback to API data or formatted slug
      const bankInfo = canonicalBankMap[bankSlug];
      const bankName = bankInfo?.bankName ||
                      data.banka_adi?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) ||
                      bankSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      return {
        ...data,
        bankSlug,
        bankName,
        lastUpdate: data.guncelleme_tarihi,
      };
    },
    enabled: !!bankSlug,
    staleTime: ENDPOINT_CONFIG.STALE_TIME.INTEREST_RATES,
    cacheTime: ENDPOINT_CONFIG.CACHE_TIME.INTEREST_RATES,
    ...options,
  });
};

/**
 * Hook to manually update interest rates
 */
export const useUpdateInterestRatesMutation = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: mutationKeys.system.update(),
    mutationFn: async () => {
      const { data } = await apiClient.post(ENDPOINTS.SYSTEM.UPDATE);
      return data;
    },
    onSuccess: (data) => {
      // Invalidate interest rates queries to refetch with new data
      queryClient.invalidateQueries({ queryKey: queryKeys.interestRates.all() });
      
      // Also invalidate system status
      queryClient.invalidateQueries({ queryKey: queryKeys.system.status() });

      // Call custom onSuccess if provided
      options.onSuccess?.(data);
    },
    retry: ENDPOINT_CONFIG.RETRY.UPDATE,
    ...options,
  });
};

/**
 * Hook to get filtered interest rates by loan type
 */
export const useGetInterestRatesByType = (loanType = 'all', options = {}) => {
  const { data: allRates, ...queryResult } = useGetInterestRatesQuery(options);

  const filteredData = allRates ? {
    ...allRates,
    rates: allRates.rates.filter(bank => {
      if (loanType === 'all') return true;
      return bank[loanType] !== null;
    }).sort((a, b) => {
      if (loanType === 'all') return 0;
      return (a[loanType] || Infinity) - (b[loanType] || Infinity);
    }),
  } : null;

  return {
    data: filteredData,
    ...queryResult,
  };
};

/**
 * Hook to compare interest rates between banks
 */
export const useCompareInterestRates = (bankSlugs = [], options = {}) => {
  const { data: allRates, ...queryResult } = useGetInterestRatesQuery(options);

  const comparisonData = allRates && bankSlugs.length > 0 ? {
    banks: bankSlugs.map(slug => {
      const rateData = allRates.ratesMap[slug];
      if (!rateData) return null;
      
      // Get bank name from canonicalBankMap, fallback to formatted slug
      const bankInfo = canonicalBankMap[slug];
      const bankName = bankInfo?.bankName || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      return {
        ...rateData,
        bankSlug: slug,
        bankName,
      };
    }).filter(Boolean),
    lastUpdate: allRates.lastUpdate,
  } : null;

  return {
    data: comparisonData,
    ...queryResult,
  };
};