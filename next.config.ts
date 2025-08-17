import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
