'use client'

import React, { useState } from 'react'
import PaymentPlanTable from '@/components/common/PaymentPlanTable'
import BankReviewsComponent from '@/components/container/BankReviewsComponent'

function LoanDetailTabs({ 
  bankSlug, 
  loanAmount = 50000, 
  interestRate = 3.5, 
  termMonths = 12,
  creditType = 'İhtiyaç Kredisi'
}) {
  const [activeTab, setActiveTab] = useState('payment')
  const tabs = [
    { id: 'payment', label: 'Ödeme Planı' },
    { id: 'reviews', label: 'Kullanıcı Yorumları' },
  ]

  return (
    <section className='custom-container-1 mt-[40px] md:mt-[64px] mb-[60px]'>
      <div className='border border-slate-200 bg-white rounded-[24px] p-[16px] md:p-[20px]'>
        <div className='flex gap-3 lg:gap-4 overflow-x-auto'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type='button'
              aria-pressed={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-fit rounded-[49px] px-[16px] py-[8px] text-[13px] lg:text-[14px] font-medium transition-all duration-300 whitespace-nowrap border select-none cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-accent text-white border-transparent hover:brightness-110'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-accent hover:border-accent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className='mt-[24px]'>
          {activeTab === 'payment' && (
            <div className='text-gray-700'>
              <PaymentPlanTable 
                loanAmount={loanAmount}
                interestRate={interestRate}
                termMonths={termMonths}
                creditType={creditType}
              />
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className='text-gray-700'>
              <BankReviewsComponent bankSlug={bankSlug} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default LoanDetailTabs


