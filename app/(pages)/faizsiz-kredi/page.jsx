import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/faizsiz-kredi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/faizsiz-kredi#webpage",
        "url": "https://ihtiyackredisi.com/faizsiz-kredi",
        "name": "Faizsiz Kredi Veren Bankalar ve Başvuru Şartları 2026",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "primaryImageOfPage": { "@id": "https://ihtiyackredisi.com/#logo" },
        "description": "En güncel faizsiz kredi ve taksitli nakit avans kampanyalarını karşılaştırın. Bankaların yeni müşterilere özel %0 faizli kredi fırsatlarını anında inceleyin.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/faizsiz-kredi#breadcrumb" },
        "dateModified": "2026-01-21",
        "about": { "@id": "https://ihtiyackredisi.com/faizsiz-kredi#loan" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/faizsiz-kredi#breadcrumb",
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
            "name": "Faizsiz Kredi",
            "item": "https://ihtiyackredisi.com/faizsiz-kredi"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/faizsiz-kredi#loan",
        "name": "%0 Faizli Kredi ve Nakit Avans Kampanyaları",
        "description": "Bankaların yeni müşterilerine sunduğu faizsiz nakit çözümleri. 10.000 TL ile 50.000 TL arası değişen tutarlarda %0 faizli kredi seçenekleri.",
        "category": "ZeroInterestLoan",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "8",
          "lowPrice": "0.00",
          "highPrice": "0.00",
          "priceCurrency": "TRY",
          "description": "Yeni müşterilere özel 6 aya varan vadelerle faizsiz kredi seçenekleri."
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/faizsiz-kredi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kimler faizsiz kredi alabilir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Genellikle bankaların ilk kez müşterisi olacak kişiler, mobil uygulama üzerinden hesap açmaları durumunda faizsiz kredi veya taksitli nakit avans kampanyalarından yararlanabilir."
            }
          },
          {
            "@type": "Question",
            "name": "Faizsiz kredi limiti ne kadardır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Faizsiz kredi limitleri bankadan bankaya değişmekle birlikte genellikle 10.000 TL ile 50.000 TL arasında seyretmektedir."
            }
          },
          {
            "@type": "Question",
            "name": "Faizsiz kredide masraf ödenir mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Faizsiz kredilerde faiz oranı %0 olsa da, kredi tahsis ücreti (binde 5) ve sigorta masrafları banka politikasına göre uygulanabilir."
            }
          }
        ]
      }
    ]
  }
  
  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: '/faizsiz-kredi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}


