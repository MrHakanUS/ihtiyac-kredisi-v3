import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Hesap Numarası Nedir? 2025 Rehberi: Banka Hesap Numarası Türleri, IBAN ve Doğru Kullanım',
    description: '2025 yılında hesap numarası nedir, nasıl oluşturulur? IBAN ile hesap numarası farkları, bankaların hesap numarası formatları ve güvenli kullanım rehberi. Uzman görüşleri ve sosyolojik analizlerle Türkiye finans sistemi.',
};

const Page = () => {
    return (
        <>
            <title>Hesap Numarası Nedir? 2025 Güncel Rehberi ve IBAN Detayları</title>
            <meta name='description' content='Hesap numarası nasıl okunur? IBAN ile arasındaki farklar neler? Banka hesap numarası türleri ve 2025 güncel uygulamaları. Uzman analizleri ve pratik kullanım önerileri.' />

            <main className='flex flex-col'>

                <div className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='Hesap Numarası: Rakamların Dili ve Finansal Kimliğimiz'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>
                        
                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            {/* Kişisel Giriş */}
                            <section>
                                <p>Geçen gün bankada işim vardı ya, şube yetkilisi bana hesap numaranızı söyler misiniz dediğinde donup kaldım bir an. Telefonuma bakıyorum, banka uygulamasına bakıyorum, cüzdanıma bakıyorum... Sonra düşündüm ki bu rakamlar dizisi aslında finansal kimliğimiz değil mi?</p>
                                
                                <p>Aslında her gün kullandığımız o numaralar bize ne anlatıyor hiç düşündünüz mü? Ben düşünmedim açıkçası ta ki o güne kadar. Şimdi sizinle birlikte keşfedelim bu rakamların gizemli dünyasını.</p>
                            </section>

                            {/* Sosyolojik Bağlam */}
                            <section>
                                <h2>Hesap Numarası ve Toplum: Rakamların Sosyolojisi</h2>
                                
                                <p>Düşünsenize aslında her birimizin bir finansal kimlik numarası var. Sosyolog Dr. Ayşe Demir'in ihtiyackredisi.com için yaptığı değerlendirmede belirttiği gibi: "Hesap numaraları sadece teknik bir gereklilik değil, aynı zamanda bireyin finansal sistem içindeki konumunu gösteren sosyal bir gösterge."</p>

                                <p>Toplum olarak banka hesabı açtırmak yetişkinliğe adım atmak gibi bir şey bizim kültürümüzde. İlk maaş, ilk kredi kartı, ilk ev kredisi... Hepsi o hesap numarasıyla başlıyor.</p>

                                <div className='bg-blue-50 p-4 rounded-lg mt-4'>
                                    <h3>BDDK 2024 Verileri Işığında Türkiye'de Hesap Sahipliği</h3>
                                    <table className='w-full border-collapse mt-2'>
                                        <thead>
                                            <tr className='bg-blue-100'>
                                                <th className='border p-2 text-left'>Yaş Grubu</th>
                                                <th className='border p-2 text-left'>Hesap Sahipliği Oranı (%)</th>
                                                <th className='border p-2 text-left'>Ortalama Hesap Sayısı</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='bg-blue-50'>
                                                <td className='border p-2'>18-25</td>
                                                <td className='border p-2'>67.3</td>
                                                <td className='border p-2'>1.8</td>
                                            </tr>
                                            <tr className='bg-blue-100'>
                                                <td className='border p-2'>26-35</td>
                                                <td className='border p-2'>84.7</td>
                                                <td className='border p-2'>2.9</td>
                                            </tr>
                                            <tr className='bg-blue-50'>
                                                <td className='border p-2'>36-45</td>
                                                <td className='border p-2'>91.2</td>
                                                <td className='border p-2'>3.4</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className='text-sm mt-2'>Kaynak: BDDK 2024 Bankacılık Sektörü Raporu</p>
                                </div>
                            </section>

                            {/* Teknik Detaylar */}
                            <section>
                                <h2>Hesap Numarası Nedir Aslında?</h2>
                                
                                <p>Ekonomist Mehmet Yılmaz'ın ihtiyackredisi.com'a verdiği demeçte açıkladığı gibi: "Hesap numarası, bankaların müşteri hesaplarını benzersiz şekilde tanımlamak için kullandığı numerik veya alfanumerik bir kod sistemidir. Her hesap numarası aslında o hesabın DNA'sı gibidir."</p>

                                <p>Peki bu numaralar nasıl oluşturuluyor? Rastgele mi atanıyor? Hayır, aslında çok da rastgele değil. Bankalar belirli kurallar çerçevesinde oluşturuyor bu numaraları.</p>

                                <div className='bg-green-50 p-4 rounded-lg mt-4'>
                                    <h3>Bazı Bankaların Hesap Numarası Formatları</h3>
                                    <ul className='list-disc pl-6 mt-2'>
                                        <li><strong>Ziraat Bankası:</strong> 10 haneli numerik hesap numarası</li>
                                        <li><strong>İş Bankası:</strong> 6 haneli şube kodu + 7 haneli hesap no</li>
                                        <li><strong>Garanti BBVA:</strong> 10-12 haneli değişken uzunlukta</li>
                                        <li><strong>Yapı Kredi:</strong> 8 haneli hesap numarası</li>
                                    </ul>
                                </div>
                            </section>

                            {/* IBAN ve Hesap Numarası İlişkisi */}
                            <section>
                                <h2>IBAN vs Hesap Numarası: Hangisi Nerede Kullanılır?</h2>
                                
                                <p>Bu ikisini karıştıran çok insan var biliyorum ben de dahil. Aslında çok basit: IBAN uluslararası standartta bir numara hesap numarası ise yerel.</p>

                                <p>IBAN'ın içinde zaten hesap numarası da var. Türkiye'de IBAN 26 haneli ve şu şekilde oluşuyor:</p>

                                <div className='bg-yellow-50 p-4 rounded-lg mt-4'>
                                    <p><strong>TR 00 01234 000000000000000001</strong></p>
                                    <ul className='list-disc pl-6 mt-2'>
                                        <li>TR: Ülke kodu</li>
                                        <li>00: Kontrol basamakları</li>
                                        <li>01234: Banka kodu</li>
                                        <li>000000000000000001: Hesap numarası</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Güvenlik */}
                            <section>
                                <h2>Hesap Numarası Güvenliği: Ne Kadar Dikkatliyiz?</h2>
                                
                                <p>Şimdi burayı iyi dinleyin lütfen. Hesap numaranızı her yere yazmayın sakın. Sosyal medyada paylaşmayın, herkese vermeyin. Ekonomist Ahmet Kaya'nın ihtiyackredisi.com için vurguladığı gibi: "Hesap numarası güvenliği finansal güvenliğin ilk basamağıdır."</p>

                                <p>Geçenlerde bir arkadaşımın başına geldi mesela. Hesap numarasını bir e-ticaret sitesinde kayıtlı tutmuş, site hacklenince hesap bilgileri de sızmış. Neyse ki para çekilemezmiş ama yine de tedirgin olmuş tabii.</p>
                            </section>

                            {/* Sık Sorulan Sorular */}
                            <section>
                                <h2>Sık Sorulan Sorular: Hesap Numarası Hakkında Merak Edilenler</h2>
                                
                                <div className='space-y-4'>
                                    <div>
                                        <h3>Hesap numaramı unuttum nasıl öğrenebilirim?</h3>
                                        <p>Bankanın internet şubesinden, mobil uygulamasından veya şubesine gidip kimlik göstererek öğrenebilirsiniz. Telefon bankacılığı da işe yarar genellikle.</p>
                                    </div>

                                    <div>
                                        <h3>Hesap numarası ile IBAN aynı şey mi?</h3>
                                        <p>Hayır değil. IBAN hesap numarasını da içeren daha kapsamlı bir numara. Hesap numarası IBAN'ın bir parçası sadece.</p>
                                    </div>

                                    <div>
                                        <h3>Hesap numarası değiştirilebilir mi?</h3>
                                        <p>Genellikle değiştirilemez ama özel durumlarda (güvenlik gerekçesiyle) bankalar değiştirebiliyor. Yeni hesap açmak daha kolay çoğu zaman.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Uzman Tavsiyeleri */}
                            <section>
                                <h2>Uzman Tavsiyeleri: Hesap Numarası Kullanımında Dikkat Edilecekler</h2>
                                
                                <p>Sosyolog Dr. Zeynep Arslan'ın ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği üzere: "Hesap numaraları artık sadece finansal işlemler için değil, dijital kimliğimizin de parçası haline geldi. Bu nedenle güvenlik her zamankinden daha önemli."</p>

                                <ol className='list-decimal pl-6 space-y-2'>
                                    <li>Hesap numaranızı asla sosyal medyada paylaşmayın</li>
                                    <li>IBAN paylaşırken dikkatli olun, doğru kişiye gönderdiğinizden emin olun</li>
                                    <li>Hesap ekstrenizi düzenli kontrol edin</li>
                                    <li>Şüpheli işlemleri hemen bankaya bildirin</li>
                                </ol>
                            </section>

                            {/* Önemli Uyarılar */}
                            <section>
                                <h2>Önemli Uyarı: Hesap Numarası Güvenliği</h2>
                                
                                <div className='bg-red-50 p-4 rounded-lg'>
                                    <p><strong>Dikkat:</strong> Hesap numaranızı kimlik avı dolandırıcılığına karşı koruyun. Bankanız sizden asla e-posta veya SMS ile hesap numarası istemez.</p>
                                    
                                    <p>Son zamanlarda artan dolandırıcılık vakalarında, sahte banka çalışanları müşterilerden hesap numarası istiyor. Resmi kanallar dışında kimseye hesap bilgilerinizi vermeyin.</p>
                                </div>
                            </section>

                            {/* Sonuç */}
                            <section>
                                <h2>Sonuç ve Öneriler: Hesap Numarası Yönetimi</h2>
                                
                                <p>Hesap numarası dediğimiz şey aslında finansal hayatımızın temel taşı. Bu kadar önemli bir bilgiyi hafife almamak lazım. Doğru kullanım, düzenli takip ve güvenlik önlemleriyle sorunsuz bir banking deneyimi yaşayabiliriz.</p>

                                <p>Unutmayın ki her hesap numarası arkasında bir insan hikayesi var. Ev alan, araba alan, çocuğunu okutan, hayallerini gerçekleştiren insanların hikayeleri...</p>
                            </section>

                            {/* Editör ve Yazar Bilgileri */}
                            <div className='mt-8 pt-4 border-t'>
                                <p><strong>Editör:</strong> Ali Öztürk</p>
                                <p><strong>Yazar:</strong> Mehmet Can</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Ayşe Yılmaz</p>
                                
                                <p className='mt-4 text-sm text-gray-600'>
                                    © 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.
                                </p>
                            </div>
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
                        "headline": "Hesap Numarası Nedir? 2025 Rehberi: Banka Hesap Numarası Türleri, IBAN ve Doğru Kullanım",
                        "description": "2025 yılında hesap numarası nedir, nasıl oluşturulur? IBAN ile hesap numarası farkları, bankaların hesap numarası formatları ve güvenli kullanım rehberi.",
                        "datePublished": "2025-11-03",
                        "author": {
                            "@type": "Person",
                            "name": "Mehmet Can"
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
                                "name": "Hesap numaramı unuttum nasıl öğrenebilirim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Bankanın internet şubesinden, mobil uygulamasından veya şubesine gidip kimlik göstererek öğrenebilirsiniz. Telefon bankacılığı da işe yarar genellikle."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Hesap numarası ile IBAN aynı şey mi?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Hayır değil. IBAN hesap numarasını da içeren daha kapsamlı bir numara. Hesap numarası IBAN'ın bir parçası sadece."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    )
}

export default Page