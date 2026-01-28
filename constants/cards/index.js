// Credit card data extracted from txt files in kartlar directory

const AKBANK_CARDS = [
  {
    id: 1,
    bankName: "Akbank",
    bankImage: "/banks/akbank.webp",
    cardImage: "/cards/axess.png",
    bankSlug: "akbank-axess-kredi-karti",
    reviewBankName: "Akbank",
    dominantColor: "#F04E23",
    priority: 1,
    metaTitle: "Akbank Axess Kredi Kartı",
    metaDescription: "Akbank Axess Kredi Kartı ile chip-para kazanın, taksitli alışveriş yapın.",
    shortDescription: "Chip-para kazanma ve taksitli alışveriş imkanı.",
    annualFee: "Ücretsiz",
    shoppingInstallmentFee: "4,25",
    features: [
      "Temassız ödeme",
      "Chip-para kazanma",
      "Taksitli alışveriş",
      "Otomatik fatura ödeme",
      "Yurt içi ve yurt dışı kullanım"
    ],
    rating: "4,5",
    reviewCount: "500",
    detail: "Axess kartı, chip-para kazanma ve taksitli alışveriş imkanı sunar.",
    title: "Akbank Axess Kredi Kartı",
    longDescription: "Axess kredi kartı, yapılan alışverişlerden chip-para kazanma imkanı sunar. Kazanılan chip-paralar ile anlaşmalı iş yerlerinde bedava alışveriş yapılabilir. Temassız özelliği sayesinde hızlı ve güvenli ödeme yapılabilir. Ayrıca, otomatik fatura ödeme talimatı verilebilir ve çeşitli kampanyalardan yararlanılabilir.",
    applyUrl: "https://www.akbank.com/kartlar/kredi-kartlari/axess"
  },
  {
    id: 2,
    bankName: "Akbank",
    bankImage: "/banks/akbank.webp",
    cardImage: "/cards/wings.png",
    bankSlug: "akbank-wings-kredi-karti",
    reviewBankName: "Akbank",
    dominantColor: "#0074BC",
    priority: 2,
    metaTitle: "Akbank Wings Kredi Kartı",
    metaDescription: "Akbank Wings Kredi Kartı ile Mil Puan kazanın, seyahat ve indirim avantajlarından yararlanın.",
    shortDescription: "Mil Puan kazanma ve seyahat indirimleri.",
    annualFee: "Ücretsiz",
    shoppingInstallmentFee: "4,25",
    features: [
      "Mil Puan kazanma",
      "Restoran ve otel indirimleri",
      "Seyahat avantajları",
      "Sağlıklı yaşam indirimleri",
      "Vale hizmeti"
    ],
    rating: "4,7",
    reviewCount: "450",
    detail: "Wings kartı, Mil Puan kazanma ve çeşitli indirimler sunar.",
    title: "Akbank Wings Kredi Kartı",
    longDescription: "Wings kredi kartı, yapılan harcamalardan Mil Puan kazanma imkanı sağlar. Kazanılan Mil Puanlar ile uçak bileti alınabilir veya alışverişlerde kullanılabilir. Restoran, otel, sağlık, spor, eczane ve petshop harcamalarında indirimler sunar. Ayrıca, vale hizmeti ve havalimanı lounge erişimi gibi ayrıcalıklar da sağlar.",
    applyUrl: "https://www.akbank.com/kartlar/kredi-kartlari/wings"
  }
]

const HALKBANK_CARDS = [
  {
    id: 1,
    bankName: "Türkiye Halk Bankası",
    bankImage: "/banks/halk.webp",
    cardImage: "/cards/paraf.png",
    bankSlug: "halkbankasi-paraf-kredi-karti",
    reviewBankName: "Türkiye Halk Bankası",
    dominantColor: "#0066a1",
    priority: 1,
    metaTitle: "Paraf Kredi Kartı - Banka ve Kredi Kartı Tek Kartta",
    metaDescription: "Paraf Kredi Kartı ile hem banka kartı hem kredi kartı avantajlarını tek kartta yaşayın. Temassız ödeme, ParafPara, taksitli nakit avans ve daha fazlası.",
    shortDescription: "Banka kartı ve kredi kartı özelliklerini bir arada sunan, temassız ödeme ve ParafPara kazanım imkanı olan kart.",
    annualFee: "200 TL",
    shoppingInstallmentFee: "4,25",
    features: [
      "Banka kartı ve kredi kartı bir arada",
      "Temassız ödeme özelliği",
      "ParafPara kazanma ve harcama",
      "GastroClub ile 15 ilde 400'den fazla restoranda indirim",
      "Taksitli nakit avans (200 TL - 20.000 TL arası, %5 faiz ile 3 aya kadar)"
    ],
    rating: "4,5",
    reviewCount: "789",
    detail: "Paraf kartı, Halkbank'ın hem banka kartı hem de kredi kartı özelliklerini tek fiziki kartta birleştiren yenilikçi ürünüdür. Ödeme sırasında tek şifre ile hangi kartla ödeme yapmak istediğinizi seçebilirsiniz.",
    title: "Paraf Kredi Kartı",
    longDescription: "Paraf, Halkbank'ın 8 yılı aşkın süredir sunduğu ve Türkiye'de 5 milyon kredi kartı, 19 milyon banka kartına ulaşan bir markadır. Yeni Paraf ile banka kartı ve kredi kartı özellikleri tek kartta birleştirilmiştir. Kartınızla yaptığınız harcamalardan ParafPara kazanır, biriken ParafPara'larınızı üye işyerlerinde harcayabilirsiniz.",
    applyUrl: "https://www.halkbank.com.tr/tr/bireysel/kartlar/kredi-kartlari/bireysel/paraf.html"
  },
  {
    id: 2,
    bankName: "Türkiye Halk Bankası",
    bankImage: "/banks/halk.webp",
    cardImage: "/cards/paraf-premium.png",
    bankSlug: "halkbankasi-paraf-premium-kredi-karti",
    reviewBankName: "Türkiye Halk Bankası",
    dominantColor: "#a8925f",
    priority: 2,
    metaTitle: "Paraf Premium Kredi Kartı - Ayrıcalıklı Yaşam Kartı",
    metaDescription: "Paraf Premium Kredi Kartı ile seyahat, restoran ve otel ayrıcalıklarından yararlanın. Yurt dışı alışverişlerde 5x ParafPara kazanın.",
    shortDescription: "Seyahat, restoran ve otel ayrıcalıkları sunan, yurt dışı alışverişlerde 5 kat ParafPara kazandıran premium kredi kartı.",
    annualFee: "400 TL",
    shoppingInstallmentFee: "4,25",
    features: [
      "Ankara Esenboğa, İzmir Adnan Menderes ve Bodrum Milas Havalimanları'nda ücretsiz lounge",
      "Doğum gününüzde seçili restoranlarda %50 indirim",
      "Yurt içi ve yurt dışı otel ve restoranlarda %5 indirim",
      "Yurt dışı alışverişlerde 5 kat ParafPara kazanma",
      "Seçili restoranlarda %20 indirim"
    ],
    rating: "4,7",
    reviewCount: "452",
    detail: "Paraf Premium, Halkbank'ın yüksek gelir grubuna ve sık seyahat eden müşterilerine sunduğu premium kredi kartıdır. Havalimanı lounge erişimi, restoran ve otel indirimleri gibi birçok ayrıcalık sunar.",
    title: "Paraf Premium Kredi Kartı",
    longDescription: "Paraf Premium kart, Halkbank'ın ayrıcalıklı yaşam tarzı sunmayı hedeflediği müşterileri için tasarlanmıştır. Kart sahipleri, yurt içi ve yurt dışı seyahatlerinde havalimanı lounge alanlarından ücretsiz yararlanabilir, restoran ve otel harcamalarında indirimler elde edebilir.",
    applyUrl: "https://www.halkbank.com.tr/tr/bireysel/kartlar/kredi-kartlari/ozel/paraf-premium.html"
  },
  {
    id: 3,
    bankName: "Türkiye Halk Bankası",
    bankImage: "/banks/halk.webp",
    cardImage: "/cards/paraf-troy.png",
    bankSlug: "halkbankasi-paraf-troy-kredi-karti",
    reviewBankName: "Türkiye Halk Bankası",
    dominantColor: "#8cc63f",
    priority: 3,
    metaTitle: "Paraf Troy Kredi Kartı - Milli Ödeme Sistemi",
    metaDescription: "Paraf Troy Kredi Kartı ile yerli ödeme sistemi avantajlarından yararlanın. Temassız ödeme ve ParafPara kazanım imkanı.",
    shortDescription: "Türkiye'nin milli ödeme sistemi Troy altyapısını kullanan, temassız ödeme ve ParafPara avantajları sunan kredi kartı.",
    annualFee: "150 TL",
    shoppingInstallmentFee: "4,25",
    features: [
      "Troy milli ödeme sistemi",
      "Temassız ödeme özelliği",
      "ParafPara kazanma ve harcama",
      "GastroClub indirimleri",
      "Taksitli nakit avans"
    ],
    rating: "4,3",
    reviewCount: "321",
    detail: "Paraf Troy, Halkbank'ın Türkiye'nin milli ödeme sistemi Troy altyapısını kullanan kredi kartıdır. Yurt içi kullanımda avantajlar sunar.",
    title: "Paraf Troy Kredi Kartı",
    longDescription: "Paraf Troy, Halkbank'ın yerli ödeme sistemi Troy altyapısıyla sunduğu kredi kartıdır. Kart, Türkiye'deki geniş işyeri ağında güvenle kullanılabilir. Temassız özelliği sayesinde hızlı ve pratik ödeme yapılabilir.",
    applyUrl: "https://www.halkbank.com.tr/tr/bireysel/kartlar/kredi-kartlari.html"
  },
  {
    id: 4,
    bankName: "Türkiye Halk Bankası",
    bankImage: "/banks/halk.webp",
    cardImage: "/cards/parafly.png",
    bankSlug: "halkbankasi-parafly-kredi-karti",
    reviewBankName: "Türkiye Halk Bankası",
    dominantColor: "#662d91",
    priority: 4,
    metaTitle: "Parafly Kredi Kartı - Seyahat Ayrıcalıkları",
    metaDescription: "Parafly Kredi Kartı ile yurt içi ve yurt dışı seyahatlerinizde avantajlar elde edin. Uçuşlarda mil kazanın ve daha fazlasını yapın.",
    shortDescription: "Sık seyahat edenler için tasarlanmış, mil kazanma, havalimanı lounge erişimi gibi seyahat avantajları sunan kredi kartı.",
    annualFee: "300 TL",
    shoppingInstallmentFee: "4,25",
    features: [
      "Uçuşlarla mil kazanma",
      "Havalimanı lounge erişimi",
      "Yurt dışı seyahat sigortası",
      "Otel ve araç kiralama indirimleri",
      "Temassız ödeme özelliği"
    ],
    rating: "4,6",
    reviewCount: "287",
    detail: "Parafly, Halkbank'ın sık seyahat eden müşterileri için tasarladığı, mil kazanma ve havalimanı lounge erişimi gibi avantajlar sunan seyahat odaklı kredi kartıdır.",
    title: "Parafly Kredi Kartı",
    longDescription: "Parafly, Halkbank'ın 'dünyayı keşfetmek bir ayrıcalıksa' sloganıyla sunduğu seyahat odaklı kredi kartıdır. Kart sahipleri, yaptıkları uçuşlar ve harcamalar karşılığında mil kazanırlar.",
    applyUrl: "https://www.halkbank.com.tr/tr/bireysel/kartlar/kredi-kartlari.html"
  },
  {
    id: 5,
    bankName: "Türkiye Halk Bankası",
    bankImage: "/banks/halk.webp",
    cardImage: "/cards/paraf-genc.png",
    bankSlug: "halkbankasi-paraf-genc-kredi-karti",
    reviewBankName: "Türkiye Halk Bankası",
    dominantColor: "#ff6600",
    priority: 5,
    metaTitle: "Paraf Genç Kredi Kartı - Gençlere Özel Avantajlar",
    metaDescription: "Paraf Genç Kredi Kartı ile gençlere özel kampanyalar, indirimler ve esnek ödeme seçeneklerinden yararlanın.",
    shortDescription: "Üniversite öğrencileri ve gençlere yönelik, düşük aidatlı, temassız ödeme ve gençlere özel kampanyalar sunan kredi kartı.",
    annualFee: "100 TL",
    shoppingInstallmentFee: "4,25",
    features: [
      "Üniversitelilere ve gençlere özel düşük aidat",
      "Temassız ödeme özelliği",
      "Kitap, kafe, giyim ve eğlence harcamalarında indirimler",
      "ParafPara kazanma",
      "Esnek ödeme seçenekleri ve taksit imkanı"
    ],
    rating: "4,2",
    reviewCount: "413",
    detail: "Paraf Genç, Halkbank'ın üniversite öğrencileri ve genç müşterileri için özel olarak tasarladığı, gençlere yönelik kampanya ve indirimler sunan kredi kartıdır.",
    title: "Paraf Genç Kredi Kartı",
    longDescription: "Paraf Genç kredi kartı, Halkbank'ın genç müşteri segmentinin ihtiyaç ve beklentilerine göre şekillendirilmiştir. Kart, özellikle üniversite öğrencilerinin kitap, kafe, giyim, teknoloji ve eğlence harcamalarında indirimler ve kampanyalar sunar.",
    applyUrl: "https://www.halkbank.com.tr/tr/bireysel/kartlar/kredi-kartlari.html"
  }
]

const ISBANK_CARDS = [
  {
    id: 1,
    bankName: "Türkiye İş Bankası",
    bankImage: "/banks/is.webp",
    cardImage: "/cards/maximum-kredi-karti.png",
    bankSlug: "is-bankasi-maximum-kredi-karti",
    reviewBankName: "Türkiye İş Bankası",
    dominantColor: "#013682",
    priority: 1,
    metaTitle: "Maximum Kredi Kartı - Türkiye İş Bankası",
    metaDescription: "Maximum Kredi Kartı ile alışverişlerinizden MaxiPuan kazanın, taksitli alışveriş ve düşük faiz avantajlarından yararlanın.",
    shortDescription: "MaxiPuan kazanma ve geniş taksit seçenekleri sunan kredi kartı.",
    annualFee: "260 TL",
    shoppingInstallmentFee: "4,25",
    features: [
      "MaxiPuan kazanma ve kullanma",
      "Chip&PIN güvenliği",
      "TR Karekod ile temassız ödeme",
      "Yurtiçi ve yurtdışı alışveriş avantajları",
      "Kayıp/çalıntı durumunda hemen bloke"
    ],
    rating: "4,6",
    reviewCount: "534",
    detail: "Maximum Kredi Kartı, geniş taksit seçenekleri ve MaxiPuan avantajları sunar.",
    title: "Maximum Kredi Kartı",
    longDescription: "Maximum Kredi Kartı, Türkiye İş Bankası'nın sunduğu, alışverişlerinizden MaxiPuan kazanabileceğiniz ve bu puanları Maximum üye işyerlerinde hemen kullanabileceğiniz bir kredi kartıdır. Chip&PIN güvenliği ile kartınızı güvenle kullanabilir, TR Karekod ile temassız ödeme yapabilirsiniz.",
    applyUrl: "https://www.isbank.com.tr/kredi-karti"
  },
  {
    id: 2,
    bankName: "Türkiye İş Bankası",
    bankImage: "/banks/is.webp",
    cardImage: "/cards/maximum-miles-kredi-karti.webp",
    bankSlug: "is-bankasi-maximum-miles-kredi-karti",
    reviewBankName: "Türkiye İş Bankası",
    dominantColor: "#013682",
    priority: 2,
    metaTitle: "Maximum Miles Kredi Kartı - Türkiye İş Bankası",
    metaDescription: "Maximum Miles Kredi Kartı ile uçuş milleri kazanın, seyahatlerinizde avantajlı olun.",
    shortDescription: "Seyahat severler için mil kazandıran kredi kartı.",
    annualFee: "500 TL",
    shoppingInstallmentFee: "4,25",
    features: [
      "Uçuş milleri kazanma",
      "Yurtiçi ve yurtdışı seyahat avantajları",
      "Chip&PIN güvenliği",
      "TR Karekod ile temassız ödeme",
      "Kayıp/çalıntı durumunda hemen bloke"
    ],
    rating: "4,4",
    reviewCount: "289",
    detail: "Maximum Miles Kredi Kartı, seyahatlerinizde mil kazanmanızı sağlar.",
    title: "Maximum Miles Kredi Kartı",
    longDescription: "Maximum Miles Kredi Kartı, Türkiye İş Bankası'nın seyahat severler için sunduğu, harcamalarınız karşılığında uçuş milleri kazanabileceğiniz bir kredi kartıdır. Chip&PIN güvenliği ile kartınızı güvenle kullanabilir, TR Karekod ile temassız ödeme yapabilirsiniz.",
    applyUrl: "https://www.isbank.com.tr/kredi-karti"
  },
  {
    id: 3,
    bankName: "Türkiye İş Bankası",
    bankImage: "/banks/is.webp",
    cardImage: "/cards/maximum-genc-kredi-karti.png",
    bankSlug: "is-bankasi-maximum-genc-kredi-karti",
    reviewBankName: "Türkiye İş Bankası",
    dominantColor: "#013682",
    priority: 3,
    metaTitle: "Maximum Genç Kredi Kartı - Türkiye İş Bankası",
    metaDescription: "Maximum Genç Kredi Kartı ile 18-25 yaş arası gençlere özel avantajlar ve düşük faizli nakit avans.",
    shortDescription: "18-25 yaş arası gençlere özel kredi kartı.",
    annualFee: "130 TL",
    shoppingInstallmentFee: "4,25",
    features: [
      "18-25 yaş arası gençlere özel",
      "Düşük faizli nakit avans",
      "MaxiPuan kazanma",
      "Chip&PIN güvenliği",
      "TR Karekod ile temassız ödeme"
    ],
    rating: "4,2",
    reviewCount: "187",
    detail: "Maximum Genç Kredi Kartı, gençlere özel avantajlar sunar.",
    title: "Maximum Genç Kredi Kartı",
    longDescription: "Maximum Genç Kredi Kartı, Türkiye İş Bankası'nın 18-25 yaş arası gençlere sunduğu, düşük faizli nakit avans ve MaxiPuan kazanma imkanı sağlayan bir kredi kartıdır. Chip&PIN güvenliği ile kartınızı güvenle kullanabilir, TR Karekod ile temassız ödeme yapabilirsiniz.",
    applyUrl: "https://www.isbank.com.tr/kredi-karti"
  }
]

const VAKIFBANK_CARDS = [
  {
    id: 1,
    bankName: "VakıfBank",
    bankImage: "/banks/vakif.webp",
    cardImage: "/cards/vakifbank-world.png",
    bankSlug: "vakifbank-kredi-karti",
    reviewBankName: "VakıfBank",
    dominantColor: "#0066a1",
    priority: 1,
    metaTitle: "VakıfBank World Kredi Kartı",
    metaDescription: "VakıfBank World Kredi Kartı avantajları, başvuru ve kampanyaları.",
    shortDescription: "World özellikli, bol puanlı kredi kartı.",
    annualFee: "106 TL",
    shoppingInstallmentFee: "4,25",
    features: [
      "World Puan Programı",
      "Seyahat sigortası",
      "Öncelikli bilet alma ve indirimler",
      "Temassız ödeme özelliği",
      "Yurt içi ve yurt dışı kullanım"
    ],
    rating: "4,2",
    reviewCount: "289",
    detail: "VakıfBank World Kart, yurtiçi ve yurtdışı alışverişlerinizde size birçok avantaj sunar.",
    title: "VakıfBank World Kredi Kartı",
    longDescription: "VakıfBank World Kredi Kartı, geniş puan kampanyaları ve dünya çapında kabul gören bir karttır. Kartınızı VakıfBank Mobil uygulaması üzerinden kolayca yönetebilir, ek kart başvurusunda bulunabilirsiniz. Kart aidatı yıllık 106 TL'dir ve genellikle geri iade edilebilmektedir.",
    applyUrl: "https://www.vakifbank.com.tr/tr-tr/bireysel-bankacilik/kredi-kartlari/Pages/world-kart.aspx"
  }
]

// Combine all cards
const ALL_CARDS = [
  ...AKBANK_CARDS,
  ...HALKBANK_CARDS,
  ...ISBANK_CARDS,
  ...VAKIFBANK_CARDS
]

// Transform card data to match the expected format for the component
function transformCardData(card) {
  return {
    bankImage: card.bankImage,
    bankName: card.title,
    cardImage: card.cardImage,
    annualFee: card.annualFee,
    shoppingInstallmentFee: card.shoppingInstallmentFee,
    features: card.features,
    rating: card.rating,
    reviewCount: card.reviewCount,
    reviewBankName: card.reviewBankName,
    buttonColor: determineButtonColor(card.bankName),
    bankSlug: card.bankSlug,
    applyUrl: card.applyUrl,
    shortDescription: card.shortDescription,
    longDescription: card.longDescription,
    detail: card.detail,
    dominantColor: card.dominantColor
  }
}

// Determine button color based on bank name
function determineButtonColor(bankName) {
  if (!bankName) return 'primary'
  
  const name = bankName.toLowerCase()
  if (name.includes('garanti')) return 'primary'
  if (name.includes('iş') || name.includes('is')) return 'primary'
  if (name.includes('akbank')) return 'primary'
  if (name.includes('qnb')) return 'purple'
  if (name.includes('ing')) return 'orange'
  if (name.includes('ziraat')) return 'green'
  if (name.includes('halk')) return 'primary'
  if (name.includes('vakıf')) return 'primary'
  
  return 'primary'
}

// Get all unique bank names for filtering
function getBankNames() {
  const bankNames = new Set()
  ALL_CARDS.forEach(card => {
    if (card.reviewBankName) {
      bankNames.add(card.reviewBankName)
    }
  })
  return Array.from(bankNames).sort()
}

// Get all unique card types for filtering
function getCardTypes() {
  const cardTypes = new Set()
  ALL_CARDS.forEach(card => {
    const cardName = card.title?.toLowerCase() || ''
    if (cardName.includes('bonus')) cardTypes.add('Bonus')
    if (cardName.includes('world')) cardTypes.add('World')
    if (cardName.includes('maximum')) cardTypes.add('Maximum')
    if (cardName.includes('axess')) cardTypes.add('Axess')
    if (cardName.includes('bankkart')) cardTypes.add('Bankkart')
    if (cardName.includes('paraf')) cardTypes.add('Paraf')
    if (cardName.includes('wings')) cardTypes.add('Wings')
    if (cardName.includes('miles')) cardTypes.add('Miles')
    if (cardName.includes('troy')) cardTypes.add('Troy')
    if (cardName.includes('parafly')) cardTypes.add('Parafly')
  })
  return Array.from(cardTypes).sort()
}

// Get unique annual fee ranges for filtering
function getAnnualFeeRanges() {
  return ['Tüm Aidatlar', 'Ücretsiz', '1 TL - 250 TL', '251 TL ve üzeri'];
}

// Get transformed cards for the component
function getAllCards() {
  return ALL_CARDS.map(transformCardData)
}

export { 
  getAllCards, 
  getBankNames, 
  getCardTypes, 
  getAnnualFeeRanges,
  AKBANK_CARDS,
  HALKBANK_CARDS,
  ISBANK_CARDS,
  VAKIFBANK_CARDS,
  ALL_CARDS
}
