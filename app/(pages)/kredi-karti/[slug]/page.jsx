import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import CreditCardVerticalCard from '@/components/common/CreditCardVerticalCard';
import AdZoneComponent from '@/components/common/AdZoneComponent';
import TabsClient from './TabsClient';
import { ALL_CARDS } from '@/constants/cards';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const card = ALL_CARDS.find((card) => card.bankSlug === slug);

  if (!card) {
    return {
      title: 'Kredi Kartı Detayları | ihtiyackredisi.com',
      description: 'Kredi kartı detayları ve başvuru bilgileri.',
      alternates: {
        canonical: `/kredi-karti/${slug}`,
      },
    };
  }

  return {
    title: `${card.title} | ihtiyackredisi.com`,
    description: card.shortDescription || `${card.title} kredi kartı özellikleri, faiz oranları ve başvuru koşulları.`,
    alternates: {
      canonical: `/kredi-karti/${slug}`,
    },
  };
}

async function CreditCardDetailPage({ params }) {
  const { slug } = await params;
  const card = ALL_CARDS.find((card) => card.bankSlug === slug);

  if (!card) return notFound();

  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Kredi Kartı', href: '/kredi-karti' },
    { label: card.title },
  ];

  const metrics = [
    { label: 'Yıllık Aidat', value: formatTL(card.annualFee) },
    { label: 'Alışveriş Faiz Oranı', value: `%${card.shoppingInstallmentFee}` },
    {
      label: 'Nakit Avans Faizi',
      value: card.cashAdvanceRate
        ? `%${card.cashAdvanceRate}`
        : 'Banka ile iletişime geçiniz',
    },
  ];

  const relatedCards = ALL_CARDS.filter((c) => c.bankSlug !== slug).slice(0, 3);

  return (
    <div className='min-h-screen'>
      <section className='bg-white border-b border-gray-200 flex'>
        <div className='custom-container-1 flex items-center'>
          <div className='relative pt-[56px] w-full'>
            <div className='pt-[16px] flex flex-col md:flex-row items-start justify-between w-full gap-4'>
              <div className='flex flex-col w-full md:w-9/12'>
                <BreadcrumbComponent items={breadcrumbItems} />
                <div>
                  <h1 className='font-semibold text-[24px] leading-[30px] text-slate-900'>
                    {card.title}
                  </h1>
                  <p className='mt-[24px] pb-[32px] border-b border-b-slate-200 text-slate-600 text-[14px] leading-[20px]'>
                    {card.shortDescription}
                  </p>
                </div>
              </div>

              <div className='w-full md:w-3/12 flex items-center justify-center md:justify-end mt-2 md:mt-0'>
                <FeaturedButtonComponent
                  text='Hemen Başvur'
                  href={card.applyUrl}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                />
              </div>
            </div>

            <div className='w-full md:w-9/12 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 md:gap-0'>
              <div className='flex items-center w-full md:w-2/12 justify-center md:justify-start'>
                <Image
                  src={card.bankImage}
                  alt={card.bankName}
                  width={500}
                  height={300}
                  className='h-[36px] w-auto select-none'
                  draggable={false}
                />
              </div>

              <div className='md:hidden h-[1px] w-full bg-slate-200' />
              <div className='hidden md:block h-[60px] w-[1px] bg-slate-200' />

              <div className='flex w-full md:w-9/12 items-center md:items-center justify-center md:justify-between py-[16px] md:py-[32px] gap-4 md:gap-0 flex-col sm:flex-row'>
                {metrics.map(({ label, value }, index) => (
                  <div
                    key={label + index}
                    className='text-center sm:text-start w-full sm:w-1/3 gap-y-[8px] flex flex-col justify-start'
                  >
                    <p className='text-slate-600 text-[14px] leading-[16px]'>
                      {label}
                    </p>
                    <p className='text-slate-900 font-bold text-[16px] leading-[20px]'>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='custom-container-1 mt-[50px] mb-[96px]'>
        <TabsClient card={card} />
      </section>

      <section className='custom-container-1'>
        <div className='mb-[32px]'>
          <h2 className='text-slate-900 font-semibold text-[24px] leading-[30px]'>
            Benzer Kartları Keşfedin
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          {relatedCards.map((c) => (
            <div key={c.bankSlug} className='w-full'>
              <CreditCardVerticalCard
                bankImage={c.bankImage}
                bankName={c.title}
                annualFee={c.annualFee}
                shoppingRate={c.shoppingInstallmentFee}
                features={c.features}
                buttonColor={determineButtonColor(c.bankName)}
                detailsHref={`/kredi-karti/${c.bankSlug}`}
                applyHref={c.applyUrl}
              />
            </div>
          ))}
        </div>
      </section>

      <section className='custom-container-1 mt-[80px]'>
        <AdZoneComponent src='/adzone.png' />
      </section>
    </div>
  );
}

export default CreditCardDetailPage;

function formatTL(value) {
  if (value === null || value === undefined) return '-';
  const num = Number(value);
  if (Number.isNaN(num)) return String(value);
  return `${num} TL`;
}

// Determine button color based on bank name
function determineButtonColor(bankName) {
  if (!bankName) return 'primary';

  const name = bankName.toLowerCase();
  if (name.includes('garanti')) return 'primary';
  if (name.includes('iş') || name.includes('is')) return 'primary';
  if (name.includes('akbank')) return 'primary';
  if (name.includes('qnb')) return 'purple';
  if (name.includes('ing')) return 'orange';
  if (name.includes('ziraat')) return 'green';
  if (name.includes('halk')) return 'primary';
  if (name.includes('vakıf')) return 'primary';

  return 'primary';
}
