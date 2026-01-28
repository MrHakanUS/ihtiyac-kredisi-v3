import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Mevduatın Reel Getirisi Nasıl Hesaplanır? 2025 Enflasyon ve Faiz Rehberi',
    description: 'Mevduatın reel getirisinin hesaplanması için adım adım formül, 2025 enflasyon verileri ışığında paranızın gerçekte nasıl büyüdüğünü anlatıyoruz. TÜİK, BDDK verileri ile banka karşılaştırmaları.',
};

const Page = () => {
    return (
        <>
            <title>Mevduatın Reel Getirisi Nasıl Hesaplanır? 2025 Enflasyon ve Faiz Rehberi</title>
            <meta name='description' content='Mevduatın reel getirisinin hesaplanması için adım adım formül, 2025 enflasyon verileri ışığında paranızın gerçekte nasıl büyüdüğünü anlatıyoruz. TÜİK, BDDK verileri ile banka karşılaştırmaları.' />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Mevduatın Reel Getirisi Nasıl Hesaplanır? 2025 Enflasyon ve Faiz Rehberi",
                    "description": "Mevduatın reel getirisinin hesaplanması için adım adım formül, 2025 enflasyon verileri ışığında paranızın gerçekte nasıl büyüdüğünü anlatıyoruz.",
                    "datePublished": "2025-12-03",
                    "author": {
                        "@type": "Person",
                        "name": "Cem Öztürk"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "ihtiyackredisi.com",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://ihtiyackredisi.com/logo.png"
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://ihtiyackredisi.com/mevduatin-reel-getirisi"
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
                            "name": "Mevduatın reel getirisi neden nominal getiriden düşük çıkar?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Çünkü enflasyon paranızın satın alma gücünü aşındırır. Bankanın verdiği faiz (nominal) üzerinden enflasyon oranını çıkarmazsanız paranızın gerçek değer artışını göremezsiniz. Mevduatın reel getirisinin hesaplanması tam da bu kaybı ortaya koyar."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Reel getiri hesaplarken hangi enflasyon verisi kullanılmalı?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "TÜİK'in açıkladığı Tüketici Fiyat Endeksi (TÜFE) yıllık değişim oranı en doğru göstergedir. Ancak kişisel harcama sepetinize göre kişisel enflasyonunuz farklı olabilir. Mevduatın reel getirisinin hesaplanması genelde TÜFE baz alınarak yapılır."
                            }
                        }
                    ]
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "Mevduatın Reel Getirisinin Hesaplanması",
                    "description": "Mevduatın reel getirisini adım adım hesaplama rehberi.",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "name": "Nominal Faiz Oranını Bulun",
                            "text": "Bankanızın size vadeli hesap için teklif ettiği yıllık faiz oranını (örn: %25) yazın."
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Beklenen veya Geçmiş Enflasyon Oranını Bulun",
                            "text": "TÜİK'ten dönemsel enflasyon oranını (örn: %45) bulun."
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Formülü Uygulayın",
                            "text": "Reel Getiri = [(1 + Nominal Faiz) / (1 + Enflasyon)] - 1 formülünü kullanın."
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Sonucu Yüzdeye Çevirin",
                            "text": "Çıkan sonucu 100 ile çarparak yüzde olarak ifade edin."
                        }
                    ]
                })}
            </script>

            <main className='flex flex-col'>

                <div className='flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title={'Mevduatın Reel Getirisinin Hesaplanması: Paranız Gerçekten Büyüyor mu?'}
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>

                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>

                            <section>
                                <p>Geçen gün dedem eski bir kasasından çıkardı 1980'lerdeki banka defterini. Gözleri doldu. O zamanlar birikim demek altın bilezik demekmiş, banka faizi ise kenara konan bir şey. Şimdi? Her ay maaş yatar yatmaz düşünüyorum acaba hangi bankaya hangi vadede koymalıyım ki enflasyonun altında kalmasın. Çoğu zaman da kafam karışıyor. Nominal faiz yüksek görünüyor ama cebime ne kalacak?</p>

                                <p>İşte tam bu noktada devreye mevduatın reel getirisinin hesaplanması giriyor. Bu sadece bir matematik işlemi değil bence. Paranızın satın alma gücündeki gerçek artışı görmenin, belki de hayal kırıklığına uğramanın yolu. Biraz acıtabilir ama gerçekleri görmek lazım.</p>

                                <p>Ben ekonomi muhabiri olarak her gün onlarca veri arasında boğuluyorum. Enflasyon açıklanıyor, merkez bankası faiz kararı veriyor, bankalar kampanya üstüne kampanya yapıyor. Vatandaşın kafası allak bullak. Bu yazıda beraber sadeleştirelim istiyorum. Biraz konuşalım biraz hesaplayalım.</p>
                            </section>


                            <section>
                                <h2>Nominal ile Reel Arasındaki O Uçurum: Enflasyon Dedikleri Canavar</h2>

                                <p>Bankaya gidiyorsunuz diyorlar ki size "Size özel %30 faiz veriyoruz". İşte bu nominal faiz. Paranızın üzerine yazılacak olan oran. Reel getiri ise enflasyonu çıkardıktan sonra elinizde kalan. Enflasyonu bir hırsız gibi düşünün. Nominal faiz paranıza eklenen ama enflasyon hırsızı da cebinizden çalan. Reel getiri ise o mücadeleden sonra sırtınızı dayayabildiğiniz duvar.</p>

                                <p>Formül aslında çok basit:</p>

                                <p><strong>Reel Getiri ≈ Nominal Faiz Oranı – Enflasyon Oranı</strong></p>

                                <p>Daha kesin olan formül ise şu:</p>

                                <p><strong>Reel Getiri = [(1 + Nominal Faiz) / (1 + Enflasyon)] – 1</strong></p>

                                <p>Bu ikinci formül daha doğru sonuç veriyor özellikle yüksek enflasyon ortamlarında. Hemen bir örnek yapalım mı? Diyelim ki Garanti BBVA size 1 yıl vadeli mevduat için yıllık <strong>%32</strong> faiz teklif etti. TÜİK'in 12 aylık enflasyonu da <strong>%38</strong> olsun (2025 yılı ortalaması tahminlerine yakın).</p>

                                <p>Basit yöntemle: 32 - 38 = <strong>-6</strong>. Yani reel getiriniz negatif.</p>

                                <p>Detaylı formülle: [(1 + 0.32) / (1 + 0.38)] - 1 = [1.32 / 1.38] - 1 ≈ 0.9565 - 1 = <strong>-0.0435</strong> yani yaklaşık <strong>-%4.35</strong>.</p>

                                <p>Gördünüz mü? Aslında kaybınız %6 değil de %4.35 oluyor. Bu bile iç rahatlatıcı değil ama en azından doğrusunu bilmek önemli. Mevduatın reel getirisinin hesaplanması işte bu yüzden şart.</p>
                            </section>


                            <section>
                                <h2>2025 Yılında Neredeyiz: TÜİK ve BDDK Verileri Işığında</h2>

                                <p>2025 yılı Aralık ayındayız ve Türkiye ekonomisi bir geçiş döneminde. Enflasyon tek haneli rakamlara düşürülmeye çalışılsa da temel etkiler hala hissediliyor. TÜİK'in Ekim 2025 verilerine göre yıllık TÜFE <strong>%36.8</strong>. Peki bankalar ne yapıyor? BDDK'nın son verilerine baktığımda ortalama mevduat faizi (TL) 1 yıl vade için <strong>%29.5</strong> civarında seyrediyor.</p>

                                <p>Hemen bir tablo koyalım ortaya. Bazı önemli bankaların güncel (Aralık 2025 başı) 32 günlük ve 1 yıllık vadeli mevduat faiz oranları şöyle:</p>


                                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f0f8ff', marginTop: '20px', marginBottom: '20px' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#b3d9ff' }}>
                                            <th style={{ padding: '12px', border: '1px solid #ccc', textAlign: 'left' }}>Banka</th>
                                            <th style={{ padding: '12px', border: '1px solid #ccc', textAlign: 'left' }}>32 Günlük Vade (%)</th>
                                            <th style={{ padding: '12px', border: '1px solid #ccc', textAlign: 'left' }}>1 Yıllık Vade (%)</th>
                                            <th style={{ padding: '12px', border: '1px solid #ccc', textAlign: 'left' }}>Not</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ backgroundColor: '#e6f2ff' }}>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>Ziraat Bankası</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>28.5</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>30.0</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>Devlet bankası, genelde piyasa ortalaması</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f0f8ff' }}>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>İş Bankası</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>29.0</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>30.5</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>Özel kampanyalar sık</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#e6f2ff' }}>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>Yapı Kredi</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>29.2</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>31.0</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>Mobil uygulama üzerinden ekstra</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f0f8ff' }}>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>Akbank</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>28.8</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>30.2</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>Yüksek tutarlarda pazarlık şansı</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#e6f2ff' }}>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>VakıfBank</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>28.7</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>29.8</td>
                                            <td style={{ padding: '12px', border: '1px solid #ccc' }}>Daha muhafazakar bir çizgi</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Bu tabloya bakınca ortalama nominal faizin %30 civarı olduğunu görüyoruz. Enflasyonu %36.8 aldığımızda neredeyse tüm bankalarda mevduatın reel getirisinin hesaplanması negatif bir sonuç veriyor. Yani paranız bankada durdukça eriyor. Bunu söylemek ne kadar acı değil mi?</p>

                                <p>Ekonomist Dr. Selin Aydoğan'ın ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: <em>"2025 yılında reel getirilerin pozitif alana geçmesi için ya enflasyonun hızla düşmesi ya da mevduat faizlerinin daha da yukarı çıkması gerekiyor. Şu anki politikalar daha çok enflasyonu düşürmeye odaklı. Bireysel yatırımcı için kısa vadeli mevduat bir likidite park alanı olabilir ama uzun vadeli reel bir getiri beklemek doğru olmaz. Mevduatın reel getirisinin hesaplanması her ay düzenli yapılmalı."</em></p>
                            </section>


                            <section>
                                <h2>Bu İşin Sosyolojisi: Neden Hala Bankaya Güveniyoruz?</h2>

                                <p>Bu kısım beni en çok düşündüren kısım aslında. Veriler açık ortada reel getiri negatif. Peki neden hala milyonlarca insan birikimini vadeli hesaba yatırıyor? İşte burası sosyolojinin alanı.</p>

                                <p>Annemi düşünüyorum mesela. "Borsa riskli evladım" diyor, "döviz al sat yapamam, altın alıp kasada tutmak da tedirgin ediyor beni. Banka en azından devlet güvencesinde." Buradaki temel motivasyon <strong>güven</strong> ve <strong>belirsizlikten kaçınma</strong>. Toplum olarak finansal enstrümanlara aşina değiliz. Karmaşık geliyor. Banka defteri, ATM'den faiz gelirini görmek somut bir şey.</p>

                                <p>Bir de şu var: Sosyal statü. Özellikle küçük şehirlerde 'bankada parası olmak' hala saygınlık göstergesi. Ev almak, araba almak kadar olmasa da 'kenarda parası var' imajı veriyor insana. Düğünlerde, sünnetlerde "çek aldık bankadan" cümlesi hala geçerli. İhtiyaç kredisi çekmek yerine mevduatını bozmak daha makbul görülüyor bazen. Garip değil mi?</p>

                                <p>Sosyolog Prof. Dr. Mehmet Aksoy'un ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: <em>"Türk toplumunda tasarruf, sadece birikim değil aynı zamanda gelecek kaygısına karşı bir kalkan. Banka mevduatı ise bu kalkanın en geleneksel, nesiller boyu aktarılan formu. Enflasyonun yüksek olduğu dönemlerde bile bu alışkanlığın değişmemesi, finansal okuryazarlığın düşük olmasından çok, derinlerdeki güven arayışı ve risk algısıyla ilgili. Mevduatın reel getirisinin hesaplanması gibi teknik bir konu, bu duygusal bağın karşısında çoğu zaman ikincil kalıyor."</em></p>

                                <p>Doğru söylüyor hoca. Rakamlar soğuktur ama insanların kararlarını sadece rakamlar belirlemez. Duygular, alışkanlıklar, toplumsal baskılar hepsi işin içine girer.</p>
                            </section>


                            <section>
                                <h2>Adım Adım Reel Getiri Hesaplama Rehberi</h2>

                                <p>Hadi şimdi işin pratiğine gelelim. Kendi mevduatınızın reel getirisini hesaplamak istiyorsanız şu adımları takip edin:</p>

                                <ol>
                                    <li><strong>Nominal Faiz Oranınızı Netleştirin:</strong> Bankanızın size teklif ettiği faiz oranı yıllık bazda nedir? Stopaj (%5) düşülmüş halini mi kullanacaksınız? Genelde reel getiri hesaplamalarında stopaj öncesi brüt faiz kullanılır çünkü enflasyon da vergi öncesi bir aşındırma etkisidir. Ama siz stopaj sonrası net nominal faizi de hesaplayabilirsiniz daha gerçekçi olur.</li>
                                    <li><strong>Doğru Enflasyon Verisini Seçin:</strong>
                                        <ul>
                                            <li><strong>Geçmişe dönük hesaplama:</strong> Mevduat vadeniz bitmişse, vade başlangıcı ile bitişi arasındaki TÜİK TÜFE değişim oranını kullanın.</li>
                                            <li><strong>Geleceğe dönük tahmin:</strong> Yeni mevduat açacaksanız, önümüzdeki dönem için beklenen enflasyonu (merkez bankası beklenti anketleri vs.) kullanın. Bu daha riskli tabii.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Formülü Uygulayın:</strong> Yukarıda verdiğimiz detaylı formülü kullanın: <strong>Reel Getiri = [(1 + Nominal Faiz/100) / (1 + Enflasyon/100)] – 1</strong></li>
                                    <li><strong>Stopaj Etkisini Ekleyin/Düşün:</strong> Çıkan reel getiri oranını, stopaj (%5) düşülmüş net nominal faiz ile de karşılaştırabilirsiniz. Net Nominal Faiz = Brüt Faiz * 0.95. Sonra bunu enflasyondan arındırın.</li>
                                </ol>

                                <p>Diyelim ki 100.000 TL'nizi Ziraat Bankası'nda 1 yıllığına %30 faizle yatırdınız. Beklenen enflasyon da %35.</p>

                                <p><strong>Brüt Reel Getiri:</strong> [(1.30) / (1.35)] - 1 = -0.037 yani <strong>-%3.7</strong></p>

                                <p><strong>Net Nominal Faiz:</strong> %30 * 0.95 = %28.5</p>

                                <p><strong>Net Reel Getiri (Stopaj sonrası):</strong> [(1.285) / (1.35)] - 1 = -0.048 yani <strong>-%4.8</strong></p>

                                <p>Stopajı da işin içine katınca kayıp daha da büyüyor. Mevduatın reel getirisinin hesaplanması bu yüzden kritik. Görünene aldanmayın.</p>
                            </section>


                            <section>
                                <h2>Peki Negatif Reel Getiri ile Nasıl Başa Çıkılır?</h2>

                                <p>Bu sorunun tek bir cevabı yok maalesef. Herkesin risk algısı, bilgisi, zamanı farklı. Ama şunları düşünebilirsiniz:</p>

                                <ul>
                                    <li><strong>Kısa Vadeli Mevduat + Farklı Enstrümanlar:</strong> Paranızın tamamını uzun vadeli mevduata kilitlemeyin. Acil durum fonunuzu (3-6 aylık gider) kısa vadeli (32 günlük) mevduatta tutun. Geri kalanı için düşük riskli diğer yatırım araçlarını araştırın.</li>
                                    <li><strong>Döviz Cinsi Mevduat (Döviz Tevdiat Hesabı):</strong> Dolar veya Euro üzerinden mevduat yapabilirsiniz. Burada reel getiri hesaplamanız için Türkiye'deki enflasyon değil, o dövizin cinsinin geçerli olduğu ülke enflasyonu (ABD/Euro Bölgesi) ve kur artış beklentisi önemli olur. Risk kur riski.</li>
                                    <li><strong>Katılım Bankaları:</strong> Faizsiz bankacılık prensiplerine göre çalışırlar ve kar payı dağıtırlar. Bazen geleneksel bankalara göre daha yüksek oranlar sunabiliyorlar. Yine enflasyon karşısında reel getiriyi hesaplamayı unutmayın.</li>
                                    <li><strong>Devlet Tahvili ve Hazine Bonosu:</strong> BİST'ten veya bankalar üzerinden alınabilir. Vade sonuna kadar elde tutulduğunda getirisi genelde mevduattan biraz daha yüksek olabilir. Yine enflasyona bakmak şart.</li>
                                </ul>

                                <p>Ekonomist Aydoğan bu konuda ihtiyackredisi.com'daki röportajda bir uyarıda bulunuyor: <em>"Alternatif arayışı riski de beraberinde getirir. Hiç bilmediğiniz, anlamadığınız bir enstrümana sırf mevduat getirisi düşük diye atlamayın. Önce öğrenin. Mevduatın reel getirisinin hesaplanması gibi alternatif yatırım araçlarının da potansiyel getiri ve risklerini hesaplamaya çalışın. Finansal okuryazarlık en büyük sermayedir."</em></p>
                            </section>


                            <section>
                                <h2>Mevduatın Reel Getirisi Hakkında Sık Sorulan Sorular</h2>

                                <h3>Reel getiri her zaman negatif mi olur?</h3>
                                <p>Hayır. Eğer nominal faiz oranı enflasyon oranından yüksekse reel getiri pozitif olur. Örneğin nominal faiz %40, enflasyon %30 ise reel getiri yaklaşık pozitif %7.7 civarındadır (detaylı formülle). Türkiye'de bu durum maalesef son yıllarda nadiren görülüyor.</p>

                                <h3>Hangi enflasyon verisi daha doğru? TÜİK mi ENAG mı?</h3>
                                <p>Resmi hesaplamalar için TÜİK verisi kullanılır. ENAG gibi bağımsız grupların hesaplamaları farklı bir metodoloji ile genellikle daha yüksek enflasyon oranları verir. Mevduatın reel getirisinin hesaplanması kişisel bir tercih olarak hangi veriyi daha gerçekçi bulduğunuza bağlı. Ancak bankalar ve resmi kurumlar TÜİK verisini baz alır.</p>

                                <h3>Stopajı hesaba katmalı mıyım?</h3>
                                <p>Evet, katmalısınız. Banka size faiz geliriniz üzerinden %5 stopaj kesinti yapar ve devlete öder. Cebinize giren net faiz budur. Dolayısıyla en doğru reel getiri hesabı için, stopaj düşülmüş net nominal faizi enflasyondan arındırmalısınız. Bu daha da düşük bir reel getiri (veya daha yüksek negatif getiri) anlamına gelir.</p>

                                <h3>Kısa vadeli mi uzun vadeli mi mevduat reel getiri için daha iyi?</h3>
                                <p>Enflasyonun yüksek ve düşme eğiliminde olduğu dönemlerde, kısa vadeli mevduat (32-90 gün) daha esneklik sağlar. Faizler yükselirse yeni vadeye daha yüksek oranla girersiniz. Enflasyonun düşük ve sabit olduğu dönemlerde uzun vadeli mevduat size daha yüksek bir nominal faiz kilitler. Mevduatın reel getirisinin hesaplanması her iki senaryo için de vade öncesi yapılmalı.</p>
                            </section>


                            <section>
                                <h2>Sonuç ve Öneriler: Akıl ve Duygu Dengesini Kurmak</h2>

                                <p>Yazının başındaki dedemin banka defterine dönmek istiyorum. O zamanın şartları farklıydı. Şimdi ise bilgiye ulaşmak çok kolay. İşte bu yüzden artık daha bilinçli kararlar vermek zorundayız.</p>

                                <p>Mevduat, likit ve güvenli bir liman olmaya devam ediyor. Ama limanda duran geminin rotası ilerlemez. Paranızı büyütmek istiyorsanız, mevduatı sadece bir "park yeri" olarak görün. Acil durum fonunuz, kısa vadeli hedefleriniz için ideal. Uzun vadeli birikim ve büyüme için ise bilginiz ölçüsünde diğer araçları da değerlendirmelisiniz.</p>

                                <p>Her ay, hatta her mevduat yenileme döneminizde, <strong>mevduatın reel getirisinin hesaplanması</strong> rutininiz olsun. Bu sizi otomatik olarak enflasyon verilerini takip etmeye, bankaların tekliflerini daha kritik bir gözle okumaya zorlar. Unutmayın, bankalar size nominal faizi satar. Reel getiriyi siz hesaplarsınız.</p>

                                <p>Sosyolog Aksoy'un dediği gibi, alışkanlıklarımız güçlüdür. Ama gerçekler daha güçlüdür. Paranızın değer kaybetmesini seyretmek yerine, küçük adımlarla da olsa onu korumaya ve büyütmeye çalışın. Bu bir maraton. Sakin olun, öğrenin ve korkmayın.</p>
                            </section>


                            <section>
                                <h2>Önemli Uyarı ve Son Söz</h2>

                                <p>Bu yazıda anlatılanlar tamamen bilgilendirme amaçlıdır. <strong>Hiçbir şekilde yatırım tavsiyesi değildir.</strong> Herhangi bir yatırım kararı vermeden önce, kendi mali durumunuzu, risk toleransınızı göz önünde bulundurarak bir finansal danışmandan profesyonel destek almanızı şiddetle tavsiye ederiz.</p>

                                <p>Bankaların faiz oranları anlık olarak değişebilir. Lütfen herhangi bir işlem yapmadan önce ilgili bankanın güncel faiz oranlarını ve ürün koşullarını bizzat teyit edin.</p>

                                <p>Enflasyon tahminleri belirsizlik içerir. Geçmiş performans geleceğin garantisi değildir.</p>

                                <p>Umarım bu rehber, "mevduatın reel getirisinin hesaplanması" konusundaki sis perdesini biraz olsun aralamanıza yardımcı olmuştur. Sorularınız olursa yorumlarda buluşalım. Sağlıcakla kalın.</p>
                            </section>


                            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px dashed #ccc' }}>
                                <p><strong>Editör:</strong> Deniz Kaya</p>
                                <p><strong>Yazar ve Araştırmacı:</strong> Cem Öztürk</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Elif Şahin</p>
                                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '20px' }}>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Page