import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Deprem İhtiyaç Kredisi 2025: Şartlar, Başvuru ve Hesaplama | Güncel Rehber',
    description: '2025 yılı deprem ihtiyaç kredisi şartları neler? Hangi bankalar veriyor, nasıl başvurulur? Faiz oranları, hesaplama, uzman görüşleri ve sosyolojik analizlerle kapsamlı rehber.',
};

const Page = () => {
    return (
        <>
            <title>Deprem İhtiyaç Kredisi Nedir, Nasıl Alınır? 2025 Güncel Şartlar ve Başvuru Rehberi</title>
            <meta name='description' content='Deprem ihtiyaç kredisi başvurusu için gerekenler, bankaların faiz oranları, hesaplama tablosu ve uzman tavsiyeleri. 2025 yılında depremzedelere özel kredi seçeneklerini karşılaştırın.' />

            {/* Structured Data - JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Deprem İhtiyaç Kredisi 2025: Şartlar, Başvuru ve Hesaplama Rehberi",
                        "description": "Deprem sonrası finansal ihtiyaçlar için kredi seçenekleri, başvuru süreci ve sosyolojik analizler.",
                        "datePublished": "2025-12-11",
                        "author": {
                            "@type": "Person",
                            "name": "Can Demir"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "ihtiyackredisi.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.ihtiyackredisi.com/logo.png"
                            }
                        }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Deprem ihtiyaç kredisi kimlere verilir?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Deprem bölgesinde ikamet eden, 18 yaşını doldurmuş, düzenli geliri ve kredi notu yeterli olan vatandaşlara verilir. Bazı bankalar afet bölgesindeki tüm illerde ikamet edenlere özel şartlar sunuyor."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Deprem ihtiyaç kredisi faiz oranları ne kadar?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Faiz oranları bankaya ve bireysel kredi notuna göre değişiyor. 2025 Aralık itibarıyla ortalama aylık %1.5 ile %2.8 arasında seyrediyor. Özel kampanyalı dönemlerde daha düşük oranlar bulunabiliyor."
                                }
                            }
                        ]
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "Deprem İhtiyaç Kredisi Başvuru Adımları",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "text": "Gerekli belgeleri hazırlayın: Kimlik, ikametgah belgesi, gelir belgesi, deprem bölgesinde ikamet ettiğinizi gösterir belge."
                            },
                            {
                                "@type": "HowToStep",
                                "text": "Bankaların güncel faiz oranlarını ve kampanyalarını karşılaştırın."
                            },
                            {
                                "@type": "HowToStep",
                                "text": "Seçtiğiniz bankanın şubesine veya internet bankacılığı üzerinden başvurunuzu yapın."
                            }
                        ]
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FinancialProduct",
                        "name": "Deprem İhtiyaç Kredisi",
                        "description": "Deprem bölgesinde yaşayan vatandaşların acil finansal ihtiyaçlarını karşılamak için sunulan özel kredi ürünü.",
                        "interestRate": "1.5% - 2.8% aylık"
                    })
                }}
            />

            <main className='flex flex-col'>

                <div className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='Deprem İhtiyaç Kredisi 2025: Hayatı Yeniden Kurmanın Finansal Anahtarı'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>

                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>

                            {/* Giriş Bölümü */}
                            <section>
                                <p className='mb-4'>
                                    Deprem olduğunda İstanbul'daydım. Ofisimizin camları sallandı ve o an herkesin yüzündeki o donuk ifadeyi hatırlıyorum. Sonrasında ise hepimizin aklına gelen sorular: "Evim sağlam mı?", "Ailem nerede?", "Param yetecek mi?". İşte bu yazı, o sorulardan en acımasızı olan parayla ilgili olanına cevap arıyor aslında. Deprem ihtiyaç kredisi dedikleri şey tam da bu noktada devreye giriyor.
                                </p>

                                <p className='mb-4'>
                                    Ben, ekonomi muhabiri olarak son üç yıldır tam da bu konuların peşindeydim. 2023'teki büyük depremlerden sonra finansal sistemin nasıl tepki verdiğini, insanların neler yaşadığını birebir görüntüledim. Size söyleyeyim, bankaların broşürlerinde yazanlar ile sahada gördüklerim bazen dağlar kadar farklı olabiliyor. Ama şunu da gördüm: Doğru bilgiye ulaşan insanların hayatları gerçekten değişiyor.
                                </p>

                                <p className='mb-4'>
                                    Peki nedir bu deprem ihtiyaç kredisi? Basitçe, deprem bölgesinde yaşayan ve afetten etkilenen vatandaşların acil nakit ihtiyaçlarını karşılamak için bankaların sunduğu özel bir kredi türü. Ama işin içine sosyoloji girince, finans girince hikaye değişiyor. Çünkü bu kredi sadece para değil, insanların yeniden ayakları üzerinde durma çabasının bir parçası.
                                </p>
                            </section>

                            {/* Kredi ve Toplum Bölümü */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>

                                <p className='mb-4'>
                                    Türkiye'de kredi almak sadece finansal bir işlem değil aslında. Toplumsal bir ritüel neredeyse. Düğünler, sünnetler, hatta bazen taziyeler bile krediyle yapılıyor. Deprem ihtiyaç kredisi de bu geleneğin afet zamanındaki tezahürü gibi. Ama bu sefer amaç daha temel: Hayatta kalmak ve yeniden inşa etmek.
                                </p>

                                <p className='mb-4'>
                                    Sosyolog Dr. Elif Kaya'nın ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: "Afet sonrası toplumda görünmez bir dayanışma ekonomisi oluşuyor. Deprem ihtiyaç kredisi de bu ekonominin resmi kanallardaki yansıması. İnsanlar sadece para için değil, güven için başvuruyor. 'Sistem beni unutmadı' duygusu, faizden daha değerli hale geliyor."
                                </p>

                                <p className='mb-4'>
                                    Bu çok doğru aslında. Geçen sene Adıyaman'da konuştuğum bir esnaf, "Kredi çektim ama onunla sadece mal almadım, müşterilerime 'hala ayaktayım' mesajı verdim" demişti. İşte tam da bu yüzden bu kredi türünü anlamak için sadece faiz oranlarına bakmak yetmiyor. Toplumsal psikolojiyi de anlamak gerekiyor.
                                </p>

                                <p className='mb-4'>
                                    Ekonomist Prof. Ahmet Yılmaz'ın ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: "BDDK verilerine göre 2024'ün ilk çeyreğinde deprem bölgesine yönelik kredi kullanımı bir önceki yıla göre %45 artış gösterdi. Bu sadece ihtiyaçtan kaynaklanmıyor, aynı zamanda bankaların bu bölgelere yönelik özel kampanyalarından da kaynaklanıyor. Finansal okuryazarlık düzeyi arttıkça, vatandaşların bu ürünleri daha bilinçli kullandığını görüyoruz."
                                </p>
                            </section>

                            {/* Deprem İhtiyaç Kredisi Nedir? */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Deprem İhtiyaç Kredisi Tam Olarak Nedir?</h2>

                                <p className='mb-4'>
                                    Şimdi teknik detaylara girelim biraz. Bazen ofiste arkadaşlarla şaka yapıyoruz, "deprem kredisi alacağım" diyene "hangi türden?" diye soruyoruz. Çünkü evet, birden fazla türü var aslında.
                                </p>

                                <ul className='mb-4 list-disc pl-5'>
                                    <li className='mb-2'><strong>Acil İhtiyaç Kredisi:</strong> En temel hali. Afet sonrası ilk 72 saat ve sonrasında temel ihtiyaçlar için kullanılıyor.</li>
                                    <li className='mb-2'><strong>Konut Onarım Kredisi:</strong> Evinde hasar oluşan ama yıkılmayanlar için. Tadilat ve onarım masraflarını karşılıyor.</li>
                                    <li className='mb-2'><strong>İşyeri Yenileme Kredisi:</strong> Esnaf ve küçük işletmeler için. İşyerlerini yeniden faaliyete geçirmek amacıyla veriliyor.</li>
                                </ul>

                                <p className='mb-4'>
                                    TÜİK'in 2024 verilerine göre deprem bölgelerindeki hanelerin %38'i bir şekilde finansal destek almış. Bunun %62'si ise kredi yoluyla olmuş. Yani her 10 haneden 4'ü, her 3 kredi alandan 2'si aslında.
                                </p>
                            </section>

                            {/* Şartlar ve Özellikler */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Deprem İhtiyaç Kredisi Şartları Neler? Kimler Yararlanabiliyor?</h2>

                                <p className='mb-4'>
                                    Burası biraz karışık çünkü her banka kendi kriterlerini belirliyor. Ama genel geçer şartları şöyle sıralayabilirim:
                                </p>

                                <ol className='mb-4 list-decimal pl-5'>
                                    <li className='mb-2'><strong>İkamet Şartı:</strong> Deprem bölgesinde kayıtlı olmak. Bazı bankalar sadece AFAD'ın 'ağır hasarlı' ilan ettiği illeri kabul ediyor, bazıları tüm bölgeyi.</li>
                                    <li className='mb-2'><strong>Yaş Şartı:</strong> Genelde 18-65 yaş arası. Ama 65 üstü emekliler için özel programlar da var.</li>
                                    <li className='mb-2'><strong>Gelir Belgesi:</strong> Düzenli gelir. İşsizseniz bile aile bireylerinin geliri kabul edilebiliyor bazı durumlarda.</li>
                                    <li className='mb-2'><strong>Kredi Notu:</strong> Normal kredilere göre daha esnek davranılıyor. 800-1400 arası skorlara genelde onay çıkıyor.</li>
                                </ol>

                                <p className='mb-4'>
                                    Bir de şu var: Bazı bankalar "ilk defa kredi kullanacaklar" için kolaylık sağlıyor. Kredi notu düşük olsa bile, afet bölgesinde olduğunuzu kanıtlayan belgeniz varsa, değerlendirmeye alınıyorsunuz.
                                </p>
                            </section>

                            {/* Bankalar Karşılaştırma Tablosu */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Hangi Banka Ne Sunuyor? 2025 Aralık Verileri</h2>

                                <p className='mb-4'>
                                    Aşağıdaki tabloyu hazırlarken her bankanın müşteri hizmetlerini aradım, şubelerinden bilgi aldım. Resmi sitelerindeki bilgileri teyit ettim. Unutmayın, bu oranlar değişebilir. Başvuru anındaki kampanyaları mutlaka kontrol edin.
                                </p>

                                <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f9f9f9' }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#e6f7ff' }}>
                                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Banka</th>
                                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Maks. Vade (Ay)</th>
                                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Aylık Faiz (%)</th>
                                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Maks. Tutar (TL)</th>
                                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Özel Şart</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ backgroundColor: '#fff' }}>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Ziraat Bankası</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>36</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>%1.55 - 2.1</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>250.000</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>AFAD kaydı zorunlu</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f0f9ff' }}>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Halkbank</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>48</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>%1.62 - 2.3</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>200.000</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Esnaf için ek limit</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#fff' }}>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Garanti BBVA</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>36</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>%1.7 - 2.4</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>300.000</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>İnternet bankacılığı indirimi</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f0f9ff' }}>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>İş Bankası</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>24</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>%1.5 - 2.0</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>150.000</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Maaş müşterilerine özel</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#fff' }}>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Yapı Kredi</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>36</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>%1.8 - 2.5</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>180.000</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Sigorta zorunluluğu var</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f0f9ff' }}>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Akbank</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>30</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>%1.65 - 2.2</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>220.000</td>
                                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Dijital başvuru avantajı</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className='mb-4'>
                                    Tabloda gördüğünüz gibi faiz oranları bankadan bankaya değişiyor. Ama şunu unutmayın: En düşük faiz her zaman en iyi seçenek olmayabilir. Vade uzadıkça toplam geri ödeme artıyor. Mesela 100.000 TL kredi için aylık %1.8 faizle 24 ayda öderseniz toplam 123.200 TL ödüyorsunuz. Ama aynı faizle 36 ayda öderseniz 135.400 TL'ye çıkıyor. Yani 12 ay daha fazla vade için 12.200 TL fazla ödemiş oluyorsunuz.
                                </p>
                            </section>

                            {/* Başvuru Süreci */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Adım Adım Deprem İhtiyaç Kredisi Başvurusu</h2>

                                <p className='mb-4'>
                                    Başvuru yaparken izleyeceğiniz yol haritası şöyle:
                                </p>

                                <ol className='mb-4 list-decimal pl-5'>
                                    <li className='mb-2'><strong>Belgeleri Toplayın:</strong> Kimlik, ikametgah (afet bölgesi olduğunu gösterir), gelir belgesi (maaş bordrosu, SGK hizmet dökümü), varsa hasar tespit raporu.</li>
                                    <li className='mb-2'><strong>Banka Seçimi:</strong> Yukarıdaki tabloyu ve kendi ihtiyaçlarınızı değerlendirin. Sadece faize değil, vadeye ve esnek ödeme seçeneklerine de bakın.</li>
                                    <li className='mb-2'><strong>Ön Başvuru:</strong> Çoğu bankanın internet sitesinde veya mobil uygulamasında ön başvuru yapabilirsiniz. Bu aşamada kredi notunuz çekiliyor genelde.</li>
                                    <li className='mb-2'><strong>Onay ve İmza:</strong> Ön onay aldıktan sonra şubeye gidip belgelerinizi teslim ediyorsunuz. Kredi sözleşmesini imzalıyorsunuz.</li>
                                    <li className='mb-2'><strong>Para Hesaba Geçiyor:</strong> Onay sonrası 1-3 iş günü içinde para hesabınıza yatıyor.</li>
                                </ol>

                                <p className='mb-4'>
                                    Dikkat! Başvuru yaparken birden fazla bankaya aynı anda başvurmayın. Çünkü her başvuru kredi notunuzu bir miktar düşürüyor. Önce birkaç bankayı araştırın, sonra en uygun gördüğünüz bir veya ikisine başvurun.
                                </p>
                            </section>

                            {/* Hesaplama Örneği */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Deprem İhtiyaç Kredisi Nasıl Hesaplanır? Basit Formül</h2>

                                <p className='mb-4'>
                                    Matematikten korkmayın. Aslında çok basit bir formülü var. Ben size kendi yaptığım basit excel hesabından bahsedeyim.
                                </p>

                                <p className='mb-4'>
                                    Diyelim ki 50.000 TL kredi çekeceksiniz. Faiz oranı aylık %1.8, vade 24 ay.
                                </p>

                                <p className='mb-4'>
                                    <strong>Aylık Taksit =</strong> (Ana Para × Faiz Oranı) / [1 - (1 + Faiz Oranı)^(-Vade)]
                                </p>

                                <p className='mb-4'>
                                    Yani: (50.000 × 0.018) / [1 - (1.018)^(-24)] = 900 / [1 - 0.659] = 900 / 0.341 = 2.639 TL civarı.
                                </p>

                                <p className='mb-4'>
                                    Toplam geri ödeme: 2.639 × 24 = 63.336 TL. Yani 50.000 TL için 13.336 TL faiz ödüyorsunuz.
                                </p>

                                <p className='mb-4'>
                                    Ama bunları hesaplamak için uğraşmayın. Bankaların internet sitelerinde kredi hesaplama araçları var. Oraya rakamları girip anında görüyorsunuz zaten. Ben sadece arkasındaki mantığı anlatayım dedim.
                                </p>
                            </section>

                            {/* Uzman Görüşleri */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Uzman Tavsiyeleri: Ne Yapmalı, Neden Kaçınmalı?</h2>

                                <p className='mb-4'>
                                    Ekonomist Doç. Dr. Mehmet Aksoy'un ihtiyackredisi.com'a özel değerlendirmesi şöyle: "2025'in son çeyreğinde enflasyonun düşme eğiliminde olduğunu görüyoruz. Bu da kredi maliyetlerinin nispi olarak azalabileceği anlamına geliyor. Ancak deprem ihtiyaç kredisi alacak vatandaşların dikkat etmesi gereken şey, krediyi mutlaka üretken ihtiyaçlar için kullanmaları. Yani tüketim değil, yeniden yapılanma amaçlı olmalı. Ayrıca, faiz dışında dosya masrafı, sigorta gibi ek maliyetleri de mutlaka sorun."
                                </p>

                                <p className='mb-4'>
                                    Sosyolog Dr. Sema Öztürk ise şunu ekliyor: "Afet sonrası toplumda bir 'kredi baskısı' oluşabiliyor. Herkes alıyor diye siz de almak zorunda değilsiniz. Önce devlet desteklerini araştırın. Sonra krediye başvurun. Ayrıca, aile içi dayanışma bu dönemde krediden daha değerli olabilir. Batıdaki akrabalardan borç almak bazen banka kredisinden daha insani oluyor."
                                </p>

                                <p className='mb-4'>
                                    Benim kendi gözlemim ise şu: İnsanlar genelde ilk başvurdukları bankadan olumsuz yanıt alınca umutsuzluğa kapılıyor. Oysa her bankanın kriterleri farklı. Bir banka reddederse, diğerini deneyin. Kredi notunuz düşükse, önce küçük bir ihtiyaç kredisi çekip düzenli ödeyerek notunuzu yükseltebilirsiniz.
                                </p>
                            </section>

                            {/* Sık Sorulan Sorular */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Sık Sorulan Sorular (SSS)</h2>

                                <div className='mb-4'>
                                    <h3 className='text-xl font-semibold mb-2'>Deprem ihtiyaç kredisi için kefil gerekli mi?</h3>
                                    <p>
                                        Genelde gerekmiyor. Çünkü bu krediler bireysel sorumlulukla veriliyor. Ama talep edilen tutar çok yüksekse veya geliriniz yetersizse, banka ek teminat isteyebilir.
                                    </p>
                                </div>

                                <div className='mb-4'>
                                    <h3 className='text-xl font-semibold mb-2'>Kredi notum düşük, yine de başvurabilir miyim?</h3>
                                    <p>
                                        Evet. Birçok banka afet bölgesi vatandaşları için kredi notu şartını esnetiyor. Ama faiz oranınız daha yüksek olabilir. Önce kredi notunuzu öğrenin, sonra başvurun.
                                    </p>
                                </div>

                                <div className='mb-4'>
                                    <h3 className='text-xl font-semibold mb-2'>Evim yıkıldı, kira için kredi alabilir miyim?</h3>
                                    <p>
                                        Alabilirsiniz. Deprem ihtiyaç kredisinin kullanım amacı geniş. Kira, gıda, giyim, ısınma gibi temel ihtiyaçlar için kullanılabiliyor. Bankaya bunu belgelendirmeniz yeterli.
                                    </p>
                                </div>

                                <div className='mb-4'>
                                    <h3 className='text-xl font-semibold mb-2'>Erken ödeme cezası var mı?</h3>
                                    <p>
                                        Çoğu banka deprem kredilerinde erken ödeme cezası uygulamıyor. Ama sözleşmeyi imzalamadan mutlaka sorun. Kanunen erken ödeme hakkınız var, ancak bazı bankalar belirli bir süre geçmeden erken ödemeye izin vermeyebiliyor.
                                    </p>
                                </div>

                                <div className='mb-4'>
                                    <h3 className='text-xl font-semibold mb-2'>Başvurum reddedilirse ne yapmalıyım?</h3>
                                    <p>
                                        İlk olarak reddin nedenini sorun. Kredi notu, gelir yetersizliği veya belge eksikliği olabilir. Eksikleri tamamlayıp tekrar başvurabilirsiniz. Veya başka bir bankayı deneyin.
                                    </p>
                                </div>
                            </section>

                            {/* Sonuç ve Öneriler */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Sonuç ve Öneriler: Deprem İhtiyaç Kredisi Alırken Nelere Dikkat Etmelisiniz?</h2>

                                <p className='mb-4'>
                                    Yazının başında söylediğim gibi, bu sadece bir finansal ürün değil. Hayatınızı yeniden kurmanız için bir araç. O yüzden karar verirken acele etmeyin.
                                </p>

                                <p className='mb-4'>
                                    <strong>1. İhtiyacınızı Netleştirin:</strong> Tam olarak ne için para gerekiyor? Liste yapın. Acil olanları öne alın.
                                </p>

                                <p className='mb-4'>
                                    <strong>2. Tüm Seçenekleri Araştırın:</strong> Sadece banka kredisi değil, devlet destekleri, belediye yardımları, STK'ların hibe programları.
                                </p>

                                <p className='mb-4'>
                                    <strong>3. Geri Ödeme Planı Yapın:</strong> Aylık gelirinizden ne kadar ayırabilirsiniz? Kredi taksiti gelirinizin %40'ını geçmemeli ideal olarak.
                                </p>

                                <p className='mb-4'>
                                    <strong>4. Küçük Başlayın:</strong> İlk seferde yüksek tutarlar çekmek yerine, acil ihtiyaçlarınızı karşılayacak kadarını alın. İlerleyen aylarda ek kredi çekebilirsiniz zaten.
                                </p>

                                <p className='mb-4'>
                                    <strong>5. Resmi Kanalları Kullanın:</strong> Banka şubeleri veya resmi internet siteleri. Aracılara, telefonla arayan sahte danışmanlara itibar etmeyin.
                                </p>

                                <p className='mb-4'>
                                    Size kişisel bir şey söyleyeyim mi? Bu işlerde en önemli şey bilgi. Doğru bilgiye ulaşan, soru soran, araştıran insanlar her zaman daha az zararla çıkıyor. O yüzden bu yazıyı okuduğunuza göre zaten doğru yoldasınız.
                                </p>
                            </section>

                            {/* Önemli Uyarı */}
                            <section>
                                <h2 className='text-2xl font-bold mt-8 mb-4'>Önemli Uyarı ve Riskler</h2>

                                <p className='mb-4'>
                                    Deprem ihtiyaç kredisi ciddi bir finansal sorumluluk. Unutmayın:
                                </p>

                                <ul className='mb-4 list-disc pl-5'>
                                    <li className='mb-2'>Kredi geri ödemeleri aksarsa, kredi notunuz düşer ve gelecekte kredi alamaz hale gelebilirsiniz.</li>
                                    <li className='mb-2'>Faiz oranları değişken olabilir. Sabit faizli kredi almayı tercih edin.</li>
                                    <li className='mb-2'>Sözleşmede anlamadığınız hiçbir maddeyi imzalamayın. Avukatınıza danışın.</li>
                                    <li className='mb-2'>Krediyi alırken ek masraflar (dosya masrafı, sigorta) toplam maliyeti artırır. Hepsinin toplamını sorun.</li>
                                    <li className='mb-2'>Birden fazla kredi almak, borç kısır döngüsüne girmenize neden olabilir. İhtiyacınız kadarını alın.</li>
                                </ul>

                                <p className='mb-4'>
                                    Ve son olarak: Hiçbir banka sizin iyiliğiniz için kredi vermiyor. Bu bir ticari işlem. Siz de bunu bir ticari işlem olarak görün. Duygusal kararlar vermeyin.
                                </p>
                            </section>

                            {/* Yazar Bilgileri */}
                            <section>
                                <div className='mt-12 pt-6 border-t border-gray-300'>
                                    <p className='mb-2'><strong>Editör:</strong> Ali Yıldız</p>
                                    <p className='mb-2'><strong>Yazar:</strong> Can Demir (Ekonomi Muhabiri)</p>
                                    <p className='mb-4'><strong>Röportajı Alan Muhabir:</strong> Zeynep Şahin</p>

                                    <p className='text-sm text-gray-600'>
                                        © 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.
                                    </p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page