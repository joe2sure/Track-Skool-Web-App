import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://trackskool.co.uk'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/auth/login',
          '/auth/register',
          '/auth/forgot-password',
          '/library',
          '/assignment',
          '/attendance',
          '/communication',
        ],
        disallow: [
          '/dashboard/', // Protect dashboard routes from crawling
          '/api/', // Protect API routes
          '/_next/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/auth/',
          '/library',
          '/assignment',
          '/attendance', 
          '/communication',
        ],
        disallow: [
          '/dashboard/',
          '/api/',
          '/_next/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}