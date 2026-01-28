import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FeaturedButtonComponent from './FeaturedButtonComponent'
import MultiStarComponent from './MultiStarComponent'

function PromotionCard({
  bankImage,
  bankName,
  title,
  shortDescription,
  features = [],
  promotionType = 'Emekli Promosyonu',
  rating = '4.5',
  reviewCount = '0',
  buttonColor = 'primary',
  detailsHref = '#',
  applyHref = '#',
  annualFee = 'Ücretsiz',
  className = ''
}) {
  const displayFeatures = features.slice(0, 3)

  return (
    <div className={`bg-white border border-slate-200 rounded-[24px] p-[20px] h-full flex flex-col ${className}`}>
      {/* Header with Bank Logo */}
      <div className='flex flex-col items-start justify-between mb-[16px] gap-[16px]'>
        <div className='flex flex-col items-start gap-[12px]'>
            <Image
              src={bankImage}
              alt={bankName}
              width={300}
              height={100}
              className='h-[48px] w-auto rounded-lg'
              draggable={false}
            />
          <div>
            <h3 className='font-semibold text-[16px] leading-[20px] text-slate-900 line-clamp-1'>
              {title}
            </h3>
            <p className='text-[12px] leading-[16px] text-slate-600 mt-[2px]'>
              {bankName}
            </p>
          </div>
        </div>
        
        {/* Promotion Type Badge */}
        <div className='bg-accent/10 text-accent px-[8px] py-[4px] rounded-[12px] text-[11px] font-medium'>
          {promotionType}
        </div>
      </div>

      {/* Short Description */}
      <p className='text-slate-600 text-[14px] leading-[18px] mb-[16px] line-clamp-2'>
        {shortDescription}
      </p>
      
      {/* Features */}
      <div className='mb-[20px] flex-1'>
        <h4 className='text-slate-900 font-medium text-[14px] leading-[18px] mb-[8px]'>
          Promosyon Avantajları:
        </h4>
        <ul className='space-y-[6px]'>
          {displayFeatures.map((feature, index) => (
            <li key={index} className='flex items-start gap-[8px] text-[13px] leading-[16px] text-slate-700'>
              <span className='text-accent mt-[2px] text-[10px]'>●</span>
              <span className='line-clamp-2'>{feature}</span>
            </li>
          ))}
          {features.length > 3 && (
            <li className='text-[12px] text-accent font-medium'>
              +{features.length - 3} avantaj daha...
            </li>
          )}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className='flex items-center justify-between gap-x-[12px] mt-auto'>
        <FeaturedButtonComponent
          text='Detayları Gör'
          type='light'
          href={detailsHref}
          addClass='bg-white w-1/2'
        />
        <FeaturedButtonComponent
          text='Hemen Başvur'
          rel='noopener noreferrer nofollow'
          buttonColor='primary'
          href={applyHref}
          target='_blank'
          addClass='w-1/2'
        />
      </div>
    </div>
  )
}

export default PromotionCard
