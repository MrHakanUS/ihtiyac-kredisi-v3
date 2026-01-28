import React from 'react';
import ApiTestComponent from '@/components/test/ApiTestComponent';

export const metadata = {
  title: 'API Test - İhtiyaç Kredisi',
  description: 'Test page for API integration functionality',
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Test page to verify API integration works correctly
 * This page should only be used in development
 */
export default function ApiTestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              API Integration Test
            </h1>
            <p className="text-gray-600">
              This page tests all API functionality including queries, mutations, and error handling.
            </p>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> This is a development test page. 
                Remove or restrict access in production.
              </p>
            </div>
          </div>
          
          <ApiTestComponent />
        </div>
      </div>
    </div>
  );
}