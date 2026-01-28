/**
 * Centralized query keys for React Query
 * Using factory pattern for consistent key generation
 */

export const queryKeys = {
  // Base keys
  all: ['api'],
  
  // Interest rates keys
  interestRates: {
    all: () => [...queryKeys.all, 'interest-rates'],
    list: () => [...queryKeys.interestRates.all(), 'list'],
    detail: (bankSlug) => [...queryKeys.interestRates.all(), 'detail', bankSlug],
  },
  
  // Banks keys
  banks: {
    all: () => [...queryKeys.all, 'banks'],
    list: () => [...queryKeys.banks.all(), 'list'],
  },
  
  // System keys
  system: {
    all: () => [...queryKeys.all, 'system'],
    status: () => [...queryKeys.system.all(), 'status'],
    info: () => [...queryKeys.system.all(), 'info'],
  },
};

/**
 * Mutation keys for organizing mutations
 */
export const mutationKeys = {
  // System mutations
  system: {
    update: () => ['system', 'update'],
  },
};

export default queryKeys;