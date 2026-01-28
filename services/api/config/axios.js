import axios from 'axios';

// API Base URL is removed. Requests will be sent to the same origin.
// Next.js rewrites will proxy them to the actual API.

// Create axios instance with default config
const axiosInstance = axios.create({
  timeout: 30000, // 30 seconds
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request in development
    if (process.env.NODE_ENV === 'development') { 
    }

    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') { 
    }

    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Handle unauthorized
          if (typeof window !== 'undefined') {
            localStorage.removeItem('authToken');
            // Redirect to login if needed
            // window.location.href = '/giris';
          }
          break;
        case 403:
          console.error('Forbidden: You don\'t have permission to access this resource');
          break;
        case 404:
          console.error('Not Found: The requested resource doesn\'t exist');
          break;
        case 429:
          console.error('Too Many Requests: Rate limit exceeded');
          break;
        case 500:
          console.error('Server Error: Internal server error occurred');
          break;
        default:
          console.error(`API Error [${status}]:`, data?.message || error.message);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error: No response received', error.request);
    } else {
      // Something else happened
      console.error('API Error:', error.message);
    }

    return Promise.reject(error);
  }
);

// Helper functions for common request types
export const apiClient = {
  get: (url, config) => axiosInstance.get(url, config),
  post: (url, data, config) => axiosInstance.post(url, data, config),
  put: (url, data, config) => axiosInstance.put(url, data, config),
  patch: (url, data, config) => axiosInstance.patch(url, data, config),
  delete: (url, config) => axiosInstance.delete(url, config),
};

export default axiosInstance;