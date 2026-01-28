'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { FiLogOut, FiUsers, FiUser, FiHome } from 'react-icons/fi';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout, isAdmin, isLoading } = useAuth();

  // Get user initials
  const getInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
    }
    if (user?.firstName) {
      return user.firstName.charAt(0).toUpperCase();
    }
    if (user?.phone) {
      return user.phone.charAt(0).toUpperCase();
    }
    return 'U';
  };

  // Get user display name
  const getDisplayName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    if (user?.firstName) {
      return user.firstName;
    }
    if (user?.phone) {
      return user.phone;
    }
    return 'Kullanıcı';
  };

  // Get user email or phone
  const getContactInfo = () => {
    return user?.email || user?.phone || '';
  };

  const menuItems = [
    {
      label: 'Ana Sayfa',
      href: '/ana-sayfa',
      icon: FiHome,
    },
    {
      label: 'Hesabım',
      href: '/hesabim',
      icon: FiUser,
    },
    // Admin only menu items
    ...(isAdmin
      ? [
          {
            label: 'Kullanıcılar',
            href: '/admin/kullanicilar',
            icon: FiUsers,
            adminOnly: true,
          },
        ]
      : []),
  ];

  const isActive = (href) => {
    if (href === '/hesabim') {
      return pathname === '/hesabim' || pathname === '/hesabim/';
    }
    if (href === '/ana-sayfa') {
      return pathname === '/ana-sayfa' || pathname === '/ana-sayfa/';
    }
    return pathname.startsWith(href);
  };

  // Show loading skeleton with full layout to prevent layout shift
  if (isLoading) {
    return (
      <div className="bg-white rounded-[24px] border border-slate-200 flex flex-col items-center w-full">
        {/* User Profile Header Skeleton */}
        <div className="flex gap-4 items-center px-5 py-4 w-full">
          <div className="bg-slate-100 flex items-center justify-center p-3 rounded-[12px] shrink-0 size-10 animate-pulse">
            <div className="w-5 h-5 bg-slate-300 rounded"></div>
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex gap-2 items-center w-full">
              <div className="h-4 bg-slate-200 rounded w-24 animate-pulse"></div>
            </div>
            <div className="h-3 bg-slate-200 rounded w-32 animate-pulse"></div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px w-full bg-[var(--slate-100,#f1f5f9)]"></div>
        
        {/* Menu Items Skeleton */}
        <div className="flex flex-col gap-1 items-start p-2 w-full">
          <div className="h-11 w-full bg-slate-50 rounded-[12px] animate-pulse mb-1"></div>
          <div className="h-11 w-full bg-slate-50 rounded-[12px] animate-pulse mb-1"></div>
          <div className="h-11 w-full bg-slate-50 rounded-[12px] animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] border border-slate-200 flex flex-col items-center w-full">
      {/* User Profile Header */}
      <div className="flex gap-4 items-center px-5 py-4 w-full">
        {/* Avatar */}
        <div className="bg-[var(--slate-100,#f1f5f9)] flex items-center justify-center p-3 rounded-[12px] shrink-0 size-10">
          <FiUser className="size-5 text-[color:var(--slate-600,#45556c)]" />
        </div>

        {/* User Info */}
        <div className="flex flex-col gap-1 items-start justify-center shrink-0 flex-1 min-w-0">
          <div className="flex gap-2 items-center w-full">
            <div className="font-['Inter',sans-serif] font-semibold text-[14px] text-[color:var(--slate-900,#0f172b)] whitespace-nowrap truncate">
              {getDisplayName()}
            </div>
            {user?.status === 'active' && (
              <div className="relative shrink-0 size-4">
                <RiVerifiedBadgeFill className="size-full text-[var(--accent,#2b7fff)]" />
              </div>
            )}
          </div>
          <div className="font-['Inter',sans-serif] font-normal text-[12px] text-[color:var(--slate-600,#45556c)] whitespace-nowrap truncate w-full">
            {getContactInfo()}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[var(--slate-100,#f1f5f9)]"></div>

      {/* Navigation Menu */}
      <div className="flex flex-col gap-1 items-start p-2 w-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`content-stretch flex gap-4 h-11 items-center px-5 py-0 relative rounded-[12px] shrink-0 w-full transition-colors ${
                active
                  ? 'bg-[var(--slate-100,#f1f5f9)]'
                  : 'hover:bg-slate-50'
              }`}
            >
              <div className="relative shrink-0 size-4">
                <Icon
                  className={`size-full ${
                    active
                      ? 'text-[color:var(--slate-900,#0f172b)]'
                      : 'text-[color:var(--slate-600,#45556c)]'
                  }`}
                />
              </div>
              <div
                className={`font-['Inter',sans-serif] font-medium text-[14px] whitespace-nowrap ${
                  active
                    ? 'text-[color:var(--slate-900,#0f172b)]'
                    : 'text-[color:var(--slate-600,#45556c)]'
                }`}
              >
                {item.label}
              </div>
            </Link>
          );
        })}

        {/* Logout Button */}
        <button
          onClick={logout}
          className="content-stretch flex gap-4 h-11 items-center px-5 py-0 relative rounded-[12px] shrink-0 w-full hover:bg-slate-50 transition-colors text-left"
        >
          <div className="relative shrink-0 size-4">
            <FiLogOut className="size-full text-[color:var(--slate-600,#45556c)]" />
          </div>
          <div className="font-['Inter',sans-serif] font-medium text-[14px] text-[color:var(--slate-600,#45556c)] whitespace-nowrap">
            Çıkış Yap
          </div>
        </button>
      </div>
    </div>
  );
}