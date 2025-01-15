import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // จำกัดขนาดข้อมูลที่ส่ง
    },
  },

  ignoreBuildErrors: true, // ข้ามการตรวจสอบข้อผิดพลาดระหว่าง build

  reactStrictMode: false, // ปิด React Strict Mode

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ykyruobglrtrygolkrsb.supabase.co', // กำหนดแหล่งที่มาของภาพ
        port: '',
        pathname: '/**',
      },
    ],
  },
} satisfies NextConfig;

export default nextConfig;
