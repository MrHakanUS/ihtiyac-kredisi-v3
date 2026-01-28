'use client'

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

function CategorySwiper({ categories, activeCategory, q }) {
  if (!Array.isArray(categories) || categories.length === 0) return null

  function buildHrefClient({ q, category }) {
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (category && category !== 'Tümü') params.set('category', category)
    const search = params.toString()
    return search ? `/blog?${search}` : '/blog'
  }

  return (
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
        {categories.map((cat) => {
          const isActive = cat === activeCategory
          return (
            <SwiperSlide key={cat} className='!w-auto'>
              <Link
                href={buildHrefClient({ q, category: cat })}
                aria-current={isActive ? 'true' : undefined}
                className={`${
                  isActive
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-slate-700 hover:text-primary'
                } inline-flex items-center gap-[8px] h-[32px] px-[12px] rounded-[999px] border border-slate-200 hover:border-primary/40 transition-colors shrink-0`}
              >
                <span className='text-[12px] leading-[16px]'>{cat}</span>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CategorySwiper


