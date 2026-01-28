import AdZoneComponent from '@/components/common/AdZoneComponent';
import AdvantagesComponent from '@/components/container/AdvantagesComponent';
import FaqComponent from '@/components/container/FaqComponent';
import HeroComponent from '@/components/container/HeroComponent';
import OffersComponent from '@/components/container/OffersComponent';
import TextComponent from '@/components/container/TextComponent';
import React from 'react';
import CORE from '@/CORE2';

export async function generateMetadata() {
  const metadata = CORE['/']
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ihtiyackredisi.com/#organization",
        "name": "İhtiyaç Kredisi",
        "alternateName": [
          "ihtiyackredisi.com",
          "Türkiye'nin kredi karar altyapısı",
          "Kredi Karşılaştırma Platformu"
        ],
        "slogan": "Türkiye'nin Kredi Karar Altyapısı",
        "legalName": "AK GİRİŞİM SİBER YAZILIM OTONOM A.Ş.",
        "taxID": "0111295529",
        "url": "https://ihtiyackredisi.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://ihtiyackredisi.com/#logo",
          "url": "https://ihtiyackredisi.com/logo.png"
        },
        "founder": {
          "@type": "Person",
          "@id": "https://ihtiyackredisi.com/#hakan-us",
          "name": "Hakan US",
          "jobTitle": "Founder",
          "sameAs": [
            "https://linkedin.com/in/hakan-us-724462127/"
          ]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sinanpaşa Mah. Süleyman Seba Cad. No:14/5 Beşiktaş",
          "addressLocality": "İstanbul",
          "addressRegion": "İstanbul",
          "postalCode": "34353",
          "addressCountry": "TR"
        },
        "knowsAbout": [
          "Kredi karar destek sistemleri",
          "İhtiyaç Kredisi",
          "Taşıt Kredisi",
          "Konut Kredisi",
          "Kredi notu",
          "Faiz oranları",
          "Kredi hesaplama",
          "Kredi karşılaştırma",
          "Tüketici kredileri",
          "Bankacılık ürünleri",
          "Finansal karşılaştırma",
          "Kredi skorlama modelleri",
          "Finansal veri analitiği",
          "Bankacılık API entegrasyonu",
          "Tüketici finansmanı regülasyonları"
        ],
        "sameAs": [
          "https://linkedin.com/company/ihtiyackredisi-com"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+90-850-302-47-90",
          "contactType": "customer support",
          "availableLanguage": "Turkish",
          "areaServed": "TR"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://ihtiyackredisi.com/#website",
        "url": "https://ihtiyackredisi.com/",
        "name": "İhtiyaç Kredisi",
        "publisher": { "@id": "https://ihtiyackredisi.com/#organization" },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": "https://ihtiyackredisi.com/arama?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          {
            "@type": "ControlAction",
            "name": "Kredi Hesaplama Motoru",
            "identifier": "loan-calculator-action",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://ihtiyackredisi.com/hesaplama?tutar={loan_amount}&vade={loan_term}",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "actionStatus": "http://schema.org/PotentialActionStatus",
            "description": "Kredi tutarı ve vade seçerek anlık faiz ve taksit hesaplaması yapın.",
            "object": {
              "@type": "FinancialProduct",
              "name": "Kredi Hesaplama Verisi"
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/#webpage",
        "url": "https://ihtiyackredisi.com/",
        "name": metadata.title,
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "mainEntity": { "@id": "https://ihtiyackredisi.com/#application" },
        "about": { "@id": "https://ihtiyackredisi.com/#loan" },
        "description": metadata.desc,
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/#breadcrumb" },
        "dateModified": "2026-01-19"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://ihtiyackredisi.com/#application",
        "name": "İhtiyaç Kredisi Karar Destek Algoritması",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "author": { "@id": "https://ihtiyackredisi.com/#organization" },
        "featureList": [
          "Anlık Faiz Hesaplama",
          "Banka Karşılaştırma",
          "Kredi Uygunluk Testi"
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "TRY"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://ihtiyackredisi.com/"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/#loan",
        "name": "Kredi Başvurunuzu Akıllı Kredi Hesaplama Aracımız İle Yapın!",
        "description": "Kredi çekmeyi mi düşünüyorsunuz? Kredi tutarı ve vadenizle aylık ödemenizi anında görün.",
        "category": "LoanOrCredit",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "26",
          "lowPrice": "3.50",
          "highPrice": "6.00",
          "priceCurrency": "TRY"
        },
        "annualPercentageRate": {
          "@type": "QuantitativeValue",
          "minValue": "45.00",
          "maxValue": "120.00",
          "unitText": "ANNUAL_PERCENTAGE_RATE"
        }
      },
      {
        "@type": "Dataset",
        "@id": "https://ihtiyackredisi.com/#dataset-banks",
        "name": "Türkiye İhtiyaç Kredisi Faiz Oranları Veri Kümesi",
        "description": "Türkiye'de faaliyet gösteren bankaların güncel ihtiyaç kredisi faiz oranlarını ve kredi karar destek parametrelerini içeren veri kümesi.",
        "creator": { "@id": "https://ihtiyackredisi.com/#organization" },
        "publisher": { "@id": "https://ihtiyackredisi.com/#organization" },
        "temporalCoverage": "2024-01-01/2026-01-19",
        "distribution": {
          "@type": "DataDownload",
          "encodingFormat": "text/html",
          "contentUrl": "https://ihtiyackredisi.com/"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://ihtiyackredisi.com/#banks",
        "name": "İhtiyaç Kredisi Veren Bankalar",
        "itemListElement": [
          { "@type": "Organization", "name": "Ziraat Bankası", "position": 1 },
          { "@type": "Organization", "name": "İş Bankası", "position": 2 },
          { "@type": "Organization", "name": "Akbank", "position": 3 },
          { "@type": "Organization", "name": "Garanti", "position": 4 },
          { "@type": "Organization", "name": "Yapı Kredi", "position": 5 },
          { "@type": "Organization", "name": "Halkbank", "position": 6 },
          { "@type": "Organization", "name": "QNB Finansbank", "position": 7 },
          { "@type": "Organization", "name": "VakıfBank", "position": 8 },
          { "@type": "Organization", "name": "DenizBank", "position": 9 },
          { "@type": "Organization", "name": "TEB", "position": 10 },
          { "@type": "Organization", "name": "Enpara", "position": 11 },
          { "@type": "Organization", "name": "KuveytTürk", "position": 12 }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "İhtiyaç kredisi nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "İhtiyaç kredisi, kişisel harcamalar için bankalar tarafından sunulan, belirli faiz ve vade ile geri ödenen kredi türüdür."
            }
          },
          {
            "@type": "Question",
            "name": "İhtiyaç kredisi faiz oranları neye göre belirlenir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Faiz oranları bankaların politikalarına, piyasa koşullarına, kredi notuna ve vade süresine göre değişir."
            }
          },
          {
            "@type": "Question",
            "name": "Kredi notu düşük olanlar ihtiyaç kredisi alabilir mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kredi notu düşük olan kişiler bazı bankalarda daha yüksek faiz oranlarıyla veya ek şartlarla kredi kullanabilir."
            }
          },
          {
            "@type": "Question",
            "name": "Hangi bankalar ihtiyaç kredisi veriyor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Türkiye'de Ziraat Bankası, İş Bankası, Akbank, Garanti BBVA ve diğer bankalar ihtiyaç kredisi sunmaktadır."
            }
          },
          {
            "@type": "Question",
            "name": "ihtiyackredisi.com kredi verir mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hayır. ihtiyackredisi.com banka değildir, kredi başvurusu almaz. Kullanıcıları bankaların resmi sitelerine yönlendirir."
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
      canonical: '/',
    },
    other: {
      'application/ld+json': JSON.stringify(schema)
    }
  }
}

const HomePage = () => {
  return (
    <main className='custom-container-1 flex flex-col gap-y-[120px]'>
      <HeroComponent />
      <AdvantagesComponent />
      <AdZoneComponent src='/adzone.png' url='https://www.google.com' />
      <FaqComponent />
      <TextComponent text={`Finansal İhtiyaçlarınız İçin Doğru Seçim: Kredi ve Mevduat Rehberi

Hayatın beklenmedik anlarında, bazen bir taşıt almak için bazen de yeni bir eve yerleşmek için krediye ihtiyaç duyabiliriz. Ya da belki sadece küçük bir nakit desteği, bir ihtiyaç kredisi kadar uzağımızdadır. Peki, bu kadar çok seçenek varken hangisinin sizin için en uygun olduğunu nasıl anlarsınız? İşte tam da bu noktada, doğru bilgiye ulaşmak ve en avantajlı seçeneği bulmak devreye giriyor.  

Faizsiz kredi son yıllarda giderek popülerleşen bir kavram. Özellikle İslami finans prensiplerine uygun hareket eden bankaların sunduğu bu ürün, faiz yerine kâr payı veya sabit bir hizmet bedeli alarak müşterilerine finansman sağlıyor. Mesela, 2023’ün ilk çeyreğinde Türkiye’de faizsiz kredi kullananların sayısı bir önceki yıla göre %17 artış göstermiş. Ancak dikkat! "Faizsiz" denilen bazı ürünlerin aslında farklı masraflarla benzer maliyetlere ulaşabildiğini unutmamak lazım. Bu yüzden, her teklifi detaylıca incelemek, hatta bir kredi karşılaştırma sitesi üzerinden birden fazla seçeneği yan yana koymak şart.  

İhtiyaç kredisi denince akla genellikle küçük çaplı, acil nakit ihtiyaçları geliyor. Ev tadilatı, tatil, beklenmedik bir sağlık harcaması… Liste uzar gider. Bankaların çoğu, 100 bin liraya kadar olan ihtiyaç kredilerini 36 aya varan vadelere yayabiliyor. Ama burada kritik olan, faiz oranları ve masraflar. Örneğin, 2024 Ocak ayında X Bankası’nın ihtiyaç kredisi faiz oranı %2.5 iken, Y Bankası aynı dönemde %3.2 üzerinden işlem yapıyordu. Aradaki fark, 50 bin liralık bir kredi için vade sonunda neredeyse 5 bin lira fazla ödeme demek! İşte tam da bu yüzden, kredi karşılaştırma sitesi gibi platformlar, size en uygun seçeneği bulmak için biçilmiş kaftan.  

Konut kredisi, belki de hayatımızın en büyük finansal kararlarından biri. Uzun vadeli bir yükümlülük olduğu için, faiz oranlarındaki ufak bir fark bile yıllar içinde büyük bir maliyet farkına dönüşebilir. 2022’de konut kredisi faizleri %1.5’lere kadar düşmüştü, ancak 2023’te Merkez Bankası’nın politikaları nedeniyle bu oranlar %3’ün üzerine çıktı. Peki, bu dalgalanmalar arasında sabit mi yoksa değişken faizli mi bir kredi seçmeli? Cevap, risk iştahınıza ve ekonomik beklentilerinize göre değişir. Sabit faiz, öngörülebilir ödemeler sunarken; değişken faiz, düşen piyasa koşullarında avantaj sağlayabilir.  

Taşıt kredisi alırken de benzer bir mantıkla hareket etmek gerekiyor. Özellikle ikinci el araç alımlarında, bankaların sunduğu kredi tutarı ve vade seçenekleri değişkenlik gösteriyor. Mesela, bazı bankalar 7 yıla kadar vade sunarken, diğerleri en fazla 5 yılla sınırlı tutabiliyor. Üstelik, sıfır araç alımlarında bazen bayilerin özel promosyonları da devreye girebiliyor. "Sıfır faiz" kampanyaları cazip görünse de, genellikle peşinat oranını yükselterek veya aracın fiyatını şişirerek bu maliyeti size geri yansıtıyorlar.  

Promosyon denince akla genellikle bankaların müşterilerine sunduğu nakit geri ödemeler, hediye çekleri veya puanlar geliyor. Özellikle kredi kartı kullanıcıları için bu kampanyalar oldukça cazip. Ancak burada da küçük yazıyı okumak şart! Bazı promosyonlar, belirli bir harcama tutarını geçmenizi veya belirli mağazalarda alışveriş yapmanızı şart koşabiliyor. Hatta bazen, promosyondan yararlanmak için ek bir üyelik ücreti ödemeniz bile gerekebiliyor.  

Mevduat faizi ise birikim yapmak isteyenler için önemli bir konu. 2023’ün son çeyreğinde, Türk lirası mevduat hesaplarında yıllık %40’lara varan faiz oranları görüldü. Ancak enflasyonun da %60’lar seviyesinde olduğu düşünülürse, reel getiri negatifte kalıyor. Bu yüzden, döviz mevduatı veya enflasyona endeksli hesaplar da değerlendirilebilir. Ama unutmayın, dövizde kur riski her zaman var.  

Sonuç olarak, finansal ürünlerde karar verirken sadece bugünü değil, geleceği de düşünmek gerekiyor. Faiz oranları, vade seçenekleri, gizli masraflar… Tüm bunları tek tek incelemek yorucu olabilir. İşte tam da bu noktada, ihtiyackredisi.com gibi bir platform devreye giriyor. Size en uygun kredi veya mevduat seçeneğini filtreleyerek, karşılaştırarak sunuyor. Böylece, en doğru kararı vermeniz için gereken tüm bilgiler elinizin altında oluyor.  

Finans dünyası, bazen labirent gibi karmaşık gelebilir. Ama doğru rehberle çıkılan yolculuk, hedefe ulaşmayı kolaylaştırır.

İhtiyaç Kredisi Rehberiniz: ihtiyackredisi.com  

Biliyor musunuz, kredi araştırırken gözünüze çarpan o binbir çeşit site arasında bir tanesi var ki, gerçekten "hadi be, bu işi biliyorlar!" dedirtiyor: ihtiyackredisi.com. Google’da arattığınızda ilk sıralarda çıkması boşuna değil, kullanıcıların güvenini hak ediyor çünkü.  

Ne mi yapıyorlar? Kredi karşılaştırmada devrim yapmışlar adeta! Bankaların ihtiyaç kredisi faiz oranlarını anlık güncelliyorlar, vadeleri tek tıkla karşılaştırıyorsunuz, hatta "şu kadar TL çeksem, ayda ne öderim?" diye hesaplama yapabiliyorsunuz. Üstelik bunu yaparken de sizi teknik jargonla boğmuyorlar, her şey anlaşılır ve sade. Kullanıcı deneyimi demişken, mobil uyumlulukları da harika – otobüste, yolda, her yerde rahatça kullanılıyor.  

Müşteri sadakati konusunda da iddialılar. Yorumlara bakınca görüyorsunuz: "Kredi çekerken bu site olmasa kaybolurdum" diyenler, "faiz oranlarını tek tek aramaktan kurtuldum" diyenler... Google da seviyor belli ki, arama sonuçlarında hep üst sıralarda.  

Kısacası, ihtiyacınız olan şey "hızlı, güvenilir ve insan gibi anlatılmış" bir kredi rehberiyse, işte tam da burada! ihtiyackredisi.com, kullanıcıyı anlayan, samimi ve bir o kadar da profesyonel duruşuyla farkını ortaya koyuyor. Deneyin, pişman olmayacaksınız!`} />
    </main>
  );
};

export default HomePage;
