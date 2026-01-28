'use client';

import React, { useMemo, useState } from 'react';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import CreditCardVerticalCard from '@/components/common/CreditCardVerticalCard';
import { FaUniversity, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import SelectboxComponent from '@/components/common/SelectboxComponent';
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import FaqComponent from '@/components/container/FaqComponent';
import AdZoneComponent from '@/components/common/AdZoneComponent';
import TextComponent from '@/components/container/TextComponent';
import { getAllCards, getBankNames, getCardTypes, getAnnualFeeRanges } from '@/constants/cards';

export default function ClientPage() {
  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Kredi Kartı' },
  ];

  const allCards = getAllCards();
  const banks = getBankNames();
  const cardTypes = getCardTypes();
  const annualFeeRanges = getAnnualFeeRanges();

  const [selectedBank, setSelectedBank] = useState('Tüm Bankalar');
  const [selectedCardType, setSelectedCardType] = useState('Tüm Kartlar');
  const [selectedMaxAnnualFee, setSelectedMaxAnnualFee] =
    useState('Tüm Aidatlar');

  const filteredCards = useMemo(() => {
    let list = [...allCards];
    
    // Filter by bank
    if (selectedBank !== 'Tüm Bankalar') {
      list = list.filter((card) => card.reviewBankName?.includes(selectedBank));
    }
    
    // Filter by card type
    if (selectedCardType !== 'Tüm Kartlar') {
      list = list.filter((card) => {
        const cardName = card.bankName?.toLowerCase() || '';
        return cardName.includes(selectedCardType.toLowerCase());
      });
    }
    
    // Filter by annual fee
    if (selectedMaxAnnualFee !== 'Tüm Aidatlar') {
      if (selectedMaxAnnualFee === 'Ücretsiz') {
        list = list.filter((card) => {
          const fee = (card.annualFee || '').toLowerCase();
          return fee.includes('ücretsiz') || fee === '0' || fee === '0 tl';
        });
      } else if (selectedMaxAnnualFee === '1 TL - 250 TL') {
        list = list.filter((card) => {
          const feeText = (card.annualFee || '').toLowerCase();
          if (
            feeText.includes('ücretsiz') ||
            feeText === '0' ||
            feeText === '0 tl'
          )
            return false;
          const fee = parseInt(feeText.replace(/[^0-9]/g, ''));
          return !isNaN(fee) && fee >= 1 && fee <= 250;
        });
      } else if (selectedMaxAnnualFee === '251 TL ve üzeri') {
        list = list.filter((card) => {
          const feeText = (card.annualFee || '').toLowerCase();
          if (
            feeText.includes('ücretsiz') ||
            feeText === '0' ||
            feeText === '0 tl'
          )
            return false;
          const fee = parseInt(feeText.replace(/[^0-9]/g, ''));
          return !isNaN(fee) && fee >= 251;
        });
      }
    }
    
    return list;
  }, [allCards, selectedBank, selectedCardType, selectedMaxAnnualFee]);

  const faqItems = [
    {
      question: 'Kredi kartı başvurumu siteniz üzerinden nasıl yaparım?',
      answer:
        'Kartları karşılaştırıp size uygun olanı seçin. "Hemen Başvur" ile bankanın güvenli başvuru sayfasına yönlendirilirsiniz ve başvuruyu bankaya tamamlarsınız.',
    },
    {
      question: 'Yıllık kart aidatı nedir ve nasıl filtreleyebilirim?',
      answer:
        'Her kartın yıllık üyelik ücreti kart kartında belirtilir. Filtrelerden maksimum aidat tutarını seçerek aidatsız ya da düşük aidatlı kartları kolayca listeleyebilirsiniz.',
    },
    {
      question: 'Taksit ve puan/bonus kazanımı nasıl çalışır?',
      answer:
        'Kart markasına göre (Bonus, World, Maximum, Axess, Bankkart) anlaşmalı üye işyerlerinde taksit ve kampanyalar geçerlidir. Harcamalarınızdan puan/bonus kazanır, uygun işyerlerinde kullanabilirsiniz.',
    },
    {
      question: 'Nakit avans faizi alışveriş faizinden farklı mı?',
      answer:
        'Evet. Nakit avans işlemleri farklı faiz ve ücretlere tabidir. Kart detayındaki "nakit avans" koşullarını ve bankanızın güncel oranlarını kontrol edin.',
    },
    {
      question: 'Temassız işlem limiti ne kadar?',
      answer:
        'Güncel temassız limit BDDK ve bankalar tarafından belirlenir. Kartınızı aldıktan sonra bankanızın mobil uygulamasından limiti görüntüleyebilir veya güncelleyebilirsiniz.',
    },
  ];

  return (
    <main>
      <div className=''>
        <div className='custom-container-1 flex flex-col items-center px-4 pt-[56px]'>
          <div className='max-w-[920px] w-full flex justify-center items-center text-center'>
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
          <div className='max-w-[920px] w-full mb-[40px] flex justify-center items-center text-center'>
            <h1 className='text-[28px] leading-[32px] font-semibold text-slate-900'>
              En Uygun Kredi Kartı Tekliflerini Karşılaştırın
            </h1>
          </div>
        </div>
      </div>

      <div className='custom-container-1 flex flex-col gap-8'>
        <div className='border border-slate-200 rounded-[20px] bg-white flex flex-col md:flex-row items-stretch md:items-center justify-between w-full px-[16px] sm:px-[20px] py-[12px] md:py-[8px] gap-[12px] md:gap-0'>
          <div className='flex w-full md:w-10/12 flex-col md:flex-row items-stretch md:items-center gap-[12px] md:gap-x-[20px]'>
            <div className='w-full md:w-1/3'>
              <SelectboxComponent
                options={['Tüm Bankalar', ...banks]}
                label='Banka'
                defaultValue={selectedBank}
                icon={<FaUniversity />}
                onChange={setSelectedBank}
                className='w-full'
              />
            </div>

            <div className='hidden md:block h-[52px] w-[1px] bg-slate-200' />
            <div className='md:hidden h-[1px] w-full bg-slate-200' />

            <div className='w-full md:w-1/3'>
              <SelectboxComponent
                options={['Tüm Kartlar', ...cardTypes]}
                label='Kart Türü'
                defaultValue={selectedCardType}
                icon={<FaCreditCard />}
                onChange={setSelectedCardType}
                className='w-full'
              />
            </div>

            <div className='hidden md:block h-[52px] w-[1px] bg-slate-200' />
            <div className='md:hidden h-[1px] w-full bg-slate-200' />

            <div className='w-full md:w-1/3'>
              <SelectboxComponent
                options={annualFeeRanges}
                label='Maksimum Yıllık Aidat'
                defaultValue={selectedMaxAnnualFee}
                icon={<FaMoneyBillWave />}
                onChange={setSelectedMaxAnnualFee}
                className='w-full'
              />
            </div>
          </div>

          <div className='w-full md:w-[96px] flex items-center justify-center'>
            <FeaturedButtonComponent
              text='Bul'
              icon={<IoSearchOutline />}
              className='!rounded-[12px] !px-[20px] !py-[12px] !gap-[12px] !w-full md:!w-fit flex items-center justify-center'
            />
          </div>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div key={index} className='h-full'>
                <CreditCardVerticalCard
                  bankImage={card.bankImage}
                  bankName={card.bankName}
                  cardImage={card.cardImage}
                  annualFee={card.annualFee}
                  shoppingRate={card.shoppingInstallmentFee}
                  features={card.features}
                  buttonColor={card.buttonColor}
                  detailsHref={`/kredi-karti/${card.bankSlug}`}
                  applyHref={card.applyUrl}
                />
              </div>
            ))
          ) : (
            <div className='col-span-full'>
              <div className='w-full text-center flex items-center justify-center rounded-lg border-gray-200 p-12'>
                <p className='text-slate-600'>
                  Seçilen filtrelere uygun kredi kartı bulunamadı.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      
    </main>
  );
}
