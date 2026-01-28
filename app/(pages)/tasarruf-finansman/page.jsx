import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import { canonicalSavingsFinanceMap } from '@/constants/tasarruf-finansman';
import CORE from '@/CORE2';

export async function generateMetadata() {
  const metadata = CORE['/tasarruf-finansman'];
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/tasarruf-finansman#webpage",
        "url": "https://ihtiyackredisi.com/tasarruf-finansman",
        "name": metadata.title,
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": metadata.desc,
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/tasarruf-finansman#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/tasarruf-finansman#savingFinanceService" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/tasarruf-finansman#breadcrumb",
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
          }
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://ihtiyackredisi.com/tasarruf-finansman#savingFinanceService",
        "name": "Tasarruf Finansman Sistemleri Karşılaştırma",
        "description": "BDDK denetimindeki tasarruf finansman şirketlerinin sunduğu faizsiz dayanışma modellerinin analizi.",
        "category": "InvestmentOrDeposit",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "Offer",
          "name": "Faizsiz Ev ve Araç Finansmanı",
          "description": "Organizasyon ücreti ile faizsiz taksitlendirme seçenekleri."
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/tasarruf-finansman#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Tasarruf finansman sistemi nasıl çalışır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sistem, belirli bir tasarruf grubuna dahil olan kişilerin birikimlerini birleştirerek, kura veya belirli bir sıralama ile sırası gelenin ev veya araç sahibi olmasını sağlayan faizsiz bir yardımlaşma modelidir."
            }
          },
          {
            "@type": "Question",
            "name": "Tasarruf finansman şirketleri devlet denetiminde mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet, Türkiye'deki tasarruf finansman şirketleri 6361 sayılı kanun kapsamında BDDK (Bankacılık Düzenleme ve Denetleme Kurumu) denetimine ve lisansına tabidir."
            }
          },
          {
            "@type": "Question",
            "name": "Organizasyon ücreti nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sisteme dahil olurken şirketin sunduğu hizmet, operasyonel süreçler ve yönetim giderleri karşılığında peşin veya taksitle ödenen hizmet bedelidir."
            }
          }
        ]
      }
    ]
  };
  
  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: '/tasarruf-finansman',
    },
    other: {
      'application/ld+json': JSON.stringify(schema)
    }
  };
}

function SavingsFinanceListPage() {
  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Tasarruf Finansman' },
  ];

  const institutions = Object.values(canonicalSavingsFinanceMap)
    .filter((i) => !!i?.slug)
    .sort((a, b) => {
      const ap = Number.isFinite(a.priority) ? a.priority : 99;
      const bp = Number.isFinite(b.priority) ? b.priority : 99;
      if (ap !== bp) return ap - bp;
      return (a.bankName || a.shortName).localeCompare(b.bankName || b.shortName, 'tr');
    });

  return (
    <main>
      <div>
        <div className="custom-container-1 flex flex-col items-center px-4 pt-[56px]">
          <div className="max-w-[920px] w-full flex justify-center items-center text-center">
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div className="custom-container-1 py-8 px-4">
        <header className="max-w-[1200px] w-full mx-auto mb-[16px]">
          <h1 className="font-semibold text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] text-slate-900">
            Tasarruf Finans Şirketleri
          </h1>
          <p className="text-slate-600 text-[14px] leading-[20px] mt-2">
            Türkiye’de tasarruf finansman modeliyle faaliyet gösteren Eminevim, Birevim, Fuzul Ev,
            Katılımevim, Sinpaş ve Emlak Katılım gibi firmaları inceleyin. Detay sayfalarında
            iletişim bilgilerine ve çalışma saatlerine ulaşın.
          </p>
        </header>

        <section className="max-w-[1200px] w-full mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
            {institutions.map((institution) => (
              <li key={institution.slug}>
                <Link
                  href={`/tasarruf-finansman/${institution.slug}`}
                  className="group block bg-white border border-slate-200 hover:border-primary transition-colors duration-300 rounded-[16px] p-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.03)] h-full focus:outline-none"
                >
                  <div className="flex items-center justify-between gap-[20px]">
                    <div className="flex flex-col gap-[8px]">
                      <h2 className="font-medium text-[16px] leading-[22px] text-slate-900">
                        {institution.fullName || institution.bankName}
                      </h2>
                      <p className="text-[13px] leading-[18px] text-slate-600">
                        {institution.shortName?.toUpperCase() || institution.bankName} tasarruf finansman şirketi
                      </p>
                    </div>
                    <div className="mb-[12px] flex items-center gap-[12px]">
                      <div className="rounded-[10px]">
                        <Image
                          src={institution.logo || '/logo.svg'}
                          alt={institution.bankName || institution.shortName}
                          width={120}
                          height={40}
                          className="h-[28px] sm:h-[32px] w-[64px] sm:w-[96px] object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-[12px] inline-flex items-center gap-[6px] text-[13px] leading-[18px] text-slate-700 group-hover:text-primary transition-colors duration-300">
                    <span>Detayları incele</span>
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-[2px]"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default SavingsFinanceListPage;


