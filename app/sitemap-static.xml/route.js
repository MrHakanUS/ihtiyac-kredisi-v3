export async function GET() {
  const baseUrl = 'https://ihtiyackredisi.com'
  
  const staticPages = [
    { url: baseUrl, priority: 1.0, changefreq: 'daily' },
    { url: `${baseUrl}/0-faizli-kredi`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/arac-kredisi`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/banka`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/banka-faiz-oranlari`, priority: 0.9, changefreq: 'daily' },
    { url: `${baseUrl}/blog`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/emekli-promosyonu`, priority: 0.7, changefreq: 'weekly' },
    { url: `${baseUrl}/en-uygun-kredi`, priority: 0.9, changefreq: 'daily' },
    { url: `${baseUrl}/ev-kredisi-hesaplama`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/faiz-hesaplama`, priority: 0.7, changefreq: 'weekly' },
    { url: `${baseUrl}/faizsiz-kredi`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/faizsiz-kredi-veren-bankalar`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/findeks`, priority: 0.7, changefreq: 'weekly' },
    { url: `${baseUrl}/hakkimizda`, priority: 0.5, changefreq: 'monthly' },
    { url: `${baseUrl}/hesap-makinesi`, priority: 0.7, changefreq: 'weekly' },
    { url: `${baseUrl}/iban`, priority: 0.6, changefreq: 'weekly' },
    { url: `${baseUrl}/ihtiyac-kredisi`, priority: 0.9, changefreq: 'daily' },
    { url: `${baseUrl}/ihtiyac-kredisi-hesaplama`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/iletisim`, priority: 0.5, changefreq: 'monthly' },
    { url: `${baseUrl}/konut-kredisi`, priority: 0.9, changefreq: 'daily' },
    { url: `${baseUrl}/konut-kredisi-hesaplama`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/kredi`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/kredi-arama`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/kredi-basvurusu`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/kredi-faiz-hesaplama`, priority: 0.7, changefreq: 'weekly' },
    { url: `${baseUrl}/kredi-hesaplama`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/kredi-karti`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/merkez-bankasi-faiz-karari`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/mevduat-faizi`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/mevduat-faizi-hesaplama`, priority: 0.7, changefreq: 'weekly' },
    { url: `${baseUrl}/mortgage-haberleri`, priority: 0.7, changefreq: 'daily' },
    { url: `${baseUrl}/promosyon`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/sifir-faizli-kredi`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/sikca-sorulan-sorular`, priority: 0.6, changefreq: 'monthly' },
    { url: `${baseUrl}/tasit-kredisi`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/vadeli-mevduat`, priority: 0.7, changefreq: 'weekly' },
    { url: `${baseUrl}/yasal`, priority: 0.4, changefreq: 'monthly' },
    { url: `${baseUrl}/yuzde-hesaplama`, priority: 0.6, changefreq: 'weekly' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map((page) => `  <url>
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
}

