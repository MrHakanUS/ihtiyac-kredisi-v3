import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/merkez-bankasi-faiz-karari']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/merkez-bankasi-faiz-karari#webpage",
        "url": "https://ihtiyackredisi.com/merkez-bankasi-faiz-karari",
        "name": "Merkez Bankası Faiz Kararı Ne Zaman? | TCMB Faiz Beklentisi",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "TCMB PPK toplantı takvimi ve Merkez Bankası faiz kararı sonuçları. Faiz kararlarının ihtiyaç, konut ve taşıt kredisi faizlerine etkisini uzman analizleriyle takip edin.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/merkez-bankasi-faiz-karari#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/merkez-bankasi-faiz-karari#article" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/merkez-bankasi-faiz-karari#breadcrumb",
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
            "name": "Merkez Bankası Faiz Kararı",
            "item": "https://ihtiyackredisi.com/merkez-bankasi-faiz-karari"
          }
        ]
      },
      {
        "@type": "NewsArticle",
        "@id": "https://ihtiyackredisi.com/merkez-bankasi-faiz-karari#article",
        "headline": "Merkez Bankası Faiz Kararı ve Kredi Piyasasına Etkileri",
        "description": "Türkiye Cumhuriyet Merkez Bankası (TCMB) Para Politikası Kurulu toplantı kararları ve piyasa beklentileri.",
        "image": "https://ihtiyackredisi.com/merkez-bankasi-faiz-karari-kapak.png",
        "datePublished": "2026-01-01",
        "dateModified": "2026-01-22",
        "author": { "@id": "https://ihtiyackredisi.com/#organization" },
        "publisher": { "@id": "https://ihtiyackredisi.com/#organization" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/merkez-bankasi-faiz-karari#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Merkez Bankası faiz kararı kredi faizlerini nasıl etkiler?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TCMB politika faizini artırdığında bankaların fonlama maliyetleri yükselir, bu da ihtiyaç ve konut kredisi faiz oranlarına artış olarak yansır. Faiz indirimi ise genellikle kredi maliyetlerini düşürür."
            }
          },
          {
            "@type": "Question",
            "name": "PPK toplantısı ne zaman yapılır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Para Politikası Kurulu (PPK) toplantıları TCMB tarafından yıllık olarak ilan edilen takvime göre ayda bir kez gerçekleştirilir."
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
      canonical: '/merkez-bankasi-faiz-karari',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}


