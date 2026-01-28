import { loanRates } from '@/constants/loan'
import { canonicalBankMap } from '@/constants/banks'

// Bank name mapping between loan.js and banks/index.js
const bankNameMapping = {
  'Akbank': 'akbank',
  'Albaraka Türk': 'albaraka',
  'DenizBank': 'denizbank',
  'Enpara.com': 'enpara',
  'Garanti BBVA': 'garanti',
  'Getir Finans': 'getir-finans',
  'Fibabanka': 'fibabanka',
  'ING Bank': 'ing-bank',
  'ING': 'ing-bank',
  'İş Bankası': 'is-bankasi',
  'Türkiye İş Bankası': 'is-bankasi',
  'QNB Finansbank': 'qnb',
  'TEB': 'teb',
  'Türkiye Finans': 'turkiye-finans',

  'Yapı Kredi': 'yapi-kredi',
  'Ziraat Katılım': 'ziraat-katilim',
  'Kuveyt Türk': 'kuveytturk',
  'Dünya Katılım': 'dunya-katilim',
  'T.C. Ziraat Bankası': 'ziraat',
  'Ziraat Bankası': 'ziraat',
  'Halkbank': 'halkbank',

  'CEPTETEB': 'cepteteb',
  'Cepteteb': 'cepteteb',
  'ON': 'on-dijital-bankacilik',
  'N Kolay': 'n-kolay',
  'Alternatif Bank': 'alternatif-bank',
  'Garanti Bbva': 'garanti',
  'Albaraka Turk': 'albaraka',
  'Is Bankasi': 'is-bankasi',
  'Kuveyt Turk': 'kuveytturk',
  'Teb Turk Ekonomi Bankasi': 'teb',
  'Turkiye Finans': 'turkiye-finans',
  'Vakif Katilim': 'vakif-katilim',
  'Yapi Kredi': 'yapi-kredi',
  'Ziraat Katilim': 'ziraat',
  'Getirfinans': 'getir-finans',
  'Enparacom': 'enpara',
  'On Dijital Bankacilik': 'on-dijital-bankacilik',
  'albaraka-turk': 'albaraka',
  'garanti-bbva': 'garanti',
  'is-bankasi': 'is-bankasi',
  'kuveyt-turk': 'kuveytturk',
  'teb-turk-ekonomi-bankasi': 'teb',
  'ziraat-katilim': 'ziraat',
  'cepteteb': 'cepteteb',
};

// Function to find bank slug, with fallback for unmapped banks
function findBankSlug(bankName) {
  const normalizedBankName = bankName.toLowerCase().replace(/ /g, '');
  for (const [key, value] of Object.entries(bankNameMapping)) {
    if (key.toLowerCase().replace(/ /g, '') === normalizedBankName) {
      return value;
    }
  }

  // Try to find by searching in canonicalBankMap
  const foundEntry = Object.entries(canonicalBankMap).find(([key, bank]) => 
    bank.bankName.toLowerCase().replace(/ /g, '') === normalizedBankName
  )
  
  if (foundEntry) {
    return foundEntry[0]
  }
  
  // Default fallback
  return null
}

// Determine tax rates per credit type
function getTaxRatesForCreditType(creditType) {
  // BSMV and KKDF are not applied for Konut Kredisi
  if (creditType === 'Konut Kredisi') {
    return { BSMV_RATE: 0, KKDF_RATE: 0 }
  }
  // Applied for İhtiyaç and Taşıt Kredisi
  return { BSMV_RATE: 0.15, KKDF_RATE: 0.15 } // Updated to 15% as per new regulations
}

// Calculate monthly payment using Turkish banking formula with taxes
// Includes BSMV (Banka ve Sigorta Muameleleri Vergisi) and KKDF (Kaynak Kullanımını Destekleme Fonu)
function calculateMonthlyPayment(principal, annualRate, termMonths, creditType) {
  if (annualRate === 0) {
    return principal / termMonths;
  }
  
  // Turkish banking taxes and fees (conditional by credit type)
  const { BSMV_RATE, KKDF_RATE } = getTaxRatesForCreditType(creditType)
  
  // Calculate effective interest rate including taxes
  const baseMonthlyRate = annualRate / 100
  const bsmv = baseMonthlyRate * BSMV_RATE
  const kkdf = baseMonthlyRate * KKDF_RATE
  const effectiveMonthlyRate = baseMonthlyRate + bsmv + kkdf
  
  // Calculate monthly payment with effective rate
  const numerator = effectiveMonthlyRate * Math.pow(1 + effectiveMonthlyRate, termMonths)
  const denominator = Math.pow(1 + effectiveMonthlyRate, termMonths) - 1
  const monthlyPayment = principal * (numerator / denominator)
  
  return monthlyPayment
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount) + ' TL'
}

// Generate stable rating based on bank name (to avoid rerender issues)
function generateStableRating(bankName) {
  const hash = bankName.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  return 3.8 + (Math.abs(hash) % 15) / 10 // Generates rating between 3.8 and 5.3
}

// Generate stable review count based on bank name (to avoid rerender issues)
function generateStableReviewCount(bankName, bankSlug) {
  // Get real review count from bank data
  const bankInfo = canonicalBankMap[bankSlug]
  if (bankInfo?.reviews?.userReviews?.length) {
    return bankInfo.reviews.userReviews.length
  }
  // Fallback to default if no reviews
  return 0
}

// Get button color based on bank
function getButtonColor(bankSlug) {
  const colorMap = {
    'akbank': 'primary',
    'garanti': 'primary', 
    'is-bankasi': 'primary',
    'ziraat': 'primary',
    'halkbank': 'blue',
    'vakifbank': 'primary',
    'qnb': 'purple',
    'ing-bank': 'orange',
    'fibabanka': 'teal',
    'teb': 'primary',
    'denizbank': 'primary',
    'albaraka': 'primary',
    'kuveytturk': 'primary',
    'enpara': 'purple'
  }
  return colorMap[bankSlug] || 'primary'
}

// Generate loan cards for specific credit type
export function generateLoanCards(creditType, loanAmount = 50000, termMonths = 12, apiRates = null, staticData = null) {
  let loanData = []

  if (staticData) {
    loanData = staticData;
  } else if (apiRates) {
    loanData = Object.entries(apiRates).map(([bankSlug, rates]) => {
      // Get bank name from canonicalBankMap using the slug directly
      const bankInfo = canonicalBankMap[bankSlug];
      const bankName = bankInfo?.bankName || bankSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      let faizOrani;
      switch (creditType) {
        case 'İhtiyaç Kredisi':
          faizOrani = rates.ihtiyac;
          break;
        case 'Konut Kredisi':
          faizOrani = rates.konut;
          break;
        case 'Taşıt Kredisi':
          faizOrani = rates.tasit;
          break;
        default:
          faizOrani = rates.ihtiyac;
      }
      
      if (faizOrani === null) return null;

      return {
        banka: bankName,
        faizOrani: faizOrani,
        minimumVade: 1,
        maksimumVade: 36, // Default, can be overridden
      };
    }).filter(Boolean);
  }

  return loanData.map(loan => {
    const bankSlug = findBankSlug(loan.banka)
    const bankInfo = canonicalBankMap[bankSlug]
    
    // Use term within the bank's limits
    const actualTerm = Math.min(Math.max(termMonths, loan.minimumVade), loan.maksimumVade)
    
    const monthlyPayment = calculateMonthlyPayment(loanAmount, loan.faizOrani, actualTerm, creditType)
    const totalPayment = monthlyPayment * actualTerm
    
    if (loan.faizOrani === 0) {
      loan.monthlyPayment = formatCurrency(loanAmount / actualTerm);
      loan.totalPayment = formatCurrency(loanAmount);
    }
    
    // Get features from bank info or create generic ones
    const features = []
    
    if (bankInfo?.shortDescription) {
      features.push(bankInfo.shortDescription)
    }
    
    if (bankInfo?.comments?.length > 0) {
      // Take first comment but limit length
      const comment = bankInfo.comments[0].comment
      if (comment && comment.length > 60) {
        features.push(comment.substring(0, 60) + '...')
      } else if (comment) {
        features.push(comment)
      }
    }
    
    // Add generic features if we don't have enough
    if (features.length === 0) {
      const breakdown = getLoanBreakdown(loanAmount, loan.faizOrani, actualTerm, creditType)
      features.push(`%${loan.faizOrani.toFixed(2).replace('.', ',')} faiz + vergiler (Efektif: %${breakdown.effectiveRate.toFixed(2).replace('.', ',')})`)
      features.push('BSMV ve KKDF dahil hesaplama')
    } else if (features.length === 1) {
      features.push(`${loan.minimumVade}-${loan.maksimumVade} ay vade seçenekleri`)
    }

    // Get rating from bank reviews (calculated automatically from userReviews)
    const rating = bankInfo?.reviews?.overallRating 
      ? bankInfo.reviews.overallRating.toFixed(1)
      : generateStableRating(loan.banka).toFixed(1)

    // Get actual review count from userReviews
    const reviewCount = bankInfo?.reviews?.userReviews?.length || generateStableReviewCount(loan.banka, bankSlug)

    return {
      bankImage: bankInfo?.logo || '/banks/default.webp',
      bankName: loan.banka,
      interestRate: `%${loan.faizOrani.toFixed(2).replace('.', ',')}`,
      interestRateValue: loan.faizOrani,
      monthlyPayment: loan.monthlyPayment || formatCurrency(monthlyPayment),
      totalPayment: loan.totalPayment || formatCurrency(totalPayment),
      features: features,
      rating: rating,
      reviewCount: reviewCount,
      reviewBankName: bankInfo?.bankName || loan.banka,
      buttonColor: getButtonColor(bankSlug),
      bankSlug: bankSlug,
      cardBackground: '',
      minimumTerm: loan.minimumVade,
      maximumTerm: loan.maksimumVade,
      actualTerm: actualTerm,
      applyUrl: bankInfo?.bankUrl || '#'
    }
  }).sort((a, b) => a.interestRateValue - b.interestRateValue) // Sort by interest rate
}

// Get all unique bank names for filters
export function getBankNamesForFilter(creditType) {
  let loanData = []
  
  switch (creditType) {
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

  return [...new Set(loanData.map(loan => loan.banka))].sort()
}

// Calculate maximum affordable loan based on income (Turkish banking standards)
export function calculateAffordableLoan(monthlyIncome, monthlyExpenses, annualRate, termMonths, creditType) {
  // Turkish banks typically allow max 50% debt-to-income ratio for consumer loans
  const maxAffordablePayment = (monthlyIncome - monthlyExpenses) * 0.5
  
  if (maxAffordablePayment <= 0 || annualRate <= 0) {
    return 0
  }
  
  // Calculate effective rate with taxes
  const { BSMV_RATE, KKDF_RATE } = getTaxRatesForCreditType(creditType)
  const baseMonthlyRate = annualRate / 100
  const effectiveMonthlyRate = baseMonthlyRate * (1 + BSMV_RATE + KKDF_RATE)
  
  // Calculate maximum loan amount using reverse calculation
  const numerator = Math.pow(1 + effectiveMonthlyRate, termMonths) - 1
  const denominator = effectiveMonthlyRate * Math.pow(1 + effectiveMonthlyRate, termMonths)
  const maxLoanAmount = maxAffordablePayment * (numerator / denominator)
  
  return Math.floor(maxLoanAmount)
}

// Get detailed loan breakdown including taxes
export function getLoanBreakdown(principal, annualRate, termMonths, creditType) {
  const { BSMV_RATE, KKDF_RATE } = getTaxRatesForCreditType(creditType)
  
  const baseMonthlyRate = annualRate / 100
  const bsmv = baseMonthlyRate * BSMV_RATE
  const kkdf = baseMonthlyRate * KKDF_RATE
  const effectiveMonthlyRate = baseMonthlyRate + bsmv + kkdf
  
  const monthlyPayment = calculateMonthlyPayment(principal, annualRate, termMonths, creditType)
  const totalPayment = monthlyPayment * termMonths
  const totalInterest = totalPayment - principal
  
  return {
    principal,
    monthlyPayment,
    totalPayment,
    totalInterest,
    baseRate: annualRate,
    effectiveRate: (effectiveMonthlyRate * 12 * 100),
    bsmvRate: (bsmv * 12 * 100),
    kkdfRate: (kkdf * 12 * 100),
    termMonths
  }
}

// Get default loan parameters based on credit type
export function getDefaultLoanParams(creditType) {
  switch (creditType) {
    case 'Konut Kredisi':
      return { amount: 1000000, term: 120 }
    case 'Taşıt Kredisi':
      return { amount: 400000, term: 48 }
    case 'İhtiyaç Kredisi':
    default:
      return { amount: 50000, term: 12 }
  }
}
