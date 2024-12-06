import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_KREAM_API}:path*`
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "file-drive.storage.googleapis.com"
      }
    ]
  }
};

export default nextConfig;
