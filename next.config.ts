import type { NextConfig } from "next";
import path from "path";
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@components': path.resolve(__dirname, 'components')
    };
    return config;
  },
  // output: "export",
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
