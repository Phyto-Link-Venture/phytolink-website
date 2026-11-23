import type { NextConfig } from "next";

// Files in /public keep fixed names (no content hash), so Next serves them with
// `max-age=0` and every visit revalidates them. Give the heavy, rarely changed
// ones a modest browser cache; a replaced file still shows up within a day.
const PUBLIC_ASSET_CACHE = "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    // Try AVIF first, then WebP (Next's default is WebP only).
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/videos/:path*", headers: [{ key: "Cache-Control", value: PUBLIC_ASSET_CACHE }] },
      { source: "/demo-video/:path*", headers: [{ key: "Cache-Control", value: PUBLIC_ASSET_CACHE }] },
      { source: "/logo.jpg", headers: [{ key: "Cache-Control", value: PUBLIC_ASSET_CACHE }] },
      { source: "/favicon.jpg", headers: [{ key: "Cache-Control", value: PUBLIC_ASSET_CACHE }] },
    ];
  },
  async redirects() {
    return [
      { source: "/invoice-system", destination: "/", permanent: true },
      { source: "/ai-automation", destination: "/chatbranch", permanent: true },
      { source: "/pricing", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
