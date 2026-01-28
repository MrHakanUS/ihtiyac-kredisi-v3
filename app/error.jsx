'use client'

import { useEffect } from 'react'
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent'
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent'
import SearchBarComponent from '@/components/container/HeroComponent/SearchBarComponent'
import { IoAlertCircleOutline } from 'react-icons/io5'
import FooterComponent from '@/components/container/FooterComponent'
import HeaderComponent from '@/components/container/HeaderComponent'

export default function Error({ error, reset }) {
  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Bir Hata Oluştu' },
  ]

  useEffect(() => {
    // Set document metadata client-side (error.jsx must be a client component)
    document.title = 'Bir Hata Oluştu | ihtiyackredisi.com'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönerek kredi hesaplama ve en uygun kredi tekliflerini incelemeye devam edin.')
    }
    
    const metaRobots = document.querySelector('meta[name="robots"]')
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, follow')
    }
  }, [])

  useEffect(() => {
    if (!error) return
    // You can replace this with a logging service
    console.error('App error boundary caught an error:', error)
  }, [error])

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
                    Bir Hata Oluştu
                  </h1>
                  <p className='text-slate-600 text-[15px] leading-[24px] md:text-[16px] md:leading-[26px] max-w-[680px]'>
                    Beklenmeyen bir hata nedeniyle sayfa görüntülenemedi. Lütfen tekrar deneyin
                    veya ana sayfaya dönerek aramanızı sürdürün.
                  </p>
                </div>

                <div className='mt-6 grid grid-cols-1 place-items-center sm:flex sm:items-center sm:justify-center gap-3 flex-wrap'>
                  <button
                    type='button'
                    onClick={() => reset()}
                    className='inline-flex w-auto items-center justify-center rounded-[12px] bg-slate-900 text-white px-5 py-2.5 text-[15px] leading-[24px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400'
                  >
                    Tekrar Dene
                  </button>
                  <FeaturedButtonComponent text='Ana Sayfa' href='/' />
                </div>

                {error?.message ? (
                  <div className='mt-4'>
                    <p className='text-slate-500 text-[13px] leading-[20px]'>
                      Hata mesajı: <span className='font-mono break-all'>{String(error.message)}</span>
                    </p>
                  </div>
                ) : null}

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
  )
}


