import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagechobucket.s3.us-west-1.amazonaws.com',
        port: '',
        pathname: '/frontend/assets/images/**'
      }
    ]
  }
}

export default nextConfig
