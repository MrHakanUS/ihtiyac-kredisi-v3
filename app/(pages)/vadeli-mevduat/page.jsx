import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/vadeli-mevduat']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/vadeli-mevduat#webpage",
        "url": "https://ihtiyackredisi.com/vadeli-mevduat",
        "name": "En Yüksek Mevduat Faiz Oranları 2026 | Vadeli Hesap Hesaplama",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Bankaların güncel vadeli mevduat faiz oranlarını karşılaştırın. Mevduat getirisi hesaplama aracı ile anlık net kazancınızı öğrenin ve en yüksek faiz veren bankaya başvurun.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/vadeli-mevduat#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": [
          { "@id": "https://ihtiyackredisi.com/vadeli-mevduat#depositProduct" },
          { "@id": "https://ihtiyackredisi.com/vadeli-mevduat#faq" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/vadeli-mevduat#breadcrumb",
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
            "name": "Vadeli Mevduat",
            "item": "https://ihtiyackredisi.com/vadeli-mevduat"
          }
        ]
      },
      {
        "@type": "InvestmentOrDeposit",
        "@id": "https://ihtiyackredisi.com/vadeli-mevduat#depositProduct",
        "name": "Vadeli Mevduat Hesabı Karşılaştırma",
        "provider": { "@id": "https://ihtiyackredisi.com/#organization" },
        "amount": {
          "@type": "MonetaryAmount",
          "currency": "TRY",
          "minValue": "1000"
        },
        "interestRate": {
          "@type": "QuantitativeValue",
          "unitText": "Yıllık Net Faiz",
          "minValue": "30.00",
          "maxValue": "55.00"
        },
        "potentialAction": {
          "@type": "ControlAction",
          "name": "Mevduat Getirisi Hesapla",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://ihtiyackredisi.com/vadeli-mevduat?anapara={amount}&vade={days}",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/vadeli-mevduat#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Mevduat faizi nasıl hesaplanır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mevduat getirisi; (Anapara / 100) * (Faiz Oranı / 365) * Gün Sayısı formülü ile hesaplanır. Elde edilen brüt kazançtan stopaj vergisi düşülerek net kazanca ulaşılır."
            }
          },
          {
            "@type": "Question",
            "name": "Hangi banka daha yüksek faiz veriyor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Faiz oranları bankaların likidite ihtiyacına göre günlük değişebilir. Genellikle dijital bankalar (Enpara, ON, CEPTETEB) şubesiz bankacılık maliyet avantajıyla daha yüksek faiz sunmaktadır."
            }
          },
          {
            "@type": "Question",
            "name": "Mevduat güvencesi ne kadar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TMSF kapsamında 2026 yılı itibarıyla yurt içi şubelerde açılan gerçek kişilere ait mevduat hesaplarının 650.000 TL'ye kadar olan kısmı devlet güvencesi altındadır."
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
      canonical: '/vadeli-mevduat',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}



