import { QueryClient } from '@tanstack/react-query';

/**
 * Default query client configuration
 */
export const defaultQueryConfig = {
  queries: {
    // Retry failed requests
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors (client errors)
      if (error?.response?.status >= 400 && error?.response?.status < 500) {
        return false;
      }
      // Retry up to 3 times for other errors
      return failureCount < 3;
    },
    // Retry delay exponential backoff
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    // Consider data stale after 2 minutes
    staleTime: 2 * 60 * 1000,
    // Keep data in cache for 10 minutes
    cacheTime: 10 * 60 * 1000,
    // Refetch on window focus
    refetchOnWindowFocus: false,
    // Refetch on reconnect
    refetchOnReconnect: 'always',
  },
  mutations: {
    // Retry mutations once
    retry: 1,
    retryDelay: 1000,
  },
};

/**
 * Create and export the query client
 */
export const queryClient = new QueryClient({
  defaultOptions: defaultQueryConfig,
});

/**
 * Query client provider wrapper component
 */
export { QueryClientProvider } from '@tanstack/react-query';

/**
 * Development tools
 */
export { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default queryClient;