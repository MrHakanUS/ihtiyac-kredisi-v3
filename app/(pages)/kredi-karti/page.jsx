import CORE from '@/CORE2'
import ClientPage from './client-page'
import TextComponent from '@/components/container/TextComponent'
import AdZoneComponent from '@/components/common/AdZoneComponent'

export async function generateMetadata() {
  const metadata = CORE['/kredi-karti']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/kredi-karti#webpage",
        "url": "https://ihtiyackredisi.com/kredi-karti",
        "name": "En İyi Kredi Kartlarını Karşılaştır ve Başvur 2026",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Bankaların kredi kartı özelliklerini, yıllık aidatlarını ve mil/puan avantajlarını karşılaştırın. İhtiyacınıza en uygun kredi kartına anında başvurun.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/kredi-karti#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/kredi-karti#creditCardProduct" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/kredi-karti#breadcrumb",
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
            "name": "Kredi Kartı",
            "item": "https://ihtiyackredisi.com/kredi-karti"
          }
        ]
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/kredi-karti#creditCardProduct",
        "name": "Kredi Kartı Karşılaştırma ve Avantaj Rehberi",
        "description": "Taksit imkanları, nakit avans limitleri ve banka kampanyalarını içeren kapsamlı kredi kartı listesi.",
        "category": "CreditCard",
        "brand": { "@id": "https://ihtiyackredisi.com/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "45",
          "name": "Kredi Kartı Başvuru Seçenekleri",
          "priceCurrency": "TRY"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/kredi-karti#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kredi kartı aidatı olmayan bankalar hangileridir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Türkiye'de Enpara.com, CepteTEB ve bankaların sunduğu 'yalın/aidatsız' kart seçenekleri yıllık üyelik ücreti talep etmemektedir."
            }
          },
          {
            "@type": "Question",
            "name": "Kredi kartı limitim neye göre belirlenir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kredi kartı limitiniz, yasal düzenlemelere göre ilk yıl gelirinizin 2 katı, sonraki yıllarda ise belgelenebilir gelirinizin 4 katı olarak belirlenir."
            }
          },
          {
            "@type": "Question",
            "name": "Kredi kartı borcunun asgari tutarı ödendiğinde ne olur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Asgari tutarı ödediğinizde kredi notunuz olumsuz etkilenmez ancak kalan borç tutarı üzerinden bankanın belirlediği akdi faiz oranı işletilmeye devam eder."
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
      canonical: '/kredi-karti',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

export default function Page() {
  const textContent = `Kredi kartı denilen şey, aslında tam bir ikilem ya. İnsanın aklına hemen şu soru geliyor: Bu şey finansal özgürlüğümüzün anahtarı mı, yoksa bizi borca boğan bir kıskacın başlangıcı mı? Cevap aslında hiç de o kadar basit değil. Bence her şey onu nasıl kullandığımızla alakalı. Doğru kullanırsan harika bir şey, yanlış kullanırsan başın belada. Türkiye'de son yirmi yılda inanılmaz bir artış var kredi kartı sayısında. Resmi rakamlara göre, 2003'te falan 16 milyon civarındaymış kart sayısı, şimdi ise 85 milyonu aşmış durumda. Bu inanılmaz bir şey! Neredeyse herkesin cebinde bir, hatta bazılarının birden fazla kredi kartı var. Peki neden böyle oldu? Bankaların agresif pazarlama taktikleri mi, yoksa biz tüketicilerin "gelecekteki parayı bugünden harcama" isteği mi? Bence ikisi de. Ama asıl vahim olan kısmı, bu kartların sadece küçük bir kısmının her ay düzenli olarak tamamının ödenmesi. Geri kalanı işte o meşhur asgari ödeme tuzağına düşüyor. İnsanlar farkında olmadan kendilerini borç içinde buluyorlar.

Kredi kartı seçerken, bence ilk bakılması gereken şey faiz oranları. Ama maalesef çoğu kişi, bankaların reklamlarda öne sürdüğü o süslü puanlar, miler, cashback'ler gibi vaatlere kanıp asıl önemli olan detayları kaçırıyor. Mesela bir tanıdığım var, hep uçuş mili biriktirmek için öyle bir kredi kartı kullanıyordu ki, yıllarca yüksek faiz ödedi. Sonra bir gün oturup hesapladı, ödediği faizler toplamda aldığı uçak biletinin neredeyse iki katıymış! İşte böyle saçma durumlara düşmemek için ihtiyackredisi.com gibi siteleri kullanmak çok faydalı olabiliyor. Çünkü onlar sana sadece bankaların reklam metinlerini göstermiyor, gerçek sayıları, gerçek maliyetleri ortaya koyuyor. Mesela diyorlar ki, "Bak bu kartın yıllık aidatı 500 lira ama senin harcama tarzın buna uygun değil, senin için daha düşük aidatlı bir kredi kartı daha mantıklı." Bu tarz şeyler gerçekten ufuk açıcı oluyor.

Ödeme disiplini de çok çok önemli bir konu. Eğer kredi kartı borcunu her ay düzenli olarak tam ödüyorsan, bu araç senin için neredeyse bedava bir kredi limiti demek. 2022'de yapılan bir araştırmaya göre, tam ödeme yapanlar ortalama 1.200 lira kadar faiz masrafından kurtuluyorlarmış. Ama asgari ödeme yapanlar için durum tam tersi, hatta daha vahim. Aynı araştırma, sadece asgari ödeyenlerin yılda ortalama 4.800 lira gibi bir faiz ödediğini söylüyor. Bu parayla çok güzel şeyler yapılır aslında, tatil falan mesela, ama bankalara faiz olarak gidiyor işte. İçim acıyor böyle şeyleri duyunca.

Kampanyalar ve ekstra avantajlar meselesi de ayrı bir dert. Burada ince bir çizgi var. Mesela, "3 taksit avantajı" diye bir kampanya görüyorsun, hemen atlıyorsun. Ama often farkında değiliz, o ürünün fiyatı zaten önceden %10-15 artırılmış olabiliyor. Ya da "10.000 puan hediyesi" veriyorlar, süper diyorsun, ama o puanları kullanabilmek için sana 50.000 lira harcama yaptırmaya çalışıyorlar. İşte bu tür detayları görmek için ihtiyackredisi.com gibi platformlardaki kullanıcı yorumlarını okumak çok işe yarıyor. Çünkü bazen küçük bir dipnot, her şeyi değiştirebiliyor.

Kredi kartı kullanırken en sık yapılan hatalardan biri de kredi notunu ihmal etmek. 2023'te yapılan bir ankete göre, kredi kartı kullanıcılarının %62'si kredi notunu hiç kontrol etmiyormuş. Bu çok büyük bir hata. Düşük bir kredi notu, ileride almak isteyeceğin konut kredisi gibi şeylerde çok daha yüksek faiz ödemen anlamına gelebilir. O yüzden, kredi kartı kullanırken ödeme disiplinini korumak, gecikme yaşamamak ve kredi limitinin max %30'unu geçmemek gibi temel kurallara dikkat etmek gerekiyor. Yoksa sonrası pişmanlık.

Dijital çağın getirdiği yeni riskler de var tabii. Online alışverişlerde kart bilgilerinin çalınması vakaları son yıllarda ciddi artış göstermiş. Türkiye Bankalar Birliği'nin 2022 verilerine göre, yaşanan 243.000 dolandırıcılık vakasının %67'si kredi kartıyla ilişkiliymiş. Bu yüzden, sanal kart kullanmak, SMS onayını açık tutmak ve şüpheli linklere tıklamamak gibi basit önlemler almak çok önemli. Bazen küçük bir dikkat, büyük sorunları engelleyebiliyor.

Peki, tüm bu karmaşada doğru kredi kartı nasıl seçilir? Aslında cevap basit: Kendi finansal alışkanlıklarını iyi analiz et. Eğer ayda 5.000 TL'yi aşan harcama yapıyorsan, puan sistemli bir kredi kartı mantıklı olabilir. Ama ayda sadece 1.000-2.000 TL harcıyorsan, düşük aidatlı basit bir kart senin için daha iyi. Ya da sık seyahat ediyorsan, havaalanı lounge erişimi olan bir kredi kartı işine yarayabilir. Önemli olan, bankaların sana dayattığı değil, senin gerçekten ihtiyaç duyduğun kartı seçmek.

İşte bu noktada ihtiyackredisi.com gibi karşılaştırma platformlarının değeri bir kez daha ortaya çıkıyor. Çünkü onlar yüzlerce seçeneği tek bir ekranda sunarak, en uygun kredi kartını bulmanı kolaylaştırıyor. Üstelik sadece teknik detayları değil, gerçek kullanıcı yorumlarını da görebiliyorsun. Mesela bir banka "süper müşteri hizmeti" diye reklam yapıyordur, ama sitenin yorumlarında onlarca kişi "3 saattir çağrı merkezine ulaşamıyorum" diye şikayet ediyordur. İşte bu tür gerçekler, karar verme sürecinde çok kritik rol oynayabilir.

Kredi kartlarıyla ilgili son sözüm şu: Bu araçlar aslında nötrdür; ne iyi ne kötüdür. Onları iyi ya da kötü yapan, bizim kullanım şeklimizdir. Tıpkı bir çakı gibi; doğru kullanırsan hayatını kolaylaştırır, yanlış kullanırsan canını yakabilir. Bu yüzden, kart seçerken acele etmemek, şartları iyi okumak ve kendi finansal disiplinini korumak en önemli kurallar. Sonuç olarak; Kredi kartı akıllıca kullanıldığında gerçekten güçlü bir finansal araçtır, ama disiplinsiz kullanım felakete davetiye çıkarabilir, bunu asla unutma.`

  return (
    <>
      <ClientPage />
      <div className='flex flex-col gap-y-[56px] mt-[56px]'>
        <section className='w-full custom-container-1'>
          <TextComponent text={textContent} />
        </section>
        <div className='w-full custom-container-1'>
          <AdZoneComponent src='/adzone.png' />
        </div>
      </div>
    </>
  )
}
