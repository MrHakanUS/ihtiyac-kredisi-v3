import React from 'react';

// Function to calculate payment schedule
function calculatePaymentSchedule(principal, monthlyRate, termMonths, creditType) {
  if (!principal || !termMonths || monthlyRate === undefined) {
    return []
  }

  // Get tax rates based on credit type
  const BSMV_RATE = creditType === 'Konut Kredisi' ? 0 : 0.05
  const KKDF_RATE = creditType === 'Konut Kredisi' ? 0 : 0.15
  
  // Calculate effective monthly rate
  const baseRate = monthlyRate / 100
  const bsmv = baseRate * BSMV_RATE
  const kkdf = baseRate * KKDF_RATE
  const effectiveRate = baseRate + bsmv + kkdf
  
  // Calculate monthly payment
  let monthlyPayment
  if (effectiveRate === 0) {
    monthlyPayment = principal / termMonths
  } else {
    const numerator = effectiveRate * Math.pow(1 + effectiveRate, termMonths)
    const denominator = Math.pow(1 + effectiveRate, termMonths) - 1
    monthlyPayment = principal * (numerator / denominator)
  }
  
  // Generate payment schedule
  const schedule = []
  let remainingBalance = principal
  
  for (let month = 1; month <= termMonths; month++) {
    const interestPayment = remainingBalance * baseRate
    const taxPayment = remainingBalance * (bsmv + kkdf)
    const principalPayment = monthlyPayment - interestPayment - taxPayment
    
    remainingBalance = Math.max(0, remainingBalance - principalPayment)
    
    schedule.push({
      period: `${month}. Ay`,
      installment: monthlyPayment,
      interest: interestPayment,
      other: taxPayment,
      remaining: remainingBalance
    })
  }
  
  return schedule
}

// Format currency
function formatCurrency(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '0,00 TL'
  return new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount) + ' TL'
}

const header = [
  'Ay - Dönem',
  'Ödenecek Taksit',
  'Dönem Faizi',
  'Diğer (BSMV vs.)',
  'Kalan Borç',
];

const cellBase = 'text-[13px] lg:text-[14px] text-slate-700';

const headerCellBase = 'text-slate-900 text-[15px] leading-[20px]';

const rowBase =
  'grid grid-cols-5 items-center rounded-[12px] px-[14px] lg:px-[16px] py-[12px] lg:py-[14px] bg-slate-50';

const headerBase =
  'grid grid-cols-5 items-center px-[4px] lg:px-[6px] text-left';

const wrapperBase = 'w-full overflow-x-auto';

const innerBase = 'min-w-[900px]';

const colAlign = [
  'text-left',
  'text-left',
  'text-left',
  'text-left',
  'text-left',
];

const PaymentPlanTable = ({ 
  loanAmount = 50000, 
  interestRate = 3.5, 
  termMonths = 12,
  creditType = 'İhtiyaç Kredisi'
}) => {
  const rows = calculatePaymentSchedule(loanAmount, interestRate, termMonths, creditType)
  return (
    <div className={wrapperBase}>
      <div
        role='note'
        aria-live='polite'
        className='mb-[16px] flex items-start gap-[10px] rounded-[12px] border border-amber-200 bg-amber-50 px-[14px] py-[12px] text-amber-900'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='mt-[2px] h-[18px] w-[18px] text-amber-500'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M8.257 3.099c.366-.773 1.42-.773 1.786 0l6.518 13.762A1 1 0 0 1 15.639 18H4.361a1 1 0 0 1-.922-1.139L9.957 3.1ZM9 8a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V8Zm1 8a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 10 16Z'
            clipRule='evenodd'
          />
        </svg>
        <p className='text-[13px] leading-[20px] lg:text-[14px]'>
          Bu kredi planı maliyet hesabı öngörümüz ile hesaplanmıştır. Herhangi
          bir bağlayıcılık taşımaz.
        </p>
      </div>
      <div className={innerBase}>
        <div className={`${headerBase} mt-[36px]`}>
          {header.map((h, i) => (
            <div key={h} className={`${headerCellBase} ${colAlign[i]}`}>
              {h}
            </div>
          ))}
        </div>
        <div className='mt-[16px] flex flex-col gap-[8px]'>
          {rows.length > 0 ? rows.map((r, i) => (
            <div
              key={r.period}
              className={`rounded-[12px] hover:bg-slate-200/50 text-slate-600 ${rowBase} ${
                i % 2 === 0 ? 'bg-slate-200' : ''
              }`}
            >
              <div className={`${cellBase} ${colAlign[0]}`}>{r.period}</div>
              <div className={`${cellBase} ${colAlign[1]}`}>
                {formatCurrency(r.installment)}
              </div>
              <div className={`${cellBase} ${colAlign[2]}`}>{formatCurrency(r.interest)}</div>
              <div className={`${cellBase} ${colAlign[3]}`}>{formatCurrency(r.other)}</div>
              <div className={`${cellBase} ${colAlign[4]}`}>{formatCurrency(r.remaining)}</div>
            </div>
          )) : (
            <div className='text-center py-8 text-slate-500'>
              Ödeme planı hesaplanıyor...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanTable;
