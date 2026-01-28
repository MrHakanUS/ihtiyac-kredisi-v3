'use client';

import React, { useState } from 'react';
import { useGetSystemStatusQuery, useUpdateInterestRatesMutation, useGetBanksQuery } from '@/services/api/hooks';
import Image from 'next/image';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import ModalComponent from '@/components/common/ModalComponent';

const UpdateClientPage = () => {
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const { data: systemStatus, isLoading: isStatusLoading, isError: isStatusError } = useGetSystemStatusQuery();
  const { data: banksData, isLoading: isBanksLoading } = useGetBanksQuery({
    enabled: isBankModalOpen, // Only fetch when the modal is opened
  });
  const { mutate: updateRates, isLoading: isUpdating } = useUpdateInterestRatesMutation({
    onSuccess: () => {
      // You can add a success notification here if you have a toast library 
    },
    onError: (error) => {
      // You can add an error notification here
      console.error('Faiz oranları güncellenirken bir hata oluştu:', error);
    },
  });

  const handleUpdateClick = () => {
    if (!isUpdating) {
      updateRates();
    }
  };

  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Güncelleme' },
  ];

  return (
    <>
      <main>
        <div className="bg-slate-50">
          <div className="custom-container-1 flex flex-col items-center px-4 pt-[40px] pb-[80px]">
            <div className="max-w-[920px] w-full flex justify-center items-center text-center">
              <BreadcrumbComponent items={breadcrumbItems} />
            </div>
            <div className="max-w-[920px] w-full mb-[40px] flex justify-center items-center text-center">
              <h1 className="text-[28px] leading-[32px] font-semibold text-slate-900">
                Faiz Oranlarını Manuel Güncelle
              </h1>
            </div>
            <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-slate-200">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-slate-800">Sistem Durumu</h2>
                {isStatusLoading ? (
                  <p className="text-slate-500 mt-2">Sistem durumu yükleniyor...</p>
                ) : isStatusError ? (
                  <p className="text-red-500 mt-2">Sistem durumu alınamadı.</p>
                ) : (
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">Durum:</span>{' '}
                      <span className={`font-bold ${systemStatus?.isActive ? 'text-green-600' : 'text-red-600'}`}>
                        {systemStatus?.status}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold">Son Güncelleme:</span>{' '}
                      {systemStatus?.lastUpdate
                        ? new Date(systemStatus.lastUpdate).toLocaleString('tr-TR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                          })
                        : 'N/A'}
                    </p>
                    <p>
                      <span className="font-semibold">Toplam Banka:</span>{' '}
                      <button
                        onClick={() => setIsBankModalOpen(true)}
                        className="text-accent hover:underline disabled:text-slate-500 disabled:no-underline"
                        disabled={!systemStatus?.totalBanks}
                      >
                        {systemStatus?.totalBanks ?? 'N/A'}
                      </button>
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-8">
                <FeaturedButtonComponent
                  text={isUpdating ? 'Güncelleniyor...' : 'Şimdi Güncelle'}
                  onClick={handleUpdateClick}
                  disabled={isUpdating}
                  addClass="w-full text-center flex justify-center"
                />
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Bu işlem, banka faiz oranlarını API üzerinden manuel olarak yeniden çeker ve veritabanını günceller.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ModalComponent
        isOpen={isBankModalOpen}
        onClose={() => setIsBankModalOpen(false)}
        title="Sistemdeki Bankalar"
      >
        {isBanksLoading ? (
          <p>Bankalar yükleniyor...</p>
        ) : (
          <ul className="space-y-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {banksData?.banks.map((bank, index) => (
              <li key={index} className="flex items-center gap-4 border-b border-slate-200 p-2">
                {bank.logo && (
                  <Image src={bank.logo} alt={bank.name} width={80} height={20} className="object-contain" />
                )}
                <span>{bank.name}</span>
              </li>
            ))}
          </ul>
        )}
      </ModalComponent>
    </>
  );
};

export default UpdateClientPage;