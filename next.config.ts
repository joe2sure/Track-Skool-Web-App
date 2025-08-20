import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: { 
    unoptimized: true,
    domains: ['trackskool.co.uk'], // Add your domain for image optimization
  },
  
  // SEO and Performance Optimizations
  compress: true,
  poweredByHeader: false,
  
  webpack: (config) => {
    // Add our custom resolver
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new (require('./scripts/CaseSensitiveResolver'))(
        'described-resolve',
        'resolve'
      )
    );

    // Add alias for consistent resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'components')
    };

    return config;
  },

  // Enhanced redirects for SEO
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'track-skool-web-app.onrender.com',
          },
        ],
        destination: 'https://trackskool.co.uk',
        permanent: true,
      },
      // Redirect common variations to canonical URLs
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard-login',
        destination: '/auth/dashboard-login',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/auth/dashboard-login',
        permanent: true,
      },
    ];
  },

  // Add headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ]
      }
    ];
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Environment-specific configurations
  env: {
    SITE_URL: 'https://trackskool.co.uk',
    SITE_NAME: 'TrackSkool',
  },
};

export default nextConfig;





// import type { NextConfig } from "next";
// import path from "path";

// const nextConfig: NextConfig = {
//   output: 'standalone',
//   images: { unoptimized: true },
//   webpack: (config) => {
//     // Add our custom resolver
//     config.resolve.plugins = config.resolve.plugins || [];
//     config.resolve.plugins.push(
//       new (require('./scripts/CaseSensitiveResolver'))(
//         'described-resolve',
//         'resolve'
//       )
//     );

//     // Add alias for consistent resolution
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@components': path.resolve(__dirname, 'components')
//     };

//     return config;
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         has: [
//           {
//             type: 'host',
//             value: 'track-skool-web-app.onrender.com',
//           },
//         ],
//         destination: 'https://trackskool.co.uk',
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;