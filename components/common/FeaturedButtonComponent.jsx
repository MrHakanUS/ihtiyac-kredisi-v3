import React from 'react';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

const FeaturedButtonComponent = ({
  icon,
  text,
  type = 'default',
  className = '',
  href,
  buttonColor = 'primary',
  addClass = '',
  onClick,
  target = '_self',
  check = false,
  rel = '',
}) => {
  const isLight = type === 'light';
  const isLink = Boolean(href);
  const widthClass = addClass.includes('w-full') ? 'w-full' : 'w-fit';
  const baseClasses = `${widthClass} rounded-[49px] ${className} px-[16px] py-[8px] flex items-center select-none cursor-pointer transition-all duration-300 text-center border`;
  const outerGapClass = check ? 'gap-[12px]' : '';

  const getColorClasses = () => {
    if (isLight) {
      return 'bg-slate-50 text-slate-600 border-transparent hover:border-primary hover:text-primary';
    }

    switch (buttonColor) {
      case 'accent':
        return 'bg-accent text-white border-transparent hover:brightness-125';
      case 'green':
        return 'bg-emerald-500 text-white border-transparent hover:bg-emerald-500/80';
      case 'red':
        return 'bg-red-500 text-white border-transparent hover:bg-red-500/80';
      case 'primary':
      default:
        return 'bg-primary text-white border-transparent hover:brightness-125';
    }
  };

  const colorClasses = getColorClasses();

  const content = (
    <>
      {check && (
        <span className='text-[18px]'>
          <FiCheck />
        </span>
      )}
      <span className='flex items-center gap-[10px]'>
        {icon && <span className='text-[18px]'>{icon}</span>}
        <span className='whitespace-nowrap'>{text}</span>
      </span>
    </>
  );

  if (isLink) {
    return (
      <Link
        href={href}
        className={`${colorClasses} ${baseClasses} ${outerGapClass} ${addClass}`}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer nofollow' : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={`${colorClasses} ${baseClasses} ${outerGapClass} ${addClass}`}
      onClick={onClick}
      role='button'
      tabIndex={0}
    >
      {content}
    </div>
  );
};

export default FeaturedButtonComponent;
