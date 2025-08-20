import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TrackSkool - Best School Management Software',
    short_name: 'TrackSkool',
    description: 'AI-powered school management system with comprehensive dashboards for administrators, teachers, parents, students, librarians, and hostel managers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-GB',
    categories: ['education', 'productivity', 'business'],
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/screenshot-narrow.png', 
        sizes: '720x1280',
        type: 'image/png',
        form_factor: 'narrow'
      }
    ]
  }
}