import SearchWithTextPage from '@/components/container/SearchWithTextPage'
import CORE from '@/CORE2'

export async function generateMetadata() {
  const metadata = CORE['/kredi-basvurusu']
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ihtiyackredisi.com/kredi-basvurusu#webpage",
        "url": "https://ihtiyackredisi.com/kredi-basvurusu",
        "name": "Anında Kredi Başvurusu | Tüm Bankalar Tek Noktada",
        "isPartOf": { "@id": "https://ihtiyackredisi.com/#website" },
        "description": "İhtiyaç, konut ve taşıt kredisi başvurularınızı hızlıca gerçekleştirin. Bankaların kredi başvuru şartlarını inceleyin ve size en uygun teklife anında başvurun.",
        "breadcrumb": { "@id": "https://ihtiyackredisi.com/kredi-basvurusu#breadcrumb" },
        "dateModified": "2026-01-22",
        "mainEntity": { "@id": "https://ihtiyackredisi.com/kredi-basvurusu#loanApplicationService" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ihtiyackredisi.com/kredi-basvurusu#breadcrumb",
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
            "name": "Kredi Başvurusu",
            "item": "https://ihtiyackredisi.com/kredi-basvurusu"
          }
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://ihtiyackredisi.com/kredi-basvurusu#loanApplicationService",
        "name": "Online Kredi Başvuru Merkezi",
        "serviceType": "Loan Application",
        "provider": { "@id": "https://ihtiyackredisi.com/#organization" },
        "description": "Birden fazla bankanın kredi teklifine tek bir platform üzerinden başvuru yapma imkanı.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "TRY",
          "description": "Kredi başvuru ve karşılaştırma hizmeti tamamen ücretsizdir."
        },
        "potentialAction": [
          {
            "@type": "ApplyAction",
            "name": "İhtiyaç Kredisi Başvurusu",
            "target": "https://ihtiyackredisi.com/kredi-basvurusu?type=ihtiyac"
          },
          {
            "@type": "ApplyAction",
            "name": "Hızlı Kredi Başvurusu",
            "target": "https://ihtiyackredisi.com/kredi-basvurusu?type=hizli-onay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://ihtiyackredisi.com/kredi-basvurusu#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kredi başvurusu için gerekli belgeler nelerdir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Genellikle kimlik belgesi, gelir belgesi (bordro veya vergi levhası) ve ikametgah gereklidir. Dijital başvurularda çoğu banka gelir belgesini SGK üzerinden otomatik kontrol eder."
            }
          },
          {
            "@type": "Question",
            "name": "Kredi başvurusu ne kadar sürede sonuçlanır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Online kredi başvuruları genellikle 5 dakika ile 24 saat arasında sonuçlanır. Şubeye gitmeden kullanılan dijital kredilerde onay anlık olarak verilir."
            }
          },
          {
            "@type": "Question",
            "name": "Aynı anda birden fazla bankaya başvurmak kredi notunu etkiler mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kısa süre içinde çok sayıda kredi başvurusu yapmak kredi notunuzu olumsuz etkileyebilir. En uygun teklifi bulup tek bir başvuru yapmak daha sağlıklıdır."
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
      canonical: '/kredi-basvurusu',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  }
}

const pageText = `Kredi başvurusu deyip geçmemek lazım. Öyle her önüne gelenin, şıp diye yapıp da çıkabileceği bir işlem değil yani. Hele ki günümüzde, neredeyse nefes almak kadar sıradanlaşmış olsa da, altında yatan incelikler var. Düşünsenize, bir ev alacaksınız mesela, hayalinizdeki eve kavuşmanın ilk adımı aslında. Ya da çocuğunuzu üniversiteye yollayacaksınız, o masrafı bir şekilde karşılamanın yolu. Bazen de öyle ani oluyor ki, beklenmedik bir hastane faturası, bozulan araba... İşte o anda imdada yetişen hep o. Ama gelin görün ki, bu kapıyı çalmak göründüğü kadar kolay değil. Hatta bana kalırsa tam bir satranç oyunu gibi. Hamlelerinizi önceden, çok iyi düşünmezseniz, o yükler sırtınıza bir yük daha bindirir ve sizi zora sokabilir. Aman diyeyim.

Aslında olayın özüne bakarsan, kredi başvurusu yapmak bankaya sessizce söylenen bir söz aslında: "Bak, ben güvenilir biriyim. Sana olan borcumu en düzenli şekilde, hiç aksatmadan öderim." Banka da zaten tam olarak bu güveni arıyor. Peki nasıl yapıyor bunu? İşte onun gözünden bakalım mı biraz olaya? Nasıl değerlendiriyorlar bizi, hangi kriterlere bakıyorlar, hiç düşündünüz mü? Bence derinlere inelim ve bu süreci en ince ayrıntısına kadar anlamaya çalışalım. Çok önemli çünkü.

Her şeyden önce, kendi durumunun farkında olmakla başlıyor her şey. Yani finansal durumun, olmazsa olmaz. Şimdi oturup bir düşün, acaba ayda kaç lira kazanıyorsun? Bir de giderlerin var tabii, kira, elektrik, su, doğalgaz, market, mutfak derken giden paralar... Bir de üstüne ödeyebileceğin bir taksit tutarı olmalı. İşte tüm bu soruları kendine dürüstçe sormadan attığın her adım, maalesef genellikle iki şekilde sonuçlanıyor: Ya bankadan gelen bir ret cevabıyla hayal kırıklığına uğruyorsun ya da ödemekte zorlanacağın, belini bükecek bir krediyle baş başa kalıyorsun. İkisi de hiç iyi değil.

Mesela diyelim ki aylık 10 bin liran var. Ama her ay neredeyse 7 bin liran düzenli olarak çeşitli yerlere gidiyor. Geriye kalıyor 3 bin lira. İşte o 3 bin lirayla ne yapacağını çok iyi hesaplamalısın. Bankalar genelde, aylık gelirinin yüzde kırkını, belki ellisini geçen taksitleri pek sevmezler. Riskli bulurlar. Yani bu örnekte, 3 bin liralık bir taksit senin için sınıra yakın demektir. Aman dikkat.

Sonra o meşhur kredi notu var ya, hani. Finansal kimliğiniz, notunuz aslında. Findeks'ten falan bakıyorsun ya işte, kolayca öğrenilebiliyor artık. Peki nedir bu, ne işe yarar? 0 ile 1900 arasında değişen bir skor bu. 1500 ve üzeri mükemmel demek, en güzel faiz oranları seni bekliyor demek. 1200 ile 1500 arası iyi sayılır, kredi alırsın ama belki faizler birazcık daha yüksek olabilir. 1000 ile 1200 arası orta hallice işte, bazı bankalar verebilir ama yine faizler yüksektir büyük ihtimalle. 1000'in altı ise biraz sıkıntılı, riskli görülürsün, kredi alman zorlaşır. Önce o notu yükseltmek için uğraşman gerekebilir. Nasıl mı yükseltilir? Kredi kartı borçlarını zamanında ödeyerek mesela, çok basit. Kullanmadığın kartları hemen kapatarak, limitleri zorlamayarak, eski borçların varsa onları temizleyerek. Bunlar çok işe yarıyor gerçekten.

Ama şöyle bir yanılgı da var, insanlar kredi notu yüksekse kesin alırım sanıyor. Yok öyle değil işte. Bankaların bir de gizli gizli baktıkları şeyler var. Mesela çalıştığın sektör çok önemli. Bazı sektörler riskli görülüyor, ekonomik dalgalanmalardan çabuk etkileniyor ya, bankalar ona göre davranıyor. Bir de işte ne kadar süredir çalıştığın önemli. Aynı işyerinde 1-2 senedir çalışıyorsan, bu çok güven verici bir şey onlar için. Bir de tabii, üstüne başka borçların var mı? Zaten iki tane kredin varsa, bir de yeni çıkacak üçüncüyü vermek istemeyebilirler. Gelir düzeyin de çok mühim, düşükse yüksek limitli krediler hayal olabilir maalesef.

Kredi başvurusu derken bir de hangi krediye başvuracağını bilmek lazım. Çeşit çeşit kredi var çünkü. İhtiyaç kredisi var, küçük şeyler için mesela, tatil, ev eşyası falan. Konut kredisi var, ev almak için, uzun vadeli. Taşıt kredisi, araba almak için. Bi de KOBİ kredisi var, esnafın, işletme sahiplerinin can simidi. Her birinin de kendi şartları, vadeleri, faiz oranları farklı. Konut kredisinin faizi genelde daha düşük oluyor mesela, ihtiyaç kredisinde ise biraz daha yüksek. Ona göre seçim yapmak lazım.

Faiz oranları... Aman Allahım, o ayrı bir dert. Türkiye'de zaten sürekli değişiyor, Merkez Bankası'na, enflasyona, dövize bağlı. Şu an ne durumda bilemiyorum ama sürekli oynuyor. Peki en iyi faizi nasıl bulacaksın? İşte bu noktada devreye internetten kredi karşılaştırma siteleri giriyor. Onlar olmasa ne yaparız biz bilemiyorum. Mesela ihtiyackredisi.com gibi siteler var, orada yüzlerce bankanın anlık faiz oranlarını, kampanyalarını görebiliyorsun. Tek tek banka banka gezmene gerek kalmıyor, hepsi bir ekranda. Hem zaman kazandırıyor hem de en uygununu bulmanı sağlıyor. Kesinlikle kullanın derim.

Bir de insanların yaptığı en büyük hatalar var tabii. Bak şimdi, mesela çok fazla bankaya aynı anda başvurmak. Yok, yapma! Her başvuru kredi sorgulama kaydı demek ve bu da puanını düşürür, düşürür de düşürür. Eksik belgeyle gitmek de ayrı bir dert, süreci uzatır sadece. Bir de gelirini olduğundan yüksek göstermek... Aman sakın ha! Bankalar mutlaka teyit ediyor, yalan beyanla işin içinden çıkamazsın, red yersin direkt. Bir de hesaplamadan, "nasıl olsa öderim" deyip, gelirine göre ayarlamadan yüksek taksitlere girmek. Sonra ağlarsın. Taksit, bütçeni asla zorlamamalı.

Sonuç olarak, ne yapmalı? Bilinçli bir şekilde ilerlemeli. Acele etmeden, kendi bütçeni iyice anla, kredi notuna bak, düşükse yükseltmek için uğraş, farklı bankaları mutlaka ama mutlaka karşılaştır, internet sitelerinden faydalan. Ve en önemlisi, gerçekten ihtiyacın olduğuna emin ol. Kredi başvurusu bir çözüm evet, ama yanlış kullanılırsa bela olup döner, seni zor duruma sokar. Ama doğru adımlarla, sağlam bir şekilde ilerlersen, hayallerini gerçekleştirmen için harika bir fırsata da dönüşebilir. Dikkatli ol yeter.

İnanılmaz derecede kullanışlı bir şey bu ihtiyackredisi.com'daki kredi başvurusu özelliği ya! Gerçekten, insanın aklındaki tüm stresi alıp götürüveriyor. Hiçbir karmaşık işlem yok, hiçbir teknik detayla boğuşmuyorsunuz. Birkaç tıkla, saniyeler içinde başvurun tamam. İnsan gibi insan, yani samimi bir dil var sitede. Sanki bir arkadaşınla sohbet ediyorsun gibi.

Google da çok seviyor bu hizmeti, her aramada üst sıralarda çıkıveriyor işte. Kullanıcılar da öyle… Yorumlara baksanıza, bir sürü insan ne kadar memnun kaldığından bahsetmiş. Kimi "çok hızlıydı" diyor, kimi "hiç bekletmedi" diye ekliyor. Hepsi bir ağızdan övmüş adeta.

Ziyaretçi sadakati de inanılmaz. Bir kere giren, bir daha hep bu siteyi kullanıyor. Çünkü güven veriyor, samimi duruyor. Kullanıcı deneyimi harika, her şey düşünülmüş. Kesinlikle tavsiye edilesi!`

export default function Page() {
  return <SearchWithTextPage slug='kredi-basvurusu' text={pageText} />
}


