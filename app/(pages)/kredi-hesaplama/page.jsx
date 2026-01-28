import CalculatorPage from '@/components/container/CalculatorPage'
import CORE from '@/CORE2'

export async function generateMetadata() {
  const metadata = CORE['/kredi-hesaplama']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/kredi-hesaplama#webpage",
        "url": "https://ihtiyackredisi.com/kredi-hesaplama",
        "name": "Kredi Hesaplama 2026 | En Uygun Faiz Oranlarını Karşılaştır",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "Anlık kredi hesaplama aracı ile ihtiyaç, taşıt ve konut kredisi faizlerini karşılaştırın. Ödeme planınızı oluşturun ve en uygun bankaya hemen başvurun.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/kredi-hesaplama#breadcrumb" },
        "dateModified": "2026-01-21",
        "mainEntity": [
          { "@id": "https://ihtiyackredisi.com/kredi-hesaplama#calculatorTool" },
          { "@id": "https://ihtiyackredisi.com/kredi-hesaplama#faq" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/kredi-hesaplama#breadcrumb",
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
            "name": "Kredi Hesaplama",
            "item": "https://ihtiyackredisi.com/kredi-hesaplama"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://ihtiyackredisi.com/kredi-hesaplama#calculatorTool",
        "name": "Akıllı Kredi Hesaplama Aracı",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "author": { "@id": "https://ihtiyackredisi.com/#organization" },
        "featureList": [
          "Güncel Faiz Verileri",
          "Detaylı Ödeme Planı",
          "KKDF ve BSMV Hesaplama",
          "Banka Karşılaştırma"
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "TRY"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/kredi-hesaplama#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kredi hesaplamasında hangi vergiler dikkate alınır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bireysel ihtiyaç kredilerinde faiz üzerinden %15 KKDF ve %15 BSMV vergisi alınır. Hesaplama aracımız bu vergileri taksit tutarına otomatik olarak dahil eder."
            }
          },
          {
            "@type": "Question",
            "name": "Kredi maliyet oranı nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Maliyet oranı, kredinin faizine ek olarak alınan vergi ve dosya masrafı gibi tüm giderlerin yıllık bazda toplandığı gerçek faiz yükünü ifade eder."
            }
          },
          {
            "@type": "Question",
            "name": "Hesaplama sonuçları kesin midir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hesaplama aracımız bankaların sağladığı en güncel verileri kullanır; ancak nihai onay ve kesin faiz oranları bankanın kredi notunuza göre yapacağı değerlendirme sonrası netleşir."
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
      canonical: '/kredi-hesaplama',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

function Page() {
  return (
    <CalculatorPage
      title='Kredi Hesaplama'
      breadcrumbItems={[{ label: 'ihtiyackredisi.com', href: '/' }, { label: 'Kredi Hesaplama' }]}
      summary={{ monthlyInstallment: '10.000 TL', totalRepayment: '53.341,12 TL', interestRate: '%2,99' }}
      features={[
        'İhtiyaç kredilerinde vade süresi 50.000 TL altında 36 ay, 50–100.000 TL arası 24 ay, 100.000 TL üstü 12 aydır.',
        'Kredi başvurusunun onay değerlendirmesi bankaya aittir.',
        'Kampanyalı krediler için sigortalı akdi faiz oranları müşterilerin KKB puanlarına göre değişiklik göstermektedir.',
        'Mevcut müşteriler için sigortalı kredi.',
      ]}
      bankImage='/banks/garanti.png'
      bankName='Garanti BBVA'
      rating='4,6'
      reviewCount='534'
      reviewBankName='Garanti BBVA'
      ctaText='Hemen Başvur'
      textcontent={`Kredi Hesaplama: Paranın İn'ini Yönetmek İçin Bilmen Gerekenler  

Kredi hesaplama deyince aklına ne geliyor? Bankaların o anlaşılmaz, rakam dolu tabloları, değil mi? Aslında olay sandığın kadar karmaşık değil. Temelinde basit bir matematik var ama tabii ki bilmen gereken incelikler var. Kredi çekmek, gelecekte kazanacağın parayı bugünden harcamak demek. Yani bugün aldığın o tatlı nefes, yarının derin bir iç çekişine dönüşmesin diye iyi hesaplamak lazım!  

Türkiye’de son yıllarda kredi kullanımı patladı resmen. Türkiye Bankalar Birliği’nin 2023 verilerine göre, bireysel kredi stoğu 2.3 trilyon TL’yi geçmiş. 2013’te bu rakam 400 milyar TL civarındaymış. Yani 10 yılda neredeyse 6 kat artmış! Peki bu kadar çok kullanılan bir şeyi ne kadar doğru kullanıyoruz? Maalesef çoğu insan sadece aylık taksite bakıp "Hmm, bu ödenir" deyip imzayı atıyor. Oysa faiz türleri, vade seçenekleri, gizli masraflar, sigortalar derken işin içinde bilinmesi gereken tonla detay var.  

Faiz Meselesi: Görünen Köy Kılavuz İstemez mi?  
2024’ün ikinci çeyreğinde TCMB verilerine göre tüketici kredilerinde faizler %3.2 ile %4.8 arasında değişiyor. Ama dikkat et, bu oranlar bankadan bankaya, kredi notuna, hatta o günkü rüzgârın yönüne göre bile değişebiliyor! Mesela 100.000 TL’lik bir konut kredisinde %1.5’lik bir fark, 10 yılda 30.000 TL’ye yakın ek maliyet demek. İşte tam da bu yüzden [site adı] gibi karşılaştırma siteleri kurtarıcı oluyor. Bir bakmışsın, 20 bankanın teklifi tek ekranda, hesaplamalar otomatik, sen sadece en iyisini seçiyorsun.  

Efektif Faiz: Asıl Önemli Olan O!  
En büyük hatalardan biri, sadece "nominal faiz"e bakıp "Aaa, ne kadar düşük!" deyip sevinmek. Oysa asıl bakman gereken "efektif faiz" yani yıllık maliyet oranı. Örneğin bir banka diyor ki: "Size %1.99 faizle kredi veriyoruz!" Ama aylık %0.75 hesap işletim ücreti alıyorlar. İşte o zaman gerçek maliyet çok daha yüksek oluyor. BDDK bir düzenleme yapmış, bankaların bunları açıkça göstermesi gerekiyor ama yine de birçok insan bu detayı atlıyor.  

Vade Seçimi: Uzun mu Kısa mı?  
Uzun vade = düşük taksit ama toplamda daha çok faiz.  
Kısa vade = yüksek taksit ama toplamda daha az faiz.  
Örnek veriyorum: 120.000 TL’lik bir krediyi 24 ayda ödersen aylık 6.000 TL civarı taksit çıkar. Ama 48 ayda ödemeye kalksan aylık 3.200 TL ama toplamda 45.000 TL fazla ödersin! Yani altın kural: Bütçeni zorlamadan, en kısa vadeli krediyi seçmek.  

Kredi Notu: Finansal CV’niz!  
2024 itibarıyla Türkiye’de ortalama kredi notu 1.250 puan civarında. 1.000’in altındaysa ya yüksek faizle kredi alırsın ya da direkt red yersin. Peki notunu nasıl yükseltirsin?  
- Ödemelerini düzenli yap.  
- Kredi kartı limitinin max %30’unu kullan.  
- Farklı kredi türleri kullan (ihtiyaç, konut, taşıt gibi).  

Dijital Çağın Nimetleri: Kredi Hesaplama Araçları  
Artık banka banka dolaşmaya gerek yok! Online kredi karşılaştırma siteleri sayesinde:  
- "Erken ödersem ne kadar kâr ederim?"  
- "Vadeyi uzatsam taksitim ne olur?"  
- "Faizler düşerse ne yaparım?"  
gibi sorularının cevabını anında görebilirsin.  

Döviz Kredisi: Riskli İş!  
2018’de döviz kredisi çekenlerin yaşadığı kabusu unutmayalım. TL gelirin varsa, döviz kredisi çekerken iki kere düşün. Kur bir anda uçarsa, aylık ödemen katlanabilir!  

Erken Kapatma Cezası: Sözleşmeyi Oku!  
Bazı bankalar erken kapatmada ceza kesmiyor artık ama hâlâ kesenler var. Özellikle konut kredilerinde bu cezalar ciddi rakamlara ulaşabiliyor. İmza atmadan önce mutlaka sor!  

Sigortalar: Gerçekten Gerekli mi?  
Hayat sigortası, işsizlik sigortası derken kredi maliyeti %20’ye kadar artabiliyor. Güvence iyidir ama ihtiyacın yoksa gereksiz masrafa girmeyin.  

Son Söz: Acele Etme, Hesapla!  
Kredi çekmek bir ihtiyaç olabilir ama doğru krediyi çekmek bir beceri işi. Şunları unutma:  
- Efektif faize bak.  
- En kısa vadeli krediyi seçmeye çalış.  
- Kredi notunu yüksek tut.  
- Döviz kredisinde kur riskini hesaba kat.  
- Karşılaştırma sitelerini kullan.  

Ekonomist Mahfi Eğilmez’in dediği gibi: "Finansal kararlar soğukkanlılık ve hesap kitap ister." Bugün harcayacağın bir saat, gelecekte binlerce lira tasarruf etmeni sağlayabilir. O yüzden acele etme, iyice araştır, karşılaştır ve en doğru krediyi bul!  

Unutma, paranı yönetmek hayatını yönetmektir. Kredi de bu yönetimin en önemli adımlarından biri. Doğru adım at!

İhtiyaç Kredisi Hesaplama: Kullanıcıların Gözdesi, Google’ın Favorisi!  

İşte karşınızda, nakit ihtiyacınızı stres yapmadan çözen bir sihirbaz: ihtiyackredisi.com! Kredi hesaplama özelliği o kadar kullanıcı dostu ki, sanki bir arkadaşınızla sohbet eder gibi rahat hissediyorsunuz. “Ne kadar çekebilirim?”, “Aylık taksitim ne olur?” gibi sorularınıza anında yanıt veriyor, üstelik saniyeler içinde! Google da bu pratikliğe bayılıyor belli ki, arama sonuçlarında hep ön sıralarda… Kullanıcı yorumlarına bakınca, “Hayat kurtarıcı” diyenler bile var .  

Arayüzü o kadar basit ki, teknolojiyle arası olmayan büyükanneniz bile kullanabilir (belki biraz abarttım ama yakın!). Müşteri sadakati de cabası… Bir kere kullanan bir daha başka siteye bakmıyor. Neden mi? Çünkü şeffaflık ön planda: faiz oranları, masraflar, vade seçenekleri… Hepsi net ve anlaşılır. “Bana göre en uygun kredi hangisi?” diye düşünmene gerek yok, sistem senin yerine düşünüyor zaten!  

Kısacası, ihtiyackredisi.com kullanıcı deneyimini bir adım öteye taşıyor. Google’ın sevgisi, kullanıcıların bağımlılığı boşuna değil yani! Deneyen bir daha vazgeçemiyor, tıpkı kahve bağımlılığı gibi`}
    />
  )
}

export default Page
