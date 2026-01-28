import React from 'react';

const BadgeComponent = ({ badge = 'high' }) => {
  if (badge === 'none') return null;
  
  const getBadgeConfig = () => {
    switch (badge) {
      case 'state':
        return {
          text: 'Kamu',
          className: 'bg-slate-100 text-slate-700 border border-slate-200'
        };
      case 'sponsor':
        return {
          text: 'Sponsor',
          className: 'bg-amber-50 text-amber-700 border border-amber-200'
        };
      case 'high':
        return {
          text: 'Öne çıkan',
          className: 'bg-lime-50 text-lime-700 border border-lime-200'
        };
      default:
        return {
          text: 'Yüksek Puanlı',
          className: 'text-green-500 bg-green-100'
        };
    }
  };
  
  const { text, className } = getBadgeConfig();
  
  return (
    <span className={`inline-flex items-center h-[22px] px-[8px] rounded-[999px] text-[12px] leading-[16px] ${className}`}>
      {text}
    </span>
  );
};

export default BadgeComponent;
