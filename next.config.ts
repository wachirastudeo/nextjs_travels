import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // ตั้งค่า experimental ฟีเจอร์ที่ต้องการ
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // จำกัดขนาดข้อมูลที่ส่งสำหรับ server actions
    },
  },

  // ตั้งค่าควบคุม strict mode ของ React
  reactStrictMode: true, // เปิด React Strict Mode

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

  // ตั้งค่า path alias เพื่อใช้ในการ import path แบบสั้น
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');  // Alias @ ชี้ไปที่ src/
    config.resolve.alias['components'] = path.resolve(__dirname, 'src/components');  // Alias สำหรับ components/
    config.resolve.alias['utils'] = path.resolve(__dirname, 'src/utils');  // Alias สำหรับ utils/
    return config;
  },

  // ตั้งค่าการลบข้อผิดพลาดในการ build
  ignoreBuildErrors: false,  // ให้ตรวจสอบข้อผิดพลาดในระหว่างการ build
};

export default nextConfig;
