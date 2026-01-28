'use client';

import React from 'react';
import {
  useGetInterestRatesQuery,
  useGetInterestRatesByType,
  useUpdateInterestRatesMutation,
  useGetSystemStatusQuery,
} from '@/services/api/hooks';

/**
 * Production-ready Interest Rates Component
 * Displays current interest rates with filtering and update functionality
 */
export const InterestRatesComponent = () => {
  const [selectedLoanType, setSelectedLoanType] = React.useState('all');
  const [showUpdateButton, setShowUpdateButton] = React.useState(false);

  // Queries
  const { 
    data: interestRates, 
    isLoading, 
    error, 
    refetch 
  } = useGetInterestRatesByType(selectedLoanType);

  const { data: systemStatus } = useGetSystemStatusQuery();

  // Mutation for updating rates
  const updateMutation = useUpdateInterestRatesMutation({
    onSuccess: () => {
      // Show success message
      setShowUpdateButton(false);
    },
    onError: (error) => {
      console.error('Failed to update rates:', error);
    },
  });

  const loanTypes = [
    { value: 'all', label: 'Tüm Krediler' },
    { value: 'ihtiyac', label: 'İhtiyaç Kredisi' },
    { value: 'konut', label: 'Konut Kredisi' },
    { value: 'tasit', label: 'Taşıt Kredisi' },
  ];

  const formatDate = (dateString) => {
    if (!dateString) return 'Bilinmiyor';
    return new Date(dateString).toLocaleString('tr-TR');
  };

  const formatRate = (rate) => {
    if (rate === null || rate === undefined) return '-';
    return `%${rate}`;
  };

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">
          Faiz Oranları Yüklenemedi
        </h3>
        <p className="text-red-600 mb-4">
          {error.message || 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'}
        </p>
        <button
          onClick={() => refetch()}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Güncel Faiz Oranları
          </h2>
          <p className="text-gray-600">
            Son güncelleme: {formatDate(interestRates?.lastUpdate)}
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {/* System Status */}
          <div className="flex items-center space-x-2">
            <div 
              className={`w-3 h-3 rounded-full ${
                systemStatus?.isActive ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
            <span className="text-sm text-gray-600">
              {systemStatus?.isActive ? 'Aktif' : 'Pasif'}
            </span>
          </div>

          {/* Update Button */}
          {showUpdateButton && (
            <button
              onClick={() => updateMutation.mutate()}
              disabled={updateMutation.isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {updateMutation.isLoading ? 'Güncelleniyor...' : 'Güncelle'}
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Kredi Türü
        </label>
        <select
          value={selectedLoanType}
          onChange={(e) => setSelectedLoanType(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {loanTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Faiz oranları yükleniyor...</span>
        </div>
      )}

      {/* Interest Rates Table */}
      {!isLoading && interestRates && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Banka
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İhtiyaç Kredisi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Konut Kredisi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Taşıt Kredisi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {interestRates.rates.map((bank, index) => (
                <tr key={bank.bankSlug} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {bank.bankName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${bank.ihtiyac ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                      {formatRate(bank.ihtiyac)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${bank.konut ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                      {formatRate(bank.konut)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${bank.tasit ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                      {formatRate(bank.tasit)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && interestRates && interestRates.rates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            Seçilen kredi türü için faiz oranı bulunamadı.
          </p>
        </div>
      )}

      {/* Footer */}
      {!isLoading && interestRates && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
            <p>
              Toplam {interestRates.rates.length} banka gösteriliyor
            </p>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <button
                onClick={() => refetch()}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Yenile
              </button>
              <button
                onClick={() => setShowUpdateButton(!showUpdateButton)}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {showUpdateButton ? 'Güncelleme İptal' : 'Manuel Güncelle'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterestRatesComponent;