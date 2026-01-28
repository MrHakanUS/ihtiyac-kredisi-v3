// Bank-specific structured data (JSON-LD) for SEO
// Each bank has its own structured data configuration

export const bankStructuredData = {
  akbank: {
    financialProduct: {
      name: "Akbank İhtiyaç Kredisi Ürünleri",
      description: "Akbank tarafından sunulan hızlı onaylı ve uygun faizli tüketici kredisi seçenekleri.",
      brand: {
        name: "Akbank",
        alternateName: "Akbank T.A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/akbank.webp"
      },
      offers: {
        description: "Akbank direkt kredi faiz oranları %3.59'dan başlamaktadır.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Akbank Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=akbank"
        },
        {
          type: "ControlAction",
          name: "Akbank Taksit Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=akbank"
        }
      ]
    },
    faq: [
      {
        question: "Akbank direkt kredi nedir?",
        answer: "Akbank Direkt Kredi, şubeye gitmeden Akbank Mobil veya internet şubesi üzerinden anında onaylanan ve hesaba aktarılan belgesiz kredi türüdür."
      },
      {
        question: "Akbank ihtiyaç kredisi için gerekli belgeler nelerdir?",
        answer: "Mevcut Akbank müşterileri için genellikle belge istenmez. Yeni müşteriler için kimlik kartı ve gelir belgesi yeterlidir."
      }
    ]
  },
  albaraka: {
    financialProduct: {
      name: "Albaraka Türk İhtiyaç Finansmanı",
      description: "Faizsiz bankacılık esaslarına göre sunulan, nakit ihtiyaçları veya mal/hizmet alımı için kullanılan finansman desteği.",
      brand: {
        name: "Albaraka",
        alternateName: "ALBARAKA TÜRK KATILIM BANKASI A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/Albaraka.webp"
      },
      offers: {
        description: "Güncel kar payı oranları ile faizsiz finansman seçenekleri.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Albaraka Finansman Başvurusu",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=albaraka"
        },
        {
          type: "ControlAction",
          name: "Kar Payı Hesaplama",
          target: "https://ihtiyackredisi.com/hesaplama?banka=albaraka"
        }
      ]
    },
    faq: [
      {
        question: "Albaraka Türk ihtiyaç kredisi (finansmanı) faizsiz mi?",
        answer: "Evet, Albaraka Türk bir katılım bankasıdır. Faiz yerine kar payı oranları ile finansman sağlar ve işlemlerini faizsiz bankacılık prensiplerine göre yürütür."
      },
      {
        question: "Albaraka Türk finansman desteği hangi alanlarda kullanılır?",
        answer: "Eğitim, tatil, beyaz eşya, konut veya araç gibi pek çok alanda, bankanın mal veya hizmeti sizin adınıza satın alıp size vadeli satması prensibiyle kullanılır."
      }
    ]
  },
  'alternatif-bank': {
    financialProduct: {
      name: "Alternatif Bank İhtiyaç Kredisi",
      description: "Alternatif Bank'ın kişiye özel faiz oranları ile sunduğu bireysel finansman çözümleri.",
      brand: {
        name: "Alternatif Bank",
        alternateName: "Alternatifbank A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/alternatifbank.webp"
      },
      offers: {
        description: "Esnek ödeme planlı Alternatif Bank kredi seçenekleri.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Alternatif Bank Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=alternatif-bank"
        },
        {
          type: "ControlAction",
          name: "Taksit Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=alternatif-bank"
        }
      ]
    },
    faq: [
      {
        question: "Alternatif Bank kredi başvurusu nasıl yapılır?",
        answer: "Alternatif Bank kredi başvuruları bankanın internet şubesi, mobil uygulaması veya şubeleri üzerinden gerçekleştirilebilir. ihtiyackredisi.com üzerinden oranları karşılaştırarak başvurunuzu yönlendirebilirsiniz."
      },
      {
        question: "Alternatif Bank kredi faiz oranları güncel mi?",
        answer: "Evet, sayfamızdaki Alternatif Bank faiz oranları veri setimiz aracılığıyla anlık olarak güncellenmektedir."
      }
    ]
  },
  cepteteb: {
    financialProduct: {
      name: "CEPTETEB İhtiyaç Kredisi",
      description: "Şubeye gitme zorunluluğu olmayan, dijital kanallar üzerinden anında onaylanan TEB dijital bankacılık kredisi.",
      brand: {
        name: "CEPTETEB",
        parentOrganization: {
          name: "Türk Ekonomi Bankası A.Ş."
        },
        logo: "https://ihtiyackredisi.com/banks/cepteteb.webp"
      },
      offers: {
        description: "Dijital kanallara özel avantajlı faiz oranları.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "CEPTETEB Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=cepteteb"
        },
        {
          type: "ControlAction",
          name: "CEPTETEB Taksit Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=cepteteb"
        }
      ]
    },
    faq: [
      {
        question: "CEPTETEB kredisi için şubeye gitmek gerekir mi?",
        answer: "Hayır, CEPTETEB tamamen dijital bir platformdur. Başvuru, onay ve kullanım süreçlerinin tamamı mobil uygulama veya internet şubesi üzerinden yürütülür."
      },
      {
        question: "CEPTETEB kredi başvurusu ne kadar sürede sonuçlanır?",
        answer: "Kredi başvuruları genellikle dakikalar içinde değerlendirilir ve uygun bulunması durumunda tutar anında hesaba aktarılır."
      }
    ]
  },
  denizbank: {
    financialProduct: {
      name: "DenizBank İhtiyaç Kredisi",
      description: "DenizBank tarafından sunulan, uygun faiz oranları ve esnek ödeme seçeneklerine sahip bireysel tüketici kredisi.",
      brand: {
        name: "DenizBank",
        alternateName: "DenizBank A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/deniz.webp"
      },
      offers: {
        description: "Cebinden Kredi ve hızlı onaylı DenizBank finansman çözümleri.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "DenizBank Kredisine Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=denizbank"
        },
        {
          type: "ControlAction",
          name: "DenizBank Taksit Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=denizbank"
        }
      ]
    },
    faq: [
      {
        question: "DenizBank ihtiyaç kredisi başvurusu için ne gerekli?",
        answer: "DenizBank müşterisiyseniz MobilDeniz veya internet şubesi üzerinden anında, değilseniz kimlik belgeniz ve gelir belgeniz ile en yakın şubeden veya dijital kanallarımızdan başvuru yapabilirsiniz."
      },
      {
        question: "DenizBank 'Cebinden Kredi' nedir?",
        answer: "Cebinden Kredi, DenizBank'ın SMS veya mobil uygulama üzerinden hızlıca değerlendirdiği ve evraksız onay alabildiğiniz bir hızlı kredi türüdür."
      }
    ]
  },
  'dunya-katilim': {
    financialProduct: {
      name: "Dünya Katılım İhtiyaç Finansmanı",
      description: "Dünya Katılım Bankası tarafından sunulan, katılım bankacılığı ilkelerine uygun, faizsiz bireysel finansman desteği.",
      brand: {
        name: "Dünya Katılım",
        alternateName: "Dünya Katılım Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/dunyakatilim.webp"
      },
      offers: {
        description: "Uygun kar payı oranlı ihtiyaç finansmanı seçenekleri.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Dünya Katılım Finansman Başvurusu",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=dunya-katilim"
        },
        {
          type: "ControlAction",
          name: "Finansman Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=dunya-katilim"
        }
      ]
    },
    faq: [
      {
        question: "Dünya Katılım ihtiyaç finansmanı faizli midir?",
        answer: "Hayır, Dünya Katılım bir katılım bankasıdır ve finansman ürünlerinde faiz yerine kar payı oranları uygulanır."
      },
      {
        question: "Dünya Katılım finansman hesaplaması nasıl yapılır?",
        answer: "ihtiyackredisi.com üzerindeki Dünya Katılım sayfasından talep ettiğiniz tutar ve vadeyi girerek, güncel kar payı oranları ile geri ödeme planınızı anında oluşturabilirsiniz."
      }
    ]
  },
  enpara: {
    financialProduct: {
      name: "Enpara.com İhtiyaç Kredisi",
      description: "Dosya masrafsız, tahsis ücretsiz ve şubeye gitmeden anında onaylanan dijital ihtiyaç kredisi.",
      brand: {
        name: "Enpara",
        alternateName: "Enpara Bank A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/enpara.webp"
      },
      offers: {
        description: "Masrafsız ve hızlı onaylanan bireysel kredi teklifleri.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Enpara Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=enpara"
        },
        {
          type: "ControlAction",
          name: "Masrafsız Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=enpara"
        }
      ]
    },
    faq: [
      {
        question: "Enpara kredisinde dosya masrafı var mı?",
        answer: "Hayır, Enpara.com ihtiyaç kredilerinde dosya masrafı, tahsis ücreti veya herhangi bir gizli gider talep etmez."
      },
      {
        question: "Enpara kredi başvurusu hafta sonu yapılır mı?",
        answer: "Evet, Enpara dijital bir banka olduğu için 7/24 başvuru yapabilir ve uygun bulunması durumunda kredinizi anında kullanabilirsiniz."
      }
    ]
  },
  fibabanka: {
    financialProduct: {
      name: "Fibabanka İhtiyaç Kredisi",
      description: "Şubeye gitmeden Mobil veya İnternet Bankacılığı üzerinden hızlıca onaylanan, esnek vadeli Fibabanka bireysel kredi ürünü.",
      brand: {
        name: "Fibabanka",
        alternateName: "Fibabanka A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/fibabanka.webp"
      },
      offers: {
        description: "Kişiye özel faiz oranları ve anında kredi kullanım imkanı.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Fibabanka Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=fibabanka"
        },
        {
          type: "ControlAction",
          name: "Fibabanka Kredi Hesaplama",
          target: "https://ihtiyackredisi.com/hesaplama?banka=fibabanka"
        }
      ]
    },
    faq: [
      {
        question: "Fibabanka anında kredi nasıl kullanılır?",
        answer: "Fibabanka müşterisiyseniz Fibabanka Mobil üzerinden 7/24 anında kredi kullanabilirsiniz. Müşteri değilseniz görüntülü arama ile müşteri olup kredinizi hemen hesabınıza aktarabilirsiniz."
      },
      {
        question: "Fibabanka kredi vadesi ne kadardır?",
        answer: "Fibabanka ihtiyaç kredilerinde yasal düzenlemeler çerçevesinde 50.000 TL'ye kadar 36 ay, 50.000 TL - 100.000 TL arası 24 ay ve 100.000 TL üzeri için 12 ay vade seçeneği sunulmaktadır."
      }
    ]
  },
  garanti: {
    financialProduct: {
      name: "Garanti BBVA İhtiyaç Kredisi",
      description: "Garanti BBVA Mobil ve İnternet Bankacılığı üzerinden hızlı onaylanan, kişiye özel faiz oranlı bireysel tüketici kredisi.",
      brand: {
        name: "Garanti",
        alternateName: "Türkiye Garanti Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/GarantiBBVA.webp"
      },
      offers: {
        description: "Garanti BBVA müşterilerine özel avantajlı faiz oranları.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Garanti Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=garanti"
        },
        {
          type: "ControlAction",
          name: "Garanti Taksit Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=garanti"
        }
      ]
    },
    faq: [
      {
        question: "Garanti BBVA ihtiyaç kredisi başvurusu ne kadar sürede sonuçlanır?",
        answer: "Garanti BBVA dijital kanalları üzerinden yapılan başvurular genellikle dakikalar içinde sonuçlanır ve onaylanan tutar anında hesaba aktarılabilir."
      },
      {
        question: "Garanti BBVA gelir belgesiz kredi verir mi?",
        answer: "Banka puanı yüksek olan ve ön onaylı limiti bulunan mevcut Garanti BBVA müşterileri, mobil uygulama üzerinden gelir belgesiz kredi kullanabilmektedir."
      }
    ]
  },
  'ziraat-dinamik': {
    financialProduct: {
      name: "Ziraat Bankası Dinamik Kredi",
      description: "Ziraat Bankası müşterilerine özel, tamamen dijital kanallar üzerinden sunulan, hızlı onaylı ve uygun faizli ihtiyaç kredisi ürünüdür.",
      category: "LoanOrCredit",
      brand: {
        name: "Ziraat Dinamik",
        legalName: "ZİRAAT DİNAMİK BANKA A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/Ziraatdinamik.webp"
      },
      offers: {
        description: "Dijital kanallara özel avantajlı faiz oranları ve 36 aya varan vade seçenekleri.",
      },
      potentialActions: [
        {
          type: "ControlAction",
          name: "Ziraat Dinamik Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=ziraat-dinamik"
        }
      ]
    },
    faq: [
      {
        question: "Ziraat Dinamik Kredi nedir?",
        answer: "Ziraat Dinamik Kredi, Ziraat Bankası müşterilerinin şubeye gitmelerine gerek kalmadan Ziraat Mobil veya İnternet Şubesi üzerinden anında kullanabildikleri bir tüketici kredisidir."
      },
      {
        question: "Dinamik Kredi başvurusu nasıl yapılır?",
        answer: "Ziraat Mobil uygulamasına giriş yaparak 'Başvurular' sekmesinden 'Kredi Başvurusu' adımını takip edebilir, saniyeler içinde kredinizi hesabınıza aktarabilirsiniz."
      }
    ]
  },
  ziraat: {
    financialProduct: {
      name: "Ziraat Bankası Tüketici Kredisi",
      description: "Ziraat Bankası'nın maaş müşterilerine, emeklilere ve tüm bireysel müşterilere özel sunduğu düşük maliyetli ihtiyaç kredisi ürünleri.",
      brand: {
        name: "Ziraat",
        alternateName: "T.C. Ziraat Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/ziraat.webp"
      },
      offers: {
        description: "Kamu bankası güvencesiyle esnek ödeme seçenekli bireysel krediler.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Ziraat Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=ziraat"
        },
        {
          type: "ControlAction",
          name: "Ziraat Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=ziraat"
        }
      ]
    },
    faq: [
      {
        question: "Ziraat Bankası ihtiyaç kredisi başvurusu nasıl yapılır?",
        answer: "Ziraat Bankası ihtiyaç kredisi başvuruları Ziraat Mobil, İnternet Şubesi, ATM ve tüm Ziraat Bankası şubeleri üzerinden kolayca gerçekleştirilebilir."
      },
      {
        question: "Ziraat Bankası emekli kredisi veriyor mu?",
        answer: "Evet, maaşını Ziraat Bankası'ndan alan emekliler için özel faiz oranları ve ödeme koşulları içeren ihtiyaç kredisi paketleri sunulmaktadır."
      }
    ]
  },
  kuveytturk: {
    financialProduct: {
      name: "Kuveyt Türk İhtiyaç Finansmanı",
      description: "Faizsiz bankacılık prensipleriyle sunulan, eğitimden sağlığa tüm ihtiyaçlarınız için uygun kâr payı oranlı finansman çözümleri.",
      brand: {
        name: "KuveytTürk",
        alternateName: "Kuveyt Türk Katılım Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/kuveyt.webp"
      },
      offers: {
        description: "Katılım bankacılığı esaslarına uygun taksitli ödeme seçenekleri.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Kuveyt Türk Finansman Başvurusu",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=kuveytturk"
        },
        {
          type: "ControlAction",
          name: "Kuveyt Türk Finansman Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=kuveytturk"
        }
      ]
    },
    faq: [
      {
        question: "Kuveyt Türk ihtiyaç kredisi yerine ne sunuyor?",
        answer: "Kuveyt Türk bir katılım bankası olduğu için 'kredi' yerine 'ihtiyaç finansmanı' sunar. Finansman sürecinde nakit para vermek yerine ihtiyacınız olan ürün veya hizmet banka tarafından satın alınarak size taksitlendirilir."
      },
      {
        question: "Kuveyt Türk kâr payı oranları sabit midir?",
        answer: "Kuveyt Türk finansmanlarında kâr payı oranları piyasa koşullarına göre güncellenmekle birlikte, sözleşme anında belirlenen oran vade sonuna kadar değişmez."
      }
    ]
  },
  'ing-bank': {
    financialProduct: {
      name: "ING İhtiyaç Kredisi",
      description: "Şubeye gitmeden, ING Mobil üzerinden anında onaylanan ve kişiye özel faiz oranları sunan bireysel finansman ürünü.",
      brand: {
        name: "ING Bank",
        alternateName: "ING Bank A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/ing.webp"
      },
      offers: {
        description: "Turuncu Ekstra avantajlarıyla daha düşük faizli kredi imkanları.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "ING Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=ing-bank"
        },
        {
          type: "ControlAction",
          name: "ING Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=ing-bank"
        }
      ]
    },
    faq: [
      {
        question: "ING ihtiyaç kredisi başvurusu için şubeye gitmek gerekir mi?",
        answer: "Hayır, ING müşterisi olsanız da olmasanız da dijital kanallar üzerinden başvurunuzu yapabilir, kurye süreci veya görüntülü görüşme ile şubeye gitmeden kredinizi kullanabilirsiniz."
      },
      {
        question: "ING kredi faiz oranları neye göre belirlenir?",
        answer: "ING'de faiz oranları kişinin kredi notuna göre (Kredi Skoruna Göre Faiz) değişkenlik göstermektedir. Kredi puanınız yükseldikçe daha uygun faiz oranlarından yararlanabilirsiniz."
      }
    ]
  },
  'getir-finans': {
    financialProduct: {
      name: "GetirFinans İhtiyaç Kredisi",
      description: "Tamamen dijital süreçlerle, Getir hızıyla sunulan masrafsız ve anında onaylı bireysel ihtiyaç kredisi.",
      brand: {
        name: "Getir Finans",
        alternateName: "GetirFinans",
        logo: "https://ihtiyackredisi.com/banks/getir-finans.jpg"
      },
      offers: {
        description: "Yeni nesil dijital bankacılık kredi teklifleri.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "GetirFinans Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=getir-finans"
        },
        {
          type: "ControlAction",
          name: "Dijital Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=getir-finans"
        }
      ]
    },
    faq: [
      {
        question: "GetirFinans ihtiyaç kredisi başvurusu nasıl yapılır?",
        answer: "GetirFinans kredi başvuruları Getir uygulaması içerisinden veya GetirFinans mobil uygulaması üzerinden saniyeler içinde gerçekleştirilir."
      },
      {
        question: "GetirFinans kredisi masraflı mı?",
        answer: "GetirFinans, yeni nesil dijital bankacılık prensibiyle genellikle dosya masrafsız ve şeffaf maliyetli kredi seçenekleri sunmaktadır."
      }
    ]
  },
  halkbank: {
    financialProduct: {
      name: "Halkbank İhtiyaç Kredisi Ürünleri",
      description: "Halkbank'ın maaş müşterilerine, kamu çalışanlarına ve özel sektör çalışanlarına sunduğu avantajlı bireysel kredi seçenekleri.",
      brand: {
        name: "Halkbank",
        alternateName: "Türkiye Halk Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/halk.webp"
      },
      offers: {
        description: "Kamu bankası güvencesiyle uygun taksitli kredi imkanları.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Halkbank Kredi Başvurusu",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=halkbank"
        },
        {
          type: "ControlAction",
          name: "Halkbank Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=halkbank"
        }
      ]
    },
    faq: [
      {
        question: "Halkbank hızlı kredi başvurusu nasıl yapılır?",
        answer: "Halkbank hızlı kredi başvurularınızı Halkbank Mobil, İnternet Şubesi veya SMS yoluyla saniyeler içinde yapabilir, onaylanan kredinizi anında kullanabilirsiniz."
      },
      {
        question: "Halkbank emeklilere özel kredi veriyor mu?",
        answer: "Evet, Halkbank maaşını bankadan alan emekliler için 'Mutlu Emekli İhtiyaç Kredisi' gibi özel faiz oranlı ve ödeme kolaylığı sağlayan paketler sunmaktadır."
      }
    ]
  },
  'is-bankasi': {
    financialProduct: {
      name: "İş Bankası İhtiyaç Kredisi Ürünleri",
      description: "İş Bankası müşterilerine özel Anında Kredi, geleneksel ihtiyaç kredisi ve düşük faizli finansman seçenekleri.",
      brand: {
        name: "İş Bankası",
        alternateName: "Türkiye İş Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/is.webp"
      },
      offers: {
        description: "İşCep üzerinden saniyeler içinde anında kredi imkanı.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "İş Bankası Kredi Başvurusu",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=is-bankasi"
        },
        {
          type: "ControlAction",
          name: "İş Bankası Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=is-bankasi"
        }
      ]
    },
    faq: [
      {
        question: "İş Bankası Anında Kredi nedir?",
        answer: "İş Bankası Anında Kredi, İşCep veya İnternet Şubesi üzerinden belge istemeden ve şubeye gitmeden kullanılabilen hızlı bir kredi türüdür."
      },
      {
        question: "İş Bankası ihtiyaç kredisi vadesi ne kadardır?",
        answer: "Yasal düzenlemeler kapsamında İş Bankası ihtiyaç kredilerinde vade süresi kredi tutarına göre 12, 24 veya 36 aya kadar değişebilmektedir."
      }
    ]
  },
  'n-kolay': {
    financialProduct: {
      name: "N Kolay İhtiyaç Kredisi",
      description: "Evrak derdi olmadan, tamamen dijital kanallar üzerinden saniyeler içinde onaylanan hızlı bireysel kredi.",
      brand: {
        name: "N Kolay",
        alternateName: "Aktif Yatırım Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/nkolay.webp"
      },
      offers: {
        description: "7/24 anında hesaba yatan dijital kredi seçenekleri.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "N Kolay Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=n-kolay"
        },
        {
          type: "ControlAction",
          name: "N Kolay Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=n-kolay"
        }
      ]
    },
    faq: [
      {
        question: "N Kolay kredi başvurusu ne kadar sürede sonuçlanır?",
        answer: "N Kolay kredi başvuruları dijital skorlama altyapısı sayesinde genellikle saniyeler içinde sonuçlanır ve onaylanan tutar anında hesaba aktarılır."
      },
      {
        question: "N Kolay kredisi için şubeye gitmem gerekir mi?",
        answer: "Hayır, N Kolay şubesiz bir bankacılık deneyimi sunar. Tüm süreç N Kolay mobil uygulaması veya web sitesi üzerinden tamamlanır."
      }
    ]
  },
  'on-dijital': {
    financialProduct: {
      name: "ON Dijital İhtiyaç Kredisi",
      description: "Masrafsız, şubesiz ve tamamen dijital. ON dünyasında kişiye özel faiz oranlarıyla saniyeler içinde kredi başvurusunu tamamlayın.",
      brand: {
        name: "ON Dijital",
        alternateName: "Burgan Bank A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/on.webp"
      },
      offers: {
        description: "Tahsis ücretsiz ve masrafsız dijital kredi avantajları.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "ON Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=on-dijital"
        },
        {
          type: "ControlAction",
          name: "ON Kredi Hesaplama",
          target: "https://ihtiyackredisi.com/hesaplama?banka=on-dijital"
        }
      ]
    },
    faq: [
      {
        question: "ON Dijital kredi başvurusu için ne gereklidir?",
        answer: "ON Mobil uygulaması veya web sitesi üzerinden sadece kimlik bilgilerinizle başvuruda bulunabilirsiniz. Şubeye gitmenize veya kağıt evrak imzalamanıza gerek yoktur."
      },
      {
        question: "ON'da masrafsız kredi seçenekleri var mı?",
        answer: "Evet, ON Dijital bankacılık kapsamında sunulan pek çok ihtiyaç kredisi paketinde tahsis ücreti (dosya masrafı) alınmamaktadır."
      }
    ]
  },
  qnb: {
    financialProduct: {
      name: "QNB İhtiyaç Kredisi",
      description: "Kişiye özel faiz oranları ve 36 aya varan vade seçenekleriyle QNB ihtiyaç kredisi çözümleri.",
      brand: {
        name: "QNB",
        alternateName: "QNB BANK A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/qnb.webp"
      },
      offers: {
        description: "Dijital kanallardan anında onaylı kredi fırsatları.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "QNB Kredi Başvurusu",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=qnb"
        },
        {
          type: "ControlAction",
          name: "QNB Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=qnb"
        }
      ]
    },
    faq: [
      {
        question: "QNB ihtiyaç kredisi başvurusu için gerekenler nelerdir?",
        answer: "QNB müşterisiyseniz QNB Mobil üzerinden sadece saniyeler içinde başvurabilirsiniz. Yeni müşteriler için dijital onay süreciyle evraksız başvuru imkanı sunulmaktadır."
      },
      {
        question: "QNB kredi faiz oranları kişiye göre değişir mi?",
        answer: "Evet, QNB kredi faiz oranları müşterinin kredi notuna, talep edilen kredi tutarına ve vade süresine göre farklılık gösterebilir."
      }
    ]
  },
  teb: {
    financialProduct: {
      name: "TEB İhtiyaç Kredisi",
      description: "Ertelemeli ödeme seçenekleri ve kişiye özel faiz oranlarıyla TEB bireysel tüketici kredisi çözümleri.",
      brand: {
        name: "TEB",
        alternateName: "Türk Ekonomi Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/teb.webp"
      },
      offers: {
        description: "Şubeye gitmeden anında TEB dijital kredi başvurusu.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "TEB Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=teb"
        },
        {
          type: "ControlAction",
          name: "TEB Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=teb"
        }
      ]
    },
    faq: [
      {
        question: "TEB ihtiyaç kredisi erteleme imkanı sunuyor mu?",
        answer: "Evet, TEB kampanya dönemlerine bağlı olarak 3 aya kadar ödemesiz dönemli ihtiyaç kredisi seçenekleri sunabilmektedir."
      },
      {
        question: "TEB kredi başvurusu nasıl yapılır?",
        answer: "TEB müşterileri internet şubesi veya CEPTETEB mobil uygulaması üzerinden; henüz müşteri olmayanlar ise dijital kanallar veya en yakın TEB şubesi üzerinden başvurularını yapabilirler."
      }
    ]
  },
  'turkiye-finans': {
    financialProduct: {
      name: "Türkiye Finans İhtiyaç Finansmanı",
      description: "Katılım bankacılığı prensiplerine uygun, avantajlı kâr payı oranları ve esnek ödeme planlı bireysel finansman çözümleri.",
      brand: {
        name: "Türkiye Finans",
        alternateName: "Türkiye Finans Katılım Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/turkiyefinans.webp"
      },
      offers: {
        description: "İslami finans prensiplerine uygun, hızlı sonuçlanan ihtiyaç finansmanı.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Finansmana Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=turkiye-finans"
        },
        {
          type: "ControlAction",
          name: "Kâr Payı Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=turkiye-finans"
        }
      ]
    },
    faq: [
      {
        question: "Türkiye Finans ihtiyaç finansmanı nedir?",
        answer: "Türkiye Finans ihtiyaç finansmanı, katılım bankacılığı ilkeleri doğrultusunda, müşterilerin mal veya hizmet alımları için bankanın sağladığı ödeme desteğidir."
      },
      {
        question: "Hızlı Onaylı Finansman başvurusu nasıl yapılır?",
        answer: "Türkiye Finans mobil şubesi, internet bankacılığı veya 'Hızlı Onay' servisleri üzerinden anında başvuru yaparak dakikalar içinde finansman sonucunuzu öğrenebilirsiniz."
      }
    ]
  },
  vakifbank: {
    financialProduct: {
      name: "VakıfBank İhtiyaç Kredisi",
      description: "Geleneksel bankacılık gücüyle, esnek ödeme planlı ve uygun maliyetli VakıfBank bireysel tüketici kredisi paketleri.",
      brand: {
        name: "VakıfBank",
        alternateName: "Türkiye Vakıflar Bankası T.A.O.",
        logo: "https://ihtiyackredisi.com/banks/vakifbank.webp"
      },
      offers: {
        description: "Kamu çalışanlarına, emeklilere ve özel sektör çalışanlarına özel faiz oranları.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "VakıfBank Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=vakifbank"
        },
        {
          type: "ControlAction",
          name: "VakıfBank Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=vakifbank"
        }
      ]
    },
    faq: [
      {
        question: "VakıfBank anında kredi başvurusu nasıl yapılır?",
        answer: "VakıfBank müşterileri, VakıfBank Mobil veya İnternet Bankacılığı üzerinden 7/24 anında kredi başvurusu yaparak onaylanan tutarı saniyeler içinde hesaplarına aktarabilirler."
      },
      {
        question: "VakıfBank ihtiyaç kredisi vadeleri ne kadar?",
        answer: "Yasal düzenlemeler çerçevesinde VakıfBank, ihtiyaç kredilerinde tutara bağlı olarak 12, 24 veya 36 aya kadar vade seçenekleri sunmaktadır."
      }
    ]
  },
  'vakif-katilim': {
    financialProduct: {
      name: "Vakıf Katılım İhtiyaç Finansmanı",
      description: "Vakıf kültürünün paylaşımcı ruhuyla sunulan, faizsiz bankacılık prensiplerine uygun bireysel ihtiyaç finansmanı çözümleri.",
      brand: {
        name: "Vakıf Katılım",
        alternateName: "Vakıf Katılım Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/vakifkatilim.webp"
      },
      offers: {
        description: "Avantajlı kâr paylaşım oranları ile taksitli finansman desteği.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Finansmana Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=vakif-katilim"
        },
        {
          type: "ControlAction",
          name: "Kâr Payı Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=vakif-katilim"
        }
      ]
    },
    faq: [
      {
        question: "Vakıf Katılım ihtiyaç finansmanı faizsiz midir?",
        answer: "Evet, Vakıf Katılım bir katılım bankasıdır ve tüm finansman ürünleri faizsiz bankacılık (katılım bankacılığı) prensiplerine uygun olarak kâr payı esasıyla sunulur."
      },
      {
        question: "Vakıf Katılım finansman başvurusu için ne gereklidir?",
        answer: "Kimlik belgesi, gelir belgesi ve finansmana konu olan mal/hizmetin faturası veya proforması ile en yakın Vakıf Katılım şubesinden veya dijital kanallardan başvuru yapılabilir."
      }
    ]
  },
  'yapi-kredi': {
    financialProduct: {
      name: "Yapı Kredi İhtiyaç Kredisi",
      description: "Kişiye özel faiz oranları ve 3 aya kadar öteleme seçenekleriyle Yapı Kredi bireysel tüketici kredisi çözümleri.",
      brand: {
        name: "Yapı Kredi",
        alternateName: "Yapı ve Kredi Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/yapikredi.webp"
      },
      offers: {
        description: "Yapı Kredi müşterilerine özel anında şubesiz kredi imkanı.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Yapı Kredi Krediye Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=yapi-kredi"
        },
        {
          type: "ControlAction",
          name: "Yapı Kredi Kredi Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=yapi-kredi"
        }
      ]
    },
    faq: [
      {
        question: "Yapı Kredi anında kredi başvurusu nasıl yapılır?",
        answer: "Yapı Kredi müşterileri, Yapı Kredi Mobil veya İnternet Şubesi üzerinden 'Hızlı Cepte Kredi' başvurusu yaparak belgelerle uğraşmadan anında kredi kullanabilirler."
      },
      {
        question: "Yapı Kredi ihtiyaç kredisi ödeme erteleme var mı?",
        answer: "Evet, Yapı Kredi kampanya dahilinde sunduğu ihtiyaç kredilerinde 3 aya kadar ilk taksit öteleme seçeneği sunabilmektedir."
      }
    ]
  },
  'ziraat-katilim': {
    financialProduct: {
      name: "Ziraat Katılım İhtiyaç Finansmanı",
      description: "Ziraat Katılım'ın faizsiz bankacılık ilkeleriyle sunduğu, eğitimden sağlığa tüm ihtiyaçlarınız için uygun kâr payı oranlı finansman çözümleri.",
      brand: {
        name: "Ziraat Katılım",
        alternateName: "Ziraat Katılım Bankası A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/ZiraatKatilim.webp"
      },
      offers: {
        description: "Katılım bankacılığı prensiplerine uygun, avantajlı kâr payı oranları.",
      },
      potentialActions: [
        {
          type: "ApplyAction",
          name: "Finansmana Başvur",
          target: "https://ihtiyackredisi.com/kredi-basvurusu?banka=ziraat-katilim"
        },
        {
          type: "ControlAction",
          name: "Kâr Payı Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?banka=ziraat-katilim"
        }
      ]
    },
    faq: [
      {
        question: "Ziraat Katılım ihtiyaç finansmanı nedir?",
        answer: "Ziraat Katılım ihtiyaç finansmanı, bireysel müşterilerin mal veya hizmet alımlarının banka tarafından peşin satın alınarak müşteriye kâr payı eklenip vadeli satılması işlemidir."
      },
      {
        question: "Ziraat Katılım kâr payı oranları neye göre belirlenir?",
        answer: "Kâr payı oranları piyasa koşullarına, finansman tutarına ve geri ödeme vadesine göre banka tarafından belirlenmektedir."
      }
    ]
  }
  // Diğer bankalar için de aynı şekilde eklenebilir
  // Örnek: emlak-katilim: { ... }, diger-bankalar: { ... }, vb.
};

