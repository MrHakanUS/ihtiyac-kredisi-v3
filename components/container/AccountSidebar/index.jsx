"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { LuMessageSquare } from 'react-icons/lu'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

export default function AccountSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  function isActive(href) {
    if (href === '/hesabim') return pathname === '/hesabim' || pathname === '/hesabim/'
    return pathname.startsWith(href)
  }

  function handleLogout() {
    router.push('/')
  }

  return (
    <div className='rounded-[16px] border border-slate-200 bg-white'>
      <div className='flex items-center gap-x-[12px] p-[16px] border-b border-slate-100 relative'>
        <div className='flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-slate-200 font-semibold text-slate-900 text-[14px] leading-[18px]'>
          MA
        </div>
        <div className='flex flex-col gap-y-[4px]'>
          <div className='flex items-center justify-between'>
            <p className='text-[14px] font-semibold leading-[18px] text-slate-900'>
              Melisa Ağcı
            </p>
            <span className='text-accent text-[20px]'>
              <RiVerifiedBadgeFill />
            </span>
          </div>
          <span className='text-[12px] leading-[16px] text-slate-500'>
            lorem@ipsum.com
          </span>
        </div>
      </div>

      <ul className='p-[8px] flex flex-col gap-y-[8px]'>
        <li>
          <Link
            href='/hesabim/yorumlarim'
            className={`flex items-center gap-x-[10px] rounded-[10px] p-[12px] text-[14px] leading-[18px] select-none cursor-pointer hover:bg-slate-50 ${isActive('/hesabim/yorumlarim') ? 'bg-slate-50 text-slate-900' : 'text-slate-800'}`}
          >
            <LuMessageSquare className='text-[18px] text-slate-700' />
            <span>Yazdığım Yorumlar</span>
          </Link>
        </li>
        <li>
          <Link
            href='/hesabim'
            className={`flex items-center gap-x-[10px] rounded-[10px] p-[12px] text-[14px] leading-[18px] select-none cursor-pointer hover:bg-slate-50 ${isActive('/hesabim') ? 'bg-slate-50 text-slate-900' : 'text-slate-800'}`}
          >
            <FiSettings className='text-[18px] text-slate-700' />
            <span>Hesap Ayarları</span>
          </Link>
        </li>
        <li
          className='flex items-center gap-x-[10px] rounded-[10px] p-[12px] text-[14px] leading-[18px] text-slate-800 hover:bg-slate-50 select-none cursor-pointer'
          onClick={handleLogout}
        >
          <FiLogOut className='text-[18px] text-slate-700' />
          <span>Çıkış Yap</span>
        </li>
      </ul>
    </div>
  )
}


