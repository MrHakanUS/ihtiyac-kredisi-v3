import HeadingComponent from '@/components/common/HeadingComponent'
import FaqClient from './Client'
import React from 'react'

const defaultFaqItems = [
  {
    question: "Neden İhtiyaçkredisi.com'u tercih etmeliyim?",
    answer:
      'İhtiyaçkredisi.com, bankaların güncel faiz oranlarını ve kredi tekliflerini sizin için tek bir platformda bir araya getirir. Bu sayede, en uygun kredi veya kredi kartı seçeneğini bularak zamandan ve paradan tasarruf etmenizi sağlar. Platformumuzu kullanarak finansal ürünleri kolayca karşılaştırabilir ve bütçenize en uygun kararı verebilirsiniz.',
  },
  {
    question: 'Kredi başvuru süreci nasıl işler?',
    answer:
      'İhtiyacınız olan kredi türünü (ihtiyaç, taşıt, konut) ve tutarı seçtikten sonra sistemimiz size en uygun banka tekliflerini anında listeler. Size en uygun teklifi seçerek ilgili bankanın güvenli başvuru sayfasına yönlendirilirsiniz. Başvuru formunu doldurduktan sonraki tüm süreçler sizinle banka arasında ilerler.',
  },
  {
    question: 'Siteniz üzerinden hangi finansal ürünleri karşılaştırabilirim?',
    answer:
      'Platformumuzda faizsiz kredilerden başlayarak ihtiyaç, konut ve taşıt kredilerine kadar geniş bir yelpazede karşılaştırma yapabilirsiniz. Ayrıca, en avantajlı kredi kartı kampanyalarını ve mevduat faizi oranlarını da kolayca inceleyebilirsiniz. Promosyonlar bölümümüzden güncel fırsatları takip etme imkânı da sunuyoruz.',
  },
  {
    question: 'Kredi notum, sunulan kredi tekliflerini etkiler mi?',
    answer:
      'Evet, kredi notunuz bankaların size sunacağı faiz oranlarını ve kredi limitini doğrudan etkileyen en önemli faktörlerden biridir. Yüksek bir kredi notu, genellikle daha düşük faiz oranları ve daha avantajlı koşullarla kredi kullanma şansınızı artırır. Platformumuzdaki genel teklifleri inceledikten sonra bankanın yapacağı nihai değerlendirmede kredi notunuz belirleyici olacaktır.',
  },
  {
    question: 'Kişisel bilgilerimin güvenliği nasıl sağlanıyor?',
    answer:
      'Kişisel verilerinizin güvenliği bizim için en önemli önceliktir ve tüm bilgileriniz modern şifreleme teknolojileriyle korunmaktadır. Sitemiz, kredi başvurusu için doğrudan bankaların kendi güvenli sistemlerine yönlendirme yapar. Bu sayede hassas bilgileriniz sadece sizin ve bankanızın arasında kalır.',
  },
];

function FaqComponent({ items }) {
  const faqList = items && items.length ? items : defaultFaqItems

  return (
    <section>
      <HeadingComponent
        title='Sıkça Sorulan Sorular'
        subtitle='İhtiyaç Kredisine Dair Bilmediklerinizi Öğrenin'
      />

      <FaqClient items={faqList} />
    </section>
  )
}

export default FaqComponent;
