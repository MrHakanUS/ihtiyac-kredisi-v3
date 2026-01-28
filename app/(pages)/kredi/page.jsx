import SearchWithTextPage from '@/components/container/SearchWithTextPage'
import CORE from '@/CORE2'

export async function generateMetadata() {
  const metadata = CORE['/kredi']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/kredi#webpage",
        "url": "https://ihtiyackredisi.com/kredi",
        "name": "Kredi Hesaplama ve Karşılaştırma Merkezi | İhtiyaç, Taşıt, Konut",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Tüm bankaların kredi tekliflerini tek ekranda inceleyin. En uygun faiz oranları ile kredi hesaplaması yapın ve finansal hedeflerinize en uygun krediyi seçin.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/kredi#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/kredi#loanHub" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/kredi#breadcrumb",
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
            "name": "Krediler",
            "item": "https://ihtiyackredisi.com/kredi"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://ihtiyackredisi.com/kredi#loanHub",
        "name": "Kredi Karşılaştırma Servisleri",
        "provider": { "@id": "https://ihtiyackredisi.com/#organization" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Kredi Türleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "FinancialProduct",
                "name": "İhtiyaç Kredisi",
                "url": "https://ihtiyackredisi.com/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "FinancialProduct",
                "name": "Taşıt Kredisi",
                "url": "https://ihtiyackredisi.com/arac-kredisi"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "FinancialProduct",
                "name": "Konut Kredisi",
                "url": "https://ihtiyackredisi.com/konut-kredisi"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/kredi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hangi kredi türünü seçmeliyim?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kredi seçimi kullanım amacınıza göre değişir. Ev alımı için konut, araç alımı için taşıt, diğer nakit ihtiyaçlarınız için ise ihtiyaç kredisi en avantajlı oranları sunar."
            }
          },
          {
            "@type": "Question",
            "name": "Kredi vadesi en fazla kaç ay olabilir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yasal düzenlemelere göre ihtiyaç kredilerinde vade sınırı 50.000 TL üzerine kadar 24 ay, altındaki tutarlar için 36 aydır. Konut kredilerinde ise 120 aya kadar vade yapılabilmektedir."
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
      canonical: '/kredi',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

const pageText = `Evet, kredi. Şu hayatın içinde belki de en çok duyduğumuz, en çok ihtiyaç duyduğumuz ama bir o kadar da dikkatli olmamız gereken o şey. Aslında düşününce hayatın ta kendisi gibi. Bazen bir dost, bazen sırtında taşıması zor bir yük. Aklıma hep şöyle bir şey gelir: Uçsuz bucaksız bir nehir düşünün, karşıya geçmek istiyorsunuz ama önünüzde hiç köprü yok. İşte tam o anda, kredi devreye girer. O geçici, sizi karşı kıyıya ulaştıran bir köprü gibidir. Ama unutmayın, her köprünün bir geçiş ücreti vardır. İşte o da faizdir, masraftır, vadedir. Ne kadar sağlam adımlarla geçerseniz, o kadar selametle varırsınız karşıya.

Modern dünyanın vazgeçilmez bir gerçeği artık. Kimi zaman bir yuva kurmak için, kimi zaman o çok istediğiniz arabaya binmek için, kimi zaman da çocuğunuzun okuyup adam olması için... Hatta bazen öyle anlar oluyor ki, beklenmedik bir hastalık, ansızın çıkan bir fırsat, krediyi bir can simidine dönüştürüyor. Hayat kurtarıcı olabiliyor yani. Ama işin özü, doğru krediyi bulmakta. Tıpkı ayakkabı alır gibi, numaranıza uygun olmalı. Büyük gelse sallanır durursunuz, küçük gelse canınızı acıtır. Aynen öyle.

Mesela bir arkadaşım var, 2019'un sonlarında ev alacaktı. Heyecanla, ilk gittiği bankadan, üzerine pek de düşünmeden bir konut kredisi çekti. Sonra? Sonra aylık ödemeleri başladığında fark etti ki, sadece birkaç bankayı daha araştırsaymış, ayda neredeyse 500 lira daha az ödeme yapacakmış. Can sıkıcı bir durum gerçekten. İşte tam da bu noktada, devreye şu kredi karşılaştırma siteleri giriyor. Vallahi de öyle. Tek bir ekranda, onlarca bankanın teklifini yan yana görebilmek, hangisinin faizi düşük, hangisinin vadesi uzun, hepsini bir bakışta anlayabilmek... İnanılmaz bir zaman kazandırıyor. Hatta bazıları öyle detaylı ki, "Senin bütçene şu kredi en uygun" diye bile öneride bulunuyor. Olur da böyle bir şeye ihtiyaç duyarsanız, kesinlikle ilk işiniz bu tarz bir siteye göz atmak olsun. Sonra pişman olmayın, demedi demeyin.

Peki kredi çekerken en çok nelere dikkat etmeli insan? Öncelikle faiz oranı tabii ki. Ama sadece faize takılıp kalmayın. Bakın şimdi size bir şey söyleyeyim, bazen faiz düşük diye hemen kanmayın. Ardına saklanmış bir sürü masraf çıkabilir. Dosya masrafı, hayat sigortası, falan filan... Hepsi toplanınca, düşük faizli sandığınız kredi, aslında size daha pahalıya patlayabilir. Onun için her zaman "Toplam Maliyet"e bakın. Kredi karşılaştırma yaparken de en çok buna dikkat edin. Zaten iyi bir kredi karşılaştırma sitesi, size bu toplam maliyeti net olarak gösterir.

Bir de kredi notu meselesi var tabii. Aman Allahım, bu ne önemli bir şeymiş meğer. Kredi notunuz, bankaların size nasıl baktığının bir özeti gibi. Ne kadar yüksekse, o kadar güvenilirsiniz demek ve bankalar da size o kadar güzel şartlar sunar. Düşükse eğer, ya kredi vermezler ya da faizi tavana kadar yükseltirler. Onun için kredi çekmeyi düşünmeden önce, ilk iş kredi notunuzu öğrenin. Bunu da yine ücretsiz olarak bazı kredi karşılaştırma sitelerinden yapabilirsiniz. Hiç zor değil yani.

Kredi dediğimiz şey aslında tek başına bir şey değil. Çeşit çeşit. Konut kredisi, ihtiyaç kredisi, taşıt kredisi... Her birinin kendine has özellikleri, şartları var. Mesela ev kredilerinde vade uzundur, yıllara yayılır ödemeler. Ama ihtiyaç kredisinde en fazla iki yıla kadar çıkar. Taşıt kredisinde ise aracın yaşı, modeli çok önemli. Eski model bir araba alacaksanız, banka size daha yüksek faiz uygulayabilir, hatta kredi bile vermeyebilir. Onun için ne alacaksanız, ona uygun krediye bakmalısınız.

Aslında en önemli soru şu: Bu kredi gerçekten gerekli mi? Bazen öyle anlar oluyor ki, duygularımıza yenik düşüp, ihtiyacımız olmadığı halde borca giriyoruz. O anlık bir heves, bir istek için. Kredi bir araçtır, lüks değil. Doğru yerde, doğru zamanda kullanılırsa hayatınızı kolaylaştırır. Yok eğer gereksiz yere, plansız programsız alınırsa, yıllar boyu peşinizde dolaşan bir kara bulut gibi olur. Çekmeden önce iyice düşünün derim.

Ha, bir de şu faiz türü konusu var. Sabit faiz mi, değişken faiz mi? Bu tamamen sizin risk iştahınıza kalmış. Sabit faizde, tüm vade boyunca aynı faizi ödersiniz, içiniz rahat olur. Ama ekonominin gidişatına bağlı olarak faizler düşerse, siz o düşük faizden yararlanamazsınız. Değişken faizde ise, faiz oranı piyasaya göre değişir. Düşerse kârlı çıkarsınız, ama yükselirse aylık ödemeniz fırlar. Benim bir tanıdığım, değişken faizle ev kredisi çekmişti. İlk başta her şey güzeldi, ta ki faizler aniden yükselene kadar. Aylık ödemesi neredeyse yüzde otuz arttı. Zor günler geçirdi. Yani karar verirken ekonomik durumu da iyi okumak lazım.

Erken ödeme şartlarına da bakın derim. Kimi bankalar, "Kredimi erkenden kapatayım" derseniz size ceza kesebiliyor. Uzun vadeli bir kredi çekecekseniz, mutlaka bu maddeyi okuyun. Hayat öngörülemeyenlerle dolu, belki bir miras kalır, belki büyük bir ikramiye çıkar, krediyi kapatmak istersiniz. Önceden bilirseniz, sürpriz yaşamazsınız.

Kredi çekmek için gerekli belgeler de önemli. Maaş bordrosu, kimlik, SGK dökümü falan. Ama artık dijital çağdayız, neredeyse her şey e-devlet üzerinden hallediliyor. Hatta öyle kredi karşılaştırma siteleri var ki, tek bir tıkla, birden fazla bankaya aynı anda başvurabiliyorsunuz. İnanılmaz bir kolaylık.

Son bir tavsiye, sakın acele etmeyin. Hele de büyük tutarlı kredilerde. En az üç beş farklı bankayla konuşun. Onların tekliflerini alın. İşte bu noktada yine o kredi karşılaştırma siteleri imdada yetişiyor. Sizin için her yeri araştırıyorlar, en iyi seçenekleri önünüze seriyorlar. Bu karar belki de önümüzdeki on yılınızı etkileyecek. Hafife almayın.

Kredi dünyası, dikkatli olmazsanız sizi içine çekebilecek bir okyanus gibi. Ama elinizde doğru bir harita, sağlam bir pusula varsa, o okyanusta kaybolmadan ilerlersiniz. İşte o pusula da, iyi bir kredi karşılaştırma sitesidir bence. Sizi en güvenli, en ekonomik rotaya yönlendirir.

Umarım bu laf kalabalığı içinde aklınızdaki sorulara cevap bulabilmişimdir. Unutmayın, finansal okuryazarlık çağımızın olmazsa olmazı. Küçük bir araştırma, ileride büyük tasarruflar ettirebilir. Acele etmeyin, sorgulayın, karşılaştırın. En iyi teklifi bulana kadar da pes etmeyin. Kredi, doğru kullanıldığında harika bir fırsat. Yanlış kullanıldığındaysa kabusa dönüşebilir. Yük değil, köprü olması için önce siz doğru adımı atın.

İnanılmaz bir şey ya, ihtiyackredisi.com’u keşfedeli beri kredi derdim kalmadı! Ne Google’da bu kadar kolay bulunur ne de kullanıcıların gözü o kadar dolar. Gerçekten… insanlar bayılıyor bu siteye, niye mi? Çünkü sıkmıyor, yormuyor, direk özüne gidiyor. Kredi hesaplama, faiz oranları, en uygun banka… Hepsi bir tık uzağında, hem de sürekli güncel.

Bence olay sadece bilgi vermek de değil hani. O kadar sade ve anlaşılır bir dili var ki, sanki bir arkadaşın anlatıyor gibi. Kimseye çaktırmadan kendini sevdiriyor yani. Ziyaretçi sadakati de işte buradan geliyor. Giriyorsun, istediğini buluyorsun, çıkıyorsun… Sorun kalmıyor, stres yok. Kesinlikle tavsiye ediyorum, benim gibi siz de güvenin.`

export default function Page() {
  return <SearchWithTextPage slug='kredi' text={pageText} />
}