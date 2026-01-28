"use client";

import HeadingComponent from '@/components/common/HeadingComponent';
import OfferCardComponent from '@/components/common/OfferCardComponent';
import React from 'react';
import { canonicalBankMap } from '@/constants/banks'
import { getDefaultLoanParams, generateLoanCards } from '@/utils/loanDataUtils'
import { useGetInterestRatesQuery } from '@/services/api/hooks';

const OffersComponent = ({ addClass = '' }) => {
  const { data: apiRates, isLoading } = useGetInterestRatesQuery();

  const creditType = 'İhtiyaç Kredisi'
  const defaults = getDefaultLoanParams(creditType)
  
  const cards = React.useMemo(() => {
    if (!apiRates) return [];
    return generateLoanCards(creditType, defaults.amount, defaults.term, apiRates.ratesMap);
  }, [apiRates, creditType, defaults.amount, defaults.term]);


  const offers = [...cards]
    .sort((a, b) => a.interestRate - b.interestRate)
    .slice(0, 3)
    .map(card => ({
      logoSrc: canonicalBankMap[card.bankSlug]?.logo || card.bankImage,
      rating: card.rating,
      items: [
        { label: 'Kredi', value: new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(defaults.amount) + ' TL' },
        { label: 'Vade', value: `${card.actualTerm} Ay` },
        { label: 'Aylık Ödeme', value: card.monthlyPayment },
      ],
      bankSlug: card.bankSlug,
      monthlyPayment: card.monthlyPayment,
      totalPayment: card.totalPayment,
      actualTerm: card.actualTerm,
    }))

  if (isLoading) {
    return (
      <section className={`custom-container-1 flex flex-col ${addClass}`}>
        <HeadingComponent
          title='%0 Faizli Muhteşem Teklifler'
          subtitle='Sadece ihtiyackredisi.com’a özel harika fırsatlar.'
          highlight='%0 Faizli'
          as='h2'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px]'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-200 rounded-lg h-64"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`custom-container-1 flex flex-col ${addClass}`}>
      <HeadingComponent
        title='%0 Faizli Muhteşem Teklifler'
        subtitle='Sadece ihtiyackredisi.com’a özel harika fırsatlar.'
        highlight='%0 Faizli'
        as='h2'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px]'>
        {offers.map((offer, index) => {
          const bank = canonicalBankMap[offer.bankSlug]
          const detailsHref = `/kredi/${offer.bankSlug}?tur=${encodeURIComponent(creditType)}&tutar=${defaults.amount}&vade=${offer.actualTerm}`
          const applyHref = bank ? (bank.personalLoanUrl || '#') : '#'
          return (
            <OfferCardComponent
              key={index}
              logoSrc={offer.logoSrc}
              rating={offer.rating}
              items={offer.items}
              detailsHref={detailsHref}
              detailsTarget={'_self'}
              applyHref={applyHref}
              applyTarget={'_blank'}
            />
          )
        })}
      </div>
    </section>
  );
};

export default OffersComponent;
