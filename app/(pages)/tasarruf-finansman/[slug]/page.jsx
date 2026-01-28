import React from 'react';
import Image from 'next/image';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import { notFound } from 'next/navigation';
import {
  resolveSavingsFinanceBySlug,
  allSavingsFinanceSlugs,
} from '@/constants/tasarruf-finansman';
import { savingsFinanceStructuredData } from '@/constants/tasarruf-finansman/structuredData';
import CORE from '@/CORE2';

export async function generateMetadata({ params }) {
  const key = `/tasarruf-finansman/${params.slug}`;
  const metadata = CORE[key];
  const { institution, canonicalSlug } = resolveSavingsFinanceBySlug({ slug: params.slug });

  if (!metadata) {
    return {
      title: 'Tasarruf Finans Şirketi Detayları',
      description:
        'Tasarruf finans şirketi hakkında çalışma saatleri, numara ve resmi web sitesi bilgilerine ulaşın.',
      alternates: {
        canonical: `/tasarruf-finansman/${params.slug}`,
      },
    };
  }

  // Get structured data for this institution
  const institutionSlug = canonicalSlug || params.slug;
  const structuredDataConfig = savingsFinanceStructuredData[institutionSlug];
  
  // Build structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://ihtiyackredisi.com/tasarruf-finansman/${institutionSlug}#webpage`,
        "url": `https://ihtiyackredisi.com/tasarruf-finansman/${institutionSlug}`,
        "name": metadata.title,
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": metadata.desc,
        "breadcrumb": { "@id": `https://ihtiyackredisi.com/tasarruf-finansman/${institutionSlug}#breadcrumb` },
        "dateModified": "2026-01-22",
        "mainEntity": structuredDataConfig ? { "@id": `https://ihtiyackredisi.com/tasarruf-finansman/${institutionSlug}#financeProduct` } : undefined
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://ihtiyackredisi.com/tasarruf-finansman/${institutionSlug}#breadcrumb`,
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
            "name": "Tasarruf Finansman",
            "item": "https://ihtiyackredisi.com/tasarruf-finansman"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": institution?.bankName || institution?.shortName || "Tasarruf Finansman",
            "item": `https://ihtiyackredisi.com/tasarruf-finansman/${institutionSlug}`
          }
        ]
      }
    ]
  };

  // Add FinancialProduct if structured data config exists
  if (structuredDataConfig && institution) {
    // Build brand object with optional fields
    const brandObj = {
      "@type": structuredDataConfig.financialProduct.brand.brandType || "BankOrCreditUnion",
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
    
    // Build FinancialProduct object
    const financialProductObj = {
      "@type": "FinancialProduct",
      "@id": `https://ihtiyackredisi.com/tasarruf-finansman/${institutionSlug}#financeProduct`,
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
        "@id": `https://ihtiyackredisi.com/tasarruf-finansman/${institutionSlug}#faq`,
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
      canonical: `/tasarruf-finansman/${params.slug}`,
    },
    ...(structuredDataConfig && {
      other: {
        'application/ld+json': JSON.stringify(structuredData)
      }
    })
  };
}

export function generateStaticParams() {
  return allSavingsFinanceSlugs.map((slug) => ({ slug }));
}

function toTelHref(phone) {
  if (!phone) return '';
  const normalized = phone.replace(/[^\d+]/g, '');
  return `tel:${normalized}`;
}

function ensureWebsiteUrl(url) {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

function formatWorkingHours(openingTime, closingTime) {
  if (!openingTime || !closingTime) return null;
  
  // Default working hours with lunch break
  // Most institutions: 09:00-12:00 and 13:00-17:00
  // But we'll use the actual opening/closing times
  const open = openingTime;
  const close = closingTime;
  
  // Calculate lunch break (typically 12:00-13:00)
  const openHour = parseInt(open.split(':')[0]);
  const closeHour = parseInt(close.split(':')[0]);
  
  // If opens at 09:00 or earlier and closes at 17:00 or later, show lunch break
  if (openHour <= 9 && closeHour >= 17) {
    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[4px] sm:gap-[16px]">
        <div>
          <time dateTime={open}>{open}</time>
          &nbsp;&ndash;&nbsp;
          <time dateTime="12:00">12:00</time>
        </div>
        <div>
          <time dateTime="13:00">13:00</time>
          &nbsp;&ndash;&nbsp;
          <time dateTime={close}>{close}</time>
        </div>
      </div>
    );
  }
  
  // Otherwise show simple range
  return (
    <span>
      <time dateTime={open}>{open}</time>
      &nbsp;&ndash;&nbsp;
      <time dateTime={close}>{close}</time>
    </span>
  );
}

const SavingsFinanceDetailPage = ({ params }) => {
  const { institution } = resolveSavingsFinanceBySlug({ slug: params?.slug });

  if (!institution) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Tasarruf Finansman', href: '/tasarruf-finansman' },
    { label: institution.bankName || institution.shortName?.toUpperCase() },
  ];

  const websiteUrl = ensureWebsiteUrl(institution.bankUrl || institution.website);

  return (
    <div className="min-h-screen">
      <section className="bg-white border-b border-gray-200">
        <div className="custom-container-1 flex items-center mb-[40px] md:mb-[64px]">
          <div className="relative pt-[56px] w-full">
            <BreadcrumbComponent items={breadcrumbItems} />
            <div className="mt-[16px] w-full rounded-[24px] border border-slate-200 bg-white p-[24px]">
              <div className="flex flex-col md:flex-row items-start justify-between gap-[16px] md:gap-[24px] relative">
                <div className="flex flex-col flex-center sm:flex-row sm:items-start justify-start gap-[16px] md:gap-[32px] w-full">
                  <div className="flex flex-col gap-[12px] sm:gap-[16px] items-center sm:items-start">
                    <div className="rounded-[10px] border border-slate-200 p-[8px] bg-white">
                      <Image
                        src={institution.logo || '/logo.svg'}
                        alt={institution.bankName || institution.shortName}
                        width={120}
                        height={40}
                        className="h-[28px] sm:h-[32px] w-[64px] sm:w-[72px] object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full items-center sm:items-start">
                    <h1 className="font-semibold text-[22px] leading-[28px] text-slate-900">
                      {institution.fullName || institution.bankName}
                    </h1>
                    <p className="text-slate-600 text-[13px] leading-[18px]">
                      {institution.shortName?.toUpperCase() || institution.bankName} tasarruf finansman şirketi
                    </p>
                    <section
                      aria-labelledby="institution-meta-heading"
                      className="mt-[12px] w-full flex flex-col items-center sm:items-start"
                    >
                      <h2 id="institution-meta-heading" className="sr-only">
                        Tasarruf Finans Şirketi Bilgileri
                      </h2>
                      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-[24px] gap-y-[12px]">
                        {institution.tel && (
                          <div className="flex flex-col gap-[4px]">
                            <dt className="text-slate-500 text-[12px] leading-[16px]">
                              {`${(institution.shortName?.toUpperCase() || institution.bankName)} Müşteri Hizmetleri`}
                            </dt>
                            <dd className="font-semibold text-slate-900 text-[16px] leading-[22px]">
                              <a
                                href={toTelHref(institution.tel)}
                                className="hover:text-primary transition-colors duration-300"
                                aria-label={`${institution.bankName || institution.shortName} Müşteri Hizmetleri: ${institution.tel}`}
                                rel="noopener noreferrer nofollow"
                              >
                                {institution.tel}
                              </a>
                            </dd>
                          </div>
                        )}
                        <div className="flex flex-col gap-[4px]">
                          <dt className="text-slate-500 text-[12px] leading-[16px]">
                            Şirket kaçta açılıyor?
                          </dt>
                          <dd className="font-semibold text-slate-900 text-[16px] leading-[22px]">
                            {institution.openingTime}
                          </dd>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <dt className="text-slate-500 text-[12px] leading-[16px]">
                            Şirket kaçta kapanıyor?
                          </dt>
                          <dd className="font-semibold text-slate-900 text-[16px] leading-[22px]">
                            {institution.closingTime}
                          </dd>
                        </div>
                        <div className="flex flex-col gap-[4px] sm:col-span-1">
                          <dt className="text-slate-500 text-[12px] leading-[16px]">
                            Çalışma saatleri
                          </dt>
                          <dd className="font-semibold text-slate-900 text-[16px] leading-[22px]">
                            {formatWorkingHours(institution.openingTime, institution.closingTime)}
                          </dd>
                        </div>
                      </dl>
                    </section>
                  </div>
                </div>

                <div className="flex flex-col items-stretch md:items-end gap-[12px] md:min-w-[260px] w-full md:w-auto md:ml-auto mt-[8px] md:mt-0 md:absolute md:right-0 md:top-0">
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center rounded-[999px] px-[20px] py-[10px] text-[14px] font-semibold bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
                  >
                    Hemen Başvur
                  </a>
                </div>
              </div>

              <div className="mt-[16px] grid grid-cols-1 gap-[12px] md:grid-cols-3">
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="rounded-[12px] border border-slate-200 p-[12px] hover:border-primary transition-colors bg-slate-50"
                >
                  <span className="block text-[13px] text-slate-600">Ürün</span>
                  <span className="block text-[14px] font-semibold text-slate-900">
                    Konut Finansmanı
                  </span>
                </a>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="rounded-[12px] border border-slate-200 p-[12px] hover:border-primary transition-colors bg-slate-50"
                >
                  <span className="block text-[13px] text-slate-600">Ürün</span>
                  <span className="block text-[14px] font-semibold text-slate-900">
                    Taşıt Finansmanı
                  </span>
                </a>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="rounded-[12px] border border-slate-200 p-[12px] hover:border-primary transition-colors bg-slate-50"
                >
                  <span className="block text-[13px] text-slate-600">Ürün</span>
                  <span className="block text-[14px] font-semibold text-slate-900">
                    İhtiyaç Finansmanı
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container-1 mb-[40px] md:mb-[64px] pt-[40px] md:pt-[64px]">
        <div className="text-gray-700">
          <div className="pb-[32px]">
            <h3 className="font-semibold text-slate-900 text-[20px] leading-[24px]">
              {institution.aboutTitle}
            </h3>
            <div className="mt-[16px] space-y-[16px]">
              <div className="prose max-w-none">
                <div
                  className="text-slate-900 text-[14px] leading-[20px] whitespace-pre-line [&>h2]:text-slate-900 [&>h2]:text-[18px] [&>h2]:font-semibold [&>h2]:leading-[24px] [&>h2]:mt-[24px] [&>h2]:mb-[12px] [&>h2]:first:mt-0"
                  dangerouslySetInnerHTML={{ __html: institution.aboutDescription }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[24px] px-[24px] py-[16px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[16px] gap-y-[12px] items-start">
              {[
                institution.tel && {
                  label: `${institution.shortName?.toUpperCase() || institution.bankName} Müşteri Hizmetleri`,
                  value: institution.tel,
                  href: toTelHref(institution.tel),
                  isStrong: true,
                },
                {
                  label: 'Çalışma Saatleri',
                  value: formatWorkingHours(institution.openingTime, institution.closingTime),
                  isStrong: true,
                  ariaLabel: `Çalışma Saatleri: ${institution.openingTime}-${institution.closingTime}`,
                },
                {
                  label: 'Resmi Web Sitesi',
                  value: websiteUrl,
                  href: websiteUrl,
                  isExternal: true,
                  isStrong: false,
                },
              ].filter(Boolean).map(
                ({ label, value, href, isExternal, isStrong, ariaLabel }) => (
                  <div key={label} className="flex flex-col gap-[8px] w-full">
                    {isStrong ? (
                      <strong className="text-slate-600 text-[14px] leading-[18px]">
                        {label}
                      </strong>
                    ) : (
                      <span className="text-slate-600 text-[14px] leading-[18px]">
                        {label}
                      </span>
                    )}
                    {href ? (
                      <a
                        href={href}
                        target={isExternal ? '_blank' : undefined}
                        rel="noopener noreferrer nofollow"
                        className="font-bold text-slate-900 text-[16px] leading-[20px] break-all hover:text-primary transition-colors duration-300"
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
                      <span className="font-bold text-slate-900 text-[16px] leading-[20px] break-all">
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
    </div>
  );
};

export default SavingsFinanceDetailPage;


