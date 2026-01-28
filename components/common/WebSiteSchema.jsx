import Head from 'next/head'
import { generateWebSiteSchema } from '@/utils/generateSchema'

/**
 * WebSite ve Organization Schema.org yapılandırılmış veri componenti
 * Sayfanın meta title ve description verilerini kullanarak otomatik schema oluşturur
 */
function WebSiteSchema({ 
  title, 
  description, 
  url = 'https://www.ihtiyackredisi.com', 
  organizationName = 'İhtiyaç Kredisi',
  logoUrl = 'https://www.ihtiyackredisi.com/logo.png',
  currentPath = '/'
}) {
  const schema = generateWebSiteSchema({
    title,
    description,
    url,
    organizationName,
    logoUrl,
    currentPath
  })

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        key="website-schema"
      />
    </Head>
  )
}

export default WebSiteSchema
