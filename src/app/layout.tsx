import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Providers";
import { Kanit } from 'next/font/google'


import {
  ClerkProvider,

} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster";

const kanit = Kanit({
  weight: ['400', '500', '600', '700'],
  style: ['normal',],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "App travel",
  description: "create instant travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en" suppressHydrationWarning >
        <body className={`${kanit.className} `}>
          <Providers >
            <Navbar />
            <main className="container">
              {children}
            </main>
            <Toaster />


          </Providers>
        </body>
      </html>
    </ClerkProvider>

  );
}
