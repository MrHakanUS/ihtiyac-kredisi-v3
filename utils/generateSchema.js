/**
 * Sayfa meta verilerinden otomatik Schema.org yapılandırılmış veri oluşturur
 */
export function generateWebSiteSchema({ 
  title, 
  description, 
  url = 'https://www.ihtiyackredisi.com', 
  organizationName = 'İhtiyaç Kredisi',
  logoUrl = 'https://www.ihtiyackredisi.com/logo.png',
  currentPath = '/'
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        "url": url,
        "name": organizationName,
        "description": "Kredi hesaplama, faiz hesaplama, konut kredisi ve faizsiz kredi seçeneklerini karşılaştırın.",
        "publisher": {
          "@id": `${url}/#organization`
        },
        "inLanguage": "tr-TR"
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        "name": organizationName,
        "url": url,
        "logo": {
          "@type": "ImageObject",
          "url": logoUrl
        }
      },
      {
        "@type": "WebPage",
        "@id": `${url}${currentPath}#webpage`,
        "url": `${url}${currentPath}`,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": `${url}/#website`
        },
        "about": {
          "@id": `${url}/#organization`
        },
        "inLanguage": "tr-TR"
      }
    ]
  }
}

/**
 * Next.js metadata'ya schema ekler
 */
export function addSchemaToMetadata(metadata, currentPath) {
  const schema = generateWebSiteSchema({
    title: metadata.title,
    description: metadata.description,
    currentPath
  })

  return {
    ...metadata,
    other: {
      ...metadata.other,
      'application/ld+json': JSON.stringify(schema)
    }
  }
}
