import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    domains: ["images.unsplash.com"],
  },
  // Compression
  compress: true,
  // Production optimizations
  // React strict mode
  reactStrictMode: true,
  // Optimize fonts
  // Font optimization is automatic in Next.js 16; explicit option removed.
  // Power by header removal
  poweredByHeader: false,
};

export default nextConfig;
