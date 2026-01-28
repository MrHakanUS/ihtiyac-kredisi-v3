import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/findeks']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/findeks#webpage",
        "url": "https://ihtiyackredisi.com/findeks",
        "name": "Findeks Kredi Notu Sorgulama ve Öğrenme Rehberi 2026",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Findeks kredi notu nedir, nasıl sorgulanır? Kredi notunuzu yükseltmek için stratejiler ve bankaların kredi onay süreçlerindeki Findeks skor etkisi hakkında detaylı rehber.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/findeks#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": [
          { "@id": "https://ihtiyackredisi.com/findeks#creditScoreService" },
          { "@id": "https://ihtiyackredisi.com/findeks#faq" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/findeks#breadcrumb",
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
            "name": "Findeks Kredi Notu",
            "item": "https://ihtiyackredisi.com/findeks"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://ihtiyackredisi.com/findeks#creditScoreService",
        "name": "Findeks Kredi Notu Analizi",
        "provider": {
          "@type": "Organization",
          "name": "Kredi Kayıt Bürosu (KKB)",
          "alternateName": "Findeks"
        },
        "serviceType": "Financial Assessment",
        "description": "Bireylerin geçmiş ödeme performanslarına dayalı finansal itibar skorlaması.",
        "offers": {
          "@type": "Offer",
          "description": "ihtiyackredisi.com üzerinden kredi notu aralıklarını ve risk raporu detaylarını ücretsiz analiz edebilirsiniz.",
          "price": "0",
          "priceCurrency": "TRY"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/findeks#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Findeks kredi notu kaç olmalı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Genellikle 1500 ve üzeri puanlar 'İyi' ve 'Çok İyi' kategorisinde olup, bankalardan en uygun faiz oranlı kredi onayı alma şansını artırır."
            }
          },
          {
            "@type": "Question",
            "name": "Kredi notu nasıl yükseltilir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ödemelerin düzenli yapılması, kredi kartı limitlerinin doğru kullanılması ve sık kredi başvurusu yapılmaması kredi notunu kademeli olarak yükseltir."
            }
          },
          {
            "@type": "Question",
            "name": "Findeks puanı kredi onayını nasıl etkiler?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Findeks puanı, bankaların kredi karar destek sistemlerindeki en kritik veridir. Puan yükseldikçe risk azalır ve kredi onay ihtimali artar."
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
      canonical: '/findeks',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}


