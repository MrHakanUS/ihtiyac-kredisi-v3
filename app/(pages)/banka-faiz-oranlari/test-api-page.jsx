"use client";

import { useGetInterestRatesQuery } from "@/services/api/hooks";
import { useEffect } from "react";

export default function TestApiPage() {
  const { data, isLoading, error, isError } = useGetInterestRatesQuery();
  
  useEffect(() => {
  }, [data, isLoading, error]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">API Test - Banka Faiz Oranları</h1>
      
      {/* Loading State */}
      {isLoading && (
        <div className="bg-blue-100 p-4 rounded">
          <p>⏳ API'den veri yükleniyor...</p>
        </div>
      )}
      
      {/* Error State */}
      {isError && (
        <div className="bg-red-100 p-4 rounded mb-4">
          <h2 className="font-bold text-red-800">❌ API Hatası:</h2>
          <p>{error?.message || "Bilinmeyen hata"}</p>
          <pre className="mt-2 text-sm">{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
      
      {/* Success State */}
      {data && (
        <div className="bg-green-100 p-4 rounded">
          <h2 className="font-bold text-green-800 mb-4">✅ API'den Gelen Veriler:</h2>
          
          <div className="mb-4">
            <p><strong>Son Güncelleme:</strong> {data.lastUpdate}</p>
            <p><strong>Toplam Banka:</strong> {data.totalBanks}</p>
          </div>
          
          <h3 className="font-bold mb-2">İlk 5 Banka:</h3>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Banka</th>
                <th className="border p-2">İhtiyaç</th>
                <th className="border p-2">Konut</th>
                <th className="border p-2">Taşıt</th>
              </tr>
            </thead>
            <tbody>
              {data.rates?.slice(0, 5).map((bank) => (
                <tr key={bank.bankSlug}>
                  <td className="border p-2">{bank.bankName}</td>
                  <td className="border p-2">{bank.ihtiyac ? `%${bank.ihtiyac}` : "-"}</td>
                  <td className="border p-2">{bank.konut ? `%${bank.konut}` : "-"}</td>
                  <td className="border p-2">{bank.tasit ? `%${bank.tasit}` : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600">Tüm API Verisi (JSON)</summary>
            <pre className="mt-2 bg-white p-4 rounded overflow-auto text-xs">
              {JSON.stringify(data, null, 2)}
            </pre>
          </details>
        </div>
      )}
      
      {/* API URL Info */}
      <div className="mt-8 bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">API Bilgileri:</h3>
        <p><strong>Base URL:</strong> {process.env.NEXT_PUBLIC_API_BASE_URL || "http://46.62.153.78:8000"}</p>
        <p><strong>Endpoint:</strong> /api/faiz-oranlari</p>
        <p><strong>Full URL:</strong> {process.env.NEXT_PUBLIC_API_BASE_URL || "http://46.62.153.78:8000"}/api/faiz-oranlari</p>
      </div>
    </div>
  );
}