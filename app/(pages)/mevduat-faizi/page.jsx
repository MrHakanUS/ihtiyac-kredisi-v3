import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/mevduat-faizi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/mevduat-faizi#webpage",
        "url": "https://ihtiyackredisi.com/mevduat-faizi",
        "name": "En Yüksek Mevduat Faiz Oranları ve Karşılaştırma 2026",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Bankaların güncel vadeli hesap mevduat faiz oranlarını karşılaştırın. En yüksek getiri sağlayan bankayı bulun, anlık mevduat kazancı hesaplayın.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/mevduat-faizi#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/mevduat-faizi#depositProduct" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/mevduat-faizi#breadcrumb",
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
            "name": "Mevduat Faizi",
            "item": "https://ihtiyackredisi.com/mevduat-faizi"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/mevduat-faizi#depositProduct",
        "name": "Vadeli Hesap Mevduat Faizi Hesaplama",
        "description": "Bireysel ve kurumsal yatırımcılar için bankaların sunduğu vadeli mevduat ürünlerinin getiri analizi.",
        "category": "DepositAccount",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "20",
          "name": "Güncel Mevduat Faiz Teklifleri",
          "lowPrice": "45.00",
          "highPrice": "55.00",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "name": "Yıllık Brüt Mevduat Faizi Oranı"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/mevduat-faizi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Mevduat faizi nasıl hesaplanır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mevduat getirisi; (Anapara / 100) * (Faiz Oranı / 365) * Gün Sayısı formülü ile hesaplanır. Elde edilen brüt getiriden stopaj vergisi düşülerek net kazanç bulunur."
            }
          },
          {
            "@type": "Question",
            "name": "Bileşik faiz ile basit faiz arasındaki fark nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basit faiz sadece ana para üzerinden hesaplanırken; bileşik faiz, her dönem kazandığınız faizin ana paraya eklenerek bir sonraki dönemde toplam tutar üzerinden faiz işletilmesidir."
            }
          },
          {
            "@type": "Question",
            "name": "Mevduat hesaplarında devlet güvencesi ne kadardır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Türkiye'de faaliyet gösteren bankalardaki yurt içi yerleşik gerçek kişilere ait mevduat hesaplarının 650.000 TL'ye kadar olan kısmı TMSF güvencesi altındadır."
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
      canonical: '/mevduat-faizi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}



