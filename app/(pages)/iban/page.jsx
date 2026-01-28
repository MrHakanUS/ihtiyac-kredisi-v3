import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/iban']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/iban#webpage",
        "url": "https://ihtiyackredisi.com/iban",
        "name": "IBAN Hesaplama ve Sorgulama 2026 | IBAN No Öğrenme",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "IBAN nedir, nasıl hesaplanır? Banka hesap numaranızdan IBAN oluşturun veya mevcut IBAN numarasının doğruluğunu kontrol edin. IBAN çözümleme rehberi.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/iban#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": [
          { "@id": "https://ihtiyackredisi.com/iban#ibanTool" },
          { "@id": "https://ihtiyackredisi.com/iban#howToFindIban" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/iban#breadcrumb",
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
            "name": "IBAN İşlemleri",
            "item": "https://ihtiyackredisi.com/iban"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://ihtiyackredisi.com/iban#ibanTool",
        "name": "IBAN Hesaplama ve Doğrulama Aracı",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "author": { "@id": "https://ihtiyackredisi.com/#organization" },
        "description": "Hesap numarası ve şube kodu bilgilerini kullanarak TR standartlarında IBAN oluşturma aracı.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "TRY"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://ihtiyackredisi.com/iban#howToFindIban",
        "name": "IBAN Numarası Nasıl Öğrenilir?",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Bankanızın mobil uygulamasına veya internet şubesine giriş yapın."
          },
          {
            "@type": "HowToStep",
            "text": "'Hesaplarım' sekmesine tıklayarak ilgili hesabı seçin."
          },
          {
            "@type": "HowToStep",
            "text": "Hesap detayları ekranında TR ile başlayan 26 haneli IBAN numaranızı kopyalayın."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/iban#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "IBAN kaç haneden oluşur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Türkiye'de IBAN (International Bank Account Number) standart olarak 26 hanelidir ve 'TR' ülke kodu ile başlar."
            }
          },
          {
            "@type": "Question",
            "name": "Yanlış IBAN'a para gönderilirse ne olur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IBAN ve alıcı ismi uyuşmuyorsa transfer banka tarafından reddedilir. Ancak bilgiler uyuşuyor ve para yanlış kişiye gittiyse, derhal bankanızla iletişime geçerek iade süreci başlatmalısınız."
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
      canonical: '/iban',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  return <ClientPage />
}


