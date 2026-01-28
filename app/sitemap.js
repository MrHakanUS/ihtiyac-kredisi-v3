// Ana sitemap index - tüm alt sitemap'leri listeler
export default function sitemap() {
  const baseUrl = 'https://ihtiyackredisi.com'

  return [
    {
      url: `${baseUrl}/sitemap-static.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-banks.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-credits.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-others.xml`,
      lastModified: new Date(),
    },
  ]
}
