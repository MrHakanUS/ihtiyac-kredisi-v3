export default function robots() {
  const baseUrl = 'https://ihtiyackredisi.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [],
        disallow: ['/'],
      },
    ],
    sitemap: [],
  }
}


