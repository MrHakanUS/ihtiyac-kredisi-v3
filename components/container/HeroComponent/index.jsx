import React from 'react';
import { AiOutlineBank, AiOutlineStar, AiOutlineForm } from 'react-icons/ai';
import SearchBarComponent from './SearchBarComponent';
import OffersComponent from '../OffersComponent';

const items = [
  { icon: AiOutlineBank, text: `Anında 30'dan Fazla \nBankadan Teklif Alın!` },
  {
    icon: AiOutlineStar,
    text: `Deneyimlerinizi Paylaşın, \nBinlerce Kişiye Işık Olun`,
  },
  {
    icon: AiOutlineForm,
    text: `Saniyeler İçinde \nEn Uygun Krediye Başvurun`,
  },
];

const HeroComponent = () => {
  return (
    <section className='flex flex-col items-center justify-center px-4 py-4 md:py-[74px] gap-y-4 md:gap-y-[74px]'>
      <h1 className='text-[28px] sm:text-[36px] md:text-[48px] leading-tight font-bold mb-[0px] text-center'>
        <span className='text-primary'>En Uygun</span> Kredi Hesaplama
      </h1>

      <SearchBarComponent addClass='!mb-[0px]' defaultCreditType='İhtiyaç Kredisi' />

      <ul className='flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center gap-4 sm:gap-[24px] px-2'>
        {items.map(({ icon: Icon, text }) => {
          return (
            <li
              key={text}
              className='flex items-start sm:items-center gap-3 sm:gap-[20px] max-w-[260px]'
            >
              <span className='text-[24px] text-accent'>
                <Icon />
              </span>
              <span className='font-medium text-[14px] whitespace-pre-line'>{text}</span>
            </li>
          );
        })}
      </ul>

      <OffersComponent addClass='mt-[8px] md:mt-[48px]' />
    </section>
  );
};

export default HeroComponent;
