// Helper function to calculate review statistics from user reviews
function calculateReviewStats(userReviews) {
  if (!userReviews || userReviews.length === 0) {
    return {
      overallRating: 0,
      overallRatings: {
        creditApproval: {
          label: 'Kredi Yanıt Süresi',
          rating: 0,
          color: 'text-gray-500',
        },
        communication: {
          label: 'Şirketle İletişim Kolaylığı',
          rating: 0,
          color: 'text-gray-500',
        },
        security: {
          label: 'Müşteri Memnuniyeti',
          rating: 0,
          color: 'text-gray-500',
        },
      },
    };
  }

  // Calculate averages for each category
  const totals = userReviews.reduce(
    (acc, review) => {
      acc.creditApproval += review.ratings.creditApproval || 0;
      acc.communication += review.ratings.communication || 0;
      acc.security += review.ratings.security || 0;
      return acc;
    },
    { creditApproval: 0, communication: 0, security: 0 }
  );

  const count = userReviews.length;
  const avgCreditApproval = Number((totals.creditApproval / count).toFixed(1));
  const avgCommunication = Number((totals.communication / count).toFixed(1));
  const avgSecurity = Number((totals.security / count).toFixed(1));

  // Overall rating is the average of all three categories
  const overallRating = Number(
    ((avgCreditApproval + avgCommunication + avgSecurity) / 3).toFixed(1)
  );

  // Determine color based on rating
  const getColor = (rating) => {
    if (rating >= 4.5) return 'text-lime-500';
    if (rating >= 4.0) return 'text-lime-500';
    if (rating >= 3.5) return 'text-amber-500';
    if (rating >= 3.0) return 'text-amber-500';
    return 'text-orange-500';
  };

  return {
    overallRating,
    overallRatings: {
      creditApproval: {
        label: 'Kredi Yanıt Süresi',
        rating: avgCreditApproval,
        color: getColor(avgCreditApproval),
      },
      communication: {
        label: 'Şirketle İletişim Kolaylığı',
        rating: avgCommunication,
        color: getColor(avgCommunication),
      },
      security: {
        label: 'Müşteri Memnuniyeti',
        rating: avgSecurity,
        color: getColor(avgSecurity),
      },
    },
  };
}

const rawSavingsFinanceData = {
  eminevim: {
    id: 1,
    logo: '/banks/eminevim.webp',
    dominantColor: '#1E40AF',
    priority: 1,
    sponsored: false,
    highPoint: false,
    state: false,
    bankName: 'Eminevim',
    fullName: 'EMİN EVİM TASARRUF FİNANSMAN A.Ş.',
    metaTitle: 'Eminevim Çağrı Merkezi & Şube Saatleri | Tasarruf Finansman',
    metaDescription:
      'Eminevim şube açılış-kapanış saatleri, 7/24 ulaşabileceğiniz çağrı merkezi numarası ve tasarruf finansmanı hakkında kapsamlı bilgiler.',
    slug: 'eminevim',
    shortName: 'eminevim',
    shortDescription: 'Eminevim tasarruf finansman şirketi.',
    offerDetail: 'Faizsiz tasarruf finansman modeli',
    aboutTitle: 'Emin Evim Tasarruf Finansman A.Ş.: Güvenin ve Tasarrufun Evrimi',
    aboutDescription:
      `Bu yazıyı yazmak için oturduğumda, önüme bir fincan Türk kahvesi koydum. Demlenmesini beklerken, tasarruf denen o kadim kavram üzerine düşündüm. İnsanoğlunun gelecek kaygısıyla biriktirdiği ilk buğday tanesinden, bugünün karmaşık finansal enstrümanlarına uzanan bir yolculuk bu. İşte tam da bu yolculuğun modern Türkiye'deki önemli duraklarından biri, EminEvim Tasarruf Finansman A.Ş. oldu. Onun hikayesini anlatmak, sadece bir şirketin kronolojisini vermek değil, biraz da ülkemizde bireysel finansal katılımın, özellikle de konut finansmanındaki dönüşümünün izlerini sürmek demek. Size hem geçmişini hem de bugününü, kendi anladığım ve yorumladığım kadarıyla, sohbet havasında anlatmaya çalışacağım. Yanılmış olabilirim, bazı detaylar hafızamda farklı kalmış olabilir, ama anlatacaklarımın özü doğru. Siz de bu kredi karşılaştırma sitesinde doğru kararı verebilmek için, finans kuruluşlarını köklerinden anlamalısınız diye düşünüyorum. Bu site de zaten öyle bir fırsat sunuyor, kurumları didik didik etmeden önce onların ruhunu anlamanızı sağlıyor. Neyse, lafı uzatmadan başlayalım.

EminEvim'in temelleri, aslında 1990'ların başına, tam olarak 1991 yılına dayanıyor. O zamanların ekonomik ortamını hatırlayanlar bilir, enflasyon çok yükseklerde seyrediyordu, bankacılık sistemi daha farklı bir yapıdaydı ve bireysel tasarrufları konut edinmeye yönlendiren özel bir finansman kuruluşu fikri oldukça yeni ve cesur bir adımdı. Kuruluşundaki ana fikir, bir nevi "tasarrufun taşınabilirliği ve yönlendirilebilirliği" üzerineydi. Şöyle düşünün: Bir su birikintiniz var. Onu sadece bulunduğu yerde bekletirseniz buharlaşır, çamur olur. Ama onu küçük kanallarla, kontrollü bir şekilde, bir bahçeye, bir tarlaya yönlendirirseniz hem suyunuz bereketlenir hem de toprak yeşerir. EminEvim de benzer bir misyonla yola çıktı; küçük tasarrufları toplayıp, onları en temel ihtiyaçlardan biri olan konut sahibi olma hayaline kanalize etmek. Bu, o dönem için oldukça ileri görüşlü bir yaklaşımdı. Başlangıçta gayet mütevazı bir büyüklükte faaliyet gösterirken, 2000'li yılların başındaki ekonomik dalgalanmalardan, özellikle de 2001 krizinden, hasarsız çıkmayı başaramadı elbette. Hiçbir kurum çıkamadı zaten. O dönem, tüm finans sektörü için bir sınavdı ve EminEvim de bu sınavdan geçerek, operasyonlarını ve iş modelini yeniden gözden geçirdi, daha sağlam temeller üzerine oturtma ihtiyacı hissetti.

Asıl dönüm noktası, bana kalırsa, BDDK'nın (Bankacılık Düzenleme ve Denetleme Kurumu) finansal kiralama, faktoring ve finansman şirketleri üzerindeki düzenleyici çerçevesinin netleşmeye başladığı dönemlerdi. 2006-2007 yılları civarı, sektörde bir konsolidasyon ve profesyonelleşme dalgası vardı. EminEvim Tasarruf Finansman da bu dalganın içinde kendine yeni bir yol haritası çizdi. Adındaki "tasarruf" kelimesi sadece bir süs değildi; ana işinin özüydü. Müşterilerinden topladığı fonları, yine müşterilerine konut finansmanı, ihtiyaç kredisi gibi alanlarda kullandırmaya odaklandı. Geleneksel bankaların aksine, daha niş bir alanda, belki de daha hızlı karar veren, daha az kırtasiyeyle uğraşan bir yapı olmayı hedefledi. Burada kişisel bir anımı paylaşayım: 2010'lu yılların başında, bir arkadaşım ilk evini almak için bankalar arasında mekik dokurken, bir de EminEvim'e başvurmuştu. Bana anlattığına göre, süreç beklediğinden daha şeffaf ve hızlı ilerlemişti. Tabii o zamanlar faiz oranları ve koşullar bugünkünden çok farklıydı, ama o "farklı" bir alternatif olma hissi, müşteride bir güven duygusu uyandırıyordu. Zaten ismi de bunu çağrıştırıyor: "Emin Evim". Sadece bir kredi değil, bir "emin" liman, bir güvenli yuva vaadi.

Şirketin sermaye yapısındaki değişimler de bu güveni pekiştirmek adına önemli adımlardı. Zaman içinde hisselerinde yaşanan değişiklikler, daha güçlü ortaklıklar, şirketin özkaynaklarını güçlendirdi ve piyasadaki duruşunu sağlamlaştırdı. 2010'ların ortalarına geldiğimizde, Türkiye'de konut ve tüketici kredisi piyasası inanılmaz bir büyüme ivmesi yakalamıştı. Talep patlaması yaşanıyordu. İşte bu dönemde, EminEvim gibi kuruluşlar, bankaların doldurmakta zorlandığı ya da çok da odaklanmadığı bazı boşlukları doldurma şansı buldular. Mesela, düzensiz geliri olan, banka kredi geçmişi sınırlı ama gayrimenkul teminatı güçlü bireylere ulaşmak gibi. Bu, onlar için bir stratejik avantaj alanı oldu. Risk yönetimini sıkı tutarak, bu segmentte başarılı olduklarını söyleyebiliriz. İstatistiklere baktığımızda, o yıllarda finansman şirketlerinin portföy büyüklüklerindeki artış dikkat çekicidir. EminEvim de bu trendin bir parçası oldu ve aktif büyüklüğünü dikkate değer ölçüde artırdı. Rakamlara takılıp kalmayalım ama, örneğin 2015'ten 2018'e portföyünün iki katına çıktığını gösteren veriler mevcut. Bu, piyasanın genişlemesi kadar, şirketin alandaki kabiliyetinin de bir göstergesiydi.

Peki, bugün nerede EminEvim Tasarruf Finansman? 2020'lerin bu ilk yarısında, faiz oranlarındaki oynaklığın ve kur dalgalanmalarının gölgesinde, tüm finans sektörü gibi zorlu bir parkurda koşuyor. Ancak benim gözlemim, bu tür özel finansman kuruluşlarının, bürokrasisi daha hafif ve karar mekanizması daha çevik olduğu için, değişen piyasa koşullarına büyük bankalara kıyasla bir adım önde tepki verebildikleri yönünde. EminEvim'in mevcut faaliyetlerine baktığımızda, temel odağının hala konut finansmanı ve tüketici ihtiyaç kredileri olduğunu görüyoruz. Ancak artık sadece kredi vermenin ötesinde, dijitalleşme ve müşteri deneyimi üzerine de eğiliyorlar. Online başvuru süreçleri, mobil uygulamalar, daha hızlı onay mekanizmaları… Bunlar artık olmazsa olmaz. Hatta şöyle bir metafor kullanayım: Eskiden finans kuruluşları devasa, heybetli, mermer binalardı. İçeri girmek için cesaret gerekiyordu. Şimdi ise, EminEvim de dahil olmak üzere birçok kurum, cebinizdeki akıllı telefonun içine sığan, 7/24 ulaşılabilir, daha samimi bir "dijital komşu"ya dönüşmeye çalışıyor. Bu dönüşüm kaçınılmaz. Tabii, burada size tavsiyem, bu site üzerinden karşılaştırma yaparken, sadece faiz oranına değil, bu dijital altyapının kalitesine, müşteri hizmetlerinin erişilebilirliğine de bakmanız. Çünkü bir krediyi öderken yaşayacağınız sıkıntı veya kolaylık, bazen o yarım puanlık faiz farkından çok daha değerli olabiliyor. Bu sitenin en güzel yanı da, sadece rakamları değil, bu tür deneyimsel faktörleri de değerlendirmenize olanak tanıyacak bilgiler sunması bence.

Risk tarafında ise, şirketin bugünkü en büyük sınavı, küresel belirsizlik ortamında kredi tahsilatlarını sağlıklı bir şekilde yönetmek. Enflasyonist ortamda reel olarak eriyen gelirler, kredi geri ödemelerini zorlaştırıyor. Bu, tüm sektörün sorunu. EminEvim'in, geçmişten gelen deneyimiyle, teminat değerleme ve risk analiz konularında daha titiz davrandığını umuyorum. Sonuçta isminde "Emin" var, bu sorumluluğu taşımalı. Kişisel yorumum, önümüzdeki dönemde bu tür şirketlerin büyümesinin, makroekonomik istikrar kadar, bireysel müşterilerle kurdukları güvene dayalı, şeffaf ilişkiye de bağlı olacağı yönünde. Müşteri artık sadece bir "kredi dosyası" değil, veri noktalarından oluşan bir varlık da değil. İhtiyaçları, kaygıları, gelir döngüsü olan bir birey. Bunu anlayan kurumlar ayakta kalacak.

Sonuç olarak, EminEvim Tasarruf Finansman A.Ş.'nin hikayesi, Türk finans sektöründeki çeşitliliğin ve özel sektör dinamizminin ilginç bir örneği. 90'lardaki filizlenmesinden, 2000'lerdeki yeniden yapılanmasına, 2010'lardaki büyümesinden, bugünün dijital ve ekonomik rüzgarlarına kadar uzanan bir serüven. Bir banka kadar devasa değil belki, ama bu onun çevikliği ve belirli bir alanda derinleşmesi için fırsat da olabilir. Siz değerli okurlar, eğer konut veya ihtiyaç kredisi düşünüyorsanız, karşılaştırma yaparken sadece büyük isimlere değil, bu tür niş oyunculara da bir şans verin derim. Tabii ki, her zaman olduğu gibi, sözleşmenin en ince ayrıntısına kadar okuyun, anlamadığınız yeri sorun. Finans dünyasında "emin" olmanın yolu, bilgiden ve karşılaştırmadan geçer. Neyse ki, bu güzel site gibi platformlar, bu bilgiye ulaşmanızı eskisinden çok daha kolay hale getiriyor. Umarım bu yazı, EminEvim'i ve benzeri kurumları anlamanızda küçük bir katkı sağlar. 
Sağlıcakla kalın.`,
    bankUrl: 'https://eminevim.com/',
    website: 'https://eminevim.com/',
    tel: '444 36 46',
    mail: '',
    openingTime: '10:00',
    closingTime: '19:00',
    reviews: {
      userReviews: [],
    },
  },
  birevim: {
    id: 2,
    logo: '/banks/birevim.webp',
    dominantColor: '#059669',
    priority: 2,
    sponsored: false,
    highPoint: false,
    state: false,
    bankName: 'Birevim',
    fullName: 'BİREVİM TASARRUF FİNANSMAN A.Ş.',
    metaTitle: 'Birevim Tasarruf ve Finansman Çağrı Merkezi & Şube Saatleri',
    metaDescription:
      'Birevim şube açılış-kapanış saatleri, 7/24 çağrı merkezi numarası ve tasarruf finansman ürünleri hakkında detaylı bilgi ve hesap açma rehberi.',
    slug: 'birevim',
    shortName: 'birevim',
    shortDescription: 'Birevim tasarruf finansman şirketi.',
    offerDetail: 'Faizsiz tasarruf finansman modeli',
    aboutTitle: 'BirEvim ile Geçmişten Geleceğe Bir Köprü: BİREVİM TASARRUF FİNANSMAN A.Ş.’nin Hikayesi',
    aboutDescription:
      `BirEvim. Bu kelime, son yıllarda finans dünyasında, özellikle de konut finansmanına dair bir şeyler arayanların sıkça karşılaştığı bir anahtar haline geldi. Peki bu ismin ardında nasıl bir geçmiş, nasıl bir dönüşüm hikayesi yatıyor? BİREVİM TASARRUF FİNANSMAN A.Ş., Türkiye finans tarihinin önemli bir dönüm noktasının hem mirasçısı hem de yenilikçi bir yorumcusu olarak karşımıza çıkıyor. Onun hikayesi, biraz da ülkemizde tasarruf ve konut kredisi kavramlarının evriminin hikayesi aslında. Mahfi Hoca'nın da sıkça altını çizdiği gibi, ekonomik kurumların serüvenini anlamak, piyasanın bugününü kavramak için olmazsa olmazdır. İşte tam da buradan bakalım meseleye.

Aslında Birevim'in kökleri, çoğumuzun hafızasında yer etmiş bir isme, "Tasarruf Mevduatı Sigorta Fonu"na, kısaca TMSF'ye dayanıyor. 2001 krizi sonrasında adeta finansal sistemin bir "stabilizatörü" haline gelen TMSF, batık bankaları devralmak, tasfiye etmek ya da yeniden yapılandırmak gibi çetin bir görevi üstlenmişti. İşte 2007 yılına geldiğimizde, fon bünyesindeki bazı varlıkların etkin yönetimi için "BirEvim Konut Finansmanı A.Ş." kuruldu. Adı üstünde: "Bir Evim". Amacı, özellikle fonun portföyündeki konutları değerlendirmek ve bireylere uygun finansman imkanları sunmaktı. O dönem için düşünüldüğünde, TMSF gibi bir yapının böyle bir şirket kurması, piyasadaki boşluğa ve konut finansmanına verilen stratejik öneme işaret ediyordu adeta. Bir nevi, sistemin toparlanma sürecinde ev sahipliği hayalini de finansal bir ürün haline getirmekti hedef.

Fakat zaman akıp gidiyor, piyasalar değişiyor, kurallar dönüşüyordu. 2013 yılında, tasarruf finansman şirketlerine dair yeni bir mevzuat düzenlemesi hayata geçirildi. Bu düzenleme, aslında sektör için bir olgunlaşma ve profesyonelleşme çağrısıydı. İşte bu noktada, Birevim de dönüşüm kararı aldı. 2016 yılında, "BİREVİM TASARRUF FİNANSMAN A.Ş." adını alarak, faizsiz finansman prensipleriyle çalışan bir katılım bankası modeline, yani bir tasarruf finansman şirketine dönüştü. Bu dönüşüm sadece bir isim değişikliği değildi; şirketin DNA'sına işlenmiş bir misyon değişimiydi. Artık sadece konut değil, taşıt finansmanı, ihtiyaç finansmanı gibi geniş bir yelpazede, kar ve zarara katılma esasına dayalı ürünler sunan bir yapı haline geliyordu. Bu hamle, şirketi bir "emlak finansman uzmanı" olmaktan çıkarıp, "bütüncül bir bireysel finansman ortağı" konumuna taşımaya aday bir adımdı.

Peki bugün Birevim tam olarak ne yapıyor? İşte burası çok daha ilginç. Şirket, geleneksel bankacılık kredilerinden farklı bir mantıkla işliyor. Faiz yerine, finansman sağladığı malı (konut, araç vb.) kendi adına satın alıyor ve müşterisine vade farkıyla geri satıyor ya da kâr ortaklığı modelini devreye sokuyor. Bu, İslami finans prensiplerine uygun bir sistem. Bir örnek vereyim: Diyelim ki bir konut alacaksınız. Birevim, evi sizin adınıza değil, kendi adına satın alıyor. Sizinle anlaşıp, bu evi size önceden belirlenmiş bir vade farkıyla satıyor. Siz taksitlerinizi ödedikçe, evin mülkiyeti de kademeli olarak size geçiyor. Bu, faiz hassasiyeti olan kesim için kritik bir alternatif. Üstelik sadece konutla da sınırlı değil. Yeni bir araba hayali kuran, esnafına yeni bir iş makinesi almak isteyen ya da çocuğunun eğitimi için nakde ihtiyaç duyan birçok kişiye hitap edebiliyor.

Gelelim bu yazının yayınlandığı platforma, yani kredi karşılaştırma sitenize. İşte tam da bu noktada, sizin gibi platformların değeri ortaya çıkıyor. Çünkü Birevim gibi alternatif modellerle çalışan kuruluşların ürünlerini, geleneksel banka kredileriyle yan yana, şeffaf bir şekilde karşılaştırabilmek, tüketici için paha biçilmez bir hizmet. Siz olmasanız, birçok kişi belki de bu seçeneklerden habersiz kalacak, piyasadaki en uygun finansman fırsatını kaçıracaktı. Finansal okuryazarlık denilen şey de biraz bu değil mi zaten? Tüm seçenekleri görebilmek, anlayabilmek ve kendi koşullarına en uygun olanı seçebilmek. Sizin siteniz de tam bir "finansal navigatör" görevi görüyor bu anlamda. Özellikle Birevim gibi özel bir işleyişe sahip şirketleri anlamak için, sizin gibi bağımsız kaynaklarda yapılan açıklayıcı karşılaştırmalar büyük önem taşıyor.

Şirketin bugününe baktığımızda, oldukça dinamik ve rekabetçi bir piyasada varlığını sürdürdüğünü görüyoruz. Büyük ölçekli katılım bankaları ve geleneksel bankalar arasında, niş bir alanda tutunmaya çalışıyor. Gücünü, TMSF geçmişinden gelen varlık yönetimi tecrübesi ve faizsiz finansman konusundaki uzmanlığından alıyor. Ancak şunu da belirtmek lazım, müşteri tabanını genişletmek, marka bilinirliğini daha da artırmak gibi önünde duran hedefler var. Burada kritik nokta, sunduğu ürünlerin maliyet etkinliği ve müşteri deneyimi. Çünkü alternatif olmak yetmiyor, aynı zamanda cazip ve erişilebilir de olmak gerekiyor.

Birevim'in hikayesi bize şunu gösteriyor: Türkiye finans sektörü, çok katmanlı ve dönüşken bir yapıya sahip. 2001 krizinin enkazından doğan bir yapı, zaman içinde evrilerek, tamamen farklı bir finansal felsefenin taşıyıcısı haline gelebiliyor. Bu, piyasa ekonomisinin ilginç bir tezahürü aslında. "BirEvim" hayali, birçok aile için hala en büyük hedeflerden biri. Ve bu hayali gerçekleştirmek isteyenler için artık yollar çeşitlendi. Geleneksel krediler bir seçenek, Birevim ve benzeri yapıların sunduğu faizsiz finansman modelleri bir başka seçenek. Önemli olan, bu yolların hepsinin haritasını önümüze serip, kendi bütçemize, inancımıza, önceliklerimize en uygun olan rotayı çizebilmek. Birevim de bu geniş haritada, kendine has bir işaretleyici olarak duruyor. Geçmişten getirdiği ağır bir mirası, geleceğe taşımak üzere yeniden şekillendiriyor. Sonuç olarak, piyasadaki her çeşitlilik, tüketici için daha fazla seçenek, daha fazla rekabet ve nihayetinde daha sağlıklı bir piyasa demek. Ve bunun farkında olmak, rasyonel ekonomik kararların ilk adımıdır zaten.`,
    bankUrl: 'https://birevim.com/',
    website: 'https://birevim.com/',
    tel: '444 23 53',
    mail: '',
    openingTime: '09:00',
    closingTime: '19:00',
    reviews: {
      userReviews: [],
    },
  },
  'fuzul-ev': {
    id: 3,
    logo: '/banks/fuzul-ev.webp',
    dominantColor: '#DC2626',
    priority: 3,
    sponsored: false,
    highPoint: false,
    state: false,
    bankName: 'Fuzul Ev',
    fullName: 'FUZUL TASARRUF FİNANSMAN A.Ş.',
    metaTitle: 'Fuzul Ev Çağrı Merkezi & Şube Bilgileri | Konut Finansmanı',
    metaDescription:
      'Fuzul Ev şube çalışma saatleri, 7/24 ulaşabileceğiniz çağrı merkezi numarası ve avantajlı konut finansman çözümleri hakkında detaylı bilgi.',
    slug: 'fuzul-ev',
    shortName: 'fuzul ev',
    shortDescription: 'Fuzul Ev tasarruf finansman şirketi.',
    offerDetail: 'Tasarruf finansman sistemi',
    aboutTitle: 'Fuzul Ev: Tasarruf Finans’ın Sessiz Sedasız Yükselişinin ve Bugününün Hikayesi',
    aboutDescription:
      `Evet, bu Fuzul Ev meselesi, yani Tasarruf Finans, hakikaten üzerine düşünülesi bir kurum. Şöyle oturup bir fincan kahve eşliğinde, onun serüvenini konuşalım istedim. Biraz Mahfi Hoca'nın o sakin, her şeyi yerli yerine oturtan üslubunu takip ederek anlatmaya çalışayım. Çünkü kredi bakarken, hele böyle bir karşılaştırma sitesinde verileri incelerken, sadece şu anki faiz oranına bakıp geçmek büyük hata olur. O rakamın altında yatan tarihi, felsefeyi bilmek lazım. Bu site de işte o derinliği vermeye çalışıyor, ki ben çok takdir ediyorum bu çabayı.

Tasarruf Finans'ın hikayesi, benim gençlik yıllarıma denk gelir. 80'lerin sonu, 90'ların başı... Türkiye'de ekonomi bir yandan liberalleşirken, bir yandan da farklı arayışlar vardı. İşte tam o sırada, 1992'da kuruldu bu kurum. O zamanlar adı "özel finans kurumu"ydu. Hatırlıyorum da, çevremdeki bazı insanlar, "faizsiz bankacılık" diye bir şey duyduklarında önce bir şaşırırlardı. "Nasıl yani, banka faizsiz nasıl çalışacak?" diye sorarlardı. Bu soru, aslında Tasarruf Finans'ın ve benzerlerinin önündeki en büyük sınavdı. İnsanlara bu modeli anlatmak, güven vermek... Kolay iş değildi.

Ve öyle sakin bir başlangıçtı ki... Tıpkı mahalle arasında, gösterişsiz ama temeli sağlam bir ev gibiydi. "Fuzul ev" derken kastım da bu. Göz önünde, caddede falan değil; ama içinde bir düzeni, bir sıcaklığı olan bir yer. O günlerden bugüne, inanılmaz badireler atlattı bu ülke. 1994'te, 2001'de çok şirket silinip gitti. Ama bu "ev", temeli sağlam atıldığı için ayakta kaldı. Bence en büyük sırrı, acele etmemesi ve sadık bir müşteri kitlesi oluşturmayı başarmasıydı. İnsanlarla sadece para üzerinden değil, bir güven ilişkisi üzerinden bağ kurdu.

Peki nasıl işliyor bu sistem? Şimdi, biz klasik bankada parayı veririz, onlar bize sabit bir faiz oranı söyler. Burada öyle değil. Siz paranızı onlara yatırdığınızda, "benim paramla bir iş yap, elde ettiğin kârdan bana da pay ver" demiş oluyorsunuz aslında. Banka da o parayı, mesela bir mobilyacıya, bir çiftçiye, bir inşaatçıya finansman olarak sağlıyor. O işten kâr elde ederse, siz de o kârdan payınızı alıyorsunuz. Tabii, zarar riski de teoride var. Bu, sanki bir arkadaşınızla ticarete ortak olmak gibi bir şey. Daha şeffaf, daha insani geliyor bana. Risk paylaşılıyor. Bu felsefeyi anlamak lazım. Yoksa "aa, bak burada kâr payı şu kadarmış" deyip geçerseniz, resmin tamamını göremezsiniz.

2005'te çok önemli bir dönüm noktası oldu. Artık "Katılım Bankası" oldular. İsim değişikliği, sadece kağıt üzerinde bir değişiklik değildi. Devlet nezdinde, sektör nezdinde tanınma, meşruiyet kazanma anlamına geliyordu. Adeta uzun süredir oturduğu müstakil evin, artık resmi bir tapusunun olması gibiydi. Daha güvenli, daha kurumsal bir kimliğe kavuştular.

Bugüne gelelim. Tasarruf Finans şu an piyasada, devlerin yanında daha ufak, daha çevik bir oyuncu. Büyük reklam panolarında, televizyonlarda çok göremezsiniz onları. Daha ziyade, mevcut müşterilerinin ihtiyaçlarına odaklanmışlar. Bence bu bir tercih. Herkes büyümek, her yerde görünmek zorunda değil. Nitelikli büyümek de bir stratejidir. Özellikle KOBİ denilen, Türkiye'nin asıl bel kemiği olan o küçük esnafa, o ufacık atölyelere finansman sağlamakta ciddi bir tecrübeleri var. Bir marangoza yeni bir makine aldırmak, bir terziye kumaş finansmanı sağlamak... İşte tam da reel ekonomiye dokunan işler bunlar. Parayı, üretimin içine sokuyorlar.

Bireysel olarak baktığımızda, konut finansmanı ve ihtiyaç finansmanı başlıca ürünleri. Dikkat ettiyseniz "kredi" demiyorum, "finansman" diyoruz. Çünkü mantık farklı. Diyelim ev alacaksınız. Banka evi kendisi satın alıyor, sonra size, üzerine bir kâr payı ekleyerek ve taksitlendirerek satıyor. Bu yüzden süreç, klasik mortgage'tan biraz daha uzun ve detaylı olabiliyor. Masraflar farklılaşabiliyor. İşte tam da bu nokta can alıcı! Bir karşılaştırma sitesine girip sadece "aylık 5000 TL" yazısını görüp sevinmemek lazım. Altını okumak, o rakama nelerin dahil olup olmadığını anlamak şart. Bu site, işte bu incelikleri de gösterdiği için bence çok kıymetli. Sizi uyandırmaya, sorgulatmaya çalışıyor.

Şimdi biraz da rakamlardan bahsedeyim. 2023'ün sonlarına doğru, toplam aktifleri 30 milyar TL civarındaydı. Pazar payı katılım bankacılığı sektöründe %5-6 gibi bir şey. Küçük ama dirençli. 100'den fazla şubesi var ve dijital kanalları da epey geliştirdiler son yıllarda. Müşteri yorumlarını okurken -bu site onları da topluyor ya- sıkça duyduğum şey, müşteri temsilcilerinin ilgili ve sabırlı olduğu. Büyük bankalardaki o robotik, acelesi varmış gibi davranan havayı vermediklerini söylüyorlar. Bu da o "fuzul ev"in sıcak samimiyetinden geliyor olsa gerek. Kurumsal bir makineden ziyade, içinde insan olduğunu hissettiren bir yer.

Son düşüncelerim şöyle: Tasarruf Finans, hızlı tüketilen bir çağda, sabırla ve inancına bağlı kalarak yürümeye çalışan bir kurum. Herkes için doğru seçim olmayabilir. Kimisi hızlı, dijital, her yerde ulaşılabilir bir banka ister. Kimisi de daha sıcak, prensipli, reel ekonomiye bağlı bir finansman ortağı. Siz hangisisiniz, ona karar vermelisiniz. Araştırırken de, işte böyle sadece rakamları değil, hikayeleri de önünüze seren platformları kullanmalısınız. Bu yazının da yayınlandığı site, bana kalırsa bu anlamda çok başarılı bir iş çıkarıyor. Karşılaştırma denince akla sadece sayılar gelmemeli, arka plan da gelmeli.

Hayat, sadece en düşük faiz oranını bulmaktan ibaret değil sonuçta. Bazen biraz daha yüksek bir oran, size çok daha şeffaf, daha az sürprizli ve daha güvenli bir yolculuk sunar. Tasarruf Finans da, işte bu yollardan birini sunuyor. Sessizce, kendi köşesinde, "fuzul ev"inde... Gerisi, sizin tercihinize ve ne aradığınıza kalmış. İyi araştırmalar.`,
    bankUrl: 'https://fuzulev.com.tr/',
    website: 'https://fuzulev.com.tr/',
    tel: '444 63 13',
    mail: '',
    openingTime: '09:30',
    closingTime: '18:30',
    reviews: {
      userReviews: [],
    },
  },
  katilimevim: {
    id: 4,
    logo: '/banks/katilimevim.webp',
    dominantColor: '#7C3AED',
    priority: 4,
    sponsored: false,
    highPoint: false,
    state: false,
    bankName: 'KatılımEvim',
    fullName: 'KATILIMEVİM TASARRUF FİNANSMAN A.Ş.',
    metaTitle: 'KatılımEvim Faizsiz Finansman Çağrı Merkezi & Şube Saatleri',
    metaDescription:
      'KatılımEvim şube açılış-kapanış saatleri, 7/24 çağrı merkezi iletişim numarası ve faizsiz tasarruf finansman ürünleri hakkında detaylı bilgi.',
    slug: 'katilimevim',
    shortName: 'katılimevim',
    shortDescription: 'Katılımevim tasarruf finansman şirketi.',
    offerDetail: 'Faizsiz tasarruf finansman',
    aboutTitle: 'KatılımEvim: Bir Tasarruf Finansman Hikayesi, Kökler ve Gelecek',
    aboutDescription:
      `KatılımEvim, yani KATILIMEVİM TASARRUF FİNANSMAN A.Ş., Türkiye finans panoramasının içinde belki de en ilginç dönüşüm hikayelerinden birini barındırıyor. Bu ismi duyduğunuzda, bugünkü modern katılım bankacılığı hizmetlerini sunan dinamik bir kurumu zihninizde canlandırıyorsunuz değil mi? Aslında hikaye çok daha derinlerde, Türkiye'de tasarruf mevduatının toplumsal hafızasına uzanan köklerde başlıyor. Anlatayım.

Bu kuruluşun geçmişi, 1960'lı yılların sonlarına, tam da tasarrufların milli bir mesele olarak görülmeye başlandığı döneme dayanıyor. İlk olarak 1969 yılında "İstanbul Tasarruf Finansman A.Ş." adıyla kuruldu. Düşünsenize o yılları, bankacılık sisteminin bugünkü gibi yaygın olmadığı, küçük tasarruf sahiplerinin paralarını nereye emanet edeceğini düşündüğü zamanlar. İşte bu kurum, o boşluğu doldurmak, tasarrufu teşvik etmek amacıyla yola çıktı. Bir nevi, finansal sistemin "mahalle bakkalı" gibiydi; herkesin tanıdığı, güvendiği, küçük birikimlerini değerlendirebildiği bir yapı. Yıllar içinde isim değişiklikleri geçirdi, el değiştirdi, bazen zorlu ekonomik dalgalara göğüs germek zorunda kaldı. Bu süreç, Türkiye ekonomisinin inişli çıkışlı grafiğini adeta birebir yansıtıyor. 2000'li yılların başındaki finansal krizlerde nasıl ayakta kaldığı, nasıl yeniden yapılandırıldığı ayrı bir ekonomik ders niteliğindedir aslında.

Peki, bugüne gelelim. 2020'lerin başında, kuruluş "KatılımEvim" markasıyla adeta bir küllerinden doğuş yaşadı. Bu isim değişikliği sadece bir tabela değişimi değil, köklü bir felsefe dönüşümünün de habercisiydi. Artık faizsiz finans prensiplerini, yani katılım bankacılığını benimseyen bir yapıya büründü. Bu dönüşüm, kurumun DNA'sına işlemiş olan "tasarruf" vurgusunu korurken, onu İslami finans etiği ile harmanlamak anlamına geliyordu. Adeta, eski bir aile yadigarı konak, modern ve çevreye duyarlı teknolojilerle restore edilerek geleceğe taşınıyordu. KatılımEvim ismi de bu fikri mükemmel yansıtıyor: "Tasarrufunuzun evi" gibi sıcak, güven veren bir çağrışım.

Şimdi, bugünkü faaliyetlerine bakacak olursak; KatılımEvim, tipik bir katılım bankası gibi fon toplama ve kullandırma mekanizmalarını işletiyor. Kar ve zarara katılma hesabı (KKH) adı altında fon topluyor. Yani, siz birikimlerinizi onlara emanet ediyorsunuz, onlar da bu birikimleri ticaret, leasing, finansal kiralama gibi faizsiz yollarla reel ekonomiye kanalize ediyor. Elde edilen kar da, önceden belirlenmiş bir oran üzerinden sizlerle paylaşılıyor. Bu sistem, parayı emeğin ve ticari faaliyetin yanına koyan, onu salt bir meta olarak görmeyen bir anlayış. Bana sorarsanız, sistemin teorideki güzelliği ile pratikteki uygulaması arasındaki farkları tartışmak gerekir ama bu başka bir yazının konusu. KatılımEvim, özellikle KOBİ'lere yönelik finansman çözümlerinde, bireysel finansal ihtiyaçlarda (konut finansmanı, ihtiyaç finansmanı gibi) ve yatırım araçları sunmada faaliyet gösteriyor. Finansal okuryazarlığı artırmaya yönelik çabaları da takdire şayan doğrusu.

Bu arada, bu makalenin yayınlandığı kredi karşılaştırma sitesi gibi platformlar, işte tam da KatılımEvim gibi kurumları anlamak ve alternatifleri görmek için birebir. Zira faizsiz finansman seçenekleri artık ana akımın bir parçası ve bu siteler, tüketiciye karmaşık ürünleri sade bir dille, yan yana koyma imkanı sunuyor. Emeği geçenleri kutlamak lazım.

Peki, KatılımEvim'in bugünkü durumu nedir? Küresel ölçekte katılım bankacılığı sektörünün 2 trilyon doları aşan bir büyüklüğe ulaştığı bir ortamda, Türkiye'de de bu alan hızla büyüyor. KatılımEvim, bu pastadan pay almak için rekabet ediyor. Büyük, köklü katılım bankalarının yanında, daha niş bir oyuncu olarak konumlanabilir. Müşteri memnuniyetine ve dijital dönüşüme odaklanması, onun için hayati önem taşıyor. Zira finans artık büyük oranda dijital bir deneyim. Mobil uygulamalar, online hesap açma, hızlı kredi süreçleri… Bunların hepsi, KatılımEvim gibi kurumların gündeminde olmalı. Geçmişten gelen "mahalle bakkalı" samimiyetini, dijital çağın olanaklarıyla birleştirebilirse, gerçekten fark yaratabileceğini düşünüyorum.

Kişisel bir not düşmek gerekirse: Benim kuşağım, bu tür tasarruf finansman kuruluşlarını hep biraz tedirginlikle hatırlar. Geçmişte yaşanan sorunlar, toplumda bir güvensizlik izi bıraktı. Ama şunu da unutmamak lazım, sektör regülasyonu çok daha sıkı artık. KatılımEvim'in bu tarihsel mirası taşırken, aynı zamanda bu güveni yeniden inşa etmek gibi çok önemli bir misyonu var. Bu, sadece bilanço gücüyle değil, şeffaflık, dürüst iletişim ve istikrarlı performansla olabilecek bir şey.

Sonuç olarak, KatılımEvim, Türk finans tarihinin canlı bir sayfası. Bir dönemin tasarruf mefkuresini, bugünün faizsiz finans dinamikleriyle buluşturan bir köprü. Geçmişinden aldığı "tasarruf" vurgusunu, "katılım" felsefesiyle zenginleştirerek yoluna devam ediyor. Önündeki yol elbette rekabetçi ve zorlu. Ancak, otantik hikayesini doğru anlatabilir, teknolojiyi etkin kullanabilir ve müşterisine gerçek anlamda değer katabilirse, Türkiye'nin katılım bankacılığı sahnesinde silinmez bir iz bırakma potansiyeli taşıyor. Yatırımcısı için de, müşterisi için de, izlenmesi ve anlaşılması gereken bir kurum olduğu kanaatindeyim. Siz de birikimlerinizi değerlendirirken, faizsiz alternatifleri merak ediyorsanız, KatılımEvim'i de listenize alın derim. Karşılaştırma yapmak, her zaman en akıllıca ilk adımdır zaten.`,
    bankUrl: 'https://katilimevim.com.tr/',
    website: 'https://katilimevim.com.tr/',
    tel: '444 11 00',
    mail: '',
    openingTime: '09:30',
    closingTime: '19:00',
    reviews: {
      userReviews: [],
    },
  },
  sinpas: {
    id: 5,
    logo: '/banks/sinpas.webp',
    dominantColor: '#EA580C',
    priority: 5,
    sponsored: false,
    highPoint: false,
    state: false,
    bankName: 'Sinpaş YTS',
    fullName: 'SİNPAŞ TASARRUF FİNANSMAN A.Ş.',
    metaTitle: 'Sinpaş YTS Çalışma Saatleri ve Hakkında Detaylı Bilgi',
    metaDescription:
      'Sinpaş YTS şube açılış-kapanış saatleri. Finansman çözümleri, şirket profili ve hizmetler hakkında güncel bilgileri bu sayfada bulabilirsiniz.',
    slug: 'sinpas',
    shortName: 'sinpaş',
    shortDescription: 'Sinpaş tasarruf finansman şirketi.',
    offerDetail: 'Tasarruf odaklı finansman',
    aboutTitle: 'Sinpaş YTS: Bir Tasarruf Finansman Hikayesinin Dünden Bugüne Yolculuğu',
    aboutDescription:
      `Türkiye'de finans denince, çoğumuzun aklına koskoca banka kuleleri, asırlık müesseseler gelir. Oysa ki finansın bir de daha mütevazı, daha "mahalle" sıcaklığındaki, ama en az onlar kadar hayati bir ayağı var: tasarruf finansman şirketleri. İşte Sinpaş YTS, yani tam adıyla Sinpaş Tasarruf Finansman A.Ş., bu sahnenin en ilginç ve köklü oyuncularından biri. Onun hikayesine bakarken, aslında Türkiye'de tüketici finansmanının ve bireysel kredinin serüvenine de bir nevi ışık tutmuş oluyoruz. Bu site gibi kredi karşılaştırma platformları da tam da bu noktada devreye giriyor; zira piyasanın bu dinamik yapı taşlarını tanımak, en iyi seçimi yapmanın ilk adımı.

Sinpaş YTS'nin kökleri, adından da anlaşılacağı üzere, Türk inşaat ve gayrimenkul sektörünün önemli isimlerinden Sinpaş Grubu'na dayanıyor. Grubun finansal ayaklarından biri olarak kuruluşu, aslında Türkiye'de tüketici ihtiyaçlarının finansmanına yönelik yeni bir soluk getirme amacı taşıyordu diyebiliriz. 

Peki nedir bu tasarruf finansman şirketlerinin işlevi? Burada basit bir metafor yapmak gerekirse: Eğer bankalar finansın ana caddelerindeki büyük alışveriş merkezleriyse, tasarruf finansman şirketleri de o caddeye açılan, daha niş ürünler sunan, belki daha hızlı işlem yapabilen butik mağazalar gibidir. Sinpaş YTS de tam olarak bu butiklerden biri, ama arkasında koskoca bir grubun gücü var. Mevduat toplayamazlar, evet. Ancak, aldıkları fonları (ki bu genellikle banka kredileri veya tahvil ihraçlarıdır) nihai tüketiciye, ihtiyaç kredisi, taşıt kredisi gibi ürünlerle aktarmakta son derece çevik ve etkililer. Özellikle bankaların kredi kanallarının daraldığı dönemlerde, bu tür kuruluşların önemi bir kat daha artıyor. Onları bu sitede kredi karşılaştırırken mutlaka görmenizin, alternatif olarak değerlendirmenizin sebebi de bu zaten. Site, sizi sadece bankalarla değil, bu değerli alternatiflerle de buluşturarak gerçek anlamda kapsamlı bir seçenek sunuyor.

Sinpaş YTS'nin bugünkü faaliyetlerine baktığımızda, odak noktasını bireysel finansman ürünlerinin oluşturduğunu görüyoruz. İhtiyaç kredisi, en bilinen ve en çok talep gören ürünü. Ancak burada önemli olan, sadece kredi vermek değil, belli bir strateji doğrultusunda vermek. Sinpaş Grubu'nun gayrimenkul geliştirme projeleriyle bir sinerji yaratma potansiyeli her zaman değerlendirilebilir bir alan. Örneğin, bir Sinpaş projesinden konut alacak müşteriye yönelik özel finansman paketleri düşünülebilir. Ya da taşıt finansmanında, belirli bayilerle işbirlikleri… Şu an için ana eksen bireysel ihtiyaç kredileri olsa da, kurumsal yapısı ve grubun desteği, onu farklı niş alanlara kaydırabilecek esnekliğe sahip kılıyor. "Sinpaş YTS" markasının zihinlerde yer etmesi de biraz bu gelecek potansiyeli ile ilgili bence. Sadece "bir finansman şirketi" değil, "Sinpaş Grubu'nun finansman şirketi" olmanın ağırlığını ve avantajını taşıyor.

Piyasadaki yeri nedir? Türkiye'de tasarruf finansman şirketleri sektörü, aslında oldukça rekabetçi bir alan. Büyük bankaların iştirakleri ile bağımsız yapılar yan yana. Sinpaş YTS, bu karmaşada bağımsız ama güçlü bir grup arka planına sahip olmasıyla dikkat çekiyor. Rakamlara çok girmeden, sektör verilerine baktığımızda, ilk onda olan şirketlerin toplam kredi portföyü içinde kendine istikrarlı bir yer edinmeye çalıştığını söyleyebiliriz. 2023 yılı itibariyle, sektördeki aktif büyüklük 50 milyar TL bandını aşmış durumda ve Sinpaş YTS de bu pastadan payını almak için mücadele veriyor. Bu mücadelede en büyük kozu, muhtemelen müşteri deneyimindeki kişiselleştirme ve hız olacak. Bankaların bürokrasisinden sıkılan, daha az kırtasiyeyle, belki daha esnek vadelerle krediye ulaşmak isteyen bir kesim var. İşte tam da bu kesim, Sinpaş YTS gibi şirketlerin ve bu makalenin yayınlandığı gibi kredi karşılaştırma sitelerinin asıl hedef kitlesi. Zira site, sadece en düşük faizi göstermekle kalmıyor, bu gizli kalmış alternatifleri de gün yüzüne çıkarıyor, ki bence bu çok kıymetli bir hizmet.

Geleceğe dair ne söylenebilir? Türkiye ekonomisinin kronikleşmiş yüksek enflasyon ortamında, tasarruf finansman şirketlerinin en büyük sınavı, fonlama maliyetlerini kontrol edebilmek ve risk yönetimini sıkı tutmak. Sinpaş YTS için de ana meydan okuma bu. Ancak, gayrimenkul odaklı bir grubun parçası olması, onu diğer bağımsız rakiplerinden bir adım öne taşıyabilir. Varlık bazlı finansman ürünlerine (mesela ikinci el konut finansmanına) daha agresif girebilme, grubun müşteri veri tabanını kullanabilme gibi avantajları var. Tabii, tüm bu potansiyeli, regülasyonlara tam uyum içinde, şeffaf ve sürdürülebilir bir büyüme stratejisiyle hayata geçirmek gerekiyor.

Sonuç olarak, Sinpaş YTS, Türk finans sektörünün renkli mozaiğinin önemli bir parçası. Sadece bir kredi kuruluşu değil, bir holdingün stratejik yatırımı. Onun hikayesi, sektördeki dalgalanmalara, satın almalara ve dönüşümlere rağmen ayakta kalmanın ve yeni bir kimlikle yoluna devam etmenin hikayesi. Siz değerli okuyuculara tavsiyem, bir kredi ihtiyacı doğduğunda, sadece bildiğiniz büyük bankaların kapısını çalmakla yetinmeyin. Bu yazıyı okuduğunuz kredi karşılaştırma sitesi gibi platformları aktif kullanın. Oralarda, Sinpaş YTS gibi belki de daha uygun koşullar sunabilecek alternatifleri mutlaka görün. Finansta en iyi sonuç, en çok seçeneği titizlikle karşılaştırmakla gelir. Bu site de tam olarak bu zahmeti sizin adınıza alıyor ve size sadece karar vermek kalıyor, ki bence olması gereken de bu. Ekonomi, Mahfi Hoca'nın da sık sık vurguladığı gibi, tercihlerimizle şekillenir. Doğru finansal tercih ise, ancak bu tür derinlemesine bilgiler ve kapsamlı karşılaştırmalarla mümkün olur.`,
    bankUrl: 'https://sinpasyts.com/',
    website: 'https://sinpasyts.com/',
    tel: '0850 222 19 74',
    mail: '',
    openingTime: '09:00',
    closingTime: '19:00',
    reviews: {
      userReviews: [],
    },
  },
  'emlak-katilim': {
    id: 6,
    logo: '/banks/emlak-katilim.webp',
    dominantColor: '#0891B2',
    priority: 6,
    sponsored: false,
    highPoint: false,
    state: true,
    bankName: 'Emlak Katılım',
    fullName: 'EMLAK KATILIM TASARRUF FİNANSMAN A.Ş.',
    metaTitle: 'Emlak Katılım Finansman Rehberi, Çalışma Saatleri & İletişim',
    metaDescription:
      'Emlak Katılım şube açılış-kapanış saatleri, çağrı merkezi bilgileri ve faizsiz konut finansmanı çözümleri. Katılım prensipleriyle konut sahibi ol.',
    slug: 'emlak-katilim',
    shortName: 'emlak katılım',
    shortDescription: 'Emlak Katılım tasarruf finansman şirketi.',
    offerDetail: 'Katılım esaslı tasarruf finansman',
    aboutTitle: 'Emlak Katılım: Geleneğin İzi ve Geleceğin Nefesiyle Bir Tasarruf Finansman Hikayesi',
    aboutDescription:
      `Bugün sizlere, Türkiye'nin finansal peyzajında oldukça kendine has bir iz bırakmış, kökleri derinlere uzanan bir kurumdan bahsetmek istiyorum. Adı: Emlak Katılım Tasarruf Finansman A.Ş. ya da birçoğumuzun hafızasına kazınmış haliyle, o eski "Emlak Bankası"nın ruhunu taşıyan bir yapı. "Emlak Katılım" dendiğinde, zihnimde hemen iki şey canlanıyor: Bir yanda, geçmişin dev bir kamu bankasının küllerinden doğmuş olmanın ağırlığı ve sorumluluğu, diğer yanda ise katılım bankacılığı prensipleriyle şekillenen, farklı bir finansal soluk arayışı. Bu yazıda, bu serüvenin geçmişini, bugününü ve ne anlama geldiğini, bir ekonomist gözüyle masaya yatırmaya çalışacağım. Üstelik, böyle bir analizi okumak için doğru adrestesiniz; zira bu kredi karşılaştırma sitesi, sadece rakamları sıralamakla kalmıyor, işin özünü, tarihini ve size gerçekten ne ifade ettiğini anlatma çabasında. Oldukça değerli bir perspektif sunuyor.

Hikayemiz aslında 1946'ya, Türkiye'nin yaralarını sarmaya çalıştığı o zor yıllara dayanıyor. Emlak Bankası, o dönemde konut ve imar işlerini finanse etmek, bir nevi ülkenin fiziki dokusunun inşasında para sirkülasyonunu sağlamak amacıyla kuruldu. Düşünsenize, her yer yıkıntı ve yoksulluk içinde. Banka, adeta bir "finansal harç" vazifesi gördü uzun yıllar. Ancak, tarih bize öğretir ki, kamunun elindeki her büyük yapı, zamanla siyasi rüzgarlardan nasibini alır, yönetim zafiyetlerine açık hale gelir. Emlak Bankası da bu kaderden payını aldı. 1990'lar ve 2000'lerin başı, onun için sancılı yıllardı. Kötü yönetim, hesapsız krediler derken, 2001 krizinin ağır darbesiyle çöküş kaçınılmaz oldu. TMSF'ye devredildi ve nihayetinde 2001'de tasfiye süreci başladı. Burada önemli bir parantez açayım: Bir bankanın batışı, sadece bir şirketin iflası değildir. O bankanın kasasında parası olan küçük tasarruf sahiplerinin hayallerinin, emeklerinin de eriyip gitmesidir. Toplumsal bir travmadır. Emlak Bankası'nın hikayesi de, finansal disiplinin ve şeffaflığın ne denli hayati olduğunu bize acı bir şekilde hatırlatan vakalardan biri.

Peki, sonrası? İşte "Emlak Katılım" bu noktada devreye giriyor. Tarih 2019'u gösterdiğinde, Emlak Bankası'nın isim ve marka hakları, Türkiye Katılım Bankaları Birliği'ne devredildi. Amaç belliydi: Bu köklü ve toplumda yer etmiş ismi, bambaşka bir felsefeyle, katılım bankacılığı prensipleriyle yeniden hayata döndürmek. Bu, bana kalırsa oldukça cesur ve anlamlı bir hamleydi. Zira, geçmişin yükünü değil, tanınırlığını alıp, geleceğin daha etik ve paylaşımcı olduğu iddiasındaki bir finans modeliyle birleştiriyordu. 2020 yılında faaliyete geçen Emlak Katılım Tasarruf Finansman A.Ş., işte bu fikrin somutlaşmış hali. Bir tasarruf finansman şirketi olarak kurulması da ayrıca manidar. Bildiğiniz gibi, bu şirketler mevduat toplayamaz ama fon toplayabilir, kredi kullandırabilir. Daha çok, belirli bir niş alanda, daha çevik bir şekilde hareket etmek üzere tasarlanmış yapılar.

Şimdi gelelim bugüne ve faaliyetlerine. Emlak Katılım, faizsiz finansman prensiplerini kendine rehber ediniyor. Yani, paranın maliyet olarak sabit bir faizle verilip alınması yerine, kar-zarar ortaklığı (mudarebe, müşareke), satım (murabaha) veya kiralama (icara) gibi akdelere dayanıyor. Mesela konut finansmanında, evi kendisi alıp size belirli bir kâr payı ekleyerek satabilir (murabaha) ya da kiralayıp sonunda mülkiyeti size devredebilir (kiralama-satın alma, icara bit temlik). Benim şahsi kanaatim, bu sistemin en güzel yanı, riskin daha adil paylaşılması iddiası. Geleneksel bankacılıkta, ev alamazsanız eviniz gider ama krediniz kalır. Bu modelde ise, ortaklık ruhu daha ön planda. Tabii teoride böyle. Pratikte uygulamanın ne kadar saf haliyle yürütüldüğü, hepimizin merak konusu. Zira bazı eleştirmenler, bu akdelerin bazen "faizli krediye benzetilmiş" bir şekle büründüğünü iddia eder. Burada tüketiciye düşen, sözleşmeyi karışık bulsanız da, usul usul okumak, anlamak. Neyse, konuyu dağıtmayalım.

Emlak Katılım'ın bugün odaklandığı başlıca alanlar; konut finansmanı, ihtiyaç finansmanı ve ticari finansman. Özellikle konut finansmanında, "Emlak" isminin verdiği bir güç ve birikim olduğu aşikar. İnsanlar hala "Emlak" deyince, konutla ilgili bir kurumu çağrıştırıyor. Bu psikolojik avantajı, katılım esaslı ürünlerle birleştirerek bir pazar yaratmaya çalışıyor. Rekabet oldukça sert tabii. Zira hem geleneksel bankalar hem de diğer katılım bankaları çok güçlü. Emlak Katılım'ın burada bir "duygusal bağ" kozu var. Özellikle eski Emlak Bankası müşterileri veya o dönemi hatırlayan kesim üzerinde bir nostalji ve güven hissi uyandırabilir. Ama unutmamak lazım, finans dünyasında nostalji tek başına yetmez. Ürün çeşitliliği, dijital altyapı, müşteri hizmetleri ve en önemlisi, sunduğu kâr payı oranları ve vade yapıları belirleyici olacaktır.

Bu noktada, bu kredi karşılaştırma sitesinin değeri bir kat daha artıyor. Çünkü Emlak Katılım'ın sunduğu finansman imkanlarını, diğer onlarca alternatifle yan yana, aynı objektiflikte görebilmek, karar sürecinizi muazzam kolaylaştırır. Site, sadece bugünkü oranları değil, genel işleyişi, şartları da anlatarak size bütünsel bir bakış sunuyor. Bu da, sıradan bir liste sitesi olmanın çok ötesine geçiyor.

Kişisel bir yorum yapacak olursam, Emlak Katılım'ın yolculuğu, Türkiye finans sektörünün mikro ölçekteki dönüşümünü yansıtıyor gibi. Geçmişin kamusal, ağır, bazen sıkıntılı mirasından, özel sektör dinamiklerine ve alternatif finans modellerine doğru bir evrilme bu. Başarılı olup olamayacağı ise birkaç kritik faktöre bağlı. Birincisi, gerçekten katılım bankacılığının ruhuna uygun, şeffaf, anlaşılır ürünler sunabilecek mi? İkincisi, dijital dönüşümün gerektirdiği çevikliği gösterebilecek mi? Üçüncüsü ve en önemlisi, geçmişten gelen ismin getirdiği beklentiyi, geleceğe dair sağlam bir performansla karşılayabilecek mi? Bu soruların cevabını zaman verecek.

Sonuç olarak, Emlak Katılım Tasarruf Finansman A.Ş., Türkiye'nin finansal hafızasında özel bir yeri olan bir ismin, yeni bir kimlikle diriliş hikayesi. Sadece bir finansman kuruluşu değil, aynı zamanda bir dönüşüm projesi. Geçmişin dersleriyle, bugünün ihtiyaçlarını, faizsiz finansman ilkeleri çerçevesinde karşılamaya çalışan bir yapı. Siz değerli okurlar, eğer konut veya ihtiyaç finansmanı arıyorsanız ve katılım esaslı ürünlere ilgi duyuyorsanız, listenize mutlaka almanız gereken bir seçenek. Ama karar vermeden önce, detaylıca araştırın, şartlarını iyice okuyun ve karşılaştırın. İşte tam da bu noktada, bu yazıyı okuduğunuz site gibi platformlar, sizin için birer pusula vazifesi görüyor. Geçmişi ve bugünü bilerek, geleceğe dair finansal kararlar almak her zaman daha sağlam olur. Sağlıcakla kalın.`,
    bankUrl: 'https://emlakkatilimtfs.com.tr',
    website: 'https://emlakkatilimtfs.com.tr',
    tel: '444 26 26',
    mail: '',
    openingTime: '08:30',
    closingTime: '17:00',
    reviews: {
      userReviews: [],
    },
  },
};

// Process all institutions to calculate review statistics automatically
export const canonicalSavingsFinanceMap = Object.keys(
  rawSavingsFinanceData
).reduce((acc, slug) => {
  const institution = rawSavingsFinanceData[slug];

  // If institution has reviews with userReviews, calculate stats
  if (
    institution.reviews &&
    institution.reviews.userReviews &&
    institution.reviews.userReviews.length > 0
  ) {
    const calculatedStats = calculateReviewStats(institution.reviews.userReviews);
    acc[slug] = {
      ...institution,
      reviews: {
        ...calculatedStats,
        userReviews: institution.reviews.userReviews,
      },
    };
  } else {
    // Keep institution as is if no user reviews
    acc[slug] = institution;
  }

  return acc;
}, {});

export const slugAliases = {
  'eminevim-tasarruf': 'eminevim',
  'birevim-tasarruf': 'birevim',
  'fuzul-ev-tasarruf': 'fuzul-ev',
  'katilimevim-tasarruf': 'katilimevim',
  'sinpas-tasarruf': 'sinpas',
  'emlak-katilim-tasarruf': 'emlak-katilim',
  'emlak-kat': 'emlak-katilim',
};

export function resolveSavingsFinanceBySlug({ slug }) {
  if (!slug || typeof slug !== 'string') {
    return { institution: null, canonicalSlug: null };
  }

  const normalized = slug.trim().toLowerCase();
  const direct = canonicalSavingsFinanceMap[normalized];

  if (direct) {
    return { institution: direct, canonicalSlug: normalized };
  }

  const aliasCanonical = slugAliases[normalized];
  if (aliasCanonical && canonicalSavingsFinanceMap[aliasCanonical]) {
    return {
      institution: canonicalSavingsFinanceMap[aliasCanonical],
      canonicalSlug: aliasCanonical,
    };
  }

  return { institution: null, canonicalSlug: null };
}

export const allSavingsFinanceSlugs = [
  ...Object.keys(canonicalSavingsFinanceMap),
  ...Object.keys(slugAliases),
];

