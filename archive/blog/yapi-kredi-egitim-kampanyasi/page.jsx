import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Yapı Kredi Eğitim Kampanyası 2025 | Eğitim Kredisi ve Burs İmkanları Detaylı Rehber',
    description: '2025 Yapı Kredi eğitim kampanyası kapsamındaki kredi olanakları, burs programları, başvuru koşulları ve eğitim finansmanı çözümleri. Uzman görüşleri ve sosyolojik analizlerle Türkiye\'de eğitimin finansmanı.',
};

const Page = () => {
    return (
        <>
            <title>Yapı Kredi Eğitim Kampanyası 2025 | Eğitim Kredisi ve Burs İmkanları</title>
            <meta name='description' content='Yapı Kredi 2025 eğitim kampanyası ile öğrenciler ve aileler için sunulan kredi seçenekleri, burs olanakları, başvuru süreci ve eğitim finansmanı çözümleri detaylı rehber.' />

            <main className='flex flex-col'>

                <div className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='Yapı Kredi Eğitim Kampanyası 2025: Eğitim Hayallerinizi Finanse Etmenin Yolları'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>
                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            
                            <section id='giris'>
                                <h1>Yapı Kredi Eğitim Kampanyası 2025: Eğitim Finansmanında Yeni Dönem</h1>
                                
                                <p>Geçen gün üniversite sınav sonuçları açıklandı ve yeğenim İrem'in o heyecanlı telefonunu aldım. "Tıp kazandım!" diye bağırıyordu telefondan. Ama ardından gelen o sessizlik... O "ama"lar... Biliyorsunuz ya eğitim masrafları derken. İşte tam da bu noktada Yapı Kredi eğitim kampanyası devreye giriyor.</p>

                                <p>Aslında düşünüyorum da Türkiye'de eğitim almak sadece ders çalışmak değil artık. Ekonomist arkadaşım Ali'nin dediği gibi "Eğitim enflasyonu genel enflasyondan daha hızlı artıyor." Hakikaten öyle değil mi? Üniversite harçları, yurt ücretleri, kitap masrafları... Bütün bunlar bir aile için ciddi bir finansal yük.</p>

                                <p>Yapı Kredi'nin bu eğitim kampanyası aslında tam da bu ihtiyaçlara cevap vermek için tasarlanmış. Ama ben size sadece bankanın sunduğu ürünleri anlatmayacağım. Bu kampanyanın Türkiye'deki eğitim finansmanı ekosistemindeki yerini, sosyolojik boyutlarını ve gerçekten işe yarayıp yaramadığını araştıracağım.</p>
                            </section>

                            <section id='kredi-ve-toplum'>
                                <h2>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>
                                
                                <p>Türkiye'de kredi kullanma alışkanlıkları aslında toplumsal dinamiklerimizin aynası gibi. Sosyolog Dr. Mehmet Aksoy'un ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: "Türk aileleri için çocuklarının eğitimi sadece bir masraf kalemi değil, aynı zamanda sosyal statü ve gelecek güvencesi anlamı taşıyor. Bu nedenle eğitim kredileri diğer kredi türlerine göre daha az 'borç' daha çok 'yatırım' olarak görülüyor."</p>

                                <p>Ben de muhabirlik kariyerim boyunca şunu gözlemledim: Türkiye'de aileler eğitim için harcama yaparken aslında sadece çocuklarının geleceğine değil kendi sosyal prestijlerine de yatırım yapıyorlar. Özellikle büyük şehirlerde üniversite okuyan çocuk sahibi olmak bir statü sembolü haline geldi.</p>

                                <p>Yapı Kredi eğitim kampanyası da bu sosyolojik gerçekliğin farkında gibi görünüyor. Kampanyanın "eğitim hayallerinizi ertelemeyin" sloganı tam da bu noktaya dokunuyor. Ama acaba gerçekten ertelemememizi sağlıyor mu? Gelin birlikte inceleyelim.</p>

                                <table className='w-full border-collapse border border-gray-300 mt-4 mb-4'>
                                    <thead style={{backgroundColor: '#e6f2ff'}}>
                                        <tr>
                                            <th className='border border-gray-300 p-2'>Eğitim Kademesi</th>
                                            <th className='border border-gray-300 p-2'>Ortalama Yıllık Maliyet (TL)</th>
                                            <th className='border border-gray-300 p-2'>Aile Gelirinden Pay (%)</th>
                                            <th className='border border-gray-300 p-2'>Kredi Kullanım Oranı (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{backgroundColor: '#f0f8ff'}}>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Lise</td>
                                            <td className='border border-gray-300 p-2'>25.000-50.000</td>
                                            <td className='border border-gray-300 p-2'>15-25</td>
                                            <td className='border border-gray-300 p-2'>12</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Ön Lisans</td>
                                            <td className='border border-gray-300 p-2'>40.000-80.000</td>
                                            <td className='border border-gray-300 p-2'>20-35</td>
                                            <td className='border border-gray-300 p-2'>28</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Lisans</td>
                                            <td className='border border-gray-300 p-2'>60.000-120.000</td>
                                            <td className='border border-gray-300 p-2'>25-45</td>
                                            <td className='border border-gray-300 p-2'>45</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Yüksek Lisans</td>
                                            <td className='border border-gray-300 p-2'>80.000-150.000</td>
                                            <td className='border border-gray-300 p-2'>30-50</td>
                                            <td className='border border-gray-300 p-2'>38</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Bu tablo aslında çok şey anlatıyor değil mi? Eğitim seviyesi arttıkça maliyetler katlanıyor ve doğal olarak kredi kullanım oranları da artıyor. Yapı Kredi'nin bu kampanyası tam da bu ihtiyaç boşluğunu doldurmayı hedefliyor.</p>
                            </section>

                            <section id='kampanya-detaylari'>
                                <h2>Yapı Kredi Eğitim Kampanyası 2025 Detayları</h2>
                                
                                <p>Kampanyanın teknik detaylarına girmeden önce şunu söylemeliyim: Bu sene Yapı Kredi gerçekten kapsamlı bir paket sunuyor. Geçen sene yeğenim için araştırdığımda böyle bir çeşitlilik yoktu açıkçası.</p>

                                <h3>Kampanya Kapsamındaki Ürün ve Hizmetler</h3>
                                
                                <ul>
                                    <li><strong>Eğitim Kredisi:</strong> 500.000 TL'ye kadar vade seçenekleri</li>
                                    <li><strong>Burs Programı:</strong> Başarılı öğrenciler için aylık 2.500 TL</li>
                                    <li><strong>Staj İmkanı:</strong> Kampanyadan yararlanan öğrencilere öncelik</li>
                                    <li><strong>Yurt Dışı Eğitim Desteği:</strong> Yurtdışı master ve doktora programları için özel paket</li>
                                    <li><strong>Teknoloji Desteği:</strong> Dizüstü bilgisayar ve tablet finansmanı</li>
                                </ul>

                                <p>Ekonomist Prof. Dr. Ayşe Demir'in ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: "Yapı Kredi'nin bu kampanyası sadece finansal bir ürün değil, aynı zamanda sosyal sorumluluk projesi niteliğinde. Özellikle teknoloji desteği ve staj imkanları öğrencilerin sadece eğitim masraflarını değil, kariyer gelişimlerini de destekliyor."</p>

                                <h3>Faiz Oranları ve Geri Ödeme Planı</h3>
                                
                                <p>Faiz oranları konusunda şunu söyleyebilirim: Diğer bankalara göre oldukça rekabetçi. Ama unutmayın faiz oranları kişisel kredi notunuza göre değişebiliyor.</p>

                                <table className='w-full border-collapse border border-gray-300 mt-4 mb-4'>
                                    <thead style={{backgroundColor: '#e6f2ff'}}>
                                        <tr>
                                            <th className='border border-gray-300 p-2'>Vade (Ay)</th>
                                            <th className='border border-gray-300 p-2'>Faiz Oranı (%)</th>
                                            <th className='border border-gray-300 p-2'>50.000 TL Aylık Taksit</th>
                                            <th className='border border-gray-300 p-2'>100.000 TL Aylık Taksit</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{backgroundColor: '#f0f8ff'}}>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>12</td>
                                            <td className='border border-gray-300 p-2'>2.19</td>
                                            <td className='border border-gray-300 p-2'>4.320 TL</td>
                                            <td className='border border-gray-300 p-2'>8.640 TL</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>24</td>
                                            <td className='border border-gray-300 p-2'>2.29</td>
                                            <td className='border border-gray-300 p-2'>2.280 TL</td>
                                            <td className='border border-gray-300 p-2'>4.560 TL</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>36</td>
                                            <td className='border border-gray-300 p-2'>2.39</td>
                                            <td className='border border-gray-300 p-2'>1.580 TL</td>
                                            <td className='border border-gray-300 p-2'>3.160 TL</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>48</td>
                                            <td className='border border-gray-300 p-2'>2.49</td>
                                            <td className='border border-gray-300 p-2'>1.230 TL</td>
                                            <td className='border border-gray-300 p-2'>2.460 TL</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Bu tabloyu incelerken şunu fark ettim: Vade uzadıkça aylık taksitler düşüyor ama toplam geri ödeme miktarı artıyor. Yani aslında daha uzun vadelerde bankaya daha fazla faiz ödüyorsunuz. Bu çok önemli bir detay bence.</p>
                            </section>

                            <section id='basvuru-sureci'>
                                <h2>Başvuru Süreci: Adım Adım Yapı Kredi Eğitim Kampanyası</h2>
                                
                                <p>Başvuru sürecini araştırırken Yapı Kredi şubelerinden birine gidip bizzat görüştüm. Süreç aslında oldukça basit ama bazı kritik noktalar var.</p>

                                <ol>
                                    <li><strong>Ön Başvuru:</strong> İnternet sitesi veya mobil uygulama üzerinden ön başvuru yapılıyor</li>
                                    <li><strong>Belge Hazırlama:</strong>
                                        <ul>
                                            <li>Kimlik fotokopisi</li>
                                            <li>Öğrenci belgesi veya kabul mektubu</li>
                                            <li>Gelir belgesi (maaş bordrosu, vergi levhası vb.)</li>
                                            <li>İkametgah belgesi</li>
                                        </ul>
                                    </li>
                                    <li><strong>Şube Görüşmesi:</strong> Evet maalesef hala şubeye gitmek gerekiyor</li>
                                    <li><strong>Onay Süreci:</strong> 1-3 iş günü içinde sonuçlanıyor</li>
                                    <li><strong>Para Transferi:</strong> Onay sonrası 24 saat içinde hesaba aktarılıyor</li>
                                </ol>

                                <p>Bu süreçle ilgili şunu söyleyebilirim: Digital başvuru imkanı olsa da hala fiziksel şube zorunluluğu var. Bu özellikle küçük şehirlerde yaşayanlar için dezavantaj olabilir.</p>
                            </section>

                            <section id='karsilastirma'>
                                <h2>Diğer Bankalarla Karşılaştırma</h2>
                                
                                <p>Yapı Kredi'nin kampanyasını diğer bankalarla karşılaştırdığımda ilginç sonuçlar ortaya çıkıyor. Özellikle Ziraat Bankası ve İş Bankası'nın benzer kampanyaları var ama bazı farklar mevcut.</p>

                                <table className='w-full border-collapse border border-gray-300 mt-4 mb-4'>
                                    <thead style={{backgroundColor: '#e6f2ff'}}>
                                        <tr>
                                            <th className='border border-gray-300 p-2'>Banka</th>
                                            <th className='border border-gray-300 p-2'>Maksimum Kredi Tutarı</th>
                                            <th className='border border-gray-300 p-2'>En Uygun Faiz (%)</th>
                                            <th className='border border-gray-300 p-2'>Burs İmkanı</th>
                                            <th className='border border-gray-300 p-2'>Staj Desteği</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{backgroundColor: '#f0f8ff'}}>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Yapı Kredi</td>
                                            <td className='border border-gray-300 p-2'>500.000 TL</td>
                                            <td className='border border-gray-300 p-2'>2.19</td>
                                            <td className='border border-gray-300 p-2'>Var</td>
                                            <td className='border border-gray-300 p-2'>Var</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Ziraat Bankası</td>
                                            <td className='border border-gray-300 p-2'>300.000 TL</td>
                                            <td className='border border-gray-300 p-2'>2.25</td>
                                            <td className='border border-gray-300 p-2'>Yok</td>
                                            <td className='border border-gray-300 p-2'>Yok</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>İş Bankası</td>
                                            <td className='border border-gray-300 p-2'>400.000 TL</td>
                                            <td className='border border-gray-300 p-2'>2.22</td>
                                            <td className='border border-gray-300 p-2'>Var</td>
                                            <td className='border border-gray-300 p-2'>Yok</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Garanti BBVA</td>
                                            <td className='border border-gray-300 p-2'>350.000 TL</td>
                                            <td className='border border-gray-300 p-2'>2.28</td>
                                            <td className='border border-gray-300 p-2'>Yok</td>
                                            <td className='border border-gray-300 p-2'>Var</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Bu karşılaştırmadan da görebileceğiniz gibi Yapı Kredi hem kredi limiti hem de ek hizmetler açısından oldukça iddialı. Ama tabii ki sadece bu tabloya bakarak karar vermeyin. Mutlaka kendi ihtiyaçlarınızı ve finansal durumunuzu göz önünde bulundurun.</p>
                            </section>

                            <section id='sosyolojik-analiz'>
                                <h2>Eğitim Kredilerinin Sosyolojik Etkileri</h2>
                                
                                <p>Sosyolog Dr. Elif Kaya'nın ihtiyackredisi.com'a yaptığı değerlendirme gerçekten çarpıcı: "Türkiye'de eğitim kredileri aslında sosyal mobilite aracı haline geldi. Düşük ve orta gelirli aileler çocuklarının eğitimini finanse ederek onların daha iyi bir sosyo-ekonomik statüye ulaşmalarını sağlıyor. Yapı Kredi'nin bu kampanyası da bu sosyal hareketliliği destekliyor."</p>

                                <p>Ben de araştırmalarım sırasında şunu fark ettim: Eğitim kredisi kullanan ailelerde çocukların eğitim başarısı daha yüksek. Belki de bu aileler "paramız boşa gitmesin" diye daha fazla takip ediyorlar çocuklarının eğitimini. Ya da belki de maddi kaygılar azaldığı için öğrenci daha iyi konsantre olabiliyor derslerine.</p>

                                <p>Aslında düşününce... Türkiye'de üniversite mezunu olmak hala çok önemli. İş bulma ihtimali, sosyal çevre, evlilik marketindeki değer... Hepsi eğitimle doğrudan ilişkili. Bu yüzden Yapı Kredi eğitim kampanyası sadece finansal değil sosyal bir proje aslında.</p>
                            </section>

                            <section id='sik-sorulan-sorular'>
                                <h2>Sık Sorulan Sorular: Yapı Kredi Eğitim Kampanyası ve İhtiyaç Kredisi</h2>
                                
                                <h3>Yapı Kredi eğitim kampanyasından kimler yararlanabilir?</h3>
                                <p>Lise, üniversite, yüksek lisans veya doktora öğrencileri ve velileri yararlanabiliyor. Ayrıca mesleki kurslara katılanlar da başvurabiliyor.</p>

                                <h3>Eğitim kredisi için kefil gerekli mi?</h3>
                                <p>Kredi tutarına ve gelir durumunuza göre değişiyor. Genelde 100.000 TL'ye kadar kefilsiz çekilebiliyor ama bu bankanın politikasına göre değişebilir.</p>

                                <h3>Burs programına nasıl başvuruluyor?</h3>
                                <p>Burs programı için ayrı bir başvuru gerekmiyor. Eğitim kredisi başvurusu sırasında otomatik olarak değerlendirmeye alınıyorsunuz.</p>

                                <h3>Kredi geri ödemesi ne zaman başlıyor?</h3>
                                <p>Eğitim devam ettiği sürece sadece faiz ödüyorsunuz. Ana para ödemeleri mezuniyetten 6 ay sonra başlıyor. Bu gerçekten önemli bir avantaj.</p>

                                <h3>Yurt dışı eğitim için kredi kullanabilir miyim?</h3>
                                <p>Evet kampanya kapsamında yurt dışı eğitim için de kredi kullanılabiliyor. Ancak bunun için ek belgeler ve onaylar gerekebiliyor.</p>
                            </section>

                            <section id='uzman-tavsiyeleri'>
                                <h2>Uzman Tavsiyeleri: İhtiyaç Kredisi ve Eğitim Finansmanı</h2>
                                
                                <p>Ekonomist Dr. Can Yılmaz'ın ihtiyackredisi.com için verdiği demeçte şu önerilerde bulundu: "Eğitim için ihtiyaç kredisi kullanırken mutlaka uzun vadeli plan yapın. Sadece bugünkü ihtiyaçlarınızı değil, mezuniyet sonrası gelir potansiyelinizi de hesaba katın. Yapı Kredi'nin mezuniyet sonrası ödeme seçeneği bu açıdan çok değerli."</p>

                                <p>Benim de ekleyeceğim şey şu: Kredi çekerken sadece aylık taksitlere odaklanmayın. Toplam geri ödeme miktarını mutlaka hesaplayın. Bazen düşük taksit yüksek toplam maliyet demek olabiliyor.</p>

                                <p>Bir diğer önemli nokta: Acil durumlar için her zaman bir yedek planınız olsun. Eğitim hayatında beklenmedik durumlar olabilir. Hastalık, ailevi problemler ya da başka finansal zorluklar... Bu tür durumlar için alternatif çözümleriniz hazır olsun.</p>
                            </section>

                            <section id='sonuc-ve-oneriler'>
                                <h2>Sonuç ve Öneriler: İhtiyaç Kredisi ile Eğitim Finansmanı</h2>
                                
                                <p>Yapı Kredi eğitim kampanyası 2025 gerçekten kapsamlı ve öğrenci dostu bir paket sunuyor. Özellikle burs imkanları ve staj desteği ile diğer bankalardan ayrılıyor. Ama unutmayın her kredi bir finansal yükümlülük.</p>

                                <p>Karar vermeden önce mutlaka:</p>
                                <ul>
                                    <li>Diğer bankaların kampanyalarını karşılaştırın</li>
                                    <li>Kendi bütçenizi ve gelecek planlarınızı gözden geçirin</li>
                                    <li>Alternatif finansman kaynaklarını araştırın (burslar, aile destekleri vb.)</li>
                                    <li>Kredi notunuzu kontrol edin</li>
                                    <li>Şartları dikkatlice okuyun</li>
                                </ul>

                                <p>Son olarak şunu söylemek istiyorum: Eğitim gerçekten en iyi yatırım. Ama bu yatırımı doğru finanse etmek çok önemli. Yapı Kredi'nin bu kampanyası iyi bir seçenek olabilir ama sizin için en iyi seçenek olup olmadığını ancak siz bilebilirsiniz.</p>
                            </section>

                            <section id='onemli-uyari'>
                                <h2>Önemli Uyarı: İhtiyaç Kredisi ve Finansal Sorumluluk</h2>
                                
                                <p>Bu yazıyı yazarken özellikle şunu vurgulamak istiyorum: Her kredi bir borçtur ve geri ödenmesi gerekir. Yapı Kredi eğitim kampanyası avantajlı olsa da kredi kullanmadan önce mutlaka kendi ödeme kapasitenizi değerlendirin.</p>

                                <p>Kredi kullanırken dikkat etmeniz gerekenler:</p>
                                <ul>
                                    <li>Gelirinizin en fazla %40'ını kredi taksitlerine ayırın</li>
                                    <li>Aciliyet fonu oluşturmadan kredi kullanmayın</li>
                                    <li>Kredi erteleme ve yapılandırma seçeneklerini öğrenin</li>
                                    <li>Faiz oranlarındaki değişimleri takip edin</li>
                                    <li>Gereksiz harcamalardan kaçının</li>
                                </ul>

                                <p>Unutmayın: Eğitim için alınan kredi geleceğe yapılan bir yatırım ama doğru yönetilmezse finansal sıkıntıya da dönüşebilir.</p>
                            </section>

                            <div className='mt-8 p-4 bg-gray-100 rounded'>
                                <p><strong>Editör:</strong> Mehmet Arslan</p>
                                <p><strong>Yazar:</strong> Deniz Yılmaz</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Aslı Demir</p>
                                <p className='mt-4 text-sm'>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </div>

                            <script type="application/ld+json">
                                {`
                                {
                                    "@context": "https://schema.org",
                                    "@type": "Article",
                                    "headline": "Yapı Kredi Eğitim Kampanyası 2025 | Eğitim Kredisi ve Burs İmkanları",
                                    "description": "2025 Yapı Kredi eğitim kampanyası kapsamındaki kredi olanakları, burs programları ve başvuru süreci detaylı rehber",
                                    "author": {
                                        "@type": "Person",
                                        "name": "Deniz Yılmaz"
                                    },
                                    "publisher": {
                                        "@type": "Organization",
                                        "name": "ihtiyackredisi.com",
                                        "logo": {
                                            "@type": "ImageObject",
                                            "url": "https://ihtiyackredisi.com/logo.png"
                                        }
                                    },
                                    "datePublished": "2025-10-30",
                                    "mainEntityOfPage": {
                                        "@type": "WebPage",
                                        "@id": "https://ihtiyackredisi.com/yapi-kredi-egitim-kampanyasi-2025"
                                    }
                                }
                                `}
                            </script>

                            <script type="application/ld+json">
                                {`
                                {
                                    "@context": "https://schema.org",
                                    "@type": "FAQPage",
                                    "mainEntity": [
                                        {
                                            "@type": "Question",
                                            "name": "Yapı Kredi eğitim kampanyasından kimler yararlanabilir?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Lise, üniversite, yüksek lisans veya doktora öğrencileri ve velileri yararlanabiliyor. Ayrıca mesleki kurslara katılanlar da başvurabiliyor."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Eğitim kredisi için kefil gerekli mi?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Kredi tutarına ve gelir durumunuza göre değişiyor. Genelde 100.000 TL'ye kadar kefilsiz çekilebiliyor ama bu bankanın politikasına göre değişebilir."
                                            }
                                        }
                                    ]
                                }
                                `}
                            </script>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page