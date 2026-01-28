import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/tasit-kredisi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/tasit-kredisi#webpage",
        "url": "https://ihtiyackredisi.com/tasit-kredisi",
        "name": "En Uygun Taşıt Kredisi Hesaplama ve Faiz Oranları 2026",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Sıfır ve 2. el araçlar için bankaların sunduğu en uygun taşıt kredisi faiz oranlarını karşılaştırın. 48 aya varan vade seçenekleri ile anında taşıt kredisi hesaplayın.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/tasit-kredisi#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/tasit-kredisi#autoLoan" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/tasit-kredisi#breadcrumb",
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
            "name": "Taşıt Kredisi",
            "item": "https://ihtiyackredisi.com/tasit-kredisi"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/tasit-kredisi#autoLoan",
        "name": "Taşıt Kredisi Karşılaştırma ve Hesaplama",
        "description": "Yeni veya ikinci el otomobil alımları için sunulan bankacılık finansman ürünü.",
        "category": "AutoLoan",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "12",
          "lowPrice": "3.75",
          "highPrice": "5.50",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "name": "Aylık Taşıt Kredisi Faiz Oranı"
          }
        },
        "termCode": "P48M",
        "amount": {
          "@type": "MonetaryAmount",
          "currency": "TRY",
          "minValue": "50000",
          "maxValue": "2000000"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/tasit-kredisi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Taşıt kredisi vadesi en fazla kaç aydır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BDDK kurallarına göre taşıt kredisi vadeleri aracın fatura değerine göre değişmektedir. Genellikle 400.000 TL ve altındaki araçlar için 48 ay vade imkanı sunulurken, daha yüksek bedelli araçlarda vade 12 ile 24 aya kadar düşmektedir."
            }
          },
          {
            "@type": "Question",
            "name": "2. el araçlar için taşıt kredisi çekilebilir mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet, bankalar genellikle 10 veya 15 yaşından büyük olmayan ikinci el araçlar için taşıt kredisi kullandırmaktadır. Aracın yaşı ve kasko değeri kredi miktarını belirleyen ana unsurlardır."
            }
          },
          {
            "@type": "Question",
            "name": "Taşıt kredisinde rehin işlemi nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kredi kullanılan araç üzerine banka tarafından 'rehin' (satılamaz şerhi) konulur. Kredi borcu tamamen kapandığında bu rehin kaldırılır."
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
      canonical: '/tasit-kredisi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}



