import React from 'react'
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent'
import { legal } from '@/constants/yasal'
import CORE from '@/CORE2'

export async function generateMetadata({ params }) {
  const { slug } = params || {}
  const key = `/yasal/${slug}`
  const metadata = CORE[key]
  
  if (metadata) {
    return {
      title: metadata.title,
      description: metadata.desc,
      alternates: {
        canonical: `/yasal/${slug}`,
      },
    }
  }
  
  // Fallback to existing logic
  const title = getTitleFromSlug(slug)
  const content = getContentFromSlug(slug)
  return {
    title: `${title} | ihtiyackredisi.com`,
    description: getMetaDescription(content) || `${title} hakkında bilgiler`,
    alternates: {
      canonical: `/yasal/${slug}`,
    },
  }
}

export default function ContractsPage({ params }) {
  const { slug } = params || {}
  const title = getTitleFromSlug(slug)
  const content = getContentFromSlug(slug)

  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Yasal', href: '/yasal' },
    { label: title },
  ]

  return (
    <>
      <div className=''>
        <div className='custom-container-1 flex flex-col items-center px-4 pt-[56px]'>
          <div className='w-full flex justify-start items-center text-center'>
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div className='custom-container-1 flex flex-col gap-y-[24px] px-4'>
        <header className='w-full mx-auto'>
          <div className='relative overflow-hidden'>
            <div className='absolute inset-0 pointer-events-none' />
            <h1 className='relative font-semibold text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] text-slate-900 mb-[80px]'>
              {title}
            </h1>
          </div>
        </header>

        <article className='w-full mx-auto'>
          <div className='prose prose-slate max-w-none flex flex-col gap-y-[48px]'>
            <div className='text-[14px] leading-[22px] text-slate-700 whitespace-pre-wrap'>
              {content}
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

function getTitleFromSlug(slug) {
  const map = {
    'aydinlatma-metni': 'Aydınlatma Metni',
    'cerez-acik-riza-metni': 'Çerez Açık Rıza Metni',
    'cerez-aydinlatma-metni': 'Çerez Aydınlatma Metni',
    'gizlilik-politikasi': 'Gizlilik Politikası',
    'ilgili-kisi-basvuru-formu': 'İlgili Kişi Başvuru Formu',
    'kisisel-verilerin-korunmasi-kanunu':
      'Kişisel Verilerin Korunması (KVKK)',
    'kullanim-kosullari': 'Kullanım Koşulları',
    'kvkk': 'KVKK Ziyaretçi Aydınlatma Metni',
    'sorumluluk-reddi': 'Çekince ve Sorumluluğun Reddi',
  }
  return map[slug] || 'Yasal'
}

function getContentFromSlug(slug) {
  const map = {
    'aydinlatma-metni': legal.aydinlatmaMetni,
    'cerez-acik-riza-metni': legal.cerezAcikRizaMetni,
    'cerez-aydinlatma-metni': legal.cerezAydinlatmaMetni,
    'gizlilik-politikasi': legal.gizlilikPolitikasi,
    'ilgili-kisi-basvuru-formu': legal.ilgiliKisiBasvuruFormu,
    'kisisel-verilerin-korunmasi-kanunu': legal.kvkk,
    'kullanim-kosullari': legal.kullanimKosullari,
    'kvkk': legal.kvkk,
    'sorumluluk-reddi': legal.sorumlulukReddi,
  }
  return map[slug] || ''
}

function getMetaDescription(text) {
  if (!text) return ''
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= 160) return normalized
  return normalized.slice(0, 157) + '...'
}