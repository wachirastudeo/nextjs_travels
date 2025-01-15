import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {

  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
      
    }
  },
  reactStrictMode: false,
  images: { 
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'ykyruobglrtrygolkrsb.supabase.co',
        
      }
    ]
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // เพิ่ม alias ที่นี่
    return config;
  },
  
  
};

export default nextConfig;
