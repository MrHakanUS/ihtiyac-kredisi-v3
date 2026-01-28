import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/arac-kredisi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/arac-kredisi#webpage",
        "url": "https://ihtiyackredisi.com/arac-kredisi",
        "name": "Taşıt Kredisi Hesaplama ve Karşılaştırma 2026 | Araç Kredisi",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "En uygun taşıt kredisi faiz oranlarını karşılaştırın. 0 km ve 2. el araç kredisi hesaplama araçları ile hayalinizdeki arabaya giden yolu planlayın.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/arac-kredisi#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/arac-kredisi#vehicleLoan" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/arac-kredisi#breadcrumb",
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
            "name": "Taşıt (Araç) Kredisi",
            "item": "https://ihtiyackredisi.com/arac-kredisi"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/arac-kredisi#vehicleLoan",
        "name": "Taşıt Kredisi (Araç Kredisi)",
        "description": "Sıfır km veya ikinci el otomobil alımları için sunulan, aracın teminat altına alındığı finansman türü.",
        "category": "VehicleLoan",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "18",
          "lowPrice": "3.85",
          "highPrice": "5.50",
          "priceCurrency": "TRY",
          "description": "Bankaların sunduğu aylık taşıt kredisi faiz oranları."
        },
        "potentialAction": {
          "@type": "ControlAction",
          "name": "Araç Kredisi Taksit Hesapla",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://ihtiyackredisi.com/arac-kredisi?tutar={loan_amount}&vade={months}",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/arac-kredisi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "2. el araç kredisi kaç yaşa kadar verilir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bankaların çoğu 2. el taşıt kredisi için aracın yaşının en fazla 10-12 olmasını şart koşar. Bazı bankalarda yaş sınırı 8 ile sınırlı olabilir."
            }
          },
          {
            "@type": "Question",
            "name": "Taşıt kredisinde kasko zorunlu mu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet, bankalar kredilendirdikleri aracı teminat (rehin) olarak aldıkları için kredi süresi boyunca kasko yapılmasını zorunlu tutarlar."
            }
          },
          {
            "@type": "Question",
            "name": "Araç değerinin ne kadarına kredi çıkar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BDDK kuralları gereği, aracın nihai fatura değerine göre kredilendirme oranı değişir. Genellikle 400.000 TL'ye kadar olan kısmın %70'ine kadar kredi kullandırılabilir."
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
      canonical: '/arac-kredisi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}



