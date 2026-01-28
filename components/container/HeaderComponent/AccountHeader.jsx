"use client"
import LogoComponent from '@/components/common/LogoComponent'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

function AccountHeader() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const dropdownRef = useRef(null)

	useEffect(function attachOutsideHandlers() {
		function handleClickOutside(event) {
			if (!dropdownRef.current) return
			if (!dropdownRef.current.contains(event.target)) setIsDropdownOpen(false)
		}

		function handleEscape(event) {
			if (event.key !== 'Escape') return
			setIsDropdownOpen(false)
			setIsMobileMenuOpen(false)
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('keydown', handleEscape)
		return function cleanup() {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('keydown', handleEscape)
		}
	}, [])

	return (
		<>
			<aside className='bg-slate-500 text-white font-bold font-base leading-[19px] py-[18px] flex items-center justify-center'>
				<div className='custom-container-1 text-center'>Reklam Alanı</div>
			</aside>

			<header className='sticky top-0 z-50 py-[14px] bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50'>
				<div className='custom-container-1 flex items-center justify-between'>
					<LogoComponent />

					{/* Mobile menu button */}
					<div className='sm:hidden flex items-center'>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label='Menüyü aç/kapat'
							aria-controls='mobile-menu'
							aria-expanded={isMobileMenuOpen}
							className='inline-flex items-center justify-center rounded-[10px] p-[10px] text-slate-700 bg-slate-200/50 transition-colors cursor-pointer hover:bg-slate-200 duration-300'
						>
							{isMobileMenuOpen ? (
								<FiX className='text-[24px]' />
							) : (
								<FiMenu className='text-[24px]' />
							)}
						</button>
					</div>

					{/* User dropdown - desktop */}
					<div ref={dropdownRef} className='relative hidden sm:block shrink-0'>
						<button
							onClick={function toggle() { setIsDropdownOpen(!isDropdownOpen) }}
							className='flex items-center gap-3 cursor-pointer select-none rounded-[10px] px-[10px] py-[8px] hover:bg-slate-200/50 transition-colors'
							aria-haspopup='menu'
							aria-expanded={isDropdownOpen}
						>
							<span className='flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-slate-200 font-semibold text-slate-900 text-[14px] leading-[18px]'>
								MA
							</span>
							<span className='flex flex-col items-start'>
								<span className='text-slate-900 text-[14px] leading-[16px] font-semibold'>Melisa Ağcı</span>
								<span className='text-slate-500 text-[12px] leading-[14px]'>Hesabım</span>
							</span>
							<FiChevronDown className={`text-slate-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
						</button>

						<div
							className={`absolute right-0 mt-3 w-56 rounded-lg bg-white shadow-xl ring-1 ring-black/5 overflow-hidden origin-top transition-all duration-200 ease-in-out ${isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
							role='menu'
						>
							<div className='py-2'>
								<Link href='/hesabim/yorumlarim' onClick={function close() { setIsDropdownOpen(false) }} className='block px-4 py-2 text-[14px] text-slate-700 hover:bg-slate-200/50'>
									Yazdığım yorumlar
								</Link>
								<Link href='/hesabim' onClick={function close() { setIsDropdownOpen(false) }} className='block px-4 py-2 text-[14px] text-slate-700 hover:bg-slate-200/50'>
									Hesap ayarları
								</Link>
								<div className='my-2 h-px bg-slate-100'></div>
								<Link href='/' onClick={function close() { setIsDropdownOpen(false) }} className='block px-4 py-2 text-[14px] text-red-600 hover:bg-red-50'>
									Çıkış yap
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				<div
					id='mobile-menu'
					className={`sm:hidden border-t border-slate-200 bg-white overflow-hidden origin-top transition-all duration-200 ease-in-out ${
						isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
					}`}
					role='menu'
					aria-hidden={!isMobileMenuOpen}
				>
					<div className='custom-container-1 pt-2 pb-6'>
						{/* User info in mobile */}
						<div className='flex items-center gap-3 p-4 mb-4 bg-slate-50 rounded-lg'>
							<span className='flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-slate-200 font-semibold text-slate-900 text-[14px] leading-[18px]'>
								MA
							</span>
							<div className='flex flex-col items-start'>
								<span className='text-slate-900 text-[14px] leading-[16px] font-semibold'>Melisa Ağcı</span>
								<span className='text-slate-500 text-[12px] leading-[14px]'>Hesabım</span>
							</div>
						</div>

						{/* User actions in mobile */}
						<div className='space-y-1'>
							<Link href='/hesabim/yorumlarim' onClick={() => setIsMobileMenuOpen(false)} className='block px-4 py-3 text-[14px] text-slate-700 hover:bg-slate-200/50 rounded-lg transition-colors'>
								Yazdığım yorumlar
							</Link>
							<Link href='/hesabim' onClick={() => setIsMobileMenuOpen(false)} className='block px-4 py-3 text-[14px] text-slate-700 hover:bg-slate-200/50 rounded-lg transition-colors'>
								Hesap ayarları
							</Link>
							<Link href='/' onClick={() => setIsMobileMenuOpen(false)} className='block px-4 py-3 text-[14px] text-red-600 hover:bg-red-50 rounded-lg transition-colors'>
								Çıkış yap
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default AccountHeader


