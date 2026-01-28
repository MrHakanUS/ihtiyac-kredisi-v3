"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { LuChevronDown } from 'react-icons/lu'

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

function useClickOutside({ onOutsideClick }) {
  const rootRef = useRef(null)

  useEffect(() => {
    function handle(event) {
      if (!rootRef.current) return
      if (rootRef.current.contains(event.target)) return
      onOutsideClick()
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [onOutsideClick])

  return rootRef
}

function CreditTypeDropdown({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useClickOutside({ onOutsideClick: () => setIsOpen(false) })

  function toggle() {
    setIsOpen(prev => !prev)
  }

  return (
    <div ref={rootRef} className='relative'>
      <button
        type='button'
        onClick={toggle}
        className='flex h-[56px] w-full items-center justify-between rounded-[16px] border border-slate-200 bg-white px-[16px] py-[10px] text-left hover:border-slate-300 focus:outline-none'
      >
        <span className='text-slate-900 font-medium text-[15px] leading-[20px]'>{value}</span>
        <LuChevronDown className={`text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul className='absolute left-0 top-[calc(100%+8px)] z-20 w-full rounded-[12px] border border-slate-200 bg-white p-[6px] shadow-lg'>
          {options.map(option => (
            <li
              key={option}
              onClick={() => { onChange(option); setIsOpen(false) }}
              className={`cursor-pointer rounded-[8px] px-[10px] py-[10px] text-[14px] leading-[18px] hover:bg-slate-50 ${
                option === value ? 'text-primary' : 'text-slate-800'
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function BankDropdown({ value, onChange, banks }) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useClickOutside({ onOutsideClick: () => setIsOpen(false) })

  const selectedBank = banks.find(b => b.name === value) ?? banks[0]

  function toggle() {
    setIsOpen(prev => !prev)
  }

  return (
    <div ref={rootRef} className='relative'>
      <button
        type='button'
        onClick={toggle}
        className='flex h-[56px] w-full items-center justify-between rounded-[16px] border border-slate-200 bg-white px-[16px] py-[10px] text-left hover:border-slate-300 focus:outline-none'
      >
        <div className='flex items-center gap-x-[10px]'>

          <span className='text-slate-900 text-[14px] leading-[18px] font-medium'>{selectedBank.name}</span>
        </div>
        <div className='flex items-center gap-x-[8px]'>
          <span className='text-slate-600 text-[14px] leading-[18px]'>{selectedBank.rate}</span>
          <LuChevronDown className={`text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {isOpen && (
        <ul className='absolute left-0 top-[calc(100%+8px)] z-20 w-full rounded-[12px] border border-slate-200 bg-white p-[6px] shadow-lg'>
          {banks.map(bank => (
            <li
              key={bank.name}
              onClick={() => { onChange(bank.name); setIsOpen(false) }}
              className={`flex items-center justify-between rounded-[8px] px-[10px] py-[10px] cursor-pointer hover:bg-slate-50 ${
                bank.name === selectedBank.name ? 'text-primary' : 'text-slate-800'
              }`}
            >
              <div className='flex items-center gap-x-[10px]'>
                <span className='text-[14px] leading-[18px]'>{bank.name}</span>
              </div>
              <span className='text-[14px] leading-[18px]'>{bank.rate}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Checkbox({ checked, onChange, label }) {
  return (
    <label className='flex items-center gap-x-[12px] cursor-pointer select-none'>
      <input
        type='checkbox'
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className='ik-checkbox ik-checkbox-sm'
      />
      <span className='text-slate-900 text-[14px] leading-[18px]'>{label}</span>
    </label>
  )
}

function LoanFilterComponent({ 
  addClass = '',
  onCreditTypeChange,
  onLoanAmountChange,
  onLoanTermChange,
  initialCreditType,
  initialLoanAmount,
  initialLoanTerm
}) {
  const CREDIT_TYPES = ['İhtiyaç Kredisi', 'Konut Kredisi', 'Taşıt Kredisi']
  const BANKS = [
    { name: 'Garanti BBVA', logo: '/banks/garanti.png', rate: '%2,99' },
    { name: 'Akbank', logo: '/banks/akbank.png', rate: '%3,10' },
    { name: 'ING', logo: '/banks/ing.png', rate: '%3,05' },
    { name: 'İş Bankası', logo: '/banks/isbank.png', rate: '%3,00' },
    { name: 'QNB Finansbank', logo: '/banks/qnb.webp', rate: '%3,12' },
    { name: 'Ziraat Bankası', logo: '/banks/ziraat.png', rate: '%3,20' }
  ]

  const [selectedCreditType, setSelectedCreditType] = useState(initialCreditType || CREDIT_TYPES[0])
  const [selectedBankName, setSelectedBankName] = useState(BANKS[0].name)
  const [loanAmount, setLoanAmount] = useState(initialLoanAmount || '')
  const [loanTerm, setLoanTerm] = useState(initialLoanTerm || '')
  const [wantsCustomInterest, setWantsCustomInterest] = useState(true)
  const [isFirstTimeAtBank, setIsFirstTimeAtBank] = useState(false)
  const loanAmountInputRef = useRef(null)
  const loanTermInputRef = useRef(null)

  // Notify parent component when values change
  function handleCreditTypeChange(value) {
    setSelectedCreditType(value)
    if (onCreditTypeChange) onCreditTypeChange(value)
  }

  function handleLoanAmountChange(value) {
    setLoanAmount(value)
    if (onLoanAmountChange) onLoanAmountChange(value)
  }

  function handleLoanTermChange(value) {
    setLoanTerm(value)
    if (onLoanTermChange) onLoanTermChange(value)
  }

  return (
    <div className={`border border-slate-200 rounded-[24px] bg-white px-[20px] py-[16px] w-full ${addClass}`}> 
      <div className='grid grid-cols-1 gap-[16px] md:grid-cols-4'>
        <div className='flex flex-col gap-y-[8px]'>
          <span className='pl-[16px] text-[14px] leading-[18px] text-slate-900 select-none'>Kredi Türü</span>
          <CreditTypeDropdown
            value={selectedCreditType}
            onChange={handleCreditTypeChange}
            options={CREDIT_TYPES}
          />
        </div>

        <div className='flex flex-col gap-y-[8px]'>
          <span className='pl-[16px] text-[14px] leading-[18px] text-slate-900 select-none'>Kredi Türü</span>
          <BankDropdown
            value={selectedBankName}
            onChange={setSelectedBankName}
            banks={BANKS}
          />
        </div>

        <div className='flex flex-col gap-y-[8px]'>
          <span className='pl-[16px] text-[14px] leading-[18px] text-slate-900 select-none'>Kredi Tutarı</span>
          <div
            className='flex h-[56px] w-full items-center justify-between rounded-[16px] border border-slate-200 bg-white px-[16px] py-[10px] hover:border-slate-300 focus:border-primary transition-colors duration-300 cursor-text'
            onClick={() => loanAmountInputRef.current && loanAmountInputRef.current.focus()}
          >
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
                handleLoanAmountChange(rawDigits)
                requestAnimationFrame(() => {
                  if (!loanAmountInputRef.current) return
                  const nextCaret = getCaretIndexFromDigitCount(formatted, typedDigitCount)
                  loanAmountInputRef.current.setSelectionRange(nextCaret, nextCaret)
                })
              }}
              placeholder=''
              className='flex-1 bg-transparent outline-none text-slate-900 text-[14px] leading-[18px]'
              ref={loanAmountInputRef}
              aria-label='Kredi Tutarı'
              autoComplete='off'
              enterKeyHint='done'
            />
          </div>
        </div>

        <div className='flex flex-col gap-y-[8px]'>
          <span className='pl-[16px] text-[14px] leading-[18px] text-slate-900 select-none'>Kredi Vadesi</span>
          <div
            className='flex h-[56px] w-full items-center justify-between rounded-[16px] border border-slate-200 bg-white px-[16px] py-[10px] hover:border-slate-300 cursor-text'
            onClick={() => loanTermInputRef.current && loanTermInputRef.current.focus()}
          >
            <input
              type='number'
              value={loanTerm}
              onChange={e => handleLoanTermChange(e.target.value)}
              placeholder=''
              className='flex-1 bg-transparent outline-none text-slate-900 text-[14px] leading-[18px]'
              ref={loanTermInputRef}
            />
          </div>
        </div>
      </div>

      <div className='mt-[32px] flex flex-col gap-y-[12px] md:flex-row md:items-center md:gap-x-[24px]'>
        <Checkbox
          checked={isFirstTimeAtBank}
          onChange={setIsFirstTimeAtBank}
          label='Bu bankada ilk defa hesap açıyorum.'
        />
      </div>
    </div>
  )
}

export default LoanFilterComponent


