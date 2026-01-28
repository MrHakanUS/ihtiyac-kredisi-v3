'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';

const TeamMemberCard = ({ 
  name, 
  role, 
  description, 
  image, 
  linkedinUrl, 
  behanceUrl,
  email,
  linkedinProfileImageUrl // LinkedIn profil fotoğrafının direkt URL'i (manuel olarak sağlanmalı)
}) => {
  // Önce manuel image, sonra linkedinProfileImageUrl, en son baş harf placeholder
  const displayImage = image || linkedinProfileImageUrl || null;
  return (
    <div className='rounded-[24px] border border-slate-200 bg-white hover:border-primary transition-all duration-300 h-auto p-[16px] sm:p-[20px] md:p-[24px] w-full flex flex-col'>
      {/* Profile Image Section */}
      <div className='flex items-center gap-[16px] sm:gap-[20px] md:gap-[24px] pb-[16px] sm:pb-[20px] md:pb-[24px] mb-[16px] sm:mb-[20px] md:mb-[24px] border-b border-slate-200'>
        <div className='relative shrink-0'>
          <div className='w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden border-2 border-slate-100'>
            {displayImage ? (
              <Image
                src={displayImage}
                alt={name}
                width={80}
                height={80}
                className='w-full h-full object-cover'
                draggable={false}
                unoptimized={displayImage?.includes('media.licdn.com')} // LinkedIn CDN için unoptimized
              />
            ) : (
              <div className='w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center'>
                <span className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-slate-400'>
                  {name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Name and Role */}
        <div className='flex flex-col gap-[4px] min-w-0 flex-1'>
          <h3 className='font-semibold text-[15px] leading-[20px] sm:text-[16px] text-slate-900 truncate'>
            {name}
          </h3>
          <span className='text-slate-600 text-[13px] leading-[18px] sm:text-[14px]'>
            {role}
          </span>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className='flex-1 mb-[16px] sm:mb-[20px] md:mb-[24px]'>
          <p className='text-slate-600 text-[13px] leading-[18px] sm:text-[14px] line-clamp-3'>
            {description}
          </p>
        </div>
      )}

      {/* Social Links */}
      {(linkedinUrl || behanceUrl || email) && (
        <div className='flex items-center gap-[8px] pt-[16px] sm:pt-[20px] md:pt-[24px] border-t border-slate-200 mt-auto'>
          {linkedinUrl && (
            <Link
              href={linkedinUrl}
              target='_blank'
              rel='noopener noreferrer nofollow'
              className='w-[36px] h-[36px] rounded-full bg-slate-50 hover:bg-primary hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 shrink-0'
              aria-label={`${name} LinkedIn profili`}
            >
              <FiLinkedin className='text-[16px] sm:text-[18px]' />
            </Link>
          )}
          {behanceUrl && (
            <Link
              href={behanceUrl}
              target='_blank'
              rel='noopener noreferrer nofollow'
              className='w-[36px] h-[36px] rounded-full bg-slate-50 hover:bg-primary hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 shrink-0'
              aria-label={`${name} Behance profili`}
            >
              <FaBehance className='text-[16px] sm:text-[18px]' />
            </Link>
          )}
          {email && (
            <Link
              href={`mailto:${email}`}
              className='w-[36px] h-[36px] rounded-full bg-slate-50 hover:bg-accent hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 shrink-0'
              aria-label={`${name} e-posta gönder`}
            >
              <FiMail className='text-[16px] sm:text-[18px]' />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;