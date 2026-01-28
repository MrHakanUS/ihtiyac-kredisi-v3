"use client";

import AdvantageCardComponent from '@/components/common/AdvantageCardComponent';
import HeadingComponent from '@/components/common/HeadingComponent';
import React from 'react';
import { generateLoanCards, getDefaultLoanParams } from '@/utils/loanDataUtils';
import { canonicalBankMap } from '@/constants/banks';
import { useGetInterestRatesQuery } from '@/services/api/hooks';

const AdvantagesComponent = () => {
  const { data: apiRates, isLoading } = useGetInterestRatesQuery();

  const creditType = 'İhtiyaç Kredisi';
  const defaults = getDefaultLoanParams(creditType);
  const amount = defaults.amount;
  const term = defaults.term;

  const formatCurrency = (value) =>
    new Intl.NumberFormat('tr-TR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value) + ' TL';

  function pickLoanUrl({ bank, creditType }) {
    if (!bank) return '#';
    if (creditType === 'Konut Kredisi')
      return bank.mortgageLoanUrl || bank.personalLoanUrl;
    if (creditType === 'Taşıt Kredisi')
      return bank.carLoanUrl || bank.personalLoanUrl;
    return bank.personalLoanUrl;
  }

  const sortedCards = React.useMemo(() => {
    if (!apiRates?.ratesMap) return [];
    
    const allCards = generateLoanCards(creditType, amount, term, apiRates.ratesMap);

    function getPriority(card) {
      const bank = canonicalBankMap[card.bankSlug];
      if (bank?.sponsored) return 0;
      if (bank?.highPoint) return 1;
      if (bank?.state) return 2;
      return 3;
    }

    return allCards
      .sort((a, b) => {
        const priorityA = getPriority(a);
        const priorityB = getPriority(b);
        if (priorityA !== priorityB) {
          return priorityA - priorityB;
        }
        return a.interestRate - b.interestRate;
      })
      .slice(0, 3);
  }, [apiRates, creditType, amount, term]);

  if (isLoading) {
    return (
      <section className='custom-container-1 flex flex-col'>
        <HeadingComponent
          title='Kısa Süreli Avantajlı Teklifler'
          subtitle={`ihtiyackredisi.com'a özel: Düşük Faizli Kredi Fırsatları`}
          as='h2'
        />
        <div className='flex flex-col w-full gap-y-[16px]'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-200 rounded-lg h-40 w-full"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className='custom-container-1 flex flex-col'>
      <HeadingComponent
        title='Kısa Süreli Avantajlı Teklifler'
        subtitle={`ihtiyackredisi.com'a özel: Düşük Faizli Kredi Fırsatları`}
        as='h2'
      />

      <div className='flex flex-col w-full gap-y-[16px]'>
        {sortedCards.map((card, index) => {
          const bank = canonicalBankMap[card.bankSlug];
          const reviewsData = bank?.reviews;
          const items = [
            { label: 'Kredi', value: formatCurrency(amount) },
            { label: 'Faiz Oranı', value: card.interestRate },
            { label: 'Vade', value: `${card.actualTerm} Ay` },
            { label: 'Aylık Ödeme', value: card.monthlyPayment },
            { label: 'Toplam Ödeme', value: card.totalPayment },
          ];
          const detailsHref = `/kredi/${card.bankSlug}?tur=${encodeURIComponent(
            creditType
          )}&tutar=${amount}&vade=${card.actualTerm}`;
          const applyHref = pickLoanUrl({ bank, creditType });
          const stars = Math.min(5, Number(card.rating) || 4);
          const badgeType = bank?.state
            ? 'state'
            : bank?.sponsored
            ? 'sponsor'
            : bank?.highPoint
            ? 'high'
            : 'none';
          return (
            <AdvantageCardComponent
              key={index}
              items={items}
              logoSrc={bank?.logo || card.bankImage}
              stars={stars}
              title={bank?.bankName || card.bankName}
              color={bank?.dominantColor || '#FF6900'}
              badge={badgeType}
              applyHref={applyHref}
              applyTarget={'_blank'}
              detailsHref={detailsHref}
              detailsTarget={'_self'}
              reviewsData={reviewsData}
              reviewsCount={reviewsData?.userReviews?.length}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AdvantagesComponent;
