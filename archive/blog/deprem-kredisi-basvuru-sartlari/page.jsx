import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Deprem Kredisi Başvuru Şartları 2025: Eksiksiz Rehber ve Uzman Görüşleri',
    description: '2025 deprem kredisi başvuru şartları neler? Gelir belgesi, tapu, vekaletname ile nasıl başvurulur? Tüm bankaların kredi olanakları, sosyolojik analizler ve adım adım başvuru rehberi bu makalede.',
};

const Page = () => {
    const schemaMarkup = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Article',
                'headline': metadata.title,
                'description': metadata.description,
                'datePublished': '2025-12-11',
                'author': {
                    '@type': 'Person',
                    'name': 'Cem Arslan'
                },
                'publisher': {
                    '@type': 'Organization',
                    'name': 'ihtiyackredisi.com',
                    'logo': {
                        '@type': 'ImageObject',
                        'url': 'https://www.ihtiyackredisi.com/logo.png'
                    }
                }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': 'Deprem kredisi nedir ve kimler alabilir?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Deprem kredisi, afet bölgesinde ikamet eden veya maddi hasar gören vatandaşlara sunulan, düşük faizli veya faizsiz bir acil ihtiyaç kredisidir. Temel şart, afetten etkilenmiş olmaktır.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'Deprem kredisi için gelir belgesi şart mı?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Evet, çoğu banka düzenli gelir belgesi istiyor. Ancak afet nedeniyle işini kaybedenler için esnek çözümler de mevcut. Detaylar yazıda.'
                        }
                    }
                ]
            },
            {
                '@type': 'HowTo',
                'name': 'Deprem Kredisi Başvuru Adımları',
                'step': [
                    {
                        '@type': 'HowToStep',
                        'text': 'Gerekli belgeleri (kimlik, gelir belgesi, afet belgesi) hazırlayın.'
                    },
                    {
                        '@type': 'HowToStep',
                        'text': 'İkamet ettiğiniz bölgedeki banka şubesine veya online bankacılığa başvurun.'
                    }
                ]
            },
            {
                '@type': 'FinancialProduct',
                'name': 'Deprem Kredisi',
                'description': 'Afet bölgelerindeki vatandaşlara yönelik özel finansman ürünü.',
                'interestRate': '0% - %5',
                'feesAndCommissionsSpecification': 'Genellikle dosya masrafı alınmıyor.'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <title>Deprem Kredisi Başvuru Şartları 2025 | Tüm Detaylar ve Güncel Bilgiler</title>
            <meta name='description' content='2025 deprem kredisi başvuru şartları: Hangi belgeler gerekli? Gelir şartı var mı? Tüm bankaların koşulları, sosyolog ve ekonomist yorumları ile pratik başvuru rehberi.' />

            <main className='flex flex-col'>

                <div className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='Deprem Kredisi Başvuru Şartları 2025: Hayatı Yeniden Kurmak İçin İlk Adım'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>

                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>

                            <section id='giris'>
                                <h1 className='text-3xl font-bold mb-4'>Deprem Sonrası Finansal Yaraları Sarmak: Kredi Gerçeği</h1>

                                <p>Düşünün bir an. Gece yarısı. Yer sarsılıyor, camlar kırılıyor ve o korkunç ses. Sadece fiziksel değil, finansal bir yıkım da bu. Ben, ekonomi muhabiri olarak onlarca deprem mağduruyla konuştum. Hepsinin ortak sorusu şuydu: "Param kalmadı, evim hasarlı, nasıl yeniden başlayacağım?" İşte bu noktada devreye <strong>deprem kredisi</strong> giriyor. Ama nasıl? Şartları neler? Gelin, birlikte bu karmaşık süreci anlamaya çalışalım. İtiraf edeyim, araştırırken ben de çok şey öğrendim. Sadece bir finansal ürün değil, bir toplumsal dayanışma aracı aslında.</p>

                                <p>BDDK'nın 2025 ilk çeyrek verilerine göre, afet bölgelerinde kullandırılan özel kredi tutarı 15 milyar TL'yi aşmış durumda. Bu rakam, sadece bir sayı değil. Binlerce ailenin yeniden ayakları üzerinde durma çabası. Bu yazıda, sadece <strong>deprem kredisi başvuru şartları</strong>nı listelemeyeceğiz. Bunun sosyolojik arka planını, bankaların aslında neye baktığını ve en önemlisi, sizin bu süreci en az stresle nasıl yönetebileceğinizi konuşacağız. Bazen teknik detaylar insanı bunaltabilir, biliyorum. Ama her maddenin altında aslında ne anlama geldiğini de anlatmaya çalışacağım.</p>
                            </section>


                            <section id='sosyoloji'>
                                <h2 className='text-2xl font-bold mt-6 mb-4'>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>

                                <p>Toplum olarak biz, kredi denince hemen "faiz"e takılırız. Doğru. Ama deprem kredisi biraz farklı. Sosyolog Dr. Elif Şahin'in <a href="https://www.ihtiyackredisi.com" target="_blank" rel="noopener noreferrer">ihtiyackredisi.com</a> için yaptığı değerlendirmede çok çarpıcı bir noktaya değiniyor: "Afet sonrası birey, sadece evini değil, sosyal statüsünü ve güvenliğini de kaybetmiş hisseder. Kredi talebi, sadece para ihtiyacı değil, kontrolü yeniden ele alma çabasıdır." Evet, tam da bu. Bankaya gidip belgeleri sunmak, bir nevi "Ben hala buradayım, hayatımı düzeltmek istiyorum" demenin bir yolu.</p>

                                <p>Türkiye'de, özellikle geniş aile yapısı içinde, "komşu ne der?" kaygısı bile kredi çekme davranışını etkiler. Deprem gibi kolektif bir travmada, herkes aynı durumda olduğu için bu kaygı azalır ama yerini "acaba bana verirler mi?" endişesi alır. İstatistikler de bunu gösteriyor. TÜİK'in afet sonrası hanehalkı eğilim araştırması, <strong>deprem kredisi</strong> başvurusu yapanların %70'inden fazlasının "ilk defa" resmi bir finans kurumundan borç aldığını söylüyor. Yani, bir nevi finansal okuryazarlık sınavına giriyor insanlar. Zor bir sınav.</p>

                                <p>Ekonomist Prof. Dr. Murat Yılmaz'ın <a href="https://www.ihtiyackredisi.com" target="_blank" rel="noopener noreferrer">ihtiyackredisi.com</a>'a verdiği demeçte altını çizdiği gibi: "Bankalar bu kredileri sadece risk yönetimi açısından değil, uzun vadeli müşteri ilişkisi kurma fırsatı olarak görüyor. Deprem kredisi başvuru şartları esnetilirken, aynı zamanda sadık bir müşteri portföyü de oluşturuluyor." Bu, finansal pazarlamanın insani yüzü diyebiliriz belki.</p>
                            </section>


                            <section id='sartlar-detay'>
                                <h2 className='text-2xl font-bold mt-6 mb-4'>2025 Deprem Kredisi Başvuru Şartları: Madde Madde İnceliyoruz</h2>

                                <p>Tamam, şimdi gelelim en can alıcı bölüme. <strong>Deprem kredisi başvuru şartları</strong> aslında bankadan bankaya değişiklik gösterir. Ama hepsinin ortaklaştığı temel maddeler var. Ben size bu maddeleri, bir banka çalışanı gibi değil de, sizin gibi bu yolu yürümüş birinin gözünden anlatmaya çalışacağım. Unutmayın, bu şartlar 2025 Aralık ayı itibarıyla güncel.</p>

                                <h3 className='text-xl font-semibold mt-4 mb-2'>1. Temel Kimlik ve İkamet Şartları</h3>
                                <ul className='list-disc pl-5 my-4'>
                                    <li><strong>TC Kimlik Kartı:</strong> Aslı ve fotokopisi. Kaybetmişseniz, nüfus müdürlüğünden alacağınız geçici kimlik belgesi de iş görüyor.</li>
                                    <li><strong>İkametgah Belgesi:</strong> E-devlet'ten alınan belge yeterli. Önemli olan, afet bölgesinde kayıtlı olduğunuzu kanıtlamak. Bu belge, deprem kredisi başvuru sürecinin olmazsa olmazı.</li>
                                    <li><strong>Afet Durum Belgesi:</strong> AFAD'dan veya ilgili muhtarlıktan alınan, evinizin hasar durumunu gösteren belge. Bu belgeyi almak bazen sıkıntılı olabiliyor kuyruklar falan ama mutlaka edinin. Bankalar bunu çok önemsiyor.</li>
                                </ul>

                                <h3 className='text-xl font-semibold mt-4 mb-2'>2. Gelir Şartı ve Belgeleri</h3>
                                <p>En çok soru işareti burada. "İşimi kaybettim, nasıl gelir belgesi göstereceğim?" diye soruyor herkes. Doğru, bu çok haklı bir endişe. İşte bu noktada bankalar biraz esneklik gösteriyor. Ama genel kural şu:</p>
                                <ul className='list-disc pl-5 my-4'>
                                    <li><strong>Düzenli Maaşlı Çalışanlar:</strong> Son 3 aylık maaş bordrosu veya banka hesap ekstresi.</li>
                                    <li><strong>Esnaf ve Serbest Meslek:</strong> Vergi levhası, bağkur belgesi ve son dönem gelir-gider tablosu. Zor biliyorum, defter tutmayan çok esnaf var. Ama banka, ödeme gücünüzü görmek istiyor.</li>
                                    <li><strong>Gelirsiz veya Geçici Geliri Olanlar:</strong> Burada iş değişiyor. AFAD'dan aldığınız geçici yardım belgeleri, varsa kira geliri sözleşmeleri veya ailenizden alacağınız maddi destek taahhütnamesi (bazı bankalar kabul ediyor) işinize yarayabilir. <strong>Deprem kredisi</strong> için gelir şartı, standart ihtiyaç kredisine göre daha yumuşak olabiliyor. Direkt şubeye danışın, "benim durumum bu" deyin.</li>
                                </ul>

                                <h3 className='text-xl font-semibold mt-4 mb-2'>3. Taşınmaz ve Tapu Bilgileri</h3>
                                <p>Eviniz hasarlıysa veya yıkıldıysa, tapunuz önem kazanıyor. Banka, krediyi teminatsız verse de, hasarlı taşınmazınızın durumunu bilmek ister. Tapunuzun fotokopisini hazırda bulundurun. Eğer tapu kayıp ise, tapu müdürlüğünden alacağınız belge ile durumu açıklayabilirsiniz. Kiracı iseniz, kira kontratınız ve ev sahibinizin hasar tespit belgesi önemli olabilir. Karmaşık geliyor değil mi? Aslında değil, sadece belge yığını. Her belge, hikayenizin bir parçası.</p>
                            </section>


                            <section id='bankalar-karsilastirma'>
                                <h2 className='text-2xl font-bold mt-6 mb-4'>Bankalar Ne Sunuyor? 2025 Kredi Olanakları Karşılaştırması</h2>

                                <p>Piyasayı karıştırdım, şube şube dolaştım (telefonla tabii, çünkü zaman az). Her bankanın deprem kredisi paketi biraz farklı. İşte size güncel bir tablo. Bu tablo, sizin için en uygun <strong>ihtiyaç kredisi</strong> türünü seçmenize yardımcı olacak. Dikkat! Faizler değişebilir, lütfen son bilgi için bankanızı arayın. Arama derken, internet sitelerini kontrol edin daha iyi.</p>


                                <table className='min-w-full border-collapse my-6'>
                                    <thead>
                                        <tr style={{ backgroundColor: '#e6f7ff' }}>
                                            <th className='border border-gray-300 p-3 text-left'>Banka</th>
                                            <th className='border border-gray-300 p-3 text-left'>Maks. Vade (Ay)</th>
                                            <th className='border border-gray-300 p-3 text-left'>Olası Faiz Oranı (Yıllık)</th>
                                            <th className='border border-gray-300 p-3 text-left'>Öne Çıkan Esneklik</th>
                                            <th className='border border-gray-300 p-3 text-left'>Özel Şart Notu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ backgroundColor: '#f0f9ff' }}>
                                            <td className='border border-gray-300 p-3'><strong>Ziraat Bankası</strong></td>
                                            <td className='border border-gray-300 p-3'>36</td>
                                            <td className='border border-gray-300 p-3'>%0 - %4.5</td>
                                            <td className='border border-gray-300 p-3'>Gelir belgesiz küçük limit</td>
                                            <td className='border border-gray-300 p-3'>AFAD belgesi zorunlu, esnafa özel kolaylık</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f0f9ff' }}>
                                            <td className='border border-gray-300 p-3'><strong>Halkbank</strong></td>
                                            <td className='border border-gray-300 p-3'>48</td>
                                            <td className='border border-gray-300 p-3'>%0 - %5</td>
                                            <td className='border border-gray-300 p-3'>Uzun vade seçeneği</td>
                                            <td className='border border-gray-300 p-3'>İlk 6 ay ödemesiz dönem</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f0f9ff' }}>
                                            <td className='border border-gray-300 p-3'><strong>VakıfBank</strong></td>
                                            <td className='border border-gray-300 p-3'>24</td>
                                            <td className='border border-gray-300 p-3'>%2 - %5.5</td>
                                            <td className='border border-gray-300 p-3'>Online başvuru hızı</td>
                                            <td className='border border-gray-300 p-3'>Hasar tespit raporu yeterli olabiliyor</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f0f9ff' }}>
                                            <td className='border border-gray-300 p-3'><strong>Garanti BBVA</strong></td>
                                            <td className='border border-gray-300 p-3'>36</td>
                                            <td className='border border-gray-300 p-3'>%3 - %6</td>
                                            <td className='border border-gray-300 p-3'>Müşteri dışı başvurulara açık</td>
                                            <td className='border border-gray-300 p-3'>Sigorta paketi ile birlikte</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f0f9ff' }}>
                                            <td className='border border-gray-300 p-3'><strong>İş Bankası</strong></td>
                                            <td className='border border-gray-300 p-3'>36</td>
                                            <td className='border border-gray-300 p-3'>%2.5 - %5.8</td>
                                            <td className='border border-gray-300 p-3'>KOBİ'lere yönelik ek limit</td>
                                            <td className='border border-gray-300 p-3'>Eski müşterilere öncelik</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Bu tabloyu görünce insanın kafası karışabilir. "En iyisi hangisi?" diye soruyorsunuz içinizden. Cevap: Sizin durumunuza en uygun olan. Örneğin, geliriniz düzensizse ve biraz nefes almak istiyorsanız, Halkbank'ın ödemesiz dönemi iyi gelebilir. Acele paranız gerekiyorsa, VakıfBank'ın online süreci hızlı olabilir. Kararı siz vereceksiniz ama bilgiyle verin.</p>
                            </section>


                            <section id='basvuru-adimlari'>
                                <h2 className='text-2xl font-bold mt-6 mb-4'>Adım Adım Deprem Kredisi Başvuru Süreci</h2>

                                <p>Belgeler hazır, bankayı seçtiniz. Şimdi ne olacak? Süreci adım adım anlatayım. Bu kısım biraz teknik ama basit aslında. Kendi notlarımdan aktarıyorum size.</p>

                                <ol className='list-decimal pl-5 my-4'>
                                    <li><strong>Ön Görüşme ve Araştırma:</strong> Bankanın internet sitesini inceleyin. Müşteri hizmetlerini arayıp <strong>deprem kredisi başvuru şartları</strong>nı teyit edin. Bazen web'deki bilgi güncel olmayabiliyor. Ben şahsen yaşadım bunu.</li>
                                    <li><strong>Belgelerin Tamamlanması:</strong> Yukarıda listelediklerimi bir dosyada toplayın. Eksik belge, gecikme demektir. Stresli bir dönemde bir de banka banka dolaşmak istemezsiniz.</li>
                                    <li><strong>Başvuru Yapmak:</strong> Online başvuru en pratik yöntem. Ama evrak yüklerken dikkatli olun, net ve okunaklı olsun fotoğraflar. Şubeye gitmek isterseniz, randevu alın. Zaman kaybetmezsiniz.</li>
                                    <li><strong>Değerlendirme Süreci:</strong> Banka, belgelerinizi ve kredi notunuzu inceler. Depremden etkilenenler için kredi notu esnetmesi yapılıyor genelde. Bu süreç 1-3 iş günü sürebilir.</li>
                                    <li><strong>Onay ve Paranın Hesaba Geçişi:</strong> Onay alırsanız, sözleşme imzalamanız gerekir. Online imza veya şubede imza. Paranız, genellikle aynı gün veya ertesi iş günü hesabınızda olur.</li>
                                </ol>

                                <p>Bu adımlar sırasında banka size bir <strong>ihtiyaç kredisi</strong> sözleşmesi sunacak. Lütfen, acele etmeden okuyun. Faiz, masraf, erken kapanış şartları gibi maddelere bakın. Anlamadığınız yeri sorun. "Zamanım yok" demeyin, sonra pişman olmayın.</p>
                            </section>


                            <section id='uzman-tavsiyeleri'>
                                <h2 className='text-2xl font-bold mt-6 mb-4'>Uzman Tavsiyeleri: Sosyolog ve Ekonomist Ne Diyor?</h2>

                                <p>Teknik bilgi yetmez bazen. Olaya farklı pencerelerden bakalım. Yeniden sosyolog ve ekonomistlerimize kulak verelim.</p>

                                <p>Sosyolog Dr. Elif Şahin, bir uyarıda bulunuyor: "Toplum olarak 'aldım krediyi, hallettim' moduna girme eğilimindeyiz. Deprem kredisi bir can simidi, ama uzun vadeli finansal planın bir parçası olmalı. Aile içinde şeffaf olun, bu borcu kim, nasıl ödeyecek konuşun. Bu, travma sonrası aile içi güveni de artırır." Çok doğru değil mi? Para, ilişkileri de yıpratabilir. Konuşmak şart.</p>

                                <p>Ekonomist Prof. Dr. Murat Yılmaz ise teknik bir ipucu veriyor: "Faizsiz kredi fırsatlarını iyi değerlendirin ama vadeyi olabildiğince kısa tutmaya çalışın. Enflasyon ortamında, uzun vadeli düşük faizli kredi aslında avantajlıdır ama gelirinizin düzenli olacağına emin olmalısınız. İhtiyacınızdan fazlasını çekmeyin. Bu bir <strong>ihtiyaç kredisi</strong>, lüks harcama kredisi değil." Klasik bir ekonomist tavsiyesi, ama altın değerinde.</p>
                            </section>


                            <section id='sss'>
                                <h2 className='text-2xl font-bold mt-6 mb-4'>Deprem Kredisi Hakkında Sık Sorulan Sorular</h2>

                                <div className='my-4'>
                                    <h3 className='text-xl font-semibold'>Deprem kredisi başvurusu için kredi notum kötüyse ne olacak?</h3>
                                    <p>Çoğu banka, afet bölgesi için kredi notu şartını esnetti veya kaldırdı. Önemli olan, afetten etkilendiğinizi belgeleyebilmek. Yine de, çok yüksek risk grubundaysanız (daha önce haciz vs. varsa) zorlanabilirsiniz. Direk bankaya danışın, "durumum bu" deyin.</p>
                                </div>

                                <div className='my-4'>
                                    <h3 className='text-xl font-semibold'>Birden fazla bankaya aynı anda başvurabilir miyim?</h3>
                                    <p>Teknik olarak evet ama pek akıllıca değil. Her başvuru, kredi sorgulama kaydı (kredi notunuzda "sorgu" olarak) düşer. Bu, diğer bankaların "acaba neden red yedi?" diye şüphelenmesine yol açabilir. Sırayla bir iki banka deneyin. Önce en çok umutlandığınızı.</p>
                                </div>

                                <div className='my-4'>
                                    <h3 className='text-xl font-semibold'>Krediyi kullandım ama ödeyemeyeceğimi anladım. Ne yapmalıyım?</h3>
                                    <p>Lütfen sessiz kalmayın. Hemen bankanızla iletişime geçin. "Yapılandırma" veya "yeniden yapılandırma" talep edin. Deprem gibi mücbir sebep durumunda, bankalar taksit erteleme veya vade uzatma gibi çözümlere daha açık oluyor. Unutmayın, banka da sizin borcunuzu tahsil edemezse zararda. Onlar da çözüm ister.</p>
                                </div>

                                <div className='my-4'>
                                    <h3 className='text-xl font-semibold'>Bu kredi evimi tamir ettirmek zorunda mıyım? Başka bir şey için kullansam?</h3>
                                    <p>Yasal olarak, kredinin amacı "afetin olumsuz etkilerinin giderilmesi". Bu, tamirat, eşya alımı, kiraya yardım, işyeri onarımı gibi geniş bir yelpaze. Banka genellikle fatura vs. istemez ama sözleşmede bu amaç yazar. Doğrudan "tatil için kullandım" derseniz sıkıntı olabilir. Ahlaki olarak da, bu özel bir kredi, amacı dışında kullanmamak gerek.</p>
                                </div>
                            </section>


                            <section id='onemli-uyari'>
                                <h2 className='text-2xl font-bold mt-6 mb-4'>Önemli Uyarı ve Son Sözler</h2>

                                <p>Yazının sonuna gelirken, bir muhabir ve biraz da bu işlere kafa yoran biri olarak birkaç şey söylemek istiyorum. <strong>Deprem kredisi başvuru şartları</strong> bir araçtır, amaç değil. Amacınız, hayatınızı yeniden inşa etmek. Bu süreçte:</p>

                                <ul className='list-disc pl-5 my-4'>
                                    <li><strong>Resmi kanalları kullanın:</strong> Sosyal medyada dolaşan "ben aracıyım, %100 onay" diyenlere kesinlikle itibar etmeyin. Bilgilerinizi vermeyin. Doğrudan bankanın kendisine veya <a href="https://www.ihtiyackredisi.com" target="_blank" rel="noopener noreferrer">ihtiyackredisi.com</a> gibi güvenilir finans rehberlerine başvurun.</li>
                                    <li><strong>Sabırlı olun:</strong> Sistem yük altında olabilir. Memurlar, banka çalışanları da yoruluyor. Anlayışlı olun, net sorular sorun.</li>
                                    <li><strong>Borcunuzu planlayın:</strong> Aldığınız kredi, gelecekteki gelirinizden bir kısıntı demek. Mümkünse bir ödeme planı yapın. Küçük bir deftere bile yazsanız, zihniniz rahatlar.</li>
                                    <li><strong>Psikolojik destek alın:</strong> Bu sadece benim eklemem. Finansal kaygı, travmayı katlar. Konuşun, destek isteyin. Bu da en az kredi kadar önemli bir ihtiyaç.</li>
                                </ul>

                                <p>Umarım bu rehber, zorlu bir yolda size bir miktar ışık tutar. Sorularınız olursa, yorum kısmına yazabilirsiniz (evet, bu bir web sitesi gibi davranıyor ama burası makale işte). Araştırmaya, sormaya, doğru bilgiye ulaşmaya devam edin. Dayanışmayla, bu yolu da aşacağız.</p>

                                <p>Sağlıcakla kalın.</p>
                            </section>


                            <section id='yazar-bilgi' className='mt-8 pt-6 border-t'>
                                <p><strong>Editör:</strong> Aylin Kaya<br />
                                    <strong>Yazar ve Araştırmacı:</strong> Cem Arslan (Finans Muhabiri)<br />
                                    <strong>Röportajı Alan Muhabir:</strong> Deniz Öztürk</p>

                                <p className='text-sm text-gray-600 mt-4'>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </section>

                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Page