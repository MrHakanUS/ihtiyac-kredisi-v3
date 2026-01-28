import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/emekli-promosyonu']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/emekli-promosyonu#webpage",
        "url": "https://ihtiyackredisi.com/emekli-promosyonu",
        "name": "2026 Emekli Promosyon Ücretleri | Banka Banka Güncel Liste",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "En yüksek emekli promosyonu veren bankalar hangileri? SGK, Bağ-Kur ve Emekli Sandığı emeklileri için güncel banka promosyon tutarları ve başvuru şartları.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/emekli-promosyonu#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": [
          { "@id": "https://ihtiyackredisi.com/emekli-promosyonu#promotionOffers" },
          { "@id": "https://ihtiyackredisi.com/emekli-promosyonu#faq" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/emekli-promosyonu#breadcrumb",
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
            "name": "Emekli Promosyonları",
            "item": "https://ihtiyackredisi.com/emekli-promosyonu"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/emekli-promosyonu#promotionOffers",
        "name": "Banka Emekli Promosyon Kampanyaları",
        "description": "Bankaların emekli maaş müşterilerine sunduğu nakit promosyon ödemeleri.",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "15",
          "lowPrice": "8000",
          "highPrice": "24000",
          "priceCurrency": "TRY",
          "description": "Maaş miktarına göre değişen nakit promosyon tutarları."
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/emekli-promosyonu#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Emekli promosyonu almak için ne yapmalı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Maaşınızı almak istediğiniz bankaya şubeden, ATM'den veya e-Devlet üzerinden 3 yıl süreyle kalma taahhüdü vererek başvuruda bulunabilirsiniz."
            }
          },
          {
            "@type": "Question",
            "name": "Maaş taşıma işlemi ne kadar sürer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Maaş taşıma işlemi genellikle bir sonraki maaş döneminde aktifleşir. Banka değişikliği onaylandıktan sonra ilk maaşla birlikte veya birkaç gün içinde promosyon yatar."
            }
          },
          {
            "@type": "Question",
            "name": "Promosyon alıp tekrar banka değiştirmek mümkün mü?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet, kalan sürenin promosyon tutarını iade ederek (kıstelyevm usulü) istediğiniz zaman başka bir bankaya geçiş yapabilirsiniz."
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
      canonical: '/emekli-promosyonu',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}


