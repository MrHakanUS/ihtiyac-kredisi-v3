/**
 * API Endpoints Configuration
 * All API endpoints are defined here for centralized management
 */

const API_VERSION = '';

// Base paths
const BASE_PATHS = {
  API: '/api',
  DOCS: '/docs',
};

// Endpoint builder helper
const endpoint = (path) => `${BASE_PATHS.API}${path}`;

/**
 * API Endpoints
 */
export const ENDPOINTS = {
  // System endpoints
  SYSTEM: {
    ROOT: '/',
    STATUS: endpoint('/durum'),
    UPDATE: endpoint('/guncelle'),
  },

  // Interest rates endpoints
  INTEREST_RATES: {
    ALL: endpoint('/faiz-oranlari'),
    BY_BANK: (bankSlug) => endpoint(`/faiz-oranlari/${bankSlug}`),
  },

  // Banks endpoints
  BANKS: {
    LIST: endpoint('/bankalar'),
  },
};

/**
 * Endpoint metadata for additional configuration
 */
export const ENDPOINT_CONFIG = {
  // Cache times in milliseconds
  CACHE_TIME: {
    INTEREST_RATES: 5 * 60 * 1000, // 5 minutes
    BANKS: 60 * 60 * 1000, // 1 hour
    STATUS: 30 * 1000, // 30 seconds
  },

  // Stale times in milliseconds
  STALE_TIME: {
    INTEREST_RATES: 2 * 60 * 1000, // 2 minutes
    BANKS: 30 * 60 * 1000, // 30 minutes
    STATUS: 10 * 1000, // 10 seconds
  },

  // Retry configuration
  RETRY: {
    DEFAULT: 3,
    UPDATE: 1, // Don't retry update requests
  },

  // Refetch intervals in milliseconds
  REFETCH_INTERVAL: {
    STATUS: 60 * 1000, // 1 minute
    INTEREST_RATES: 5 * 60 * 1000, // 5 minutes
  },
};

/**
 * Helper to get full URL for an endpoint
 */
export const getEndpointUrl = (endpoint, params = {}) => {
  let url = endpoint;
  
  // Replace path parameters
  Object.keys(params).forEach((key) => {
    url = url.replace(`:${key}`, params[key]);
  });
  
  return url;
};

export default ENDPOINTS;