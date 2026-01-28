import LoanSearchComponent from '@/components/container/LoanSearchComponent'

export default function ClientPage() {
  const intro = 'Tek tıkla bankaların güncel kredi tekliflerini karşılaştırın. Faiz, toplam geri ödeme ve vade seçeneklerini filtreleyerek bütçenize en uygun krediyi bulun.'
  return <LoanSearchComponent slug="kredi-arama" />
}
