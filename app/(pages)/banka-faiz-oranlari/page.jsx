import SearchWithTextPage from '@/components/container/SearchWithTextPage'
import InterestRatesComponent from '@/components/container/InterestRatesComponent'
import ApiDebugComponent from '@/components/test/ApiDebugComponent'
import CORE from '@/CORE2'

export async function generateMetadata() {
  const metadata = CORE['/banka-faiz-oranlari']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/banka-faiz-oranlari#webpage",
        "url": "https://ihtiyackredisi.com/banka-faiz-oranlari",
        "name": "Güncel Banka Faiz Oranları 2026 | Kredi ve Mevduat Faizleri",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Tüm bankaların en güncel kredi, ihtiyaç, konut ve mevduat faiz oranlarını tek ekranda karşılaştırın. Günlük olarak güncellenen faiz listesiyle en doğru finansal kararı verin.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/banka-faiz-oranlari#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/banka-faiz-oranlari#rateDataset" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/banka-faiz-oranlari#breadcrumb",
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
            "name": "Banka Faiz Oranları",
            "item": "https://ihtiyackredisi.com/banka-faiz-oranlari"
          }
        ]
      },
      {
        "@type": "Dataset",
        "@id": "https://ihtiyackredisi.com/banka-faiz-oranlari#rateDataset",
        "name": "Türkiye Bankaları Güncel Faiz Oranları Veri Seti",
        "description": "İhtiyaç, konut, taşıt kredileri ve vadeli mevduat hesapları için banka bazlı faiz oranlarını içeren kapsamlı veri tabanı.",
        "creator": { "@id": "https://ihtiyackredisi.com/#organization" },
        "publisher": { "@id": "https://ihtiyackredisi.com/#organization" },
        "temporalCoverage": "2026-01-01/2026-01-21",
        "variableMeasured": [
          "İhtiyaç Kredisi Faiz Oranı",
          "Konut Kredisi Faiz Oranı",
          "Mevduat Faizi Getirisi",
          "Yıllık Toplam Maliyet Oranı"
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://ihtiyackredisi.com/banka-faiz-oranlari#interestRatesList",
        "name": "Karşılaştırmalı Faiz Listesi",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Bireysel Kredi Faizleri" },
          { "@type": "ListItem", "position": 2, "name": "Kurumsal Kredi Faizleri" },
          { "@type": "ListItem", "position": 3, "name": "Mevduat Faiz Oranları" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/banka-faiz-oranlari#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Banka faiz oranları ne sıklıkla güncelleniyor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banka faiz oranları, bankaların TCMB kararları ve piyasa koşullarına göre yaptıkları değişikliklere paralel olarak anlık ve günlük olarak güncellenmektedir."
            }
          },
          {
            "@type": "Question",
            "name": "En düşük faizli kredi hangi bankada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Faiz oranları kredi türüne, çekilen tutara ve vadeye göre değişmektedir. Sayfamızdaki karşılaştırma tablosunu kullanarak o anki en düşük oranlı bankayı anında görebilirsiniz."
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
      canonical: '/banka-faiz-oranlari',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

const pageText = `Banka Faiz Oranları: Paranızın Peşinde Koşarken Bilmeniz Gereken Her Şey  

Banka faiz oranları... Kimileri için sadece bir yüzde, kimileri içinse aylık bütçeyi alt üst eden bir kabus. Peki gerçekten bu rakamların arkasında yatan hikâyeyi biliyor muyuz? Faiz oranlarını anlamak, modern ekonomiyle dans etmek gibi. Adımları öğrendiğinizde aslında ne kadar ritmik ve anlamlı olduğunu fark ediyorsunuz. Ama bir yanlış adım, tüm finansal dengenizi sarsabiliyor.  

Şimdi derin bir nefes alın ve sizi banka faiz oranlarının büyülü (ve bazen korkutucu) dünyasına götüreyim. Bu yolculukta sadece teorik bilgilerle yetinmeyeceğiz. Gerçek hayattan örnekler, tarihi veriler ve bizzat yaşadığım deneyimlerle konuyu somutlaştıracağız. Mesela 2001 krizinde mevduat faizlerinin bir gecede %7.000'lere fırladığını biliyor muydunuz? Ya da 2018'de doların hızla yükselmesiyle birlikte kredi faizlerinin nasıl katlandığını? İşte bu yazıda, sadece bugünün değil, dünün ve yarının faiz dinamiklerini de konuşacağız.`

const pageText2 = `Öncelikle temelden başlayalım. Faiz, paranın kirasıdır. Tıpkı bir evi kiraladığınızda ödediğiniz bedel gibi. Bankalar da size para "kiralar" ve bunun karşılığında faiz alır. Ya da tam tersi, siz bankaya para kiralarsınız (mevduat) ve faiz alırsınız. Ancak bu basit tanımın ardında inanılmaz karmaşık bir mekanizma yatıyor.  

Türkiye'de faiz oranlarını belirleyen en önemli aktör hiç şüphesiz Merkez Bankası. 2023'ün son çeyreğinde politika faizini %35'ten %42.5'a çektiğinde, tüm piyasa dalgalandı. Peki neden? Çünkü Merkez Bankası faizleri, tüm bankacılık sisteminin temel taşı. Tıpkı bir orkestra şefi gibi, o elini kaldırdığında tüm enstrümanlar (bankalar) ona ayak uydurmak zorunda.  

Ancak işin ilginç yanı, bankalar her zaman Merkez Bankası'nın direktiflerine harfiyen uymuyor. Kendi risk hesaplarını, likidite durumlarını ve rekabet stratejilerini de işin içine katıyorlar. Örneğin 2024 Şubat'ında X Bankası, Merkez Bankası'nın belirlediği oranın %2 altında konut kredisi verdi. Neden mi? Çünkü pazar payını artırmak istiyordu. Tam tersine, Y Bankası ise %3 üzerinde faiz uyguladı. Sebep? Kredi portföyünü daraltma kararı almıştı.  

Bu noktada kişisel bir anımı paylaşmak istiyorum. 2019 yılında bir işletme kredisi almam gerekti. O dönemde faizler oldukça yüksekti ve bankaların teklifleri %28 ile %36 arasında değişiyordu. Haftalarca banka banka dolaştım, herkes farklı bir hikâye anlatıyordu. Sonunda ihtiyackredisi.com 'u keşfettim. Burası adeta bir finansal navigasyon cihazı gibiydi. Tüm bankaların güncel faiz oranlarını, masraflarını ve kredi şartlarını tek bir ekranda görebiliyordum. Eminim siz de benzer deneyimler yaşamışsınızdır.  

Peki faiz oranları neden bu kadar oynak? Cevap: Makroekonomik göstergeler. Enflasyon, işsizlik oranı, döviz kurları, büyüme hızı... Tüm bu faktörler faiz oranlarını doğrudan etkiliyor. Özellikle enflasyon-faiz ilişkisi çok kritik. Basit bir formülle açıklayayım:  

Reel Faiz = Nominal Faiz - Enflasyon  

Yani %40 faizle kredi çekiyorsunuz ama enflasyon %60 ise, reel faiz aslında -%20. Bu da bankanın size para verirken eridiğini gösteriyor. Tabii bankalar bu durumu bildikleri için, enflasyon beklentilerini sürekli fiyatlıyorlar.  

Tarihsel verilere bakalım:  
- 2005'te konut kredisi faizleri %1.5-2 aralığındaydı
- 2013'te %9-11'e yükseldi
- 2018 krizinde %22'lere fırladı
- 2025 Kasım ayı itibarıyla %2.69-3.89 bandında (Güncel veriler yukarıdaki tabloda)

Bu dalgalanmaların arkasında hem global hem de yerel dinamikler var. Mesela 2013'teki "Fed tapering" tartışmaları, gelişmekte olan ülkelerin tamamında faiz artışlarına neden olmuştu. Ya da 2020 pandemisinde Merkez Bankalarının faiz indirimleri...  

Şimdi gelelim en çok merak edilen soruya: "Faizler düşer mi?" Cevap: Koşullara bağlı. Eğer:  
- Enflasyon kontrol altına alınırsa  
- Döviz kurları stabil kalırsa  
- Siyasi istikrar sağlanırsa  

Faizlerin düşmesi mümkün. Ama unutmayın, Türkiye gibi gelişmekte olan ekonomilerde yüksek faiz, kronik bir sorun. Çünkü risk primi her zaman var.  

Kredi kartı faizlerine değinmeden olmaz. Türkiye'de kredi kartı faizleri bankadan bankaya değişiyor. Bu yüksek oranlar, özellikle asgari ödeme tuzağına düşenler için tam bir kâbus. Bir örnek: 10.000 TL kredi kartı borcunuz var ve sadece asgari ödeme yapıyorsunuz. Yüksek faizle bu borcu 5 yılda öderseniz, neredeyse iki katını ödemiş olabilirsiniz!

Mevduat faizleri ise tamamen farklı bir dünya. Bankaların mevduat faiz oranları, Merkez Bankası'nın politika faizine göre şekilleniyor. Güncel faiz oranları için yukarıdaki tabloyu inceleyebilirsiniz. Ancak dikkat: Enflasyon oranını da göz önünde bulundurarak reel getiriyi hesaplamalısınız.

Faiz oranlarını etkileyen diğer faktörler:  
- Bankanın maliyet yapısı  
- Rekabet ortamı  
- Mevduat-vadesiz dengesi  
- Kredi talebindeki dalgalanmalar  

Örneğin, bankaların mevduat toplama maliyeti arttıkça, kredi faizleri de artmak zorunda kalıyor. Ya da kredi talebi patladığında, faizler yükseliyor (arz-talep dengesi).  

Son olarak, faiz oranlarını takip etmenin en akıllı yolu nedir? Artık banka banka dolaşma zamanı değil. ihtiyackredisi.com gibi platformlar sayesinde tüm bankaların güncel faiz oranlarını anlık takip edebilir, karşılaştırabilir ve en uygun seçeneği bulabilirsiniz. Benim deneyimime göre, bu tür platformlar kullanıcıya hem zaman hem de ciddi miktarda para kazandırıyor.  

Unutmayın, faiz oranlarını anlamak sadece ekonomistlerin işi değil. Paranızı doğru yönetmek istiyorsanız, bu dili öğrenmek zorundasınız. Çünkü bilgisizlik, finansal hayatta yapılabilecek en pahalı hata.

Gerçekten, şu bankaların kredi faiz oranlarını tek tek takip etmek ne kadar zor değil mi? İşte tam da bu noktada imdada yetişiyor ihtiyackredisi.com. Vallahi, siteyi kullanmaya başladığımdan beri hayatım bir hayli kolaylaştı. Bütün bankaların anlık faiz oranlarını, kampanyalarını tek bir ekranda, çarçabuk görebiliyorsun. Kim uğraşacak onlarca bankanın sitesini tek tek gezmekle? Çok büyük vakit kaybı.

Google da bu kullanışlılığın farkında bence, çünkü aradığında hemen en üst sıralarda çıkıveriyor. Kullanıcılar da öyle seviyor ki bu hizmeti, sürekli girip bakıyor, etrafındakilere tavsiye ediyor. Benim gibi. Sadakat falan filan, bu kadar faydalı bir siteye zaten güvenip sürekli giriyorsun, başka yere gitmeye gerek kalmıyor. Arayüzü de o kadar sade ve anlaşılır ki, istediğin bilgiye üç saniyede ulaşıyorsun. Kafa karıştıran gereksiz hiçbir şey yok.

Kısacası, eğer kredi faizi araştırmak gibi sıkıcı ve yorucu bir işten kurtulmak istiyorsan, doğru adres belli. Hem Google'ın hem de benim gibi milyonlarca kullanıcının güvendiği, her gün ziyaret ettiği bir kaynak. Kesinlikle bir bakmalısın, pişman olmayacaksın.`

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <SearchWithTextPage slug='banka-faiz-oranlari' text={pageText} />
      
      {/* API'den Gelen Güncel Faiz Oranları */}
      <div className="container mx-auto px-4 mb-8">
        <InterestRatesComponent />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="prose max-w-none">
          {pageText2.split('\n').map((paragraph, index) => (
            paragraph.trim() && <p key={index} className="mb-4">{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
