import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/en-uygun-kredi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/en-uygun-kredi#webpage",
        "url": "https://ihtiyackredisi.com/en-uygun-kredi",
        "name": "En Uygun Kredi Hangi Bankada? | Ocak 2026 Kredi Karşılaştırma",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "En uygun kredi seçeneklerini anında bulun. 20'den fazla bankanın faiz oranlarını karşılaştırın, düşük maliyetli ve en uygun ihtiyaç kredisi tekliflerine ulaşın.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/en-uygun-kredi#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/en-uygun-kredi#comparisonService" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/en-uygun-kredi#breadcrumb",
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
            "name": "En Uygun Kredi",
            "item": "https://ihtiyackredisi.com/en-uygun-kredi"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/en-uygun-kredi#comparisonService",
        "name": "En Uygun Kredi Karşılaştırma Hizmeti",
        "description": "Türkiye'deki bankaların sunduğu en düşük faizli ihtiyaç kredisi tekliflerinin analiz edildiği karşılaştırma motoru.",
        "category": "ComparisonService",
        "provider": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "22",
          "lowPrice": "3.39",
          "highPrice": "5.95",
          "priceCurrency": "TRY",
          "description": "Bankaların sunduğu aylık en düşük ve en yüksek faiz oranları."
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/en-uygun-kredi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "En uygun kredi nasıl bulunur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En uygun krediyi bulmak için sadece faiz oranına değil, yıllık maliyet oranına (YMO) ve tahsis ücretlerine de bakılmalıdır. Karşılaştırma aracımız tüm bu masrafları sizin için hesaplar."
            }
          },
          {
            "@type": "Question",
            "name": "En düşük faizli krediyi kimler alabilir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Genellikle kredi notu 1500 ve üzerinde olan, belgelenebilir düzenli geliri olan ve borç/gelir rasyosu uygun olan kişiler en düşük faizli kredi tekliflerinden yararlanabilir."
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
      canonical: '/en-uygun-kredi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}


