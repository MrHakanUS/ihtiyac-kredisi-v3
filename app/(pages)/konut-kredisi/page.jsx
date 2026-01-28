import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/konut-kredisi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/konut-kredisi#webpage",
        "url": "https://ihtiyackredisi.com/konut-kredisi",
        "name": "En Uygun Konut Kredisi Hesaplama ve Karşılaştırma 2026",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Güncel konut kredisi faiz oranlarını karşılaştırın, 120 aya varan vade seçenekleri ile ev kredisi hesaplaması yapın. Hayalinizdeki ev için en uygun kredi teklifleri burada.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/konut-kredisi#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/konut-kredisi#mortgageProduct" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/konut-kredisi#breadcrumb",
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
            "name": "Konut Kredisi",
            "item": "https://ihtiyackredisi.com/konut-kredisi"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/konut-kredisi#mortgageProduct",
        "name": "Konut Kredisi (Mortgage) Karşılaştırma ve Başvuru",
        "description": "Sıfır veya ikinci el konut alımları için bankaların sunduğu uzun vadeli konut finansman ürünleri.",
        "category": "MortgageLoan",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "15",
          "lowPrice": "2.80",
          "highPrice": "4.50",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "name": "Aylık Konut Kredisi Faiz Oranı"
          }
        },
        "termCode": "P120M",
        "loanTerm": {
          "@type": "QuantitativeValue",
          "value": "120",
          "unitText": "Months"
        },
        "amount": {
          "@type": "MonetaryAmount",
          "currency": "TRY",
          "minValue": "100000",
          "maxValue": "10000000"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/konut-kredisi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Konut kredisi vadesi en fazla kaç ay olabilir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Türkiye'de konut kredisi vadeleri bankalara göre değişmekle birlikte genellikle en fazla 120 ay (10 yıl) olarak uygulanmaktadır. Bazı bankalar özel kampanyalarla bu süreyi 180 veya 240 aya çıkarabilmektedir."
            }
          },
          {
            "@type": "Question",
            "name": "Evin değerinin ne kadarına konut kredisi çıkar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BDDK düzenlemelerine göre, satın alınacak konutun enerji sınıfına ve değerine bağlı olarak ekspertiz değerinin %75'i ile %90'ı arasında kredi kullanılabilmektedir."
            }
          },
          {
            "@type": "Question",
            "name": "Konut kredisinde ekspertiz süreci nasıl işler?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banka tarafından atanan SPK lisanslı bir gayrimenkul değerleme uzmanı evi ziyaret ederek konutun fiziksel durumunu, yasal evraklarını ve piyasa değerini raporlar. Kredi tutarı bu rapor üzerinden belirlenir."
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
      canonical: '/konut-kredisi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}



