import React from 'react'
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent'
import FaqComponent from '@/components/container/FaqComponent'
import AdZoneComponent from '@/components/common/AdZoneComponent'
import CORE from '@/CORE2'

export async function generateMetadata() {
  const metadata = CORE['/sikca-sorulan-sorular']
  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: '/sikca-sorulan-sorular',
    },
  }
}

const FaqPage = () => {
  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Sıkça Sorulan Sorular' }
  ]

  return (
    <main>
      <div className=''>
        <div className='custom-container-1 flex flex-col items-center px-4 pt-[56px]'>
          <div className='max-w-[920px] w-full flex justify-center items-center text-center'>
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div className='custom-container-1 flex flex-col items-center gap-y-[24px] py-8'>
        <div className='max-w-[920px] w-full'>
          <FaqComponent />
        </div>

        <div className='max-w-[920px] w-full'>
          <AdZoneComponent src='/adzone.png' />
        </div>
      </div>
    </main>
  )
}

export default FaqPage