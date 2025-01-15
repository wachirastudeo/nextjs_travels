import type { NextConfig } from "next";

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
 
} satisfies NextConfig;

export default nextConfig;