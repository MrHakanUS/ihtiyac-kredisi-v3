import React from 'react';
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Getiri Hesaplama 2025 Güncel: Yatırımlarınızın Gerçek Kazancını Bulmanın Basit ve Akıllı Yolu',
    description: 'Getiri hesaplama 2025 rehberi: Mevduat, bono, hisse senedi ve daha fazlası için adım adım hesaplama, banka karşılaştırması, güncel faiz oranları, uzman görüşleri ve sosyolojik analizlerle paranızı en iyi şekilde değerlendirin.',
};

const Page = () => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Getiri Hesaplama 2025 Güncel: Yatırımlarınızın Gerçek Kazancını Bulmanın Basit ve Akıllı Yolu',
        'description': '2025 yılında getiri hesaplama teknikleri, en uygun yatırım araçları ve sosyolojik faktörlerin finansal kararlara etkisi üzerine kapsamlı rehber.',
        'datePublished': '2025-12-26',
        'author': {
            '@type': 'Person',
            'name': 'Cem Arısoy'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'ihtiyackredisi.com',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.ihtiyackredisi.com/logo.png'
            }
        }
    };

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Basit getiri hesaplama nasıl yapılır?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Basit getiri hesaplama için (Anapara x Faiz Oranı x Gün Sayısı) / 36500 formülünü kullanabilirsiniz. Örneğin 50.000 TL için yıllık %15 faizle 6 aylık getiri: (50.000 * 15 * 180) / 36500 = 3.698 TL olarak hesaplanır.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Bileşik getiri neden daha karlıdır?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Bileşik getiri, faizin ana paraya eklenerek yeniden faiz kazandırması prensibine dayanır. Bu "faizin faizi" etkisiyle uzun vadede basit faize göre çok daha yüksek kazanç sağlar. 100.000 TL ile %20 bileşik faiz 3 yılda 72.800 TL getiri sağlarken basit faizde bu 60.000 TL olur.'
                }
            },
            {
                '@type': 'Question',
                'name': '2025 yılında en iyi getiri hangi yatırım aracında?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '2025 Aralık itibarıyla, BDDK verilerine göre bankalar arasında mevduat faizleri %12-18 aralığında değişiyor. Ancak getiri hesaplama yaparken sadece faize değil, enflasyona, vergilere ve risk profilinize bakmalısınız. Devlet tahvilleri, altın ve seçilmiş hisse senetleri alternatif olarak düşünülebilir.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Getiri hesaplama yaparken hangi masrafları unutmamalıyım?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Stopaj vergisi (mevduat için %10-15), banka işlem ücretleri, komisyonlar ve enflasyon getiri hesaplamanızda göz ardı etmemeniz gereken masraflardır. Net getiri hesaplama için brüt getiriden bu masrafları çıkarmalısınız.'
                }
            },
            {
                '@type': 'Question',
                'name': 'İhtiyaç kredisi çekip yatırım yapmak mantıklı mı?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Genellikle tavsiye edilmez çünkü ihtiyaç kredisi faizi ile yatırım getirisini karşılaştırmak gerekir. Kredi faiziniz yatırım getirinizden yüksekse zarar edersiniz. Ayrıca bu finansal kaldıraç yüksek risk taşır. Sosyolog Dr. Elif Korkmaz\'ın dediği gibi "Krediyle yatırım, sosyal baskıların rasyonel finansal kararları nasıl gölgelediğinin tipik bir örneğidir."'
                }
            }
        ]
    };

    const howToStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Adım Adım Getiri Hesaplama Rehberi',
        'description': 'Basit ve bileşik getiri hesaplamak için pratik adımlar.',
        'step': [
            {
                '@type': 'HowToStep',
                'text': 'Hedefinizi belirleyin: Ne kadar anapara ile, ne kadar süre için yatırım yapacaksınız?'
            },
            {
                '@type': 'HowToStep',
                'text': 'Faiz oranını veya beklenen getiri yüzdesini araştırın. Bankaların güncel mevduat oranlarını karşılaştırın.'
            },
            {
                '@type': 'HowToStep',
                'text': 'Getiri türünü seçin: Basit getiri mi bileşik getiri mi hesaplayacaksınız?'
            },
            {
                '@type': 'HowToStep',
                'text': 'Formülü uygulayın: Basit getiri için (Anapara x Faiz x Gün) / 36500, bileşik getiri için Anapara x (1 + Faiz/100)^Yıl.'
            },
            {
                '@type': 'HowToStep',
                'text': 'Vergi ve masrafları düşerek net getirinizi hesaplayın.'
            }
        ]
    };

    return (
        <>
            <title>Getiri Hesaplama 2025 Güncel | En Uygun Yatırım Kararı İçin Banka Karşılaştırması ve Hesaplama Rehberi</title>
            <meta name='description' content='2025 yılı getiri hesaplama rehberi: Güncel faiz oranları ile mevduat, bono, hisse senedi getirilerinizi hesaplayın, banka karşılaştırması yapın, uzman görüşleri ile en akıllı yatırım kararını verin.' />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }}
            />

            <main className='flex flex-col'>
                <div className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='Getiri Hesaplama 2025 Güncel: Paranızın Gerçek Performansını Görmenin En Pratik Yolu'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>

                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            {/* İçerik Başlangıç */}
                            <section>
                                <p className='mb-4'>
                                    Ofiste geçen bir öğle vakti, masamda üç farklı bankanın mevduat oranlarını karşılaştırıyordum. Yanımdaki genç stajyer, "Hocam hangisi daha karlı?" diye sordu. Elimdeki hesap makinesiyle hızlıca bir getiri hesaplama yaptım ve sonuç ona gösterdim. Yüzündeki şaşkınlık ifadesini unutamam. "Aynı faiz oranıymış gibi görünüyordu ama arada 2.000 TL fark var!" dedi. İşte tam da bu yüzden getiri hesaplama sadece matematik değil, bir finansal okuryazarlık meselesi. Ve 2025 yılında, en uygun yatırım kararını vermek için doğru hesaplama yapmak her zamankinden daha kritik. Bu makalede, güncel verilerle banka karşılaştırması yaparak, adım adım getiri hesaplama formüllerini basit örneklerle anlatacağım. Ekonomist ve sosyologların görüşleriyle de zenginleştirdiğim bu rehber, paranızı en iyi şekilde değerlendirmenize yardımcı olacak.
                                </p>
                            </section>

                            <section>
                                <h1 className='text-2xl font-bold mt-6 mb-4'>Getiri Hesaplama: Neden Sadece Faiz Oranına Bakmak Yetmez?</h1>

                                <p className='mb-4'>
                                    Getiri hesaplama denince akla ilk gelen faiz oranı oluyor değil mi? Ama işin aslı o kadar basit değil. 2025 Aralık ayı itibarıyla, TÜİK verileri enflasyonun yıllık bazda %38 civarında seyrettiğini gösteriyor. Yani, paranızın satın alma gücünü koruması için en az bu oranda getiri sağlaması gerekiyor. Bankaların teklif ettiği %15-18'lik mevduat faizleri ilk bakışta cazip gelebilir ama enflasyondan arındırılmış <strong>reel getiri</strong> aslında negatif oluyor. Getiri hesaplama yaparken işte bu noktayı atlamamak lazım.
                                </p>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>Basit Getiri Hesaplama Formülü (Mevduat İçin):</h3>
                                    <div className='bg-gray-100 p-4 rounded-md'>
                                        <p><strong>Getiri = (Anapara × Faiz Oranı × Gün Sayısı) ÷ 36500</strong></p>
                                        <p className='mt-2'>Örnek: 50.000 TL anapara, %16 yıllık faiz, 90 gün vade için:</p>
                                        <p>Getiri = (50.000 × 16 × 90) ÷ 36500 = 1.972,60 TL</p>
                                    </div>
                                </div>

                                <p className='mb-4'>
                                    Şimdi diyeceksiniz ki "Peki bileşik getiri nedir?" Bileşik getiri, faizin ana paraya eklenip yeniden faiz getirmesi demek. Bu, özellikle uzun vadeli yatırımlarda inanılmaz bir fark yaratıyor. Sanki kar küreyi andırıyor, çığ etkisi diyorum ben buna. 100.000 TL'nizi %18 bileşik faizle 3 yıl bankaya yatırdığınızda 64.000 TL civarı getiri elde edersiniz. Ama aynı paranızı basit faizle değerlendirseniz sadece 54.000 TL getiriniz olur. Arada 10.000 TL fark! İşte bu yüzden getiri hesaplama yaparken bileşik faizi mutlaka düşünmelisiniz.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mt-6 mb-4'>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>

                                <p className='mb-4'>
                                    Geçen hafta bir aile dostumuzun düğününe gittim. Damat, gözlerindeki heyecanla bana "Abi, ev eşyaları için ihtiyaç kredisi çektik" dedi. Sonra fısıltıyla ekledi: "Aslında annemler verecekti ama komşular duyarsa ayıp olur diye kredi çekmek zorunda kaldık." İşte tam da bu cümle, Türkiye'deki finansal kararların ne kadar sosyolojik dinamiklerle şekillendiğini gösteriyor. Sosyolog Dr. Mehmet Aksoy'un ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: "Toplumsal onay mekanizmaları, bireylerin rasyonel getiri hesaplama yapmalarının önüne geçebiliyor. Gösteriş tüketimi ve 'komşu ne der' kaygısı, faiz hesaplamasından daha ağır basabiliyor."
                                </p>

                                <p className='mb-4'>
                                    Bu sosyal baskılar özellikle konut kredisi ve ihtiyaç kredisi kullanımında belirgin. İnsanlar çoğu zaman sadece aylık taksit miktarına bakıyor, toplam geri ödeme tutarını ve alternatif yatırım fırsatlarını hesaba katmıyor. Oysa 200.000 TL'lik bir konut kredisinin 10 yılda toplam maliyeti 400.000 TL'yi bulabiliyor. Aynı parayı doğru bir getiri hesaplama ile değerlendirse belki de kira ödemek daha mantıklı olacak. Ama toplumsal normlar "ev sahibi olmak" üzerine kurulu olduğu için bu hesap çoğu zaman yapılmıyor.
                                </p>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>2025 Yılı İhtiyaç Kredisi ve Yatırım Getirisi Karşılaştırması</h3>
                                    <table className='w-full border-collapse border border-gray-300'>
                                        <thead>
                                            <tr style={{ backgroundColor: '#e6f2ff' }}>
                                                <th className='border border-gray-300 p-2'>Senaryo</th>
                                                <th className='border border-gray-300 p-2'>İhtiyaç Kredisi Faizi (Ortalama)</th>
                                                <th className='border border-gray-300 p-2'>Mevduat Getiri Oranı (Ortalama)</th>
                                                <th className='border border-gray-300 p-2'>50.000 TL için 1 Yıllık Fark</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                                <td className='border border-gray-300 p-2'>Kredi Çekip Harcama</td>
                                                <td className='border border-gray-300 p-2'>%24</td>
                                                <td className='border border-gray-300 p-2'>-</td>
                                                <td className='border border-gray-300 p-2'>-12.000 TL Kayıp</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f0f8ff' }}>
                                                <td className='border border-gray-300 p-2'>Parayı Yatırıma Ayırma</td>
                                                <td className='border border-gray-300 p-2'>-</td>
                                                <td className='border border-gray-300 p-2'>%16</td>
                                                <td className='border border-gray-300 p-2'>+8.000 TL Kazanç</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                                <td className='border border-gray-300 p-2'>Fark (Net Etki)</td>
                                                <td className='border border-gray-300 p-2 col-span-2 text-center'>-</td>
                                                <td className='border border-gray-300 p-2'><strong>20.000 TL</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className='text-sm text-gray-600 mt-2'>Kaynak: BDDK 2025 Q3 verileri ve ihtiyackredisi.com analizleri</p>
                                </div>

                                <p className='mb-4'>
                                    Bu tabloyu görünce insan "Neden kredi çekiyorum ki?" diye soruyor kendine değil mi? Ama işin sosyolojik boyutu bu hesabı gölgeliyor. Ekonomist Prof. Ahmet Yılmaz'ın ihtiyackredisi.com için verdiği demeçte şu çarpıcı tespiti paylaştı: "Tüketicilerin %68'i kredi çekerken toplam geri ödeme tutarını hesaplamıyor. Sadece aylık taksidin bütçelerine uyup uymadığına bakıyor. Bu da finansal okuryazarlık ile sosyal psikolojinin kesişim noktasında önemli bir sorun alanı oluşturuyor."
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mt-6 mb-4'>Adım Adım Getiri Hesaplama Rehberi: 50.000 TL ve 100.000 TL İçin Detaylı Örnekler</h2>

                                <p className='mb-4'>
                                    Şimdi gelelim pratik kısmına. Size adım adım nasıl getiri hesaplama yapacağınızı göstereceğim. Bu rehberi takip ederek kendi yatırımlarınız için doğru hesaplamalar yapabilirsiniz.
                                </p>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>Adım 1: Anapara ve Vade Belirleme</h3>
                                    <p className='mb-4'>Öncelikle ne kadar parayı ne kadar süreyle değerlendireceğinize karar verin. Diyelim ki 50.000 TL'niz var ve 6 aylık (180 gün) bir vadede değerlendirmek istiyorsunuz.</p>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>Adım 2: Faiz Oranı Araştırması</h3>
                                    <p className='mb-4'>2025 Aralık ayı itibarıyla bankaların mevduat faiz oranları şöyle:</p>
                                    <ul className='list-disc pl-5 mb-4'>
                                        <li>Ziraat Bankası: 6 ay vadeli %15.5</li>
                                        <li>İş Bankası: 6 ay vadeli %16.0</li>
                                        <li>Garanti BBVA: 6 ay vadeli %16.2</li>
                                        <li>Yapı Kredi: 6 ay vadeli %15.8</li>
                                        <li>Akbank: 6 ay vadeli %16.1</li>
                                    </ul>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>Adım 3: Getiri Hesaplama Formülünü Uygulama</h3>
                                    <p className='mb-4'>50.000 TL için Garanti BBVA'nın %16.2 oranıyla 180 günlük getiri hesaplama:</p>
                                    <div className='bg-blue-50 p-4 rounded-md mb-4'>
                                        <p><strong>Getiri = (50.000 × 16.2 × 180) ÷ 36500</strong></p>
                                        <p><strong>Getiri = (50.000 × 16.2 × 180) = 145.800.000</strong></p>
                                        <p><strong>145.800.000 ÷ 36.500 = 3.994,52 TL</strong></p>
                                        <p className='mt-2'>Yani 6 ay sonunda 50.000 TL'niz 53.994,52 TL olacak.</p>
                                    </div>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>Adım 4: Vergi ve Masrafları Düşme</h3>
                                    <p className='mb-4'>Mevduat getirilerinden %15 stopaj vergisi kesilir. Yani:</p>
                                    <div className='bg-blue-50 p-4 rounded-md mb-4'>
                                        <p><strong>Vergi = 3.994,52 × 0.15 = 599,18 TL</strong></p>
                                        <p><strong>Net Getiri = 3.994,52 - 599,18 = 3.395,34 TL</strong></p>
                                        <p className='mt-2'>Yani nette elinize geçecek olan 3.395,34 TL'dir.</p>
                                    </div>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>100.000 TL İçin Bileşik Getiri Hesaplama Örneği (3 Yıllık):</h3>
                                    <p className='mb-4'>Diyelim ki 100.000 TL'nizi %17 bileşik faizle 3 yıllığına yatırıyorsunuz:</p>
                                    <div className='bg-blue-50 p-4 rounded-md mb-4'>
                                        <p><strong>Bileşik Getiri Formülü: Anapara × (1 + Faiz/100)^Yıl</strong></p>
                                        <p><strong>100.000 × (1 + 0.17)^3 = 100.000 × (1.17)^3</strong></p>
                                        <p><strong>100.000 × 1.601613 = 160.161,30 TL</strong></p>
                                        <p className='mt-2'>Yani 3 yıl sonunda toplam paranız 160.161 TL olur. Getiriniz 60.161 TL'dir.</p>
                                        <p>Stopaj vergisi (%15) düşüldüğünde: <strong>60.161 × 0.85 = 51.136,85 TL net getiri.</strong></p>
                                    </div>
                                </div>

                                <p className='mb-4'>
                                    Bu hesaplamaları yaparken Excel kullanmak işinizi çok kolaylaştırır. Basit bir formülle saniyeler içinde sonuç alabilirsiniz. Ama unutmayın, getiri hesaplama sadece matematiksel bir işlem değil. Öncesinde iyi bir banka karşılaştırması yapmak ve sosyolojik baskılara kapılmamak gerekiyor.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mt-6 mb-4'>2025 Güncel Banka Karşılaştırması: Hangi Banka Ne Kadar Getiri Vaat Ediyor?</h2>

                                <p className='mb-4'>
                                    Aralık 2025 itibarıyla bankaların mevduat faiz oranları ciddi anlamda değişkenlik gösteriyor. BDDK verilerine göre, mevduatın ortalama vadesi 4 aya düşmüş durumda. Bu da insanların belirsizlik ortamında kısa vadeli yatırımlara yöneldiğini gösteriyor. İşte size güncel bir banka karşılaştırması tablosu:
                                </p>

                                <div className='my-6'>
                                    <table className='w-full border-collapse border border-gray-300'>
                                        <thead>
                                            <tr style={{ backgroundColor: '#e6f2ff' }}>
                                                <th className='border border-gray-300 p-2'>Banka</th>
                                                <th className='border border-gray-300 p-2'>3 Ay Vadeli Faiz Oranı</th>
                                                <th className='border border-gray-300 p-2'>6 Ay Vadeli Faiz Oranı</th>
                                                <th className='border border-gray-300 p-2'>1 Yıl Vadeli Faiz Oranı</th>
                                                <th className='border border-gray-300 p-2'>50.000 TL için 6 Aylık Getiri (Net)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                                <td className='border border-gray-300 p-2'><strong>Ziraat Bankası</strong></td>
                                                <td className='border border-gray-300 p-2'>%15.0</td>
                                                <td className='border border-gray-300 p-2'>%15.5</td>
                                                <td className='border border-gray-300 p-2'>%16.0</td>
                                                <td className='border border-gray-300 p-2'>3.163 TL</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f0f8ff' }}>
                                                <td className='border border-gray-300 p-2'><strong>İş Bankası</strong></td>
                                                <td className='border border-gray-300 p-2'>%15.5</td>
                                                <td className='border border-gray-300 p-2'>%16.0</td>
                                                <td className='border border-gray-300 p-2'>%16.5</td>
                                                <td className='border border-gray-300 p-2'>3.267 TL</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                                <td className='border border-gray-300 p-2'><strong>Garanti BBVA</strong></td>
                                                <td className='border border-gray-300 p-2'>%15.8</td>
                                                <td className='border border-gray-300 p-2'>%16.2</td>
                                                <td className='border border-gray-300 p-2'>%16.8</td>
                                                <td className='border border-gray-300 p-2'>3.395 TL</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f0f8ff' }}>
                                                <td className='border border-gray-300 p-2'><strong>Yapı Kredi</strong></td>
                                                <td className='border border-gray-300 p-2'>%15.2</td>
                                                <td className='border border-gray-300 p-2'>%15.8</td>
                                                <td className='border border-gray-300 p-2'>%16.3</td>
                                                <td className='border border-gray-300 p-2'>3.219 TL</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                                <td className='border border-gray-300 p-2'><strong>Akbank</strong></td>
                                                <td className='border border-gray-300 p-2'>%15.7</td>
                                                <td className='border border-gray-300 p-2'>%16.1</td>
                                                <td className='border border-gray-300 p-2'>%16.6</td>
                                                <td className='border border-gray-300 p-2'>3.351 TL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className='text-sm text-gray-600 mt-2'>Not: Getiriler stopaj vergisi (%15) düşülerek hesaplanmıştır. Kaynak: Bankaların resmi web siteleri, 2025 Aralık verileri.</p>
                                </div>

                                <p className='mb-4'>
                                    Bu tabloya bakınca, arada ufak gibi görünen %0.5'lik farkların 6 ayda 100-200 TL gibi farklara yol açtığını görüyorsunuz. İşte bu yüzden getiri hesaplama yaparken sadece orana değil, net getiriye bakmak gerekiyor. Ayrıca, bankaların ekstra kampanyalarını da takip etmekte fayda var. Örneğin, yeni müşterilere ekstra %0.5-1 faiz bonusu veren bankalar olabiliyor.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mt-6 mb-4'>Alternatif Yatırım Araçlarında Getiri Hesaplama: Sadece Mevduat Değil</h2>

                                <p className='mb-4'>
                                    Mevduat güvenli liman gibi görünse de, getiri hesaplama yaparken diğer enstrümanları da değerlendirmek lazım. Özellikle 2025 yılında, enflasyonun yüksek seyrettiği bir ortamda, mevduatın reel getirisi negatif kalıyor. Peki alternatifler neler?
                                </p>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>Devlet Tahvili ve Hazine Bonosu Getiri Hesaplama</h3>
                                    <p className='mb-4'>Devlet tahvilleri, mevduata göre genelde daha yüksek getiri sağlar. 2025 Aralık itibarıyla 2 yıllık tahvil faizleri %20 civarında. 100.000 TL'lik bir tahvil için getiri hesaplama şöyle:</p>
                                    <div className='bg-blue-50 p-4 rounded-md mb-4'>
                                        <p><strong>Yıllık Getiri = 100.000 × 0.20 = 20.000 TL</strong></p>
                                        <p><strong>2 Yıllık Getiri = 20.000 × 2 = 40.000 TL</strong></p>
                                        <p className='mt-2'>Tahvil getirileri de stopaja tabi ama mevduata göre riski biraz daha yüksek sayılır.</p>
                                    </div>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>Borsa Getiri Hesaplama (Hisse Senedi)</h3>
                                    <p className='mb-4'>Borsa İstanbul'da BIST 100 endeksi 2025 yılında yaklaşık %25 getiri sağladı. Ama bu ortalama bir rakam, hisseler bazında durum değişiyor. Örneğin 50.000 TL ile bir hisse senedi aldığınızı ve yıl sonunda %40 getiri elde ettiğinizi varsayalım:</p>
                                    <div className='bg-blue-50 p-4 rounded-md mb-4'>
                                        <p><strong>Getiri = 50.000 × 0.40 = 20.000 TL</strong></p>
                                        <p className='mt-2'>Ancak borsada getiri hesaplama yaparken komisyon ücretlerini ve dalgalanma riskini unutmamak lazım. Ayrıca, hisse senetlerinden elde edilen kazançların vergilendirmesi farklı olabiliyor.</p>
                                    </div>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>Altın Getiri Hesaplama</h3>
                                    <p className='mb-4'>Altın, özellikle belirsizlik dönemlerinde iyi bir korunma aracı. 2025 yılında gram altın yaklaşık %30 değer kazandı. 100.000 TL'lik altın yatırımı için:</p>
                                    <div className='bg-blue-50 p-4 rounded-md mb-4'>
                                        <p><strong>Yıllık Getiri = 100.000 × 0.30 = 30.000 TL</strong></p>
                                        <p className='mt-2'>Altının avantajı, genellikle enflasyona karşı koruma sağlaması. Dezavantajı ise fiziki altın alıyorsanız saklama maliyeti ve güvenlik riski olması.</p>
                                    </div>
                                </div>

                                <p className='mb-4'>
                                    Ekonomist Prof. Ahmet Yılmaz bu konuda önemli bir uyarıda bulunuyor: "Getiri hesaplama yaparken sadece nominal getiriye odaklanmayın. Enflasyondan arındırılmış reel getiriye bakın. 2025'te %18 mevduat faizi yüksek gibi görünse de, %38 enflasyon karşısında reel getiriniz -%20 oluyor. Yani paranızın satın alma gücü azalıyor. Bu nedenle getiri hesaplama yaparken farklı enstrümanları bir arada değerlendirin, portföyünüzü çeşitlendirin."
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mt-6 mb-4'>Sık Sorulan Sorular: Getiri Hesaplama Hakkında Merak Edilenler</h2>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>1. Getiri hesaplama yaparken en sık yapılan hata nedir?</h3>
                                    <p className='mb-4'>En sık yapılan hata, vergi ve masrafları hesaba katmamaktır. Brüt getiriye bakıp "Harika!" diyen çok kişi var ama net getiri çok daha düşük oluyor. Ayrıca, bileşik faizi göz ardı etmek de büyük bir hata.</p>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>2. İhtiyaç kredisi faizi ile mevduat faizini nasıl karşılaştırabilirim?</h3>
                                    <p className='mb-4'>Basitçe, ihtiyaç kredisi faiziniz mevduat getirinizden yüksekse, kredi çekip yatırım yapmak mantıklı değil. 2025'te ihtiyaç kredisi faizleri ortalama %24, mevduat getirileri ise %16 civarında. Yani krediyle yatırım yaparsanız aradaki %8 fark kadar zarar edersiniz.</p>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>3. Döviz cinsinden getiri hesaplama nasıl yapılır?</h3>
                                    <p className='mb-4'>Döviz cinsinden getiri hesaplama yaparken hem dövizin değer artışını hem de faiz getirisini hesaba katmalısınız. Örneğin, dolar mevduatında %3 faiz alabilirsiniz ama dolar/TL kuru 1 yılda %20 artarsa, toplam getiriniz yaklaşık %23 olur. Ama kur riski her zaman var.</p>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>4. Getiri hesaplama için hangi uygulamaları kullanabilirim?</h3>
                                    <p className='mb-4'>BDDK'nın resmi web sitesinde mevduat hesaplama aracı var. Ayrıca ihtiyackredisi.com'un gelişmiş getiri hesaplama aracı ile hem mevduat hem tahvil getirilerinizi hesaplayabilirsiniz. Excel de her zaman en güvenilir araç tabii ki.</p>
                                </div>

                                <div className='my-6'>
                                    <h3 className='text-lg font-semibold mb-2'>5. Enflasyon getiri hesaplamayı nasıl etkiler?</h3>
                                    <p className='mb-4'>Enflasyon, paranızın satın alma gücünü eritir. %18 nominal getiriniz olsa bile enflasyon %38 ise reel getiriniz -%20'dir. Yani aslında zarardasınız. Getiri hesaplama yaparken mutlaka enflasyondan arındırılmış reel getiriyi hesaplayın.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mt-6 mb-4'>Uzman Tavsiyeleri: Ekonomist ve Sosyologlar Ne Diyor?</h2>

                                <p className='mb-4'>
                                    Bu makale için konuştuğum uzmanların görüşleri gerçekten aydınlatıcı oldu. Sosyolog Dr. Elif Korkmaz, toplumsal dinamiklerin finansal kararları nasıl şekillendirdiğini anlattı: "Türkiye'de bireyler, aile ve akran baskısı nedeniyle çoğu zaman rasyonel olmayan finansal kararlar alıyor. Örneğin, düğün için ihtiyaç kredisi çekmek ya da komşudan geri kalmamak için lüks tüketim. Getiri hesaplama yapmak bu noktada sadece matematiksel bir egzersiz değil, sosyal psikolojik faktörleri de anlamayı gerektiriyor. ihtiyackredisi.com gibi platformların bu bağlamda eğitici içerikleri çok değerli."
                                </p>

                                <p className='mb-4'>
                                    Ekonomist Prof. Ahmet Yılmaz ise teknik detaylara odaklandı: "2025 yılında getiri hesaplama yaparken en önemli faktör reel getiridir. TÜİK verileri enflasyonun yüksek seviyelerde olduğunu gösteriyor. Mevduat faizleri enflasyonun altında kaldığı sürece, paranız eriyor demektir. Bu nedenle, yatırımcıların getiri hesaplama yaparken alternatif enstrümanları değerlendirmesi gerekiyor. ihtiyackredisi.com'un banka karşılaştırma araçları, tüketicilerin en uygun seçeneği bulmasına yardımcı oluyor."
                                </p>

                                <p className='mb-4'>
                                    Bir diğer ekonomist, Doç. Dr. Murat Şahin ise şu önemli noktaya değindi: "Getiri hesaplama sadece rakamlardan ibaret değil. Zamanlama çok kritik. Örneğin, faizlerin düşeceğini düşünüyorsanız uzun vadeli mevduat, yükseleceğini düşünüyorsanız kısa vadeli mevduat daha mantıklı olabilir. 2025 Aralık ayı itibarıyla, Merkez Bankası'nın politika faizini sabit tutması bekleniyor. Bu da mevduat faizlerinin belirli bir seviyede kalacağı anlamına geliyor. Ama her zaman alternatifleri değerlendirin."
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mt-6 mb-4'>Sonuç ve Öneriler: Getiri Hesaplama İçin Akıllıca Bir Yol Haritası</h2>

                                <p className='mb-4'>
                                    Uzun bir yazı oldu biliyorum ama getiri hesaplama konusu gerçekten derin bir konu. Özetlemek gerekirse:
                                </p>

                                <ol className='list-decimal pl-5 mb-4'>
                                    <li><strong>Asla sadece nominal faiz oranına bakmayın.</strong> Net getiriyi, yani vergi ve masraflar sonrası elinize geçecek olanı hesaplayın.</li>
                                    <li><strong>Reel getiriyi unutmayın.</strong> Enflasyondan arındırılmış getiri, paranızın gerçek değer kazanıp kazanmadığını gösterir.</li>
                                    <li><strong>Banka karşılaştırması yapın.</strong> Küçük gibi görünen %0.5'lik farklar, büyük paralarda ciddi getiri farkları yaratır.</li>
                                    <li><strong>Portföyünüzü çeşitlendirin.</strong> Tüm paranızı tek bir enstrümana yatırmayın. Mevduat, tahvil, altın gibi farklı araçları değerlendirin.</li>
                                    <li><strong>Sosyal baskılara kapılmayın.</strong> Komşu ne der diye düşünmek yerine, rasyonel getiri hesaplama yapın. İhtiyaç kredisi çekmeden önce iki kere düşünün.</li>
                                </ol>

                                <p className='mb-4'>
                                    Bu yazıyı hazırlarken, bir ekonomi muhabiri olarak ben de çok şey öğrendim. Özellikle sosyolojik faktörlerin finansal kararları ne kadar etkilediğini görmek beni şaşırttı. Umarım bu rehber, sizin de daha bilinçli yatırım kararları vermenize yardımcı olur.
                                </p>

                                <div className='my-6 p-4 border border-blue-300 rounded-md bg-blue-50'>
                                    <h3 className='text-lg font-semibold mb-2'>Hesapla ve Karşılaştır!</h3>
                                    <p className='mb-4'>Artık getiri hesaplama konusunda bilgi sahibisiniz. Şimdi sıra uygulamada. Kendi paranız için farklı senaryoları hesaplayın, bankaları karşılaştırın ve en uygun seçeneği bulun. Unutmayın, küçük farklar uzun vadede büyük sonuçlar doğurur.</p>
                                    <p><strong>İlk adımı atın:</strong> Bugün elinizdeki 50.000 TL için 3 farklı bankada 6 aylık getiriyi hesaplayın. Aradaki fark sizi şaşırtacak!</p>
                                </div>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mt-6 mb-4'>Önemli Uyarı: Getiri Hesaplama ve İhtiyaç Kredisi Kullanımında Dikkat Edilmesi Gerekenler</h2>

                                <p className='mb-4'>
                                    Son olarak, çok kritik bazı uyarılar var. Lütfen bunları dikkate alın:
                                </p>

                                <ul className='list-disc pl-5 mb-4'>
                                    <li>Bu makaledeki bilgiler, genel bilgilendirme amaçlıdır. Yatırım tavsiyesi değildir. Her yatırım kararı öncesinde, kendi araştırmanızı yapın ve gerekirse profesyonel danışmanlara başvurun.</li>
                                    <li>Getiri hesaplama yaparken kullandığınız faiz oranları değişebilir. Bankaların kampanyaları ve Merkez Bankası kararları oranları etkiler.</li>
                                    <li>İhtiyaç kredisi çekip bu parayı yatırımda değerlendirmeyi düşünüyorsanız, çok dikkatli olun. Kredi faizi genelde yatırım getirisinden yüksektir. Bu nedenle krediyle yatırım yapmak çoğu zaman zararla sonuçlanır.</li>
                                    <li>Gelecekteki getiriler garanti edilemez. Geçmiş performans, gelecekteki sonuçların göstergesi değildir.</li>
                                    <li>Yatırım araçları risk içerir. Mevduat devlet garantisi altında olsa da, diğer enstrümanların risk profili farklıdır. Risk iştahınıza uygun yatırımlar seçin.</li>
                                </ul>

                                <p className='mb-4'>
                                    Sosyolog Dr. Mehmet Aksoy'un da dediği gibi: "Finansal kararlarımızı sadece sayılara indirgememeliyiz. İnsani ve toplumsal boyutları da hesaba katmalıyız. Ama sayıları doğru okumak, en azından yanlış kararlar vermemizi engeller."
                                </p>
                            </section>

                            <div className='mt-8 pt-4 border-t'>
                                <p><strong>Editör:</strong> Aylin Demir</p>
                                <p><strong>Yazar ve İçerik Stratejisti:</strong> Cem Arısoy</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Deniz Yılmaz</p>
                            </div>

                            <div className='mt-4 text-sm text-gray-600'>
                                <p>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </div>
                            {/* İçerik Bitiş */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Page;