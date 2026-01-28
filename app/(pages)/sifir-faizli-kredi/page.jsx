import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/sifir-faizli-kredi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/sifir-faizli-kredi#webpage",
        "url": "https://ihtiyackredisi.com/sifir-faizli-kredi",
        "name": "Sıfır Faizli Kredi Başvurusu 2026 | Faizsiz Taksitli Nakit Avans",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "2026 yılı güncel sıfır faizli kredi kampanyalarını inceleyin. Bankaların yeni müşterilerine özel %0 faizli nakit destek ve finansman tekliflerini anında karşılaştırın.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/sifir-faizli-kredi#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/sifir-faizli-kredi#zeroInterestProduct" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/sifir-faizli-kredi#breadcrumb",
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
            "name": "Sıfır Faizli Kredi",
            "item": "https://ihtiyackredisi.com/sifir-faizli-kredi"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/sifir-faizli-kredi#zeroInterestProduct",
        "name": "Sıfır Faizli Tüketici Finansmanı",
        "description": "Bankaların pazarlama bütçeleriyle finanse edilen, geri ödemesi faizsiz olarak gerçekleştirilen kısa vadeli kredi ürünleri.",
        "category": "LoanOrCredit",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "12",
          "lowPrice": "0",
          "highPrice": "0",
          "priceCurrency": "TRY",
          "availability": "https://schema.org/InStock"
        },
        "annualPercentageRate": "0"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/sifir-faizli-kredi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Sıfır faizli kredi gerçekten masrafsız mı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sıfır faizli kredilerde faiz uygulanmaz; ancak hayat sigortası ve çok düşük tutarlı tahsis ücretleri banka politikasına göre değişiklik gösterebilir."
            }
          },
          {
            "@type": "Question",
            "name": "Faizsiz kredi veren katılım bankaları hangileridir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kuveyt Türk, Vakıf Katılım, Ziraat Katılım ve Emlak Katılım gibi bankalar 'kar payı' esasıyla çalışmakta olup, belirli dönemlerde yeni müşterilere özel sıfır maliyetli finansmanlar sunmaktadır."
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
      canonical: '/sifir-faizli-kredi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}


