import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/mortgage-haberleri']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/mortgage-haberleri#webpage",
        "url": "https://ihtiyackredisi.com/mortgage-haberleri",
        "name": "Güncel Mortgage ve Konut Kredisi Haberleri 2026",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Konut kredisi faiz oranları, yeni mortgage kampanyaları ve gayrimenkul finansmanı dünyasından en son haberler. Ev sahibi olmak isteyenler için güncel analizler.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/mortgage-haberleri#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/mortgage-haberleri#newsCollection" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/mortgage-haberleri#breadcrumb",
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
            "name": "Mortgage Haberleri",
            "item": "https://ihtiyackredisi.com/mortgage-haberleri"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://ihtiyackredisi.com/mortgage-haberleri#newsCollection",
        "name": "Mortgage Haberleri Arşivi",
        "publisher": { "@id": "https://ihtiyackredisi.com/#organization" },
        "about": {
          "@type": "Thing",
          "name": "Mortgage (Konut Kredisi) Finansmanı"
        }
      },
      {
        "@type": "CreativeWorkSeries",
        "name": "Konut Piyasası Analiz Dizisi",
        "description": "Türkiye konut kredisi piyasasındaki değişimlerin düzenli takibi ve raporlanması.",
        "author": { "@id": "https://ihtiyackredisi.com/#organization" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/mortgage-haberleri#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Mortgage kredisi alırken nelere dikkat edilmeli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mortgage alırken faiz oranlarının yanı sıra ekspertiz ücreti, dosya masrafı ve erken ödeme cezası gibi detaylara dikkat edilmelidir."
            }
          },
          {
            "@type": "Question",
            "name": "Konut kredisi faiz oranları ne zaman düşer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Konut kredisi oranları genellikle Merkez Bankası'nın faiz indirim süreçleri ve piyasadaki enflasyon beklentileri ile paralel olarak düşüş gösterir."
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
      canonical: '/mortgage-haberleri',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}


