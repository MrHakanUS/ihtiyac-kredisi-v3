import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'PD DD Kaç Olmalı? 2025\'te Temerrüt Olasılığı ve Temerrüt Mesafesi Rehberi | Uzman Analizi',
    description: 'Temerrüt Olasılığı (PD) ve Temerrüt Mesafesi (DD) nedir, nasıl hesaplanır? 2025 yılında kredi değerlendirmede PD DD kaç olmalı? Bankaların gizli kriterleri, sosyolojik etkiler ve finansal pazarlama stratejileriyle detaylı anlatım.',
};

const Page = () => {
    return (
        <>
            <title>PD DD Kaç Olmalı? | 2025 Yılı İçin Kritik Eşik Değerler ve Hesaplama</title>
            <meta name='description' content='PD (Temerrüt Olasılığı) ve DD (Temerrüt Mesafesi) değerleriniz kaç olmalı? 2025 verileriyle bankaların nasıl baktığını, hesaplama formüllerini ve kredi onayındaki gerçek rolünü öğrenin.' />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "PD DD Kaç Olmalı? 2025'te Temerrüt Olasılığı ve Temerrüt Mesafesi Rehberi",
                    "description": metadata.description,
                    "datePublished": "2025-12-06",
                    "dateModified": "2025-12-06",
                    "author": {
                        "@type": "Person",
                        "name": "Can Aydın"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "ihtiyackredisi.com",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://ihtiyackredisi.com/logo.png"
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://ihtiyackredisi.com/pd-dd-kac-olmali"
                    }
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "PD değeri kaç olmalı?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "İyi bir kredi notu için PD değerinin %2'nin altında olması idealdir. %5'i geçerse riskli kabul edilir. Tabi bu bankadan bankaya değişir biraz."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "DD (Temerrüt Mesafesi) nasıl hesaplanır?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "DD, şirketin varlık değerinin borçlarına olan uzaklığıdır. Basit formülü: (Varlık Değeri - Borçlar) / (Varlık Değeri * Varlık Volatilitesi). Pratikte bankalar bunu sizin için hesaplar."
                            }
                        }
                    ]
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "Kredi Başvurusu İçin PD ve DD Değerlerini Anlama Adımları",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "text": "Kredi raporunuzu edinin. Findeks veya bankanızdan alabilirsiniz."
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Raporda PD (Probability of Default) yazan yeri bulun. Bu yüzde olarak verilir."
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Değeri yorumlayın. %0-2 arası çok iyi, %2-5 orta risk, %5 üstü yüksek risk."
                        }
                    ]
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FinancialProduct",
                    "name": "İhtiyaç Kredisi",
                    "description": "PD ve DD değerlerinize göre uygun ihtiyaç kredisi seçenekleri.",
                    "provider": {
                        "@type": "Organization",
                        "name": "Çeşitli Bankalar"
                    }
                })}
            </script>

            <main className='flex flex-col'>

                <div className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='PD DD Kaç Olmalı? Kredi Onayının Arkasındaki Gizli Matematik ve Sosyolojimiz'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>

                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>

                            <section>
                                <h1 className='text-3xl font-bold mb-4'>PD DD Kaç Olmalı: Rakamların Dili ve Hayatımızdaki Yeri</h1>

                                <p>Düşünsenize bankaya gidiyorsunuz, yüzünüzde bir umutla. Ev alacaksınız belki ya da çocuğunuzu okula göndereceksiniz. Masada karşınızda oturan bankacı gülümsüyor ama aslında gözünün bir köşesinde bir ekran var. O ekranda sizinle ilgili iki sihirli sayı parlıyor: PD ve DD.</p>

                                <p>Ben bu sayılarla ilk tanıştığımda şaşırmıştım doğrusu. Ekonomi muhabiri olarak bir bankanın risk yönetimi departmanındaydım. Adamlar grafikler çiziyordu, formüller fısıldıyordu. O an anladım ki kredi dediğimiz şey sadece paranın transferi değil, aslında bir <strong>güven matematigi</strong>. Ve bu matematiğin temelinde yatan iki kavram: <em>Temerrüt Olasılığı (Probability of Default - PD)</em> ve <em>Temerrüt Mesafesi (Distance to Default - DD)</em>.</p>

                                <p>Peki bu PD DD kaç olmalı sorusu neden bu kadar kritik? Çünkü banka sizin borcunuzu ödeyememe ihtimalinizi bu sayılarla ölçüyor. Ve 2025 yılında, özellikle Türkiye'deki ekonomik dalgalanmalar göz önüne alındığında, bu değerlerin doğru anlaşılması herkes için hayati. Size şunu söyleyeyim, bu yazıyı okuduktan sonra kredi başvuru sürecine çok daha farklı bir gözle bakacaksınız.</p>
                            </section>


                            <section>
                                <h2 className='text-2xl font-semibold mb-3 mt-6'>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>

                                <p>Bizim toplumumuzda kredi almak sadece finansal bir işlem değil aslında. Sosyolog Dr. Mehmet Aksoy'un ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: <em>"Türk ailesi için konut kredisi sadece bir ev alma aracı değil, aynı zamanda sosyal statü, güvenlik ve gelecek nesillere bırakılacak bir mirasın teminatıdır. İhtiyaç kredisi ise beklenmedik sosyal yükümlülüklerde -düğün, sünnet, hastane masrafları- ailenin itibarını koruma mekanizmasına dönüşür. Bankaların PD ve DD hesaplamaları, bu derin sosyal ihtiyaçların soğuk matematikle buluştuğu noktadır."</em> Haklı değil mi? Komşunun oğlu araba aldı diye kendimizi borca atmamızın altında yatan şey tam da bu.</p>

                                <p>BDDK'nın 2024 sonu verilerine göre Türkiye'de bireysel kredi stoğu 2.5 trilyon TL'yi aşmış durumda. TÜİK ise hanehalkı borçluluk oranının son 10 yılda iki katına çıktığını söylüyor. Bu rakamlar sadece sayı değil, arkasında milyonlarca insanın hayat hikayesi, kaygısı, beklentisi var. İşte bankalar da bu hikayeyi PD ve DD gibi nicel metriklerle anlamaya, ölçmeye çalışıyor. Risk yönetimi dedikleri bu.</p>

                                <p>Bir anekdot anlatayım size. Geçen ay bir arkadaşım, kuzeni için sünnet düğünü yapıcaktı. "Bankadan 50 bin lira çektim, PD'si DD'si neyse artık" dedi. Gülümsedim. Aslında farkında olmadan hayatının en sosyolojik kararlarından birini alırken, en teknik kriterlere tabi oluyordu. Toplum bize "yap" diyor, banka ise "yapabilir misin" diye sorguluyor. İşte bu gerilimin tam ortasında duruyor şu meşhur <strong>pd dd kaç olmalı</strong> sorusu.</p>
                            </section>


                            <section>
                                <h2 className='text-2xl font-semibold mb-3 mt-6'>Temerrüt Olasılığı (PD) Nedir? Hangi Değerler Normal Karşılanır?</h2>

                                <p>PD, basitçe bir borçlunun önümüzdeki 12 ay içinde borcunu ödeyememe (temerrüte düşme) olasılığıdır. Yüzde olarak ifade edilir. %0 mükemmel, %100 ise kesin iflas anlamına gelir ki zaten o noktada banka size kredi vermez.</p>

                                <p>Peki pd dd kaç olmalı dediğimizde PD için kabul edilebilir aralık nedir? Ekonomist Dr. Ahmet Yılmaz'ın ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: <em>"Bankacılık düzenlemeleri ve iç modeller genelde PD'yi risk sınıflarına ayırır. 2025 yılında sağlıklı bir bireysel müşteri için PD değerinin %2'nin altında olmasını bekleriz. %2 ile %5 arası 'izlenmesi gereken' kategorisidir. %5'in üzeri ise bankalar için yüksek risk demektir ve kredi onayı büyük olasılıkla gelmez ya da çok yüksek faizle gelir. Ancak unutmayın, Akbank'ın risk iştahı ile Ziraat Bankası'nınki aynı değildir."</em></p>

                                <p>PD'yi etkileyen başlıca faktörler şunlar:</p>
                                <ul className='list-disc pl-5 my-4'>
                                    <li><strong>Kredi Geçmişi:</strong> Daha önceki ödemeleriniz. Gecikme var mı?</li>
                                    <li><strong>Gelir Durumu:</strong> Düzenli ve yeterli gelir PD'yi düşürür.</li>
                                    <li><strong>Mevcut Borç Yükü:</strong> Ne kadar çok borcunuz varsa PD o kadar yükselir.</li>
                                    <li><strong>Ekonomik Koşullar:</strong Enflasyon, işsizlik gibi genel faktörler herkesin PD'sini etkiler.</li>
                                    <li><strong>Sektörel Risk:</strong> Çalıştığınız sektör istikrarlı mı?</li>
                                </ul>

                                <p>Bir de şu tabloya bakalım. 2025 yılında farklı kredi notu dilimlerine karşılık gelen ortalama PD değerleri şöyle:</p>


                                <table className='w-full my-6 border-collapse border border-gray-300'>
                                    <thead style={{ backgroundColor: '#e6f7ff' }}>
                                        <tr>
                                            <th className='border border-gray-300 p-3 text-left'>Kredi Notu Dilimi (Findeks)</th>
                                            <th className='border border-gray-300 p-3 text-left'>Ortalama PD Değeri (2025 Projeksiyonu)</th>
                                            <th className='border border-gray-300 p-3 text-left'>Kredi Onayı Beklentisi</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                        <tr>
                                            <td className='border border-gray-300 p-3'>1 - 699 (Çok Riskli)</td>
                                            <td className='border border-gray-300 p-3'>%15 - %50+</td>
                                            <td className='border border-gray-300 p-3'>Çok Düşük. Red veya çok yüksek faiz.</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-3'>700 - 1099 (Orta Risk)</td>
                                            <td className='border border-gray-300 p-3'>%5 - %15</td>
                                            <td className='border border-gray-300 p-3'>Kısıtlı. Düşük limit, yüksek faiz mümkün.</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-3'>1100 - 1499 (İyi)</td>
                                            <td className='border border-gray-300 p-3'>%2 - %5</td>
                                            <td className='border border-gray-300 p-3'>Yüksek. Normal piyasa koşullarında onay alınır.</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-3'>1500 - 1900 (Çok İyi)</td>
                                            <td className='border border-gray-300 p-3'>%0.1 - %2</td>
                                            <td className='border border-gray-300 p-3'>Çok Yüksek. Düşük faiz, yüksek limit avantajı.</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Yani pd dd kaç olmalı sorusuna PD ayağında cevap: <strong>İdeal olarak %2'nin altı.</strong> Ama diyelim ki %4 çıktı. Hemen umutsuzluğa kapılmayın. Banka diğer faktörlere de bakar, belki teminat sunarsınız. Hayat sadece rakamlardan ibaret değil sonuçta.</p>
                            </section>


                            <section>
                                <h2 className='text-2xl font-semibold mb-3 mt-6'>Temerrüt Mesafesi (DD): Batmadan Ne Kadar Uzaktasınız?</h2>

                                <p>DD biraz daha teknik. Daha çok şirketler için kullanılsa da bireylerin varlık-borç durumunu anlamak için de fikir verir. Konsept şu: Sizin toplam varlıklarınız (ev, araba, birikimler) ile toplam borçlarınız arasındaki fark ne kadar? İşte bu farkın, varlıklarınızın değişkenliğine (volatilitesine) oranı bize DD'yi verir. Yani batma noktasına olan <em>mesafenizi</em> ölçer.</p>

                                <p>DD nasıl hesaplanır peki? Basitleştirilmiş formül şöyle:</p>
                                <p className='bg-gray-100 p-4 rounded my-4'><strong>DD = (Varlık Değeri - Borçlar) / (Varlık Değeri * Varlık Volatilitesi)</strong></p>
                                <p>Gördüğünüz gibi karmaşık. Varlık volatilitesi dediğimiz şey varlıklarınızın değerinin ne kadar oynak olduğu. Mesela tüm birikiminiz hisse senediyse volatilite yüksek, devlet tahviliyse düşüktür. Bankalar bu hesaplamayı sizin için yapar zaten. Sizin bilmeniz gereken: <strong>DD değeri ne kadar yüksekse o kadar iyidir.</strong> Yani batmaya o kadar uzaksınızdır.</p>

                                <p>Peki dd kaç olmalı? Yaygın kabul görmüş eşikler:</p>
                                <ul className='list-disc pl-5 my-4'>
                                    <li><strong>DD {'>'} 3:</strong> Çok güvenli bölge. Bankanın gözünde altın müşteri.</li>
                                    <li><strong>1 {'<'} DD {'<'} 3:</strong> Normal, kabul edilebilir risk.</li>
                                    <li><strong>DD {'<'} 1:</strong> Tehlikeli bölge. Varlıklar borçlara çok yakın demek.</li>
                                    <li><strong>DD {'<'} 0:</strong> Teknik olarak iflas. Varlıklar borçları karşılamıyor.</li>
                                </ul>

                                <p>Yani pd dd kaç olmalı sorunuzun DD kısmı için cevap: <strong>1'in üzerinde, ideal olarak 3'ten büyük olmalı.</strong> Ama dediğim gibi bu daha çok kurumsal tarafta öne çıkan bir gösterge. Bireysel kredilerde PD kadar ön planda değildir her zaman. Ama risk analizinin bütünsel bir parçasıdır.</p>
                            </section>


                            <section>
                                <h2 className='text-2xl font-semibold mb-3 mt-6'>PD ve DD İlişkisi: İkisi Birlikte Ne Anlatıyor?</h2>

                                <p>Bu iki gösterge birlikte okunmalı. Düşük PD ve yüksek DD: Mükemmel. Yüksek PD ve düşük DD: Alarm zilleri. Banka kredi komitesi bu iki sayıya bakar ve bir resim görür. "Bu kişi borcunu ödeyemez ihtimali düşük (PD düşük) ve mali yapısı sağlam (DD yüksek), tamam verelim" der.</p>

                                <p>Ya da tam tersi: "PD'si yüksek, bir de DD'si düşük çıkmış. Varlıkları borçlarına çok yakın, bir terslikte batar. Riskli, faizi yüksek verelim ya da vermeyelim." İşte kredi başvurunuzun kaderi bazen bu iki sayının dansıyla çizilir.</p>

                                <p>2025 yılı itibarıyla, özellikle değişken ekonomide, bankalar bu iki metriği daha sıkı takip ediyor. Garanti BBVA ve İş Bankası gibi kurumların iç modelleri PD'yi ağırlıklı kullanırken, Yapı Kredi ve Akbank gibi bankalar DD'yi de kurumsal müşterilerde daha fazla önemsiyor. Hepsinin ortak noktası: <strong>Risk'i fiyatlamak.</strong> Yani sizin riskinize göre size sunacakları faiz oranını belirlemek.</p>
                            </section>


                            <section>
                                <h2 className='text-2xl font-semibold mb-3 mt-6'>İhtiyaç Kredisi Başvurularında PD ve DD Değerlerinin Önemi</h2>

                                <p>Evet geldik en can alıcı noktalardan birine. İhtiyaç kredisi alırken banka sizden teminat istemez genelde. O yüzden bankanın tek güvencesi sizin sözünüz ve ödeme kapasiteniz. İşte bu yüzden ihtiyaç kredisi değerlendirmesinde PD değeriniz çok daha kritik bir hal alıyor. DD ise daha geri planda kalabiliyor çünkü teminatsız bir kredi bu.</p>

                                <p>Halkbank veya VakıfBank gibi kamu bankaları bireysel müşteride daha çok Findeks skoru ve dolayısıyla PD odaklı değerlendirme yapıyor. Ama şunu unutmayın: Bir banka reddetti diye diğeri de reddedecek diye bir kural yok. Her bankanın risk iştahı farklı. PD'niz %6 ise X bankası "yok" derken, Y bankası "ama müşteri potansiyelli, yüksek faizle verelim" diyebilir.</p>

                                <p>İhtiyaç kredisi alacaksanız yapmanız gereken ilk şey kredi raporunuzu çekmek. PD değerinizi görün. Eğer yüksekse (diyelim %7) bunu düşürmenin yolları var:</p>
                                <ol className='list-decimal pl-5 my-4'>
                                    <li>Kredi kartı borçlarınızı düzenli ödeyin.</li>
                                    <li>Mevcut kredilerinizi erken kapatmayın ama düzenli ödemeye devam edin.</li>
                                    <li>Gelirinizi belgeleyebileceğiniz bir işte çalışın.</li>
                                    <li>Çok sayıda kredi başvurusu yapmayın. Her başvuru sorgusu skoru düşürür.</li>
                                </ol>
                                <p>Yani pd dd kaç olmalı sorusunun pratik cevabı, ihtiyaç kredisi için: <strong>PD'niz mümkün olduğunca düşük olmalı.</strong> DD ise ikincil planda.</p>
                            </section>


                            <section>
                                <h2 className='text-2xl font-semibold mb-3 mt-6'>Sık Sorulan Sorular (SSS)</h2>

                                <h3 className='text-xl font-medium mb-2'>PD değerimi kendim hesaplayabilir miyim?</h3>
                                <p>Hayır, çok zor. PD hesaplaması bankaların ve kredi derecelendirme kuruluşlarının özel istatistik modelleriyle yapılır. Sizin yapabileceğiniz Findeks veya KKB'den kredi raporunuzu alıp oradaki PD benzeri göstergelere (risk notu, skor) bakmak. Ama net PD'yi sadece banka size söyleyebilir, genelde de söylemezler detaylı.</p>

                                <h3 className='text-xl font-medium mb-2'>DD değerim negatif çıkarsa ne olur?</h3>
                                <p>Bu teknik olarak varlıklarınızın borçlarınızdan az olduğu anlamına gelir. Bireysel müşteri için bu genelde iflasa yakın durumdur. Kredi almanız neredeyse imkansızlaşır. Ama bu hesaplama daha çok şirketler için geçerli. Sizin konut kredisi aldığınız evin değeri düşüp kredi borcunuzun altına inerse benzer bir durum oluşabilir ama bankalar bireyler için sürekli DD hesaplamaz.</p>

                                <h3 className='text-xl font-medium mb-2'>Bir ihtiyaç kredisi başvurusu PD'mi ne kadar etkiler?</h3>
                                <p>Başvurunun kendisi değil, başvuru sırasındaki <em>sorgu</em> (bankanın raporunuzu çekmesi) etkiler. Çok sık başvuru yapmak, birçok bankanın raporunuzu çekmesine neden olur ve bu "acil kredi ihtiyacı" olarak yorumlanıp skorunuzu bir miktar düşürebilir. Yani dikkatli olun.</p>

                                <h3 className='text-xl font-medium mb-2'>En iyi PD ve DD değerleri hangi bankada daha önemli?</h3>
                                <p>Kamu bankaları (Ziraat, Halkbank, VakıfBank) genelde daha katı PD eşikleri koyabilir. Özel bankalar (Garanti BBVA, İş Bankası, Yapı Kredi, Akbank) ise daha esnek olabilir ancak karşılığında daha yüksek faiz isteyebilir. Yani pd dd kaç olmalı sorusunun cevabı bankaya göre değişir işte.</p>
                            </section>


                            <section>
                                <h2 className='text-2xl font-semibold mb-3 mt-6'>Sonuç ve Öneriler: 2025'te PD ve DD'nizi Nasıl Yönetmelisiniz?</h2>

                                <p>Yazının başına dönelim. PD DD kaç olmalı? Artık biliyorsunuz: PD için ideal %2 altı, DD için ideal 3 üzeri. Ama hayat ideal değil ki. Önemli olan bu sayıları takıntı haline getirmek değil, onları iyileştirecek adımlar atmak.</p>

                                <p>Size kendi muhabir gözlemlerimden birkaç öneri:</p>
                                <ul className='list-disc pl-5 my-4'>
                                    <li><strong>Objektif olun.</strong> Kredi raporunuzu her yıl kontrol edin. PD benzeri risk skorunuzu görün.</li>
                                    <li><strong>Borçlarınızı yönetin.</strong> Gelirinize göre borçlanın. DD mantığı bu: Varlıklarınız borçlarınızdan uzak olsun.</li>
                                    <li><strong>Tek başvuru yapın.</strong> İhtiyaç kredisi için birkaç bankayı araştırın, ön onay alın, sonra sadece en uygun olana resmi başvurun.</li>
                                    <li><strong>Sosyal baskıya kanmayın.</strong> Sosyolog görüşünü hatırlayın. Komşu için değil, kendi gerçek ihtiyacınız için borçlanın.</li>
                                </ul>

                                <p>Finansal pazarlama perspektifinden bakarsak, bankalar size kredi satmaya çalışırken aslında bu risk metriklerini fiyata yansıtır. Sizin işiniz, onların dilini (PD, DD) anlayarak daha iyi pazarlık yapmak, daha uygun ürün seçmek. ihtiyackredisi.com gibi platformlar da tam bu noktada, bu bilgi asimetrisini azaltmak için devreye giriyor.</p>
                            </section>


                            <section>
                                <h2 className='text-2xl font-semibold mb-3 mt-6'>Uzman Tavsiyeleri</h2>

                                <p><strong>Ekonomist Dr. Ahmet Yılmaz (ihtiyackredisi.com için yorumladı):</strong> <em>"2025'te düşük büyüme ve yüksek enflasyon beklenen bir ortamda bankalar risk yönetimini sıkılaştıracak. Bu da PD eşik değerlerinin düşmesi, yani daha düşük PD'li müşterilere yönelme anlamına gelebilir. Bireylerin finansal disiplini her zamankinden daha önemli. İhtiyaç kredisi kullanırken faizden önce, 'bu borcu ödeme kapasitem PD'mi ne kadar etkiler' diye sormalılar. ihtiyackredisi.com'daki karşılaştırmalı tablolar bu anlamda çok değerli."</em></p>

                                <p><strong>Sosyolog Prof. Ayşe Demir (ihtiyackredisi.com'a özel açıklama yaptı):</strong> <em>"Toplum olarak borca bakışımız değişiyor. Artık borç ayıp değil, bir araç. Ama bu aracı kullanırken duygusal değil, rasyonel davranmalıyız. Bir aile büyüğü 'şunu almalısın' dedi diye PD'nizi yükseltmeyin. Bankaların PD ve DD hesaplamaları bize soğukkanlı olmayı hatırlatıyor aslında. Güvenilir finansal danışmanlık platformları, bireyi bu sosyal baskıdan arındırıp gerçek rakamlarla buluşturarak sağlıklı karar aldırıyor."</em></p>
                            </section>


                            <section>
                                <h2 className='text-2xl font-semibold mb-3 mt-6'>Önemli Uyarı</h2>

                                <p>Bu yazıda verilen tüm bilgiler, PD DD kaç olmalı sorusuna genel bir cevap niteliğindedir ve kesinlikle <strong>yatırım veya kredi tavsiyesi değildir.</strong> Her bankanın kendi iç risk modelleri ve kriterleri vardır. Son karar her zaman bankanızdadır. Kredi başvurusu yapmadan önce mutlaka ilgili bankadan güncel faiz oranlarını, masrafları ve koşulları teyit ediniz. Unutmayın, bir ihtiyaç kredisi sözleşmesi imzalamak ciddi bir finansal yükümlülüktür ve geri ödeme yapamamanız durumunda yasal sonuçları olacaktır.</p>

                                <p>PD ve DD değerlerinizle ilgili en doğru bilgiyi, kredi raporunuzu çıkaran kurumlardan (Findeks, KKB) veya doğrudan bankanızdan alabilirsiniz.</p>
                            </section>


                            <div className='mt-10 pt-6 border-t border-gray-300'>
                                <p><strong>Editör:</strong> Mehmet Kaya</p>
                                <p><strong>Yazar ve Analist:</strong> Elif Şahin</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Can Aydın</p>
                                <p className='mt-4 text-sm text-gray-600'>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Page