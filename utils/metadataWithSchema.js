import { generateWebSiteSchema } from './generateSchema'

/**
 * CORE2.js verilerini kullanarak otomatik schema ile metadata oluşturur
 * @param {string} path - Sayfa yolu (örn: '/ihtiyac-kredisi')
 * @param {Object} CORE - CORE2.js objesi
 * @param {Object} customData - Ek özel veriler
 * @returns {Object} - Next.js metadata objesi
 */
export function generateMetadataWithSchema(path, CORE, customData = {}) {
  const metadata = CORE[path]
  
  if (!metadata) {
    console.warn(`CORE2.js'de ${path} için meta veri bulunamadı`)
    return {
      title: 'İhtiyaç Kredisi',
      description: 'Kredi hesaplama ve karşılaştırma platformu',
      alternates: {
        canonical: path,
      },
    }
  }
  
  const schema = generateWebSiteSchema({
    title: metadata.title,
    description: metadata.desc,
    currentPath: path,
    ...customData
  })
  
  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: path,
    },
    other: {
      'application/ld+json': JSON.stringify(schema)
    }
  }
}

/**
 * Blog sayfaları için özel schema oluşturur
 */
export function generateBlogMetadataWithSchema(post, slug) {
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
      description: 'Aradığınız blog yazısı bulunamadı.'
    }
  }

  const schema = generateWebSiteSchema({
    title: post.meta?.title || 'Blog',
    description: post.meta?.description || '',
    currentPath: `/blog/${slug}`
  })

  return {
    title: post.meta?.title || 'Blog',
    description: post.meta?.description || '',
    keywords: post.meta?.keywords || [],
    alternates: { canonical: post.meta?.canonical || `/blog/${slug}` },
    other: {
      'application/ld+json': JSON.stringify(schema)
    }
  }
}
