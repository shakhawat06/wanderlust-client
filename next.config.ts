import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: false,
  partialPrefetching: false,
  reactCompiler: true,

  // https://pixabay.com/images/download/fietzfotos-mountain-4968180_1920.jpg
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "pixabay.com",
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
