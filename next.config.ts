import type { NextConfig } from "next";
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const nextConfig: NextConfig = {
    webpack: (config) => {
    config.plugins.push(new CaseSensitivePathsPlugin());
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
