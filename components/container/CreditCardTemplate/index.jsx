'use client'

import React, { useMemo, useState } from 'react'
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent'
import CreditCardVerticalCard from '@/components/common/CreditCardVerticalCard'
import { FaUniversity, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import SelectboxComponent from '@/components/common/SelectboxComponent'
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent'
import AdZoneComponent from '@/components/common/AdZoneComponent'
import TextComponent from '@/components/container/TextComponent'

export function CreditCardTemplate({ texts = {}, textcontent }) {
  const defaultTexts = {
    breadcrumbLabel: 'Kredi Kartı',
    pageTitle: 'En Uygun Kredi Kartı Tekliflerini Karşılaştırın',
    selectBankLabel: 'Banka',
    selectCardTypeLabel: 'Kart Türü',
    selectFeeLabel: 'Maksimum Yıllık Aidat',
    searchButtonText: 'Bul',
    emptyStateText: 'Seçilen filtrelere uygun kredi kartı bulunamadı.'
  }
  const t = { ...defaultTexts, ...texts }

  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: t.breadcrumbLabel }
  ]

  const allCards = [
    {
      bankImage: '/banks/GarantiBBVA.webp',
      bankName: 'Garanti BBVA Bonus Card',
      annualFee: '260 TL',
      shoppingInstallmentFee: '4,25',
      features: [
        'Bonus Puan Programı',
        'Yıllık aidat iadesi kampanyaları',
        'Taksitli alışveriş ve nakit avans'
      ],
      rating: '4,6',
      reviewCount: '534',
      reviewBankName: 'Garanti BBVA',
      buttonColor: 'primary'
    },
    {
      bankImage: '/banks/is.webp',
      bankName: 'İş Bankası Maximum Card',
      annualFee: '200 TL',
      shoppingInstallmentFee: '4,25',
      features: [
        'Maximum kampanya ve indirimler',
        'Alışverişte ve nakitte taksit',
        'Yurt içi ve yurt dışı kampanyalar'
      ],
      rating: '4,5',
      reviewCount: '789',
      reviewBankName: 'İş Bankası',
      buttonColor: 'primary'
    },
    {
      bankImage: '/banks/akbank.webp',
      bankName: 'Akbank Axess Card',
      annualFee: '240 TL',
      shoppingInstallmentFee: '4,25',
      features: [
        'Chip-para kazanımı',
        'Alışveriş kampanyalarına özel katılım',
        'Taksitli nakit avans'
      ],
      rating: '4,4',
      reviewCount: '456',
      reviewBankName: 'Akbank',
      buttonColor: 'primary'
    },
    {
      bankImage: '/banks/qnb.webp',
      bankName: 'QNB Finansbank CardFinans',
      annualFee: '180 TL',
      shoppingInstallmentFee: '4,25',
      features: ['Faizsiz taksit seçenekleri', 'Nakit avans ve taksitlendirme'],
      rating: '4,2',
      reviewCount: '423',
      reviewBankName: 'QNB Finansbank',
      buttonColor: 'purple'
    },
    {
      bankImage: '/banks/ing.webp',
      bankName: 'ING Bonus Card',
      annualFee: '220 TL',
      shoppingInstallmentFee: '4,25',
      features: [
        'Dijital müşterilere özel kampanya',
        'Bonus kazanımı ve taksit'
      ],
      rating: '4,7',
      reviewCount: '1.256',
      reviewBankName: 'ING',
      buttonColor: 'orange'
    },
    {
      bankImage: '/banks/ziraat.webp',
      bankName: 'Ziraat Bankası Bankkart',
      annualFee: '180 TL',
      shoppingInstallmentFee: '4,25',
      features: ['Bankkart Lira kazanımı', 'Taksit ve özel destekler'],
      rating: '4,3',
      reviewCount: '612',
      reviewBankName: 'Ziraat Bankası',
      buttonColor: 'green'
    }
  ]

  const banks = [
    'Garanti BBVA',
    'İş Bankası',
    'Akbank',
    'QNB Finansbank',
    'ING',
    'Ziraat Bankası'
  ]

  const [selectedBank, setSelectedBank] = useState('Tüm Bankalar')
  const [selectedCardType, setSelectedCardType] = useState('Tüm Kartlar')
  const [selectedMaxAnnualFee, setSelectedMaxAnnualFee] = useState('Tüm Aidatlar')

  const filteredCards = useMemo(() => {
    let list = [...allCards]
    if (selectedBank !== 'Tüm Bankalar') list = list.filter(card => card.bankName.includes(selectedBank))
    if (selectedMaxAnnualFee !== 'Tüm Aidatlar') {
      const maxFee = Number(String(selectedMaxAnnualFee).replace(/[^0-9]/g, ''))
      list = list.filter(card => {
        const fee = Number(String(card.annualFee).replace(/[^0-9]/g, ''))
        return fee <= maxFee
      })
    }
    return list
  }, [allCards, selectedBank, selectedMaxAnnualFee])

  return (
    <main>
      <div className=''>
        <div className='custom-container-1 flex flex-col items-center px-4 pt-[56px]'>
          <div className='max-w-[920px] w-full flex justify-center items-center text-center'>
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
          <div className='max-w-[920px] w-full mb-[40px] flex justify-center items-center text-center'>
            <h1 className='text-[28px] leading-[32px] font-semibold text-slate-900'>
              {t.pageTitle}
            </h1>
          </div>
        </div>
      </div>

      <div className='custom-container-1 flex flex-col gap-8'>
        <div className='border border-slate-200 rounded-[20px] bg-white flex flex-col md:flex-row items-stretch md:items-center justify-between w-full px-[16px] sm:px-[20px] py-[12px] md:py-[8px] gap-[12px] md:gap-0'>
          <div className='flex w-full md:w-10/12 flex-col md:flex-row items-stretch md:items-center gap-[12px] md:gap-x-[20px]'>
            <div className='w-full md:w-1/3'>
              <SelectboxComponent
                options={['Tüm Bankalar', ...banks]}
                label={t.selectBankLabel}
                defaultValue={selectedBank}
                icon={<FaUniversity />}
                onChange={setSelectedBank}
                className='w-full'
              />
            </div>

            <div className='hidden md:block h-[52px] w-[1px] bg-slate-200' />
            <div className='md:hidden h-[1px] w-full bg-slate-200' />

            <div className='w-full md:w-1/3'>
              <SelectboxComponent
                options={['Tüm Kartlar', 'Bonus', 'World', 'Maximum', 'Axess', 'Bankkart']}
                label={t.selectCardTypeLabel}
                defaultValue={selectedCardType}
                icon={<FaCreditCard />}
                onChange={setSelectedCardType}
                className='w-full'
              />
            </div>

            <div className='hidden md:block h-[52px] w-[1px] bg-slate-200' />
            <div className='md:hidden h-[1px] w-full bg-slate-200' />

            <div className='w-full md:w-1/3'>
              <SelectboxComponent
                options={['Tüm Aidatlar', '200 TL', '240 TL', '260 TL']}
                label={t.selectFeeLabel}
                defaultValue={selectedMaxAnnualFee}
                icon={<FaMoneyBillWave />}
                onChange={setSelectedMaxAnnualFee}
                className='w-full'
              />
            </div>
          </div>

          <div className='w-full md:w-[96px] flex items-center justify-center'>
            <FeaturedButtonComponent
              text={t.searchButtonText}
              icon={<IoSearchOutline />}
              className='!rounded-[12px] !px-[20px] !py-[12px] !gap-[12px] !w-full md:!w-fit flex items-center justify-center'
            />
          </div>
        </div>

        <div className='w-full flex flex-wrap -mx-2'>
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div key={index} className='w-full md:w-1/2 lg:w-1/3 px-2 mb-4'>
                <CreditCardVerticalCard
                  bankImage={card.bankImage}
                  bankName={card.bankName}
                  annualFee={Number(String(card.annualFee).replace(/[^0-9]/g, ''))}
                  shoppingRate={card.shoppingInstallmentFee}
                  features={card.features}
                  buttonColor={card.buttonColor}
                  showCreditCardImage={false}
                />
              </div>
            ))
          ) : (
            <div className='w-full px-2'>
              <div className='w-full text-center flex items-center justify-center rounded-lg border-gray-200 p-12'>
                <p className='text-slate-600'>
                  {t.emptyStateText}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-y-[56px] mt-[56px]'>
        <section className='w-full custom-container-1'>
          <TextComponent text={textcontent} />
        </section>
        <div className='w-full custom-container-1'>
          <AdZoneComponent src='/adzone.png' />
        </div>
      </div>
    </main>
  )
}

export default CreditCardTemplate


