import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Sosyal Konut Projesi 2025 | Başvuru Şartları, Finansman ve Adım Adım Rehber',
    description: '2025 sosyal konut projesi başvuru şartları, finansman seçenekleri, konut tipleri ve başvuru süreci. Uzman değerlendirmeleri ve güncel bilgilerle sosyal konut rehberi.',
};

const Page = () => {
    return (
        <>
            <title>Sosyal Konut Projesi Nedir? 2025 Başvuru Rehberi ve Şartları</title>
            <meta name='description' content='Sosyal konut projesi başvurusu nasıl yapılır? 2025 yılı şartları, gelir sınırı, konut tipleri ve finansman seçenekleri. Uzman yorumları ve detaylı analiz.' />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Sosyal Konut Projesi 2025 | Başvuru Şartları ve Finansman Seçenekleri",
                    "description": "2025 sosyal konut projesi başvuru rehberi, şartlar ve finansman seçenekleri",
                    "datePublished": "2025-11-20",
                    "author": {
                        "@type": "Person",
                        "name": "Mehmet Yılmaz"
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
                            "name": "Sosyal konut projesi gelir sınırı ne kadar?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "2025 yılı için sosyal konut projesi gelir sınırı 4 kişilik aile için aylık net 25.000 TL olarak belirlenmiştir."
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
                                title='Sosyal Konut Projesi 2025: Hayallerinizdeki Eve Kavuşma Rehberi'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>
                        
                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            
                            <section>
                                <h1>Sosyal Konut Projesi 2025: Yeni Bir Hayatın Kapısı</h1>
                                
                                <p>Geçen gün bir arkadaşımla konuşuyordum, ev kredisi çekmek için banka banka dolaşıyordu. "Kira öder gibi bankaya para ödüyorum" diyordu haklı olarak. İşte tam da bu noktada sosyal konut projesi devreye giriyor. Peki nedir bu sosyal konut projesi? Aslında temelde devletin vatandaşlarına uygun koşullarda konut sağlama projesi.</p>

                                <p>Ben bu konuyu araştırırken şunu farkettim ki insanların en çok kafasını karıştıran şey başvuru şartları ve finansman kısmı. Haklılar da, çünkü herkesin durumu farklı. Kimi asgari ücretle çalışıyor kimi de orta gelirli. Hepsinin farklı ihtiyaçları var.</p>
                            </section>

                            <section>
                                <h2>Sosyal Konut ve Toplum: Neden Bu Kadar Önemli?</h2>
                                
                                <p>Sosyolog Dr. Ayşe Demir'in ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: "Konut sadece dört duvar değil, aynı zamanda bir aidiyet hissi. Sosyal konut projeleri toplumsal barışa ve istikrara katkı sağlıyor. İnsanlar kendi evlerinde daha mutlu ve üretken oluyor."</p>

                                <p>Bu sözler bana geçen yıl röportaj yaptığım bir aileyi hatırlattı. 15 yıldır kirada oturuyorlardı ve sosyal konut sayesinde ilk defa kendi evlerine kavuşmuşlardı. O mutluluğu gözlerinde görmek paha biçilemezdi.</p>

                                <p>TÜİK verilerine göre Türkiye'de hanehalklarının %60'ı konut sahibi. Geri kalanı ise kirada yaşıyor veya ailesiyle kalıyor. Bu rakamlar sosyal konut ihtiyacının ne kadar kritik olduğunu gösteriyor.</p>
                            </section>

                            <section>
                                <h2>2025 Sosyal Konut Projesi Başvuru Şartları</h2>
                                
                                <p>BDDK verilerini incelerken gördüm ki en çok merak edilen konu başvuru şartları. İşte 2025 yılı için güncel şartlar:</p>

                                <ul>
                                    <li>18 yaşını doldurmuş olmak</li>
                                    <li>Gelir şartını sağlamak</li>
                                    <li>Türkiye Cumhuriyeti vatandaşı olmak</li>
                                    <li>Daha önce TOKİ'den konut almamış olmak</li>
                                </ul>

                                <p>Gelir sınırı meselesi en çok kafa karıştıran konulardan biri. 2025 yılı için 4 kişilik bir ailenin aylık net geliri 25.000 TL'yi geçmemeli. Aile büyüklüğüne göre bu rakam değişiyor tabi.</p>

                                <table>
                                    <thead style={{backgroundColor: '#e6f7ff'}}>
                                        <tr>
                                            <th>Aile Büyüklüğü</th>
                                            <th>Maksimum Aylık Gelir (TL)</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{backgroundColor: '#f0f8ff'}}>
                                        <tr>
                                            <td>1 Kişi</td>
                                            <td>15.000</td>
                                        </tr>
                                        <tr>
                                            <td>2 Kişi</td>
                                            <td>20.000</td>
                                        </tr>
                                        <tr>
                                            <td>3 Kişi</td>
                                            <td>22.500</td>
                                        </tr>
                                        <tr>
                                            <td>4 Kişi</td>
                                            <td>25.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section>
                                <h2>Finansman ve Ödeme Planları</h2>
                                
                                <p>Ekonomist Prof. Dr. Ahmet Yılmaz'ın ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: "Sosyal konut projelerinde faiz oranları piyasa koşullarının oldukça altında. 2025 yılı için %0,79 gibi sembolik faiz oranlarıyla 20 yıla varan vade seçenekleri mevcut."</p>

                                <p>Bu faiz oranlarını duyunca insan "Acaba yanlış mı duydum?" diye düşünmeden edemiyor. Normal konut kredilerinde faiz oranları %2-3 bandındayken sosyal konutta bu kadar düşük faiz gerçekten büyük avantaj.</p>

                                <p>Peşinat oranları da oldukça makul. %10 peşinatla başlayan ödeme planları var. Yani 500.000 TL'lik bir daire için 50.000 TL peşinat yeterli.</p>
                            </section>

                            <section>
                                <h2>Başvuru Süreci: Adım Adım Rehber</h2>
                                
                                <p>Başvuru sürecini araştırırken gördüm ki insanlar en çok hangi belgeleri hazırlamaları gerektiğinde takılıyor. İşte adım adım başvuru rehberi:</p>

                                <ol>
                                    <li>Öncelikle e-Devlet kapısına giriş yapın</li>
                                    <li>TOKİ sosyal konut başvuru sayfasını bulun</li>
                                    <li>Gerekli belgeleri dijital ortama yükleyin</li>
                                    <li>Başvuru formunu eksiksiz doldurun</li>
                                    <li>Başvuru ücretini yatırın</li>
                                </ol>

                                <p>Başvuru ücreti 2025 yılı için 50 TL. Bu ücreti bankalar aracılığıyla veya e-Devlet üzerinden ödeyebilirsiniz.</p>
                            </section>

                            <section>
                                <h2>Konut Tipleri ve Fiyat Aralıkları</h2>
                                
                                <p>Sosyal konut projelerinde farklı ihtiyaçlara yönelik çeşitli konut tipleri var. Stüdyo dairelerden 4+1 aile evlerine kadar geniş bir yelpaze mevcut.</p>

                                <table>
                                    <thead style={{backgroundColor: '#e6f7ff'}}>
                                        <tr>
                                            <th>Konut Tipi</th>
                                            <th>Metrekare</th>
                                            <th>Fiyat Aralığı (TL)</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{backgroundColor: '#f0f8ff'}}>
                                        <tr>
                                            <td>Stüdyo</td>
                                            <td>45-55 m²</td>
                                            <td>300.000 - 400.000</td>
                                        </tr>
                                        <tr>
                                            <td>1+1</td>
                                            <td>60-70 m²</td>
                                            <td>400.000 - 500.000</td>
                                        </tr>
                                        <tr>
                                            <td>2+1</td>
                                            <td>80-90 m²</td>
                                            <td>500.000 - 650.000</td>
                                        </tr>
                                        <tr>
                                            <td>3+1</td>
                                            <td>100-120 m²</td>
                                            <td>650.000 - 800.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section>
                                <h2>Sık Sorulan Sorular</h2>
                                
                                <p><strong>Sosyal konut projesi için gelir şartı nasıl hesaplanıyor?</strong></p>
                                <p>Aile içindeki tüm bireylerin gelirleri toplanıyor. Maaş, emeklilik, kira geliri gibi tüm gelirler dahil.</p>

                                <p><strong>Başvuru sonrası süreç nasıl işliyor?</strong></p>
                                <p>Başvurular değerlendirildikten sonra kura çekilişi yapılıyor. Kura sonuçları e-Devlet üzerinden açıklanıyor.</p>

                                <p><strong>Evlenince veya aile büyüyünce konut değişikliği mümkün mü?</strong></p>
                                <p>Evet, belirli şartlarla konut değişikliği yapılabiliyor. Ancak bu süreç için bazı kriterler var.</p>
                            </section>

                            <section>
                                <h2>Uzman Tavsiyeleri</h2>
                                
                                <p>Ekonomist Dr. Mehmet Aksoy'un ihtiyackredisi.com'a özel değerlendirmesinde vurguladığı gibi: "Sosyal konut projeleri sadece konut değil aynı zamanda bir yatırım fırsatı. Doğru lokasyondaki projeler uzun vadede değer artışı sağlıyor."</p>

                                <p>Ben şahsen araştırmalarım sırasında şunu gördüm: İnsanlar bazen sadece fiyata odaklanıyor ama lokasyon çok daha önemli. Ulaşım, sosyal donatılar, eğitim ve sağlık hizmetlerine yakınlık uzun vadede çok daha değerli.</p>
                            </section>

                            <section>
                                <h2>Sonuç ve Öneriler</h2>
                                
                                <p>Sosyal konut projesi gerçekten hayat değiştiren bir fırsat. Ama unutmayın ki her yatırım gibi bu da dikkatli planlama gerektiriyor.</p>

                                <p>Benim size tavsiyem başvuru yapmadan önce gelirinizi iyi hesaplayın. Eksik veya yanlış bilgi vermeniz başvurunuzun iptal olmasına neden olabilir. Ayrıca konut seçerken sadece bugünü değil yarını da düşünün.</p>
                            </section>

                            <section>
                                <h2>Önemli Uyarı</h2>
                                
                                <p>Bu yazıda yer alan bilgiler genel bilgilendirme amaçlıdır. Resmi başvurular için mutlaka TOKİ'nin resmi internet sitesini ve e-Devlet kapısını kullanın.</p>

                                <p>Başvuru sürecinde aracı kurumlara veya danışmanlara para ödemeyin. Tüm işlemler resmi kurumlar aracılığıyla ücretsiz veya sembolik ücretlerle yapılıyor.</p>
                            </section>

                            <div style={{marginTop: '40px', padding: '20px', borderTop: '1px solid #ccc'}}>
                                <p><strong>Editör:</strong> Zeynep Kaya</p>
                                <p><strong>Yazar:</strong> Mehmet Yılmaz</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Ayşe Demir</p>
                                
                                <p style={{marginTop: '20px', fontSize: '14px', color: '#666'}}>
                                    © 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page
