"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import BankReviewsComponent from '@/components/container/BankReviewsComponent'

// Helper function to get bank slug from bank name
function getBankSlugFromName(bankName) {
  const bankSlugMap = {
    'Akbank': 'akbank',
    'Garanti BBVA': 'garanti',
    'Garanti': 'garanti',
    'Türkiye İş Bankası': 'is-bankasi',
    'İş Bankası': 'is-bankasi',
    'Halkbank': 'halkbank',
    'Türkiye Halk Bankası': 'halkbank',
    'Ziraat Bankası': 'ziraat',
    'Ziraat': 'ziraat',
    'T.C. Ziraat Bankası': 'ziraat',
    'Yapı Kredi': 'yapi-kredi',
    'Yapı ve Kredi Bankası': 'yapi-kredi',
    'VakıfBank': 'vakifbank',
    'Türkiye Vakıflar Bankası': 'vakifbank',
    'QNB Finansbank': 'qnb',
    'QNB': 'qnb',
    'ING': 'ing-bank',
    'ING Bank': 'ing-bank',
    'Denizbank': 'denizbank',
    'DenizBank': 'denizbank',
    'TEB': 'teb',
    'Türk Ekonomi Bankası': 'teb',
    'Enpara': 'enpara',
    'Enpara.com': 'enpara',
    'Fibabanka': 'fibabanka',
    'Albaraka Türk': 'albaraka',
    'Albaraka': 'albaraka',
    'Kuveyt Türk': 'kuveytturk',
    'Kuveyttürk': 'kuveytturk',
  }
  return bankSlugMap[bankName] || null
}

function TabsClient({ card }) {
  const tabs = [
    { id: 'features', label: 'Özellikler' },
    { id: 'fees', label: 'Ücret ve Aidatlar' },
    { id: 'campaigns', label: 'Kampanyalar' },
    { id: 'reviews', label: 'Kullanıcı Yorumları' },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const bankSlug = getBankSlugFromName(card.bankName || card.reviewBankName)

  return (
    <div className=''>
      <div className='pt-6'>
        {/* Mobile: Swiper like CategorySwiper */}
        <div className='sm:hidden -mx-4 px-4'>
          <Swiper
            modules={[FreeMode, A11y]}
            freeMode
            slidesPerView='auto'
            spaceBetween={8}
            watchOverflow
            grabCursor
            className='!overflow-visible'
          >
            {tabs.map((tab) => (
              <SwiperSlide key={tab.id} className='!w-auto'>
                <button
                  type='button'
                  aria-pressed={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'bg-accent text-white border-transparent hover:brightness-110'
                      : 'bg-white text-slate-700 hover:text-accent'
                  } inline-flex items-center gap-[8px] h-[32px] px-[12px] rounded-[999px] border ${
                    activeTab === tab.id ? 'border-accent' : 'border-slate-200 hover:border-accent/40'
                  } transition-colors shrink-0`}
                >
                  <span className='text-[12px] leading-[16px]'>{tab.label}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop/Tablet: inline pills */}
        <div className='hidden sm:flex gap-3 lg:gap-4 overflow-x-auto'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type='button'
              aria-pressed={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-fit rounded-[49px] px-[16px] py-[8px] text-[13px] lg:text-[14px] font-medium transition-all duration-300 whitespace-nowrap border select-none cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-accent text-white border-transparent hover:brightness-125'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-accent hover:border-accent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className='mt-[36px]'>
          {activeTab === 'features' && (
            <div className='bg-white border border-slate-200 rounded-[24px] px-[24px] py-[20px]'>
              <h3 className='text-slate-900 font-semibold text-[18px] leading-[22px] mb-[12px]'>Kart Özellikleri</h3>
              <ul className='flex flex-col gap-y-[10px]'>
                {card.features.map((text, idx) => (
                  <li key={text + idx} className='text-slate-700 text-[14px] leading-[18px]'>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'fees' && (
            <div className='bg-white border border-slate-200 rounded-[24px] px-[24px] py-[20px]'>
              <h3 className='text-slate-900 font-semibold text-[18px] leading-[22px] mb-[12px]'>Ücretler ve Aidatlar</h3>
              <ul className='flex flex-col divide-y divide-slate-200'>
                <li className='flex items-center justify-between py-[12px]'>
                  <span className='text-slate-600 text-[14px] leading-[18px]'>Yıllık Aidat</span>
                  <span className='text-slate-900 font-semibold text-[14px] leading-[18px]'>{card.annualFee}</span>
                </li>
                <li className='flex items-center justify-between py-[12px]'>
                  <span className='text-slate-600 text-[14px] leading-[18px]'>Alışveriş Faiz Oranı</span>
                  <span className='text-slate-900 font-semibold text-[14px] leading-[18px]'>%{card.shoppingInstallmentFee}</span>
                </li>
                <li className='flex items-center justify-between py-[12px]'>
                  <span className='text-slate-600 text-[14px] leading-[18px]'>Nakit Avans Faizi</span>
                  <span className='text-slate-900 font-semibold text-[14px] leading-[18px]'>Banka ile iletişime geçiniz</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'campaigns' && (
            <div className='bg-white border border-slate-200 rounded-[24px] px-[24px] py-[20px]'>
              <h3 className='text-slate-900 font-semibold text-[18px] leading-[22px] mb-[12px]'>Güncel Kampanyalar</h3>
              <div className='text-slate-700 text-[14px] leading-[18px]'>
                <p>Bu kredi kartı ile ilgili güncel kampanya bilgileri için bankanın resmi web sitesini ziyaret edebilir veya müşteri hizmetleri ile iletişime geçebilirsiniz.</p>
                <p className='mt-[12px]'>
                  <strong>Başvuru Linki:</strong>{' '}
                  <a href={card.applyUrl} target='_blank' rel='noopener noreferrer nofollow' className='text-accent hover:underline'>
                    {card.applyUrl}
                  </a>
                </p>
              </div>
            </div>
          )}

          

          {activeTab === 'reviews' && (
            <div className='text-gray-700'>
              <BankReviewsComponent bankSlug={bankSlug} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TabsClient


