import React from 'react';
import Image from 'next/image';
import FeaturedButtonComponent from './FeaturedButtonComponent';
import { FaCircleCheck } from 'react-icons/fa6';

function CreditCardVerticalCard({
  bankImage,
  bankName,
  cardType,
  cardImage,
  annualFee,
  shoppingRate,
  features = [],
  tags = [],
  buttonColor = 'primary',
  detailsHref = '#',
  applyHref = '#',
  showCreditCardImage = true,
}) {
  function formatTL(value) {
    if (value === null || value === undefined) return '-';
    const num = Number(value);
    if (Number.isNaN(num)) return String(value);
    return `${num} TL`;
  }

  return (
    <div className='bg-white border border-slate-200 rounded-[20px] p-[20px] hover:border-primary transition-colors duration-300 h-full flex flex-col'>
      <div className='flex items-start justify-between'>
        <div className='flex items-start justify-between'>
          <div className='flex items-start gap-x-[12px]'>
            <div className='h-[28px] w-auto max-w-[140px]'>
              <Image
                src={bankImage}
                alt={bankName}
                width={300}
                height={100}
                className='h-full w-auto'
              />
            </div>
          </div>
          <div className='flex flex-wrap gap-[8px]'>
            {tags.map((text, idx) => (
              <span
                key={text + idx}
                className='px-[10px] py-[4px] rounded-full bg-slate-100 text-slate-700 text-[12px] leading-[14px]'
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {showCreditCardImage && cardImage && (
          <Image
            src={cardImage}
            width={500}
            height={300}
            className='w-[80px] h-auto'
            alt='Kredi Kartı'
          />
        )}
      </div>

      <h3 className='mt-[12px] text-[18px] leading-[22px] font-semibold text-slate-900'>
        {bankName}
      </h3>
      {cardType && (
        <p className='text-slate-600 text-[13px] leading-[16px] mt-[2px]'>
          {cardType}
        </p>
      )}

      <div className='grid grid-cols-2 gap-x-[16px] gap-y-[8px] mt-[16px]'>
        <div className='flex flex-col'>
          <span className='text-slate-600 text-[13px] leading-[16px]'>
            Yıllık Aidat
          </span>
          <span className='text-slate-900 font-semibold text-[16px] leading-[20px]'>
            {formatTL(annualFee)}
          </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-slate-600 text-[13px] leading-[16px]'>
            Alışveriş Faiz Oranı
          </span>
          <span className='text-slate-900 font-semibold text-[16px] leading-[20px]'>
            %{shoppingRate}
          </span>
        </div>
      </div>

      <div className='flex-1 flex flex-col'>
        {features.length > 0 ? (
          <ul className='py-[32px] flex flex-col gap-y-[10px] flex-1'>
            {features.slice(0, 4).map((item, index) => (
              <li key={item + index} className='flex items-start gap-x-[10px]'>
                <span className='text-accent mt-[2px] flex-shrink-0'>
                  <FaCircleCheck />
                </span>
                <span className='text-slate-600 text-[14px] leading-[18px]'>
                  {item}
                </span>
              </li>
            ))}
            {features.length > 4 && (
              <li className='text-slate-500 text-[13px] leading-[16px] mt-[8px]'>
                +{features.length - 4} özellik daha...
              </li>
            )}
          </ul>
        ) : (
          <div className='py-[32px] flex-1 flex items-center justify-center'>
            <p className='text-slate-400 text-[14px] leading-[18px] text-center'>
              Detaylar için kart bilgilerini inceleyin
            </p>
          </div>
        )}
      </div>

      <div className='flex items-center justify-between gap-x-[12px] mt-auto'>
        <FeaturedButtonComponent
          text='Detayları Gör'
          type='light'
          href={detailsHref}
          addClass='bg-white w-1/2'
        />
        <FeaturedButtonComponent
          text='Hemen Başvur'
          buttonColor={'primary'}
          href={applyHref}
          target='_blank'
          rel='noopener noreferrer nofollow'
        />
      </div>
    </div>
  );
}

export default CreditCardVerticalCard;
