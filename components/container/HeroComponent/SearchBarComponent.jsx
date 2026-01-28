"use client"

import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import SelectboxComponent from '@/components/common/SelectboxComponent';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { IoSearchOutline, IoCalendarOutline } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';
import { PiMoney } from 'react-icons/pi';

const CREDIT_OPTIONS = ['İhtiyaç Kredisi', 'Konut Kredisi', 'Taşıt Kredisi'];
const ALL_TERM_OPTIONS = ['3 ay', '6 ay', '12 ay', '18 ay', '24 ay', '36 ay', '48 ay', '60 ay', '84 ay', '96 ay', '120 ay'];

function stripNonDigits(value) {
  if (!value) return ''
  return value.replace(/\D+/g, '')
}

function formatThousands(value) {
  if (!value) return ''
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function getDigitCountUpTo(value, caretIndex) {
  if (!value) return 0
  let count = 0
  for (let i = 0; i < caretIndex; i++) {
    const ch = value[i]
    if (/\d/.test(ch)) count++
  }
  return count
}

function getCaretIndexFromDigitCount(formattedValue, digitCount) {
  if (digitCount <= 0) return 0
  let count = 0
  for (let i = 0; i < formattedValue.length; i++) {
    if (/\d/.test(formattedValue[i])) count++
    if (count === digitCount) return i + 1
  }
  return formattedValue.length
}

const SearchBarComponent = ({ addClass = '', defaultCreditType = CREDIT_OPTIONS[0], onParametersChange, hideNonPersonalLoans = false }) => {
  const [loanAmount, setLoanAmount] = useState('50000')
  const [selectedCreditType, setSelectedCreditType] = useState(defaultCreditType)
  const [selectedTerm, setSelectedTerm] = useState('12 ay')
  const loanAmountInputRef = useRef(null)
  
  // Sıfır faiz konseptli sayfalarda sadece ihtiyaç kredisi göster
  const availableCreditOptions = useMemo(() => {
    if (hideNonPersonalLoans) {
      return ['İhtiyaç Kredisi']
    }
    return CREDIT_OPTIONS
  }, [hideNonPersonalLoans])

  // Kredi türüne ve tutara göre vade seçeneklerini belirle
  const availableTermOptions = useMemo(() => {
    const amount = parseInt(loanAmount) || 0
    
    if (selectedCreditType === 'İhtiyaç Kredisi') {
      if (amount > 250000) {
        // 250.000 TL üzeri: maksimum 12 ay
        return ['3 ay', '6 ay', '12 ay']
      } else if (amount > 125000) {
        // 125.001 - 250.000 TL: maksimum 24 ay
        return ['3 ay', '6 ay', '12 ay', '18 ay', '24 ay']
      } else {
        // 125.000 TL ve altı: maksimum 36 ay
        return ['3 ay', '6 ay', '12 ay', '18 ay', '24 ay', '36 ay']
      }
    } else if (selectedCreditType === 'Taşıt Kredisi') {
      if (amount > 1200000) {
        // 1.200.000 TL üzeri: maksimum 12 ay
        return ['3 ay', '6 ay', '12 ay']
      } else if (amount > 800000) {
        // 800.001 - 1.200.000 TL: maksimum 24 ay
        return ['3 ay', '6 ay', '12 ay', '18 ay', '24 ay']
      } else if (amount > 400000) {
        // 400.001 - 800.000 TL: maksimum 36 ay
        return ['3 ay', '6 ay', '12 ay', '18 ay', '24 ay', '36 ay']
      } else {
        // 400.000 TL ve altı: maksimum 48 ay
        return ['3 ay', '6 ay', '12 ay', '18 ay', '24 ay', '36 ay', '48 ay']
      }
    } else if (selectedCreditType === 'Konut Kredisi') {
      // Konut kredisi: maksimum 120 ay
      return ['36 ay', '60 ay', '84 ay', '96 ay', '120 ay']
    }
    
    // Varsayılan (bu duruma düşmemeli)
    return ALL_TERM_OPTIONS
  }, [loanAmount, selectedCreditType])

  // Seçili vade uygun değilse otomatik düzelt
  useEffect(() => {
    if (!availableTermOptions.includes(selectedTerm)) {
      // Kredi türüne göre uygun bir varsayılan vade seç
      let defaultTerm
      if (selectedCreditType === 'Konut Kredisi') {
        defaultTerm = '60 ay' // Konut kredisi için orta vadeli bir seçenek
      } else if (selectedCreditType === 'Taşıt Kredisi') {
        defaultTerm = '36 ay' // Taşıt kredisi için orta vadeli bir seçenek
      } else {
        defaultTerm = '12 ay' // İhtiyaç kredisi için kısa vadeli
      }
      
      // Seçilen varsayılan vade mevcut seçeneklerde varsa onu kullan, yoksa ilk seçeneği al
      const termToUse = availableTermOptions.includes(defaultTerm) 
        ? defaultTerm 
        : availableTermOptions[0]
      
      setSelectedTerm(termToUse)
    }
  }, [availableTermOptions, selectedTerm, selectedCreditType])

  // Notify parent component when parameters change
  useEffect(() => {
    if (onParametersChange) {
      const amount = parseInt(loanAmount) || 0
      const termMonths = parseInt(selectedTerm.replace(' ay', '')) || 12
      
      onParametersChange({
        creditType: selectedCreditType,
        amount: amount,
        termMonths: termMonths
      })
    }
  }, [loanAmount, selectedCreditType, selectedTerm, onParametersChange])

  return (
    <div
      className={`mb-[48px] border border-slate-200 rounded-[20px] bg-white flex flex-col md:flex-row items-stretch md:items-center justify-between w-full max-w-[920px] px-[16px] sm:px-[20px] py-[12px] md:py-[8px] gap-[12px] md:gap-0 ${addClass}`}
    >
      <div className='flex w-full md:w-10/12 flex-col md:flex-row items-stretch md:items-center gap-[12px] md:gap-x-[20px]'>
        <div className='w-full md:w-1/3'>
          <SelectboxComponent
            options={availableCreditOptions}
            label='Kredi Türü'
            defaultValue={selectedCreditType}
            icon={<LuUsers />}
            className='w-full'
            onChange={(value) => setSelectedCreditType(value)}
          />
        </div>

        <div className='hidden md:block h-[52px] w-[1px] bg-slate-200' />
        <div className='md:hidden h-[1px] w-full bg-slate-200' />

        <div className='w-full md:w-1/3'>
          <div className='relative group flex items-center gap-x-[16px] select-none w-full'>
            <div className='text-slate-800 text-[20px]'>
              <PiMoney />
            </div>
            <label className='flex flex-1 items-center justify-between cursor-text' onClick={() => loanAmountInputRef.current && loanAmountInputRef.current.focus()}>
              <div className='flex flex-col gap-y-[4px]'>
                <span className='text-slate-600 font-light text-[12px] leading-[16px]'>
                  Tutar
                </span>
                <input
                  type='text'
                  inputMode='numeric'
                  pattern='[0-9]*'
                  value={formatThousands(loanAmount)}
                  onChange={e => {
                    const inputEl = e.target
                    const prevCaret = inputEl.selectionStart ?? 0
                    const typedDigitCount = getDigitCountUpTo(inputEl.value, prevCaret)
                    const rawDigits = stripNonDigits(inputEl.value)
                    const formatted = formatThousands(rawDigits)
                    setLoanAmount(rawDigits)
                    requestAnimationFrame(() => {
                      if (!loanAmountInputRef.current) return
                      const nextCaret = getCaretIndexFromDigitCount(formatted, typedDigitCount)
                      loanAmountInputRef.current.setSelectionRange(nextCaret, nextCaret)
                    })
                  }}
                  placeholder=''
                  className='bg-transparent outline-none text-slate-900 font-medium text-[14px] leading-[18px] placeholder:text-slate-400'
                  ref={loanAmountInputRef}
                  aria-label='Tutar'
                  autoComplete='off'
                  enterKeyHint='done'
                />
              </div>
              <span className='ml-[12px] text-slate-500 text-[14px] leading-[18px]'>
                TL
              </span>
            </label>
          </div>
        </div>

        <div className='hidden md:block h-[52px] w-[1px] bg-slate-200' />
        <div className='md:hidden h-[1px] w-full bg-slate-200' />

        <div className='w-full md:w-1/3'>
          <SelectboxComponent
            options={availableTermOptions}
            label='Vade Süresi'
            defaultValue={selectedTerm}
            icon={<IoCalendarOutline />}
            className='w-full'
            onChange={(value) => setSelectedTerm(value)}
          />
        </div>
      </div>

      <div className='w-full md:w-[96px] flex items-center justify-center'>
        <FeaturedButtonComponent
          text='Bul'
          type='link'
          href='/kredi-arama'
          icon={<IoSearchOutline />}
          className='!rounded-[12px] !px-[20px] !py-[12px] !gap-[12px] !w-full md:!w-fit flex items-center justify-center'
        />
      </div>
    </div>
  );
};

export default SearchBarComponent;
