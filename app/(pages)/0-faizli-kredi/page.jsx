import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/0-faizli-kredi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/0-faizli-kredi#webpage",
        "url": "https://ihtiyackredisi.com/0-faizli-kredi",
        "name": "0 Faizli Kredi Veren Bankalar 2026 | Faizsiz Nakit Avans",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Bankaların yeni müşterilerine özel sunduğu %0 faizli kredi ve faizsiz taksitli nakit avans kampanyalarını karşılaştırın. En güncel faizsiz kredi tekliflerini listeleyin.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/0-faizli-kredi#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/0-faizli-kredi#loanOffers" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/0-faizli-kredi#breadcrumb",
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
            "name": "0 Faizli Kredi",
            "item": "https://ihtiyackredisi.com/0-faizli-kredi"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/0-faizli-kredi#loanOffers",
        "name": "Sıfır Faizli Finansman Seçenekleri",
        "description": "Bankaların pazarlama stratejileri kapsamında sunduğu masrafsız ve faizsiz kredi paketleri.",
        "category": "LoanOrCredit",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "10",
          "lowPrice": "0",
          "highPrice": "0",
          "priceCurrency": "TRY",
          "annualPercentageRate": "0"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/0-faizli-kredi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kimler 0 faizli kredi alabilir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Genellikle ilgili bankanın ilk kez müşterisi olacak kişiler, mobil uygulama üzerinden görüntülü görüşme ile kayıt olduklarında bu kampanyalardan yararlanabilir."
            }
          },
          {
            "@type": "Question",
            "name": "Faizsiz kredilerde limit ne kadardır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bankaların 2026 yılı kampanyalarında 0 faizli kredi limitleri genellikle 10.000 TL ile 50.000 TL arasında değişmekte olup, vadelendirme 6 aya kadar yapılabilmektedir."
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
      canonical: '/0-faizli-kredi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}
