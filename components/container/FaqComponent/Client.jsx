'use client';

import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'

const FaqClient = ({ items }) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null

  const itemCount = items.length
  const [openStates, setOpenStates] = useState(() => {
    const initial = Array(itemCount).fill(false)
    initial[0] = true
    return initial
  })

  function toggleItem(index) {
    setOpenStates((prev) => {
      const isCurrentlyOpen = prev[index]
      const numOpen = prev.filter(Boolean).length
      if (isCurrentlyOpen && numOpen === 1) return prev
      const next = Array(itemCount).fill(false)
      next[index] = true
      return next
    })
  }

  return (
    <div className='flex flex-col gap-y-[8px] md:gap-y-[12px]'>
      {items.map((item, index) => {
        const isOpen = openStates[index]
        const panelId = `faq-panel-${index}`
        const triggerId = `faq-trigger-${index}`
        return (
          <div
            key={index}
            onClick={() => toggleItem(index)}
            className={`group rounded-[16px] md:rounded-[24px] border transition-all duration-300 ease-in-out ${
              isOpen
                ? 'bg-white border-slate-200'
                : 'bg-transparent border-transparent'
            }`}
          >
            <button
              type='button'
              aria-expanded={isOpen}
              id={triggerId}
              aria-controls={panelId}
              className={`w-full flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 select-none p-[16px] md:p-[24px] rounded-[16px] md:rounded-[24px] text-slate-900 ${
                isOpen ? 'group-hover:!text-primary' : 'hover:bg-slate-200/50 cursor-pointer'
              } transition-all duration-300 gap-x-[16px] md:gap-x-[24px]`}
            >
              <span className={`text-[18px] md:text-[20px] transition-transform duration-300 delay-100 ease-in-out  ${!isOpen ? 'group-hover:rotate-90' : ''}`}>
                {isOpen ? <FiMinus /> : <FiPlus />}
              </span>
              <h3
                className={`font-medium text-[15px] leading-[20px] md:text-[16px] md:leading-[22px] text-start ${
                  isOpen ? 'font-semibold' : ''
                }`}
              >
                {item.question}
              </h3>
            </button>
            <div
              id={panelId}
              role='region'
              aria-labelledby={triggerId}
              className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
                isOpen
                  ? 'p-[16px] md:p-[24px] md:pt-0 pt-0 max-h-[500px] opacity-100 scale-y-100'
                  : 'p-0 max-h-0 opacity-0 scale-y-0'
              }`}
            >
              <div className=''>
                <p className='text-[14px] leading-[20px] md:text-[15px] md:leading-[22px] text-slate-600 pl-[36px] md:pl-[44px]'>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqClient


