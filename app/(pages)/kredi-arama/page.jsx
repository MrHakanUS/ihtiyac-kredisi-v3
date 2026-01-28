import CORE from '@/CORE2'
import ClientPage from './client-page'

export async function generateMetadata() {
  const metadata = CORE['/kredi-arama']
  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: '/kredi-arama',
    },
  }
}

export default function Page() {
  return <ClientPage />
}
