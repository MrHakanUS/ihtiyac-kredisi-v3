export async function GET() {
  const baseUrl = 'https://ihtiyackredisi.com'
  
  try {
    const { ALL_CARDS } = await import('@/constants/cards')
    const { ALL_PROMOTIONS } = await import('@/constants/promosyon')
    
    const creditCardPages = ALL_CARDS || []
    const promotionPages = ALL_PROMOTIONS || []
    
    const legalPageSlugs = [
      'gizlilik-sozlesmesi',
      'uyelik-sozlesmesi',
      'cerez-politikasi',
      'mesafeli-satis-sozlesmesi',
      'kisisel-verilerin-korunmasi'
    ]
    
    const allPages = [
      ...creditCardPages.map((card) => ({
        url: `${baseUrl}/kredi-karti/${card.bankSlug}`,
        changefreq: 'weekly',
        priority: 0.7,
      })),
      ...promotionPages.map((promo) => ({
        url: `${baseUrl}/promosyon/${promo.bankSlug}`,
        changefreq: 'weekly',
        priority: 0.6,
      })),
      ...legalPageSlugs.map((slug) => ({
        url: `${baseUrl}/yasal/${slug}`,
        changefreq: 'yearly',
        priority: 0.3,
      })),
    ]
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Others sitemap generation error:', error)
    return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  }
}

