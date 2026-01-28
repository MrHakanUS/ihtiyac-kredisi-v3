'use client'

import React, { useMemo, useState } from 'react'
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent'
import PromotionCard from '@/components/common/PromotionCard'
import { FaUniversity, FaGift, FaMoneyBillWave } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import SelectboxComponent from '@/components/common/SelectboxComponent'
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent'
import AdZoneComponent from '@/components/common/AdZoneComponent'
import TextComponent from '@/components/container/TextComponent'
import { ALL_PROMOTIONS } from '@/constants/promosyon'
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

export default function ClientPage() {
  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Promosyon' }
  ]

  const banks = [...new Set(ALL_PROMOTIONS.map(promo => promo.bankName))]
  const promotionTypes = ['Emekli Promosyonu', 'Maaş Promosyonu', 'Hesap Açılış Promosyonu']

  const [selectedBank, setSelectedBank] = useState('Tüm Bankalar')
  const [selectedPromotionType, setSelectedPromotionType] = useState('Tüm Promosyonlar')
  const [selectedMaxAnnualFee, setSelectedMaxAnnualFee] = useState('Tüm Aidatlar')

  const filteredPromotions = useMemo(() => {
    let list = [...ALL_PROMOTIONS]
    if (selectedBank !== 'Tüm Bankalar') {
      list = list.filter(promo => promo.bankName.includes(selectedBank))
    }
    if (selectedMaxAnnualFee !== 'Tüm Aidatlar') {
      const maxFee = Number(String(selectedMaxAnnualFee).replace(/[^0-9]/g, ''))
      list = list.filter(promo => {
        const fee = promo.annualFee === 'Ücretsiz' || promo.annualFee === '0' ? 0 : Number(String(promo.annualFee).replace(/[^0-9]/g, ''))
        return fee <= maxFee
      })
    }
    return list
  }, [selectedBank, selectedMaxAnnualFee])

  

  return (
    <main>
      <div className=''>
        <div className='custom-container-1 flex flex-col items-center px-4 pt-[56px]'>
          <div className='max-w-[920px] w-full flex justify-center items-center text-center'>
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
          <div className='max-w-[920px] w-full mb-[40px] flex justify-center items-center text-center'>
            <h1 className='text-[28px] leading-[32px] font-semibold text-slate-900'>
              Banka Promosyonlarını Karşılaştırın
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
                label='Banka'
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
                options={['Tüm Promosyonlar', ...promotionTypes]}
                label='Promosyon Türü'
                defaultValue={selectedPromotionType}
                icon={<FaGift />}
                onChange={setSelectedPromotionType}
                className='w-full'
              />
            </div>

            <div className='hidden md:block h-[52px] w-[1px] bg-slate-200' />
            <div className='md:hidden h-[1px] w-full bg-slate-200' />

            <div className='w-full md:w-1/3'>
              <SelectboxComponent
                options={['Tüm Aidatlar', 'Ücretsiz', '200 TL', '240 TL']}
                label='Maksimum Yıllık Aidat'
                defaultValue={selectedMaxAnnualFee}
                icon={<FaMoneyBillWave />}
                onChange={setSelectedMaxAnnualFee}
                className='w-full'
              />
            </div>
          </div>

          <div className='w-full md:w-[96px] flex items-center justify-center'>
            <FeaturedButtonComponent
              text='Bul'
              icon={<IoSearchOutline />}
              className='!rounded-[12px] !px-[20px] !py-[12px] !gap-[12px] !w-full md:!w-fit flex items-center justify-center'
            />
          </div>
        </div>

        <div className='w-full flex flex-wrap -mx-2'>
          {filteredPromotions.length > 0 ? (
            filteredPromotions.map((promo, index) => {
              // Get bank URL from banks/index.js using bank name
              const bankSlug = getBankSlugFromName(promo.bankName);
              const { bank } = resolveBankBySlug({ slug: bankSlug });
              const applyUrl = bank?.bankUrl || promo.applyUrl || '#';
              
              return (
                <div key={promo.bankSlug} className='w-full md:w-1/2 lg:w-1/3 px-2 mb-4'>
                  <PromotionCard
                    bankImage={promo.bankImage}
                    bankName={promo.bankName}
                    title={promo.title}
                    shortDescription={promo.shortDescription}
                    features={promo.features}
                    promotionType='Emekli Promosyonu'
                    rating={promo.rating}
                    reviewCount={promo.reviewCount}
                    buttonColor={determineButtonColor(promo.bankName)}
                    detailsHref={`/promosyon/${promo.bankSlug}`}
                    applyHref={applyUrl}
                    annualFee={promo.annualFee}
                  />
                </div>
              );
            })
          ) : (
            <div className='w-full px-2'>
              <div className='w-full text-center flex items-center justify-center rounded-lg border-gray-200 p-12'>
                <p className='text-slate-600'>
                  Seçilen filtrelere uygun promosyon bulunamadı.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      
    </main>
  )
}

// Determine button color based on bank name
function determineButtonColor(bankName) {
  if (!bankName) return 'primary';

  const name = bankName.toLowerCase();
  if (name.includes('garanti')) return 'primary';
  if (name.includes('iş') || name.includes('is')) return 'primary';
  if (name.includes('akbank')) return 'primary';
  if (name.includes('qnb')) return 'purple';
  if (name.includes('ing')) return 'orange';
  if (name.includes('ziraat')) return 'green';
  if (name.includes('halk')) return 'primary';
  if (name.includes('vakıf')) return 'primary';

  return 'primary';
}
