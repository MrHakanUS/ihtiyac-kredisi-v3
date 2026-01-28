import Image from 'next/image';
import React from 'react';
import FeaturedButtonComponent from './FeaturedButtonComponent';
import SingleStarComponent from './SingleStarComponent';

const OfferCardComponent = ({ logoSrc, rating = '4,6', items = [], detailsHref = '#', detailsTarget = '_self', applyHref = '#', applyTarget = '_self' }) => {
  return (
    <div className='rounded-[24px] border hover:border-primary transition-all duration-300 border-slate-200 bg-white h-auto md:min-h-[327px] p-[16px] sm:p-[20px] md:p-[24px] w-full'>
      <div className='flex items-center justify-between gap-[12px] border-b border-b-slate-200 pb-[16px] sm:pb-[20px] md:pb-[24px] mb-[16px] sm:mb-[20px] md:mb-[24px]'>
        <Image
          draggable={false}
          src={logoSrc}
          alt='offer-card'
          width={300}
          height={100}
          className='h-[28px] sm:h-[32px] md:h-[36px] w-auto max-w-[160px]'
        />

        <SingleStarComponent rating={rating} />
      </div>

      <ul className='flex flex-col gap-[12px] sm:gap-[16px] md:gap-[20px] pb-[16px] sm:pb-[20px] md:pb-[24px] mb-[16px] sm:mb-[20px] md:mb-[24px] border-b border-b-slate-200'>
        {items.map(({ label, value }, index) => {
          return (
            <li
              key={label + index}
              className='w-full flex items-center justify-between gap-[12px]'
            >
              <span className='text-slate-600 text-[13px] leading-[18px] sm:text-[14px]'>
                {label}
              </span>
              <span className='font-semibold text-[15px] leading-[20px] sm:text-[16px]'>
                {value}
              </span>
            </li>
          );
        })}
      </ul>

      <div className='flex flex-wrap flex-col sm:flex-row items-stretch sm:items-center gap-[12px] justify-between lg:justify-center'>
        <FeaturedButtonComponent type='light' href={detailsHref} target={detailsTarget} text='Kredi Detayları' addClass='w-full sm:w-auto justify-center' />
        <FeaturedButtonComponent text='Hemen Başvur' href={applyHref} target={applyTarget} addClass='w-full sm:w-auto justify-center' />
      </div>
    </div>
  );
};

export default OfferCardComponent;
