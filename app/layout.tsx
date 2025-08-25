import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Pacifico } from "next/font/google"
import "./globals.css"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://trackskool.co.uk"),
  title: {
    default: "TrackSkool - Best School Management Software | AI-Powered Education Platform",
    template: "%s | TrackSkool - Smart School Management System",
  },
  description:
    "TrackSkool is the leading school management software with AI study features, parent tracking, and comprehensive dashboards for administrators, teachers, parents, students, librarians, and hostel managers. Streamline all school activities with our intelligent education platform.",
  keywords: [
    "school management software",
    "education management system",
    "AI study platform",
    "parent tracking system",
    "student information system",
    "school administration software",
    "academic management platform",
    "education technology",
    "school ERP system",
    "digital school management",
    "TrackSkool",
    "smart school system",
    "UK school software",
    "British education platform",
  ],
  authors: [{ name: "TrackSkool Team" }],
  creator: "TrackSkool",
  publisher: "TrackSkool",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://trackskool.co.uk",
    siteName: "TrackSkool",
    title: "TrackSkool - Best School Management Software | AI-Powered Education Platform",
    description:
      "Comprehensive school management system with AI study features, parent tracking, and role-based dashboards for complete educational administration.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrackSkool - Smart School Management System Dashboard",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trackskool",
    creator: "@trackskool",
    title: "TrackSkool - Best School Management Software | AI-Powered Education Platform",
    description:
      "Comprehensive school management system with AI study features, parent tracking, and role-based dashboards for complete educational administration.",
    images: ["/twitter-card.png"],
  },
  category: "Education Technology",
  classification: "School Management Software",
  applicationName: "TrackSkool",
  referrer: "origin-when-cross-origin",
  generator: "TrackSkool Platform",
  alternates: {
    canonical: "https://trackskool.co.uk",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "TrackSkool",
    "mobile-web-app-capable": "yes",
    "theme-color": "#2563eb",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />

        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TrackSkool",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web Browser",
              description:
                "Comprehensive school management software with AI study features, parent tracking, and role-based dashboards for administrators, teachers, parents, students, librarians, and hostel managers.",
              url: "https://trackskool.co.uk",
              author: {
                "@type": "Organization",
                name: "TrackSkool",
                url: "https://trackskool.co.uk",
              },
              offers: {
                "@type": "Offer",
                category: "Education Management Software",
              },
              featureList: [
                "AI Study Features",
                "Parent Tracking System",
                "Administrator Dashboard",
                "Teacher Management Portal",
                "Student Information System",
                "Library Management",
                "Hostel Management",
                "Assignment Management",
                "Attendance Tracking",
                "Communication Tools",
                "Role-based Access Control",
                "Academic Progress Monitoring",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "150",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TrackSkool",
              url: "https://trackskool.co.uk",
              logo: "https://trackskool.co.uk/logo.png",
              sameAs: ["https://twitter.com/trackskool", "https://linkedin.com/company/trackskool"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                areaServed: "GB",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  )
}






// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Pacifico } from "next/font/google";
// import "./globals.css";

// const pacifico = Pacifico({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-pacifico',
// })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   metadataBase: new URL('https://trackskool.co.uk'),
//   title: {
//     default: "TrackSkool - Best School Management Software | AI-Powered Education Platform",
//     template: "%s | TrackSkool - Smart School Management System"
//   },
//   description: "TrackSkool is the leading school management software with AI study features, parent tracking, and comprehensive dashboards for administrators, teachers, parents, students, librarians, and hostel managers. Streamline all school activities with our intelligent education platform.",
//   keywords: [
//     "school management software",
//     "education management system",
//     "AI study platform",
//     "parent tracking system",
//     "student information system",
//     "school administration software",
//     "academic management platform",
//     "education technology",
//     "school ERP system",
//     "digital school management",
//     "TrackSkool",
//     "smart school system",
//     "UK school software",
//     "British education platform"
//   ],
//   authors: [{ name: "TrackSkool Team" }],
//   creator: "TrackSkool",
//   publisher: "TrackSkool",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   openGraph: {
//     type: 'website',
//     locale: 'en_GB',
//     url: 'https://trackskool.co.uk',
//     siteName: 'TrackSkool',
//     title: 'TrackSkool - Best School Management Software | AI-Powered Education Platform',
//     description: 'Comprehensive school management system with AI study features, parent tracking, and role-based dashboards for complete educational administration.',
//     images: [
//       {
//         url: '/og-image.png', // Create this image (1200x630px)
//         width: 1200,
//         height: 630,
//         alt: 'TrackSkool - Smart School Management System Dashboard',
//         type: 'image/png',
//       }
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@trackskool', // Replace with your actual Twitter handle
//     creator: '@trackskool',
//     title: 'TrackSkool - Best School Management Software | AI-Powered Education Platform',
//     description: 'Comprehensive school management system with AI study features, parent tracking, and role-based dashboards for complete educational administration.',
//     images: ['/twitter-card.png'], // Create this image (1200x600px)
//   },
//   category: 'Education Technology',
//   classification: 'School Management Software',
//   applicationName: 'TrackSkool',
//   referrer: 'origin-when-cross-origin',
//   generator: 'TrackSkool Platform',
//   alternates: {
//     canonical: 'https://trackskool.co.uk',
//   },
//   other: {
//     'apple-mobile-web-app-capable': 'yes',
//     'apple-mobile-web-app-status-bar-style': 'default',
//     'apple-mobile-web-app-title': 'TrackSkool',
//     'mobile-web-app-capable': 'yes',
//     'theme-color': '#2563eb',
//   },
//   verification: {
//     google: 'your-google-site-verification-code', // Add your Google Search Console verification code
//     // yandex: 'your-yandex-verification-code',
//     // yahoo: 'your-yahoo-verification-code',
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning={true}>
//       <head>
//         {/* Additional SEO Meta Tags */}
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="format-detection" content="telephone=no" />
//         <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        
//         {/* Structured Data for Educational Software */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "SoftwareApplication",
//               "name": "TrackSkool",
//               "applicationCategory": "EducationalApplication",
//               "operatingSystem": "Web Browser",
//               "description": "Comprehensive school management software with AI study features, parent tracking, and role-based dashboards for administrators, teachers, parents, students, librarians, and hostel managers.",
//               "url": "https://trackskool.co.uk",
//               "author": {
//                 "@type": "Organization",
//                 "name": "TrackSkool",
//                 "url": "https://trackskool.co.uk"
//               },
//               "offers": {
//                 "@type": "Offer",
//                 "category": "Education Management Software"
//               },
//               "featureList": [
//                 "AI Study Features",
//                 "Parent Tracking System",
//                 "Administrator Dashboard",
//                 "Teacher Management Portal",
//                 "Student Information System",
//                 "Library Management",
//                 "Hostel Management",
//                 "Assignment Management",
//                 "Attendance Tracking",
//                 "Communication Tools",
//                 "Role-based Access Control",
//                 "Academic Progress Monitoring"
//               ],
//               "aggregateRating": {
//                 "@type": "AggregateRating",
//                 "ratingValue": "4.8",
//                 "ratingCount": "150"
//               }
//             })
//           }}
//         />

//         {/* Organization Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               "name": "TrackSkool",
//               "url": "https://trackskool.co.uk",
//               "logo": "https://trackskool.co.uk/logo.png",
//               "sameAs": [
//                 "https://twitter.com/trackskool",
//                 "https://linkedin.com/company/trackskool"
//               ],
//               "contactPoint": {
//                 "@type": "ContactPoint",
//                 "contactType": "Customer Service",
//                 "areaServed": "GB"
//               }
//             })
//           }}
//         />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }