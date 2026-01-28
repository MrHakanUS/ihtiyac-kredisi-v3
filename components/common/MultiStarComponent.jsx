import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const MultiStarComponent = ({ stars = 0 }) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className='border border-slate-200 rounded-[24px] bg-slate-50 px-[16px] py-[8px] flex items-center gap-[12px] w-fit'>
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={`full-${index}`} className='text-amber-500' />
      ))}
      {hasHalfStar && <FaStarHalfAlt key='half' className='text-amber-500' />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={`empty-${index}`} className='text-amber-500' />
      ))}

      <span className='font-medium text-[14px] leading-[20px] select-none'>
        {stars.toString().replace('.', ',')}
      </span>
    </div>
  );
};

export default MultiStarComponent;
