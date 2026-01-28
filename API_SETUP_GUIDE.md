# API Integration Setup Guide

## ⚠️ Quick Fix for Module Not Found Errors

The module not found errors you're seeing are because the dependencies haven't been installed yet. Here's how to fix it:

### 1. Install Dependencies (Choose one method)

#### Option A: Using the setup script
```bash
npm run setup:api
```

#### Option B: Manual installation
```bash
npm install @tanstack/react-query @tanstack/react-query-devtools axios
```

### 2. Verify Installation

After installation, your `package.json` should have these dependencies:
```json
"dependencies": {
  "@tanstack/react-query": "^5.51.1",
  "@tanstack/react-query-devtools": "^5.51.1",
  "axios": "^1.7.2",
  // ... other dependencies
}
```

### 3. Restart Development Server

After installing dependencies, restart your development server:
```bash
npm run dev
```

## 🚀 Quick Start

Once dependencies are installed:

1. **Test the integration**: Visit http://localhost:3000/api-test
2. **Use in your components**:

```jsx
import { useGetInterestRatesQuery } from "@/services/api/hooks";

function MyComponent() {
  const { data, isLoading, error } = useGetInterestRatesQuery();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      {data?.rates.map(bank => (
        <div key={bank.bankSlug}>
          {bank.bankName}: %{bank.ihtiyac}
        </div>
      ))}
    </div>
  );
}
```

## 📁 File Structure

```
services/api/
├── config/           # Configuration files
├── hooks/            # React Query hooks  
├── providers/        # API Provider
└── examples/         # Usage examples
```

## 🔧 Common Issues

### Issue: Module not found errors
**Solution**: Run `npm install @tanstack/react-query @tanstack/react-query-devtools axios`

### Issue: API connection errors
**Solution**: Check that the API server is running at http://46.62.153.78:8000

### Issue: CORS errors
**Solution**: The API should have CORS enabled. If not, you may need to use a proxy.

## 📚 Documentation

- Full documentation: [`services/api/README.md`](services/api/README.md)
- Usage examples: [`services/api/examples/usage.jsx`](services/api/examples/usage.jsx)
- Test component: [`components/test/ApiTestComponent.jsx`](components/test/ApiTestComponent.jsx)

## 🎯 Next Steps

1. Install dependencies: `npm install @tanstack/react-query @tanstack/react-query-devtools axios`
2. Restart your dev server: `npm run dev`
3. Visit http://localhost:3000/api-test to see it working
4. Start using the hooks in your components!