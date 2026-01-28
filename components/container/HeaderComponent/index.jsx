'use client';

import LogoComponent from '@/components/common/LogoComponent';
import React, { useState } from 'react';
import Link from 'next/link';
import { PiMoney } from 'react-icons/pi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineCar } from 'react-icons/ai';
import { PiCreditCard } from 'react-icons/pi';
import { HiOutlineChartBar } from 'react-icons/hi2';
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import { TbLogin } from 'react-icons/tb';
import { TbPercentage } from 'react-icons/tb';
import { TfiGift } from 'react-icons/tfi';
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import AuthButton from '@/components/common/AuthButton';
import { useSession } from 'next-auth/react';
import { useAuth } from '@/hooks/useAuth';

const navItems = [
  { label: 'Faizsiz Kredi', href: '/faizsiz-kredi', Icon: TbPercentage },
  { label: 'İhtiyaç Kredisi', href: '/ihtiyac-kredisi', Icon: PiMoney },
  { label: 'Konut Kredisi', href: '/konut-kredisi', Icon: AiOutlineHome },
  { label: 'Taşıt Kredisi', href: '/tasit-kredisi', Icon: AiOutlineCar },
  { label: 'Kredi Kartı', href: '/kredi-karti', Icon: PiCreditCard },
  { label: 'Promosyon', href: '/promosyon', Icon: TfiGift },
  { label: 'Mevduat Faizi', href: '/mevduat-faizi', Icon: HiOutlineChartBar },
  { label: 'Tasarruf Finansman', href: '/tasarruf-finansman', Icon: HiOutlineBuildingOffice },
];

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const { logout } = useAuth();
  
  // Don't render mobile menu user section while session is loading
  const isSessionLoading = status === 'loading';
  return (
    <>
      {/* <aside className='bg-slate-500 text-white font-bold font-base leading-[19px] py-[18px] flex items-center justify-center'>
        <div className='custom-container-1 text-center'>Reklam Alanı</div>
      </aside> */}

      <header className='sticky top-0 z-50 py-[14px] bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50'>
        <div className='custom-container-1 flex items-center justify-between max-w-[1400px] mx-auto px-4' style={{ maxWidth: '1400px' }}>
          <LogoComponent />

          <nav className='hidden min-[1200px]:flex min-[1200px]:flex-1 min-[1200px]:min-w-0 min-[1200px]:justify-center'>
            <ul className='flex items-center text-accent flex-nowrap justify-center gap-1'>
              {navItems.map(({ label, href, Icon }) => {
                const interestFree = label === 'Faizsiz Kredi';

                return (
                  <li
                    key={label}
                    className='hover:bg-slate-200/50 rounded-[8px] flex items-center justify-center h-[80px] transition-all duration-300'
                  >
                    <Link
                      href={href}
                      className='flex flex-col gap-[8px] items-center px-[10px]'
                    >
                      <span className='flex items-center'>
                        <Icon className='text-[24px]' />
                        {interestFree && (
                          <span className='font-semibold text-[20px] select-none'>
                            0
                          </span>
                        )}
                      </span>
                      <span className='text-slate-900 text-[14px] leading-[16px] font-medium text-center whitespace-nowrap'>
                        {label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className='min-[1200px]:hidden flex items-center gap-2'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label='Menüyü aç/kapat'
              aria-controls='mobile-menu'
              aria-expanded={isOpen}
              className='inline-flex items-center justify-center rounded-[10px] p-[10px] text-slate-700 bg-slate-200/50 transition-colors cursor-pointer hover:bg-slate-200 duration-300'
            >
              {isOpen ? (
                <FiX className='text-[24px]' />
              ) : (
                <FiMenu className='text-[24px]' />
              )}
            </button>
            <AuthButton />
          </div>

          <div className='hidden min-[1200px]:block'>
            <AuthButton />
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id='mobile-menu'
          className={`min-[1200px]:hidden border-t border-slate-200 bg-white overflow-hidden origin-top transition-all duration-200 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          role='menu'
          aria-hidden={!isOpen}
        >
          <div className='custom-container-1 pt-2 pb-6'>
            <ul className='divide-y divide-slate-100 flex flex-col items-center'>
              {navItems.map(({ label, href, Icon }) => {
                const interestFree = label === 'Faizsiz Kredi';
                return (
                  <li key={`m-${label}`} className='py-1 group w-full flex items-center justify-center'>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className='flex items-center justify-between gap-3 py-3'
                    >
                      <span className='flex items-center gap-3'>
                        {interestFree && (
                          <span className='font-semibold text-[18px] text-accent select-none'>
                            0
                          </span>
                        )}
                        <Icon className='text-[22px] text-accent' />
                        <span className='text-slate-900 text-[15px] leading-[18px] font-medium group-hover:text-primary transition-colors duration-300'>
                          {label}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {!isSessionLoading && (
              <div className='pt-3 flex flex-col gap-2 items-stretch sm:hidden px-4'>
                {session ? (
                <>
                  <Link href='/hesabim' onClick={() => setIsOpen(false)} className='flex items-center gap-3 px-4 py-2.5 rounded-[10px] bg-slate-100/50 hover:bg-slate-100 text-slate-900 font-medium text-[14px] transition-all w-full border border-transparent hover:border-slate-200/50'>
                    <span className='flex h-[36px] w-[36px] items-center justify-center rounded-full bg-primary/90 text-white font-semibold text-[14px] leading-none'>
                      {(() => {
                        const firstName = session?.user?.firstName || '';
                        const lastName = session?.user?.lastName || '';
                        const firstInitial = firstName.charAt(0).toUpperCase() || '';
                        const lastInitial = lastName.charAt(0).toUpperCase() || '';
                        return (firstInitial + lastInitial) || 'U';
                      })()}
                    </span>
                    <div className='flex flex-col items-start flex-1 min-w-0'>
                      <span className='font-semibold text-slate-900'>
                        {session?.user?.firstName && session?.user?.lastName 
                          ? `${session.user.firstName} ${session.user.lastName}`
                          : 'Hesabım'}
                      </span>
                      <span className='text-[12px] text-slate-500'>Hesabı görüntüle</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className='flex items-center gap-2 px-4 py-2 rounded-[12px] bg-slate-200/50 hover:bg-slate-200 text-slate-700 font-medium text-[14px] transition-colors w-full justify-center'
                  >
                    <FiLogOut className='text-[18px]' />
                    <span>Çıkış Yap</span>
                  </button>
                </>
              ) : (
                <Link href='/giris-yap' onClick={() => setIsOpen(false)} className='block'>
                  <FeaturedButtonComponent
                    icon={<TbLogin />}
                    text='Giriş / Üyelik'
                    addClass='w-full justify-center'
                  />
                </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
