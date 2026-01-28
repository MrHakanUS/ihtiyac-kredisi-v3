'use client'

import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent'
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent'
import SingleStarComponent from '@/components/common/SingleStarComponent'
import SearchBarComponent from '@/components/container/HeroComponent/SearchBarComponent'
import TextComponent from '@/components/container/TextComponent'
import Image from 'next/image'
import { IoCheckmark } from 'react-icons/io5'
import { LuChevronDown } from 'react-icons/lu'
import { generateLoanCards, getDefaultLoanParams, getBankNamesForFilter } from '@/utils/loanDataUtils'
import { loanRates } from '@/constants/loan'
import { canonicalBankMap } from '@/constants/banks'

// Pick loan URL based on bank and credit type
function pickLoanUrl({ bankSlug, creditType }) {
  const bank = canonicalBankMap[bankSlug]
  if (!bank) return '#'
  if (creditType === 'Konut Kredisi') return bank.mortgageLoanUrl || bank.personalLoanUrl
  if (creditType === 'Taşıt Kredisi') return bank.carLoanUrl || bank.personalLoanUrl
  return bank.personalLoanUrl
}

// Hook for click outside detection
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

// Bank dropdown component
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
        <ul className='absolute left-0 top-[calc(100%+8px)] z-20 w-full rounded-[12px] border border-slate-200 bg-white p-[6px] shadow-lg max-h-[300px] overflow-y-auto'>
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

function CalculatorPage({
  title,
  breadcrumbItems,
  summary,
  features,
  bankImage,
  bankName,
  rating,
  reviewCount,
  reviewBankName,
  ctaText,
  textcontent,
}) {
  if (!title) return null
  
  const [currentLoanParams, setCurrentLoanParams] = useState(null)
  const [selectedBankName, setSelectedBankName] = useState('Tüm Bankalar')

  const computedBreadcrumb = breadcrumbItems?.length ? breadcrumbItems : [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: title },
  ]

  const selectedCreditType = currentLoanParams?.creditType || 'İhtiyaç Kredisi'

  // Get available banks with their rates for the selected credit type
  const availableBanks = useMemo(() => {
    let loanData = []
    switch (selectedCreditType) {
      case 'İhtiyaç Kredisi':
        loanData = loanRates.ihtiyacKredisi
        break
      case 'Konut Kredisi':
        loanData = loanRates.konutKredisi
        break
      case 'Taşıt Kredisi':
        loanData = loanRates.tasitKredisi
        break
      default:
        loanData = loanRates.ihtiyacKredisi
    }

    const banks = loanData.map(loan => ({
      name: loan.banka,
      rate: `%${loan.faizOrani.toFixed(2).replace('.', ',')}`
    }))

    // Add "Tüm Bankalar" option at the beginning
    return [{ name: 'Tüm Bankalar', rate: 'En İyi Teklif' }, ...banks]
  }, [selectedCreditType])

  // Reset bank selection when credit type changes
  useEffect(() => {
    setSelectedBankName('Tüm Bankalar')
  }, [selectedCreditType])

  // Generate loan cards based on current parameters
  const defaultParams = getDefaultLoanParams('İhtiyaç Kredisi')
  const allLoanCards = useMemo(() => {
    const params = currentLoanParams || defaultParams
    return generateLoanCards(
      currentLoanParams?.creditType || 'İhtiyaç Kredisi',
      params.amount,
      params.termMonths || params.term
    )
  }, [currentLoanParams, defaultParams])

  // Filter by selected bank if not "Tüm Bankalar"
  const filteredLoanCards = useMemo(() => {
    if (selectedBankName === 'Tüm Bankalar') {
      return allLoanCards
    }
    return allLoanCards.filter(card => card.bankName === selectedBankName)
  }, [allLoanCards, selectedBankName])

  // Get the best offer (first one, already sorted by interest rate)
  const calculatedData = filteredLoanCards && filteredLoanCards.length > 0 ? filteredLoanCards[0] : null

  // Use calculated data if available, otherwise fall back to props
  const displayData = calculatedData || {
    monthlyPayment: summary?.monthlyInstallment || '10.000 TL',
    totalPayment: summary?.totalRepayment || '53.341,12 TL',
    interestRate: summary?.interestRate || '%2,99',
    features: features || [
      'İhtiyaç kredilerinde vade süreleri yasa ve banka politikasına göre değişebilir.',
      'Başvuru değerlendirmesi bankaya aittir.',
      'Faiz oranları müşteri skoruna göre değişiklik gösterebilir.',
    ],
    bankImage: bankImage || '/banks/garanti.png',
    bankName: bankName || 'Garanti BBVA',
    rating: rating || '4,6',
    reviewCount: reviewCount || '534',
    reviewBankName: reviewBankName || (bankName || 'Garanti BBVA'),
  }

  const safeCtaText = ctaText || 'Hemen Başvur'
  const params = currentLoanParams || defaultParams
  const displayAmount = params.amount || defaultParams.amount
  const displayTerm = params.termMonths || defaultParams.term

  // Get loan URL for selected bank
  const loanUrl = calculatedData?.bankSlug 
    ? pickLoanUrl({ bankSlug: calculatedData.bankSlug, creditType: selectedCreditType })
    : '#'

  // Handle parameter changes from SearchBarComponent (memoized to avoid render loop)
  const handleParametersChange = useCallback((params) => {
    setCurrentLoanParams(params)
  }, [])

  return (
    <section className='flex pt-[56px] flex-col items-center custom-container-1 gap-y-[48px]'>
      <div className='custom-container-1 flex flex-col items-center'>
        <BreadcrumbComponent items={computedBreadcrumb} />
        <h1 className='font-semibold text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] text-slate-900 text-center md:text-left'>
          {title}
        </h1>
      </div>

      <div className='w-full max-w-[920px] flex flex-col gap-4'>
        <SearchBarComponent 
          defaultCreditType='İhtiyaç Kredisi'
          onParametersChange={handleParametersChange}
        />
        
        {/* Bank Selection */}
        <div className='border border-slate-200 rounded-[20px] bg-white px-[16px] sm:px-[20px] py-[16px]'>
          <div className='flex flex-col md:flex-row items-stretch md:items-center gap-[12px]'>
            <div className='flex items-center gap-2'>
              <span className='text-slate-900 font-semibold text-[15px] leading-[20px]'>
                Banka Seçimi:
              </span>
              <span className='text-slate-500 text-[13px] leading-[16px] hidden md:inline'>
                {selectedBankName === 'Tüm Bankalar' ? 'En düşük faizli teklifi göster' : 'Sadece seçili bankayı göster'}
              </span>
            </div>
            <div className='flex-1 md:max-w-md md:ml-auto'>
              <BankDropdown
                value={selectedBankName}
                onChange={setSelectedBankName}
                banks={availableBanks}
              />
            </div>
          </div>
        </div>
      </div>

      <section className='w-full'>
        <div className='hover:border-primary transition-all duration-300 border border-slate-200 rounded-[24px] p-[16px] md:p-[24px] bg-white'>
          <div className='flex flex-col gap-y-[16px] md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-[24px] mb-[24px] w-full'>
            <ul className='grid grid-cols-1 gap-y-[16px] sm:grid-cols-3 md:flex md:items-center md:justify-between md:w-8/12 w-full'>
              <li className='flex flex-col gap-y-[8px] text-center md:text-left'>
                <span className='text-slate-600 text-[14px] leading-[18px]'>
                  Aylık Taksit Tutarı
                </span>
                <span className='font-semibold text-slate-900 text-[20px] leading-[26px]'>
                  {displayData.monthlyPayment}
                </span>
              </li>
              <li className='flex flex-col gap-y-[8px] text-center md:text-left'>
                <span className='text-slate-600 text-[14px] leading-[18px]'>
                  Toplam Geri Ödeme
                </span>
                <span className='font-semibold text-slate-900 text-[20px] leading-[26px]'>
                  {displayData.totalPayment}
                </span>
              </li>
              <li className='flex flex-col gap-y-[8px] text-center md:text-left'>
                <span className='text-slate-600 text-[14px] leading-[18px]'>
                  Faiz Oranı
                </span>
                <span className='font-semibold text-slate-900 text-[20px] leading-[26px]'>
                  {displayData.interestRate}
                </span>
              </li>
            </ul>
            <div className='w-full md:w-4/12 flex justify-center md:justify-end'>
              <FeaturedButtonComponent 
                text={safeCtaText} 
                href={loanUrl}
                target='_blank'
              />
            </div>
          </div>

          <ul className='flex flex-col border-b pb-[24px] border-slate-200 gap-y-[16px]'>
            {displayData.features.map((item, index) => (
              <li key={index} className='flex items-center gap-x-[12px]'>
                <span className='text-green-500'>
                  {/* icon rendered by CSS background in original; using unicode check as fallback */}
                  <IoCheckmark className='text-green-500' />
                </span>
                <span className='text-slate-600 text-[14px] leading-[18px] font-medium'>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className='flex flex-col gap-y-[16px] lg:flex-row lg:items-center lg:justify-between pt-[24px]'>
            <div className='flex items-center gap-x-[16px]'>
              <div className='h-[28px] w-auto max-w-[140px]'>
                <Image
                  src={displayData.bankImage}
                  alt={displayData.bankName}
                  width={300}
                  height={100}
                  className='h-full w-auto'
                />
              </div>
              <p className='text-slate-900 text-[14px] leading-[18px]'>
                {displayAmount.toLocaleString('tr-TR')} TL tutarında {displayTerm} ay geri ödemeli {selectedCreditType.toLowerCase()} tahmini oranlarıdır.
              </p>
            </div>
            <div className='flex items-center gap-x-[16px] md:justify-end'>
              <SingleStarComponent rating={displayData.rating} addClass='bg-white' />
              <p className='text-slate-600 text-[14px] leading-[18px]'>
                {displayData.reviewCount > 0 ? (
                  <>
                    {displayData.reviewCount} kişi
                    <span className='text-primary font-semibold px-[4px]'>
                      {displayData.reviewBankName}
                    </span>
                    hakkında yorum yazdı
                  </>
                ) : (
                  <>
                    <span className='text-primary font-semibold px-[4px]'>
                      {displayData.reviewBankName}
                    </span>
                    için tahmini değerlendirme
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <TextComponent text={textcontent} />
    </section>
  )
}

export default CalculatorPage


