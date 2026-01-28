import React from 'react'
import Link from 'next/link'
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent'
import HeadingComponent from '@/components/common/HeadingComponent'
import CORE from '@/CORE2'
import {
  FiAlertTriangle,
  FiArrowRight,
  FiCheckSquare,
  FiClipboard,
  FiFileText,
  FiInfo,
  FiLock,
  FiShield,
  FiUserCheck,
} from 'react-icons/fi'

export async function generateMetadata() {
  const metadata = CORE['/yasal']
  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: '/yasal',
    },
  }
}

export default function YasalPage() {
  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Yasal' },
  ]

  const contracts = getContracts()

  return (
    <>
      <div className=''>
        <div className='custom-container-1 flex flex-col items-center px-4 pt-[56px]'>
          <div className='w-full flex justify-center items-center text-center'>
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div className='custom-container-1 flex flex-col items-center gap-y-[32px] px-4 pb-[32px]'>
        <div className='w-full max-w-[920px]'>
          <HeadingComponent
            as='h1'
            title='Yasal'
            subtitle='ihtiyackredisi.com’da geçerli sözleşme ve politikaları tek ekranda inceleyin.'
          />
        </div>

        <section aria-label='Yasal' className='w-full max-w-[920px]'>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]'>
            {contracts.map(({ label, href, description, icon: Icon }, index) => (
              <li key={index} className='group'>
                <Link
                  href={href}
                  aria-label={label}
                  className='block h-full rounded-[20px] border border-slate-200 transition-colors duration-300 hover:border-primary/60 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2'
                >
                  <div className='p-[20px] flex flex-col gap-y-[12px] h-full'>
                    <div className='flex items-center justify-between'>
                      <span className='inline-flex items-center justify-center size-[40px] rounded-[12px] bg-slate-100 text-slate-700 group-hover:bg-primary/10 group-hover:text-primary transition-colors'>
                        <Icon />
                      </span>
                      <span className='text-slate-400 group-hover:text-primary transition-colors'>
                        <FiArrowRight />
                      </span>
                    </div>
                    <h3 className='text-[16px] leading-[22px] font-semibold text-slate-900'>
                      {label}
                    </h3>
                    <p className='text-[13px] leading-[18px] text-slate-600'>
                      {description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

function getContracts() {
  return [
    {
      label: 'Kullanım Koşulları',
      href: '/yasal/kullanim-kosullari',
      description:
        'Platformu kullanırken uymanız gereken kurallar ve sorumluluklar.',
      icon: FiFileText,
    },
    {
      label: 'Gizlilik Politikası',
      href: '/yasal/gizlilik-politikasi',
      description:
        'Kişisel verilerinizin toplanması, işlenmesi ve saklanmasına ilişkin esaslar.',
      icon: FiLock,
    },
    {
      label: 'Çekince ve Sorumluluğun Reddi',
      href: '/yasal/sorumluluk-reddi',
      description:
        'Hizmetlerimizin kullanımıyla ilgili sorumluluk sınırlamaları ve yasal uyarılar.',
      icon: FiAlertTriangle,
    },
    {
      label: 'Çerez Açık Rıza Metni',
      href: '/yasal/cerez-acik-riza-metni',
      description:
        'İnternet sitemizdeki çerezlerin kullanımına ilişkin rızanız hakkında bilgilendirme.',
      icon: FiCheckSquare,
    },
    {
      label: 'Çerez Aydınlatma Metni',
      href: '/yasal/cerez-aydinlatma-metni',
      description:
        'Çerez kullanım amaçlarımız ve tercihlerinizi nasıl yönetebileceğiniz.',
      icon: FiInfo,
    },
    {
      label: 'KVKK Ziyaretçi Aydınlatma Metni',
      href: '/yasal/kvkk',
      description:
        'KVKK kapsamındaki haklarınız ve başvuru süreçleri hakkında ziyaretçiler için bilgiler.',
      icon: FiShield,
    },
    {
      label: 'İlgili Kişi Başvuru Formu',
      href: '/yasal/ilgili-kisi-basvuru-formu',
      description:
        'Kişisel verilerinizle ilgili taleplerde bulunmak için kullanabileceğiniz başvuru formu.',
      icon: FiClipboard,
    },
    {
      label: 'Aydınlatma Metni',
      href: '/yasal/aydinlatma-metni',
      description:
        'Veri sorumlusu olarak aydınlatma yükümlülüğümüz ve iletişim kanalları.',
      icon: FiUserCheck,
    },
  ]
}