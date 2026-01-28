# API Services Documentation

This directory contains all API-related code following enterprise-grade patterns and best practices.

## 📁 Directory Structure

```
services/api/
├── config/              # Configuration files
│   ├── axios.js        # Axios instance with interceptors
│   ├── endpoints.js    # API endpoints configuration
│   ├── queryClient.js  # React Query client setup
│   └── queryKeys.js    # Centralized query keys
├── hooks/              # Custom React Query hooks
│   ├── index.js        # Central export file
│   ├── useInterestRates.js  # Interest rate hooks
│   ├── useBanks.js     # Bank-related hooks
│   └── useSystem.js    # System status hooks
├── providers/          # React providers
│   └── ApiProvider.jsx # Query client provider wrapper
└── examples/           # Usage examples
    └── usage.jsx       # Component examples
```

## 🚀 Quick Start

1. **Wrap your app with ApiProvider:**
```jsx
import { ApiProvider } from '@/services/api/providers/ApiProvider';

function App() {
  return (
    <ApiProvider>
      {/* Your app components */}
    </ApiProvider>
  );
}
```

2. **Use hooks in your components:**
```jsx
import { useGetInterestRatesQuery } from '@/services/api/hooks';

function MyComponent() {
  const { data, isLoading, error } = useGetInterestRatesQuery();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{/* Render your data */}</div>;
}
```

## 📋 Available Hooks

### Interest Rates
- `useGetInterestRatesQuery()` - Get all interest rates
- `useGetBankInterestRateQuery(bankSlug)` - Get rates for specific bank
- `useUpdateInterestRatesMutation()` - Manually update rates
- `useGetInterestRatesByType(loanType)` - Filter rates by loan type
- `useCompareInterestRates(bankSlugs[])` - Compare multiple banks

### Banks
- `useGetBanksQuery()` - Get all banks list
- `useSearchBanks(searchTerm)` - Search banks by name
- `useGetBankDetails(bankSlug)` - Get bank details with rates
- `useGetBanksByLoanType()` - Get banks grouped by loan availability

### System
- `useGetSystemStatusQuery()` - Get system status
- `useGetSystemInfoQuery()` - Get API info
- `useSystemHealthMonitor()` - Monitor system health
- `useGetSystemStatistics()` - Get comprehensive statistics

## 🛠️ Configuration

### Environment Variables
```env
NEXT_PUBLIC_API_BASE_URL=http://46.62.153.78:8000
NEXT_PUBLIC_ENABLE_API_DEVTOOLS=true
NEXT_PUBLIC_ENABLE_API_LOGGING=true
```

### Query Configuration
Configure cache and stale times in `config/endpoints.js`:
```js
CACHE_TIME: {
  INTEREST_RATES: 5 * 60 * 1000, // 5 minutes
  BANKS: 60 * 60 * 1000, // 1 hour
},
```

## 🔄 Error Handling

All hooks include built-in error handling:
- Automatic retry with exponential backoff
- Network error detection
- 401/403 handling with auth cleanup
- Comprehensive error logging

## 📊 Development Tools

React Query DevTools are included in development mode:
- View query cache
- Trigger manual refetches
- Monitor query states
- Debug performance

## 🎯 Best Practices

1. **Use specific hooks** instead of generic queries
2. **Handle loading and error states** in components
3. **Configure stale times** based on data requirements
4. **Use mutations** for data modifications
5. **Leverage query invalidation** for cache updates

## 📝 Examples

See `examples/usage.jsx` for comprehensive examples of:
- Basic data fetching
- Error handling
- Mutations
- Search and filtering
- Real-time monitoring
- Performance optimization

## 🔧 API Endpoints

The system integrates with the following endpoints:

### System Endpoints
- `GET /` - System information
- `GET /api/durum` - System status
- `POST /api/guncelle` - Manual update

### Interest Rates
- `GET /api/faiz-oranlari` - All interest rates
- `GET /api/faiz-oranlari/{bankSlug}` - Specific bank rates

### Banks
- `GET /api/bankalar` - All banks list

## 🚀 Performance Features

- **Smart Caching**: Configurable cache and stale times
- **Background Refetching**: Keep data fresh automatically
- **Query Deduplication**: Prevent duplicate requests
- **Optimistic Updates**: Immediate UI feedback
- **Error Recovery**: Automatic retry with backoff

## 🔒 Security

- **Request Interceptors**: Automatic auth token injection
- **Response Validation**: Data transformation and validation
- **Error Sanitization**: Safe error messages for users
- **CORS Handling**: Proper cross-origin request setup

## 📈 Monitoring

- **Request/Response Logging**: Development debugging
- **Performance Metrics**: Query timing and success rates
- **Error Tracking**: Comprehensive error reporting
- **Health Monitoring**: System status tracking