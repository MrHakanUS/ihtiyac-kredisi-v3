import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import BadgeComponent from '@/components/common/BadgeComponent';
import { canonicalBankMap } from '@/constants/banks';
import CORE from '@/CORE2';

export async function generateMetadata() {
  const metadata = CORE['/banka'];
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/banka#webpage",
        "url": "https://ihtiyackredisi.com/banka",
        "name": "Anlaşmalı Bankalar ve Kredi Veren Finans Kuruluşları",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Türkiye'de faaliyet gösteren tüm bankaların kredi, kredi kartı ve mevduat ürünlerini inceleyin. Bankaların güncel faiz oranlarını ve kampanya detaylarını karşılaştırın.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/banka#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/banka#bankList" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/banka#breadcrumb",
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
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://ihtiyackredisi.com/banka#bankList",
        "name": "Türkiye'nin Önde Gelen Bankaları",
        "description": "İhtiyaç kredisi, taşıt kredisi ve mevduat ürünleri sunan bankaların listesi.",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Akbank", "url": "https://ihtiyackredisi.com/banka/akbank" },
          { "@type": "ListItem", "position": 2, "name": "Garanti", "url": "https://ihtiyackredisi.com/banka/garanti" },
          { "@type": "ListItem", "position": 3, "name": "QNB", "url": "https://ihtiyackredisi.com/banka/qnb" },
          { "@type": "ListItem", "position": 4, "name": "İş Bankası", "url": "https://ihtiyackredisi.com/banka/is-bankasi" },
          { "@type": "ListItem", "position": 5, "name": "Yapı Kredi", "url": "https://ihtiyackredisi.com/banka/yapi-kredi" },
          { "@type": "ListItem", "position": 6, "name": "TEB", "url": "https://ihtiyackredisi.com/banka/teb" },
          { "@type": "ListItem", "position": 7, "name": "DenizBank", "url": "https://ihtiyackredisi.com/banka/denizbank" },
          { "@type": "ListItem", "position": 8, "name": "Enpara", "url": "https://ihtiyackredisi.com/banka/enpara" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/banka#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hangi bankalar en kolay kredi veriyor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kredi verme süreçleri bankaların güncel risk politikalarına ve kişinin kredi notuna göre değişir. Genellikle dijital bankacılık kanalları (Enpara, CepteTEB vb.) daha hızlı sonuç vermektedir."
            }
          },
          {
            "@type": "Question",
            "name": "Bankaların çalışma saatleri nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Türkiye'deki bankalar genellikle hafta içi 09:00 - 17:00 veya 17:30 saatleri arasında hizmet vermektedir. Öğle arası tatili 12:30 - 13:30 saatleri arasındadır."
            }
          },
          {
            "@type": "Question",
            "name": "Banka seçerken nelere dikkat edilmelidir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banka seçiminde faiz oranları, yıllık kart aidatları, EFT/Havale masrafları ve mobil uygulama kullanım kolaylığı en önemli kriterlerdir."
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
      canonical: '/banka',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  };
}

function BanksPage() {
  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Bankalar' },
  ];

  const banks = Object.values(canonicalBankMap)
    .filter((b) => !!b?.slug)
    .sort((a, b) => {
      const ap = Number.isFinite(a.priority) ? a.priority : 99;
      const bp = Number.isFinite(b.priority) ? b.priority : 99;
      if (ap !== bp) return ap - bp;
      return a.bankName.localeCompare(b.bankName, 'tr');
    });

  return (
    <main>
      <div className=''>
        <div className='custom-container-1 flex flex-col items-center px-4 pt-[56px]'>
          <div className='max-w-[920px] w-full flex justify-center items-center text-center'>
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div className='custom-container-1 py-8 px-4'>
        <header className='max-w-[1200px] w-full mx-auto mb-[16px]'>
          <h1 className='font-semibold text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] text-slate-900'>
            Bankalar
          </h1>
          <p className='text-slate-600 text-[14px] leading-[20px] mt-2'>
            Türkiye’deki bankaları inceleyin. Detay sayfalarında ihtiyaç, konut
            ve taşıt kredilerine ulaşın.
          </p>
        </header>

        <section className='max-w-[1200px] w-full mx-auto'>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]'>
            {banks.map((bank) => (
              <li key={bank.slug}>
                <Link
                  href={`/banka/${bank.slug}`}
                  className='group block bg-white border border-slate-200 hover:border-primary transition-colors duration-300 rounded-[16px] p-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.03)] h-full focus:outline-none'
                >
                  <div className='flex items-center justify-between gap-[20px]'>
                    <div className='flex flex-col gap-[12px]'>
                      <div className='flex items-center gap-[8px]'>
                        {bank.sponsored && <BadgeComponent badge='sponsor' />}
                        {bank.state && <BadgeComponent badge='state' />}
                        {bank.highPoint && <BadgeComponent badge='high' />}
                      </div>
                      <h2 className='font-medium text-[16px] leading-[22px] text-slate-900'>
                        {bank.bankName}
                      </h2>
                    </div>
                    <div className='mb-[12px] flex items-center gap-[12px]'>
                      <div className='rounded-[10px]'>
                        <Image
                          src={bank.logo}
                          alt={bank.bankName}
                          width={240}
                          height={80}
                          className='h-[28px] sm:h-[32px] w-[64px] sm:w-[120px] object-contain'
                        />
                      </div>
                    </div>
                  </div>
                  {bank.shortDescription ? (
                    <p className='mt-[6px] text-[13px] leading-[18px] text-slate-600 line-clamp-3'>
                      {bank.shortDescription}
                    </p>
                  ) : null}

                  <div className='mt-[12px] inline-flex items-center gap-[6px] text-[13px] leading-[18px] text-slate-700 group-hover:text-primary transition-colors duration-300'>
                    <span>Bankayı incele</span>
                    <span
                      aria-hidden
                      className='transition-transform group-hover:translate-x-[2px]'
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

export default BanksPage;
