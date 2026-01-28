'use client';

import React from 'react';
import {
  useGetInterestRatesQuery,
  useGetBanksQuery,
  useGetSystemStatusQuery,
  useUpdateInterestRatesMutation,
} from '@/services/api/hooks';

/**
 * Test component to verify API integration works correctly
 * This component demonstrates all major API functionality
 */
export const ApiTestComponent = () => {
  const [selectedBank, setSelectedBank] = React.useState('');
  
  // Test queries
  const { 
    data: interestRates, 
    isLoading: ratesLoading, 
    error: ratesError,
    refetch: refetchRates 
  } = useGetInterestRatesQuery();
  
  const { 
    data: banks, 
    isLoading: banksLoading, 
    error: banksError 
  } = useGetBanksQuery();
  
  const { 
    data: systemStatus, 
    isLoading: statusLoading 
  } = useGetSystemStatusQuery();
  
  // Test mutation
  const updateMutation = useUpdateInterestRatesMutation({
    onSuccess: (data) => {
      alert(`Rates updated successfully! ${data.guncelleme_tarihi}`);
    },
    onError: (error) => {
      alert(`Update failed: ${error.message}`);
    },
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>API Integration Test</h1>
      
      {/* System Status */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>System Status</h2>
        {statusLoading ? (
          <p>Loading system status...</p>
        ) : (
          <div>
            <p><strong>Status:</strong> {systemStatus?.status}</p>
            <p><strong>Active:</strong> {systemStatus?.isActive ? 'Yes' : 'No'}</p>
            <p><strong>Total Banks:</strong> {systemStatus?.totalBanks}</p>
            <p><strong>Last Update:</strong> {systemStatus?.lastUpdate}</p>
            <p><strong>Message:</strong> {systemStatus?.message}</p>
          </div>
        )}
      </div>

      {/* Banks List */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>Banks ({banks?.total || 0})</h2>
        {banksLoading ? (
          <p>Loading banks...</p>
        ) : banksError ? (
          <p style={{ color: 'red' }}>Error loading banks: {banksError.message}</p>
        ) : (
          <div>
            <select 
              value={selectedBank} 
              onChange={(e) => setSelectedBank(e.target.value)}
              style={{ marginBottom: '10px', padding: '5px' }}
            >
              <option value="">Select a bank...</option>
              {banks?.banks.map((bank) => (
                <option key={bank.slug} value={bank.slug}>
                  {bank.displayName}
                </option>
              ))}
            </select>
            <p>Selected: {selectedBank || 'None'}</p>
          </div>
        )}
      </div>

      {/* Interest Rates */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>Interest Rates</h2>
        <div style={{ marginBottom: '10px' }}>
          <button 
            onClick={() => refetchRates()}
            style={{ marginRight: '10px', padding: '5px 10px' }}
          >
            Refresh Rates
          </button>
          <button
            onClick={() => updateMutation.mutate()}
            disabled={updateMutation.isLoading}
            style={{ padding: '5px 10px' }}
          >
            {updateMutation.isLoading ? 'Updating...' : 'Update Rates'}
          </button>
        </div>
        
        {ratesLoading ? (
          <p>Loading interest rates...</p>
        ) : ratesError ? (
          <p style={{ color: 'red' }}>Error loading rates: {ratesError.message}</p>
        ) : (
          <div>
            <p><strong>Last Update:</strong> {interestRates?.lastUpdate}</p>
            <p><strong>Total Banks:</strong> {interestRates?.totalBanks}</p>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f5f5' }}>
                  <th style={{ border: '1px solid #ccc', padding: '8px' }}>Bank</th>
                  <th style={{ border: '1px solid #ccc', padding: '8px' }}>İhtiyaç</th>
                  <th style={{ border: '1px solid #ccc', padding: '8px' }}>Konut</th>
                  <th style={{ border: '1px solid #ccc', padding: '8px' }}>Taşıt</th>
                </tr>
              </thead>
              <tbody>
                {interestRates?.rates.slice(0, 10).map((bank) => (
                  <tr key={bank.bankSlug}>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                      {bank.bankName}
                    </td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                      {bank.ihtiyac ? `%${bank.ihtiyac}` : 'N/A'}
                    </td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                      {bank.konut ? `%${bank.konut}` : 'N/A'}
                    </td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                      {bank.tasit ? `%${bank.tasit}` : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {interestRates?.rates.length > 10 && (
              <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
                Showing first 10 of {interestRates.rates.length} banks
              </p>
            )}
          </div>
        )}
      </div>

      {/* API Status Summary */}
      <div style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
        <h2>API Integration Status</h2>
        <ul>
          <li>
            <strong>System Status Query:</strong> 
            <span style={{ color: statusLoading ? 'orange' : systemStatus ? 'green' : 'red' }}>
              {statusLoading ? ' Loading...' : systemStatus ? ' ✓ Working' : ' ✗ Failed'}
            </span>
          </li>
          <li>
            <strong>Banks Query:</strong> 
            <span style={{ color: banksLoading ? 'orange' : banks ? 'green' : 'red' }}>
              {banksLoading ? ' Loading...' : banks ? ' ✓ Working' : ' ✗ Failed'}
            </span>
          </li>
          <li>
            <strong>Interest Rates Query:</strong> 
            <span style={{ color: ratesLoading ? 'orange' : interestRates ? 'green' : 'red' }}>
              {ratesLoading ? ' Loading...' : interestRates ? ' ✓ Working' : ' ✗ Failed'}
            </span>
          </li>
          <li>
            <strong>Update Mutation:</strong> 
            <span style={{ color: updateMutation.isLoading ? 'orange' : 'blue' }}>
              {updateMutation.isLoading ? ' Running...' : ' Ready'}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ApiTestComponent;