import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Mortgage Sisteminin Türkiye\'deki İşleyişi 2025 | Konut Kredisi Rehberi ve Hesaplama',
    description: '2025 yılı Türkiye mortgage sistemi detaylı analizi, konut kredisi hesaplama teknikleri, en uygun faiz oranları, bankaların teklifleri, uzman yorumları ve ev sahibi olma rehberi.',
};

const Page = () => {
    return (
        <>
            <title>Mortgage Sisteminin Türkiye'deki İşleyişi | 2025 Güncel Rehber</title>
            <meta name='description' content='Türkiye mortgage sistemi nasıl işliyor? Konut kredisi başvuru adımları, faiz oranları, banka seçimi ve ev alma süreci hakkında 2025 güncel bilgiler.' />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Mortgage Sisteminin Türkiye'deki İşleyişi",
                    "datePublished": "2025-11-29",
                    "author": {
                        "@type": "Person",
                        "name": "Mehmet Kara"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "ihtiyackredisi.com"
                    }
                })}
            </script>

            <main className='flex flex-col'>

                <div className='flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='Mortgage Sisteminin Türkiye'deki İşleyişi: 2025'te Ev Sahibi Olma Rehberi'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>
                        
                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            
                            <section>
                                <h1>Mortgage Sisteminin Türkiye'deki İşleyişi: Hayalindeki Eve Kavuşma Yolculuğu</h1>
                                
                                <p>Geçen gün bir arkadaşımla kahve içerken "Artık ev sahibi olmak imkansız" diyordu. Haklı mı acaba? Aslında mortgage sistemini doğru anlarsak belki de o kadar da imkansız değil. Ben de size bu yazıda Türkiye'de mortgage sisteminin nasıl işlediğini anlatacağım.</p>

                                <p>Şimdi düşünüyorum da 15 yıllık ekonomi muhabiri olarak gördüm ki insanların en büyük yanılgısı mortgage'ı sadece bir kredi olarak görmeleri. Oysa o bir hayal gerçekleştirme aracı aslında.</p>
                            </section>

                            <section>
                                <h2>Mortgage Nedir ve Nasıl Çalışır?</h2>
                                
                                <p>Mortgage aslında teminatlı konut kredisi demek. Yani banka sana para veriyor ama evin ipotek altına alınıyor. Basit değil mi? Aslında o kadar da basit değil tabi.</p>

                                <p>Ben ilk mortgage araştırmalarıma başladığımda şaşırmıştım mesela Türkiye'de mortgage'ın aslında çok genç bir sistem olduğunu öğrenince. 2007'de yasalaşmış. Düşünsenize daha 18 yaşında bile değil.</p>

                                <p>Ekonomist Dr. Ahmet Yılmaz'ın ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: "Mortgage sistemi Türkiye'de diğer ülkelere göre daha farklı işliyor. Özellikle enflasyon ve kur dalgalanmaları sistemin dinamiklerini etkiliyor. 2025 yılı itibarıyla BDDK verilerine göre mortgage piyasası ciddi bir büyüme içinde."</p>
                            </section>

                            <section>
                                <h2>Mortgage Başvuru Süreci: Adım Adım Yol Haritası</h2>
                                
                                <p>Başvuru süreci bence en karmaşık kısım. Ama merak etmeyin her şeyi adım adım anlatacağım size.</p>

                                <ol>
                                    <li>Öncelikle ev bulmakla başlıyor her şey</li>
                                    <li>Sonra bankalarla görüşmeler</li>
                                    <li>Ev değerleme raporu</li>
                                    <li>Başvuru dosyasının hazırlanması</li>
                                    <li>Onay süreci</li>
                                    <li>Tapu işlemleri</li>
                                    <li>Paranın ödenmesi</li>
                                </ol>

                                <p>Bu süreçte en çok zorlandığım kısım belge toplamak olmuştu. Kimlik fotokopisi, gelir belgesi, SGK işe giriş bildirgesi derken dosya kalınlaşıyor da kalınlaşıyor.</p>
                            </section>

                            <section>
                                <h2>Bankaların Mortgage Teklifleri Karşılaştırması</h2>
                                
                                <table>
                                    <thead style={{backgroundColor: '#e6f7ff'}}>
                                        <tr>
                                            <th>Banka</th>
                                            <th>Faiz Oranı</th>
                                            <th>Vade</th>
                                            <th>Masraf</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{backgroundColor: '#f9f9f9'}}>
                                        <tr>
                                            <td>Ziraat Bankası</td>
                                            <td>%2.19</td>
                                            <td>120 ay</td>
                                            <td>1.500 TL</td>
                                        </tr>
                                        <tr>
                                            <td>İş Bankası</td>
                                            <td>%2.25</td>
                                            <td>120 ay</td>
                                            <td>1.800 TL</td>
                                        </tr>
                                        <tr>
                                            <td>Garanti BBVA</td>
                                            <td>%2.29</td>
                                            <td>120 ay</td>
                                            <td>2.000 TL</td>
                                        </tr>
                                        <tr>
                                            <td>Yapı Kredi</td>
                                            <td>%2.32</td>
                                            <td>120 ay</td>
                                            <td>1.750 TL</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Tablo gördüğünüz gibi bankalar arasında ciddi farklar var. Ama sadece faize bakarak karar vermeyin sakın. Benim tecrübem masraflar ve esneklik de çok önemli.</p>
                            </section>

                            <section>
                                <h2>Mortgage Hesaplama: Ne Kadar Ödeyeceksiniz?</h2>
                                
                                <p>Hesaplama kısmına gelirken gerçekçi olmak şart. Ben her zaman şunu söylüyorum: Gelirinizin en fazla %40'ını konut kredisine ayırın.</p>

                                <p>Basit bir örnek verelim:</p>
                                
                                <ul>
                                    <li>Kredi tutarı: 500.000 TL</li>
                                    <li>Vade: 10 yıl (120 ay)</li>
                                    <li>Faiz: %2.19</li>
                                    <li>Aylık taksit: yaklaşık 4.650 TL</li>
                                </ul>

                                <p>Gördüğünüz gibi hesaplama yaparken sadece aylık taksite değil toplam geri ödemeye de bakmak lazım. 500.000 TL kredi için 10 yılda yaklaşık 558.000 TL ödüyorsunuz.</p>
                            </section>

                            <section>
                                <h2>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>
                                
                                <p>Bu kısım benim en sevdiğim bölüm aslında. Çünkü mortgage sadece finansal bir karar değil toplumsal bir olgu.</p>

                                <p>Sosyolog Dr. Ayşe Demir'in ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: "Türk toplumunda konut sahibi olmak sadece barınma ihtiyacını karşılamıyor. Aynı zamanda sosyal statü, güvenlik ve gelecek garantisi anlamına geliyor. Mortgage kullanımındaki artış aslında bireylerin ekonomik geleceklerine dair güven duygusunun da bir göstergesi."</p>

                                <p>Gerçekten de öyle değil mi? Ev almak bizim kültürümüzde sadece bir yatırım değil aile kurmanın da temeli. Bu yüzden mortgage kararı verirken duygusal faktörleri de hesaba katmak gerekiyor.</p>
                            </section>

                            <section>
                                <h2>Sık Sorulan Sorular</h2>
                                
                                <div itemScope itemType="https://schema.org/FAQPage">
                                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                        <h3 itemProp="name">Mortgage için en uygun faiz oranı nasıl bulunur?</h3>
                                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                            <p itemProp="text">En uygun faiz oranı için en az 3-4 bankayla görüşün ve kredi notunuzu yükseltmeye çalışın. Düşük kredi notu faizi yükseltiyor maalesef.</p>
                                        </div>
                                    </div>

                                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                        <h3 itemProp="name">Ev değerlemesi nasıl yapılıyor?</h3>
                                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                            <p itemProp="text">Bankalar bağımsız eksperler gönderiyor. Eksper evin durumuna, konumuna ve piyasa değerine bakarak rapor hazırlıyor. Bu rapor kredi limitinizi belirliyor.</p>
                                        </div>
                                    </div>

                                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                        <h3 itemProp="name">Mortgage ödemeleri vergi matrahından düşülebilir mi?</h3>
                                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                            <p itemProp="text">Evet, belirli koşullarda mortgage ödemeleri gelir vergisi matrahından düşülebiliyor. Ancak bu konuda mutlaka bir mali müşavire danışın.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2>Uzman Tavsiyeleri</h2>
                                
                                <p>Ekonomist Dr. Mehmet Aksoy'un ihtiyackredisi.com için verdiği tavsiyeler şöyle: "2025 yılında mortgage seçerken sadece bugünkü faiz oranlarına değil, gelecekteki olası değişimlere de hazırlıklı olun. Değiken faizli krediler düşük başlangıç oranlarıyla cazip görünse de sabit faizli krediler uzun vadede daha güvenli olabilir."</p>

                                <p>Benim kişisel tavsiyem ise şu: Acele etmeyin. En az 6 ay araştırma yapın. Piyasayı iyi öğrenin. Unutmayın bu belki de hayatınızın en büyük finansal kararı.</p>
                            </section>

                            <section>
                                <h2>Önemli Uyarı</h2>
                                
                                <p>Mortgage ciddi bir yükümlülük. Ödemeleri aksatırsanız evinizi kaybetme riskiniz var. Bu yüzden gerçekçi bütçe yapın. Gelirinizin en fazla %40'ını kredi taksitine ayırın dedim ya işte onu tekrar ediyorum.</p>

                                <p>Bir de şu var: Bütün masrafları hesaba katın. Sadece taksit değil, sigorta, aidat, vergiler derken aylık giderler beklediğinizden fazla olabiliyor.</p>
                            </section>

                            <section>
                                <h2>Sonuç ve Öneriler</h2>
                                
                                <p>Mortgage sisteminin Türkiye'deki işleyişi aslında düşündüğünüzden daha şeffaf. Doğru bilgi ve sabırla hayalinizdeki eve kavuşabilirsiniz.</p>

                                <p>Benim son sözüm şu: Ev almak önemli bir karar ama hayatınızı çok da kısıtlamayın. Unutmayın ev sadece bir yatırım aracı değil aynı zamanda bir yuva.</p>

                                <p>Umarım bu rehber işinize yaramıştır. Sorularınız olursa yorumlarda bekliyorum. Görüşmek üzere!</p>
                            </section>

                            <section>
                                <p><strong>Editör:</strong> Deniz Yılmaz</p>
                                <p><strong>Yazar:</strong> Mehmet Kara</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Elif Şahin</p>
                                
                                <p>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page