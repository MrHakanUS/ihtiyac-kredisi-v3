'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { TbLogin } from 'react-icons/tb';
import { FiUser, FiChevronDown, FiLogOut } from 'react-icons/fi';
import FeaturedButtonComponent from './FeaturedButtonComponent';
import { useAuth } from '@/hooks/useAuth';

export default function AuthButton() {
    const { data: session, status } = useSession();
    const { logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    // Show loading skeleton with same dimensions as actual button to prevent layout shift
    if (status === 'loading') {
        return (
            <>
                {/* Desktop skeleton */}
                <div className='hidden md:flex shrink-0 items-center gap-2.5 px-2.5 py-1.5 rounded-[10px] bg-slate-100/50 animate-pulse'>
                    <div className='h-[36px] w-[36px] rounded-full bg-slate-300'></div>
                    <div className='h-5 w-5 bg-slate-300 rounded'></div>
                </div>
                {/* Mobile skeleton */}
                <div className='md:hidden shrink-0 h-[36px] w-[36px] rounded-full bg-primary/50 animate-pulse'></div>
            </>
        );
    }

    // Get user initials from session
    const getUserInitials = () => {
        if (!session?.user) return null;
        const firstName = session.user.firstName || '';
        const lastName = session.user.lastName || '';
        
        if (firstName || lastName) {
            const firstInitial = firstName.charAt(0).toUpperCase() || '';
            const lastInitial = lastName.charAt(0).toUpperCase() || '';
            return firstInitial + lastInitial || 'U'; // U = User fallback
        }
        return 'U';
    };

    const userInitials = getUserInitials();

    if (session) {
        return (
            <div className='shrink-0 relative' ref={dropdownRef}>
                {/* Desktop version */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDropdownOpen(!isDropdownOpen);
                    }}
                    className='hidden md:flex items-center gap-2.5 px-2.5 py-1.5 rounded-[10px] bg-slate-100/50 hover:bg-slate-100 transition-all duration-200 border border-transparent hover:border-slate-200/50'
                >
                    <span className='flex h-[36px] w-[36px] items-center justify-center rounded-full bg-primary/90 text-white font-semibold text-[14px] leading-none'>
                        {userInitials}
                    </span>
                    <FiChevronDown 
                        className={`text-slate-500 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                        }`}
                    />
                </button>

                {/* Mobile version - just avatar button */}
                <Link
                    href='/hesabim'
                    className='md:hidden flex items-center justify-center shrink-0'
                >
                    <span className='flex h-[36px] w-[36px] items-center justify-center rounded-full bg-primary/90 text-white font-semibold text-[14px] leading-none'>
                        {userInitials}
                    </span>
                </Link>

                {/* Dropdown Menu - Desktop only */}
                {isDropdownOpen && (
                    <div className='hidden md:block absolute right-0 top-full mt-2 w-56 bg-white rounded-[12px] shadow-xl border border-slate-200 overflow-hidden z-50'>
                        <Link 
                            href='/hesabim'
                            onClick={() => setIsDropdownOpen(false)}
                            className='w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-slate-900 font-medium text-[14px] border-b border-slate-100'
                        >
                            <span className='flex h-[32px] w-[32px] items-center justify-center rounded-full bg-primary/90 text-white font-semibold text-[12px] leading-none'>
                                {userInitials}
                            </span>
                            <div className='flex flex-col items-start flex-1 min-w-0'>
                                <span className='font-semibold text-slate-900 truncate w-full'>
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
                                setIsDropdownOpen(false);
                            }}
                            className='w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-600 font-medium text-[14px] text-left'
                        >
                            <FiLogOut className='text-[18px]' />
                            <span>Çıkış Yap</span>
                        </button>
                    </div>
                )}
            </div>
        );
    }

    return (
        <>
            {/* Desktop version */}
            <Link href='/giris-yap' className='hidden md:block shrink-0'>
                <FeaturedButtonComponent icon={<TbLogin />} text='Giriş / Üyelik' />
            </Link>
            {/* Mobile version - icon only */}
            <Link 
                href='/giris-yap' 
                className='md:hidden shrink-0 flex items-center justify-center h-[36px] w-[36px] rounded-full bg-primary text-white hover:brightness-125 transition-all duration-200 border border-transparent'
                aria-label='Giriş Yap'
            >
                <FiUser className='text-[20px]' />
            </Link>
        </>
    );
}
