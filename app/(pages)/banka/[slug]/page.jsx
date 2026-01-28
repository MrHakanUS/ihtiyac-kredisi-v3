import React from 'react';
import Image from 'next/image';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import OfferCardComponent from '@/components/common/OfferCardComponent';
import { getDefaultLoanParams } from '@/utils/loanDataUtils';
import AdZoneComponent from '@/components/common/AdZoneComponent';
import BadgeComponent from '@/components/common/BadgeComponent';
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import BankReviewsComponent from '@/components/container/BankReviewsComponent';
import { notFound } from 'next/navigation';
import { resolveBankBySlug, allSupportedSlugs } from '@/constants/banks';
import { bankStructuredData } from '@/constants/banks/structuredData';
import CORE from '@/CORE2';

export async function generateMetadata({ params }) {
  const key = `/banka/${params.slug}`;
  const metadata = CORE[key];
  const { bank, canonicalSlug } = resolveBankBySlug({ slug: params.slug });

  if (!metadata) {
    return {
      title: 'Banka Detayları',
      description: 'Banka hakkında detaylı bilgiler.',
      alternates: {
        canonical: `/banka/${params.slug}`,
      },
    };
  }

  // Get structured data for this bank
  const bankSlug = canonicalSlug || params.slug;
  const structuredDataConfig = bankStructuredData[bankSlug];
  
  // Build structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://ihtiyackredisi.com/banka/${bankSlug}#webpage`,
        "url": `https://ihtiyackredisi.com/banka/${bankSlug}`,
        "name": metadata.title,
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": metadata.desc,
        "breadcrumb": { "@id": `https://ihtiyackredisi.com/banka/${bankSlug}#breadcrumb` },
        "dateModified": "2026-01-22",
        "mainEntity": structuredDataConfig ? { "@id": `https://ihtiyackredisi.com/banka/${bankSlug}#${bankSlug}LoanService` } : undefined
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://ihtiyackredisi.com/banka/${bankSlug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://ihtiyackredisi.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Bankalar",
            "item": "https://ihtiyackredisi.com/banka"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": bank?.bankName || "Banka",
            "item": `https://ihtiyackredisi.com/banka/${bankSlug}`
          }
        ]
      }
    ]
  };

  // Add FinancialProduct if structured data config exists
  if (structuredDataConfig && bank) {
    // Build brand object with optional fields
    const brandObj = {
      "@type": "BankOrCreditUnion",
      "name": structuredDataConfig.financialProduct.brand.name,
      "logo": structuredDataConfig.financialProduct.brand.logo
    };
    
    // Add alternateName if exists
    if (structuredDataConfig.financialProduct.brand.alternateName) {
      brandObj.alternateName = structuredDataConfig.financialProduct.brand.alternateName;
    }
    
    // Add legalName if exists
    if (structuredDataConfig.financialProduct.brand.legalName) {
      brandObj.legalName = structuredDataConfig.financialProduct.brand.legalName;
    }
    
    // Add parentOrganization if exists
    if (structuredDataConfig.financialProduct.brand.parentOrganization) {
      brandObj.parentOrganization = {
        "@type": "Organization",
        "name": structuredDataConfig.financialProduct.brand.parentOrganization.name
      };
    }
    
    // Build FinancialProduct object
    const financialProductObj = {
      "@type": "FinancialProduct",
      "@id": `https://ihtiyackredisi.com/banka/${bankSlug}#${bankSlug}LoanService`,
      "name": structuredDataConfig.financialProduct.name,
      "description": structuredDataConfig.financialProduct.description,
      "brand": brandObj,
      "offers": {
        "@type": "Offer",
        "description": structuredDataConfig.financialProduct.offers.description,
        "priceCurrency": "TRY"
      }
    };
    
    // Add category if exists
    if (structuredDataConfig.financialProduct.category) {
      financialProductObj.category = structuredDataConfig.financialProduct.category;
    }
    
    // Add potentialAction (ensure it's an array)
    const potentialActions = Array.isArray(structuredDataConfig.financialProduct.potentialActions)
      ? structuredDataConfig.financialProduct.potentialActions
      : [structuredDataConfig.financialProduct.potentialActions].filter(Boolean);
    
    if (potentialActions.length > 0) {
      financialProductObj.potentialAction = potentialActions.map(action => ({
        "@type": action.type,
        "name": action.name,
        "target": action.target
      }));
    }
    
    structuredData["@graph"].push(financialProductObj);

    // Add FAQPage if questions exist
    if (structuredDataConfig.faq && structuredDataConfig.faq.length > 0) {
      structuredData["@graph"].push({
        "@type": "FAQPage",
        "@id": `https://ihtiyackredisi.com/banka/${bankSlug}#faq`,
        "mainEntity": structuredDataConfig.faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      });
    }
  }

  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: `/banka/${params.slug}`,
    },
    ...(structuredDataConfig && {
      other: {
        'application/ld+json': JSON.stringify(structuredData)
      }
    })
  };
}

export function generateStaticParams() {
  return allSupportedSlugs.map((slug) => ({ slug }));
}

const LoanDetailPage = ({ params }) => {
  const { bank } = resolveBankBySlug({ slug: params?.slug });
  if (!bank) notFound();
  const openingTime = '09:00';
  const closingTime = '17:00';

  function ensureWebsiteUrl(url) {
    if (!url) return '';
    if (/^https?:\/\//i.test(url)) return url;
    return `https://${url}`;
  }

  function toTelHref(phone) {
    if (!phone) return '';
    const normalized = phone.replace(/[^\d+]/g, '');
    return `tel:${normalized}`;
  }

  function toMailtoHref(email) {
    if (!email) return '';
    return `mailto:${email}`;
  }

  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: bank.bankName },
  ];

  // Other loan offers data
  const otherOffers = [
    {
      logoSrc: '/banks/qnb.webp',
      rating: '4,6',
      items: [
        { label: 'Kredi', value: '50.000 TL' },
        { label: 'Vade', value: '3 Ay' },
        { label: 'Aylık Ödeme', value: '2.133,33 TL' },
      ],
    },
    {
      logoSrc: '/banks/ziraat.png',
      rating: '4,6',
      items: [
        { label: 'Kredi', value: '50.000 TL' },
        { label: 'Vade', value: '3 Ay' },
        { label: 'Aylık Ödeme', value: '2.133,33 TL' },
      ],
    },
    {
      logoSrc: '/banks/isbank.png',
      rating: '4,6',
      items: [
        { label: 'Kredi', value: '50.000 TL' },
        { label: 'Vade', value: '3 Ay' },
        { label: 'Aylık Ödeme', value: '2.133,33 TL' },
      ],
    },
  ];

  // no tabs/chart; only about section

  return (
    <div className='min-h-screen'>
      {/* Bank Identity Card */}
      <section className='bg-white border-b border-gray-200'>
        <div className='custom-container-1 flex items-center mb-[40px] md:mb-[64px]'>
          <div className='relative pt-[56px] w-full'>
            <BreadcrumbComponent items={breadcrumbItems} />
            <div className='mt-[16px] w-full rounded-[24px] border border-slate-200 bg-white p-[24px]'>
              <div className='flex flex-col md:flex-row items-start justify-between gap-[16px] md:gap-[24px] relative'>
                <div className='flex flex-col flex-center sm:flex-row sm:items-start justify-start gap-[16px] sm:gap-[24px] md:gap-[32px] w-full'>
                  <div className='flex flex-col gap-[12px] sm:gap-[16px] items-center sm:items-start'>
                    <div className='rounded-[10px] border border-slate-200 p-[8px] bg-white'>
                      <Image
                        src={bank.logo}
                        alt={bank.bankName}
                        width={120}
                        height={40}
                        className='h-[28px] sm:h-[32px] w-[64px] sm:w-[72px] object-contain'
                      />
                    </div>
                    <div className='flex items-center gap-[8px]'>
                      {bank.sponsored && <BadgeComponent badge='sponsor' />}
                      {bank.state && <BadgeComponent badge='state' />}
                      {bank.highPoint && <BadgeComponent badge='high' />}
                    </div>
                  </div>

                  <div className='flex flex-col w-full items-center sm:items-start'>
                    <h1 className='font-semibold text-[22px] leading-[28px] text-slate-900'>
                      {bank.bankName}
                    </h1>
                    <p className='text-slate-600 text-[13px] leading-[18px]'>
                      {bank.shortDescription}
                    </p>
                    <section
                      aria-labelledby='bank-meta-heading'
                      className='mt-[12px] w-full flex flex-col items-center sm:items-start'
                    >
                      <h2 id='bank-meta-heading' className='sr-only'>
                        Banka Bilgileri
                      </h2>
                      <dl className='grid grid-cols-2 sm:grid-cols-4 gap-x-[24px] gap-y-[12px]'>
                        <div className='flex flex-col gap-[4px]'>
                          <dt className='text-slate-500 text-[12px] leading-[16px]'>
                            {`${bank.bankName} Müşteri Hizmetleri`}
                          </dt>
                          <dd className='font-semibold text-slate-900 text-[16px] leading-[22px]'>
                            <a
                              href={toTelHref(bank.tel)}
                              className='hover:text-primary transition-colors duration-300'
                              aria-label={`${bank.bankName} Müşteri Hizmetleri: ${bank.tel}`}
                              rel='noopener noreferrer nofollow'
                            >
                              {bank.tel}
                            </a>
                          </dd>
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                          <dt className='text-slate-500 text-[12px] leading-[16px]'>
                            Banka kaçta açılıyor?
                          </dt>
                          <dd className='font-semibold text-slate-900 text-[16px] leading-[22px]'>
                            {openingTime}
                          </dd>
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                          <dt className='text-slate-500 text-[12px] leading-[16px]'>
                            Banka kaçta kapanıyor?
                          </dt>
                          <dd className='font-semibold text-slate-900 text-[16px] leading-[22px]'>
                            {closingTime}
                          </dd>
                        </div>
                        <div className='flex flex-col gap-[4px] sm:col-span-1'>
                          <dt className='text-slate-500 text-[12px] leading-[16px]'>
                            Banka çalışma saatleri
                          </dt>
                          <dd className='font-semibold text-slate-900 text-[16px] leading-[22px]'>
                            <span>
                              <time dateTime='09:00'>09:00</time>
                              &ndash;
                              <time dateTime='12:00'>12:00</time>
                              <br />
                              <time dateTime='13:00'>13:00</time>
                              &ndash;
                              <time dateTime='17:00'>17:00</time>
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </section>
                  </div>
                </div>

                <div className='flex flex-col items-stretch md:items-end gap-[12px] md:min-w-[260px] w-full md:w-auto md:ml-auto mt-[8px] md:mt-0 md:absolute md:right-0 md:top-0'>
                  <FeaturedButtonComponent
                    text='Hemen Başvur'
                    href={bank.personalLoanUrl}
                    target='_blank'
                    addClass='w-full md:w-auto justify-center'
                  />
                </div>
              </div>

              <div className='mt-[16px] grid grid-cols-1 gap-[12px] md:grid-cols-3'>
                <a
                  href={bank.personalLoanUrl}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                  className='rounded-[12px] border border-slate-200 p-[12px] hover:border-primary transition-colors bg-slate-50'
                >
                  <span className='block text-[13px] text-slate-600'>Ürün</span>
                  <span className='block text-[14px] font-semibold text-slate-900'>
                    İhtiyaç Kredisi
                  </span>
                </a>
                <a
                  href={bank.mortgageLoanUrl}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                  className='rounded-[12px] border border-slate-200 p-[12px] hover:border-primary transition-colors bg-slate-50'
                >
                  <span className='block text-[13px] text-slate-600'>Ürün</span>
                  <span className='block text-[14px] font-semibold text-slate-900'>
                    Konut Kredisi
                  </span>
                </a>
                <a
                  href={bank.carLoanUrl}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                  className='rounded-[12px] border border-slate-200 p-[12px] hover:border-primary transition-colors bg-slate-50'
                >
                  <span className='block text-[13px] text-slate-600'>Ürün</span>
                  <span className='block text-[14px] font-semibold text-slate-900'>
                    Taşıt Kredisi
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Only */}
      <section className='custom-container-1 mb-[40px] md:mb-[64px] pt-[40px] md:pt-[64px]'>
        <div className='text-gray-700'>
          <div className='pb-[32px]'>
            <h3 className='font-semibold text-slate-900 text-[20px] leading-[24px]'>
              {bank.aboutTitle}
            </h3>
            <div className='mt-[16px] space-y-[16px]'>
              <div className='prose max-w-none'>
                <div
                  className='text-slate-900 text-[14px] leading-[20px] whitespace-pre-line [&>h2]:text-slate-900 [&>h2]:text-[18px] [&>h2]:font-semibold [&>h2]:leading-[24px] [&>h2]:mt-[24px] [&>h2]:mb-[12px] [&>h2]:first:mt-0'
                  dangerouslySetInnerHTML={{ __html: bank.aboutDescription }}
                />
              </div>
            </div>
          </div>

          <div className='bg-white border border-slate-200 rounded-[24px] px-[24px] py-[16px]'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-[16px] gap-y-[12px] items-start'>
              {[
                {
                  label: `${bank.bankName} Müşteri Hizmetleri`,
                  value: bank.tel,
                  href: toTelHref(bank.tel),
                  isStrong: true,
                },
                {
                  label: 'Banka Çalışma Saatleri',
                  value: (
                    <div className='flex items-center gap-[16px]'>
                      <div>
                        <time dateTime='09:00'>09:00</time>-
                        <time dateTime='12:30'>12:00</time>
                      </div>

                      <div>
                        <time dateTime='13:00'>13:00</time>-
                        <time dateTime='17:00'>17:00</time>
                      </div>
                    </div>
                  ),
                  isStrong: true,
                  ariaLabel: 'Banka Çalışma Saatleri: 09-12:30 / 13:00-17:00',
                },
              ].map(
                ({ label, value, href, isExternal, isStrong, ariaLabel }) => (
                  <div key={label} className='flex flex-col gap-[8px] w-full'>
                    {isStrong ? (
                      <strong className='text-slate-600 text-[14px] leading-[18px]'>
                        {label}
                      </strong>
                    ) : (
                      <span className='text-slate-600 text-[14px] leading-[18px]'>
                        {label}
                      </span>
                    )}
                    {href ? (
                      <a
                        href={href}
                        target={isExternal ? '_blank' : undefined}
                        rel='noopener noreferrer nofollow'
                        className='font-bold text-slate-900 text-[16px] leading-[20px] break-all hover:text-primary transition-colors duration-300'
                        aria-label={
                          ariaLabel ||
                          (typeof value === 'string'
                            ? `${label}: ${value}`
                            : label)
                        }
                      >
                        {value}
                      </a>
                    ) : (
                      <span className='font-bold text-slate-900 text-[16px] leading-[20px] break-all'>
                        {value}
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bank Reviews Section */}
      <section className='custom-container-1 mb-[40px] md:mb-[64px]'>
        <BankReviewsComponent bankSlug={params?.slug} />
      </section>

      {/* Other Offers Section */}
      <section className='custom-container-1'>
        <div className='mb-[32px]'>
          <h2 className='text-slate-900 font-semibold text-[24px] leading-[30px]'>
            Daha Fazla Teklifi Keşfedin
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          {otherOffers.map((offer, index) => {
            const creditType = 'İhtiyaç Kredisi';
            const defaults = getDefaultLoanParams(creditType);
            const detailsHref = `/kredi/${
              index === 0 ? 'qnb' : index === 1 ? 'ziraat' : 'is-bankasi'
            }?tur=${encodeURIComponent(creditType)}&tutar=${
              defaults.amount
            }&vade=${defaults.term}`;
            return (
              <OfferCardComponent
                key={index}
                logoSrc={offer.logoSrc}
                rating={offer.rating}
                items={offer.items}
                detailsHref={detailsHref}
                detailsTarget={'_self'}
              />
            );
          })}
        </div>
      </section>

      {/* Ad Zone */}
      <section className='custom-container-1 mt-[48px] md:mt-[80px]'>
        <AdZoneComponent src='/adzone.png' url='https://www.google.com' />
      </section>
    </div>
  );
};

export default LoanDetailPage;
