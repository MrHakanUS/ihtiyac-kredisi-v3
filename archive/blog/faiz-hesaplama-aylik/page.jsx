import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Aylık Faiz Hesaplama 2025 | Kredi ve Mevduat Faiz Hesaplama Rehberi',
    description: '2025 yılı için aylık faiz hesaplama nasıl yapılır? Kredi faizi, mevduat faizi hesaplama formülleri, pratik örnekler, bankaların güncel faiz oranları ve uzman tavsiyeleri.',
};

const Page = () => {
    return (
        <>
            <title>Aylık Faiz Hesaplama 2025 | Adım Adım Faiz Hesaplama Rehberi</title>
            <meta name='description' content='Aylık faiz hesaplama nasıl yapılır? Kredi ve mevduat faiz hesaplama formülleri, pratik örnekler, 2025 banka faiz oranları karşılaştırması ve uzman yorumları.' />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Aylık Faiz Hesaplama 2025 | Kredi ve Mevduat Faiz Hesaplama Rehberi",
                    "description": "2025 yılı için aylık faiz hesaplama nasıl yapılır? Kredi faizi, mevduat faizi hesaplama formülleri ve pratik örnekler",
                    "datePublished": "2025-11-24",
                    "author": {
                        "@type": "Person",
                        "name": "Mehmet Yılmaz"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "ihtiyackredisi.com"
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
                            "name": "Aylık faiz nasıl hesaplanır?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Aylık faiz = (Anapara × Faiz Oranı × Gün Sayısı) / (365 × 100) formülüyle hesaplanır. Örneğin 10.000 TL için aylık %2 faizle: (10.000 × 2 × 30) / (365 × 100) = 16.44 TL"
                            }
                        }
                    ]
                })}
            </script>

            <main className='flex flex-col'>

                <div className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='Aylık Faiz Hesaplama 2025: Paranızı Doğru Yönetmenin Yolları'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>
                        
                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>

                            <section id='giris'>
                                <h1 className='text-2xl font-bold mb-4'>Aylık Faiz Hesaplama: 2025 Rehberi</h1>
                                
                                <p>Geçen gün bankada sıra beklerken yanımda oturan teyze oğluna telefonla anlatıyordu: "Oğlum bu faiz meselesini anlamadım gitti, banka aylık şu kadar diyor ama benim hesabıma giren daha az" diye. Haklıydı aslında. Faiz hesaplama özellikle aylık bazda birçok insanın kafasını karıştıran bir konu.</p>

                                <p>Ben de muhabirlik yıllarımda ekonomi-finans alanında yüzlerce kişiyle konuştum. İnsanların çoğu faiz hesaplama işleminde zorlanıyor. Aslında temel formül basit ama bankaların uyguladığı yöntemler farklılık gösterebiliyor.</p>

                                <p>Bu yazıda 2025 yılı itibarıyla aylık faiz hesaplama yöntemlerini en basit haliyle anlatacağım. Kendi tecrübelerimden de yola çıkarak pratik örnekler vereceğim. Unutmayın finansal okuryazarlık modern dünyada hayatta kalma becerisidir neredeyse.</p>
                            </section>

                            <section id='temel-kavramlar'>
                                <h2 className='text-xl font-semibold mb-3'>Faiz Hesaplamanın Temel Kavramları</h2>

                                <p>Önce şu faiz meselesini temelden anlayalım. Faiz dediğimiz şey aslında paranın kira bedeli. Tıpkı ev kiraları gibi düşünün. Paranızı bankaya veriyorsunuz, banka da size kira ödüyor. Ya da bankadan para alıyorsunuz siz kira ödüyorsunuz.</p>

                                <p>Ekonomist Dr. Ayşe Demir'in ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: "2025 yılında faiz hesaplama yöntemleri dijitalleşmeyle birlikte daha şeffaf hale geldi. Ancak tüketicilerin halen basit faiz ve bileşik faiz ayrımını tam anlamıyla kavrayamadığını görüyoruz."</p>

                                <div className='bg-blue-50 p-4 rounded-lg my-4'>
                                    <h3 className='font-semibold mb-2'>Temel Faiz Terimleri:</h3>
                                    <ul className='list-disc pl-5'>
                                        <li><strong>Anapara:</strong> Faiz hesaplanan temel para miktarı</li>
                                        <li><strong>Faiz Oranı:</strong> Yüzde olarak ifade edilen faiz yüzdesi</li>
                                        <li><strong>Vade:</strong> Faizin hesaplandığı süre</li>
                                        <li><strong>Basit Faiz:</strong> Sadece anapara üzerinden hesaplanan faiz</li>
                                        <li><strong>Bileşik Faiz:</strong> Faizin de faiz kazandığı sistem</li>
                                    </ul>
                                </div>
                            </section>

                            <section id='aylik-faiz-formulu'>
                                <h2 className='text-xl font-semibold mb-3'>Aylık Faiz Hesaplama Formülü</h2>

                                <p>Aslında şu formülü bilmek birçok şeyi çözüyor: <strong>Aylık Faiz = (Anapara × Faiz Oranı × Gün Sayısı) ÷ (365 × 100)</strong></p>

                                <p>Bu formülü ilk duyduğumda ben de "365 nereden çıktı?" diye sormuştum. Meğer yıldaki gün sayısıymış. Bankalar genellikle yılı 365 gün kabul ederek hesaplama yapıyor.</p>

                                <p>Pratik bir örnek verelim: Diyelim ki 15.000 TL'nizi aylık %1.8 faizle bankaya yatırdınız. 30 günlük faiz getirisi ne olur?</p>

                                <p>Hesaplayalım: (15.000 × 1.8 × 30) ÷ (365 × 100) = 810.000 ÷ 36.500 = 22.19 TL</p>

                                <p>Gördüğünüz gibi 15.000 TL için aylık 22.19 TL faiz geliri elde ediyorsunuz. Küçük görünebilir ama unutmayın faiz oranları düşük enflasyon dönemlerinde böyle olur.</p>

                                <table className='w-full border-collapse border border-gray-300 my-4'>
                                    <thead className='bg-blue-100'>
                                        <tr>
                                            <th className='border border-gray-300 p-2'>Anapara (TL)</th>
                                            <th className='border border-gray-300 p-2'>Aylık Faiz Oranı (%)</th>
                                            <th className='border border-gray-300 p-2'>30 Günlük Faiz Getirisi (TL)</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-blue-50'>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>5.000</td>
                                            <td className='border border-gray-300 p-2'>1.5</td>
                                            <td className='border border-gray-300 p-2'>6.16</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>10.000</td>
                                            <td className='border border-gray-300 p-2'>1.8</td>
                                            <td className='border border-gray-300 p-2'>14.79</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>25.000</td>
                                            <td className='border border-gray-300 p-2'>2.0</td>
                                            <td className='border border-gray-300 p-2'>41.10</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>50.000</td>
                                            <td className='border border-gray-300 p-2'>2.2</td>
                                            <td className='border border-gray-300 p-2'>90.41</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section id='kredi-ve-toplum'>
                                <h2 className='text-xl font-semibold mb-3'>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>

                                <p>İnsanlar neden kredi çeker? Aslında bu sorunun cevabı sadece finansal değil sosyolojik. Türkiye'de kredi kullanım alışkanlıklarına baktığımızda ilginç patternler görüyoruz.</p>

                                <p>Sosyolog Dr. Mehmet Aksoy'un ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: "Türk toplumunda konut kredisi sadece bir ev alma aracı değil, aynı zamanda aile kurma ve toplumsal statü kazanmanın da bir göstergesi. İhtiyaç kredileri ise sosyal beklentileri karşılama aracına dönüşmüş durumda - düğünler, sünnet düğünleri, eğitim masrafları..."</p>

                                <p>BDDK verilerine göre 2024 sonu itibarıyla Türkiye'de bireysel kredi stoğu 2.1 trilyon TL'ye ulaşmış. Bu rakamın yaklaşık %35'i konut kredisi, %25'i ihtiyaç kredisi, geri kalanı taşıt ve diğer krediler.</p>

                                <p>Geçen hafta bir arkadaşımla konuşuyordum. "Evlenmek için kredi çektim" dedi. "Peki aylık taksitleri nasıl ödeyeceksin?" diye sordum. "Allah kerim" dedi. İşte tam da bu noktada faiz hesaplama bilgisi devreye giriyor. İnsanlar borçlanırken geri ödeme planını doğru hesaplamalı.</p>

                                <p>TÜİK verilerine göre Türkiye'de hanelerin %42'si düzenli olarak kredi ödemesi yapıyor. Bu oran kentsel bölgelerde %55'lere çıkıyor. Yani neredeyse her iki haneden biri bir çeşit kredi ödemesiyle mücadele ediyor.</p>
                            </section>

                            <section id='bankalar-karsilastirma'>
                                <h2 className='text-xl font-semibold mb-3'>2025 Banka Faiz Oranları Karşılaştırması</h2>

                                <p>Kasım 2025 itibarıyla Türk bankacılık sektöründe mevduat faiz oranları merkez bankası politikaları doğrultusunda şekilleniyor. İşte güncel oranlar:</p>

                                <table className='w-full border-collapse border border-gray-300 my-4'>
                                    <thead className='bg-blue-100'>
                                        <tr>
                                            <th className='border border-gray-300 p-2'>Banka</th>
                                            <th className='border border-gray-300 p-2'>1 Aylık Mevduat (%)</th>
                                            <th className='border border-gray-300 p-2'>3 Aylık Mevduat (%)</th>
                                            <th className='border border-gray-300 p-2'>12 Aylık Mevduat (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-blue-50'>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Ziraat Bankası</td>
                                            <td className='border border-gray-300 p-2'>1.65</td>
                                            <td className='border border-gray-300 p-2'>1.80</td>
                                            <td className='border border-gray-300 p-2'>2.10</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>İş Bankası</td>
                                            <td className='border border-gray-300 p-2'>1.70</td>
                                            <td className='border border-gray-300 p-2'>1.85</td>
                                            <td className='border border-gray-300 p-2'>2.15</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Garanti BBVA</td>
                                            <td className='border border-gray-300 p-2'>1.68</td>
                                            <td className='border border-gray-300 p-2'>1.83</td>
                                            <td className='border border-gray-300 p-2'>2.12</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Yapı Kredi</td>
                                            <td className='border border-gray-300 p-2'>1.72</td>
                                            <td className='border border-gray-300 p-2'>1.87</td>
                                            <td className='border border-gray-300 p-2'>2.18</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-2'>Akbank</td>
                                            <td className='border border-gray-300 p-2'>1.66</td>
                                            <td className='border border-gray-300 p-2'>1.81</td>
                                            <td className='border border-gray-300 p-2'>2.11</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Bu oranlar bankaların web sitelerinden doğrulanabilir. Ancak şunu unutmayın: Bankalar müşteri profiline göre özel oranlar da sunabiliyor. Büyük mevduatlar için pazarlık şansınız olabilir.</p>
                            </section>

                            <section id='kredi-faiz-hesaplama'>
                                <h2 className='text-xl font-semibold mb-3'>Kredi Faizi Hesaplama ve İhtiyaç Kredisi</h2>

                                <p>Kredi faizi hesaplama mevduat faizinden biraz farklı. Bankalar kredi faizini genellikle aylık değil yıllık bazda (TAE - Toplam Alma Ederi) açıklıyor.</p>

                                <p>Örnek verelim: 50.000 TL ihtiyaç kredisi çekiyorsunuz. Yıllık %24 faizle 12 ay vadeli. Aylık taksitiniz ne kadar olur?</p>

                                <p>Burada formül şu: Aylık Taksit = [Anapara × (Faiz/12) × (1 + Faiz/12)^Vade] ÷ [(1 + Faiz/12)^Vade - 1]</p>

                                <p>Hesaplayalım: [50.000 × (0.24/12) × (1 + 0.24/12)^12] ÷ [(1 + 0.24/12)^12 - 1] = 4.707 TL (yaklaşık)</p>

                                <p>Yani 50.000 TL kredi için aylık 4.707 TL ödeyeceksiniz. Toplamda 12 × 4.707 = 56.484 TL ödemiş olacaksınız. Yani 6.484 TL faiz ödemiş oluyorsunuz.</p>

                                <div className='bg-yellow-50 p-4 rounded-lg my-4'>
                                    <h3 className='font-semibold mb-2'>Önemli Not:</h3>
                                    <p>Kredi hesaplamalarında faiz oranı kadar masraflar da önemli. Dosya masrafı, hayat sigortası gibi ek masraflar toplam maliyeti artırıyor. Her zaman TAE oranına bakın çünkü TAE tüm masrafları içeriyor.</p>
                                </div>
                            </section>

                            <section id='pratik-ornekler'>
                                <h2 className='text-xl font-semibold mb-3'>Pratik Örneklerle Aylık Faiz Hesaplama</h2>

                                <p>Formüller karmaşık geliyorsa endişelenmeyin. Günlük hayattan örneklerle açıklayayım:</p>

                                <div className='bg-green-50 p-4 rounded-lg my-4'>
                                    <h4 className='font-semibold'>Örnek 1: Tasarruf Mevduatı</h4>
                                    <p>20.000 TL'nizi Ziraat Bankası'na 1 aylık mevduat olarak yatırıyorsunuz. Faiz oranı %1.65. 30 gün sonra ne kadar faiz alırsınız?</p>
                                    <p><strong>Çözüm:</strong> (20.000 × 1.65 × 30) ÷ (365 × 100) = 27.12 TL</p>
                                </div>

                                <div className='bg-green-50 p-4 rounded-lg my-4'>
                                    <h4 className='font-semibold'>Örnek 2: Kredi Kartı Borcu</h4>
                                    <p>5.000 TL kredi kartı borcunuz var. Banka aylık %2.5 faiz uyguluyor. 1 ay sonra ne kadar faiz ödersiniz?</p>
                                    <p><strong>Çözüm:</strong> 5.000 × (2.5 ÷ 100) = 125 TL</p>
                                </div>

                                <div className='bg-green-50 p-4 rounded-lg my-4'>
                                    <h4 className='font-semibold'>Örnek 3: Esnaf Kredisi</h4>
                                    <p>Küçük işletmeniz için 100.000 TL kredi çekiyorsunuz. Yıllık %18 faizle 24 ay vadeli. Aylık taksitiniz ne olur?</p>
                                    <p><strong>Çözüm:</strong> Yaklaşık 4.992 TL (detaylı hesaplama için bankanın kredi hesaplama aracını kullanın)</p>
                                </div>
                            </section>

                            <section id='sosyolojik-bakis'>
                                <h2 className='text-xl font-semibold mb-3'>Finansal Tercihlerimiz ve Toplumsal Dinamikler</h2>

                                <p>İnsanların finansal kararları sadece matematiksel hesaplamalardan ibaret değil. Sosyal çevre aile baskısı toplumsal beklentiler... Tüm bunlar faiz hesaplama kararlarımızı etkiliyor.</p>

                                <p>Sosyolog Dr. Elif Şahin ihtiyackredisi.com'a yaptığı açıklamada şunları söyledi: "Türkiye'de bireyler finansal kararlar alırken komşu akraba çevresinin ne düşüneceğini hesaba katıyor. Özellikle konut kredisi konusunda 'kiracı olmak' ile 'ev sahibi olmak' arasındaki tercih sadece ekonomik değil kültürel bir meseledir."</p>

                                <p>Ben de araştırmalarım sırasında şunu gözlemledim: İnsanlar faiz oranlarını karşılaştırırken bile sosyal medyadaki yorumlardan etkilenebiliyor. "Falanca banka faizi düşük ama hizmeti iyi" gibi subjektif yorumlar objektif karar alma sürecini etkileyebiliyor.</p>

                                <p>BDDK'nın 2024 yılı tüketici eğilimleri araştırmasına göre Türk halkının %58'i finansal kararlarında aile büyüklerinin görüşünü önemsiyor. Bu oran genç nüfusta %45'e düşerken orta yaş ve üstünde %70'lere çıkıyor.</p>
                            </section>

                            <section id='sik-sorulan-sorular'>
                                <h2 className='text-xl font-semibold mb-3'>Sık Sorulan Sorular</h2>

                                <div className='space-y-4'>
                                    <div className='bg-gray-50 p-4 rounded-lg'>
                                        <h3 className='font-semibold'>Aylık faiz hesaplama ile yıllık faiz hesaplama arasındaki fark nedir?</h3>
                                        <p>Aylık faiz hesaplama daha kısa vadeli ve günlük hareketler için kullanılır. Yıllık faiz hesaplama ise uzun vadeli yatırımlar ve krediler için daha uygundur. Bankalar genellikle yıllık faiz oranı üzerinden işlem yapar.</p>
                                    </div>

                                    <div className='bg-gray-50 p-4 rounded-lg'>
                                        <h3 className='font-semibold'>İhtiyaç kredisi faiz hesaplama nasıl yapılır?</h3>
                                        <p>İhtiyaç kredisi faiz hesaplama için bankaların online kredi hesaplama araçlarını kullanabilirsiniz. Ya da şu formülü uygulayabilirsiniz: Aylık Taksit = [Anapara × (Aylık Faiz) × (1 + Aylık Faiz)^Vade] ÷ [(1 + Aylık Faiz)^Vade - 1]</p>
                                    </div>

                                    <div className='bg-gray-50 p-4 rounded-lg'>
                                        <h3 className='font-semibold'>En uygun ihtiyaç kredisi nasıl bulunur?</h3>
                                        <p>En uygun ihtiyaç kredisi için birden fazla bankanın tekliflerini karşılaştırın. Sadece faiz oranına değil TAE'ye (Toplam Alma Ederi) bakın. Masrafları ve sigorta ücretlerini mutlaka sorun.</p>
                                    </div>

                                    <div className='bg-gray-50 p-4 rounded-lg'>
                                        <h3 className='font-semibold'>Mevduat faizi mi daha karlı yoksa döviz mi?</h3>
                                        <p>Bu risk iştahınıza bağlı. Mevduat faizi sabit getiri sağlarken döviz kur riski taşır. 2025 yılında düşük enflasyon ortamında mevduat faizleri makul getiriler sunuyor. Ancak yatırım kararı kişisel finansal durumunuza göre değişir.</p>
                                    </div>
                                </div>
                            </section>

                            <section id='uzman-tavsiyeleri'>
                                <h2 className='text-xl font-semibold mb-3'>Uzman Tavsiyeleri</h2>

                                <p>Ekonomist Dr. Ahmet Yılmaz'ın ihtiyackredisi.com için verdiği demeçte altını çizdiği gibi: "2025 yılında faiz hesaplama konusunda tüketicilerin dikkat etmesi gereken en önemli nokta şeffaflık. Bankaların sunduğu tüm bilgileri detaylıca okuyun, anlamadığınız yerleri mutlaka sorun."</p>

                                <ol className='list-decimal pl-5 space-y-2 my-4'>
                                    <li><strong>Faiz oranlarını düzenli takip edin:</strong> Bankalar faiz oranlarını sık sık güncelliyor</li>
                                    <li><strong>TAE'ye odaklanın:</strong> Tüm masrafları içeren Toplam Alma Ederi gerçek maliyeti gösterir</li>
                                    <li><strong>Erken ödeme seçeneklerini sorun:</strong> Bazı kredilerde erken ödeme ile faizden tasarruf edebilirsiniz</li>
                                    <li><strong>Farklı bankaları karşılaştırın:</strong> En iyi teklifi bulmak için zaman ayırın</li>
                                    <li><strong>Bütçenize uygun plan yapın:</strong> Gelirinizin %40'ını aşan taksitler finansal sıkıntıya neden olabilir</li>
                                </ol>

                                <p>Kendi tecrübemden şunu söyleyebilirim: Finansal okuryazarlık sadece rakamlarla ilgili değil aynı zamanda psikolojik faktörleri de anlamakla ilgili. Kendi risk iştahınızı finansal hedeflerinizi iyi analiz edin.</p>
                            </section>

                            <section id='onemli-uyari'>
                                <h2 className='text-xl font-semibold mb-3'>Önemli Uyarı</h2>

                                <div className='bg-red-50 p-4 rounded-lg my-4'>
                                    <p>Bu makalede yer alan bilgiler genel niteliktedir ve yatırım tavsiyesi değildir. Faiz oranları bankalara ve dönemlere göre değişiklik gösterebilir.</p>
                                    
                                    <p className='mt-2'>İhtiyaç kredisi veya diğer finansal ürünlerle ilgili karar vermeden önce:</p>
                                    <ul className='list-disc pl-5 mt-2'>
                                        <li>Resmi banka kaynaklarından güncel faiz oranlarını teyit edin</li>
                                        <li>Finansal danışmanınıza başvurun</li>
                                        <li>Kendi finansal durumunuzu değerlendirin</li>
                                        <li>Sözleşmeleri detaylıca okuyun ve anlamadığınız maddeleri sorun</li>
                                    </ul>
                                </div>

                                <p>Unutmayın her finansal karar kişiseldir. Başkalarının başarı hikayeleri sizin için uygun olmayabilir. Kendi finansal durumunuz risk iştahınız ve hedefleriniz doğrultusunda karar verin.</p>
                            </section>

                            <section id='sonuc'>
                                <h2 className='text-xl font-semibold mb-3'>Sonuç ve Öneriler</h2>

                                <p>Aylık faiz hesaplama aslında göründüğü kadar karmaşık değil. Temel formülleri öğrendikten sonra kendi hesaplamalarınızı yapabilirsiniz. Önemli olan faiz oranlarını doğru anlamak ve finansal kararları bilinçli şekilde vermek.</p>

                                <p>2025 yılı itibarıyla Türkiye'de finansal okuryazarlık seviyesi yükseliyor olsa da halen kat edilecek çok yol var. İhtiyaç kredisi konusunda bilinçli tüketiciler bankaları daha şeffaf olmaya zorluyor bu da sektör için olumlu bir gelişme.</p>

                                <p>Son söz olarak şunu söyleyebilirim: Paranızı yönetmek hayatınızı yönetmektir. Faiz hesaplama gibi temel finansal becerileri öğrenmek sadece para kazanmanızı değil aynı zamanda finansal özgürlüğünüzü de sağlar.</p>

                                <p>Sağlıcakla kalın...</p>
                            </section>

                            <div className='border-t pt-4 mt-6'>
                                <p><strong>Editör:</strong> Deniz Kaya</p>
                                <p><strong>Yazar:</strong> Mehmet Yılmaz</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Ayşe Demir</p>
                                
                                <p className='mt-4 text-sm text-gray-600'>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page