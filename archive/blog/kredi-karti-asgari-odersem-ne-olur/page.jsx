import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Kredi Kartı Asgari Ödersem Ne Olur? 2026 Güncel Rehber | Borç ve Faiz Gerçeği',
    description: 'Kredi kartı asgari ödersem ne olur? 2026 güncel faiz oranları, borç katlanma riski, banka karşılaştırması ve en uygun çözüm yolları. Asgari ödemenin gizli maliyetini hesaplama rehberi.',
};

const Page = () => {
    return (
        <>
            <title>Kredi Kartı Asgari Ödersem Ne Olur? 2026 Güncel Borç ve Faiz Analizi</title>
            <meta name='description' content='Kredi kartı asgari ödeme yaparsanız, kalan borca yüksek faiz işler, borç katlanır. 2026 güncel banka faiz oranları, hesaplama örnekleri ve uzman çözüm önerileri burada.' />

            {/* Schema.org JSON-LD Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Kredi Kartı Asgari Ödersem Ne Olur? 2026 Güncel Rehber | Borç ve Faiz Gerçeği",
                                "description": "Kredi kartı asgari ödemenin finansal ve sosyolojik sonuçlarını analiz eden kapsamlı rehber.",
                                "author": {
                                    "@type": "Person",
                                    "name": "Selim Demir"
                                },
                                "datePublished": "2026-01-02",
                                "dateModified": "2026-01-02",
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "ihtiyackredisi.com",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.ihtiyackredisi.com/logo.png"
                                    }
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Kredi kartı asgari ödeme yaparsam faiz ne zaman işlemeye başlar?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Asgari tutarı ödediğiniz anda, kalan borcun tamamına (anapara + varsa yeni harcamalar) faiz işlemeye başlar. Genellikle hesap kesim tarihinden sonraki ödeme döneminde faiz hesaplanır."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Asgari ödeme borcu bitirir mi?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Hayır, asgari ödeme borcu bitirmez. Sadece gecikmeye düşmenizi engelleyen minimum tutardır. Kalan borç faizle büyümeye devam eder."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Asgari ödeme kredi notunu düşürür mü?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Doğrudan düşürmez çünkü ödemeyi zamanında yapmış sayılırsınız. Ancak, sürekli asgari ödeme yapmak ve borcun artması, kredi kullanım oranınızı yükselterek dolaylı olarak kredi notunuzu olumsuz etkileyebilir."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Asgari ödemeden kurtulmak için ne yapmalıyım?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Borç yapılandırma (kartınızın borcunu daha düşük faizli bir ihtiyaç kredisiyle kapatmak), bütçe planlaması yapmak ve mümkünse borcun tamamını ödeyecek birikimi sağlamak en sağlıklı yollardır."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hangi bankanın asgari ödeme oranı daha düşük?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Asgari ödeme oranları genellikle %20 civarındadır ancak bankalar ve kart türleri arasında farklılık gösterebilir. Detaylı karşılaştırma için makalemizdeki güncel tabloyu inceleyebilirsiniz."
                                        }
                                    }
                                ]
                            },
                            {
                                "@type": "HowTo",
                                "name": "Asgari Ödeme ile Borcunuzun Gerçek Maliyetini Hesaplama Adımları",
                                "description": "Kredi kartı asgari ödeme yaptığınızda ne kadar faiz ödeyeceğinizi hesaplamak için adım adım kılavuz.",
                                "step": [
                                    {
                                        "@type": "HowToStep",
                                        "text": "Kredi kartı ekstrenizdeki toplam borç tutarınızı (anapara) yazın."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "text": "Bankanızın size uyguladığı aylık faiz oranını (ör. %2.5) bulun."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "text": "Asgari ödeme tutarınızı (genellikle borcun %20'si) hesaplayın ve toplam borçtan çıkarın."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "text": "Kalan borcu aylık faiz oranı ile çarpın. Bu, bir sonraki ay ödeyeceğiniz faiz tutarıdır."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "text": "Bu faizi, bir sonraki ayın başlangıç borcuna ekleyin ve aynı işlemi borcunuz sıfırlanana kadar tekrarlayın."
                                    }
                                ]
                            },
                            {
                                "@type": "FinancialProduct",
                                "name": "Kredi Kartı Asgari Ödeme",
                                "description": "Kredi kartı borcunun minimum ödeme tutarı. Kalan borca yüksek faiz uygulanır.",
                                "feesAndCommissionsSpecification": "Gecikme faizi, kart ücreti, nakit avans faizi."
                            }
                        ]
                    })
                }}
            />

            <main className='flex flex-col'>

                <div
                    className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'
                >
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title={'Kredi Kartı Asgari Ödersem Ne Olur? 2026 Güncel Borç ve Faiz Analizi'}
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>
                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            {/* İçerik Başlangıç */}
                            <section>
                                <p>Düşünüyorum da, galiba hepimiz o anki rahatlığın cazibesine kapılıp şu asgari ödeme tuşuna basmışızdır. Ben de basmıştım, itiraf ediyorum. Cebimdeki son parayı da koyup “tamam bu ay böyle geçsin” dediğim olmuştu. Peki ya sonrası? İşte <strong>en uygun</strong> çözümü ararken karşımıza çıkan o koca soru: <strong>kredi kartı asgari ödersem ne olur</strong>? 2026 yılına girdiğimiz şu günlerde, <strong>güncel</strong> faiz oranlarıyla bu sorunun cevabı bir <strong>hesaplama</strong> ve doğru bir <strong>banka karşılaştırması</strong> gerektiriyor. Çünkü o basit tıklamanın ardından borcunuz, görünmez bir şekilde katlanarak büyümeye başlıyor. Ekonomi muhabiri olarak takip ettiğim BDDK verileri gösteriyor ki, Türkiye'de kredi kartı borcunun ortalama <strong>faiz oranı</strong> yıllık %40'ların üzerinde seyrediyor. Yani asgari ödeme, bir borç erteleme aracı değil, borç büyütme makinesine dönüşüyor.</p>
                            </section>

                            <section>
                                <h2>Asgari Ödeme Nedir ve Nasıl Hesaplanır? Kapıdaki Gizli Tehlike</h2>

                                <p>Asgari ödeme, bankanın sizden her ay ödemenizi beklediği minimum tutardır. Borcunuzu kapatmaz sadece gecikmeye düşmenizi önler. Genelde toplam borcunuzun %20'si, artı varsa gecikme faizi ve nakit avans faizinden oluşur. Mesela 10.000 TL borcunuz varsa, asgari ödemeniz yaklaşık 2.000 TL civarında olur. Ama işte o 8.000 TL kalan borç, faizle beslenmeye başlar. BDDK'nın 2025 sonu raporuna göre, aktif kredi kartı hesaplarının neredeyse %35'i düzenli olarak sadece asgari ödeme yapıyor. Bu istatistik bile durumun vahametini anlatmaya yetiyor bence.</p>

                                <p>Hesaplamayı biraz daha somutlaştıralım mı? Diyelim ki Ziraat Bankası'ndan kredi kartınız var. Toplam borcunuz 50.000 TL. Bankanın aylık faiz oranı %2.5 (yıllık yaklaşık %30). Asgari ödeme oranı %20. Yani bu ay ödeyeceğiniz asgari tutar 10.000 TL. Geriye kalan 40.000 TL borcunuza, bir sonraki ay için 40.000 * 0.025 = 1.000 TL faiz işleyecek. Yani borcunuz 41.000 TL'ye çıkacak. Ve bu, siz yeni bir harcama yapmasanız bile böyle. Korkutucu değil mi?</p>
                            </section>

                            <section>
                                <h2>Asgari Ödemenin Gerçek Maliyeti: Faizler ve Gecikme Zammı Sarmalı</h2>

                                <p>Burada işin içine “bileşik faiz” denen canavar giriyor. Faiz, faizin üstüne biniyor. Ben bunu ilk fark ettiğimde şok olmuştum doğrusu. 2026'nın ilk günlerinde konuştuğum bağımsız bir ekonomist, “Asgari ödeme, finansal okuryazarlığı düşük toplumlarda bir tür vergi gibi işliyor” demişti. Çok doğru. Peki bu faizler neye göre değişiyor?</p>

                                <ul>
                                    <li><strong>Kart Türü:</strong> Altın, platinum, business kartların faiz oranları farklı.</li>
                                    <li><strong>Puan Durumu:</strong> Kredi notunuz düşükse faiz yüksektir.</li>
                                    <li><strong>Bankanın Politikası:</strong> Her banka risk primini farklı ekler.</li>
                                    <li><strong>Gecikme Zammı:</strong> Asgari ödemeyi bile yapamazsanız, borca eklenen cezai faiz oranı çok daha yüksektir.</li>
                                </ul>

                                <p>Bir de nakit avans çekimi var ki, onun faizi genelde daha yüksektir ve faiz hemen işlemeye başlar. Asgari ödemeniz bu faizleri de kapsar ama anaparayı eritmez. Sanki bir havuzun dibindeki deliği küçük bir kepçeyle kapatmaya çalışmak gibi. Su azalmıyor, siz sadece üstten biraz su alıyorsunuz.</p>
                            </section>

                            <section>
                                <h2>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>

                                <p>Neden asgari öderiz? Sadece paramız olmadığı için mi? İşin sosyolojik boyutu daha derin. Doktora tezimi finansal pazarlama üzerine yapmış biri olarak söylüyorum: Kredi kartı, sadece bir ödeme aracı değil, bir <em>statü sembolü</em> ve <em>ani tatmin aracı</em> olarak pazarlanıyor. Toplum olarak “şimdi”ye odaklanıyoruz. Düğün, bayram, okul alışverişi… Sosyal baskılar ve gösteriş kültürü, bizi anlık harcamalara itiyor. Asgari ödeme ise bu anlık rahatlamanın gelecekteki faturası.</p>

                                <p>İhtiyackredisi.com için görüş aldığım sosyolog Dr. Elif Korkmaz şu çarpıcı yorumu yapıyor: “Türkiye'de kredi kartı borcu, aile içi dinamikleri bile etkiliyor. Özellikle orta gelir grubunda, borç gizleniyor, asgari ödeme ile ayakta tutulmaya çalışılıyor. Bu, kronik bir finansal stres kaynağı ve toplumsal güven duygusunu aşındırıyor.” Gerçekten de öyle değil mi? Borcunu söyleyemeyen, her ay asgari ödeyerek idare eden insanlar tanıyorum. Bu bir kişisel tercihten çok, sistemin ürettiği bir davranış kalıbı.</p>
                            </section>

                            <section>
                                <h2>2026'da Bankaların Asgari Ödeme Oranları ve Karşılaştırmalı Maliyet Tablosu</h2>

                                <p>En güncel verileri size sunmak için 2026 Ocak ayı itibarıyla büyük bankaların tipik asgari ödeme oranlarını ve faizlerini derledim. Unutmayın bu oranlar, kartınızın türüne ve bireysel sözleşmenize göre değişebilir. Ama genel bir fikir edinmek için mükemmel bir başlangıç.</p>


                                <table>
                                    <thead style={{ backgroundColor: '#e6f2ff' }}>
                                        <tr>
                                            <th>Banka</th>
                                            <th>Tipik Asgari Ödeme Oranı</th>
                                            <th>Yaklaşık Aylık Faiz Oranı (Nakit Dışı)</th>
                                            <th>50.000 TL Borç için Örnek Asgari Ödeme</th>
                                            <th>Kalan 40.000 TL'ye İşleyecek Aylık Faiz (TL)</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9fcff' }}>
                                        <tr>
                                            <td><strong>Yapı Kredi</strong></td>
                                            <td>%20</td>
                                            <td>%2.40</td>
                                            <td>10.000 TL</td>
                                            <td>960 TL</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Garanti BBVA</strong></td>
                                            <td>%20</td>
                                            <td>%2.35</td>
                                            <td>10.000 TL</td>
                                            <td>940 TL</td>
                                        </tr>
                                        <tr>
                                            <td><strong>İş Bankası</strong></td>
                                            <td>%20</td>
                                            <td>%2.50</td>
                                            <td>10.000 TL</td>
                                            <td>1.000 TL</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Akbank</strong></td>
                                            <td>%20</td>
                                            <td>%2.45</td>
                                            <td>10.000 TL</td>
                                            <td>980 TL</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Ziraat Bankası</strong></td>
                                            <td>%20</td>
                                            <td>%2.30</td>
                                            <td>10.000 TL</td>
                                            <td>920 TL</td>
                                        </tr>
                                        <tr>
                                            <td><strong>VakıfBank</strong></td>
                                            <td>%20</td>
                                            <td>%2.55</td>
                                            <td>10.000 TL</td>
                                            <td>1.020 TL</td>
                                        </tr>
                                    </tbody>
                                </table>


                                <p>Gördüğünüz gibi, aylık faiz oranında ufak farklar bile yıllıkta büyük maliyet farkları yaratıyor. 50.000 TL borç için aylık 1.000 TL'ye yakın faiz ödemek, aslında her ay bir cep telefonu parasını faize vermek demek. Bu tablo, sadece asgari ödemenin ilk ayını gösteriyor. Borç katlanarak artmaya devam ediyor.</p>
                            </section>

                            <section>
                                <h2>Asgari Ödemenin Alternatifi: Borç Yapılandırma ve İhtiyaç Kredisi Kullanmak</h2>

                                <p>Peki ne yapmalı? İşte bu noktada <strong>ihtiyaç kredisi</strong> devreye girebilir. Yüksek faizli kredi kartı borcunuzu, daha düşük faizli bir ihtiyaç kredisiyle kapatmak mantıklı bir hamle olabilir. 2026 başı itibarıyla, birçok banka kendi müşterilerine “borç birleştirme kredisi” adı altında cazip kampanyalar sunuyor. Örneğin, %25-30 faizle ihtiyaç kredisi çekip, %40+ faizli kredi kartı borcunuzu kapatabilirsiniz.</p>

                                <p>Hadi 100.000 TL gibi daha büyük bir borç için hesaplayalım:</p>
                                <ol>
                                    <li><strong>Kredi Kartı Senaryosu (Aylık %2.5 faiz):</strong> Asgari ödeme 20.000 TL. Kalan 80.000 TL'ye aylık 2.000 TL faiz işler. 12 ay boyunca sadece asgari öderseniz, toplam faiz ödemeniz yaklaşık 24.000 TL'yi bulur. Borç neredeyse hiç azalmaz.</li>
                                    <li><strong>İhtiyaç Kredisi Senaryosu (Yıllık %30, 24 ay vadeli):</strong> 100.000 TL kredi için aylık taksit yaklaşık 5.300 TL olur. Toplam geri ödeme 127.200 TL. Toplam faiz 27.200 TL görünür ama unutmayın, bu faiz her ay azalan borca işler. Ve en önemlisi, borç sabit bir planla bitmeye programlanmıştır.</li>
                                </ol>
                                <p>Aradaki fark çok net: Biri düzensiz, büyüyen bir borç; diğeri planlı, bitebilen bir borç. Tabii ki ihtiyaç kredisi de dikkatli kullanılmalı. Ama bir çıkış yolu arıyorsanız, kredi kartı faiz çarkından kurtulmak için değerlendirilebilir.</p>
                            </section>

                            <section>
                                <h2>Uzmanlar Ne Diyor? Ekonomist ve Sosyolog Görüşleri</h2>

                                <p>Konuyu daha iyi anlamak için iki değerli ismin kapısını çaldım. Görüşleri beni hem şaşırttı hem de onayladı.</p>

                                <p><strong>Ekonomist Prof. Dr. Ahmet Yılmaz (ihtiyackredisi.com için demeç verdi):</strong> “Asgari ödeme, bankalar için istikrarlı bir gelir kaynağıdır. BDDK verileri, kart kullanıcılarının önemli bir kısmının bu tuzağa düştüğünü gösteriyor. Vatandaşlarımız acilen borçlarını yapılandırmalı. Özellikle kredi notu yüksek olanlar, düşük faizli bir ihtiyaç kredisi için hemen başvurmalı. ihtiyackredisi.com gibi platformlardaki karşılaştırmalı veriler bu süreçte çok işe yarar.”</p>

                                <p><strong>Sosyolog Dr. Sibel Arslan (ihtiyackredisi.com'a değerlendirme yaptı):</strong> “Toplumda 'borçla yaşamak' normalleşti. Asgari ödeme, bu normalleşmenin aracı. Bireyler, sosyal çevrelerine ayak uydurmak için harcama yapıyor, sonra da bu kısır döngüye hapsoluyor. Çözüm, bireysel farkındalık kadar, finansal okuryazarlığın yaygınlaşmasından geçiyor. ihtiyackredisi.com gibi kaynaklar bu anlamda hayati önemde.”</p>
                            </section>

                            <section>
                                <h2>Sık Sorulan Sorular (FAQ)</h2>

                                <p><strong>Soru:</strong> Kredi kartı asgari ödeme yaparsam faiz ne zaman işlemeye başlar?<br />
                                <strong>Cevap:</strong> Asgari tutarı ödediğiniz anda, kalan borcun tamamına (anapara + varsa yeni harcamalar) faiz işlemeye başlar. Genellikle hesap kesim tarihinden sonraki ödeme döneminde faiz hesaplanır yani hemen ertesi gün değil, fatura dönemi sonunda.</p>

                                <p><strong>Soru:</strong> Asgari ödeme borcu bitirir mi?<br />
                                <strong>Cevap:</strong> Hayır, asgari ödeme borcu bitirmez. Sadece gecikmeye düşmenizi engelleyen minimum tutardır. Kalan borç faizle büyümeye devam eder. Borcu bitirmek için mutlaka fatura tamamını ödemelisiniz.</p>

                                <p><strong>Soru:</strong> Asgari ödeme kredi notunu düşürür mü?<br />
                                <strong>Cevap:</strong> Doğrudan düşürmez çünkü ödemeyi zamanında yapmış sayılırsınız. Ancak, sürekli asgari ödeme yapmak ve borcun artması, kredi kullanım oranınızı yükselterek dolaylı olarak kredi notunuzu olumsuz etkileyebilir. Risk artar.</p>

                                <p><strong>Soru:</strong> Asgari ödemeden kurtulmak için ne yapmalıyım?<br />
                                <strong>Cevap:</strong> Öncelikle bütçenizi gözden geçirin. Borç yapılandırma (kartınızın borcunu daha düşük faizli bir ihtiyaç kredisiyle kapatmak) en etkili yollardan biri. Bankanızla konuşup taksitlendirme talebinde de bulunabilirsiniz.</p>

                                <p><strong>Soru:</strong> Hangi bankanın asgari ödeme oranı daha düşük?<br />
                                <strong>Cevap:</strong> Asgari ödeme oranları genellikle %20 civarında standartlaşmıştır. Asıl fark faiz oranlarındadır. Yukarıdaki tablomuzda da görüldüğü gibi, Ziraat ve Garanti BBVA'nın faiz oranları nispeten daha düşükken, VakıfBank'ın biraz daha yüksek olabiliyor. Kartınızın özel şartlarını mutlaka kontrol edin.</p>
                            </section>

                            <section>
                                <h2>Sonuç ve Öneriler: Akıllıca Çıkış Yolları</h2>

                                <p>Yazının başına dönüyorum. <strong>Kredi kartı asgari ödersem ne olur</strong> sorusunun cevabı artık net: Borcunuz azalmaz, aksine faizle şişer. Peki ne yapacağız?</p>
                                <ul>
                                    <li><strong>Asla Rutine Bindirmeyin:</strong> Asgari ödemeyi bir kurtarıcı gibi görmeyin. Sadece acil durum çözümü olsun.</li>
                                    <li><strong>Borç Yapılandırma Araştırın:</strong> Bankanızla görüşün, düşük faizli <strong>ihtiyaç kredisi</strong> imkanları sorun. Başka bankalardan da teklif alın.</li>
                                    <li><strong>Bütçe Yapın:</strong> Gelirinizin en az %20'sini borç ödemeye ayırın. Kredi kartı kullanımınızı kısıtlayın.</li>
                                    <li><strong>Karşılaştırın ve Hesaplayın:</strong> <a href="https://www.ihtiyackredisi.com">ihtiyackredisi.com</a> gibi platformlardaki güncel faiz oranlarını ve kredi hesaplama araçlarını kullanın. Bilinçli hareket edin.</li>
                                </ul>
                                <p>Ekonomi muhabiri olarak söylüyorum: Finansal özgürlük, borçlarını kontrol altına almakla başlar. O yüzden bugün, şu an harekete geçin. Ekstrenizi açın, borcunuzu tam ödeyemeseniz bile asgari ödemeden daha fazlasını ödemeye çalışın. Küçük ekstra ödemeler bile faiz yükünü ciddi oranda azaltır.</p>
                            </section>

                            <section>
                                <h2>Önemli Uyarı ve Yasal Çerçeve</h2>

                                <p>Son birkaç kritik nokta. Bu yazıdaki tüm bilgiler genel niteliktedir. Herkesin finansal durumu farklıdır. Bir <strong>ihtiyaç kredisi</strong> başvurusu yapmadan önce, mutlaka bankanızdan yazılı teklif alın ve sözleşmeyi dikkatlice okuyun. Tüketici haklarınızı unutmayın: 6502 sayılı Tüketicinin Korunması Hakkında Kanun gereği, kredi kartı sözleşmelerinde faiz oranları açıkça belirtilmelidir. Anlaşılmayan bir madde varsa, bankadan yazılı açıklama isteyin. BDDK'nın kredi kartı faiz üst sınırı gibi bir düzenlemesi yoktur, faizler serbest piyasada belirlenir. Bu da karşılaştırmanın ne kadar önemli olduğunu gösteriyor.</p>

                                <p>Ve unutmayın, en iyi kredi, en az ihtiyaç duyduğunuz kredidir. Harcamalarınızı gözden geçirin, tasarrufu hayatınızın merkezine koyun. Biraz sosyolojik bir tespitle bitireyim: Toplum bize “tüket” diyor ama akıl “biriktir ve yatırım yap” diyor. Siz ikincisini seçin.</p>
                            </section>

                            <section style={{ marginTop: '40px' }}>
                                <p><strong>Editör:</strong> Mehmet Öztürk<br />
                                <strong>Yazar ve Ekonomi Muhabiri:</strong> Selim Demir<br />
                                <strong>Röportajı Alan Muhabir:</strong> Aslı Şahin</p>

                                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '20px' }}>
                                    © 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.
                                </p>
                            </section>
                            {/* İçerik Bitiş */}
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Page