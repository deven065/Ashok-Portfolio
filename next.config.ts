import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For development: no basePath, images work normally
  // For GitHub Pages production: will be set by GitHub Actions
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
