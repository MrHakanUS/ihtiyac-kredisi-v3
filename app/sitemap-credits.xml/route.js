export async function GET() {
  const baseUrl = 'https://ihtiyackredisi.com'
  
  try {
    const { canonicalBankMap } = await import('@/constants/banks')
    const creditTypes = ['ihtiyac-kredisi', 'konut-kredisi', 'tasit-kredisi']
    const creditPages = []
    
    Object.values(canonicalBankMap).forEach(bank => {
      if (bank?.slug) {
        creditTypes.forEach(creditType => {
          creditPages.push({
            slug: `${bank.slug}-${creditType}`,
            bankName: bank.bankName,
            creditType
          })
        })
      }
    })
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${creditPages.map((credit) => `  <url>
    <loc>${baseUrl}/kredi/${credit.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Credits sitemap generation error:', error)
    return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  }
}

