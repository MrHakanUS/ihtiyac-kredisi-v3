import React from 'react';
import FeaturedButtonComponent from './FeaturedButtonComponent';
import Image from 'next/image';
import { FaCircleCheck } from 'react-icons/fa6';
import SingleStarComponent from './SingleStarComponent';

const SearchCardComponent = ({ 
  bankImage, 
  bankName, 
  interestRate, 
  monthlyPayment, 
  totalPayment, 
  features, 
  rating, 
  reviewCount, 
  reviewBankName,
  buttonColor = 'primary',
  cardBackground = 'white',
  detailsHref = '#',
  detailsTarget = '_self'
}) => {
  const searchLabels = [
    {
      label: 'Faiz Oranı',
      value: interestRate,
    },
    {
      label: 'Aylık Ödeme',
      value: monthlyPayment,
    },
    {
      label: 'Toplam Ödeme',
      value: totalPayment,
    },
  ];

  const getBackgroundClass = () => {
    switch (cardBackground) {
      case 'emerald':
        return 'bg-emerald-50';
      case 'pink':
        return 'bg-pink-50';
      case 'white':
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`hover:border-primary transition-all duration-300 ${getBackgroundClass()} border border-slate-200 rounded-[24px] px-[32px] py-[20px]`}>
      <div className='flex items-center justify-between border-b border-slate-200 pb-[24px] w-full'>
        <div className='h-[48px] w-auto max-w-[160px]'>
          <Image
            src={bankImage}
            alt={bankName}
            width={300}
            height={100}
            className='size-full'
          />
        </div>
        <ul className='flex items-center justify-between w-6/12 gap-x-[16px]'>
          {searchLabels.map(({ label, value }, index) => {
            return (
              <li
                key={label + index}
                className='flex flex-col items-center gap-y-[8px]'
              >
                <span className='text-slate-600 text-[14px] leading-[18px]'>
                  {label}
                </span>
                <span className='font-bold text-slate-900 text-[16px] leading-[20px]'>
                  {value}
                </span>
              </li>
            );
          })}
        </ul>
        <div className='w-3/12 flex justify-end'>
          <FeaturedButtonComponent text='Hemen Başvur' buttonColor={buttonColor} />
        </div>
      </div>
      {features && features.length > 0 && (
        <ul className='flex flex-col py-[24px] border-b border-slate-200 gap-y-[16px]'>
          {features.map((item, index) => {
            return (
              <li key={item + index} className='flex items-center gap-x-[12px]'>
                <span className='text-accent'>
                  <FaCircleCheck />
                </span>
                <span className='text-slate-600 text-[14px] leading-[18px] font-medium'>
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      )}
      <div className='flex items-center justify-between pt-[24px]'>
        <div className='flex items-center gap-x-[16px]'>
          <SingleStarComponent rating={rating} addClass='bg-white' />
          <p className='text-slate-600 text-[14px] leading-[18px]'>{reviewCount} kişi <span className='text-primary font-semibold'>{reviewBankName}</span> hakkında yorum yazdı</p>
        </div>
        <FeaturedButtonComponent text='Kredi Detayları' type='light' href={detailsHref} target={detailsTarget} addClass='bg-white' />
      </div>
    </div>
  );
};

export default SearchCardComponent;
