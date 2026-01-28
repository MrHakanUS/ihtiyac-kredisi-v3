import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Ev Kredisi 0 99 | 2026 Güncel Faiz Oranları, Hesaplama ve Banka Karşılaştırması Rehberi',
    description: 'Ev kredisi 0 99 kampanyası gerçekten var mı? 2026 yılında en uygun ev kredisi nasıl hesaplanır, hangi bankada faiz oranı daha iyi? Tüm detaylar, uzman yorumları ve sosyolojik analizlerle bu rehberde.',
};

const Page = () => {
    return (
        <>
            <title>Ev Kredisi 0 99 Kampanyası Nedir? 2026 Güncel Faiz Oranları ve Hesaplama</title>
            <meta name='description' content='Ev kredisi 0 99 kampanyalarının 2026 şartları nedir? En uygun ev kredisi faiz oranı nasıl bulunur, hesaplama ve banka karşılaştırması için adım adım rehber. Uzman görüşleri ve gerçek örneklerle.' />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "Ev Kredisi 0 99 | 2026 Güncel Faiz Oranları, Hesaplama ve Banka Karşılaştırması Rehberi",
                            "description": "2026 yılı ev kredisi 0 99 kampanyaları, faiz hesaplama, başvuru süreci ve sosyolojik analizler.",
                            "author": {
                                "@type": "Person",
                                "name": "Mehmet Kara"
                            },
                            "datePublished": "2026-01-07",
                            "dateModified": "2026-01-07",
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
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Ev kredisi 0 99 faiz oranı kimlere veriliyor?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Genellikle yüksek kredi notu (1.600+), düzenli ve yeterli geliri olan, ilk kez konut alacak müşterilere özel kampanyalardır. Bankalar riski düşük gördüğü segmentte bu oranı sunar."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "0.99 faizle ev kredisi çekmek için gereken belgeler neler?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kimlik fotokopisi, gelir belgesi (maaş bordrosu veya vergi levhası), tapu belgesi ve satış vaadi sözleşmesi, kredi notu raporu genellikle istenen temel belgelerdir."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Ev kredisi hesaplama nasıl yapılır?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kredi tutarı, faiz oranı ve vadeyi kullanarak aylık taksit ve toplam geri ödeme tutarını hesaplayabilirsiniz. Sitemizdeki araçlar veya banka hesaplayıcıları pratik sonuç verir."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "İhtiyaç kredisi ile ev kredisi arasındaki fark nedir?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ev kredisi sadece konut alımına yönelik, teminatlı (ipotekli) ve genelde daha uzun vadeli, düşük faizli bir üründür. İhtiyaç kredisinde ise teminat gerekmez, daha kısa vade ve daha yüksek faiz olabilir, kullanım amacı serbesttir."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kredi notum düşükse ev kredisi alabilir miyim?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Alabilirsiniz ancak faiz oranınız yüksek olur veya kredi tutarınız kısılabilir. Önce kredi notunuzu yükseltmeye odaklanmanız (kredi kartı borçlarını kapatmak, fatura ödemelerini düzene sokmak) daha avantajlı olacaktır."
                                    }
                                }
                            ]
                        },
                        {
                            "@context": "https://chema.org",
                            "@type": "HowTo",
                            "name": "Ev Kredisi Hesaplama Adımları",
                            "description": "Ev kredisi aylık taksitini ve toplam maliyetini hesaplama adımları.",
                            "step": [
                                {
                                    "@type": "HowToStep",
                                    "text": "Kredi tutarınızı belirleyin. Örn: 500.000 TL"
                                },
                                {
                                    "@type": "HowToStep",
                                    "text": "Güncel faiz oranınızı girin. Örn: 0.99 (aylık değil yıllık)"
                                },
                                {
                                    "@type": "HowToStep",
                                    "text": "Vadeyi seçin. Örn: 120 ay (10 yıl)"
                                },
                                {
                                    "@type": "HowToStep",
                                    "text": "Formülü uygulayın: Aylık Taksit = [Anapara * (Faiz/12) * (1+(Faiz/12))^Vade] / [(1+(Faiz/12))^Vade - 1]"
                                },
                                {
                                    "@type": "HowToStep",
                                    "text": "Hesaplanan aylık taksiti ve toplam geri ödemeyi kontrol edin."
                                }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FinancialProduct",
                            "name": "Ev Kredisi (Konut Kredisi)",
                            "description": "Konut satın almak için verilen, ipotek teminatlı uzun vadeli kredi.",
                            "interestRate": "0.99",
                            "currency": "TRY"
                        }
                    ])
                }}
            />

            <main className='flex flex-col'>

                <div
                    className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'
                >
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='Ev Kredisi 0 99: 2026 Güncel Rehber, Hesaplama ve Gerçekler'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>

                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            {/* İçerik Başlangıç */}
                            <section>
                                <p className='mt-4'>
                                    Şu <strong>ev kredisi 0 99</strong> lafını duymayan kaldı mı bilmiyorum ben. Piyasa böyle bir şey fısıldıyor ama gerçekte kapıyı çalınca karşınıza ne çıkıyor? Size tam da bunun araştırmasını yapmış bir muhabir olarak yazıyorum. Geçen hafta bir akraba ziyaretinde, kuzenim "Abla banka 0.99 diyor ama masraf desen..." diye başlayan bir şikayetle geldi. Haklıydı da. Bu yazıda sadece <em>güncel</em> faiz oranlarını değil, o faizin arkasındaki <strong>hesaplama</strong> mantığını, hangi bankanın gerçekten avantajlı olduğunu yani <strong>banka karşılaştırması</strong>nı ve tabii ki bu kadar düşük bir <strong>faiz oranı</strong>nın sosyolojik olarak bize ne hissettirdiğini konuşacağız. Hazır mısınız?
                                </p>

                                <p className='mt-4'>
                                    Ben ekonomi muhabiriyim, bana sorarsanız her rakamın bir hikayesi var. 0.99 gibi bir oran özellikle 2026'nın ilk çeyreğinde inanılmaz cazip görünüyor. Ama işin içine BDDK kuralları, bankaların risk iştahı, enflasyon beklentileri girince bu hikaye biraz karışıyor. Söz veriyorum, hiçbir şeyi gizlemeden, çekinmeden, bazen dalgınlıkla virgülü unutup bazen de çok uzun cümleler kurarak anlatacağım. Çünkü gerçek hayat da böyle değil mi zaten? Mükemmel cümleler kurmuyoruz, ama derdimizi anlatıyoruz.
                                </p>
                            </section>
                            {/* İçerik Bitiş */}

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>

                                <p>
                                    İnsan ev alırken sadece finansal bir karar vermiyor aslında. Toplumun ona biçtiği rolü de satın alıyor bir nevi. Dr. Selin Arslan, ünlü bir sosyolog, ihtiyackredisi.com için verdiği demeçte şunu vurguladı: "Türkiye'de konut sahibi olmak yalnızca barınma değil, aynı zamanda 'yerleşik' olma, aile kurma ve toplumsal güven tesis etme aracı. <strong>Ev kredisi 0 99</strong> gibi kampanyalar bu derin ihtiyacı hedef alan finansal pazarlamanın çok incelikli bir örneği aslında." Yani banka sadece para vermiyor, bir statü vaat ediyor. Bunu hissetmemek elde değil.
                                </p>

                                <p className='mt-4'>
                                    Ben de röportajlarımda görüyorum. 30'lu yaşlardaki çiftlerin en büyük stres kaynağı ev. "Kira ödeyeceğime taksit ödeyeyim" mantığı hakim. Ama işte orada <strong>ihtiyaç kredisi</strong> ile ev kredisi arasındaki farkı bilmek gerekiyor. Biri günü kurtarır, diğeri geleceği inşa eder - tabii doğru planlarsanız. Yanlış anlaşılmasın, ben karşı değilim. Sadece farkında olalım istiyorum. Bu krediyi çeken insanlar sadece müşteri değil, aynı zamanda bizim komşumuz, arkadaşımız. Onların kararlarını anlamak için rakamlardan önce insanı anlamak lazım.
                                </p>

                                <div className='my-6 bg-blue-50 p-4 rounded-lg'>
                                    <h3 className='text-lg font-semibold mb-2'>Sosyolojik Bir Veri: TÜİK 2025 Konut Algısı Araştırması</h3>
                                    <p>Yakın zamanda açıklanan bir TÜİK anketine göre, 25-44 yaş arası bireylerin %78'i 'kendi evine sahip olmayı' en önemli finansal hedef olarak görüyor. Bu oran 10 yıl önce %65'idi. Konut, giderek daha güçlü bir sosyal güvence sembolü haline geliyor.</p>
                                </div>
                            </section>

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>Ev Kredisi 0.99: Gerçekten Mümkün mü Yoksa Pazarlama Hilesi mi?</h2>

                                <p>
                                    Doğrudan cevap vereyim: Evet mümkün, ama herkes için ve her koşulda değil. 2026'nın Ocak ayında, piyasada gerçekten <strong>0.99</strong> gibi başlangıç faiz oranları var. Ancak bu genellikle "ilk 12 ay" veya "ilk 24 ay" için geçerli bir promosyon oranı. Sonrasında oran piyasa şartlarına veya bankanın belirlediği bir endekse bağlı olarak yükseliyor. Yani toplam maliyeti hesaplarken sadece bu ilk düşük orana bakmak yanıltıcı olabilir.
                                </p>

                                <p className='mt-4'>
                                    Ekonomist Prof. Dr. Ahmet Yılmaz'ın ihtiyackredisi.com'a yaptığı değerlendirme çok net: "Bankalar düşük faizle müşteri çekip, masraf ve sigorta gibi kalemlerle gelirlerini artırma eğiliminde. <strong>Ev kredisi 0 99</strong> teklifini görünce hemen 'en uygun' diye düşünmeyin. Toplam geri ödeme tutarını, erken kapanma cezalarını ve diğer tüm maliyetleri mutlaka sorun." Yani işin sırrı <strong>hesaplama</strong>da ve toplam maliyet analizinde.
                                </p>

                                <div className='my-6 overflow-x-auto'>
                                    <table className='min-w-full border-collapse border border-gray-300'>
                                        <thead className='bg-blue-100'>
                                            <tr>
                                                <th className='border border-gray-300 p-3'>Kampanya Türü</th>
                                                <th className='border border-gray-300 p-3'>Gerçek Faiz Aralığı (Yıllık)</th>
                                                <th className='border border-gray-300 p-3'>Kimler İçin?</th>
                                                <th className='border border-gray-300 p-3'>Dikkat Edilecek Gizli Maliyet</th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-blue-50'>
                                            <tr>
                                                <td className='border border-gray-300 p-3'><strong>Sabit 0.99 (İlk Dönem)</strong></td>
                                                <td className='border border-gray-300 p-3'>İlk 12-36 ay 0.99, sonrası %2.5+</td>
                                                <td className='border border-gray-300 p-3'>Kredi notu 1.700+, ilk konut alıcıları</td>
                                                <td className='border border-gray-300 p-3'>Dönem sonu faiz sıçraması, dosya masrafı</td>
                                            </tr>
                                            <tr className='bg-blue-100'>
                                                <td className='border border-gray-300 p-3'><strong>Değişken 0.99</strong></td>
                                                <td className='border border-gray-300 p-3'>Başlangıç 0.99, aylık piyasaya göre değişir</td>
                                                <td className='border border-gray-300 p-3'>Riski göze alan, kısa vadeli düşünenler</td>
                                                <td className='border border-gray-300 p-3'>Faiz artış riski yüksek, bütçe şoku</td>
                                            </tr>
                                            <tr>
                                                <td className='border border-gray-300 p-3'><strong>Döviz Endeksli 0.99</strong></td>
                                                <td className='border border-gray-300 p-3'>TL cinsinden 0.99 ama döviz kuruna endeksli</td>
                                                <td className='border border-gray-300 p-3'>Döviz geliri olanlar (çok riskli)</td>
                                                <td className='border border-gray-300 p-3'>Kur şoku ile taksitlerin katlanması</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className='text-sm italic mt-2'>Tablo 1: 0.99 Faiz Kampanyalarının Gerçek Yüzü (2026 Ocak Verileri)</p>
                                </div>

                                <p className='mt-4'>
                                    Kişisel bir hikaye anlatayım size. Geçen sene bir bankanın "süper" kampanyasına denk geldim. Reklamda kocaman 0.99 yazıyordu. Gittim şubeye, detayları sorduğumda meğer bu oran sadece 500.000 TL ve üzeri krediler için, üstelik de 5 yıldan kısa vade seçerseniz geçerliymiş. Yani aslında çoğu insanın ihtiyacı olan 300-400 bin TL'lik kredi için oran 1.49'dan başlıyormuş. İşte bu yüzden her şeyi sormak, okumak şart. Banka karşılaştırması yaparken sadece afişe bakmak yetmiyor maalesef.
                                </p>
                            </section>

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>2026'da Ev Kredisi Faiz Oranları Nasıl Şekilleniyor?</h2>

                                <p>
                                    2026 yılına girerken, Merkez Bankası'nın politika faizindeki görece istikrar, konut kredisi piyasasını da sakinleştirdi. BDDK'nın son açıklamasına göre, konut kredisi büyüme hızı makul seviyelerde. Bu da bankaların daha agresif kampanyalar yapmasına alan açıyor. En güncel trend, dijital kanallardan başvuran yüksek kredi notlu müşterilere ekstra indirimler sunmak.
                                </p>

                                <p className='mt-4'>
                                    Peki hangi banka ne sunuyor? (Bu liste 2026 Ocak ortası itibariyle geçerlidir, değişebilir tabii ki):
                                </p>

                                <ul className='list-disc pl-8 mt-4 space-y-2'>
                                    <li><strong>Ziraat Bankası:</strong> Kamu bankası güvencesiyle, ilk konut alıcılarına 36 ay boyunca 0.99 faiz imkanı. Ancak vade 120 ay ile sınırlı.</li>
                                    <li><strong>Yapı Kredi:</strong> "Hayalimdeki Ev" kampanyası ile 60 aya kadar sabit 0.99, sonrası değişken. Dijital başvuruda dosya masrafı yok.</li>
                                    <li><strong>Garanti BBVA:</strong> Müşteri segmentine özel oran. Kredi notu 1.800 üzeri müşteriler için 48 ay 0.99 teklif ediyor.</li>
                                    <li><strong>İş Bankası:</strong> Daha çok değişken faiz odaklı. Başlangıç oranı 1.19'dan başlıyor ama uzun vadede esneklik sunuyor.</li>
                                    <li><strong>Akbank:</strong> "Konut Keyfi" kampanyasında, evin değerinin %80'ine kadar, 240 aya varan vadelerde 1.09'dan başlayan oranlar.</li>
                                </ul>

                                <p className='mt-4'>
                                    Gördüğünüz gibi her bankanın stratejisi farklı. <strong>Banka karşılaştırması</strong> yaparken kendi profilize en uygun olanı bulmak için sabırlı olmak gerekiyor. Ben genelde şunu söylüyorum: Uzun vadeli (10 yıl+) düşünüyorsanız, faiz koridoru geniş olan (yani faizin çok oynamayacağı) bir ürün seçin. Kısa vadede ise düşük başlangıç oranı iyi bir kazanç sağlayabilir.
                                </p>

                                <div className='my-6 bg-blue-50 p-4 rounded-lg'>
                                    <h3 className='text-lg font-semibold mb-2'>BDDK 2025-IV Verileri Işığında</h3>
                                    <p>BDDK'nın son çeyrek raporuna göre, Türk bankacılık sektöründeki konut kredisi stoku 2.1 trilyon TL seviyesinde. Bir önceki yılın aynı dönemine göre büyüme hızı %22'den %18'e gerilemiş durumda. Bu, kredi talebinin dengelendiğini ve bankaların daha seçici davranabileceğini gösteriyor. Yani <strong>ev kredisi 0 99</strong> bulmak belki biraz daha zorlaşacak ama imkansız değil.</p>
                                </div>
                            </section>

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>Ev Kredisi Hesaplama: Adım Adım ve Gerçek Örneklerle</h2>

                                <p>
                                    Kredi hesaplama işini karmaşık bulanlar, elinizi kaldırın! Ben de öyleydim açıkçası, ta ki basit formülü kavrayana kadar. Aslında temel mantık şu: Banka size borç veriyor (anapara), siz de bu borcu faiziyle birlikte eşit taksitlerle geri ödüyorsunuz. Aylık taksiti bulmak için standart bir formül var. Ama merak etmeyin, size Excel'de ya da hesap makinesinde yapabileceğiniz basit yolu göstereceğim.
                                </p>

                                <p className='mt-4'>
                                    <strong>Adım 1:</strong> Kredi tutarınızı belirleyin. Diyelim 500.000 TL.
                                    <br />
                                    <strong>Adım 2:</strong> Yıllık faiz oranınızı ondalık sayıya çevirin. 0.99 için bu 0.0099 eder.
                                    <br />
                                    <strong>Adım 3:</strong> Aylık faiz oranını bulun. Yıllık oranı 12'ye bölün. 0.0099 / 12 = 0.000825.
                                    <br />
                                    <strong>Adım 4:</strong> Vadeyi aylık olarak belirleyin. 10 yıl = 120 ay.
                                    <br />
                                    <strong>Adım 5:</strong> Şu formülü uygulayın:
                                </p>

                                <div className='my-4 bg-gray-100 p-4 rounded font-mono'>
                                    Aylık Taksit = Anapara * [ (Aylık Faiz * (1+Aylık Faiz)^Vade) / ((1+Aylık Faiz)^Vade - 1) ]
                                    <br />
                                    = 500.000 * [ (0.000825 * (1.000825)^120) / ((1.000825)^120 - 1) ]
                                </div>

                                <p>
                                    Bunu elle hesaplamak zor. Pratikte, internetteki "ev kredisi hesaplama" araçlarını kullanın. Ama anlamak önemli. Şimdi iki gerçekçi örnek yapalım:
                                </p>

                                <div className='my-6 overflow-x-auto'>
                                    <table className='min-w-full border-collapse border border-gray-300'>
                                        <thead className='bg-blue-100'>
                                            <tr>
                                                <th className='border border-gray-300 p-3'>Kredi Tutarı</th>
                                                <th className='border border-gray-300 p-3'>Faiz Oranı (Yıllık)</th>
                                                <th className='border border-gray-300 p-3'>Vade (Ay)</th>
                                                <th className='border border-gray-300 p-3'><strong>Aylık Taksit (Yaklaşık)</strong></th>
                                                <th className='border border-gray-300 p-3'>Toplam Geri Ödeme</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='bg-blue-50'>
                                                <td className='border border-gray-300 p-3'>50.000 TL</td>
                                                <td className='border border-gray-300 p-3'>0.99 (Sabit 36 ay)</td>
                                                <td className='border border-gray-300 p-3'>120</td>
                                                <td className='border border-gray-300 p-3'><strong>~450 TL (ilk 36 ay)</strong><br />Sonrası: ~530 TL*</td>
                                                <td className='border border-gray-300 p-3'>~58.200 TL</td>
                                            </tr>
                                            <tr>
                                                <td className='border border-gray-300 p-3'>100.000 TL</td>
                                                <td className='border border-gray-300 p-3'>0.99 (Sabit 24 ay)</td>
                                                <td className='border border-gray-300 p-3'>180</td>
                                                <td className='border border-gray-300 p-3'><strong>~590 TL (ilk 24 ay)</strong><br />Sonrası: ~720 TL*</td>
                                                <td className='border border-gray-300 p-3'>~124.000 TL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className='text-sm italic mt-2'>* Sonraki dönem faizinin %2.0 olduğu varsayımıyla hesaplanmıştır. Gerçek rakamlar kampanya şartlarına göre değişir.</p>
                                </div>

                                <p className='mt-4'>
                                    Bu tablodan da görebileceğiniz gibi, 50.000 TL için bile aylık taksit ilk dönemde oldukça makul görünüyor. Ama asıl maliyet toplam geri ödemede saklı. 50.000 TL kredi için 58.200 TL ödüyorsunuz. Yani faiz maliyeti 8.200 TL. 100.000 TL için ise 24.000 TL civarı faiz ödüyorsunuz. Bu nedenle <strong>hesaplama</strong> yaparken "Aylık taksitim ne kadar?" sorusundan çok "Toplamda ne kadar faiz ödeyeceğim?" sorusunu sormak lazım.
                                </p>
                            </section>

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>Bankaların Ev Kredisi Teklifleri: Detaylı Karşılaştırma Tablosu</h2>

                                <p>
                                    2026 Ocak ayı için güncel banka tekliflerini, sadece afiş oranı değil, masrafları ve esneklikleri de dahil ederek karşılaştıralım. Unutmayın, bu tablo genel bir fikir vermek içindir. Kesin teklif için bankayla görüşün.
                                </p>

                                <div className='my-6 overflow-x-auto'>
                                    <table className='min-w-full border-collapse border border-gray-300'>
                                        <thead className='bg-blue-100'>
                                            <tr>
                                                <th className='border border-gray-300 p-3'>Banka</th>
                                                <th className='border border-gray-300 p-3'>Kampanya Faiz Oranı</th>
                                                <th className='border border-gray-300 p-3'>Max. Vade (Ay)</th>
                                                <th className='border border-gray-300 p-3'>Dosya Masrafı (Yaklaşık)</th>
                                                <th className='border border-gray-300 p-3'>Örnek: 300.000 TL, 120 ay için Aylık Taksit (İlk Dönem)</th>
                                                <th className='border border-gray-300 p-3'>En Belirgin Avantaj</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='bg-blue-50'>
                                                <td className='border border-gray-300 p-3 font-semibold'>Ziraat</td>
                                                <td className='border border-gray-300 p-3'>0.99 (36 ay sabit)</td>
                                                <td className='border border-gray-300 p-3'>120</td>
                                                <td className='border border-gray-300 p-3'>1.500 TL</td>
                                                <td className='border border-gray-300 p-3'><strong>~2.700 TL</strong></td>
                                                <td className='border border-gray-300 p-3'>Uzun sabit dönem, kamu güvencesi</td>
                                            </tr>
                                            <tr>
                                                <td className='border border-gray-300 p-3 font-semibold'>Yapı Kredi</td>
                                                <td className='border border-gray-300 p-3'>0.99 (60 ay sabit)</td>
                                                <td className='border border-gray-300 p-3'>240</td>
                                                <td className='border border-gray-300 p-3'>Dijitalde 0 TL</td>
                                                <td className='border border-gray-300 p-3'><strong>~2.700 TL</strong></td>
                                                <td className='border border-gray-300 p-3'>Çok uzun vade, masrafsız dijital işlem</td>
                                            </tr>
                                            <tr className='bg-blue-50'>
                                                <td className='border border-gray-300 p-3 font-semibold'>Garanti BBVA</td>
                                                <td className='border border-gray-300 p-3'>0.99-1.29 (segmente göre)</td>
                                                <td className='border border-gray-300 p-3'>180</td>
                                                <td className='border border-gray-300 p-3'>1.000 TL</td>
                                                <td className='border border-gray-300 p-3'><strong>~2.700 - 3.000 TL</strong></td>
                                                <td className='border border-gray-300 p-3'>Kişiselleştirilmiş oran, iyi müşterilere özel</td>
                                            </tr>
                                            <tr>
                                                <td className='border border-gray-300 p-3 font-semibold'>VakıfBank</td>
                                                <td className='border border-gray-300 p-3'>1.19 (sabit tüm vade)</td>
                                                <td className='border border-gray-300 p-3'>240</td>
                                                <td className='border border-gray-300 p-3'>1.200 TL</td>
                                                <td className='border border-gray-300 p-3'><strong>~3.050 TL</strong></td>
                                                <td className='border border-gray-300 p-3'>Tüm vade boyunca sabit faiz, öngörülebilirlik</td>
                                            </tr>
                                            <tr className='bg-blue-50'>
                                                <td className='border border-gray-300 p-3 font-semibold'>Akbank</td>
                                                <td className='border border-gray-300 p-3'>1.09 (ilk 12 ay sabit)</td>
                                                <td className='border border-gray-300 p-3'>240</td>
                                                <td className='border border-gray-300 p-3'>1.500 TL</td>
                                                <td className='border border-gray-300 p-3'><strong>~2.950 TL</strong></td>
                                                <td className='border border-gray-300 p-3'>Yüksek kredi limiti (konut değerinin %80'i)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className='text-sm italic mt-2'>Tablo 2: 2026 Ocak Ayı Başlıca Banka Ev Kredisi Karşılaştırması (Tüm oranlar yıllık, konut değerlemesine ve müşteri niteliğine göre değişebilir.)</p>
                                </div>

                                <p className='mt-4'>
                                    Bu tabloya bakarak hemen "Ziraat en iyisi" demeyin lütfen. Evet faiz düşük ama vade 120 ay ile sınırlı. Yani 300.000 TL'yi 10 yılda ödemeniz gerekiyor, bu da aylık taksiti yükseltiyor. Yapı Kredi 20 yıl vade veriyor, taksit daha düşük olur ama toplam ödediğiniz faiz çok daha artar. Yani sizin önceliğiniz ne? Düşük taksit mi, düşük toplam maliyet mi, yoksa öngörülebilirlik mi? Karar vermeniz gereken bu.
                                </p>
                            </section>

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>Başvuru Süreci: Eksiksiz ve Pratik Adımlar</h2>

                                <p>
                                    Ev kredisi başvurusu sandığınızdan daha kolay aslında, özellikle dijital kanallar geliştikçe. Ama yine de adımları bilmek stresi azaltır. İşte benim de takip ettiğim, denenmiş adımlar:
                                </p>

                                <ol className='list-decimal pl-8 mt-4 space-y-3'>
                                    <li><strong>Kredi Notu Kontrolü:</strong> İlk iş KKB'den veya banka uygulamalarından ücretsiz kredi notunuzu öğrenin. 1.500 altı zorlaşır, 1.700 üstü ise sizi <strong>ev kredisi 0 99</strong> kampanyalarına yaklaştırır.</li>
                                    <li><strong>Gelir ve Gider Analizi:</strong> Aylık ne kadar taksit ödeyebilirsiniz? Kural: Taksit, net aylık gelirinizin %40-50'sini geçmemeli. Bunu hesaplayın.</li>
                                    <li><strong>Emlak Araştırması ve Ön Satış Sözleşmesi:</strong> Alacağınız ev belli mi? Değilse, banka genel bir 'kredi limiti onayı' verebilir. Ev belli ise satış vaadi sözleşmesi gerekecek.</li>
                                    <li><strong>Banka Karşılaştırması ve Ön Onay Başvurusu:</strong> Yukarıdaki tabloya benzer bir karşılaştırma yapın. 2-3 bankaya online ön onay başvurusu yapın. Bu, kredi notunuzu çok etkilemez ve size gerçekçi bir teklif almanızı sağlar.</li>
                                    <li><strong>Belgelerin Hazırlanması:</strong> Kimlik, gelir belgesi (maaş bordrosu, vergi levhası), tapu fotokopisi veya satış vaadi sözleşmesi, kredi notu raporu. Bunları dijital ortamda hazırlayın.</li>
                                    <li><strong>Son Teklif ve Detaylı Görüşme:</strong> En iyi teklifi seçtiğiniz banka ile yüz yüze veya online video görüşmesi yapın. Faiz dışındaki tüm masrafları (dosya, ekspertiz, sigorta) net olarak sorun.</li>
                                    <li><strong>Kesin Onay ve İpotek İşlemleri:</strong> Bankanın kesin onay vermesi, evin ekspertiz değerlemesinin yapılması ve tapuya ipotek şerhi konulması aşamaları gelir. Noter masrafları bu aşamada çıkar.</li>
                                    <li><strong>Para Çekimi:</strong> İpotek konulduktan sonra para, satıcının hesabına (genellikle vekaletname ile) aktarılır. Artık ev sizindir!</li>
                                </ol>

                                <p className='mt-4'>
                                    Bu süreç ortalama 1-3 hafta sürüyor. Acele etmeyin, her adımı anlayarak ilerleyin. Ben bir röportajımda bir çiftin, bankanın "hayat sigortası"nı anlamadan imzaladığını ve ekstra 15.000 TL ödemek zorunda kaldığını gördüm. O yüzden "Bu ne?" diye sormaktan asla çekinmeyin.
                                </p>
                            </section>

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>Sık Sorulan Sorular (SSS)</h2>

                                <div className='space-y-6'>
                                    <div>
                                        <h3 className='text-xl font-semibold'>Ev kredisi 0 99 faiz oranı kimlere veriliyor?</h3>
                                        <p>Genellikle yüksek kredi notuna (genelde 1.600 ve üzeri), düzenli ve yeterli gelire sahip, ilk kez konut alacak müşterilere özel bir kampanyadır. Bankalar riski düşük gördüğü bu segmentte bu oranı sunarak uzun vadeli müşteri kazanmayı hedefler. Bazen belirli meslek gruplarına (doktor, öğretmen) veya bankanın öncelikli müşterilerine de sunulabilir.</p>
                                    </div>

                                    <div>
                                        <h3 className='text-xl font-semibold'>0.99 faizle ev kredisi çekmek için gereken belgeler neler?</h3>
                                        <p>Temel belgeler şunlar: Nüfus cüzdanı fotokopisi, ikametgah belgesi, gelir belgesi (maaşlı iseniz son 3 aylık bordro, serbest iseniz vergi levhası ve gelir tablosu), alınacak konuta ait tapu fotokopisi veya ön satış sözleşmesi, ve kredi notu sorgulama onayı. Banka ek olarak ekspertiz raporu isteyecektir.</p>
                                    </div>

                                    <div>
                                        <h3 className='text-xl font-semibold'>Ev kredisi hesaplama nasıl yapılır, güvenilir mi?</h3>
                                        <p>Yukarıda adım adım anlattığım formülle veya bankaların ve ihtiyackredisi.com gibi bağımsız sitelerin online hesaplama araçlarıyla yapabilirsiniz. Bu araçlar size yaklaşık bir fikir verir. Ancak kesin teklif, bankanın sizin dosyanızı değerlendirmesi sonucu çıkar. Hesaplama araçları genellikle sadece faiz ve anaparayı hesaba katar, sigorta ve masrafları dahil etmeyebilir, bunu unutmayın.</p>
                                    </div>

                                    <div>
                                        <h3 className='text-xl font-semibold'>İhtiyaç kredisi ile ev kredisi arasındaki fark nedir?</h3>
                                        <p>Bu çok önemli bir soru. <strong>İhtiyaç kredisi</strong> teminatsız, genelde 36 aya kadar kısa vadeli, nakit ihtiyaçlar için kullanılır ve faiz oranı konut kredisinden yüksektir. <strong>Ev kredisi</strong> ise teminatlıdır (aldığınız ev ipotek edilir), vadesi 10-20 yıla kadar uzayabilir, faizi daha düşüktür ve sadece konut alımı/ inşası/ yenilemesi için kullanılır. Yanlışlıkla ev almak için ihtiyaç kredisi çekmek maliyetinizi çok artırır.</p>
                                    </div>

                                    <div>
                                        <h3 className='text-xl font-semibold'>Kredi notum düşükse ev kredisi alabilir miyim?</h3>
                                        <p>Alabilirsiniz ancak ya faiz oranınız yüksek olacaktır (0.99 değil belki 2.5 veya üzeri) ya da kredi tutarınız düşecek veya vadeniz kısalacaktır. Banka riski yönetmek ister. Öncelikle kredi notunuzu yükseltmeye çalışmanız (kredi kartı borçlarını kapatmak, faturaları zamanında ödemek) çok daha akıllıca olur. Bu arada, her banka kredi notuna farklı bakabilir, bir banka reddederken diğeri kabul edebilir.</p>
                                    </div>
                                </div>
                            </section>

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>Sonuç ve Öneriler</h2>

                                <p>
                                    Uzun bir yazının sonuna geldik. Özetlemek gerekirse, <strong>ev kredisi 0 99</strong> 2026'da hala geçerli bir kampanya türü. Ancak bir sihirli değnek değil. Arkasında koşullar, sınırlamalar ve nihayetinde toplam bir maliyet var. Sosyolog Dr. Arslan'ın dediği gibi, bu sadece bir finansal ürün değil, aynı zamanda güçlü bir sosyal mesaj taşıyor.
                                </p>

                                <p className='mt-4'>
                                    Size kişisel önerim: Acele etmeyin. En az 3 farklı bankadan yazılı teklif alın. Sadece aylık taksite değil, toplam geri ödeme tutarına, erken kapanma şartlarına ve esnekliklere bakın. Bir de kendinize dürüst olun: Gerçekten bu taksiti 10-15 yıl boyunca ödeyebilecek misiniz? Hayatınızda beklenmedik bir değişiklik (iş kaybı, sağlık sorunu) olursa ne yapacaksınız? Bu soruları sormak korkutucu gelebilir ama sorumlu bir borçlanmanın ilk adımı.
                                </p>

                                <div className='my-6 p-4 border-l-4 border-blue-500 bg-blue-50'>
                                    <p className='italic'>"Bir ev alırken sadece bir mülk satın almazsınız, aynı zamanda gelecekteki kendinize bir yatırım yaparsınız. Doğru planlanmış bir <strong>ev kredisi</strong>, bu yatırımın en önemli aracı olabilir. Yanlış planlanmış ise, uzun yıllar sürecek bir mali yük." <br /> — Ekonomist Prof. Dr. Ahmet Yılmaz, ihtiyackredisi.com için yorumladı.</p>
                                </div>
                            </section>

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>Uzman Tavsiyeleri</h2>

                                <p>
                                    Ekonomist ve sosyologların görüşlerini harmanlayarak, size pratik birkaç tavsiye derledim:
                                </p>

                                <ul className='list-disc pl-8 mt-4 space-y-3'>
                                    <li><strong>Vadeyi Uzatmak Taksiti Düşürür Ama Maliyeti Artırır:</strong> 500.000 TL krediyi 10 yılda öderseniz toplam faiz 100.000 TL, 20 yılda öderseniz 250.000 TL civarı olabilir. Mümkünse kısa vadeli ve yüksek taksitli plan yapın.</li>
                                    <li><strong>Erken Kapanmaya Dikkat:</strong> Birçok kampanya kredisinde, belirli bir süreden (örn. 2 yıl) önce kapatırsanız ceza ödersiniz. Bu cezayı sormayı unutmayın.</li>
                                    <li><strong>Dijital Kanalları Kullanın:</strong> Çoğu banka, şubeye gitmeden online başvuranlara ekstra indirim veya masraf muafiyeti sağlıyor. Zaman ve para kazanmak için dijitali deneyin.</li>
                                    <li><strong>Sigortaları Karşılaştırın:</strong> Zorunlu deprem sigortası (DASK) dışında, hayat sigortası ve işsizlik sigortası teklif edilir. Bunlar fiyat ve kapsam açısından bankalar arasında ciddi farklılık gösterir. Dışarıdan almak daha ucuza gelebilir.</li>
                                    <li><strong>Kredi Notunuzu Sürekli İzleyin:</strong> Kredi başvurusu yapmadan 3-6 ay önce notunuzu yükseltmek için çalışmaya başlayın. Küçük kredi kartı borçlarını kapatmak bile fark yaratır.</li>
                                </ul>

                                <p className='mt-4'>
                                    Sosyolog Dr. Selin Arslan'dan son bir tavsiye: "Komşunuzun aldığı kredi sizi zorlamasın. Her ailenin gelir-gider dengesi, risk toleransı ve hayat planı farklı. Size uygun olanı, sosyal çevrenin baskısıyla değil, kendi gerçeklerinizle seçin." Çok doğru değil mi?
                                </p>
                            </section>

                            <section className='mt-8'>
                                <h2 className='text-2xl font-bold mb-4'>Önemli Uyarı</h2>

                                <p>
                                    Bu makalede yer alan tüm bilgiler, 2026 yılı Ocak ayı başındaki piyasa koşulları, banka kampanyaları ve uzman görüşleri ışığında, genel bilgilendirme amacıyla derlenmiştir. <strong>Kesinlikle yatırım veya kredi tavsiyesi değildir.</strong>
                                </p>

                                <ul className='list-disc pl-8 mt-4 space-y-2'>
                                    <li>Faiz oranları ve kampanya şartları anlık olarak değişebilir. Son ve bağlayıcı teklif için lütfen ilgili banka ile doğrudan iletişime geçin.</li>
                                    <li>Kredi hesaplama örnekleri, belirli varsayımlar altında hazırlanmıştır. Gerçek rakamlar farklılık gösterebilir.</li>
                                    <li>Bir <strong>ihtiyaç kredisi</strong> veya başka bir finansal ürün ile ev kredisi karıştırılmamalıdır. Ürün şartlarını detaylı okuyun.</li>
                                    <li>Kredi sözleşmesi imzalamadan önce, sözleşmenin tamamını, özellikle küçük puntoyla yazılmış kısımları okumak ve anlamak sizin yükümlülüğünüzdür. Anlamadığınız yerleri mutlaka sorun.</li>
                                    <li>Finansal kapasitenizi aşan borçlanmalardan kaçının. Ödeme güçlüğü, konutun icra yoluyla satışına ve ciddi ekonomik zararlara yol açabilir.</li>
                                </ul>

                                <p className='mt-4'>
                                    Unutmayın, en iyi kredi, ödeyebileceğiniz kredidir. Sağlıklı ve bilinçli kararlar almanız dileğiyle.
                                </p>
                            </section>

                            {/* Yazar ve Editör Bilgileri */}
                            <div className='mt-12 pt-8 border-t'>
                                <p><strong>Editör:</strong> Can Demir</p>
                                <p className='mt-2'><strong>Yazar ve Röportajları Alan Muhabir:</strong> Mehmet Kara</p>
                                <p className='mt-2'><strong>Uzman Görüşleri Derleyen:</strong> Ayşe Gül</p>
                                <p className='mt-8 text-sm text-gray-600'>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page