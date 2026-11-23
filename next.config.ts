import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF/WebP automáticos: as ilustrações originais são grandes (PNG de ~3500px)
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
