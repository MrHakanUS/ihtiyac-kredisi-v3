import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AdZoneComponent = ({ src, url = '#' }) => {
  return null;
  return (
    <aside className='w-full flex items-center justify-center h-fit'>
      <Link
        href={url}
        target='_blank'
        rel='noopener noreferrer nofollow'
        aria-label='Reklam alanı'
        className='w-full h-[128px] border hover:border-primary transition-all duration-300 border-transparent rounded-[24px] relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'
      >
        <Image
          src={src}
          alt='Reklam Alanı'
          width={1200}
          height={128}
          sizes='(min-width: 1024px) 1200px, 100vw'
          loading='lazy'
          className='size-full object-cover select-none'
          draggable={false}
        />
      </Link>
    </aside>
  );
};

export default AdZoneComponent;
