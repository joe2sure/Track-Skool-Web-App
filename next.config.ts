import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
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
  }
};

export default nextConfig;


// import type { NextConfig } from "next";
// import path from "path";
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// const nextConfig: NextConfig = {
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname),
//       '@components': path.resolve(__dirname, 'components')
//     };
//     return config;
//   },
//   // output: "export",
//   output: 'standalone',
//   images: {
//     unoptimized: true,
//   },
//   typescript: {
//     // ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;
