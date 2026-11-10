import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      { source: "/invoice-system", destination: "/", permanent: true },
      { source: "/ai-automation", destination: "/chatbranch", permanent: true },
      { source: "/pricing", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
