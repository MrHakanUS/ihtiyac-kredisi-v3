import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/ihtiyac-kredisi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/ihtiyac-kredisi#webpage",
        "url": "https://ihtiyackredisi.com/ihtiyac-kredisi",
        "name": "En Uygun İhtiyaç Kredisi Hesaplama ve Karşılaştırma 2026",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Tüm bankaların ihtiyaç kredisi faiz oranlarını karşılaştırın. 36 aya varan vade seçenekleri ve en düşük faizli kredi teklifleri ile anında hesaplama yapın.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/ihtiyac-kredisi#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/ihtiyac-kredisi#loanProduct" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/ihtiyac-kredisi#breadcrumb",
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
            "name": "İhtiyaç Kredisi",
            "item": "https://ihtiyackredisi.com/ihtiyac-kredisi"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/ihtiyac-kredisi#loanProduct",
        "name": "Bireysel İhtiyaç Kredisi Karşılaştırma Servisi",
        "description": "Bankaların bireysel tüketici ihtiyaçları için sunduğu nakit kredi ürünlerinin karşılaştırmalı listesi.",
        "category": "PersonalLoan",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "22",
          "lowPrice": "3.89",
          "highPrice": "6.20",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "name": "Aylık Akdi Faiz Oranı"
          }
        },
        "termCode": "P36M",
        "amount": {
          "@type": "MonetaryAmount",
          "currency": "TRY",
          "minValue": "1000",
          "maxValue": "500000"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/ihtiyac-kredisi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "En uygun ihtiyaç kredisi nasıl bulunur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En uygun krediyi bulmak için sadece faiz oranına değil, yıllık maliyet oranına ve bankanın sunduğu vade seçeneklerine bakılmalıdır. ihtiyackredisi.com üzerinden tüm bankaları tek ekranda karşılaştırabilirsiniz."
            }
          },
          {
            "@type": "Question",
            "name": "İhtiyaç kredisi vadesi en fazla ne kadar olabilir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BDDK mevzuatına göre ihtiyaç kredisi vadeleri 50.000 TL'ye kadar 36 ay, 50.000 TL - 100.000 TL arası 24 ay, 100.000 TL üzeri için ise 12 ay ile sınırlıdır."
            }
          },
          {
            "@type": "Question",
            "name": "İhtiyaç kredisi başvurusu için hangi belgeler gerekir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Genellikle kimlik belgesi, gelir belgesi ve ikametgah gereklidir. Ancak birçok banka artık dijital kanallar üzerinden belgesiz ve anında kredi onayı verebilmektedir."
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
      canonical: '/ihtiyac-kredisi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}



