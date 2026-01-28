// Savings Finance institution-specific structured data (JSON-LD) for SEO
// Each institution has its own structured data configuration

export const savingsFinanceStructuredData = {
  'emlak-katilim': {
    financialProduct: {
      name: "Emlak Katılım Birlikte Tasarruf Finansmanı",
      description: "Türkiye Emlak Katılım Bankası tarafından sunulan, faizsiz prensiplere uygun, banka güvenceli konut ve araç edindirme tasarruf sistemidir.",
      brand: {
        name: "Emlak Katılım",
        legalName: "EMLAK KATILIM TASARRUF FİNANSMAN A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/emlak-katilim.webp"
      },
      offers: {
        description: "Kamu bankası güvencesiyle faizsiz tasarruf planları ve esnek ödeme seçenekleri.",
      },
      potentialActions: [
        {
          type: "ControlAction",
          name: "Emlak Katılım Finansman Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?kurum=emlak-katilim"
        }
      ]
    },
    faq: [
      {
        question: "Emlak Katılım Birlikte Tasarruf nedir?",
        answer: "Emlak Katılım'ın sunduğu, faizsiz bir şekilde birikim yaparak veya gruplara dahil olarak konut ve araç sahibi olmayı sağlayan banka güvenceli tasarruf finansman modelidir."
      },
      {
        question: "Banka güvencesinin avantajı nedir?",
        answer: "Tasarruf finansmanının bir kamu katılım bankası çatısı altında sunulması, ödemelerin ve teslimat süreçlerinin doğrudan bankacılık regülasyonları ve güveniyle yönetilmesini sağlar."
      }
    ]
  },
  sinpas: {
    financialProduct: {
      name: "Sinpaş Yapı Tasarruf Sandığı Modelleri",
      description: "Sinpaş güvencesiyle faizsiz, Türkiye genelinde geçerli konut ve araç edinme sistemidir. Tasarrufa dayalı finansman yöntemleri sunar.",
      brand: {
        name: "Sinpaş",
        legalName: "SİNPAŞ TASARRUF FİNANSMAN A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/sinpas.webp",
        brandType: "Organization" // BankOrCreditUnion yerine Organization
      },
      offers: {
        description: "BDDK lisanslı, faizsiz ve esnek ödemeli yapı tasarruf sandığı planları.",
      },
      potentialActions: [
        {
          type: "ControlAction",
          name: "Sinpaş Sandık Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?kurum=sinpas"
        }
      ]
    },
    faq: [
      {
        question: "Sinpaş Yapı Tasarruf Sandığı nedir?",
        answer: "Sinpaş Yapı Tasarruf Sandığı, faizsiz ve bankasız bir şekilde tasarruf yaparak konut veya araç sahibi olmayı sağlayan bir finansman modelidir."
      }
    ]
  },
  katilimevim: {
    financialProduct: {
      name: "Katılımevim Tasarruf Finansman Modelleri",
      description: "Faizsiz, peşinatsız ve kefilsiz seçeneklerle ev, araba veya iş yeri sahibi olmayı sağlayan tasarruf dayalı finansman sistemi.",
      brand: {
        name: "Katılımevim",
        legalName: "KATILIMEVİM TASARRUF FİNANSMAN A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/katilimevim.webp",
        brandType: "Organization"
      },
      offers: {
        description: "BDDK onaylı, faizsiz ve düşük organizasyon ücretli finansman seçenekleri.",
      },
      potentialActions: [
        {
          type: "ControlAction",
          name: "Katılımevim Ödeme Planı Oluştur",
          target: "https://ihtiyackredisi.com/hesaplama?kurum=katilimevim"
        }
      ]
    },
    faq: [
      {
        question: "Katılımevim sistemi nasıl işler?",
        answer: "Katılımevim, dayanışma ekonomisine dayalı, kişilerin küçük tasarruflarla faizsiz bir şekilde ev veya araç almasını sağlayan çekilişli veya planlı tasarruf modelleriyle işler."
      },
      {
        question: "Katılımevim organizasyon ücreti nedir?",
        answer: "Organizasyon ücreti, sistemin işletilmesi ve hizmetlerin sunulması karşılığında alınan, finansman tutarına göre belirlenen tek seferlik hizmet bedelidir."
      }
    ]
  },
  'fuzul-ev': {
    financialProduct: {
      name: "Fuzul Ev Tasarruf Finansman Modelleri",
      description: "Fuzul Ev'in çekilişli, sabit veya esnek ödemeli gruplarıyla faizsiz ve bankasız konut/araç edindirme sistemi.",
      brand: {
        name: "Fuzul Ev",
        legalName: "FUZUL TASARRUF FİNANSMAN A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/fuzul-ev.webp",
        brandType: "Organization"
      },
      offers: {
        description: "BDDK denetiminde, faizsiz elbirliği sistemi ile kişiye özel ödeme planları.",
      },
      potentialActions: [
        {
          type: "ControlAction",
          name: "Fuzul Ev Ödeme Planı Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?kurum=fuzul-ev"
        }
      ]
    },
    faq: [
      {
        question: "Fuzul Ev sistemi güvenilir mi?",
        answer: "Fuzul Ev, BDDK (Bankacılık Düzenleme ve Denetleme Kurumu) tarafından lisanslanmış ve denetlenen resmi bir tasarruf finansman şirketidir."
      },
      {
        question: "Çekilişli sistemde konut teslimatı ne zaman yapılır?",
        answer: "Çekilişli sistemde konut veya araç teslimatı, noter huzurunda yapılan sıra tespit çekilişlerine göre belirlenen tarihte gerçekleştirilir."
      }
    ]
  },
  eminevim: {
    financialProduct: {
      name: "Eminevim Elbirliği Sistemi",
      description: "Faizsiz, peşinatsız veya taksitli seçeneklerle ev, araç ve iş yeri sahibi olmayı sağlayan tasarruf finansman modeli.",
      brand: {
        name: "Eminevim",
        legalName: "Emin Evim Tasarruf Finansman S.A.",
        logo: "https://ihtiyackredisi.com/banks/eminevim.webp",
        brandType: "Organization"
      },
      offers: {
        description: "BDDK lisanslı tasarruf finansman yöntemleri ile faizsiz ödeme planları.",
      },
      potentialActions: [
        {
          type: "ControlAction",
          name: "Eminevim Finansman Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?kurum=eminevim"
        }
      ]
    },
    faq: [
      {
        question: "Eminevim sistemi nasıl çalışır?",
        answer: "Eminevim, kişilerin bir araya gelerek oluşturduğu tasarruf grupları ile faizsiz bir şekilde ev veya araç sahibi olmalarını sağlayan 'Elbirliği Sistemi' ile çalışır."
      },
      {
        question: "Eminevim BDDK lisanslı mı?",
        answer: "Evet, Eminevim 6361 sayılı kanun kapsamında BDDK (Bankacılık Düzenleme ve Denetleme Kurumu) tarafından denetlenen lisanslı bir tasarruf finansman şirketidir."
      }
    ]
  },
  birevim: {
    financialProduct: {
      name: "Birevim Birlikte Tasarruf Finansmanı",
      description: "Bireysel veya grup tasarrufları ile faizsiz, kâr paysız ve ek maliyetsiz konut ve araç sahibi olma imkanı sunan finansman modeli.",
      brand: {
        name: "Birevim",
        legalName: "Birevim Tasarruf Finansman A.Ş.",
        logo: "https://ihtiyackredisi.com/banks/birevim.webp",
        brandType: "Organization"
      },
      offers: {
        description: "BDDK onaylı, faizsiz ve peşinatsız ödeme seçenekli tasarruf planları.",
      },
      potentialActions: [
        {
          type: "ControlAction",
          name: "Birevim Planı Hesapla",
          target: "https://ihtiyackredisi.com/hesaplama?kurum=birevim"
        }
      ]
    },
    faq: [
      {
        question: "Birevim birlikte tasarruf nedir?",
        answer: "Birevim tarafından geliştirilen, tasarruf sahiplerinin bir araya gelerek dayanışma içinde ev veya araç sahibi olmalarını sağlayan faizsiz finansman modelidir."
      },
      {
        question: "Birevim'de peşinat zorunlu mu?",
        answer: "Hayır, Birevim sisteminde peşinatlı veya peşinatsız seçenekler mevcuttur. Müşteriler bütçelerine göre ödeme planlarını kendileri belirleyebilirler."
      }
    ]
  }
  // Diğer tasarruf finansman şirketleri için de aynı şekilde eklenebilir
  // Örnek: diger-sirketler: { ... }, vb.
};

