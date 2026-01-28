import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import HeadingComponent from '@/components/common/HeadingComponent';
import TeamMemberCard from '@/components/common/TeamMemberCard';
import Image from 'next/image';
import React from 'react';
import CORE from '@/CORE2';

 

export async function generateMetadata() {
  const metadata = CORE['/hakkimizda']
  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: '/hakkimizda',
    },
  }
}

function AboutPage() {
  return (
    <main className='custom-container-1 pt-[40px] md:pt-[48px] lg:pt-[56px]'>
      <BreadcrumbComponent
        items={[{ label: 'ihtiyackredisi.com', href: '/' }, { label: 'Hakkımızda' }]}
      />

      <section className='flex flex-col gap-y-[32px] md:gap-y-[48px] lg:gap-y-[64px]'>
        <div className='flex flex-col'>

          <div className='max-[550px]:h-auto min-[550px]:h-[580px] w-full rounded-[32px] relative overflow-hidden mb-[32px] flex items-center justify-center'>
            <Image
              src={'/general/website/hakkimizda-2.jpg'}
              alt='Hakkımızda'
              width={1200}
              height={580}
              className='max-[550px]:w-full max-[550px]:h-auto max-[550px]:object-contain min-[550px]:size-full min-[550px]:object-cover select-none object-top rounded-[32px]'
              draggable={false}
            />
          </div>

          {/* Kurucumuzun Mesajı */}
          <div className='bg-gradient-to-br from-slate-50 to-white rounded-[24px] border border-slate-200 p-[24px] md:p-[32px] lg:p-[40px] mb-[48px]'>
            <h2 className='text-[20px] md:text-[24px] lg:text-[28px] font-bold text-slate-900 mb-[16px] md:mb-[20px]'>
              Kurucumuzun Mesajı
            </h2>
            <div className='text-slate-700 text-[15px] leading-[24px] space-y-[20px] md:space-y-[24px]'>
              <div>
                <h3 className='text-[18px] md:text-[20px] font-extrabold text-slate-900 mb-[12px]'>
                  ihtiyackredisi.com: Hayatınızdaki Finansal Anları Birlikte Yönetelim
                </h3>
                <p>
                  Hoş geldiniz. Bu sayfa, belki de sitemizde en çok emek verdiğimiz, en çok önemsediğimiz yer. Çünkü burada size kendimizden, neden var olduğumuzdan ve sizin için neler hissettiğimizden bahsediyoruz. Biz ihtiyackredisi.com olarak, ekranın öteki tarafında sadece bir "site" değil, sizin hayatınızın bir parçası olmak isteyen gerçek insanlarız.
                </p>
              </div>

              <p>
                Hepimizin hayatı, beklenmedik anlarla, küçük büyük sürprizlerle dolu. Bazen bu sürprizler neşe doludur: Evlilik teklifi, yeni bir bebeğin haberi, çocuğunuzun üniversiteyi kazanması... Bazen ise hayat bize biraz zorluk çıkarır: Bozulan çamaşır makinesi, aniden hastalanan bir aile ferdi, arabanın motor arızası... İşte tam da bu dalgalı anlarda, <em>"Acaba param yetecek mi?"</em>, <em>"Bu kadar parayı nereden bulacağım?"</em> endişesi, asıl yaşamamız gereken o özel anların tadını kaçırabilir.
              </p>

              <p>
                Biz tam olarak burada devreye giriyoruz. Amacımız, o endişeyi omuzlarınızdan almak ve size sadece hayatınızı yaşayacak alanı bırakmak. Bizi, finansal ihtiyaçlarınızı karşılarken yanı başınızda duran, sakin, güvenilir bir dostunuz olarak düşünebilirsiniz.
              </p>

              <div>
                <h3 className='text-[18px] md:text-[20px] font-extrabold text-slate-900 mb-[12px]'>
                  Biz Kimiz? Sizin Gibi İnsanlardan Oluşan Bir Topluluğuz
                </h3>
                <p>
                  ihtiyackredisi.com, plazalarda çalışan uzak ve erişilmez bir ekip değil. Bizler; annesi babası için endişelenen, çocuğunun okul taksidini düşünen, evine yeni bir beyaz eşya alırken en uygun fiyatı arayan, kısacası sizin gibi gündelik hayatın içinde olan insanlarız.
                </p>
              </div>

              <p>
                Bu işe başlama hikayemiz de aslında tam olarak buradan çıktı. Kurucularımızdan birinin, ailesi için acilen bir sağlık desteğine ihtiyacı oldu. Bankaların karmaşık siteleri, birbirinden farklı faiz oranları, anlaşılması zor şartlar... O stresli ve hassas anda, ihtiyaç duyduğu şey basit, net ve güvenilir bir bilgiydi. O anı yaşadığı için, Türkiye'de daha birçok insanın aynı zorluklarla karşılaştığını fark etti. İşte o <em>"keşke biri bana bu karmaşayı anlatsa, yol gösterse"</em> hissi, bu platformun doğuşundaki en büyük ilham oldu.
              </p>

              <p>
                Bu yüzden her gün işe başlarken, ekibimizdeki her bir kişi şu soruyu sorar: <strong>"Bugün kaç kişinin hayatına dokunabiliriz? Kaç kişinin finansal endişesini biraz olsun hafifletebiliriz?"</strong>
              </p>

              <div>
                <blockquote className='relative bg-gradient-to-br from-slate-50 via-white to-slate-50/50 rounded-[20px] p-[28px] md:p-[36px] lg:p-[40px] my-[32px] md:my-[40px] shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50'>
                  <div className='absolute top-6 left-6 text-primary/20 text-6xl md:text-7xl font-serif leading-none'>"</div>
                  <div className='relative z-10'>
                    <h3 className='text-[20px] md:text-[22px] lg:text-[24px] font-bold text-slate-900 mb-[16px]'>
                      Misyonumuz: Karmaşayı Dağıtmak, Güveni İnşa Etmek
                    </h3>
                    <p className='text-[15px] md:text-[16px] text-slate-700 leading-relaxed pl-[8px]'>
                      Misyonumuzu tek bir cümleyle özetlemek gerekirse: <br /> <span className='text-primary font-semibold'>"Türkiye'deki her bireye, finansal okuryazarlık ve şeffaf bilgiyle güçlenmiş, stressiz bir borçlanma deneyimi sunmak."</span>
                    </p>
                  </div>
                  <div className='absolute bottom-6 right-6 text-primary/20 text-6xl md:text-7xl font-serif leading-none rotate-180'>"</div>
                </blockquote>
                <h4 className='text-[16px] md:text-[17px] font-extrabold text-slate-900 mb-[12px]'>
                  Bunu nasıl yapıyoruz?
                </h4>
                <ol className='list-decimal list-inside space-y-[16px] ml-[8px]'>
                  <li>
                    <strong>Anlaşılır Olmak, Her Zaman Önceliğimiz:</strong>
                    <br />
                    Bankacılık dünyası, <em>"faiz"</em>, <em>"KKDF"</em>, <em>"BSMV"</em>, <em>"vade"</em>, <em>"masraf"</em> gibi terimlerle dolu. Biz bu terimleri, mahalledeki bakkal amcanın anlayacağı bir dille açıklıyoruz. Amacımız, sizin bir finans profesörü gibi her şeyi bilmeniz değil, alacağınız kredinin sizin bütçenize ne yapacağını net bir şekilde görmeniz. <em>"Bu kredi aylık bütçeme ne kadar yük getirecek?"</em> sorusunun en net cevabını size vermek.
                  </li>
                  <li>
                    <strong>Tarafsız ve Şeffaf Bir Rehberiz:</strong>
                    <br />
                    Biz asla size <em>"Şu bankadan kredi çekin"</em> demeyiz. Çünkü sizin için en iyi seçenek, komşunuz için en iyi seçenek olmayabilir. Bizim görevimiz, tüm seçenekleri en anlaşılır haliyle önünüze sermek, artılarını ve eksilerini samimiyetle anlatmaktır. Kararı, tüm bilgileri öğrendikten sonra sizin vermeniz için çalışıyoruz. Bizim kazancımız, sizin doğru kararınızdan gelir. Siz doğru yaparsanız, bize olan güveniniz artar ve bu da bizi daha çok kişiye ulaştırır.
                  </li>
                  <li>
                    <strong>Sadece 'Şimdi'yi Değil, 'Geleceği' de Düşünürüz:</strong>
                    <br />
                    Bir kredi çekmek, sadece bugünü değil, önümüzdeki ayları, hatta yılları etkileyen bir karardır. Biz, sadece <em>"Hangi krediye başvurmalıyım?"</em> sorusuna değil, <em>"Bu krediyi çektikten sonra aylık bütçemi nasıl yönetmeliyim?"</em>, <em>"Birikim yapmaya nasıl devam edebilirim?"</em> gibi sorulara da cevap vermeye çalışıyoruz. Amacımız, sizi sadece bugün kurtarmak değil, yarınlara da güvenle hazırlamak.
                  </li>
                  <li>
                    <strong>Erişilebilir Olmak İstiyoruz:</strong>
                    <br />
                    Finansal ürünler çoğu zaman büyük şehirlerdeki, belirli bir gelir seviyesindeki insanlar için tasarlanmış gibi görünür. Oysa Türkiye'nin her köşesinde, her gelir seviyesinden insanın finansal ihtiyacı olabilir. Biz, teknolojinin gücünü kullanarak, Adana'dan Ardahan'a, İzmir'den Iğdır'a, herkesin aynı şeffaflıkla ve kolaylıkla bu bilgilere ulaşabilmesi için çalışıyoruz.
                  </li>
                </ol>
              </div>

              <div>
                <blockquote className='relative bg-gradient-to-br from-slate-50 via-white to-slate-50/50 rounded-[20px] p-[28px] md:p-[36px] lg:p-[40px] my-[32px] md:my-[40px] shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50'>
                  <div className='absolute top-6 left-6 text-primary/20 text-6xl md:text-7xl font-serif leading-none'>"</div>
                  <div className='relative z-10'>
                    <h3 className='text-[20px] md:text-[22px] lg:text-[24px] font-bold text-slate-900 mb-[16px]'>
                      Vizyonumuz: Türkiye'nin Finansal Refahına Dokunan Bir Marka Olmak
                    </h3>
                    <p className='text-[15px] md:text-[16px] text-slate-700 leading-relaxed pl-[8px]'>
                      Vizyonumuz, ihtiyackredisi.com denilince akıllara <strong className='text-primary'>"güven"</strong>, <strong className='text-primary'>"şeffaflık"</strong> ve <strong className='text-primary'>"dürüstlük"</strong> kelimelerinin gelmesi. Uzun vadeli hayalimiz, Türkiye'de finansal okuryazarlık denince akla gelen ilk, en sıcak ve en insani platform olmak.
                    </p>
                  </div>
                  <div className='absolute bottom-6 right-6 text-primary/20 text-6xl md:text-7xl font-serif leading-none rotate-180'>"</div>
                </blockquote>
                <h4 className='text-[16px] md:text-[17px] font-extrabold text-slate-900 mb-[12px]'>
                  Geleceği nasıl hayal ediyoruz?
                </h4>
                <ul className='space-y-[16px]'>
                  <li>
                    <strong>Kişiselleştirilmiş Bir Finansal Yoldaş:</strong> Hayalimiz, siz siteye her girdiğinizde sizi karşılayan, finansal geçmişinizi ve hedeflerinizi bilen, size özel tavsiyelerde bulunabilen, adeta sizinle sohbet eden bir asistan yaratmak. <em>"Merhaba Ayşe Hanım! Geçen araba kredisi araştırıyordunuz, size o konuda yeni çıkan bir kampanyayı gösterebilir miyim?"</em> diyebilen bir sistem.
                  </li>
                  <li>
                    <strong>Topluluk ve Dayanışma Ruhu:</strong> Sadece bir bilgi sitesi değil, aynı zamanda insanların birbirine deneyimlerini anlattığı, birbirine tavsiyelerde bulunduğu bir topluluk platformu olmak istiyoruz. Çünkü en iyi tavsiye, bazen uzmanlardan değil, o yolu daha önce yürümüş bir başka kişiden gelir.
                  </li>
                  <li>
                    <strong>Finansal Dışlanmaya Karşı Bir Çözüm Ortağı:</strong> <em>"Kredi notum düşük, bankalar bana kredi vermiyor"</em> diyen herkes için bir umut ışığı olmak istiyoruz. Bu kişileri finans sistemine kazandıracak alternatif çözümleri araştırıp, onlara da bir yol haritası çizebilmek en büyük amaçlarımızdan biri.
                  </li>
                  <li>
                    <strong>Nesiller Boyu Güven:</strong> Öyle bir marka olmak istiyoruz ki, bugün bir üniversite öğrencisi bize gelsin, ilk ihtiyaç kredisini bizim rehberliğimizde çeksin. Yıllar sonra ev alırken, araba alırken yine bize danışsın. Hatta bir gün, çocuğuna <em>"Alo kızım/oğlum, git şu ihtiyackredisi.com'a bak, her şeyi net anlatıyorlar"</em> desin. Nesiller boyu süren bir güven ilişkisi, bizim için en değerli ödül olacak.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='text-[18px] md:text-[20px] font-bold text-slate-900 mb-[12px]'>
                  Bizi Biz Yapan Değerler: İnsan, İnsan, Yine İnsan
                </h3>
                <p className='mb-[16px]'>
                  Tüm bu yaptıklarımızın altında yatan üç temel değerimiz var:
                </p>
                <ul className='space-y-[16px]'>
                  <li>
                    <strong>Empati:</strong> Her zaman kendimizi sizin yerinize koyarız. O stresli, telaşlı anınızı anlamaya çalışırız. Bu, içeriğimizin tonundan, sizinle kurduğumuz iletişimin şekline kadar her şeyi etkiler.
                  </li>
                  <li>
                    <strong>Dürüstlük:</strong> Bilmediğimiz bir şeyi asla uydurmayız. Eksik veya yanlış bilgi vermektense, <em>"Bunun cevabını araştırıp size dönelim"</em> demeyi tercih ederiz. Çünkü güven, kırıldı mı bir daha zor tamir olur.
                  </li>
                  <li>
                    <strong>Sadelik:</strong> Karmaşayı severiz ama yaratmayız. İşimiz, karmaşık olanı alıp, sizin için sade ve anlaşılır hale getirmektir. Bu, sadece yazılarımız için değil, sitemizin tasarımı ve kullanımı için de geçerlidir.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='text-[18px] md:text-[20px] font-bold text-slate-900 mb-[12px]'>
                  Sizin Hikayeniz Bizim İlhamımız
                </h3>
                <p>
                  Bu yolculukta en çok keyif aldığımız şey, sizden gelen dönüşler. <em>"Sayenizde ilk kez kredi çektim ve çok rahatım"</em>, <em>"Yazınızı okudum, kafamdaki tüm soru işaretleri gitti"</em> gibi mesajlar, bize kahve molalarımızda en çok anlattığımız, en çok gururlandığımız hikayeler oluyor.
                </p>
              </div>

              <p>
                Siz okurken, lütfen şunu bilin: Bu ekranın ardında, sizin hikayenize gerçekten değer veren, sizin başarınızı kendi başarısı gibi gören bir ekip var.
              </p>

              <p>
                Şimdi size küçük bir sır verelim: Biz aslında Google'a <em>"Lütfen bizi üst sıralara çıkar"</em> diye dilekçe yazmadık. Olan şey çok daha doğal ve güzel gelişti.
              </p>

              <p>
                Siz, burayı her ziyaret ettiğinizde, bir yazımızı okuduğunuzda, sayfamızda geçirdiğiniz her dakikada, aslında Google'a sessizce bir mesaj veriyorsunuz: <em>"Bak, buradaki bilgiler işime yarıyor. Bu site güvenilir ve değerli."</em>
              </p>

              <p>
                Google, bu sessiz mesajları okuyor. Sizin ve sizin gibi on binlerce kullanıcının davranışlarına bakıyor ve diyor ki: <em>"Demek ki bu site, insanların sorularına gerçekten cevap veriyor, onların problemini çözüyor. O halde, ben de 'ihtiyaç kredisi nasıl çekilir?' diye arayan birine, onu en doğru bilgiye ulaştıracak siteyi, yani sizi göstermeliyim."</em>
              </p>

              <p>
                Yani, bizi Google'ın önermesinin tek sebebi, sizin bizi sevmeniz ve sitenizde vakit geçirmeniz. Bu, en saf dijital demokrasi hali. Kaliteli ve samimi içerik üreten, kullanıcı deneyimini her şeyin önünde tutan her site, en nihayetinde bunun karşılığını alıyor.
              </p>

              <p>
                Biz her gün işe, <em>"Google için nasıl içerik üretiriz?"</em> diye değil, <em>"Bugün bir annenin, bir esnafın, bir öğrencinin finansal sıkıntısını nasıl hafifletebiliriz?"</em> diye sorarak başlıyoruz. İnanıyoruz ki, sizin güveninizi ve sevginizi kazandığımızda, Google'ın algoritması da zaten bunu takip edecektir.
              </p>

              <p>
                Bu, bizim için en anlamlı başarı ölçütü: Sıralamalarda birinci olmak değil, sizin gözünüzde birinci olmak. Siz bizi sevdiğiniz sürece, Google da bizi sevecek ve ihtiyacı olan birine önermeye devam edecek.
              </p>

              <p>
                Bize her zaman ulaşabilir, görüşlerinizi, eleştirilerinizi ve hikayelerinizi paylaşabilirsiniz. Burası sizin eviniz. Sizin bu evi her ziyaretiniz, buradaki bilgileri faydalı bulmanız, Google'a da bu güvenilir adresi diğer ihtiyaç sahiplerine önermesi için en güçlü işareti veriyor.
              </p>

              <p className='font-medium'>
                Yolumuza ışık olduğunuz için sonsuz teşekkürler.
              </p>

              <p className='font-medium'>
                İçtenlikle,<br />
                Hakan US - Kurucu
              </p>
            </div>
             
          </div>

          {/* Biz Kimiz? - Profesyonel Bilgilendirme */}
          <div className='bg-gradient-to-br from-slate-50 to-white rounded-[24px] border border-slate-200 p-[24px] md:p-[32px] lg:p-[40px] mb-[48px]'>
            <h2 className='text-[20px] md:text-[24px] lg:text-[28px] font-bold text-slate-900 mb-[24px] md:mb-[32px]'>
              ihtiyackredisi.com – Biz Kimiz?
            </h2>
            <div className='text-slate-700 text-[15px] leading-[24px] space-y-[24px] md:space-y-[32px]'>
              <div>
                <p className='mb-[16px]'>
                  Şeffaf karşılaştırma ile finansal kararlarınızı bilinçli almanız için buradayız işte. Biz, kredi ve mevduat gibi finansal ürünleri tek bir yerde, şeffaf ve karşılaştırılabilir bir şekilde sunmayı amaçlayan bağımsız bir platformuz. Amacımız belli: bankaların sunduklarını daha iyi anlamanız, koşulları net görmeniz ve kendi ihtiyacınıza en uygun olanı seçebilmeniz.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-[16px] md:text-[18px] text-slate-900 mb-[12px]'>
                  Ne yapıyoruz peki?
                </h3>
                <p className='mb-[12px]'>Aslında yaptığımız şey oldukça basit:</p>
                <ul className='list-disc list-inside space-y-[8px] ml-[8px]'>
                  <li>Bankaların kredi ve mevduat ürünlerini güncel verilerle listeliyoruz, an be an.</li>
                  <li>Oranları, vadeleri, koşulları karşılaştırmalı bir şekilde önünüze seriyoruz.</li>
                  <li>Hesaplama araçlarıyla kendi senaryonuzu test edebilirsiniz.</li>
                  <li>Bir de finansal terimleri sadeleştirip rehber içerikler hazırlıyoruz, bilginize.</li>
                </ul>
                <p className='mt-[12px]'>Tüm bunlar sadece bilgilendirme amaçlı. Kararı siz verin, biz sadece veriyi sunuyoruz.</p>
              </div>

              <div>
                <h3 className='font-semibold text-[16px] md:text-[18px] text-slate-900 mb-[12px]'>
                  Peki ne yapmıyoruz? Açık konuşalım:
                </h3>
                <ul className='list-disc list-inside space-y-[8px] ml-[8px]'>
                  <li>Kesinlikle banka adına kredi falan vermiyoruz.</li>
                  <li>Kredi onayı ya da reddi gibi bir yetkimiz yok.</li>
                  <li>Sizden para talep etmiyoruz, ücretsiz bu platform.</li>
                  <li>Reklam ya da ödemeyle sıralama değiştirmek gibi bir şey yok. Ha, bir kere daha söyleyelim: biz banka değiliz. Bağımsız bir karşılaştırma platformuyuz sadece.</li>
                </ul>
              </div>

              <div>
                <h3 className='font-semibold text-[16px] md:text-[18px] text-slate-900 mb-[12px]'>
                  Karşılaştırmalar nasıl yapılıyor?
                </h3>
                <p>
                  Objektif kriterlere göre yapılıyor. Faiz oranları, vade seçenekleri, maliyet kalemleri gibi etkenlere bakıyoruz. Detay merak edenler "Karşılaştırma Metodolojisi" sayfamıza göz atabilir.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-[16px] md:text-[18px] text-slate-900 mb-[12px]'>
                  Gelir modelimiz ve şeffaflık
                </h3>
                <p>
                  Platformun devamlılığı için bankalarla ticari iş birlikleri kurabiliyoruz evet. Ama bu, sıralamayı veya içeriği otomatikman etkilemiyor. Nasıl para kazandığımızı da gizlemiyoruz zaten, "Nasıl Para Kazanıyoruz?" sayfamızda her şey açık.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-[16px] md:text-[18px] text-slate-900 mb-[12px]'>
                  Neden bizi tercih ediyorlar?
                </h3>
                <p className='mb-[12px]'>Çünkü iddialardan öte, yaklaşımımız konuşuyor.</p>
                <ul className='list-disc list-inside space-y-[8px] ml-[8px]'>
                  <li>Karşılaştırma mantığı ortada.</li>
                  <li>Gelir modeli saklı değil.</li>
                  <li>Sizi satmaya değil, bilgilendirmeye odaklıyız.</li>
                  <li>Son karar her zaman size ait.</li>
                </ul>
                <p className='mt-[12px]'>"Neden Tercih Ediliyoruz" sayfamızda daha da detay var.</p>
              </div>

              <div>
                <h3 className='font-semibold text-[16px] md:text-[18px] text-slate-900 mb-[12px]'>
                  Gizlilik ve veri güvenliği
                </h3>
                <p>
                  Önceliğimiz sizin mahremiyetiniz. Kişisel verileriniz yürürlükteki yasalara uygun işleniyor. Detay için Gizlilik Politikası ve KVKK metinlerine bakabilirsiniz.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-[16px] md:text-[18px] text-slate-900 mb-[12px]'>
                  Amacımız net:
                </h3>
                <p>
                  Sizin daha bilinçli, daha karşılaştırmalı, daha şeffaf kararlar almanız. Bu yüzden içeriği sadeleştiriyoruz, yöntemleri anlatıyoruz, iddia etmek yerine nasıl çalıştığımızı gösteriyoruz.
                </p>
              </div>

              <div className='bg-amber-50 p-[16px] md:p-[20px] rounded-r-[8px]'>
                <p className='font-semibold text-slate-900 mb-[8px]'>Unutmayın lütfen:</p>
                <p className='text-slate-700'>
                  ihtiyackredisi.com'daki bilgiler kesinlikle yatırım veya kredi tavsiyesi değildir. Nihai karar her zaman sizin.
                </p>
              </div>
            <div className="flex items-center gap-[10px] mt-[20px]">
              <span className="italic text-primary font-semibold text-[15px] md:text-[16px] tracking-tight">
                ihtiyackredisi.com
              </span>
              <span className="text-slate-400 text-[20px] select-none">|</span>
              <span className="text-slate-500 font-medium text-[13px] md:text-[14px] tracking-tight">
              Türkiye’nin Kredi Karar Altyapısı
              </span>
            </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className='flex flex-col'>
          <HeadingComponent
            title='Ekibimiz'
            subtitle='Platformumuzu geliştiren, sizin için çalışan değerli ekip üyelerimiz'
            as='h2'
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[20px] md:gap-[24px]'>
            <TeamMemberCard
              name='Hakan US'
              role='Kurucu'
              description='Platformun kurucusu ve vizyon sahibi. Finansal şeffaflık ve kullanıcı odaklı yaklaşımıyla projeyi hayata geçirdi.'
              image='/general/teams/hakanUs.jpg'
              linkedinUrl='https://www.linkedin.com/in/hakan-us-724462127'
            />
            <TeamMemberCard
              name='Damlanur İpek ÖZDEMİR'
              role='Avukat'
              description='Hukuki danışmanlık ve yasal uyumluluk konularında uzman. Platformun yasal gerekliliklerini sağlıyor.'
              image='/general/teams/damlanurIpekOzdemir.jpg'
              linkedinUrl='https://www.linkedin.com/in/damlanur-ipek/'
            />
            <TeamMemberCard
              name='Altay Kececi'
              role='Full Stack Developer'
              description='Next.js ve modern web teknolojileri konusunda uzman. Platformumuzun teknik altyapısını ve arayüzünü geliştiriyor.'
              image='/general/teams/altaykececi.jpeg'
              linkedinUrl='https://www.linkedin.com/in/altaykececi'
            />
            <TeamMemberCard
              name='Oğuzhan UYANIK'
              role='Frontend Developer'
              description='Kullanıcı deneyimi ve arayüz tasarımı konusunda uzman. Platformun görsel ve interaktif yönlerini geliştiriyor.'
              image='/general/teams/oguzhanUyanik.jpg'
              linkedinUrl='https://www.linkedin.com/in/oguzhanuyanik/'
            /> 
            <TeamMemberCard
              name='Beyazıt Bestam ÇOBAN'
              role='Tasarım'
              description='Görsel tasarım ve kullanıcı arayüzü konusunda uzman. Platformun görsel kimliğini ve kullanıcı deneyimini şekillendiriyor.'
              image='/general/teams/beyazitCoban.jpg'
              behanceUrl='https://www.behance.net/beyazitdesign'
            />
            <TeamMemberCard
              name='Taha Kotil'
              role='Full Stack Developer'
              description='PHP ve otomasyon sistemleri konusunda uzman. Platformun otomasyon altyapısını geliştiriyor.'
              image='/general/teams/tahakotil.jpg'
              linkedinUrl='https://www.linkedin.com/in/tahakotil2'
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;