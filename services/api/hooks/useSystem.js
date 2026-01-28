import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../config/axios';
import { ENDPOINTS, ENDPOINT_CONFIG } from '../config/endpoints';
import { queryKeys } from '../config/queryKeys';

/**
 * Transform system status data
 */
const transformSystemStatus = (data) => {
  if (!data) return null;

  return {
    status: data.status,
    isActive: data.status === 'aktif',
    lastUpdate: data.son_guncelleme,
    totalBanks: data.toplam_banka,
    message: data.mesaj,
    timestamp: new Date().toISOString(),
  };
};

/**
 * Transform system info data
 */
const transformSystemInfo = (data) => {
  if (!data) return null;

  return {
    message: data.mesaj,
    version: data.version,
    endpoints: data.endpoints,
    timestamp: new Date().toISOString(),
  };
};

/**
 * Hook to get system status
 */
export const useGetSystemStatusQuery = (options = {}) => {
  return useQuery({
    queryKey: queryKeys.system.status(),
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.SYSTEM.STATUS);
      return transformSystemStatus(data);
    },
    staleTime: ENDPOINT_CONFIG.STALE_TIME.STATUS,
    cacheTime: ENDPOINT_CONFIG.CACHE_TIME.STATUS,
    refetchInterval: ENDPOINT_CONFIG.REFETCH_INTERVAL.STATUS,
    ...options,
  });
};

/**
 * Hook to get system info (root endpoint)
 */
export const useGetSystemInfoQuery = (options = {}) => {
  return useQuery({
    queryKey: queryKeys.system.info(),
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.SYSTEM.ROOT);
      return transformSystemInfo(data);
    },
    staleTime: 60 * 60 * 1000, // 1 hour
    cacheTime: 60 * 60 * 1000, // 1 hour
    ...options,
  });
};

/**
 * Hook to monitor system health
 * Combines status and automatic refetch
 */
export const useSystemHealthMonitor = (options = {}) => {
  const statusQuery = useGetSystemStatusQuery({
    refetchInterval: 30000, // Check every 30 seconds
    refetchIntervalInBackground: true,
    ...options,
  });

  const isHealthy = statusQuery.data?.isActive && !statusQuery.isError;
  const healthStatus = statusQuery.isError 
    ? 'error' 
    : statusQuery.data?.isActive 
      ? 'healthy' 
      : 'degraded';

  return {
    ...statusQuery,
    isHealthy,
    healthStatus,
    systemInfo: statusQuery.data,
  };
};

/**
 * Hook to get system statistics
 * Combines multiple data sources
 */
export const useGetSystemStatistics = (options = {}) => {
  const statusQuery = useGetSystemStatusQuery(options);
  const infoQuery = useGetSystemInfoQuery(options);
  const banksQuery = useQuery({
    queryKey: queryKeys.banks.list(),
    queryFn: async () => {
      const { data } = await apiClient.get(ENDPOINTS.BANKS.LIST);
      return data;
    },
    ...options,
  });

  const isLoading = statusQuery.isLoading || infoQuery.isLoading || banksQuery.isLoading;
  const isError = statusQuery.isError || infoQuery.isError || banksQuery.isError;

  const statistics = !isLoading && !isError ? {
    system: {
      status: statusQuery.data?.status,
      version: infoQuery.data?.version,
      lastUpdate: statusQuery.data?.lastUpdate,
    },
    banks: {
      total: banksQuery.data?.toplam || 0,
      active: statusQuery.data?.totalBanks || 0,
    },
    api: {
      endpoints: infoQuery.data?.endpoints,
      health: statusQuery.data?.isActive ? 'healthy' : 'degraded',
    },
  } : null;

  return {
    data: statistics,
    isLoading,
    isError,
    refetch: () => {
      statusQuery.refetch();
      infoQuery.refetch();
      banksQuery.refetch();
    },
  };
};