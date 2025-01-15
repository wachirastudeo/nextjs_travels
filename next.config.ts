import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
      
    }
  },    
  ignoreBuildErrors: true,

  reactStrictMode: false,
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ykyruobglrtrygolkrsb.supabase.co',
        port: '',
        pathname: '/**',
      }
    ]
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
} satisfies NextConfig;

export default nextConfig;