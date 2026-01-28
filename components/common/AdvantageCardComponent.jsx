'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import FeaturedButtonComponent from './FeaturedButtonComponent';
import MultiStarComponent from './MultiStarComponent';
import BadgeComponent from './BadgeComponent';
import Link from 'next/link';
import { GrFormNextLink } from 'react-icons/gr';
import ModalComponent from './ModalComponent';
import ReviewsModalContent from './ReviewsModalContent';

const AdvantageCardComponent = ({
  items = [],
  logoSrc,
  stars = 0,
  title = '',
  color = '#FF6900',
  badge = 'none',
  applyHref,
  applyTarget = '_self',
  detailsHref,
  detailsTarget = '_self',
  reviewsData = null,
  reviewsCount: reviewsCountProp,
  featuredReviewIndex = 0,
}) => {
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);
  const reviewsCount = typeof reviewsCountProp === 'number' ? reviewsCountProp : (reviewsData?.userReviews?.length || 0)
  const effectiveStars = reviewsData?.overallRating ? Math.max(1, Math.min(5, reviewsData.overallRating)) : stars
  const overallRatingValue = typeof reviewsData?.overallRating === 'number' ? reviewsData.overallRating : null
  return (
    <div className='bg-white border border-slate-200 rounded-[24px] px-[16px] py-[16px] sm:px-[24px] sm:py-[20px] md:px-[32px] md:py-[24px] w-full hover:border-primary transition-all duration-300'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full lg:justify-between gap-y-[16px] lg:gap-y-0 pb-[16px] lg:pb-[24px] mb-[16px] lg:mb-[24px] border-b border-b-slate-200'>
        <div className='w-full lg:w-[160px] flex flex-col items-center gap-y-[12px]'>
          <Image
            src={logoSrc}
            alt={title}
            width={300}
            height={100}
            className='h-[36px] sm:h-[40px] lg:h-full w-auto max-w-[160px]'
          />
          {badge !== 'none' && (
            <>
              <BadgeComponent badge={badge} />
            </>
          )}
        </div>

        <ul className='grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:items-center gap-x-[16px] gap-y-[12px] lg:gap-y-[12px] lg:px-[24px] w-full lg:flex-1'>
          {items.map(({ label, value }, index) => (
            <li
              key={index}
              className='flex flex-col items-start gap-y-[6px] lg:gap-y-[8px] w-full lg:min-w-[140px] lg:flex-1'
            >
              <span className='text-slate-600 text-[13px] leading-[18px] sm:text-[14px]'>
                {label}
              </span>
              <span className='text-slate-900 text-[15px] leading-[20px] sm:text-[16px] font-bold'>
                {value}
              </span>
            </li>
          ))}
        </ul>

        <div className='w-full lg:w-auto shrink-0'>
          <FeaturedButtonComponent text='Hemen Başvur' href={applyHref} target={applyTarget} addClass='w-full justify-center lg:w-auto max-w-full' />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-y-[12px]'>
        <div className='flex items-center gap-[12px] lg:gap-[16px] w-full lg:w-[70%] flex-wrap sm:flex-nowrap'>
          <MultiStarComponent stars={effectiveStars} />
          {overallRatingValue !== null && (
            <span className='inline-flex items-center justify-center rounded-full bg-emerald-500 text-white text-[12px] leading-[16px] font-bold px-[8px] py-[2px]'>
              {overallRatingValue.toFixed(1).replace('.', ',')}
            </span>
          )}
          <div className='w-full text-[16px] sm:text-[14px] leading-[18px] text-slate-600 flex items-center gap-x-[4px] flex-wrap'>
            {reviewsCount}{' kişi'}
            <span style={{ color: color }} className='font-semibold'>
              {title}
            </span>{' '}
            hakkında{' '}
            <button 
              onClick={() => setIsReviewsModalOpen(true)}
              className='font-bold text-accent hover:text-primary transition-all duration-300 ease-in-out flex items-center group cursor-pointer'>
              <span>yorum yazdı</span>
              <span className='text-[20px] group-hover:-rotate-45 transition-all duration-300 ease-in-out'>
                <GrFormNextLink />
              </span>
            </button>
          </div>
        </div>

        <div className='w-full lg:w-auto'>
          <FeaturedButtonComponent text='Kredi Detayları' type='light' href={detailsHref} target={detailsTarget} addClass='w-full justify-center lg:w-auto max-w-full' />
        </div>
      </div>

      

      {/* Reviews Modal */}
      <ModalComponent
        isOpen={isReviewsModalOpen}
        onClose={() => setIsReviewsModalOpen(false)}
        size='custom'
        showCloseButton={true}
        contentClassName=''
        className='!p-8'
      >
        <ReviewsModalContent 
          title={title}
          overallRating={reviewsData?.overallRating}
          overallRatings={reviewsData?.overallRatings}
          userReviews={reviewsData?.userReviews}
        />
      </ModalComponent>
    </div>
  );
};

export default AdvantageCardComponent;
