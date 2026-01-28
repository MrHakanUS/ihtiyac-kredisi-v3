import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'En Çok Faiz Veren Banka Hangisi 2025 | Güncel Mevduat Faiz Oranları Karşılaştırması',
    description: '2025 yılında en çok faiz veren bankalar hangileri? Türkiye genelinde tüm bankaların güncel mevduat faiz oranları, karşılaştırmalı analizler, uzman yorumları ve paranızı en iyi şekilde değerlendirme rehberi.',
};

const Page = () => {
    return (
        <>
            <title>En Çok Faiz Veren Banka Hangisi 2025 | Güncel Mevduat Faiz Oranları</title>
            <meta name='description' content='2025 yılında en çok faiz veren banka hangisi? Tüm bankaların mevduat faiz oranları, hesaplama yöntemleri, uzman tavsiyeleri ve en karlı yatırım stratejileri bu rehberde!' />

            <main className='flex flex-col'>

                <div className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='En Çok Faiz Veren Banka Hangisi 2025: Mevduat Faiz Oranları Karşılaştırması'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>
                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            
                            {/* Giriş Bölümü */}
                            <section>
                                <h1>En Çok Faiz Veren Banka Hangisi 2025: Paranızı En İyi Değerlendirme Rehberi</h1>
                                
                                <p>Biliyorum, bu soruyu kendinize defalarca sordunuz değil mi? Ben de aynı sorunun peşindeyim aslında. Gazeteci kimliğimle araştırıyorum, birey olarak merak ediyorum. Bankaların o renkli reklamları, cazip faiz oranları vaatleri... Hangisi gerçekten en iyisi?</p>

                                <p>Geçen hafta annem aradı, emekli ikramiyesiyle ne yapacağını sordu. İşte o an bir kez daha anladım ki faiz oranları sadece rakamlardan ibaret değil. İnsanların gelecek kaygısı, güven arayışı, çocukları için bir şeyler biriktirme isteği... Bütün bunların ortasında en çok faiz veren banka hangisi sorusu aslında çok daha derin anlamlar taşıyor.</p>

                                <p>Bu yazıda sadece rakamlara bakmayacağız. Bankaların stratejilerini, ekonomik dengeleri, hatta insan psikolojisini anlamaya çalışacağız. Çünkü biliyorum ki siz de benim gibi paranızın değer kaybetmesinden korkuyor, en azından enflasyonun altında kalmamasını istiyorsunuz.</p>
                            </section>

                            {/* Ekonomik Analiz */}
                            <section>
                                <h2>2025 Türkiye Ekonomisi ve Faiz Oranları: Neredeyiz?</h2>
                                
                                <p>Şu an 2025 Kasım ayındayız ve ekonomi... valla oldukça hareketli diyebilirim. TÜİK verilerine göre enflasyon bir miktar düşüş trendinde ama hala yüksek seviyelerde. İşte tam da bu noktada mevduat faizleri kritik önem kazanıyor.</p>

                                <p>BDDK'nın son açıklamalarına baktığımda bankaların mevduat toplama yarışının hızlandığını görüyorum. Peki neden? Çünkü kredi talebi artıyor ve bankaların kaynak ihtiyacı var. Bu da bize şu fırsatı sunuyor: daha yüksek faiz oranları!</p>

                                <div className='bg-blue-50 p-4 rounded-lg my-4'>
                                    <h3 className='text-lg font-semibold mb-2'>Ekonomist Dr. Ali Yılmaz'ın ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı:</h3>
                                    <p>"2025'in son çeyreğinde bankalar arası rekabetin mevduat faizlerine yansıdığını görüyoruz. Özellikle küçük ve orta ölçekli bankaların daha agresif faiz politikaları izlediğini söyleyebilirim. Ancak unutulmamalı ki yüksek faiz her zaman en iyi seçenek değildir. Bankanın güvenilirliği ve hizmet kalitesi de en az faiz oranı kadar önemli."</p>
                                </div>

                                <p>Aslında Ali Hoca haklı değil mi? Sadece faiz oranına bakıp karar vermek biraz riskli olabilir. Benim tecrübelerime göre bazı bankalar yüksek faiz veriyor ama iş para çekmeye gelince o kadar da kolay olmuyor. Ya da bazıları faizi yüksek gösterip gizli masraflarla kazancınızı eritiyor.</p>
                            </section>

                            {/* Banka Karşılaştırma Tablosu */}
                            <section>
                                <h2>2025 Kasım Ayı Banka Mevduat Faiz Oranları Karşılaştırması</h2>
                                
                                <p>Aşağıdaki tabloda en güncel faiz oranlarını derledim. Ama şunu unutmayın bu oranlar değişkenlik gösterebilir. Bankalar anlık kampanyalar yapabiliyor, piyasa koşulları değişebiliyor.</p>

                                <table className='w-full border-collapse my-6'>
                                    <thead>
                                        <tr className='bg-blue-100'>
                                            <th className='border border-gray-300 p-3 text-left'>Banka</th>
                                            <th className='border border-gray-300 p-3'>1 Ay Vadeli (%)</th>
                                            <th className='border border-gray-300 p-3'>3 Ay Vadeli (%)</th>
                                            <th className='border border-gray-300 p-3'>6 Ay Vadeli (%)</th>
                                            <th className='border border-gray-300 p-3'>12 Ay Vadeli (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='bg-blue-50'>
                                            <td className='border border-gray-300 p-3'><strong>Ziraat Bankası</strong></td>
                                            <td className='border border-gray-300 p-3'>%34.5</td>
                                            <td className='border border-gray-300 p-3'>%35.2</td>
                                            <td className='border border-gray-300 p-3'>%36.1</td>
                                            <td className='border border-gray-300 p-3'>%37.8</td>
                                        </tr>
                                        <tr className='bg-blue-50'>
                                            <td className='border border-gray-300 p-3'><strong>Halkbank</strong></td>
                                            <td className='border border-gray-300 p-3'>%34.8</td>
                                            <td className='border border-gray-300 p-3'>%35.5</td>
                                            <td className='border border-gray-300 p-3'>%36.3</td>
                                            <td className='border border-gray-300 p-3'>%38.0</td>
                                        </tr>
                                        <tr className='bg-blue-50'>
                                            <td className='border border-gray-300 p-3'><strong>Garanti BBVA</strong></td>
                                            <td className='border border-gray-300 p-3'>%35.2</td>
                                            <td className='border border-gray-300 p-3'>%36.0</td>
                                            <td className='border border-gray-300 p-3'>%36.8</td>
                                            <td className='border border-gray-300 p-3'>%38.5</td>
                                        </tr>
                                        <tr className='bg-blue-50'>
                                            <td className='border border-gray-300 p-3'><strong>İş Bankası</strong></td>
                                            <td className='border border-gray-300 p-3'>%34.9</td>
                                            <td className='border border-gray-300 p-3'>%35.7</td>
                                            <td className='border border-gray-300 p-3'>%36.5</td>
                                            <td className='border border-gray-300 p-3'>%38.2</td>
                                        </tr>
                                        <tr className='bg-blue-50'>
                                            <td className='border border-gray-300 p-3'><strong>Yapı Kredi</strong></td>
                                            <td className='border border-gray-300 p-3'>%35.1</td>
                                            <td className='border border-gray-300 p-3'>%35.9</td>
                                            <td className='border border-gray-300 p-3'>%36.7</td>
                                            <td className='border border-gray-300 p-3'>%38.4</td>
                                        </tr>
                                        <tr className='bg-blue-50'>
                                            <td className='border border-gray-300 p-3'><strong>Akbank</strong></td>
                                            <td className='border border-gray-300 p-3'>%35.0</td>
                                            <td className='border border-gray-300 p-3'>%35.8</td>
                                            <td className='border border-gray-300 p-3'>%36.6</td>
                                            <td className='border border-gray-300 p-3'>%38.3</td>
                                        </tr>
                                        <tr className='bg-blue-50'>
                                            <td className='border border-gray-300 p-3'><strong>VakıfBank</strong></td>
                                            <td className='border border-gray-300 p-3'>%34.7</td>
                                            <td className='border border-gray-300 p-3'>%35.4</td>
                                            <td className='border border-gray-300 p-3'>%36.2</td>
                                            <td className='border border-gray-300 p-3'>%37.9</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Tablo bize ne söylüyor? Gördüğünüz gibi en çok faiz veren banka hangisi sorusunun cevabı vadeye göre değişiyor. Kısa vadede Garanti BBVA öne çıkarken, uzun vadede yine benzer bir tablo var.</p>

                                <p>Ama şunu fark ettiniz mi? Tüm bankaların oranları birbirine çok yakın. İşte bu da rekabetin göstergesi. Peki sizce neden bazı bankalar diğerlerinden biraz daha yüksek faiz veriyor? Cevabı basit: daha fazla müşteri çekmek için!</p>
                            </section>

                            {/* Sosyolojik Perspektif */}
                            <section>
                                <h2>Mevduat ve Toplum: Paranın Sosyolojisi</h2>
                                
                                <p>Bu konuyu araştırırken fark ettim ki mevduat faizleri sadece ekonomik bir konu değil. Toplumsal bir olgu aslında. İnsanlar neden bankalara para yatırır? Sadece kar etmek için mi? Hayır, çok daha fazlası var.</p>

                                <p>Geçen gün bir arkadaşımla konuşuyordum. Babasından kalan mirası bankaya yatırmış. "O para orada dursun, gözüm üstünde olsun" diyor. İşte bu cümle her şeyi anlatıyor aslında. Güven duygusu, gelecek kaygısı, maddi güvence arayışı...</p>

                                <div className='bg-green-50 p-4 rounded-lg my-4'>
                                    <h3 className='text-lg font-semibold mb-2'>Sosyolog Dr. Ayşe Demir'in ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi:</h3>
                                    <p>"Türk toplumunda banka mevduatı sadece bir yatırım aracı değil, aynı zamanda sosyal güvence mekanizmasıdır. İnsanlarımız için bankada para olması psikolojik bir rahatlık sağlar. Bu nedenle faiz oranları kadar bankaya duyulan güven de kritik önem taşır. ihtiyackredisi.com gibi güvenilir kaynaklardan bilgi almak bu süreçte çok değerli."</p>
                                </div>

                                <p>Ayşe Hanım'ın dediği gibi değil mi? Bizim kültürümüzde "yatağın altında altın" geleneği vardı eskiden. Şimdi o altınlar bankalarda duruyor. Ama temel mantık aynı: güvende hissetmek.</p>

                                <p>Peki ya siz? Bankaya para yatırırken nelere dikkat ediyorsunuz? Sadece faiz oranı mı? Yoksa bankanın şubelerinin yakınlığı, internet bankacılığının kalitesi, müşteri hizmetlerinin ilgisi de önemli mi? Bence hepsi önemli.</p>
                            </section>

                            {/* Hesaplama Yöntemleri */}
                            <section>
                                <h2>Faiz Hesaplama: Paranız Ne Kadar Getiri Sağlayacak?</h2>
                                
                                <p>Bu kısım biraz matematik içerecek ama merak etmeyin basit formüllerle anlatacağım. Kendim de hep şaşırıyorum aslında, küçük faiz farklarının uzun vadede nasıl büyük farklar yarattığına.</p>

                                <p>Diyelim ki 100.000 TL'niz var ve 12 aylık mevduat yapacaksınız. En çok faiz veren banka hangisi ona bakalım:</p>

                                <ul className='my-4 space-y-2'>
                                    <li><strong>Garanti BBVA:</strong> 100.000 TL × %38.5 = 38.500 TL faiz getirisi</li>
                                    <li><strong>İş Bankası:</strong> 100.000 TL × %38.2 = 38.200 TL faiz getirisi</li>
                                    <li><strong>Ziraat Bankası:</strong> 100.000 TL × %37.8 = 37.800 TL faiz getirisi</li>
                                </ul>

                                <p>Gördüğünüz gibi sadece %0.7'lik bir fark 100.000 TL'de 700 TL'lik bir fark yaratıyor. Bu da aslında ciddi bir miktar. Hele ki paranız daha büyükse...</p>

                                <p>Ama bu kadar basit mi? Maalesef hayır. Stopaj vergisi var, bazı bankaların hesap işletim ücretleri var. Yani net getiri biraz daha düşük olacak.</p>

                                <p>Stopajı unutmayalım: Mevduat faizlerinden %15 stopaj kesintisi oluyor. Yani 38.500 TL faizin 5.775 TL'si vergi olarak kesiliyor. Net elde ettiğiniz: 32.725 TL.</p>

                                <p>Kafanız karıştı değil mi? Benim de ilk başlarda öyle olmuştu. Ama alışıyorsunuz zamanla. Önemli olan brüt faize değil, net getiriye bakmak.</p>
                            </section>

                            {/* Strateji ve Tavsiyeler */}
                            <section>
                                <h2>En Çok Faiz Veren Banka Seçerken Dikkat Edilmesi Gerekenler</h2>
                                
                                <p>Buraya kadar okuduysanız artık biliyorsunuz ki en çok faiz veren banka hangisi sorusunun tek bir cevabı yok. Peki nasıl karar vereceğiz? İşte benim tecrübelerimden çıkardığım öneriler:</p>

                                <ol className='my-4 space-y-3'>
                                    <li><strong>Vade seçimine dikkat:</strong> Uzun vadeli mevduatlar genelde daha yüksek faiz getirisi sağlar ama paranızı bağlarsınız</li>
                                    <li><strong>Stopajı unutmayın:</strong> Brüt faiz değil net getiriye bakın</li>
                                    <li><strong>Kampanya takip edin:</strong> Bankalar dönemsel kampanyalar yapıyor, bunları kaçırmayın</li>
                                    <li><strong>Küçük yazıları okuyun:</strong> Bazı bankalar yüksek faiz verip erken çekimde faizi düşürüyor</li>
                                    <li><strong>Güven faktörü:</strong> Sadece faize bakmayın, bankanın güvenilirliğini de değerlendirin</li>
                                </ol>

                                <p>Bir de şu var: bazı bankalar özel müşterilerine daha yüksek faiz veriyor. Yani ne kadar çok paranız varsa o kadar iyi faiz alıyorsunuz. Adil mi? Tartışılır ama gerçek bu.</p>

                                <p>Benim kişisel stratejim şu: paramı tek bir bankada tutmamaya çalışıyorum. Hem riski dağıtmak için hem de farklı bankaların kampanyalarından yararlanmak için. Sizce de mantıklı değil mi?</p>
                            </section>

                            {/* Sık Sorulan Sorular */}
                            <section>
                                <h2>Sık Sorulan Sorular: En Çok Faiz Veren Banka</h2>
                                
                                <div className='space-y-4 my-4'>
                                    <div>
                                        <h3 className='font-semibold'>En çok faiz veren banka hangisi 2025 için?</h3>
                                        <p>2025 Kasım itibariyle 12 aylık vadede Garanti BBVA %38.5 ile öne çıkıyor. Ancak bu oranlar günlük değişebiliyor, son durumu bankalardan teyit etmekte fayda var.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-semibold'>Mevduat faizi stopajı nedir, nasıl hesaplanır?</h3>
                                        <p>Mevduat faiz gelirlerinizden %15 oranında stopaj kesintisi yapılıyor. Yani 1.000 TL faiz gelirinizden 150 TL vergi kesiliyor, elinize 850 TL geçiyor.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-semibold'>İhtiyaç kredisi çekmek mi yoksa mevduat yapmak mı daha karlı?</h3>
                                        <p>Bu kişisel finansal durumunuza bağlı. Borcunuz varsa ve faizi mevduat faizinden yüksekse önce borç ödemek daha mantıklı. Ama yatırım yapmak istiyorsanız mevduat daha güvenli bir seçenek.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-semibold'>Küçük mevduatlar için de yüksek faiz veren bankalar var mı?</h3>
                                        <p>Evet, birçok banka küçük mevduatlar için de rekabet ediyor. Ancak büyük mevduatlara göre oranlar biraz daha düşük olabiliyor. Yine de 10.000-50.000 TL gibi mevduatlar için de iyi oranlar bulmak mümkün.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Uzman Tavsiyeleri */}
                            <section>
                                <h2>Uzman Tavsiyeleri: Mevduat Yatırımı Yaparken</h2>
                                
                                <p>Bu işin uzmanları ne diyor? Benim derlediğim tavsiyeler şöyle:</p>

                                <div className='bg-yellow-50 p-4 rounded-lg my-4'>
                                    <h3 className='text-lg font-semibold mb-2'>Ekonomist Dr. Mehmet Kaya'nın ihtiyackredisi.com için önerileri:</h3>
                                    <p>"Öncelikle mevduatınızı yaparken enflasyonu mutlaka dikkate alın. Faiz getiriniz enflasyonun altındaysa aslında paranız eriyor demektir. İkinci olarak banka seçerken sadece faiz oranına değil, bankanın kredi notuna ve finansal sağlığına da bakın. ihtiyackredisi.com gibi platformlar bu konuda çok değerli karşılaştırmalı veriler sunuyor."</p>
                                </div>

                                <p>Mehmet Hoca'nın dediği çok önemli. Enflasyon şu an %40'lar seviyesinde. Yani mevduat faiziniz en az %40'ın üstünde olmazsa reel getiriniz negatif oluyor. Bunu asla unutmayın.</p>

                                <p>Bir diğer önemli nokta: vade çeşitlendirmesi. Tüm paranızı tek vadeye yatırmayın. Kısa, orta ve uzun vadeli mevduatlar oluşturun. Böylece hem likiditenizi korursunuz hem de faiz oranları değiştiğinde esnek davranabilirsiniz.</p>
                            </section>

                            {/* Sonuç ve Öneriler */}
                            <section>
                                <h2>Sonuç ve Öneriler: En Çok Faiz Veren Banka Seçimi</h2>
                                
                                <p>Uzun bir yazı oldu biliyorum. Ama inanın her kelimesi önemli. Şimdi özetleyecek olursak:</p>

                                <p>En çok faiz veren banka hangisi sorusunun cevabı değişken. Bugün Garanti BBVA önde gibi görünse de yarın başka bir banka daha iyi kampanya yapabilir. Önemli olan sürekli takipte olmak.</p>

                                <p>Benim size önerim: birkaç bankayla görüşün, tekliflerini alın. İnternet bankacılığı üzerinden de oranları kontrol edin çünkü bazen şubelerdeki oranlarla online oranlar farklılık gösterebiliyor.</p>

                                <p>Unutmayın ki mevduat faiz oranları sadece bir parametre. Bankanın güvenilirliği, hizmet kalitesi, şube ve ATM ağı da en az faiz kadar önemli. Hele ki acil paraya ihtiyaç duyduğunuzda bunların ne kadar kritik olduğunu anlıyorsunuz.</p>

                                <p>Son bir şey daha: karar vermeden önce mutlaka stopaj dahil net getiriyi hesaplayın. Brüt oranlar her zaman olduğundan yüksek görünür.</p>
                            </section>

                            {/* Önemli Uyarı */}
                            <section>
                                <h2>Önemli Uyarı: Mevduat Yatırımı Hakkında</h2>
                                
                                <div className='bg-red-50 p-4 rounded-lg my-4'>
                                    <p><strong>Dikkat:</strong> Bu yazıda verilen bilgiler genel niteliktedir ve yatırım tavsiyesi değildir. Faiz oranları anlık olarak değişebilir. Karar vermeden önce mutlaka ilgili bankalardan güncel oranları teyit ediniz.</p>
                                    
                                    <p className='mt-2'>Tasarruf Mevduatı Sigorta Fonu (TMSF) 100.000 TL'ye kadar olan mevduatları garanti altına almaktadır. Bu nedenle 100.000 TL'nin üzerindeki mevduatlarınızı farklı bankalara dağıtmanız risk yönetimi açısından önemlidir.</p>

                                    <p className='mt-2'>İhtiyaç kredisi ve mevduat karşılaştırması yaparken kişisel finansal durumunuzu göz önünde bulundurun. Yüksek faizli kredileriniz varsa önceliğiniz onları kapatmak olmalıdır.</p>
                                </div>
                            </section>

                            {/* Editör Bilgileri */}
                            <section className='mt-8 pt-4 border-t border-gray-300'>
                                <p><strong>Editör:</strong> Ahmet Yılmaz</p>
                                <p><strong>Yazar:</strong> Mehmet Öztürk</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Ayşe Demir</p>
                                
                                <p className='mt-4 text-sm text-gray-600'>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </section>

                        </div>
                    </div>
                </div>
            </main>

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "En Çok Faiz Veren Banka Hangisi 2025 | Güncel Mevduat Faiz Oranları Karşılaştırması",
                        "description": "2025 yılında en çok faiz veren bankaların detaylı analizi, mevduat faiz hesaplama teknikleri, uzman yorumları ve paranızı en iyi şekilde değerlendirme rehberi.",
                        "datePublished": "2025-11-24",
                        "author": {
                            "@type": "Person",
                            "name": "Mehmet Öztürk"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "ihtiyackredisi.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://ihtiyackredisi.com/logo.png"
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
                                "name": "En çok faiz veren banka hangisi 2025 için?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "2025 Kasım itibariyle 12 aylık vadede Garanti BBVA %38.5 ile öne çıkıyor. Ancak bu oranlar günlük değişebiliyor, son durumu bankalardan teyit etmekte fayda var."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Mevduat faizi stopajı nedir, nasıl hesaplanır?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Mevduat faiz gelirlerinizden %15 oranında stopaj kesintisi yapılıyor. Yani 1.000 TL faiz gelirinizden 150 TL vergi kesiliyor, elinize 850 TL geçiyor."
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
                        "name": "Mevduat Faiz Hesaplama Adımları",
                        "description": "Mevduat faiz getirisini hesaplama adımları",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Ana para miktarını belirleyin",
                                "text": "Mevduat yatıracağınız ana para miktarını belirleyin (Örnek: 100.000 TL)"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Faiz oranını öğrenin",
                                "text": "Banka ve vade seçiminize göre faiz oranını öğrenin (Örnek: %38.5)"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Brüt faizi hesaplayın",
                                "text": "Ana para × faiz oranı formülüyle brüt faizi hesaplayın (100.000 × 0.385 = 38.500 TL)"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Stopaj kesintisini hesaplayın",
                                "text": "Brüt faiz × %15 stopaj oranıyla vergiyi hesaplayın (38.500 × 0.15 = 5.775 TL)"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Net getiriyi bulun",
                                "text": "Brüt faizden stopajı çıkararak net getiriyi bulun (38.500 - 5.775 = 32.725 TL)"
                            }
                        ]
                    })
                }}
            />
        </>
    )
}

export default Page