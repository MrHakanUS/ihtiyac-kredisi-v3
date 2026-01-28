import Link from 'next/link';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import SearchBarComponent from '@/components/container/HeroComponent/SearchBarComponent';
import { IoAlertCircleOutline } from 'react-icons/io5';
import FooterComponent from '@/components/container/FooterComponent';
import HeaderComponent from '@/components/container/HeaderComponent';

export const metadata = {
  title: '404 - Sayfa Bulunamadı | ihtiyackredisi.com',
  description: 'Aradığınız sayfa bulunamadı veya taşınmış olabilir. Kredi hesaplama, faiz oranları ve en uygun kredi teklifleri için ana sayfamızı ziyaret edebilirsiniz.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Sayfa Bulunamadı' },
  ];

  return (
    <>
      <HeaderComponent />
      <main>
        <section className='bg-slate-50 min-h-[70vh] py-[56px]'>
          <div className='custom-container-1 px-4 pt-[40px]'>
            <div className='max-w-[920px] w-full mx-auto text-center'>
              <BreadcrumbComponent items={breadcrumbItems} />
              <div className='bg-white border border-slate-200 rounded-[20px] p-[24px] sm:p-[32px] md:p-[40px]'>
                <div className='flex flex-col items-center gap-4' role='status' aria-live='polite'>
                  <span className='text-accent text-[44px] md:text-[56px]'>
                    <IoAlertCircleOutline />
                  </span>
                  <h1 className='text-slate-900 text-[28px] leading-[32px] md:text-[32px] md:leading-[36px] font-semibold'>
                    Sayfa Bulunamadı
                  </h1>
                  <p className='text-slate-600 text-[15px] leading-[24px] md:text-[16px] md:leading-[26px] max-w-[680px]'>
                    Aradığınız sayfa taşınmış, silinmiş veya geçici olarak
                    kullanılamıyor olabilir. Ana sayfaya dönebilir ya da kredi
                    arama ile ihtiyacınıza uygun teklifleri keşfedebilirsiniz.
                  </p>
                </div>

                <div className='mt-6 grid grid-cols-1 place-items-center sm:flex sm:items-center sm:justify-center gap-3 flex-wrap'>
                  <FeaturedButtonComponent text='Ana Sayfa' href='/' />
                  <FeaturedButtonComponent
                    text='Kredi Arama'
                    type='light'
                    href='/kredi-arama'
                  />
                </div>

                <div className='mt-8'>
                  <SearchBarComponent addClass='mb-0' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
