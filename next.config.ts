import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ตั้งค่า experimental ฟีเจอร์ที่ต้องการ
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // จำกัดขนาดข้อมูลที่ส่งสำหรับ server actions
    },
  },

  // ตั้งค่าควบคุม strict mode ของ React
  reactStrictMode: false, // เปิด React Strict Mode

  // ตั้งค่า images ให้สามารถโหลดภาพจากแหล่งที่มาภายนอก
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ykyruobglrtrygolkrsb.supabase.co', // โดเมนของแหล่งที่มาภาพ
        port: '',
        pathname: '/**',
      },
    ],
  },

  

};

export default nextConfig;
