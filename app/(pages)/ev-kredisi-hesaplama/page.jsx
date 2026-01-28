import CalculatorPage from '@/components/container/CalculatorPage'
import CORE from '@/CORE2'

export async function generateMetadata() {
  const metadata = CORE['/ev-kredisi-hesaplama']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/ev-kredisi-hesaplama#webpage",
        "url": "https://ihtiyackredisi.com/ev-kredisi-hesaplama",
        "name": "Konut Kredisi Hesaplama 2026 | En Uygun Ev Kredisi Faizleri",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Güncel konut kredisi faiz oranlarını karşılaştırın, dosya masrafı ve ekspertiz ücreti dahil toplam maliyetinizi hesaplayın. Hayalinizdeki ev için en uygun kredi burada.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/ev-kredisi-hesaplama#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/ev-kredisi-hesaplama#mortgageCalculator" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/ev-kredisi-hesaplama#breadcrumb",
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
            "name": "Ev Kredisi Hesaplama",
            "item": "https://ihtiyackredisi.com/ev-kredisi-hesaplama"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://ihtiyackredisi.com/ev-kredisi-hesaplama#mortgageCalculator",
        "name": "Gelişmiş Konut Kredisi Hesaplama Algoritması",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "author": { "@id": "https://ihtiyackredisi.com/#organization" },
        "featureList": [
          "120 ve 240 Ay Vade Seçenekleri",
          "Ekspertiz ve İpotek Masraf Analizi",
          "Yıllık Toplam Maliyet Oranı Hesaplama",
          "Banka Bazlı Faiz Karşılaştırması"
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "TRY"
        }
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://ihtiyackredisi.com/ev-kredisi-hesaplama#mortgageProduct",
        "name": "Konut Kredisi (Mortgage)",
        "description": "Ev sahibi olmak isteyen tüketiciler için bankalar tarafından sunulan uzun vadeli finansman çözümü.",
        "category": "LoanOrCredit",
        "feesAndCommissions": "Ekspertiz ücreti, banka tahsis ücreti ve sigorta masrafları bankalara göre farklılık gösterir.",
        "annualPercentageRate": {
          "@type": "QuantitativeValue",
          "minValue": "30.00",
          "maxValue": "55.00",
          "unitText": "ANNUAL_PERCENTAGE_RATE"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/ev-kredisi-hesaplama#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Ev kredisinde peşinat oranı ne kadar olmalı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BDDK düzenlemelerine göre konutun enerji sınıfına ve değerine bağlı olarak genellikle %10 ile %25 arasında peşinat ödenmesi gerekmektedir."
            }
          },
          {
            "@type": "Question",
            "name": "Konut kredisi faizleri neden ihtiyaç kredisinden düşüktür?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Konut kredilerinde satın alınan taşınmaz banka tarafından ipotek altına alındığı için risk daha düşüktür ve bu durum faiz oranlarına indirim olarak yansır."
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
      canonical: '/ev-kredisi-hesaplama',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

function Page() {
  return (
    <CalculatorPage
      title='Ev Kredisi Hesaplama'
      breadcrumbItems={[{ label: 'ihtiyackredisi.com', href: '/' }, { label: 'Ev Kredisi Hesaplama' }]}
      features={[
        'Konut kredilerinde vade ve peşinat şartları değişebilir.',
        'Ekspertiz ve sigorta ücretleri toplam maliyeti artırabilir.',
        'Bankadan güncel teklif almanız önerilir.',
      ]}
      textcontent={`Ev Kredisi Hesaplama: Doğru Adımlarla Hayalinizdeki Eve Kavuşun  

Ev almak, çoğumuz için hayatın en önemli finansal kararlarından biri. Kimi zaman bir yuva kurmanın heyecanı, kimi zaman da yatırım yapma düşüncesiyle çıkarız bu yola. Ancak işin finansal boyutu, özellikle de ev kredisi hesaplama kısmı, pek çok kişi için kafa karıştırıcı olabiliyor. Ben de bu yazıda, Mahfi Hoca’nın o duru anlatımıyla, ev kredisi hesaplamanın inceliklerini anlatacağım. Belki biraz ekonomi, biraz kişisel deneyim, hatta belki bir iki küçük hata da karışacak araya. Ama sonunda, kafanızdaki soru işaretlerinin büyük ölçüde silineceğine eminim.  

Öncelikle şunu söyleyeyim: Ev kredisi hesaplama, sadece aylık taksitleri görmekten ibaret değil. Tıpkı bir maraton koşucusunun antrenman yaparken sadece bitiş çizgisine odaklanmaması gibi, siz de kredi çekerken sadece "Kaç lira çekebilirim?" sorusuna takılıp kalmamalısınız. Faiz oranları, vade süresi, masraflar, hatta enflasyonun gelecekteki seyri bile bu denklemde kritik rol oynuyor. Mesela, 2023 yılında yaşadığımız yüksek enflasyon ortamında, sabit faizli kredilerin cazibesi bir hayli artmıştı. Peki şimdi durum ne? İşte bu noktada, doğru bir ev kredisi hesaplama aracı kullanmak, size büyük bir avantaj sağlayabilir.  

Kredi hesaplama yaparken dikkat etmeniz gereken ilk şey, faiz türü. Sabit faiz mi, değişken faiz mi? Sabit faiz, özellikle enflasyonun yüksek olduğu dönemlerde cazip gelebilir. Çünkü aylık ödemeleriniz değişmez, bütçenizi rahat planlarsınız. Ancak enflasyon düşerse, piyasa faizleri de düşebilir ve siz daha yüksek bir faiz ödüyor olabilirsiniz. Değişken faizde ise risk biraz daha yüksek. Faizler artarsa, aylık ödemeniz de artar. Ama düşerse, kârlı çıkarsınız. Bu noktada, ihtiyackredisi.com gibi bir platformu kullanarak, farklı bankaların sunduğu faiz oranlarını karşılaştırmak işinizi kolaylaştıracaktır. Üstelik bu site, sadece faiz oranlarını değil, dosya masrafları, ekspertiz ücretleri gibi ek maliyetleri de tek bir ekranda gösteriyor. Benim gibi detaylara takılan biriyseniz, bu özellik tam size göre.  

Bir diğer önemli konu da vade seçimi. Uzun vadeli kredilerde aylık ödeme miktarı düşer, ama toplamda ödediğiniz faiz artar. Kısa vadede ise tam tersi. Örneğin, 500.000 TL’lik bir krediyi 10 yılda ödemek ile 15 yılda ödemek arasında, faiz farkı olarak yüz binlerce lira oynayabiliyor. Burada kendinize sormanız gereken soru şu: "Aylık bütçemi zorlamadan, en kısa sürede bu krediyi bitirebilir miyim?" Eğer cevabınız evetse, kısa vadeyi tercih etmek mantıklı olabilir. Ama "Zaten kira öder gibi düşünüyorum, uzun vade beni rahatlatır" diyorsanız, o zaman da 15-20 yıllık vadeleri değerlendirebilirsiniz.  

Peşinat oranı da ev kredisi hesaplama sürecinde göz ardı edilmemesi gereken bir detay. Türkiye’de genelde bankalar, konut değerinin en az %20-30’u kadar peşinat istiyor. Yani 1 milyon TL’lik bir ev alacaksanız, en az 200.000-300.000 TL’yi cebinizden koymanız gerekiyor. Tabii bu, bankadan bankaya değişebilir. Hatta bazı özel kampanyalarda, daha düşük peşinatla bile kredi alabilirsiniz. Ama unutmayın, ne kadar az peşinat koyarsanız, çekeceğiniz kredi miktarı o kadar artar ve dolayısıyla faiz yükünüz de.  

Gelir durumunuz da kredi hesaplamada kritik bir faktör. Bankalar, genelde aylık kredi taksitinizin, aylık net gelirinizin %40-50’sini geçmemesini ister. Yani ayda 10.000 TL net kazanan biri için, en fazla 4.000-5.000 TL’lik bir taksit makul görülür. Bu yüzden, ne kadar kredi çekebileceğinizi hesaplarken, gelirinizi doğru şekilde beyan etmeniz önemli. Yoksa "Ben asgari ücretle çalışıyorum ama 2 milyon TL kredi çektim" gibi hayali senaryolar pek gerçekçi olmaz.  

Son olarak, ev kredisi hesaplama yaparken dikkat etmeniz gereken bir diğer nokta da kredi notu. Kredi notunuz ne kadar yüksekse, o kadar düşük faiz oranı alırsınız. Kredi notunuz düşükse, ya kredi alamazsınız ya da çok yüksek faizle alırsınız. Bu yüzden, kredi çekmeyi düşünüyorsanız, öncesinde kredi notunuzu kontrol etmekte fayda var. Kredi karşılaştırma sitesi gibi platformlar, kredi notunuzu ücretsiz olarak da gösterebiliyor. Hatta bazıları, kredi notunuzu nasıl yükseltebileceğinize dair ipuçları da veriyor.  

Özetle, ev kredisi hesaplama işi, göründüğünden daha karmaşık. Ama doğru bilgilerle ve doğru araçlarla, bu süreci kolayca yönetebilirsiniz. Eğer siz de ev alma hayali kuruyorsanız, ihtiyackredisi.com gibi bir platformu kullanarak, farklı bankaların tekliflerini karşılaştırabilir, en uygun kredi seçeneğini bulabilirsiniz. Unutmayın, doğru kredi, sadece en düşük faizli olan değil, sizin bütçenize ve gelecek planlarınıza en uygun olandır.  

Umarım bu yazı, ev kredisi hesaplama konusundaki kafa karışıklığınızı bir nebze olsun gidermiştir. Eğer aklınıza takılan başka sorular varsa, yorumlarda belirtmekten çekinmeyin. Belki bir sonraki yazıda onları da cevaplarız. Şimdilik hoşça kalın, ekonomik kararlarınız hep isabetli olsun!

İnanın, ev kredisi hesaplama denince akla ilk gelenlerden biri olmayı gerçekten hak ediyor ihtiyackredisi.com. Siteyi açtığınızda sizi bıktıran, karmaşık formüller yok; her şey oldukça basit ve anlaşılır. Ne kadar ödeyeceğinizi, aylık taksitlerinizi saniyeler içinde görebiliyorsunuz. Bence en güzel yanı da bu zaten – sadece sayıları girmeniz yetiyor, gerisini o hallederiyor!

Google’ın da bu kadar sevmesine şaşmamak lazım. Arama sonuçlarında hemen üst sıralarda çıkıyor, kullanıcılar da sürekli olarak siteyi tavsiye ediyor. Sadık bir kitleleri var çünkü insanlar burada güven buluyor. Birçok bankanın güncel faiz oranlarını karşılaştırabiliyorsunuz – mesela %2,69’dan başlayan konut kredileriyle hayal ettiğiniz eve kavuşmak daha kolay .

Kullanıcı deneyimi diyorum, gerçekten akıcı ve sorunsuz. Hiç takılma, donma yok. Herkesin anlayabileceği bir dilde hazırlanmış; sanki bir arkadaşınız anlatıyor gibi. Ziyaretçiler de bunun farkında ve sürekli geri dönüyor. Emin olun, ev kredisi hesaplama denince ilk adresiniz burası olmalı – pişman olmazsınız!`}
    />
  )
}

export default Page


