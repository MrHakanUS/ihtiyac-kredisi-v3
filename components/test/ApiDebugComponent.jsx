"use client";

import { API_BASE_URL } from "@/lib/config";
import React from "react";
import { useGetInterestRatesQuery } from "@/services/api/hooks";

export const ApiDebugComponent = () => {
  const { data, isLoading, error, isError } = useGetInterestRatesQuery();

  return (
    <div className="bg-yellow-100 border-2 border-yellow-500 p-4 rounded-lg">
      <h3 className="font-bold text-lg mb-2">🔍 API Debug Panel</h3>
      
      <div className="space-y-2 text-sm">
        <p><strong>API URL:</strong> {API_BASE_URL}</p>
        <p><strong>Status:</strong> {isLoading ? "⏳ Loading..." : isError ? "❌ Error" : "✅ Success"}</p>
        
        {error && (
          <div className="bg-red-100 p-2 rounded">
            <p><strong>Error:</strong> {error.message}</p>
            <p><strong>Details:</strong> {JSON.stringify(error)}</p>
          </div>
        )}
        
        {data && (
          <div className="bg-green-100 p-2 rounded">
            <p><strong>Data Loaded:</strong> ✅ Yes</p>
            <p><strong>Total Banks:</strong> {data.totalBanks}</p>
            <p><strong>Last Update:</strong> {data.lastUpdate}</p>
            <p><strong>Sample Rate:</strong> {data.rates?.[0]?.bankName}: %{data.rates?.[0]?.ihtiyac}</p>
          </div>
        )}
        
        <details>
          <summary className="cursor-pointer text-blue-600">View Raw Data</summary>
          <pre className="mt-2 text-xs bg-white p-2 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
};

export default ApiDebugComponent;
