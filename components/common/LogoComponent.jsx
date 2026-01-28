import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function LogoComponent({
  src = '/logo.png',
  type = 'link',
  href = '/',
  className = '',
}) {
  const wrapperClass = `w-fit shrink-0 hover:brightness-125 transition-all duration-300 ${className}`;

  if (type === 'div')
    return (
      <div className={`${wrapperClass} select-none`}>
        <Image
          src={src}
          alt='İhtiyaç Kredisi'
          width={200}
          height={50}
          className='h-[50px] w-auto object-contain'
        />
      </div>
    );

  return (
    <Link href={href} className={`${wrapperClass} select-none`}>
      <Image
        src={src}
        alt='İhtiyaç Kredisi'
        width={200}
        height={50}
        className='h-[45px] w-auto object-contain'
      />
    </Link>
  );
}

export default LogoComponent;
