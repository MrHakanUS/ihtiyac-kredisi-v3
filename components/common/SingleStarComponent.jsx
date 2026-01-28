import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';

const SingleStarComponent = ({ rating, addClass='' }) => {
  return (
    <div className={`border rounded-[24px] border-slate-200 px-[12px] py-[8px] flex items-center gap-x-[12px] bg-slate-50 ${addClass}`}>
      <span className='text-amber-500'>
        <FaStarHalfAlt />
      </span>
      <span className='font-medium text-[14px] leading-[18px] select-none'>
        {rating}
      </span>
    </div>
  );
};

export default SingleStarComponent;
