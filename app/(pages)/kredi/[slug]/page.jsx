import Image from 'next/image'
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent'
import SearchBarComponent from '@/components/container/HeroComponent/SearchBarComponent'
import LoanDetailTabs from '@/components/container/LoanDetailTabs'
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent'
import BadgeComponent from '@/components/common/BadgeComponent'
import { resolveBankBySlug, allSupportedSlugs } from '@/constants/banks'
import { generateLoanCards, getDefaultLoanParams, getLoanBreakdown } from '@/utils/loanDataUtils'

export async function generateMetadata({ params, searchParams }) {
  const { bank } = resolveBankBySlug({ slug: params?.slug })
  const creditType = typeof searchParams?.tur === 'string' && searchParams.tur.trim()
    ? searchParams.tur
    : 'İhtiyaç Kredisi'
  
  const bankName = bank?.bankName || 'Banka'
  const title = `${bankName} ${creditType} | ihtiyackredisi.com`
  const description = `${bankName} ${creditType} faiz oranları, vade seçenekleri ve başvuru koşulları. En uygun kredi teklifini karşılaştırın ve hemen başvurun.`
  
  return {
    title,
    description,
    alternates: {
      canonical: `/kredi/${params.slug}`,
    },
  }
}

export function generateStaticParams() {
  return allSupportedSlugs.map((slug) => ({ slug }))
}

function formatCurrency(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '0,00 TL'
  return new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount) + ' TL'
}

function pickLoanUrl({ bank, creditType }) {
  if (!bank) return '#'
  if (creditType === 'Konut Kredisi') return bank.mortgageLoanUrl || bank.personalLoanUrl
  if (creditType === 'Taşıt Kredisi') return bank.carLoanUrl || bank.personalLoanUrl
  return bank.personalLoanUrl
}

export default function Page({ params, searchParams }) {
  const { bank, canonicalSlug } = resolveBankBySlug({ slug: params?.slug })

  const creditType = typeof searchParams?.tur === 'string' && searchParams.tur.trim()
    ? searchParams.tur
    : 'İhtiyaç Kredisi'

  const defaults = getDefaultLoanParams(creditType)
  const loanAmount = Number.parseInt(searchParams?.tutar, 10) || defaults.amount
  const termMonths = Number.parseInt(searchParams?.vade, 10) || defaults.term

  // Build card list to find selected bank's rate safely
  const cards = generateLoanCards(creditType, loanAmount, termMonths)
  const selectedCard = cards.find(c => c.bankSlug === (canonicalSlug || params?.slug || ''))

  const rate = selectedCard?.interestRateValue || 0
  const breakdown = getLoanBreakdown(loanAmount, rate, termMonths, creditType)

  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Kredi Detayı' },
  ]

  const heading = `${new Intl.NumberFormat('tr-TR').format(loanAmount)} TL, ${termMonths} Ay Vadeli ${creditType}`

  return (
    <div className='min-h-screen'>
      <section className='bg-slate-50 pb-[40px]'>
        <div className='custom-container-1'>
          <div className='pt-[40px]'>
            <BreadcrumbComponent items={breadcrumbItems} />
            <div className='mt-[16px] mb-[24px] flex items-center justify-center'>
              <h1 className='text-[24px] leading-[30px] font-semibold text-slate-900'>{heading}</h1>
            </div>

            {/* Search section at top, similar to listing page */}
            <div className='flex w-full items-center justify-center'>
              <SearchBarComponent
                defaultCreditType={creditType}
                addClass='max-w-[920px] w-full'
              />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[16px]'>
              <div className='lg:col-span-2 rounded-[16px] border border-slate-200 bg-white p-[16px] md:p-[20px]'>
                <div className='flex items-start justify-between gap-[12px]'>
                  <div className='flex items-start gap-[24px]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[10px] border border-slate-200 p-[8px] bg-white'>
                        <Image
                          src={bank?.logo || '/banks/default.webp'}
                          alt={bank?.bankName || 'Banka'}
                          width={300}
                          height={100}
                          className='h-[36px] w-auto object-contain'
                        />
                      </div>
                      <div className='w-fit mt-[8px]'>
                      {(() => {
                        const badge = bank?.state
                          ? 'state'
                          : bank?.sponsored
                          ? 'sponsor'
                          : bank?.highPoint
                          ? 'high'
                          : 'none';
                        return <BadgeComponent badge={badge} />;
                      })()}
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-slate-500 text-[12px] leading-[16px]'>Banka</span>
                      <span className='text-slate-900 font-semibold text-[16px] leading-[20px]'>{bank?.bankName || selectedCard?.reviewBankName}</span>
                    </div>
                  </div>
                  <FeaturedButtonComponent
                    text='Hemen Başvur'
                    href={pickLoanUrl({ bank, creditType })}
                    target='_blank'
                  />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-[12px] mt-[16px]'>
                  {[{
                    label: 'Faiz Oranı',
                    value: selectedCard ? `%${selectedCard.interestRateValue.toFixed(2).replace('.', ',')}` : '%0,00'
                  }, {
                    label: 'Aylık Ödeme',
                    value: formatCurrency(breakdown.monthlyPayment)
                  }, {
                    label: 'Toplam Ödeme',
                    value: formatCurrency(breakdown.totalPayment)
                  }].map(({ label, value }) => (
                    <div key={label} className='rounded-[12px] border border-slate-200 p-[12px] bg-slate-50'>
                      <span className='block text-[12px] leading-[16px] text-slate-600'>{label}</span>
                      <span className='block text-[16px] leading-[20px] font-semibold text-slate-900'>{value}</span>
                    </div>
                  ))}
                </div>

                <div className='mt-[16px] rounded-[12px] border border-slate-200 p-[16px]'>
                  <h2 className='text-[16px] leading-[20px] font-semibold text-slate-900 mb-[12px]'>Maliyet Dağılımı</h2>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-[12px]'>
                    {[{
                      label: 'Efektif Yıllık Oran',
                      value: `%${(breakdown.effectiveRate || 0).toFixed(2).replace('.', ',')}`
                    }, {
                      label: 'BSMV (yıllık)',
                      value: `%${(breakdown.bsmvRate || 0).toFixed(2).replace('.', ',')}`
                    }, {
                      label: 'KKDF (yıllık)',
                      value: `%${(breakdown.kkdfRate || 0).toFixed(2).replace('.', ',')}`
                    }, {
                      label: 'Toplam Faiz',
                      value: formatCurrency(breakdown.totalInterest)
                    }].map(({ label, value }) => (
                      <div key={label} className='flex items-center justify-between rounded-[10px] border border-slate-200 bg-white px-[12px] py-[10px]'>
                        <span className='text-[13px] leading-[18px] text-slate-600'>{label}</span>
                        <span className='text-[14px] leading-[18px] font-semibold text-slate-900'>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className='rounded-[16px] border border-slate-200 bg-white p-[16px] md:p-[20px] h-fit'>
                <h3 className='text-[15px] leading-[20px] font-semibold text-slate-900 mb-[12px]'>Seçilen Parametreler</h3>
                <div className='space-y-[10px]'>
                  {[{
                    label: 'Kredi Türü',
                    value: creditType
                  }, {
                    label: 'Tutar',
                    value: formatCurrency(loanAmount)
                  }, {
                    label: 'Vade',
                    value: `${termMonths} Ay`
                  }].map(({ label, value }) => (
                    <div key={label} className='flex items-center justify-between rounded-[10px] border border-slate-200 bg-slate-50 px-[12px] py-[10px]'>
                      <span className='text-[13px] leading-[18px] text-slate-600'>{label}</span>
                      <span className='text-[14px] leading-[18px] font-semibold text-slate-900'>{value}</span>
                    </div>
                  ))}
                </div>

                <div className='mt-[16px]'>
                  <FeaturedButtonComponent
                    text='Hemen Başvur'
                    href={pickLoanUrl({ bank, creditType })}
                    target='_blank'
                    addClass='w-full justify-center'
                  />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs section at bottom */}
      <LoanDetailTabs 
        bankSlug={canonicalSlug || params?.slug}
        loanAmount={loanAmount}
        interestRate={rate}
        termMonths={termMonths}
        creditType={creditType}
      />
    </div>
  )
}
