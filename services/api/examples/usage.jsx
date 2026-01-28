/**
 * Example usage of API hooks in components
 * These are practical examples showing best practices
 */

import React from 'react';
import {
  useGetInterestRatesQuery,
  useGetBankInterestRateQuery,
  useUpdateInterestRatesMutation,
  useGetBanksQuery,
  useGetSystemStatusQuery,
  useCompareInterestRates,
  useGetInterestRatesByType,
} from '@/services/api/hooks';

// Example 1: Display all interest rates
export const InterestRatesTable = () => {
  const { data, isLoading, error, refetch } = useGetInterestRatesQuery({
    onError: (error) => {
      console.error('Failed to fetch interest rates:', error);
    },
  });

  if (isLoading) return <div>Loading interest rates...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Interest Rates (Last updated: {data?.lastUpdate})</h2>
      <button onClick={() => refetch()}>Refresh</button>
      
      <table>
        <thead>
          <tr>
            <th>Bank</th>
            <th>İhtiyaç</th>
            <th>Konut</th>
            <th>Taşıt</th>
          </tr>
        </thead>
        <tbody>
          {data?.rates.map((bank) => (
            <tr key={bank.bankSlug}>
              <td>{bank.bankName}</td>
              <td>{bank.ihtiyac || 'N/A'}</td>
              <td>{bank.konut || 'N/A'}</td>
              <td>{bank.tasit || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example 2: Bank selector with search
export const BankSelector = ({ onSelectBank }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { data, isLoading } = useGetBanksQuery();

  const filteredBanks = data?.banks.filter(bank =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div>
      <input
        type="text"
        placeholder="Search banks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {isLoading ? (
        <div>Loading banks...</div>
      ) : (
        <ul>
          {filteredBanks.map((bank) => (
            <li key={bank.slug}>
              <button onClick={() => onSelectBank(bank.slug)}>
                {bank.displayName}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Example 3: Update interest rates with mutation
export const UpdateRatesButton = () => {
  const updateMutation = useUpdateInterestRatesMutation({
    onSuccess: (data) => {
      alert(`Interest rates updated successfully at ${data.guncelleme_tarihi}`);
    },
    onError: (error) => {
      alert(`Failed to update rates: ${error.message}`);
    },
  });

  return (
    <button
      onClick={() => updateMutation.mutate()}
      disabled={updateMutation.isLoading}
    >
      {updateMutation.isLoading ? 'Updating...' : 'Update Interest Rates'}
    </button>
  );
};

// Example 4: System status monitor
export const SystemStatusBadge = () => {
  const { data, isLoading } = useGetSystemStatusQuery();

  if (isLoading) return <span>Checking...</span>;

  return (
    <div style={{ 
      padding: '5px 10px', 
      backgroundColor: data?.isActive ? 'green' : 'red',
      color: 'white',
      borderRadius: '4px'
    }}>
      System: {data?.status || 'Unknown'}
    </div>
  );
};

// Example 5: Interest rates by loan type
export const LoanTypeRates = ({ loanType = 'ihtiyac' }) => {
  const { data, isLoading, error } = useGetInterestRatesByType(loanType);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading rates</div>;

  return (
    <div>
      <h3>Best {loanType} Rates</h3>
      {data?.rates.slice(0, 5).map((bank) => (
        <div key={bank.bankSlug}>
          <strong>{bank.bankName}:</strong> %{bank[loanType]}
        </div>
      ))}
    </div>
  );
};

// Example 6: Compare banks
export const BankComparison = ({ bankSlugs }) => {
  const { data, isLoading } = useCompareInterestRates(bankSlugs);

  if (isLoading) return <div>Loading comparison...</div>;

  return (
    <div>
      <h3>Bank Comparison</h3>
      <table>
        <thead>
          <tr>
            <th>Bank</th>
            <th>İhtiyaç</th>
            <th>Konut</th>
            <th>Taşıt</th>
          </tr>
        </thead>
        <tbody>
          {data?.banks.map((bank) => (
            <tr key={bank.bankSlug}>
              <td>{bank.bankName}</td>
              <td>{bank.ihtiyac || '-'}</td>
              <td>{bank.konut || '-'}</td>
              <td>{bank.tasit || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example 7: Error handling with retry
export const RobustInterestRates = () => {
  const { data, isLoading, error, refetch, isRefetching } = useGetInterestRatesQuery({
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    onError: (error) => {
      // Log to error tracking service
      console.error('Interest rates fetch failed:', error);
    },
  });

  if (error) {
    return (
      <div>
        <p>Failed to load interest rates</p>
        <button onClick={() => refetch()} disabled={isRefetching}>
          {isRefetching ? 'Retrying...' : 'Retry'}
        </button>
      </div>
    );
  }

  if (isLoading) return <div>Loading...</div>;

  return <InterestRatesTable data={data} />;
};

// Example 8: Real-time dashboard
export const InterestRatesDashboard = () => {
  const { data: rates, isLoading: ratesLoading } = useGetInterestRatesQuery();
  const { data: systemStatus } = useGetSystemStatusQuery();
  const { data: banks } = useGetBanksQuery();

  if (ratesLoading) return <div>Loading dashboard...</div>;

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Interest Rates Dashboard</h1>
        <SystemStatusBadge />
      </div>
      
      <div className="stats">
        <div className="stat-card">
          <h3>Total Banks</h3>
          <p>{banks?.total || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Last Update</h3>
          <p>{rates?.lastUpdate ? new Date(rates.lastUpdate).toLocaleString() : 'N/A'}</p>
        </div>
        <div className="stat-card">
          <h3>System Status</h3>
          <p>{systemStatus?.status || 'Unknown'}</p>
        </div>
      </div>

      <div className="content">
        <div className="section">
          <h2>Best İhtiyaç Kredisi Rates</h2>
          <LoanTypeRates loanType="ihtiyac" />
        </div>
        
        <div className="section">
          <h2>Best Konut Kredisi Rates</h2>
          <LoanTypeRates loanType="konut" />
        </div>
        
        <div className="section">
          <h2>Best Taşıt Kredisi Rates</h2>
          <LoanTypeRates loanType="tasit" />
        </div>
      </div>
    </div>
  );
};

// Example 9: Custom hook for specific bank
export const useBankRateComparison = (bankSlug) => {
  const { data: bankRate } = useGetBankInterestRateQuery(bankSlug);
  const { data: allRates } = useGetInterestRatesQuery();

  const comparison = React.useMemo(() => {
    if (!bankRate || !allRates) return null;

    const bankRates = {
      ihtiyac: bankRate.ihtiyac,
      konut: bankRate.konut,
      tasit: bankRate.tasit,
    };

    const rankings = {};
    
    ['ihtiyac', 'konut', 'tasit'].forEach(loanType => {
      if (bankRates[loanType] !== null) {
        const sortedRates = allRates.rates
          .filter(bank => bank[loanType] !== null)
          .sort((a, b) => a[loanType] - b[loanType]);
        
        const rank = sortedRates.findIndex(bank => bank.bankSlug === bankSlug) + 1;
        rankings[loanType] = {
          rate: bankRates[loanType],
          rank,
          total: sortedRates.length,
          isBest: rank === 1,
        };
      }
    });

    return rankings;
  }, [bankRate, allRates, bankSlug]);

  return comparison;
};

// Example 10: Using the custom hook
export const BankRankingCard = ({ bankSlug }) => {
  const comparison = useBankRateComparison(bankSlug);
  const { data: bankData } = useGetBankInterestRateQuery(bankSlug);

  if (!comparison || !bankData) return <div>Loading...</div>;

  return (
    <div className="bank-ranking-card">
      <h3>{bankData.bankName}</h3>
      
      {Object.entries(comparison).map(([loanType, data]) => (
        <div key={loanType} className="loan-type-ranking">
          <h4>{loanType.charAt(0).toUpperCase() + loanType.slice(1)}</h4>
          <p>Rate: %{data.rate}</p>
          <p>Rank: {data.rank} of {data.total}</p>
          {data.isBest && <span className="best-rate-badge">Best Rate!</span>}
        </div>
      ))}
    </div>
  );
};