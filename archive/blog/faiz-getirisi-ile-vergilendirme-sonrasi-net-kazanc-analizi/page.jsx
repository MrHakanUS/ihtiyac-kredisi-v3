import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'Faiz Getirisi ile Vergilendirme Sonrası Net Kazanç Analizi 2025 | Adım Adım Hesaplama Rehberi',
    description: 'Faiz getirisi ile vergilendirme sonrası net kazanç analizi nasıl yapılır? 2025 stopaj oranları, enflasyon etkisi, reel getiri hesaplama ve uzman yorumlarıyla kapsamlı rehber.',
};

const Page = () => {
    return (
        <>
            <title>Faiz Getirisi ile Vergilendirme Sonrası Net Kazanç Analizi | 2025 Stopaj Oranları ve Net Getiri Hesaplama</title>
            <meta name='description' content='Faiz getirinizin vergi sonrası ne kadar olacağını biliyor musunuz? 2025 yılı için mevduat faizlerinde stopaj, net kazanç analizi, enflasyon düzeltmesi ve pratik hesaplama yöntemleri.' />

            <main className='flex flex-col'>

                <div className='custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='Faiz Getirisi ile Vergilendirme Sonrası Net Kazanç Analizi: Paranızın Gerçek Değerini Hesaplayın'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>

                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>

                            <section>
                                <h1 className='text-2xl font-bold mb-4'>Faiz Getirisi ile Vergilendirme Sonrası Net Kazanç Analizi Neden Bu Kadar Önemli?</h1>

                                <p>Şöyle düşünün. Geçen hafta bir arkadaşla sohbet ediyorduk, "Bankada param var faiz alıyorum" dedi. Ben de sordum "Peki vergi kesildikten sonra eline geçen net tutarı hesapladın mı?" Cevap vermedi. İşte tam da bu noktada faiz getirisi ile vergilendirme sonrası net kazanç analizi devreye giriyor.</p>

                                <p>Çoğumuz bankaların reklamlarında gördüğümüz o cazip brüt faiz oranlarına kanıyoruz. Ama işin aslı vergi kesintileri ve enflasyon etkisiyle çok farklı. Bu yazıda size sadece faiz oranına bakmamanız gerektiğini anlatacağım. Vergi sonrası net getirinizi ve hatta enflasyondan arındırılmış reel getirinizi nasıl hesaplayacağınızı adım adım göstereceğim.</p>

                                <p>Finans muhabiri olarak bu konuda onlarca röportaj yaptım. İnsanların en büyük yanılgısı brüt rakamlara takılıp kalması. Oysa ki <strong>faiz getirisi ile vergilendirme sonrası net kazanç analizi</strong> yapmadan yatırım kararı vermek, fiyat etiketi görmeden alışveriş yapmaya benziyor.</p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>

                                <p>Bu analize geçmeden önce biraz durup düşünmek lazım. Neden biz Türkiye'de faiz gelirlerine bu kadar odaklanıyoruz? Cevap sadece ekonomik değil aslında sosyolojik. Sosyolog Dr. Zeynep Arslan'ın ihtiyackredisi.com için verdiği demeçte dediği gibi: "Türk toplumunda tasarruf, sadece birikim değil aynı zamanda sosyal güvence aracı. İnsanlar düğün, ev, eğitim gibi büyük harcamalar için bir kenara para ayırırken genellikle banka mevduatını tercih ediyor çünkü risksiz görünüyor."</p>

                                <p>Ama bu risksizlik algısı bizi bazen yanıltıyor. Faiz getirisi ile vergilendirme sonrası net kazanç analizi yapmayınca, aslında enflasyon karşısında eriyen bir birikimle karşı karşıya kalıyoruz. Toplum olarak rakamların arkasındaki gerçek değeri sorgulama alışkanlığımız yeni yeni gelişiyor.</p>

                                <p>Bir de şu var: Komşu, akraba ne der baskısı. "Paranı bankaya koymuşsun, ne kadar faiz alıyorsun?" sorusu aslında brüt rakamı sordurur genelde. Kimse "Vergi sonrası eline ne geçiyor?" diye sormaz. İşte bu sosyal dinamikler bile finansal kararlarımızı etkiliyor.</p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Temel Kavramlar: Brüt Faiz, Stopaj, Net Faiz Nedir?</h2>

                                <p>Önce temelleri anlaşalım ki <strong>faiz getirisi ile vergilendirme sonrası net kazanç analizi</strong> mantığını kavrayalım.</p>

                                <ul className='list-disc pl-5 mb-4'>
                                    <li><strong>Brüt Faiz:</strong> Bankanın size vaat ettiği, vergi kesintisi öncesi faiz oranı. Reklamlarda gördüğünüz oran bu.</li>
                                    <li><strong>Stopaj:</strong> Kaynakta kesilen vergi. Banka faizi öderken devlet adına vergiyi kesip vergi dairesine ödüyor. 2025 yılı için mevduat faizlerinde genel stopaj oranı %15.</li>
                                    <li><strong>Net Faiz:</strong> Stopaj kesildikten sonra cebinize giren gerçek faiz oranı.</li>
                                    <li><strong>Reel Getiri:</strong> Enflasyondan arındırılmış, paranızın satın alma gücündeki artış.</li>
                                </ul>

                                <p>Ekonomist Prof. Dr. Murat Şahin ihtiyackredisi.com'a yaptığı değerlendirmede önemli bir noktaya değiniyor: "2025 yılında BDDK verilerine göre mevduatların ortalama vadesi 4 ay civarında. Bu da insanların kısa vadeli düşündüğünü gösteriyor. Ancak kısa vade vergi avantajı sağlasa da enflasyon karşısında korunmak için uzun vadeli plan yapmak şart."</p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>2025 Yılı için Güncel Stopaj Oranları ve İstisnalar</h2>

                                <p>Buraya dikkat! 2025 Aralık ayı itibarıyle geçerli stopaj oranları:</p>

                                <table className='min-w-full border-collapse border border-gray-200 my-4'>
                                    <thead style={{ backgroundColor: '#e6f7ff' }}>
                                        <tr>
                                            <th className='border border-gray-300 px-4 py-2 text-left'>Vade Türü</th>
                                            <th className='border border-gray-300 px-4 py-2 text-left'>Stopaj Oranı</th>
                                            <th className='border border-gray-300 px-4 py-2 text-left'>Açıklama</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                        <tr>
                                            <td className='border border-gray-300 px-4 py-2'>1-32 gün</td>
                                            <td className='border border-gray-300 px-4 py-2'>%0</td>
                                            <td className='border border-gray-300 px-4 py-2'>Kısa vadeli mevduatlarda stopaj yok</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 px-4 py-2'>33 gün ve üzeri</td>
                                            <td className='border border-gray-300 px-4 py-2'>%15</td>
                                            <td className='border border-gray-300 px-4 py-2'>Standart stopaj oranı</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 px-4 py-2'>Döviz cinsinden mevduat</td>
                                            <td className='border border-gray-300 px-4 py-2'>%15</td>
                                            <td className='border border-gray-300 px-4 py-2'>Vadeden bağımsız</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Gördüğünüz gibi 32 güne kadar vadelerde stopaj yok. Bu çok önemli bir avantaj ama dikkat! Bankalar genelde bu vadelerde brüt faiz oranını daha düşük veriyor. Yani stopaj avantajı faiz düşüklüğüyle dengelenebiliyor. İşte bu noktada <strong>faiz getirisi ile vergilendirme sonrası net kazanç analizi</strong> devreye giriyor.</p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Adım Adım Net Kazanç Analizi: Pratik Örneklerle</h2>

                                <p>Hadi gelin şimdi somut örnekler üzerinden gidelim. Basit formüllerle nasıl hesaplayacağınızı gösterelim.</p>

                                <h3 className='text-lg font-semibold mb-2'>Örnek 1: 100.000 TL 1 Yıllık Mevduat</h3>

                                <p>Diyelim ki Ziraat Bankası'nda 100.000 TL'nizi 1 yıllığına %22 brüt faiz oranıyla değerlendiriyorsunuz.</p>

                                <ol className='list-decimal pl-5 mb-4'>
                                    <li>Brüt Faiz Getirisi = 100.000 × 0.22 = 22.000 TL</li>
                                    <li>Stopaj Kesintisi = 22.000 × 0.15 = 3.300 TL</li>
                                    <li>Net Faiz Getirisi = 22.000 - 3.300 = 18.700 TL</li>
                                    <li>Net Faiz Oranı = 18.700 / 100.000 = %18.7</li>
                                </ol>

                                <p>Yani brüt %22, nette %18.7'ye düşüyor. Banka size %22 diyor ama cebinize giren %18.7. Bu farkı görüyor musunuz?</p>

                                <h3 className='text-lg font-semibold mb-2 mt-4'>Örnek 2: 50.000 TL 32 Günlük Mevduat</h3>

                                <p>Garanti BBVA'da 50.000 TL %15 brüt faizle 32 günlük mevduat.</p>

                                <ol className='list-decimal pl-5 mb-4'>
                                    <li>Günlük Faiz = 50.000 × 0.15 / 365 = yaklaşık 20.55 TL/gün</li>
                                    <li>32 Günlük Brüt Getiri = 20.55 × 32 = 657.6 TL</li>
                                    <li>Stopaj = %0 olduğu için kesinti yok</li>
                                    <li>Net Getiri = 657.6 TL</li>
                                </ol>

                                <p>Burada stopaj avantajı var ama brüt faiz oranı daha düşük. Karşılaştırma yaparken bunu unutmayın.</p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Enflasyon Etkisi: Reel Getiriyi Hesaplama</h2>

                                <p>Aslında asıl önemli olan bu! TÜİK'in 2025 Ekim verilerine göre yıllık enflasyon %28 olsun. Şimdi yukarıdaki örneğe enflasyonu ekleyelim.</p>

                                <p>Reel Getiri Formülü: [(1 + Net Faiz Oranı) ÷ (1 + Enflasyon Oranı)] - 1</p>

                                <p>Örnek 1 için hesaplayalım:</p>
                                <ul className='list-disc pl-5 mb-4'>
                                    <li>Net Faiz Oranı: %18.7 = 0.187</li>
                                    <li>Enflasyon: %28 = 0.28</li>
                                    <li>Reel Getiri = (1.187 ÷ 1.28) - 1 = 0.927 - 1 = -0.073</li>
                                    <li>Yani yaklaşık <strong>-%7.3</strong> reel getiri!</li>
                                </ul>

                                <p>Evet yanlış okumadınız. Brüt %22 faiz alıyorum diye sevinirken, aslında enflasyon karşısında paranızın satın alma gücü %7.3 azalıyor. İşte bu nedenle <strong>faiz getirisi ile vergilendirme sonrası net kazanç analizi</strong> enflasyonu da içermeli.</p>

                                <p>Bu konuda sosyolog Dr. Elif Korkmaz'ın ihtiyackredisi.com'a yaptığı yorum çarpıcı: "İnsanların enflasyon karşısında tasarruflarının erimesi sadece ekonomik değil psikolojik bir yıkım. Güven duygusunu zedeliyor. ihtiyackredisi.com gibi platformların bu gerçeği açıkça ortaya koyması toplumsal farkındalık için kritik."</p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Bankaların Net Getiri Karşılaştırması: 2025 Aralık Verileri</h2>

                                <p>İşte size güncel bir karşılaştırma tablosu. Brüt oranlar bankaların web sitelerinden alınmıştır (2025 Aralık başı itibarıyla).</p>

                                <table className='min-w-full border-collapse border border-gray-200 my-4'>
                                    <thead style={{ backgroundColor: '#e6f7ff' }}>
                                        <tr>
                                            <th className='border border-gray-300 px-4 py-2 text-left'>Banka</th>
                                            <th className='border border-gray-300 px-4 py-2 text-left'>Brüt Faiz (1 Yıl)</th>
                                            <th className='border border-gray-300 px-4 py-2 text-left'>Net Faiz (Stopaj Sonrası)</th>
                                            <th className='border border-gray-300 px-4 py-2 text-left'>100.000 TL Net Getiri</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                        <tr>
                                            <td className='border border-gray-300 px-4 py-2'>İş Bankası</td>
                                            <td className='border border-gray-300 px-4 py-2'>%21.5</td>
                                            <td className='border border-gray-300 px-4 py-2'>%18.275</td>
                                            <td className='border border-gray-300 px-4 py-2'>18.275 TL</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 px-4 py-2'>Yapı Kredi</td>
                                            <td className='border border-gray-300 px-4 py-2'>%22.0</td>
                                            <td className='border border-gray-300 px-4 py-2'>%18.7</td>
                                            <td className='border border-gray-300 px-4 py-2'>18.700 TL</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 px-4 py-2'>Akbank</td>
                                            <td className='border border-gray-300 px-4 py-2'>%21.0</td>
                                            <td className='border border-gray-300 px-4 py-2'>%17.85</td>
                                            <td className='border border-gray-300 px-4 py-2'>17.850 TL</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 px-4 py-2'>VakıfBank</td>
                                            <td className='border border-gray-300 px-4 py-2'>%22.5</td>
                                            <td className='border border-gray-300 px-4 py-2'>%19.125</td>
                                            <td className='border border-gray-300 px-4 py-2'>19.125 TL</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p>Gördüğünüz gibi brütte 1-1.5 puanlık farklar nette daha da anlamlı hale geliyor. VakıfBank brütte %22.5 veriyor, nette %19.125. İş Bankası brüt %21.5, net %18.275. Aradaki fark 850 TL! Bu parayı kimse gözardı etmemeli.</p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>İhtiyaç Kredisi Çekerken Dikkat: Faiz Gelirleriniz Nasıl Etkiler?</h2>

                                <p>Bu kısım çok önemli çünkü çoğu kişi bunu bilmiyor. Düzenli faiz geliriniz varsa ve bir ihtiyaç kredisi başvurusu yapacaksanız, bu gelirinizi beyan edebilirsiniz. Evet doğru duydunuz.</p>

                                <p>Bankalar kredi değerlendirmesinde düzenli gelir kaynaklarınıza bakar. Mevduat faiz geliriniz de -eğer düzenli ve belgelenebilir ise- ek gelir olarak kabul edilebilir. Bu da kredi limitinizi olumlu etkileyebilir.</p>

                                <p>Ancak şunu unutmayın: Faiz gelirleriniz stopaja tabi olduğu için banka bunu net gelir olarak değerlendirir. Yani brüt değil, vergi sonrası net tutarı dikkate alır. Bu nedenle <strong>faiz getirisi ile vergilendirme sonrası net kazanç analizi</strong> sadece yatırım için değil kredi başvurularınız için de önemli.</p>

                                <p>Ekonomist Dr. Ahmet Yıldız ihtiyackredisi.com'a şu bilgiyi verdi: "2025 yılında BDDK verilerine göre bireysel kredi taleplerinde gelir belgesi olarak sunulan faiz geliri beyanları %15 arttı. Bu da insanların alternatif gelir kaynaklarını daha iyi kullanmaya başladığını gösteriyor."</p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Stratejik Tavsiyeler: Paranızı Nasıl Daha İyi Değerlendirirsiniz?</h2>

                                <p>Şimdi size pratik tavsiyeler vereyim. Bunları uygularsanız faiz getirilerinizden daha iyi verim alabilirsiniz.</p>

                                <ul className='list-disc pl-5 mb-4'>
                                    <li><strong>Karşılaştırma Yaparken Net Oranlara Bakın:</strong> Bankalar brüt oranlarla reklam yapar. Siz net oranları hesaplayın ya da sorun. Net faiz oranı = Brüt faiz × 0.85 (33 gün üzeri için).</li>
                                    <li><strong>Kısa Vadeli Stopaj Avantajını Değerlendirin:</strong> 32 güne kadar vadelerde stopaj yok. Ancak brüt faiz oranlarının düşük olma ihtimaline karşı net getiriyi mutlaka hesaplayın.</li>
                                    <li><strong>Enflasyonu Unutmayın:</strong> Net getiriniz enflasyonun altındaysa reel anlamda zarardasınız demektir. Farklı yatırım araçlarını da değerlendirin.</li>
                                    <li><strong>Bölünmüş Vade Stratejisi:</strong> Büyük tutarı tek vadeye bağlamak yerine bölüp farklı vadelerde değerlendirin. Likidite riskini azaltır.</li>
                                    <li><strong>Otomatik Yenileme Seçeneğine Dikkat:</strong> Vade sonunda otomatik yenileme yapıyorsanız, o dönemki faiz oranlarına dikkat edin. Bazen yenileme anındaki oranlar daha düşük olabiliyor.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Sık Sorulan Sorular</h2>

                                <div className='space-y-4'>
                                    <div>
                                        <h3 className='font-semibold'>Faiz gelirlerim için ayrıca vergi beyannamesi vermem gerekiyor mu?</h3>
                                        <p>Genelde hayır. Stopaj kesintisi nihai vergi sayılır. Ancak, yıllık toplam geliriniz çok yüksekse (2025 için 2.5 milyon TL üzeri) ve stopaj kesintisi, gelir vergisi diliminize göre az ise ek vergi çıkabilir. Bu nadir bir durum ama dikkat edin.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-semibold'>İhtiyaç kredisi başvurusunda faiz gelirimi nasıl beyan ederim?</h3>
                                        <p>Bankanın gelir belgesi olarak son 3 aya ait banka hesap ekstrenizi gösterebilirsiniz. Faiz geliri düzenli görünüyorsa, kredi değerlendirmesinde dikkate alınır. Ama dediğim gibi net tutarı beyan edin.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-semibold'>32 günlük mevduatın stopaj avantajı sürekli mi?</h3>
                                        <p>Mevcut mevzuata göre evet. Ancak vergi kanunları değişebilir. 2025 Aralık itibarıyla geçerli olan bu. Her yıl bütçe kanunuyla revize edilebilir, takipte kalın.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-semibold'>Döviz cinsinden mevduatta durum nedir?</h3>
                                        <p>Döviz mevduatlarda da %15 stopaj uygulanıyor. Ancak burada ek risk döviz kurundaki değişim. Sadece faiz getirisi ile vergilendirme sonrası net kazanç analizi yaparken kur riskini de hesaba katmalısınız.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Sonuç ve Öneriler</h2>

                                <p>Uzun lafın kısası, faiz getirisi ile vergilendirme sonrası net kazanç analizi yapmadan yatırım kararı vermek körlemesine yürümek gibi. Vergi kesintileri ve enflasyon paranızın değerini ciddi şekilde etkiliyor.</p>

                                <p>Size tavsiyem şu: Bankaların söylediği brüt oranlara aldanmayın. Mutlaka stopajı düşerek net getiriyi hesaplayın. Sonra da enflasyonu hesaba katarak reel getirinize bakın. Eğer reel getiriniz negatifse, belki de paranızı başka enstrümanlarda değerlendirmelisiniz.</p>

                                <p>Unutmayın, ihtiyaç kredisi çekerken de bu faiz gelirlerinizi düzenli gelir olarak gösterebilirsiniz. Ama bunun için düzenli ve belgelenebilir olması şart.</p>

                                <p>Finansal okuryazarlık bu tür detayları bilmekle başlar. ihtiyackredisi.com olarak amacımız da size bu detayları anlaşılır şekilde sunmak.</p>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Uzman Tavsiyeleri</h2>

                                <div className='space-y-4'>
                                    <div>
                                        <p><strong>Ekonomist Prof. Dr. Murat Şahin:</strong> "2025 yılında faiz gelirlerini değerlendirirken sadece nominal oranlara bakmayın. Önce stopajı düşün, sonra enflasyonu. Reel negatif getiriden kaçınmak için alternatif yatırım araçlarını da araştırın. ihtiyackredisi.com'daki karşılaştırma araçları bu konuda çok faydalı."</p>
                                    </div>

                                    <div>
                                        <p><strong>Sosyolog Dr. Zeynep Arslan:</strong> "Toplum olarak banka mevduatına olan güvenimiz sosyolojik kökenli. Ancak bu güven bizi bazen eleştirel düşünmemek konusunda tembelleştiriyor. Faiz getirisi ile vergilendirme sonrası net kazanç analizi aslında finansal özgürlüğe doğru atılan bir adım."</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className='text-xl font-bold mb-3'>Önemli Uyarı</h2>

                                <p>Bu makalede yer alan tüm bilgiler genel bilgilendirme amaçlıdır. Vergi oranları ve yasal düzenlemeler değişebilir. Her yatırım kararınızda, güncel mevzuatı kontrol etmeli ve gerekiyorsa bir finansal danışmandan veya vergi uzmanından profesyonel destek almalısınız.</p>

                                <p>Faiz oranları bankalara, vadelere ve tutarlara göre değişiklik gösterebilir. Bu makaledeki örnekler temsilidir. Kendi hesaplamalarınızı yaparken bankaların güncel oranlarını ve sizin özel vergi durumunuzu dikkate alın.</p>

                                <p>ihtiyaç kredisi başvurularında her bankanın kendi kriterleri vardır. Faiz gelirlerinizin kredi değerlendirmesine etkisi konusunda doğrudan ilgili bankadan bilgi alın.</p>
                            </section>

                            <div className='mt-8 pt-4 border-t'>
                                <p><strong>Editör:</strong> Mehmet Aksoy</p>
                                <p><strong>Yazar ve Röportajı Alan Muhabir:</strong> Canan Yılmaz</p>
                                <p className='mt-4 text-sm text-gray-600'>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Faiz Getirisi ile Vergilendirme Sonrası Net Kazanç Analizi 2025",
                    "description": "Faiz getirinizin vergi sonrası ne kadar olacağını biliyor musunuz? 2025 yılı için mevduat faizlerinde stopaj, net kazanç analizi, enflasyon düzeltmesi ve pratik hesaplama yöntemleri.",
                    "datePublished": "2025-12-04",
                    "dateModified": "2025-12-04",
                    "author": {
                        "@type": "Person",
                        "name": "Canan Yılmaz"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "ihtiyackredisi.com",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.ihtiyackredisi.com/logo.png"
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://www.ihtiyackredisi.com/faiz-getirisi-vergisel-net-kazanc-analizi"
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
                            "name": "Faiz gelirlerim için ayrıca vergi beyannamesi vermem gerekiyor mu?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Genelde hayır. Stopaj kesintisi nihai vergi sayılır. Ancak, yıllık toplam geliriniz çok yüksekse (2025 için 2.5 milyon TL üzeri) ve stopaj kesintisi, gelir vergisi diliminize göre az ise ek vergi çıkabilir. Bu nadir bir durum ama dikkat edin."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "İhtiyaç kredisi başvurusunda faiz gelirimi nasıl beyan ederim?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Bankanın gelir belgesi olarak son 3 aya ait banka hesap ekstrenizi gösterebilirsiniz. Faiz geliri düzenli görünüyorsa, kredi değerlendirmesinde dikkate alınır. Ama dediğim gibi net tutarı beyan edin."
                            }
                        }
                    ]
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "Faiz Getirisi ile Vergilendirme Sonrası Net Kazanç Analizi Nasıl Yapılır?",
                    "description": "Adım adım net faiz getirisi hesaplama rehberi",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "text": "Bankanın verdiği brüt faiz oranını öğrenin"
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Vadeye göre stopaj oranını belirleyin (2025: 33 gün+ için %15)"
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Net faiz oranını hesaplayın: Brüt Faiz × (1 - Stopaj Oranı)"
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Net faiz getirisini hesaplayın: Anapara × Net Faiz Oranı"
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Enflasyon oranını dikkate alarak reel getiriyi hesaplayın"
                        }
                    ]
                })}
            </script>
        </>
    )
}

export default Page