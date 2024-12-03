import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://api4adc.cafe24app.com/:path*'
      },
    ];
  },
};

export default nextConfig;
