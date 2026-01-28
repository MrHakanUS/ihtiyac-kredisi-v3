import React from 'react'
import Image from 'next/image'
import FeaturedButtonComponent from './FeaturedButtonComponent'
import { FaCircleCheck } from 'react-icons/fa6'
import SingleStarComponent from './SingleStarComponent'

function CreditCardOfferCard({
  bankImage,
  bankName,
  metrics,
  features = [],
  rating,
  reviewCount,
  reviewBankName,
  buttonColor = 'primary',
  cardBackground = 'white',
  detailsHref = '#',
  applyHref = '#'
}) {
  function getBackgroundClass() {
    switch (cardBackground) {
      case 'emerald':
        return 'bg-emerald-50'
      case 'pink':
        return 'bg-pink-50'
      case 'slate':
        return 'bg-slate-50'
      default:
        return 'bg-white'
    }
  }

  return (
    <div className={`hover:border-primary transition-all duration-300 ${getBackgroundClass()} border border-slate-200 rounded-[24px] px-[24px] py-[20px]`}> 
      <div className='flex items-center justify-between border-b border-slate-200 pb-[20px] w-full'>
        <div className='h-[40px] w-auto max-w-[160px]'>
          <Image src={bankImage} alt={bankName} width={300} height={100} className='h-full w-auto' />
        </div>
        <ul className='flex items-center justify-between w-6/12 gap-x-[16px]'>
          {metrics.map((m, index) => (
            <li key={m.label + index} className='flex flex-col items-center gap-y-[6px]'>
              <span className='text-slate-600 text-[13px] leading-[18px]'>{m.label}</span>
              <span className='font-bold text-slate-900 text-[16px] leading-[20px]'>{m.value}</span>
            </li>
          ))}
        </ul>
        <div className='w-3/12 flex items-center justify-end gap-x-[8px]'>
          <FeaturedButtonComponent text='Detayları Gör' type='light' href={detailsHref} addClass='bg-white' />
          <FeaturedButtonComponent text='Hemen Başvur' buttonColor={buttonColor} href={applyHref} />
        </div>
      </div>

      {features.length > 0 && (
        <ul className='flex flex-col py-[20px] border-b border-slate-200 gap-y-[12px]'>
          {features.map((text, idx) => (
            <li key={text + idx} className='flex items-center gap-x-[10px]'>
              <span className='text-accent'>
                <FaCircleCheck />
              </span>
              <span className='text-slate-600 text-[14px] leading-[18px] font-medium'>{text}</span>
            </li>
          ))}
        </ul>
      )}

      <div className='flex items-center justify-between pt-[20px]'>
        <div className='flex items-center gap-x-[12px]'>
          <SingleStarComponent rating={rating} addClass='bg-white' />
          <p className='text-slate-600 text-[14px] leading-[18px]'>
            {reviewCount} kişi <span className='text-primary font-semibold'>{reviewBankName}</span> hakkında yorum yazdı
          </p>
        </div>
        <FeaturedButtonComponent text='Hemen Başvur' buttonColor={buttonColor} href={applyHref} />
      </div>
    </div>
  )
}

export default CreditCardOfferCard


