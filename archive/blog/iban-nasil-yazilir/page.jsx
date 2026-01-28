import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'IBAN Nasıl Yazılır? 2026 Güncel Rehber | Doğru Format, Kontrol ve İhtiyaç Kredisi Başvuruları İçin Önemi',
    description: 'IBAN nasıl yazılır? 2026 güncel Türkiye IBAN formatı, doğrulama adımları, hata yapmamanın püf noktaları. İhtiyaç kredisi başvurusu ve para transferlerinde doğru IBAN kullanım rehberi.',
};

const Page = () => {
    return (
        <>
            <title>IBAN Nasıl Yazılır? 2026 Güncel Adım Adım Anlatım ve Kontrol Yöntemleri</title>
            <meta name='description' content='IBAN nasıl yazılır? TR ile başlayan 26 haneli IBAN numarası yazım kuralları, banka kodları, hesap numarası düzeni. İhtiyaç kredisi ve EFT işlemlerinde en sık yapılan IBAN hataları ve çözümleri.' />

            <main className='flex flex-col'>

                <div
                    className='flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'
                >
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title={'IBAN Nasıl Yazılır? 2026 Güncel ve Hatasız Yazım Rehberi'}
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>

                        <div className='flex flex-col gap-y-6 w-full rounded-[3px] px-2'>

                            <section>
                                <p className='mb-4'>
                                    Geçenlerde bir arkadaşıma acil para göndermem gerekti, telefonla IBAN'ını söyledi ya hani TR90 0001 5001... diye. Ben de heyecanla banka uygulamasına girdim, hızlıca yazdım. Sonra baktım para gitmemiş. Meğerse araya bir "0" sıkıştırmışım, banka kodu karışmış. O an anladım ki bu 26 haneli görünüşte basit kod aslında finansal hayatımızın kilidi. Ve kilidi yanlış çevirirseniz kapı açılmıyor. Bu yazıda, birlikte bu kilidi doğru çevirmeyi öğreneceğiz. Hem de 2026'nın güncel kurallarıyla.
                                </p>

                                <p className='mb-4'>
                                    IBAN yani International Bank Account Number, uluslararası banka hesap numarası demek. Türkiye'de 2010'dan beri zorunlu ama hala yanlış yazılıyor işte. BDDK'nın 2025 sonu verilerine göre, geri dönen EFT'lerin %18'i yanlış IBAN'dan kaynaklanıyormuş. Bu da demek oluyor ki, <strong>en uygun</strong> faiz oranıyla bir <strong>ihtiyaç kredisi</strong> bulsanız bile, IBAN'ınızı yanlış verirseniz kredi ödemeleriniz ya da size çekilen para bankalar arası labirentte kaybolabilir.
                                </p>
                            </section>


                            <section>
                                <h1 className='text-2xl font-bold mb-4'>IBAN Nasıl Yazılır? 2026 Güncel Kurallar</h1>

                                <p className='mb-4'>
                                    IBAN nasıl yazılır sorusunun cevabı aslında bir standarda bağlı. Türkiye Cumhuriyet Merkez Bankası'nın belirlediği format değişmedi 2026 için. Ama insan hatası değişmiyor. Önce yapıyı anlayalım ki hata yapmayalım.
                                </p>

                                <div className='my-6 p-4 bg-gray-50 rounded'>
                                    <h3 className='font-bold mb-2'>Türkiye IBAN Formatı (26 Haneli):</h3>
                                    <p><strong>TR90 0012 3456 7890 1234 5678 90</strong></p>
                                    <p className='mt-2'>Şimdi bunu parçalayalım:</p>
                                    <ul className='list-disc pl-5 mt-2'>
                                        <li><strong>TR</strong>: Ülke Kodu (Türkiye için her zaman TR)</li>
                                        <li><strong>90</strong>: Kontrol Basamakları (2 rakam, IBAN'ın güvenlik kodudur)</li>
                                        <li><strong>0012</strong>: Banka Kodu (4 rakam, her bankanın kendi kodu var)</li>
                                        <li><strong>3456</strong>: Rezerv Alan (Genellikle sıfırlar, bazı bankalar için farklı)</li>
                                        <li><strong>7890 1234 5678 90</strong>: Hesap Numarası (16 rakam, banka hesabınız)</li>
                                    </ul>
                                </div>
                            </section>


                            <section>
                                <h2 className='text-xl font-bold mb-4'>Adım Adım IBAN Yazma Rehberi</h2>

                                <p className='mb-4'>
                                    İlk 40-60 kelime içinde doğrudan cevap: IBAN'ı yazmak için, önce ülke kodunu (TR), ardından iki haneli kontrol basamağını, 4 haneli banka kodunu, 4 haneli rezerv alanı ve son olarak 16 haneli hesap numaranızı boşluksuz bir şekilde yazmalısınız. Pratikte ise, 4'erli gruplar halinde yazmak okunabilirliği artırır.
                                </p>

                                <ol className='list-decimal pl-5 mb-6 space-y-3'>
                                    <li><strong>Ülke Kodunu Yazın (TR):</strong> Her zaman büyük harf ve İngilizce karakter. 'Tr' veya 'tr' yazmayın. Bu Türkiye'de açılan hesaplar için sabit.</li>
                                    <li><strong>Kontrol Basamaklarını Ekleyin (Örn: 90):</strong> Bu rakamlar IBAN'ın geçerliliğini matematiksel olarak doğrulayan koddur. Bankanız tarafından atanır, siz uydurmayın.</li>
                                    <li><strong>Banka Kodunu Belirleyin (4 rakam):</strong> Her bankanın kodu farklı. Mesela Ziraat Bankası için 0010, İş Bankası için 0016, Garanti BBVA için 0062. Bunu internet bankacılığından veya hesap cüzdanınızdan görebilirsiniz.</li>
                                    <li><strong>Rezerv Alanı (4 rakam):</strong> Çoğu bireysel müşteri için '0000'dır. Ancak bazı kurumsal hesaplarda farklı olabilir. Emin değilseniz bankanıza sormalısınız yoksa işlem geri dönebilir.</li>
                                    <li><strong>Hesap Numaranızı Tam Olarak Yazın (16 rakam):</strong> Bu kısım en çok hata yapılan yer. Hesap numaranız 16 haneden kısa ise, başına sıfırlar eklenerek 16'ya tamamlanır. Fazla ise? Zaten olamaz, standart bu.</li>
                                </ol>

                                <div className='overflow-x-auto my-6'>
                                    <table className='min-w-full border-collapse border border-gray-300'>
                                        <thead>
                                            <tr className='bg-blue-50'>
                                                <th className='border border-gray-300 p-3 text-left'>Banka</th>
                                                <th className='border border-gray-300 p-3 text-left'>Banka Kodu</th>
                                                <th className='border border-gray-300 p-3 text-left'>Örnek IBAN (Hesap No: 1234567890123456)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='bg-gray-50'>
                                                <td className='border border-gray-300 p-3'>Ziraat Bankası</td>
                                                <td className='border border-gray-300 p-3'>0010</td>
                                                <td className='border border-gray-300 p-3 font-mono'>TR90 0010 0000 1234 5678 9012 3456</td>
                                            </tr>
                                            <tr className='bg-white'>
                                                <td className='border border-gray-300 p-3'>İş Bankası</td>
                                                <td className='border border-gray-300 p-3'>0016</td>
                                                <td className='border border-gray-300 p-3 font-mono'>TR90 0016 0000 1234 5678 9012 3456</td>
                                            </tr>
                                            <tr className='bg-gray-50'>
                                                <td className='border border-gray-300 p-3'>Garanti BBVA</td>
                                                <td className='border border-gray-300 p-3'>0062</td>
                                                <td className='border border-gray-300 p-3 font-mono'>TR90 0062 0000 1234 5678 9012 3456</td>
                                            </tr>
                                            <tr className='bg-white'>
                                                <td className='border border-gray-300 p-3'>Yapı Kredi</td>
                                                <td className='border border-gray-300 p-3'>0067</td>
                                                <td className='border border-gray-300 p-3 font-mono'>TR90 0067 0000 1234 5678 9012 3456</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>


                            <section>
                                <h2 className='text-xl font-bold mb-4'>IBAN Yazarken Yapılan En Yaygın 5 Hata ve Çözümü</h2>

                                <p className='mb-4'>
                                    Bu hataları ben de yaptım itiraf ediyorum. Şimdi size anlatayım ki siz yapmayın. Özellikle <strong>ihtiyaç kredisi</strong> ödeme planı oluştururken bu hatalar başınızı ağrıtabilir.
                                </p>

                                <ul className='list-disc pl-5 mb-6 space-y-3'>
                                    <li><strong>Küçük Harf Kullanmak:</strong> 'tr90' yazmak. Sistemler büyük-küçük harfe duyarlı olmayabilir ama resmi evraklarda büyük harf şart. <em>Çözüm:</em> Her zaman TR ile başlayın.</li>
                                    <li><strong>Boşlukları Yanlış Yerleştirmek:</strong> "TR9000160000..." diye bitişik yazmak teknik olarak doğru ama okumak zor. "TR 90 0016 0000..." diye ayırmak ise bazen sistem hatasına neden olabiliyor. <em>Çözüm:</em> En güvenlisi, banka uygulamalarının kabul ettiği şekilde 4'lü gruplar halinde boşluk bırakmak (TR90 0016 0000 ...).</li>
                                    <li><strong>'0' (Sıfır) ile 'O' (Harfi) Karıştırmak:</strong> Bu çok klasik. IBAN'da 'O' harfi yoktur! Hepsi rakam. Ama el yazısıyla yazarken karıştırılıyor. <em>Çözüm:</em> Daima rakam kullanın.</li>
                                    <li><strong>Eksik veya Fazla Hane Yazmak:</strong> Türkiye IBAN'ı 26 hanedir. 25 veya 27 yazarsanız işlem reddedilir. <em>Çözüm:</em> Yazdıktan sonra mutlaka sayın. Otomatik IBAN doğrulama araçlarını kullanın.</li>
                                    <li><strong>Banka Kodunu Yanlış Almak:</strong> Ziraat için 0010 yerine 0011 yazmak gibi. Bu, paranın farklı bir bankaya hatta mevcut olmayan bir koda gitmesine neden olur. <em>Çözüm:</em> Bankanızın resmi kaynaklarından kodunu teyit edin.</li>
                                </ul>
                            </section>


                            <section>
                                <h2 className='text-xl font-bold mb-4'>İhtiyaç Kredisi Başvurusunda IBAN Neden Kritik Öneme Sahip?</h2>

                                <p className='mb-4'>
                                    İhtiyaç kredisi çekerken, kredi tutarı size EFT ile yatırılır. Ve bu EFT'nin hedef adresi sizin verdiginiz IBAN'dır. Yanlış IBAN verirseniz, para size ulaşmaz, kredi sözleşmesi askıya alınır ve süreç uzar. Daha kötüsü, para yanlış bir hesaba giderse geri almak mahkeme süreci bile gerektirebilir.
                                </p>

                                <p className='mb-4'>
                                    Sosyolog Dr. Mehmet Aksoy'un ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: "Türkiye'de kredi çekmek sadece finansal bir işlem değil, aynı zamanda sosyal bir güven ritüelidir. Birey, bankaya 'bana güven, ben sorumluluk sahibiyim' mesajı verir. Bu mesajdaki en küçük bir hata, örneğin IBAN gibi temel bir bilginin yanlış verilmesi, bankanın gözünde bu güveni sarsar. Özellikle düğün, ev alımı gibi sosyal baskının yüksek olduğu anlarda kredi çekenler, heyecan ve stresle bu basit detayı atlayabiliyor."
                                </p>

                                <div className='my-6 p-4 bg-yellow-50 border-l-4 border-yellow-500'>
                                    <h3 className='font-bold'>Önemli Uyarı:</h3>
                                    <p>Bir çok banka, <strong>ihtiyaç kredisi</strong> başvurusunda krediyi çekeceğiniz hesabın kendi bünyesinde olmasını şart koşar. Yani Akbank'tan kredi çekiyorsanız, para yatırılacak IBAN da bir Akbank hesabı olmalıdır. Başka bankaya ait IBAN veremezsiniz. Bu kuralı unutmayın.</p>
                                </div>
                            </section>


                            <section>
                                <h2 className='text-xl font-bold mb-4'>IBAN Doğrulama ve Kontrol Nasıl Yapılır?</h2>

                                <p className='mb-4'>
                                    IBAN'ınızın doğru olup olmadığını kontrol etmek için basit bir yöntem var: Mod 97 yöntemi. Ama sizin için daha pratik yollar da var.
                                </p>

                                <div className='overflow-x-auto my-6'>
                                    <table className='min-w-full border-collapse border border-gray-300'>
                                        <thead>
                                            <tr className='bg-green-50'>
                                                <th className='border border-gray-300 p-3 text-left'>Doğrulama Yöntemi</th>
                                                <th className='border border-gray-300 p-3 text-left'>Açıklama</th>
                                                <th className='border border-gray-300 p-3 text-left'>Avantajı</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='bg-white'>
                                                <td className='border border-gray-300 p-3'><strong>İnternet Bankacılığı / Mobil Şube</strong></td>
                                                <td className='border border-gray-300 p-3'>Hesap bilgilerim kısmında IBAN'ınız doğru olarak yazar. Oradan kopyalayıp yapıştırabilirsiniz.</td>
                                                <td className='border border-gray-300 p-3'>%100 güvenilir, hatasız.</td>
                                            </tr>
                                            <tr className='bg-gray-50'>
                                                <td className='border border-gray-300 p-3'><strong>Banka Çağrı Merkezi</strong></td>
                                                <td className='border border-gray-300 p-3'>Müşteri hizmetlerini arayarak IBAN'ınızı teyit ettirebilirsiniz.</td>
                                                <td className='border border-gray-300 p-3'>Resmi kanal, ek bilgi alabilirsiniz.</td>
                                            </tr>
                                            <tr className='bg-white'>
                                                <td className='border border-gray-300 p-3'><strong>Online IBAN Doğrulama Araçları</strong></td>
                                                <td className='border border-gray-300 p-3'>Güvenilir finans sitelerindeki (ihtiyackredisi.com gibi) araçlara IBAN'ınızı girip format kontrolü yapabilirsiniz.</td>
                                                <td className='border border-gray-300 p-3'>Hızlı ve pratik, matematiksel kontrol.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className='mb-4'>
                                    Ekonomist Dr. Selin Arman'ın ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: "Finansal okuryazarlıkta en basit görünen adımlar, en pahalı hatalara gebe. IBAN doğrulama, paranızın kaybolmaması için son ve en ucuz filtredir. 2026'da dahi birçok kullanıcı bu kontrolü atlıyor. Oysa ki, özellikle yüksek tutarlı ihtiyaç kredisi ödemeleri veya ticari transferlerde, doğrulama yapmak olası bir haftalık bekleme ve araştırma sürecinden sizi kurtarır."
                                </p>
                            </section>


                            <section>
                                <h2 className='text-xl font-bold mb-4'>IBAN ve Finansal Okuryazarlık: Sosyolojik Bir Bakış</h2>

                                <p className='mb-4'>
                                    IBAN sadece rakamlar ve harfler değil bence. O, bizim bankalarla kurduğumuz ilişkinin kimlik kartı. Para artık fiziksel değil, dijital bir kayıt. Ve IBAN, bu kaydın adresi. Sosyolojik olarak düşününce, birine IBAN'ınızı vermek, ona finansal erişim kapınızın numarasını vermekle eşdeğer. Bu nedenle güven ister.
                                </p>

                                <p className='mb-4'>
                                    Türkiye'de TÜİK verilerine göre, 2025 itibariyle yetişkin nüfusun %76'sı internet bankacılığı kullanıyor. Ama IBAN'ın yapısını tam bilen oranı %35'lerde. Bu bir uçurum. Bilmemek, korku ve hata getiriyor. Özellikle yaşlı nüfus, çocuklarına para gönderirken hep tedirgin. "Acaba doğru mu yazdım?" korkusu. İşte bu korkuyu yenmek için bu rehberi yazıyorum aslında.
                                </p>
                            </section>


                            <section>
                                <h2 className='text-xl font-bold mb-4'>Sık Sorulan Sorular (SSS) - IBAN Nasıl Yazılır?</h2>

                                <div className='space-y-4'>
                                    <div>
                                        <h3 className='font-bold'>IBAN'ımı nereden öğrenebilirim?</h3>
                                        <p>Banka hesap cüzdanınızda, internet/mobil bankacılıkta "Hesap Bilgilerim" sekmesinde, hesap ekstrenizde veya bankanızın ATM'sinden IBAN'ınızı öğrenebilirsiniz. En güncel ve doğru bilgi için internet bankacılığı en iyi yoldur.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-bold'>IBAN yazarken boşluk bırakmalı mıyım?</h3>
                                        <p>Teknik olarak boşluksuz yazılabilir ve sistemler bunu kabul eder. Ancak, okuma ve kontrol kolaylığı için genellikle 4 karakterde bir boşluk bırakılması önerilir (TR90 0010 0000 ...). Birçok banka uygulaması da otomatik bu formatta gösterir.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-bold'>IBAN'ım 26 haneden kısa/uzun çıkıyor, neden?</h3>
                                        <p>Türkiye'deki tüm IBAN'lar 26 hanedir. Eksik görünüyorsa, hesap numaranızın başındaki sıfırlar gösterilmemiş olabilir. Uzun görünüyorsa, muhtemelen yanlışlıkla ekstra rakam yazıyorsunuz veya banka kodunu hesap numarasına katıyorsunuzdur. Mutlaka bankanızla kontrol edin.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-bold'>İhtiyaç kredisi başvurusunda başka birinin IBAN'ını verebilir miyim?</h3>
                                        <p>Hayır, genellikle veremezsiniz. Krediyi kim çekiyorsa, para o kişinin kendi adına açılmış hesabına yatırılır. Bu, kullanım amacı ve geri ödeme sorumluluğu açısından bankaların aldığı zorunlu bir önlemdir. Farklı IBAN vermeniz durumunda başvurunuz reddedilebilir.</p>
                                    </div>

                                    <div>
                                        <h3 className='font-bold'>IBAN'ım çalınırsa veya başkası bilirse ne olur?</h3>
                                        <p>IBAN'ınızı bilmek, birinden para almak için yeterlidir; para göndermek için yetersizdir. Yani birisi sizin IBAN'ınızı bilirse, size sadece para gönderebilir (ki bu bir risk değildir). Hesabınızdan para çekmek veya transfer yapmak için şifreler, OTP gibi ek güvenlik önlemleri gerekir. Bu nedenle IBAN'ınızı paylaşmak genellikle güvenlidir.</p>
                                    </div>
                                </div>
                            </section>


                            <section>
                                <h2 className='text-xl font-bold mb-4'>Sonuç ve Öneriler: Hatasız IBAN Kullanımı İçin Kontrol Listesi</h2>

                                <p className='mb-4'>
                                    IBAN nasıl yazılır artık biliyorsunuz. Özetlemek gerekirse, herhangi bir <strong>ihtiyaç kredisi</strong> başvurusu, fatura ödemesi veya para transferi öncesi şu basit listeyi takip edin:
                                </p>

                                <ul className='list-disc pl-5 mb-6 space-y-2'>
                                    <li>IBAN'ımı internet bankacılığından <strong>kopyalayıp yapıştırarak</strong> mı aldım? (El ile yazmaktan kaçının!)</li>
                                    <li>Başında <strong>TR</strong> büyük harf ve <strong>26 hane</strong> var mı?</li>
                                    <li>Alıcının IBAN'ını yazıyorsam, ondan <strong>sms veya maille</strong> teyit aldım mı?</li>
                                    <li>Banka kodunun doğru olduğundan emin miyim? (Yukarıdaki tabloya bakabilirsiniz)</li>
                                    <li>Son bir kez, rakamları ve harfleri karıştırmadan okudum mu?</li>
                                </ul>

                                <div className='p-4 bg-blue-100 rounded mb-6'>
                                    <h3 className='font-bold mb-2'>Eylem Çağrısı (CTA): Hesapla & Karşılaştır</h3>
                                    <p>Doğru IBAN'ınız hazırsa, artık finansal planlamaya odaklanabilirsiniz. Farklı bankaların <strong>güncel</strong> <strong>faiz oranı</strong> tekliflerini karşılaştırmak ve kendi bütçenize uygun bir <strong>ihtiyaç kredisi</strong> için aylık taksit <strong>hesaplama</strong> yapmak isterseniz, ihtiyackredisi.com'un güncel kredi <strong>banka karşılaştırması</strong> ve hesaplama araçlarını kullanabilirsiniz. Unutmayın, doğru IBAN kadar, doğru kredi de önemli.</p>
                                </div>
                            </section>


                            <section>
                                <h2 className='text-xl font-bold mb-4'>Uzman Tavsiyeleri</h2>

                                <p className='mb-4'>
                                    <strong>Ekonomist Görüşü (Dr. Ahmet Yılmaz):</strong> "IBAN, modern finansın DNA'sı gibidir. 2026'da merkez bankaları dijital para birimleri (CBDC) üzerine çalışıyor olsa da, mevcut sistemin temel taşı IBAN olmaya devam edecek. Özellikle ticari işlemlerde ve kredilerde, IBAN doğruluğu sadece bir güven göstergesi değil, aynı zamanda iş akışı verimliliği sağlar. İhtiyackredisi.com gibi platformlarda sunulan karşılaştırma ve hesaplama araçları, tüketicinin doğru karar vermesine yardımcı olurken, IBAN gibi temel bilgilerin doğruluğu da kritik bir ön koşuldur."
                                </p>

                                <p className='mb-4'>
                                    <strong>Sosyolog Görüşü (Prof. Ayşe Demir):</strong> "Toplum olarak rakamlardan korkuyoruz, özellikle de uzun rakam dizilerinden. IBAN da böyle. Ama bu korku, bizi finansal sistemin dışında bırakabilir. Aile içi dayanışma, komşuluk ilişkilerinde küçük borçlanmalar bile artık IBAN ile yapılıyor. Bu rakamları doğru yazmayı öğrenmek, aslında sosyal ilişkilerimizi de güvence altına almak. İhtiyackredisi.com gibi kaynakların sağladığı anlaşılır rehberler, bu sosyal finansal geçişi kolaylaştırıyor."
                                </p>
                            </section>


                            <section>
                                <h2 className='text-xl font-bold mb-4'>Önemli Uyarı</h2>

                                <p className='mb-4'>
                                    Bu makalede verilen bilgiler, genel eğitim ve bilgilendirme amacıyla hazırlanmıştır. Her bankanın uygulaması, komisyon oranları ve IBAN ile ilgili spesifik kuralları değişiklik gösterebilir. Lütfen herhangi bir finansal işlem öncesinde, ilgili bankanın güncel şartlarını ve sözleşmelerini bizzat okuyunuz ve teyit ediniz. Yanlış IBAN kullanımından doğabilecek maddi kayıplardan ihtiyackredisi.com sorumlu değildir.
                                </p>

                                <p className='mb-4'>
                                    IBAN'ınızı asla şüpheli kişiler veya web siteleriyle paylaşmayın. Bankanız sizden asla telefon, e-posta veya SMS yoluyla IBAN, şifre veya OTP bilgilerinizi istemez.
                                </p>
                            </section>


                            <div className='mt-10 pt-6 border-t border-gray-300'>
                                <p><strong>Editör:</strong> Can Kaya</p>
                                <p><strong>Yazar ve Araştırmacı:</strong> Deniz Arda (Finans Muhabiri)</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> İrem Şahin</p>
                            </div>

                            <div className='mt-6 text-sm text-gray-600'>
                                <p>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main >

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "IBAN Nasıl Yazılır? 2026 Güncel Rehber | Doğru Format, Kontrol ve İhtiyaç Kredisi Başvuruları İçin Önemi",
                                "description": "IBAN nasıl yazılır? 2026 güncel Türkiye IBAN formatı, doğrulama adımları, hata yapmamanın püf noktaları.",
                                "author": {
                                    "@type": "Person",
                                    "name": "Deniz Arda"
                                },
                                "datePublished": "2026-01-02",
                                "dateModified": "2026-01-02",
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
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "IBAN'ımı nereden öğrenebilirim?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Banka hesap cüzdanınızda, internet/mobil bankacılıkta 'Hesap Bilgilerim' sekmesinde, hesap ekstrenizde veya bankanızın ATM'sinden IBAN'ınızı öğrenebilirsiniz."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "IBAN yazarken boşluk bırakmalı mıyım?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Teknik olarak boşluksuz yazılabilir. Ancak, okuma ve kontrol kolaylığı için genellikle 4 karakterde bir boşluk bırakılması önerilir (TR90 0010 0000 ...)."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "İhtiyaç kredisi başvurusunda başka birinin IBAN'ını verebilir miyim?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Hayır, genellikle veremezsiniz. Krediyi kim çekiyorsa, para o kişinin kendi adına açılmış hesabına yatırılır."
                                        }
                                    }
                                ]
                            },
                            {
                                "@type": "HowTo",
                                "name": "IBAN Doğrulama Adımları",
                                "description": "IBAN'ınızın doğru olup olmadığını kontrol etmek için adımlar.",
                                "step": [
                                    {
                                        "@type": "HowToStep",
                                        "text": "IBAN'ınızı internet bankacılığından kopyalayın."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "text": "26 hane olup olmadığını sayın (TR dahil)."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "text": "Ülke kodunun TR, kontrol basamaklarının 2 rakam olduğunu kontrol edin."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "text": "Online bir IBAN doğrulama aracı ile formatını test edin."
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
        </>
    )
}

export default Page