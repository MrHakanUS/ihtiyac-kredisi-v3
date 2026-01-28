"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, A11y } from 'swiper/modules'
import { IoGift, IoClipboard, IoDocument, IoBusinessSharp, IoInformationCircle, IoSparkles, IoCheckmark, IoStar } from 'react-icons/io5'
import 'swiper/css'
import 'swiper/css/free-mode'
import BankReviewsComponent from '@/components/container/BankReviewsComponent'
import { resolveBankBySlug } from '@/constants/banks'

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

function TabsClient({ promotion, applyUrl }) {
  const tabs = [
    { id: 'features', label: 'Promosyon Avantajları' },
    { id: 'details', label: 'Kampanya Detayları' },
    { id: 'conditions', label: 'Başvuru Koşulları' },
    { id: 'reviews', label: 'Müşteri Deneyimleri' },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const bankSlug = getBankSlugFromName(promotion.bankName || promotion.reviewBankName)
  
  // Get bank reviews
  const { bank } = resolveBankBySlug({ slug: bankSlug })
  const reviewCount = bank?.reviews?.userReviews?.length || 0
  const overallRating = bank?.reviews?.overallRating || parseFloat(promotion.rating?.replace(',', '.')) || 4.0

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
              <h3 className='text-slate-900 font-semibold text-[18px] leading-[22px] mb-[16px] flex items-center gap-2'>
                <IoGift className='text-accent text-lg' />
                Bu Promosyonun Size Sunduğu Avantajlar
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {promotion.features.map((text, idx) => (
                  <div key={text + idx} className='flex items-start gap-3 p-3 bg-gradient-to-r from-accent/5 to-transparent rounded-lg'>
                    <div className='w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <IoCheckmark className='text-accent text-sm' />
                    </div>
                    <span className='text-slate-700 text-[14px] leading-[20px]'>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className='bg-white border border-slate-200 rounded-[24px] px-[24px] py-[20px]'>
              <h3 className='text-slate-900 font-semibold text-[18px] leading-[22px] mb-[16px] flex items-center gap-2'>
                <IoClipboard className='text-accent text-lg' />
                Kampanya Detayları ve Açıklamalar
              </h3>
              <div className='space-y-6'>
                <div className='prose max-w-none'>
                  <p className='text-slate-700 text-[15px] leading-[24px]'>{promotion.longDescription}</p>
                </div>
                
                {promotion.detail && (
                  <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                    <div className='flex items-start gap-3'>
                      <div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
                        <IoInformationCircle className='text-white text-sm' />
                      </div>
                      <div>
                        <h4 className='font-semibold text-blue-900 mb-2'>Önemli Bilgi:</h4>
                        <p className='text-blue-800 text-[14px] leading-[20px]'>{promotion.detail}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                      <IoStar className='text-white text-sm' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-green-900 mb-2'>Müşteri Memnuniyeti:</h4>
                      <p className='text-green-800 text-[14px] leading-[20px]'>
                        Bu promosyon {overallRating.toFixed(1).replace('.', ',')}/5 puan ile {reviewCount} müşteri tarafından değerlendirilmiştir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'conditions' && (
            <div className='bg-white border border-slate-200 rounded-[24px] px-[24px] py-[20px]'>
              <h3 className='text-slate-900 font-semibold text-[18px] leading-[22px] mb-[16px] flex items-center gap-2'>
                <IoDocument className='text-accent text-lg' />
                Başvuru Koşulları ve Önemli Bilgiler
              </h3>
              
              <div className='space-y-6'>
                {/* Temel Bilgiler */}
                <div className='bg-slate-50 rounded-lg p-4'>
                  <h4 className='font-semibold text-slate-900 mb-3 flex items-center gap-2'>
                    <span className='w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center'>
                      <span className='text-white text-xs'>₺</span>
                    </span>
                    Ücret Bilgileri
                  </h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex justify-between items-center p-3 bg-white rounded-lg'>
                      <span className='text-slate-600 text-[14px]'>Yıllık Aidat</span>
                      <span className='font-semibold text-slate-900 text-[14px]'>
                        {promotion.annualFee === '0' || promotion.annualFee === 'Ücretsiz' ? (
                          <span className='flex items-center gap-1'>
                            Ücretsiz <IoSparkles className='text-yellow-500 text-sm' />
                          </span>
                        ) : promotion.annualFee}
                      </span>
                    </div>
                    {promotion.shoppingInstallmentFee !== 'Yok' && (
                      <div className='flex justify-between items-center p-3 bg-white rounded-lg'>
                        <span className='text-slate-600 text-[14px]'>Alışveriş Faizi</span>
                        <span className='font-semibold text-slate-900 text-[14px]'>%{promotion.shoppingInstallmentFee}</span>
                      </div>
                    )}
                    <div className='flex justify-between items-center p-3 bg-white rounded-lg'>
                      <span className='text-slate-600 text-[14px]'>Nakit Avans Faizi</span>
                      <span className='font-semibold text-slate-900 text-[14px]'>
                        {promotion.cashAdvanceRate ? `%${promotion.cashAdvanceRate}` : 'Bankaya danışın'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Genel Koşullar */}
                <div className='bg-amber-50 border border-amber-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-amber-900 mb-3 flex items-center gap-2'>
                    <span className='w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center'>
                      <span className='text-white text-xs'>!</span>
                    </span>
                    Genel Başvuru Koşulları
                  </h4>
                  <ul className='space-y-2 text-amber-800 text-[14px]'>
                    <li className='flex items-start gap-2'>
                      <span className='text-amber-600 mt-1'>•</span>
                      18 yaş üstü Türkiye Cumhuriyeti vatandaşı olmak
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-amber-600 mt-1'>•</span>
                      Emekli olmak (SSK, Bağ-Kur, Emekli Sandığı)
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-amber-600 mt-1'>•</span>
                      Düzenli gelir belgesine sahip olmak
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-amber-600 mt-1'>•</span>
                      Bankanın kredi değerlendirme kriterlerini sağlamak
                    </li>
                  </ul>
                </div>

                {/* Başvuru Süreci */}
                <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                  <h4 className='font-semibold text-blue-900 mb-3 flex items-center gap-2'>
                    <span className='w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center'>
                      <span className='text-white text-xs'>→</span>
                    </span>
                    Başvuru Süreci
                  </h4>
                  <div className='space-y-3'>
                    <p className='text-blue-800 text-[14px] leading-[20px]'>
                      Bu promosyondan yararlanmak için bankanın belirlediği koşulları sağlamanız ve 
                      gerekli belgeleri tamamlamanız gerekmektedir.
                    </p>
                    <div className='bg-white rounded-lg p-3'>
                      <a 
                        href={applyUrl} 
                        target='_blank' 
                        rel='noopener noreferrer nofollow' 
                        className='inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-[14px] transition-colors'
                      >
                        <IoBusinessSharp className='text-accent text-lg' />
                        Hemen Online Başvuru Yap
                        <span className='text-xs'>→</span>
                      </a>
                    </div>
                  </div>
                </div>
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
