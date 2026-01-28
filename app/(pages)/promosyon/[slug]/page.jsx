import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { IoWarning, IoBulb, IoCheckmark } from 'react-icons/io5';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import PromotionCard from '@/components/common/PromotionCard';
import AdZoneComponent from '@/components/common/AdZoneComponent';
import TabsClient from './TabsClient';
import { ALL_PROMOTIONS } from '@/constants/promosyon';
import { resolveBankBySlug } from '@/constants/banks';

// Helper function to get bank slug from bank name (same as in TabsClient.jsx)
function getBankSlugFromName(bankName) {
  const bankSlugMap = {
    'Akbank': 'akbank',
    'Garanti BBVA': 'garanti',
    'Garanti': 'garanti',
    'Türkiye İş Bankası': 'is-bankasi',
    'İş Bankası': 'is-bankasi',
    'Halkbank': 'halkbank',
    'Türkiye Halk Bankası': 'halkbank',
    'Ziraat Bankası': 'ziraat',
    'Ziraat': 'ziraat',
    'T.C. Ziraat Bankası': 'ziraat',
    'Yapı Kredi': 'yapi-kredi',
    'Yapı ve Kredi Bankası': 'yapi-kredi',
    'VakıfBank': 'vakifbank',
    'Türkiye Vakıflar Bankası': 'vakifbank',
    'QNB Finansbank': 'qnb',
    'QNB': 'qnb',
    'ING': 'ing-bank',
    'ING Bank': 'ing-bank',
    'Denizbank': 'denizbank',
    'DenizBank': 'denizbank',
    'TEB': 'teb',
    'Türk Ekonomi Bankası': 'teb',
    'Enpara': 'enpara',
    'Enpara.com': 'enpara',
    'Fibabanka': 'fibabanka',
    'Albaraka Türk': 'albaraka',
    'Albaraka': 'albaraka',
    'Kuveyt Türk': 'kuveytturk',
    'Kuveyttürk': 'kuveytturk',
  }
  return bankSlugMap[bankName] || null
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const promotion = ALL_PROMOTIONS.find((promo) => promo.bankSlug === slug);

  if (!promotion) {
    return {
      title: 'Promosyon Detayları | ihtiyackredisi.com',
      description: 'Banka promosyon detayları ve başvuru bilgileri.',
      alternates: {
        canonical: `/promosyon/${slug}`,
      },
    };
  }

  return {
    title: `${promotion.title} | ihtiyackredisi.com`,
    description: promotion.shortDescription || `${promotion.bankName} promosyon detayları ve başvuru koşulları.`,
    alternates: {
      canonical: `/promosyon/${slug}`,
    },
  };
}

async function PromotionDetailPage({ params }) {
  const { slug } = await params;
  const promotion = ALL_PROMOTIONS.find((promo) => promo.bankSlug === slug);

  if (!promotion) return notFound();

  // Get bank reviews from constants/banks
  const bankSlug = getBankSlugFromName(promotion.bankName || promotion.reviewBankName)
  const { bank } = resolveBankBySlug({ slug: bankSlug })
  const reviewCount = bank?.reviews?.userReviews?.length || 0
  const overallRating = bank?.reviews?.overallRating || parseFloat(promotion.rating?.replace(',', '.')) || 4.0
  
  // Get bank URL from banks/index.js instead of using promotion.applyUrl
  const applyUrl = bank?.bankUrl || promotion.applyUrl || '#'

  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Promosyon', href: '/promosyon' },
    { label: promotion.title },
  ];

  const metrics = [
    { label: 'Promosyon Türü', value: 'Emekli Promosyonu' },
    { label: 'Yıllık Aidat', value: formatTL(promotion.annualFee) },
    {
      label: 'Müşteri Memnuniyeti',
      value: reviewCount > 0 ? `${overallRating.toFixed(1).replace('.', ',')}/5 (${reviewCount} değerlendirme)` : 'Henüz değerlendirme yok',
    },
  ];

  const relatedPromotions = ALL_PROMOTIONS.filter((p) => p.bankSlug !== slug).slice(0, 3);

  return (
    <div className='min-h-screen'>
      <section className='bg-white border-b border-gray-200 flex'>
        <div className='custom-container-1 flex items-center'>
          <div className='relative pt-[56px] w-full'>
            <div className='pt-[16px] flex flex-col md:flex-row items-start justify-between w-full gap-4'>
              <div className='flex flex-col w-full md:w-9/12'>
                <BreadcrumbComponent items={breadcrumbItems} />
                <div>
                  <h1 className='font-semibold text-[24px] leading-[30px] text-slate-900'>
                    {promotion.title}
                  </h1>
                  <p className='mt-[24px] pb-[32px] border-b border-b-slate-200 text-slate-600 text-[14px] leading-[20px]'>
                    {promotion.shortDescription}
                  </p>
                </div>
              </div>

              <div className='w-full md:w-3/12 flex items-center justify-center md:justify-end mt-2 md:mt-0'>
                <FeaturedButtonComponent
                  text='Hemen Başvur'
                  href={applyUrl}
                  target='_blank'
                />
              </div>
            </div>

            <div className='w-full md:w-9/12 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 md:gap-0'>
              <div className='flex items-center w-full md:w-2/12 justify-center md:justify-start'>
                <Image
                  src={promotion.bankImage}
                  alt={promotion.bankName}
                  width={500}
                  height={300}
                  className='h-[36px] w-auto select-none'
                  draggable={false}
                />
              </div>

              <div className='md:hidden h-[1px] w-full bg-slate-200' />
              <div className='hidden md:block h-[60px] w-[1px] bg-slate-200' />

              <div className='flex w-full md:w-9/12 items-center md:items-center justify-center md:justify-between py-[16px] md:py-[32px] gap-4 md:gap-0 flex-col sm:flex-row'>
                {metrics.map(({ label, value }, index) => (
                  <div
                    key={label + index}
                    className='text-center sm:text-start w-full sm:w-1/3 gap-y-[8px] flex flex-col justify-start'
                  >
                    <p className='text-slate-600 text-[14px] leading-[16px]'>
                      {label}
                    </p>
                    <p className='text-slate-900 font-bold text-[16px] leading-[20px]'>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='custom-container-1 mt-[50px] mb-[96px]'>
        <TabsClient promotion={promotion} applyUrl={applyUrl} />
      </section>

      {/* Emekli Promosyonu Content Section */}
      <section className='custom-container-1 mb-[96px]'>
        <div className='bg-gradient-to-br from-slate-50 to-slate-100 rounded-[24px] p-[32px] border border-slate-200'>
          <div className='mb-[24px]'>
            <h2 className='text-slate-900 font-semibold text-[28px] leading-[34px] mb-[16px]'>
              Emekli Promosyonu Hakkında Bilinmesi Gerekenler
            </h2>
            <p className='text-slate-600 text-[16px] leading-[24px]'>
              Bankaların emeklilere sunduğu avantajlar ve dikkat edilmesi gereken noktalar
            </p>
          </div>
          
          <div className='prose max-w-none'>
            <div className='space-y-6 text-slate-700 text-[15px] leading-[26px]'>
              <p>
                Emekli promosyonu denildiğinde çoğumuzun aklına, bankaların emekli maaşını kendi hesabına çekmek için yaptığı nakit teklifler gelir. Peki gerçekten bu kadar cazip mi, yoksa aslında küçük bir kazanç uğruna daha büyük resmi ıskalıyor muyuz? Gelin birlikte bu sorunun yanıtını arayalım.
              </p>
              
              <p>
                Büyük bankalar başta olmak üzere birçok finans kurumu, her sene emeklilere yönelik kampanyalar düzenliyor. Örneğin 2023'te bazı bankalar emekli başına 1.000 TL'ye varan nakit ödemeler yaptı. Tabii bu rakamlar bankadan bankaya değişkenlik gösteriyor. Kimi banka peşin ödeme yaparken, kimi ise maaşın belli bir süre kendilerinde kalması koşuluyla parayı taksitlendirebiliyor.
              </p>
              
              <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 my-6'>
                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IoWarning className='text-white text-sm' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-amber-900 mb-2'>Önemli Uyarı:</h4>
                    <p className='text-amber-800 text-[14px] leading-[20px]'>
                      Bankaların bu "cömertliği" elbette sebepsiz değil. Emekli maaşları düzenli ve uzun soluklu bir gelir kaynağı olduğundan, bankalar için oldukça değerli. Promosyon teklifini duyduğunuzda "Acaba ardında başka ne var?" diye sormanız yerinde olacaktır.
                    </p>
                  </div>
                </div>
              </div>
              
              <p>
                Şunu baştan söyleyeyim: Bu promosyonlar aslında sadece birer yem. Evet, bazen lehimize olan yemler bunlar, ama çoğu zaman bizi içine çekmek için hazırlanmış tuzaklar. Asıl odaklanmanız gereken şey, o krediyi çektikten sonra toplamda ne kadar geri ödeyeceğiniz. İşte o hesabı iyi yapmak zorundasınız.
              </p>
              
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 my-6'>
                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IoBulb className='text-white text-sm' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-blue-900 mb-2'>Dikkat Edilmesi Gerekenler:</h4>
                    <ul className='text-blue-800 text-[14px] leading-[20px] space-y-2'>
                      <li className='flex items-start gap-2'>
                        <span className='text-blue-600 mt-1'>•</span>
                        Kampanyanın ince yazılarını, şartlarını mutlaka okuyun
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-blue-600 mt-1'>•</span>
                        Verilen hediyenin geri istenme ihtimalini araştırın
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-blue-600 mt-1'>•</span>
                        Erken kapatma durumunda ne olacağını öğrenin
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-blue-600 mt-1'>•</span>
                        Promosyonların vergi durumunu kontrol edin
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p>
                Peki hangi banka daha iyi promosyon veriyor? Maalesef tek ve net bir yanıtı yok. Örneğin Ziraat Bankası gibi devlet bankaları nakit anlamında daha mütevazı kalabiliyor ama yanında farklı sosyal avantajlar sunabiliyor. Özel bankalar ise daha yüksek miktarlar vaat edebiliyor, ancak yanında bir dolu bağlayıcı şart da gelebiliyor.
              </p>
              
              <div className='bg-green-50 border border-green-200 rounded-lg p-4 my-6'>
                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IoCheckmark className='text-white text-sm' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-green-900 mb-2'>Akıllı Tercih İçin:</h4>
                    <p className='text-green-800 text-[14px] leading-[20px]'>
                      Bu arada, bu konuda karşılaştırma yapmak gerçekten önemli. İhtiyaçkredisi.com gibi platformlar, bankaların güncel emekli promosyonlarını derleyip sizin için sıralıyor. Hem şartları detaylıca inceleyip hem de size en uygun olanı bulmanızı sağlıyor.
                    </p>
                  </div>
                </div>
              </div>
              
              <p>
                Son bir önemli nokta: vergi. Evet, maalesef bu promosyonların bir kısmı vergiye tabi olabiliyor. Gelir İdaresi Başkanlığı'nın kurallarına göre, belirli bir tutarı aşan hediyeler gelir vergisi kapsamında değerlendirilebiliyor. O yüzden, bankadan promosyon alırken "Vergi kesintisi olacak mı?" diye sormayı unutmayın.
              </p>
              
              <p className='font-medium text-slate-900 text-[16px]'>
                Kısacası, emekli promosyonu göründüğü kadar masum ve basit bir konu değil. Önünüze konan nakitler cezbedici gelebilir, ama arka planda sizi bağlayıcı koşullar ve ek ürün satış taktikleri olabilir. Her zamanki gibi, küçük yazıları okuyun, şartları sorgulayın ve uzun vadeli düşünün. Doğru bankayı seçerseniz, emekli promosyonu gerçekten aylık bütçenize destek olabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='custom-container-1'>
        <div className='mb-[32px]'>
          <h2 className='text-slate-900 font-semibold text-[24px] leading-[30px]'>
            Benzer Promosyonları Keşfedin
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          {relatedPromotions.map((p) => {
            // Get bank URL from banks/index.js for related promotions
            const relatedBankSlug = getBankSlugFromName(p.bankName);
            const { bank: relatedBank } = resolveBankBySlug({ slug: relatedBankSlug });
            const relatedApplyUrl = relatedBank?.bankUrl || p.applyUrl || '#';
            
            return (
              <div key={p.bankSlug} className='w-full'>
                <PromotionCard
                  bankImage={p.bankImage}
                  bankName={p.bankName}
                  title={p.title}
                  shortDescription={p.shortDescription}
                  features={p.features}
                  promotionType='Emekli Promosyonu'
                  rating={p.rating}
                  reviewCount={p.reviewCount}
                  buttonColor={determineButtonColor(p.bankName)}
                  detailsHref={`/promosyon/${p.bankSlug}`}
                  applyHref={relatedApplyUrl}
                  annualFee={p.annualFee}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className='custom-container-1 mt-[80px]'>
        <AdZoneComponent src='/adzone.png' />
      </section>
    </div>
  );
}

export default PromotionDetailPage;

function formatTL(value) {
  if (value === null || value === undefined) return '-';
  if (value === 'Ücretsiz' || value === '0') return 'Ücretsiz';
  const num = Number(value);
  if (Number.isNaN(num)) return String(value);
  return `${num} TL`;
}

// Determine button color based on bank name
function determineButtonColor(bankName) {
  if (!bankName) return 'primary';

  const name = bankName.toLowerCase();
  if (name.includes('garanti')) return 'primary';
  if (name.includes('iş') || name.includes('is')) return 'primary';
  if (name.includes('akbank')) return 'primary';
  if (name.includes('qnb')) return 'purple';
  if (name.includes('ing')) return 'orange';
  if (name.includes('ziraat')) return 'green';
  if (name.includes('halk')) return 'primary';
  if (name.includes('vakıf')) return 'primary';

  return 'primary';
}
