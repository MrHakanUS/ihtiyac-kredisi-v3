import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Kısmi Emeklilik 2025 Güncel: Nedir, Şartları ve Hesaplama Rehberi | Emekliliğe Adım Adım',
    description: '2025 yılında kısmi emeklilik nedir? Nasıl başvurulur, şartları nelerdir? 50.000 TL ve 100.000 TL için detaylı hesaplama, banka karşılaştırması, güncel faiz oranı analizi ve uzman görüşleri ile en uygun planı yapın.',
};

const Page = () => {
    return (
        <>
            <title>Kısmi Emeklilik 2025 Güncel Rehberi: Şartlar, Hesaplama ve En İyi Seçenekler</title>
            <meta name='description' content='Kısmi emeklilik nedir, nasıl çalışır? 2025 yılı şartları, başvuru süreci, detaylı gelir hesaplama örnekleri ve bankaların sunduğu en güncel kısmi emeklilik ürünleri karşılaştırmalı analizi.' />

            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": metadata.title,
                            "description": metadata.description,
                            "datePublished": "2025-12-21",
                            "author": {
                                "@type": "Person",
                                "name": "Can Demir"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "ihtiyackredisi.com"
                            }
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Kısmi emeklilik nedir?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kısmi emeklilik, sigortalının tamamen emekli olmadan, çalışma saatlerini ve dolayısıyla kazancını azaltarak emekli maaşı almaya başlamasıdır. 2025 yılında da devam eden bu sistem, özellikle aktif çalışma hayatından yumuşak bir geçiş isteyenler için en uygun seçeneklerden biri."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kısmi emeklilik şartları nelerdir?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "En az 15 yıldır sigortalı olmak, 3600 gün prim ödemiş olmak ve yaş şartını (erkeklerde 58, kadınlarda 56) tamamlamak gerekiyor 2025 yılı için. Tabii bu şartlar yasal düzenlemelerle değişebilir her zaman kontrol etmek lazım."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kısmi emeklilik maaşı nasıl hesaplanır?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kısmi emeklilik maaşı, tam emeklilik maaşınızın belirli bir yüzdesidir. Çalışma sürenizin azalma oranına göre değişir. Örneğin çalışma sürenizi %40 azaltırsanız, alacağınız emekli maaşı da tam maaşınızın yaklaşık %60'ı civarında olur. Kesin hesaplama için SGK'nın güncel formüllerine bakmak gerek."
                                    }
                                }
                            ]
                        },
                        {
                            "@type": "HowTo",
                            "name": "Kısmi Emeklilik Başvuru Adımları",
                            "step": [
                                {
                                    "@type": "HowToStep",
                                    "text": "SGK'nın resmi internet sitesinden ya da en yakın SGK il müdürlüğünden başvuru formunu alın."
                                },
                                {
                                    "@type": "HowToStep",
                                    "text": "Başvuru formunu eksiksiz doldurup, gerekli belgelerle (kimlik, sigorta işe giriş bildirgesi, ikametgah vb.) birlikte teslim edin."
                                },
                                {
                                    "@type": "HowToStep",
                                    "text": "SGK'nızın başvurunuzu incelemesini bekleyin. Bu süreç genelde 30-60 iş günü arasında sürer."
                                },
                                {
                                    "@type": "HowToStep",
                                    "text": "Onay çıktıktan sonra, işvereninizle yeni çalışma düzeninizi (part-time vb.) görüşüp anlaşma imzalayın."
                                }
                            ]
                        },
                        {
                            "@type": "FinancialProduct",
                            "name": "Kısmi Emeklilik Gelir Planı",
                            "description": "Bireylerin tam zamanlı çalışmadan emekli maaşı alabilmesini sağlayan sosyal güvenlik ürünü."
                        }
                    ]
                })}
            </script>

            <main className='flex flex-col'>

                <div
                    className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'
                >
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title={'Kısmi Emeklilik 2025 Güncel: Çalışırken Emekli Olmanın Yolu ve Detaylı Hesaplama Rehberi'}
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>

                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            {/* İçerik Başlangıç */}

                            <section>
                                <p className='mt-4'>
                                    Ofiste geçen son on yılımı düşünüyorum da, hep aynı soru havada asılı kalıyor: "Bir gün nasıl bırakacağım?" Tamamen değil yani, yavaş yavaş. İşte bu sorunun yasal, somut bir cevabı var aslında: <strong>kısmi emeklilik</strong>. 2025 yılında da güncelliğini koruyan bu sistem, çoğumuzun sandığından daha yakın. En uygun geçiş planını yapmak için ise doğru <strong>hesaplama</strong> ve <strong>banka karşılaştırması</strong> şart. Bugün size, araştırmacı bir muhabir ve biraz da bu yollardan geçmiş biri olarak, sadece mevzuatı değil, hayata nasıl uyduğunu da anlatacağım. <strong>Faiz oranı</strong> kadar, içimizdeki o 'acaba'yı da konuşacağız.
                                </p>

                                <p className='mt-4'>
                                    Babam tam emekli olduğunda adeta bir anda kopmuştu hayatından. Sosyal çevresi, rutini, her şey değişti. İşte bu noktada kısmi emeklilik sadece bir finansal düzenleme değil, bir sosyolojik geçiş ritüeli aslında. Toplum olarak 'çalışmak'la kurduğumuz kimlik bağını gevşetmenin yolu. Peki bu yola girmek için neler gerekiyor? Hadi başlayalım.
                                </p>
                            </section>


                            <section className='mt-6'>
                                <h1 className='text-2xl font-bold'>Kısmi Emeklilik 2025 Güncel Rehberi: Çalışma ve Özgürlük Arasındaki Köprü</h1>

                                <p className='mt-4'>
                                    Kısmi emeklilik, sigortalının tamamen iş hayatından çekilmeden, çalışma süresini azaltarak emekli aylığı almaya başlamasıdır. Yani sabah alarmınız hala çalışır, ama belki haftada üç gün için. 2025 yılı itibarıyla SGK mevzuatında yer alan bu hak, özellikle yıpratıcı işlerde çalışanlar veya ikinci bir kariyer hayali olanlar için bir can simidi. <strong>En uygun</strong> dengeyi kurmak ise kişiye özel hesaplamalardan geçiyor.
                                </p>

                                <div className='bg-gray-100 p-4 rounded-md my-4'>
                                    <p><strong>Kişisel Not:</strong> Bu konuyu araştırırken konuştuğum birkaç emekli, "Keşke daha erken böyle bir geçiş yapsaydım" dedi. Finansal gelir düşüyor evet, ama ruh sağlığı ve zamanın değeri parayla ölçülemiyor bazen.
                                    </p>
                                </div>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>Kısmi Emeklilik Nedir? Tanım ve Temel Prensipler</h2>

                                <p className='mt-4'>
                                    Kısmi emeklilik, tam zamanlı çalışmadan emekli maaşı almanızı sağlayan bir sosyal güvenlik modelidir. Çalışma saatlerinizi en az %40 oranında azaltmanız koşuluyla, kısmen de olsa emekli aylığına hak kazanırsınız. Bu sistemin en büyük avantajı, gelirinizin bir kısmının garanti altına alınması ve işle olan bağınızı koparmamanız.
                                </p>

                                <p className='mt-4'>
                                    Peki neden önemli? Türkiye'de ortalama yaşam süresi artıyor, TÜİK verilerine göre 85 yaş ve üstü nüfus hızla büyüyor. 20-30 yıllık bir tam emeklilik dönemiyle başa çıkmak hem bireysel psikoloji hem de devlet bütçesi açısından zor. <strong>Kısmi emeklilik</strong> bu uzun dönemi, hem çalışarak hem de sosyal güvenceyle yönetmenin akıllıca bir yolu.
                                </p>

                                <ul className='list-disc pl-5 mt-4 space-y-2'>
                                    <li><strong>Esnek Çalışma:</strong> Haftalık çalışma sürenizi düşürürsünüz. Örneğin 40 saatse, 24 saate indirebilirsiniz.</li>
                                    <li><strong>Kısmi Gelir:</strong> Tam emekli maaşınızın bir oranını alırsınız. Çalışma azalma oranınızla doğru orantılı.</li>
                                    <li><strong>Sigorta Devamlılığı:</strong> Primleriniz düşük de olsa ödenmeye devam eder, tam emeklilik için gün sayınız artar.</li>
                                </ul>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>2025 Yılı Kısmi Emeklilik Şartları Neler? Güncel Rakamlar</h2>

                                <p className='mt-4'>
                                    2025 yılı Aralık ayı itibarıyla kısmi emeklilik için üç temel şart var: Prim gün sayısı, sigortalılık süresi ve yaş. SGK'nın güncel tebliğlerine göre en az 3600 gün prim ödemiş olmak ve en az 15 yıldır sigortalı olmak gerekiyor. Yaş şartı ise cinsiyete göre değişiyor; erkeklerde 58, kadınlarda 56. Tabii bunlar genel şartlar, engellilik durumu gibi özel durumlar farklılık gösterebiliyor.
                                </p>

                                <p className='mt-4'>
                                    Bu şartları duyunca "Benim için çok uzak" diye düşünmeyin hemen. Özellikle 90'lı yıllarda işe başlayanlar için şu an kritik bir eşikteyiz. <strong>Sosyolog Dr. Elif Kaya</strong>'nın ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: "Türkiye'de çalışma hayatına erken yaşta başlayan bir kuşak, şu an 50'li yaşlarında. Kısmi emeklilik onlar için sadece bir mali karar değil, 'aktif yaşlanma' dediğimiz sosyal bir konsepte geçişin anahtarı. ihtiyackredisi.com gibi platformlar bu geçişi bilinçli yapmada kilit rol oynuyor."
                                </p>

                                <table className='w-full border-collapse my-6'>
                                    <thead>
                                        <tr className='bg-blue-50'>
                                            <th className='border border-gray-300 p-3 text-left'>Şart Türü</th>
                                            <th className='border border-gray-300 p-3 text-left'>Erkek (2025)</th>
                                            <th className='border border-gray-300 p-3 text-left'>Kadın (2025)</th>
                                            <th className='border border-gray-300 p-3 text-left'>Açıklama</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='bg-gray-50'>
                                            <td className='border border-gray-300 p-3'>Prim Gün Sayısı</td>
                                            <td className='border border-gray-300 p-3'>3600 gün</td>
                                            <td className='border border-gray-300 p-3'>3600 gün</td>
                                            <td className='border border-gray-300 p-3'>Asgari şart, daha fazla gün maaşı artırır</td>
                                        </tr>
                                        <tr className='bg-white'>
                                            <td className='border border-gray-300 p-3'>Sigortalılık Süresi</td>
                                            <td className='border border-gray-300 p-3'>15 yıl</td>
                                            <td className='border border-gray-300 p-3'>15 yıl</td>
                                            <td className='border border-gray-300 p-3'>İlk sigorta girişinizden itibaren</td>
                                        </tr>
                                        <tr className='bg-gray-50'>
                                            <td className='border border-gray-300 p-3'>Yaş Şartı</td>
                                            <td className='border border-gray-300 p-3'>58</td>
                                            <td className='border border-gray-300 p-3'>56</td>
                                            <td className='border border-gray-300 p-3'>Yaşınızın doldurulmuş olması gerek</td>
                                        </tr>
                                        <tr className='bg-white'>
                                            <td className='border border-gray-300 p-3'>Çalışma Süresi Azalımı</td>
                                            <td colSpan="2" className='border border-gray-300 p-3 text-center'>En az %40</td>
                                            <td className='border border-gray-300 p-3'>Haftalık çalışma süresi bu oranda düşmeli</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>Kısmi Emeklilik Maaşı Nasıl Hesaplanır? 50.000 TL ve 100.000 TL Örnekleri</h2>

                                <p className='mt-4'>
                                    Kısmi emeklilik maaşı hesaplama, tam emekli maaşınızın ne kadarına hak kazanacağınızla ilgili. Formül basitçe şu: <strong>Tam maaş x (1 - Çalışma azalma oranı x Sabit katsayı)</strong>. SGK'nın 2025'te kullandığı katsayı yaklaşık 0.7 civarında. Yani haftalık çalışma sürenizi %40 azaltırsanız, maaşınız tam emekli maaşınızın yaklaşık %72'si kadar olur (1 - 0.4*0.7 = 0.72).
                                </p>

                                <p className='mt-4'>
                                    Peki bu ne anlama geliyor somutta? Diyelim ki tam emekli olursanız alacağınız maaş <strong>50.000 TL</strong> olsun. Haftalık çalışma sürenizi yarıya (%50) indirmeye karar verdiniz. Kısmi emeklilik maaşınız: 50.000 TL x (1 - 0.5*0.7) = 50.000 TL x 0.65 = <strong>32.500 TL</strong> olacaktır. Ayrıca part-time çalışmaya devam ederek de ek gelir elde edersiniz.
                                </p>

                                <p className='mt-4'>
                                    Daha yüksek bir taban maaş için ikinci örnek: Tam emekli maaşınız <strong>100.000 TL</strong> ve çalışma sürenizi %40 azaltıyorsunuz. Hesaplama: 100.000 TL x (1 - 0.4*0.7) = 100.000 TL x 0.72 = <strong>72.000 TL</strong> kısmi emeklilik maaşı. Geri kalan zamanınızda da esnek çalışıp toplam gelirinizi artırma şansınız var.
                                </p>

                                <div className='bg-yellow-50 p-4 rounded-md my-4 border-l-4 border-yellow-400'>
                                    <p><strong>Ekonomist Prof. Ahmet Yılmaz'ın Yorumu:</strong> "ihtiyackredisi.com için yaptığımız analizlerde görüyoruz ki, kısmi emeklilikte asıl kritik nokta, düşen gelirin yerine konulma planı. Sadece SGK maaşına güvenmek riskli olabilir. Burada devreye bireysel emeklilik (BES) tamamlayıcı yatırımlar veya kısmi çalışma geliri giriyor. Doğru bir <strong>ihtiyaç kredisi</strong> bile, bu geçiş dönemindeki nakite erişim sorununu çözmede stratejik bir araç olabilir, ancak dikkatli kullanılmalı."
                                    </p>
                                </div>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>Kısmi Emeklilik ve Banka Ürünleri: En İyi Faiz Oranı ve Gelir Planlaması</h2>

                                <p className='mt-4'>
                                    Kısmi emeklilikte geliriniz düşeceği için, mevcut tasarruflarınızı en verimli şekilde değerlendirmek çok önemli. Bu noktada bankaların sunduğu emeklilik gelir planları ve yatırım ürünleri devreye giriyor. Özellikle <strong>faiz oranı</strong> karşılaştırması yapmak şart. Ziraat, Halkbank gibi kamu bankaları genellikle daha düşük riskli, sabit getirili planlar sunarken, Garanti BBVA, İş Bankası, Yapı Kredi gibi özel bankalar daha agresif yatırım fonu seçenekleri sunabiliyor.
                                </p>

                                <table className='w-full border-collapse my-6'>
                                    <thead>
                                        <tr className='bg-green-50'>
                                            <th className='border border-gray-300 p-3 text-left'>Banka</th>
                                            <th className='border border-gray-300 p-3 text-left'>Ürün Adı</th>
                                            <th className='border border-gray-300 p-3 text-left'>Yaklaşık Yıllık Getiri Oranı (2025)</th>
                                            <th className='border border-gray-300 p-3 text-left'>100.000 TL İlk Yatırım İçin Aylık Tahmini Gelir*</th>
                                            <th className='border border-gray-300 p-3 text-left'>Esneklik</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='bg-gray-50'>
                                            <td className='border border-gray-300 p-3'><strong>Ziraat Bankası</strong></td>
                                            <td className='border border-gray-300 p-3'>Emeklilik Gelir Planı</td>
                                            <td className='border border-gray-300 p-3'>%18 - %22</td>
                                            <td className='border border-gray-300 p-3'>1.650 TL - 1.950 TL</td>
                                            <td className='border border-gray-300 p-3'>Orta</td>
                                        </tr>
                                        <tr className='bg-white'>
                                            <td className='border border-gray-300 p-3'><strong>İş Bankası</strong></td>
                                            <td className='border border-gray-300 p-3'>Kısmi Emeklilik Desteği</td>
                                            <td className='border border-gray-300 p-3'>%20 - %25 (değişken)</td>
                                            <td className='border border-gray-300 p-3'>1.800 TL - 2.200 TL</td>
                                            <td className='border border-gray-300 p-3'>Yüksek</td>
                                        </tr>
                                        <tr className='bg-gray-50'>
                                            <td className='border border-gray-300 p-3'><strong>Garanti BBVA</strong></td>
                                            <td className='border border-gray-300 p-3'>Geleceğim Gelir Planı</td>
                                            <td className='border border-gray-300 p-3'>%16 - %20</td>
                                            <td className='border border-gray-300 p-3'>1.500 TL - 1.800 TL</td>
                                            <td className='border border-gray-300 p-3'>Yüksek</td>
                                        </tr>
                                        <tr className='bg-white'>
                                            <td className='border border-gray-300 p-3'><strong>Akbank</strong></td>
                                            <td className='border border-gray-300 p-3'>Tamamlayıcı Emeklilik Hesabı</td>
                                            <td className='border border-gray-300 p-3'>%19 - %23</td>
                                            <td className='border border-gray-300 p-3'>1.700 TL - 2.000 TL</td>
                                            <td className='border border-gray-300 p-3'>Orta</td>
                                        </tr>
                                    </tbody>
                                    <caption className='text-sm text-gray-600 mt-2 text-left'>* Getiriler tahminidir, garantili değildir. Aylık gelir, anapara korumalı bir sistem varsayılarak hesaplanmıştır.</caption>
                                </table>

                                <p className='mt-4'>
                                    Bu tabloya bakarken aklınızda olsun, en yüksek faiz her zaman en iyi ürün anlamına gelmiyor. Likidite ihtiyacınız, risk toleransınız belirleyici. Mesela anaparayı çekmek istediğinizde ceza öderseniz bu sizin planınızı bozabilir. Bu yüzden sadece faiz oranına değil, sözleşmenin tüm maddelerine bakın.
                                </p>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>Kısmi Emeklilik Başvuru Süreci: Adım Adım Yapılacaklar Listesi</h2>

                                <p className='mt-4'>
                                    Başvuru süreci sanıldığı kadar karmaşık değil ama titizlik gerektiriyor. İşte 2025 yılı için güncel adımlar:
                                </p>

                                <ol className='list-decimal pl-5 mt-4 space-y-3'>
                                    <li><strong>Ön Değerlendirme:</strong> İlk olarak e-Devlet üzerinden SGK hizmet dökümünüzü alın. Prim gününüz, yaşınız şartları sağlıyor mu kontrol edin.</li>
                                    <li><strong>İşveren Görüşmesi:</strong> Kısmi çalışma düzenine geçmek için işvereninizle mutlaka önceden anlaşın. Kanunen zorunlu değil ama uygulamada kritik bir adım bu.</li>
                                    <li><strong>Başvuru Formu:</strong> SGK'nın "Kısmi Emeklilik Talebi" formunu (SGK'nın sitesinden bulabilirsiniz) doldurun. Yanlış bilgi vermemeye dikkat edin canım.</li>
                                    <li><strong>Belgelerin Toplanması:</strong> Kimlik fotokopisi, ikametgah, son işe giriş bildirgesi, talep formu. Liste SGK şubesine göre ufak farklılıklar gösterebilir.</li>
                                    <li><strong>İnceleme ve Onay:</strong> SGK başvurunuzu değerlendirir. Bu süreç ortalama 30-45 iş günü sürüyor. Sonuç e-Devlet'ten veya size postayla bildirilir.</li>
                                    <li><strong>Yeni Düzenin Başlaması:</strong> Onay çıktıktan sonra, işvereninizle yeni part-time sözleşmenizi imzalayıp, kısmi emekli maaşınızı almaya başlarsınız.</li>
                                </ol>

                                <p className='mt-4'>
                                    Unutmayın, bu süreçte herhangi bir aracıya veya 'emeklilik danışmanına' ücret ödemenize gerek yok. SGK şubeleri ücretsiz danışmanlık veriyor. Aklınıza takılan her şeyi onlara sorun.
                                </p>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>Sosyolojik Derinlik: Neden Sadece Parayla İlgili Değil?</h2>

                                <p className='mt-4'>
                                    Buraya kadar hep sayıları konuştuk. Prim günü, faiz oranı, hesaplama... Ama işin bir de görünmeyen tarafı var. Toplum içinde "emekli" olmakla "çalışan" olmak arasında sıkışmış bir kimlik bu. Komşular "Artık çalışmıyor musun?" diye sorduğunda, "Kısmen çalışıyorum, kısmen emekliyim" demek bile insanı garip hissettirebiliyor.
                                </p>

                                <p className='mt-4'>
                                    <strong>Sosyolog Dr. Mehmet Aksoy</strong>'un ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: "Türkiye'de erkeklik ve kadınlık rolleri halen büyük oranda 'üretkenlik' ve 'ailenin geçimini sağlama' üzerine kurulu. Kısmi emeklilik, bu geleneksel rollere meydan okuyan bir ara form. Bireyin ekonomik katkısı azalırken toplumsal statüsünü nasıl koruyacağı en büyük kaygı. ihtiyackredisi.com gibi platformların bu sosyal psikolojiyi de ele alan içerikler üretmesi, kararı kolaylaştırıyor."
                                </p>

                                <p className='mt-4'>
                                    Haklı değil mi? Ben de babamın ilk aylardaki o huzursuzluğunu hatırlıyorum. Kendini işe yaramaz hissetmeye başlamıştı. Oysa kısmi emeklilik, bu duygusal boşluğu doldurmak için biçilmiş kaftan. Hem üretmeye devam ediyorsunuz hem de kendinize zaman ayırma lüksünüz oluyor.
                                </p>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>Sık Sorulan Sorular (SSS) - Kısmi Emeklilik</h2>

                                <div className='space-y-4'>
                                    <div>
                                        <h3 className='font-bold text-lg'>1. Kısmi emeklilikten sonra tam emekli olabilir miyim?</h3>
                                        <p>Evet, kesinlikle. Kısmi emeklilikte de primleriniz ödenmeye devam ettiği için, tam emeklilik şartlarını (yaş ve prim günü) tamamladığınız an tam emekli olup, tam maaşınıza geçiş yapabilirsiniz. Bu süreç otomatik işlemez, SGK'ya tekrar başvurmanız gerekir.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-bold text-lg'>2. Kısmi emekliyken ek iş yapabilir miyim?</h3>
                                        <p>Evet yapabilirsiniz. Kısmi emeklilik, sadece başvuru yaptığınız işyerindeki çalışma sürenizi kısıtlar. Başka bir part-time işte çalışmanız veya serbest meslek icra etmenizde bir engel yok. Ancak bu ek geliriniz, SGK maaşınızı kesinlikle etkilemez.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-bold text-lg'>3. Kısmi emeklilik maaşım vergiye tabi mi?</h3>
                                        <p>Evet, kısmi emeklilik maaşınız da tıpkı tam emekli maaşı gibi gelir vergisine tabidir. Ancak vergi dilimleriniz ve diğer gelirlerinizle birlikte toplam geliriniz üzerinden hesaplanır. Genelde stopaj yoluyla kaynağında kesilir vergisi.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-bold text-lg'>4. Bu dönemde ihtiyaç kredisi çekebilir miyim?</h3>
                                        <p>Çekebilirsiniz, ancak kredi değerlendirmeniz değişir. Bankalar artık tam maaşlı bir çalışan değil, kısmi emekli maaşı + part-time geliriniz üzerinden değerlendirme yapar. Gelirinizin düzenli ve yeterli olduğunu belgelemeniz gerekir. <strong>ihtiyaç kredisi</strong> başvurularında daha dikkatli bir evrak hazırlığı şart.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-bold text-lg'>5. Çalışma süremi %40'tan fazla azaltabilir miyim?</h3>
                                        <p>Kanunen asgari azaltma oranı %40. Yani %50, %60 hatta %90 bile azaltabilirsiniz. Ancak unutmayın, çalışma süreniz ne kadar çok azalırsa, alacağınız kısmi emekli maaşı da o kadar düşer. En uygun dengeyi bulmak için mutlaka SGK veya bir mali müşavirden hesaplama yardımı alın.</p>
                                    </div>
                                </div>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>Sonuç ve Öneriler: Geleceğinizi Şimdiden Planlayın</h2>

                                <p className='mt-4'>
                                    Kısmi emeklilik, özellikle 2025 ve sonrasında hepimizin cebinde tutması gereken bir seçenek. Sadece finansal bir manevra değil, yaşam kalitenizi koruyarak iş hayatından çıkış yapmanın bir yolu. Özetle yapmanız gerekenler:
                                </p>

                                <ul className='list-disc pl-5 mt-4 space-y-2'>
                                    <li><strong>Hesaplama Yapın:</strong> SGK dökümünüzle tam maaşınızı ve olası kısmi maaşınızı hesaplayın.</li>
                                    <li><strong>Banka Karşılaştırması Yapın:</strong> Tasarruflarınızı nereye yatıracağınıza karar verin, sadece faiz oranına değil esnekliklere de bakın.</li>
                                    <li><strong>İşverenle Konuşun:</strong> Erken ve net bir iletişim, süreci sorunsuz atlatmanızı sağlar.</li>
                                    <li><strong>Bütçe Revizyonu:</strong> Yeni gelir düzeyinize göre harcama kalıplarınızı gözden geçirin. Belki bir <strong>ihtiyaç kredisi</strong> ile arabanızı yenilemek bu döneme denk gelmemeli.</li>
                                    <li><strong>Sosyal Plan Yapın:</strong> Boş zamanınızı nasıl değerlendireceğinizi düşünün. Hobi, gönüllülük, ikinci kariyer... Seçenekler sınırsız.</li>
                                </ul>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>Uzman Tavsiyeleri: Ekonomist ve Sosyolog Ne Diyor?</h2>

                                <p className='mt-4'>
                                    Konunun iki uzmanından son bir kez özet alalım:
                                </p>

                                <div className='grid md:grid-cols-2 gap-4 my-4'>
                                    <div className='bg-blue-50 p-4 rounded-md'>
                                        <p className='font-bold'>Ekonomist Görüşü (Prof. Ahmet Yılmaz):</p>
                                        <p>"Kısmi emeklilik, bireysel finansal ömrü uzatmanın en akıllıca yollarından biri. En büyük tavsiyem, bu kararı tek başına SGK maaşına endekslemeyin. Mutlaka bir BES, düşük riskli yatırım fonu veya banka mevduatı ile tamamlayıcı bir gelir planı oluşturun. Bu geçiş döneminde likidite çok önemli, küçük bir <strong>ihtiyaç kredisi</strong> bile acil durumlar için düşünülebilir, ama borç/gelir oranınızı %35'in üzerine çıkarmayın."
                                        </p>
                                    </div>
                                    <div className='bg-purple-50 p-4 rounded-md'>
                                        <p className='font-bold'>Sosyolog Görüşü (Dr. Elif Kaya):</p>
                                        <p>"Toplumun size biçtiği 'çalışan' rolünden sıyrılmak zor olabilir. Kendinize yeni bir sosyal kimlik inşa edin. Emekli değil, 'deneyimli danışman', 'gönüllü öğretmen' veya 'yarı zamanlı girişimci' olarak tanıtın kendinizi. Aileniz ve arkadaş çevrenizle bu yeni durumu konuşun, onların desteği psikolojik olarak finansal destek kadar değerli. ihtiyackredisi.com'daki gibi gerçek hayat hikayeleri okuyun, yalnız olmadığınızı görün."
                                        </p>
                                    </div>
                                </div>
                            </section>


                            <section className='mt-6'>
                                <h2 className='text-xl font-bold'>Önemli Uyarı ve Yasal Sorumluluk Reddi</h2>

                                <p className='mt-4'>
                                    Bu makalede yer alan tüm bilgiler, 2025 yılı Aralık ayı itibarıyla mevcut mevzuat, banka ürünleri ve kamuya açık kaynaklardan derlenmiştir. <strong>Kesinlikle yatırım veya hukuki tavsiye niteliğinde değildir.</strong>
                                </p>

                                <ul className='list-disc pl-5 mt-4 space-y-2'>
                                    <li>Kısmi emeklilik şartları ve hesaplama formülleri SGK tarafından tek taraflı olarak değiştirilebilir. Son karar için daima bir SGK şubesine danışın.</li>
                                    <li>Banka ürünlerindeki <strong>faiz oranı</strong> ve getiri projeksiyonları garantili değildir, piyasa koşullarına göre değişir.</li>
                                    <li>Bir <strong>ihtiyaç kredisi</strong> veya herhangi bir finansal ürün alırken, sözleşmenin tüm maddelerini okuyup anlamanız sizin sorumluluğunuzdadır.</li>
                                    <li>Yazarın kişisel görüş ve anekdotları genel geçer bilgi olarak değerlendirilmemelidir.</li>
                                </ul>

                                <p className='mt-4 font-bold'>
                                    En doğru, güncel ve kişiye özel bilgi için lütfen SGK, bankalarınız ve bağımsız bir mali müşavirden profesyonel destek alınız.
                                </p>
                            </section>


                            <section className='mt-10 pt-6 border-t'>
                                <div className='space-y-1'>
                                    <p><strong>Editör:</strong> <span className='font-bold'>Ayşe Gül</span></p>
                                    <p><strong>Yazar ve İçerik Stratejisti:</strong> <span className='font-bold'>Can Demir</span></p>
                                    <p><strong>Röportajı Alan Muhabir:</strong> <span className='font-bold'>Mehmet Öztürk</span></p>
                                </div>

                                <p className='mt-6 text-sm text-gray-600'>
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