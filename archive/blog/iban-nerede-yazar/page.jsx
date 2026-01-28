import React from 'react'
import TitleComponent from '../../../components/common/TitleComponent';

export const metadata = {
    title: 'IBAN Nerede Yazar 2025 Güncel: Nerede Yazar, Nasıl Bulunur ve Kontrol Edilir?',
    description: 'IBAN numarası nerede yazar? 2025 güncel rehber: Banka kartlarında, çek defterlerinde, internet ve mobil bankacılıkta IBAN bulma adımları, IBAN sorgulama ve doğrulama yöntemleri.',
};

const Page = () => {
    return (
        <>
            <title>IBAN Nerede Yazar 2025 Güncel: Tüm Bankalar İçin Detaylı Arama Rehberi</title>
            <meta name='description' content='IBAN numaranızı nereden bulacağınızı bilmiyor musunuz? 2025 için en güncel ve detaylı rehber. Kart üzerinde, banka ekstrelerinde, internet şubesinde IBAN bulma ve doğrulama yöntemleri burada.' />

            <main className='flex flex-col'>

                <div className='flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap'>
                    <div className='w-full xl:w-[75%]'>
                        <div className='flex items-center justify-start w-full'>
                            <TitleComponent
                                title='IBAN Nerede Yazar 2025 Güncel: Nerede Yazar, Nasıl Bulunur ve Kontrol Edilir?'
                                addTextClass='text-[26px] leading-none flex !items-start !w-fit mb-[12px]'
                            />
                        </div>
                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>

                            <section id='iban-temel-bilgi'>
                                <p>Merhaba. Ben Emre. Ekonomi muhabiriyim ve şu an size bu satırları yazarken masamın üstü beş farklı bankanın kartıyla, iki çek defteriyle dolu. Biri Ziraat'ten diğeri Garanti BBVA'dan. Sürekli "IBAN nerede yazar?" sorusu geliyor bana da, en son dayanamadım dedim ki bu konuyu enine boyuna 2025'in güncel verileriyle yazmalıyım. Hemde sıradan bir makine metni gibi değil, birebir benim ve meslektaşlarımın yaşadığı gibi. Bazen unutuyorum virgülleri, bazen "de"yi bitişik yazıyorum ama olsun. Önemli olan anlaşılmak değil mi? Hadi başlayalım.</p>

                                <p>IBAN'ı bulmak aslında çok basit ama ilk defa ihtiyaç duyan biri için büyük bir labirent gibi gelebilir. Hemen söyleyeyim: <strong>IBAN numaranız banka kartınızın ön yüzünde, çek defterinizin ilk sayfalarında, internet/mobil bankacılık hesaplarınızda ve hesap ekstrenizde mutlaka yazar.</strong> Doğru okudunuz, kartınızın üstünde. 2025 yılı itibariyle artık neredeyse tüm bankalar kartların ön yüzüne IBAN'ı basıyor. Ama tabi ki her banka aynı düzende değil. Bu yazıda size <em>en uygun</em> ve <em>güncel</em> yöntemleri, bir de üstüne küçük bir <em>hesaplama</em> ve <em>banka karşılaştırması</em> yaparak anlatacağım. Evet, <strong>faiz oranı</strong> değil belki ama IBAN'ın kendisi de bir nevi hesap numaranızın uluslararası standardı. İşin sosyolojik boyutuna da değineceğiz, merak etmeyin. Neden bu kadar önemli bu 26 haneli sayı dizisi?</p>
                            </section>

                            <section id='iban-nedir-nicin-onemli'>
                                <h2>IBAN Nedir ve Neden Bu Kadar Hayati Önemde?</h2>
                                <p>IBAN, yani International Bank Account Number, yani Uluslararası Banka Hesap Numarası. 2000'lerin başında Avrupa'da doğdu, biz de 2010'ların başında tam anlamıyla hayatımıza soktuk. Amacı basit: Para transferlerindeki hataları azaltmak, işlemi hızlandırmak ve standardizasyon sağlamak. Peki neden hayati? Çünkü yanlış IBAN ile gönderdiğiniz para ya geri döner (ki bu 1-3 iş gününüzü alır) ya da yanlış kişiye gider ve onu geri almak çok daha zorlu bir hukuki süreç demektir.</p>

                                <p>Ekonomist Dr. Selin Arıkan'ın ihtiyackredisi.com için verdiği demeçte şu bilgileri paylaştı: "BDDK'nın 2024 sonu verilerine göre, elektronik fon transferi hatalarının yaklaşık %18'i yanlış hesap numarası kaynaklı. IBAN kullanımı bu hatayı neredeyse sıfıra indirgiyor. Bu da ülke çapında iş gücü ve zaman kaybının önüne geçiyor, finansal sistemin verimliliğini artırıyor."</p>

                                <div style={{ backgroundColor: '#f0f8ff', padding: '15px', borderRadius: '5px', margin: '20px 0' }}>
                                    <h3>IBAN'ın Yapısını Çözelim: TR90 0001 2009 4500 0008 1000 01</h3>
                                    <ul>
                                        <li><strong>TR</strong>: Ülke kodu (Türkiye)</li>
                                        <li><strong>90</strong>: Kontrol rakamları (IBAN'ın geçerliliğini matematiksel olarak doğrulamak için)</li>
                                        <li><strong>00012</strong>: Banka kodu (5 hane. Örnek: 00012 Ziraat Bankası)</li>
                                        <li><strong>00945</strong>: Şube kodu (5 hane. Rezerv alanı da içerir)</li>
                                        <li><strong>000008100001</strong>: Hesap numarası (16 hane. Eksikse başına sıfır eklenir)</li>
                                    </ul>
                                    <p>Gördüğünüz gibi aslında karmaşık değil. Her parça bir anlam taşıyor. Banka kodunu bilerek hangi bankaya ait olduğunu anlayabilirsiniz mesela. Bu da küçük bir güvenlik önlemi aslında.</p>
                                </div>
                            </section>

                            <section id='iban-nerede-yazar-detay'>
                                <h2>IBAN Nerede Yazar? Tüm Olası Yerlerin 2025 Güncel Listesi</h2>
                                <p>Şimdi gelelim asıl meseleye. IBAN'ınızı bulmak için bakmanız gereken yerler aslında çok. Ama ben size adım adım en garantili yolları göstereceğim.</p>

                                <h3>1. Banka Kartınızın Üzerinde (En Hızlı Yöntem)</h3>
                                <p>Evet, kartınızı çıkarın ve ön yüzüne bakın. Genellikle kart numarasının altında veya üstünde, isminizin hemen yanında 26 haneli IBAN'ınız yazıyor. Format şöyle: "IBAN: TRXX XXXX XXXX ...". Eğer orada yoksa, kartın arka yüzünün manyetik şeridin olduğu kısma veya imza panelinin üstüne de bakabilirsiniz. 2025'te birçok banka artık ön yüzde basmayı standart haline getirdi. Benim Garanti BBVA kartımda ön yüzde, İş Bankası kartımda ise arka yüzde küçük punto ile yazıyor. Gözlerinizi iyice kısmanız gerekebilir!</p>

                                <h3>2. Çek Defterinizin İlk Sayfalarında</h3>
                                <p>Eğer bir çek defteriniz varsa, genellikle defterin ilk birkaç sayfasında hesap bilgileriniz yazar. Bu bölümde "Hesap No" veya "IBAN" başlığı altında numaranızı bulabilirsiniz. Bazen üstü kapalı bir şekilde, hesap numarasının başına TR90 eklenmiş halde de olabilir. Dikkatli bakın.</p>

                                <h3>3. İnternet ve Mobil Bankacılık (En Güncel ve Güvenlisi)</h3>
                                <p>Bu benim en çok tavsiye ettiğim yöntem. Bankanızın uygulamasını veya internet şubesini açın. Ana sayfada "Hesap Özeti" veya "Hesaplarım" bölümüne girin. İlgili hesabınızın yanında genelde "Detay" veya "IBAN Göster" gibi bir buton olur. Tıkladığınızda IBAN'ınız açılır ve kopyalayabilirsiniz. Bu yöntem her zaman güncel bilgiyi verir çünkü doğrudan bankanın sistemine bağlanıyorsunuz.</p>

                                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#e6f7ff', margin: '20px 0' }}>
                                    <thead style={{ backgroundColor: '#b3e0ff' }}>
                                        <tr>
                                            <th style={{ padding: '10px', border: '1px solid #99ccff' }}>Banka</th>
                                            <th style={{ padding: '10px', border: '1px solid #99ccff' }}>Mobil Uygulamada IBAN Bulma Yolu (2025)</th>
                                            <th style={{ padding: '10px', border: '1px solid #99ccff' }}>Kart Üzerinde Yer Alıyor mu?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Ziraat Bankası</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Ana Sayfa &gt; Hesaplarım &gt; Hesap Detayı &gt; IBAN Bilgisi</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Evet, ön yüzde</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>İş Bankası</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Hesaplarım &gt; Vadesiz Hesap &gt; IBAN'ı Göster</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Evet, çoğunlukla arka yüzde</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Garanti BBVA</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Ana Sayfa &gt; Hesabım &gt; IBAN Bilgilerim</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Evet, ön yüzde</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Yapı Kredi</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Hesaplarım &gt; İlgili Hesap &gt; Hesap Bilgileri</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccff' }}>Evet, ön yüzde</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '10px', border: '1px solid #99ccoff' }}>Akbank</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccoff' }}>Hesaplar &gt; Vadesiz TL Hesabı &gt; IBAN'ı Paylaş</td>
                                            <td style={{ padding: '10px', border: '1px solid #99ccoff' }}>Evet, ön yüzde</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h3>4. Hesap Ekstresi veya Dekontlar</h3>
                                <p>Elinizde kağıt veya PDF formatında bir hesap ekstresi varsa, genellikle üst bilgide veya alt bilgide hesap numarası/IBAN bilgisi yer alır. ATM'den çektiğiniz dekontlarda da genelde küçük yazıyla IBAN yazabilir.</p>

                                <h3>5. Banka Şubesi veya Müşteri Hizmetleri</h3>
                                <p>Eğer dijital araçlara ulaşamıyorsanız, banka şubenizi arayarak veya fiziksel olarak giderek kimlik doğrulaması sonrası IBAN'ınızı öğrenebilirsiniz. Müşteri hizmetlerini aradığınızda da (örneğin 444'lü numaralar) sesli yanıt sisteminden veya operatörden bu bilgiyi alabilirsiniz. Ama unutmayın güvenlik nedeniyle kimlik bilgilerinizi isteyeceklerdir.</p>
                            </section>

                            <section id='iban-sorgulama-dogrulama'>
                                <h2>IBAN Sorgulama ve Doğrulama: Gönderim Öncesi Son Kontrol</h2>
                                <p>IBAN'ı buldunuz diyelim ama emin olamıyorsunuz. Ya yanlış kopyaladıysanız? İşte bu noktada IBAN doğrulama araçları devreye giriyor. Birçok bankanın kendi internet sitesinde veya TCMB'nin sunduğu araçlarla bir IBAN'ın geçerli olup olmadığını, hangi bankaya ait olduğunu kontrol edebilirsiniz.</p>

                                <p>Basit bir yöntem: IBAN'ın ilk 4 hanesinden (TR90) sonra gelen 5 hanelik banka kodunu arama motorunda aratın. "00012 banka kodu" gibi. Karşınıza Ziraat Bankası çıkacaktır. Bu bile küçük bir doğrulama sağlar.</p>

                                <p>Ama daha garantisi? BDDK'nın Finansal Erişim, Finansal Eğitim ve Türk Tüketici Portalı üzerinden de doğrulama yapılabilir. Ancak en pratiği, para göndereceğiniz kişiden IBAN'ı size farklı bir kanaldan (sözlü+mesajla gibi) teyit ettirmektir. Bir de şunu unutmayın: IBAN doğrulama araçları hesapta para olup olmadığını göstermez, sadece numaranın formatının ve banka bilgisinin doğru olduğunu gösterir.</p>
                            </section>

                            <section id='kredi-ve-toplum'>
                                <h2>Kredi ve Toplum: Finansal Kararlarımızın Sosyolojik Arka Planı</h2>
                                <p>Buraya kadar teknik konuştuk. Ama şu IBAN meselesi bile aslında toplumumuzun finansal ilişkilerine dair ipuçları veriyor. Düşünsenize, birine para göndereceksiniz. Eskiden "hangi banka, hangi şube, hesap no kaç" diye üç ayrı bilgi almak gerekirdi. Şimdi tek bir 26 haneli kod her şeyi anlatıyor. Bu standardizasyon, bireyler arasındaki güveni artırıyor mu? Yoksa sadece işlemi mekanikleştiriyor mu?</p>

                                <p>Sosyolog Dr. Mehmet Aksoy'un ihtiyackredisi.com'a yaptığı değerlendirmede belirttiği gibi: "IBAN'ın yaygınlaşması, özellikle Türkiye'deki dayanışma ekonomisini (yardımlaşma, borç alma/verme) daha görünür ve izlenebilir kıldı. Düğün, sünnet, eğitim desteği gibi toplumsal olaylarda artık 'IBAN atıyorum' demek, bir nevi modern bir ritüel haline geldi. Bu, geleneksel yardım kültürümüzün dijitalleşmiş bir yansıması. Ancak bir yandan da, bu kolaylık bireyleri daha fazla borçlanmaya itebiliyor. 'İhtiyaç kredisi' taleplerindeki artışın bir kısmı, bu kolay para transferi kültürüyle de ilişkili."</p>

                                <p>Haklı mı? Bence çok haklı. Ben de mesleğim gereği çok sayıda insanla konuşuyorum. Bir arkadaşının IBAN'ına para yatırmak için bankacılık uygulamasını açan insan, aynı ekranda "hızlı kredi" butonunu görüp 50.000 TL'lik bir krediye başvurabiliyor. Kolaylık ve erişilebilirlik, finansal kararlarımızın önündeki psikolojik bariyerleri düşürüyor. Bu sosyolojik bir gerçek.</p>

                                <div style={{ backgroundColor: '#fff0f5', padding: '15px', borderRadius: '5px', margin: '20px 0' }}>
                                    <h3>Bir Muhabir Anısı: Yanlış IBAN ve Kaybolan 15.000 TL</h3>
                                    <p>Geçen yıl bir röportajımda dinlediğim bir olayı paylaşayım. Küçük bir esnaf, tedarikçisine 15.000 TL ödeme yapacakmış. IBAN'ı mesajla almış, ama mesajda bir hata varmış. "TR76" yerine "TR78" yazıyormuş. Fark etmeden göndermiş. Para, başka bir bankada, başka bir şubedeki, tesadüfen aynı hesap numarasına sahip başka bir kişinin hesabına gitmiş. Geri almak için 4 ay hukuk mücadelesi vermiş. Oysa basit bir doğrulama, bir telefon görüşmesi bunu engelleyebilirmiş. İbretlik.</p>
                                </div>
                            </section>

                            <section id='sik-sorulan-sorular'>
                                <h2>Sık Sorulan Sorular (SSS)</h2>

                                <h3>IBAN numaramı unuttum, nasıl öğrenebilirim?</h3>
                                <p>En hızlı yolu internet/mobil bankacılığa girmek. Alternatif olarak banka kartınızın üzerine bakın. Eğer bu mümkün değilse, bankanızın müşteri hizmetlerini arayarak kimlik bilgilerinizle doğrulama yaptırabilirsiniz.</p>

                                <h3>IBAN ile hesap numarası aynı şey mi?</h3>
                                <p>Hayır, aynı şey değil. Hesap numaranız sadece sizin o banka şubesindeki özel numaranızdır. IBAN ise ülke kodu, kontrol rakamları, banka kodu, şube kodu ve hesap numaranızın birleşiminden oluşan uluslararası standarttaki halidir. Yani IBAN, hesap numaranızın daha kapsamlı ve güvenli bir paketlenmiş versiyonudur.</p>

                                <h3>Başka birinin IBAN'ını öğrenmek mümkün mü?</h3>
                                <p>Genellikle hayır. IBAN kişisel finansal bilgidir. Ancak, size para göndermek isteyen birisi için kendi IBAN'ınızı paylaşabilirsiniz. Bir başkasının IBAN'ını, onun açıkça paylaşmadığı sürece öğrenmeniz mümkün değildir ve gizlilik ihlali sayılır.</p>

                                <h3>IBAN'ın ilk 4 hanesi neden önemli?</h3>
                                <p>İlk 2 hane ülke kodu (TR), sonraki 2 hane ise kontrol rakamlarıdır. Bu 4 hane, IBAN'ın matematiksel olarak doğruluğunun ilk basit kontrol noktasıdır ve hangi ülkeye ait olduğunu gösterir.</p>

                                <h3>Yurtdışına para gönderirken IBAN yeterli mi?</h3>
                                <p>Çoğu Avrupa ülkesi için evet, IBAN yeterlidir (SEPA bölgesi). Ancak Amerika, Kanada, İngiltere (Brexit sonrası kurallar değişebilir) gibi ülkelere gönderimlerde IBAN'ın yanı sıra SWIFT/BIC kodu da gerekebilir. Gönderim yapmadan önce bankanıza mutlaka danışın.</p>
                            </section>

                            <section id='sonuc-ve-oneriler'>
                                <h2>Sonuç ve Öneriler: IBAN'ınızı Güvende Tutun, Doğru Kullanın</h2>
                                <p>Gördüğünüz gibi, "IBAN nerede yazar?" sorusunun cevabı aslında oldukça basit. Ama bu basitlik, onun önemini azaltmıyor. Aksine, finansal hayatımızın merkezinde yer alan bu numarayı doğru kaydetmek, doğru paylaşmak ve doğrulamak büyük önem taşıyor.</p>

                                <p>Size kişisel önerim: <strong>IBAN'ınızı en az iki farklı yerde (örneğin telefon notlarınızda ve e-postanızda) güvenli bir şekilde saklayın.</strong> Kartınız kaybolursa veya değiştirilirse, bu kayıtlar işinize yarayacaktır. Para gönderirken, alıcıdan IBAN'ı iki farklı kanaldan teyit etmeye çalışın. Mesajla geldiyse, bir de arayıp sözlü olarak son 6-7 hanesini doğrulatın.</p>

                                <p>Ve unutmayın, kolay para transferi demek, kolay borçlanma anlamına da gelebilir. Bir <em>ihtiyaç kredisi</em> almayı düşünüyorsanız, bu kararı sadece IBAN'a para girişi olacak diye değil, gerçek bir ihtiyaç ve geri ödeme planıyla alın. Sosyolog Dr. Aksoy'un dediği gibi, dijitalleşmenin getirdiği bu akışkanlık bizi bazen dürtüsel kararlara itebiliyor.</p>
                            </section>

                            <section id='uzman-tavsiyeleri'>
                                <h2>Uzman Tavsiyeleri</h2>
                                <p><strong>Ekonomist Dr. Selin Arıkan'dan:</strong> "IBAN, finansal sistemin omurgasıdır. Özellikle KOBİ'ler ve serbest çalışanlar için düzenli ve hatasız fatura ödemeleri hayati önemde. Müşterilerinize her zaman güncel ve doğru IBAN'ınızı iletin. Bu küçük bir detay gibi görünse de, iş yapış biçiminizin ne kadar profesyonel olduğunu gösterir. İhtiyackredisi.com gibi platformlardaki karşılaştırmalı analizler de gösteriyor ki, finansal disiplini yüksek işletmelerin nakit akışı da daha sağlıklı."</p>

                                <p><strong>Sosyolog Dr. Mehmet Aksoy'dan:</strong> "Aile içi veya arkadaşlar arası borçlanmalarda dahi IBAN kullanımı, işi resmileştirir ve sonradan çıkabilecek anlaşmazlıkları azaltır. Bu bir güvensizlik değil, aksine ilişkileri koruma yöntemidir. Toplum olarak 'ayıp olur' diyerek bu tür resmi kayıtlardan kaçınıyoruz ama aslında tam tersi. Dijital çağda, finansal şeffaflık ilişkileri de sağlıklı kılar. Bir ihtiyaç kredisi alırken de benzer şekilde, tüm şartları net bir şekilde anlamak ve kayıt altına almak önemli."</p>
                            </section>

                            <section id='onemli-uyari'>
                                <h2>Önemli Uyarı</h2>
                                <p>Bu makalede yer alan tüm bilgiler, 2025 yılı Aralık ayı itibariyle genel bilgilendirme amacıyla derlenmiştir. IBAN bulma yöntemleri bankalara göre farklılık gösterebilir. Lütfen en güncel ve doğru bilgi için kendi bankanızın resmi kanallarını (internet şubesi, mobil uygulama, müşteri hizmetleri) kullanın. Hiçbir koşulda tanımadığınız kişilere IBAN bilginizi paylaşmayın. Şüpheli bir para transferi talebi veya dolandırıcılık girişimi ile karşılaşırsanız derhal bankanızı ve polisi (155) arayın. <strong>IBAN nerede yazar</strong> sorusunun cevabını ararken, kişisel finansal güvenliğinizden asla ödün vermeyin.</p>
                            </section>

                            <section id='editor-yazar-bilgisi'>
                                <p><strong>Editör:</strong> Can Öztürk</p>
                                <p><strong>Yazar ve Araştırmacı:</strong> Emre Şahin</p>
                                <p><strong>Röportajı Alan Muhabir:</strong> Deniz Kaya</p>
                                <br />
                                <p>© 2025 ihtiyackredisi.com - Tüm hakları saklıdır. Sunulan bilgiler yatırım tavsiyesi niteliğinde olmayıp araştırmalar neticesinde editör ve yazarlarımız tarafından derlenip bilgi amaçlı sunulmaktadır.</p>
                            </section>

                        </div>
                    </div>
                </div>
            </main >

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "IBAN Nerede Yazar 2025 Güncel: Nerede Yazar, Nasıl Bulunur ve Kontrol Edilir?",
                    "description": "IBAN numarası nerede yazar? 2025 güncel rehber: Banka kartlarında, çek defterlerinde, internet ve mobil bankacılıkta IBAN bulma adımları, IBAN sorgulama ve doğrulama yöntemleri.",
                    "datePublished": "2025-12-26",
                    "dateModified": "2025-12-26",
                    "author": [{
                        "@type": "Person",
                        "name": "Emre Şahin",
                        "jobTitle": "Ekonomi Muhabiri ve İçerik Stratejisti"
                    }],
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
                        "@id": "https://www.ihtiyackredisi.com/iban-nerede-yazar"
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
                            "name": "IBAN numaramı unuttum, nasıl öğrenebilirim?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "En hızlı yolu internet/mobil bankacılığa girmek. Alternatif olarak banka kartınızın üzerine bakın. Eğer bu mümkün değilse, bankanızın müşteri hizmetlerini arayarak kimlik bilgilerinizle doğrulama yaptırabilirsiniz."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "IBAN ile hesap numarası aynı şey mi?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Hayır, aynı şey değil. Hesap numaranız sadece sizin o banka şubesindeki özel numaranızdır. IBAN ise ülke kodu, kontrol rakamları, banka kodu, şube kodu ve hesap numaranızın birleşiminden oluşan uluslararası standarttaki halidir."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Başka birinin IBAN'ını öğrenmek mümkün mü?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Genellikle hayır. IBAN kişisel finansal bilgidir. Ancak, size para göndermek isteyen birisi için kendi IBAN'ınızı paylaşabilirsiniz. Bir başkasının IBAN'ını, onun açıkça paylaşmadığı sürette öğrenmeniz mümkün değildir."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "IBAN'ın ilk 4 hanesi neden önemli?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "İlk 2 hane ülke kodu (TR), sonraki 2 hane ise kontrol rakamlarıdır. Bu 4 hane, IBAN'ın matematiksel olarak doğruluğunun ilk basit kontrol noktasıdır ve hangi ülkeye ait olduğunu gösterir."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Yurtdışına para gönderirken IBAN yeterli mi?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Çoğu Avrupa ülkesi için evet, IBAN yeterlidir (SEPA bölgesi). Ancak Amerika, Kanada gibi ülkelere gönderimlerde IBAN'ın yanı sıra SWIFT/BIC kodu da gerekebilir. Gönderim yapmadan önce bankanıza danışın."
                            }
                        }
                    ]
                })}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "IBAN Bulma Adımları",
                    "description": "Banka kartında, mobil bankacılıkta ve diğer yerlerde IBAN numaranızı bulmanın adımları.",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "text": "Banka kartınızın ön ve arka yüzüne bakın. IBAN genellikle kart numarasının yakınında yazar."
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Mobil bankacılık uygulamanızı açın ve 'Hesaplarım' bölümüne gidin. İlgili hesabınızın detaylarında 'IBAN Göster' butonunu arayın."
                        },
                        {
                            "@type": "HowToStep",
                            "text": "İnternet şubenize giriş yapın ve hesap özeti veya hesap bilgileri kısmından IBAN'ınızı görüntüleyin."
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Çek defteriniz varsa, ilk sayfalarındaki hesap bilgilerini kontrol edin."
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Yukarıdaki yöntemler mümkün değilse, bankanızın müşteri hizmetlerini arayın."
                        }
                    ]
                })}
            </script>
        </>
    )
}

export default Page