import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import nextConfig from "../../next.config";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leetcode Tools",
  description: "Created by Yi Xuan Lim",
  icons: {
    icon: [`${nextConfig.basePath}/favicon.ico?v=4`],
    apple: [`${nextConfig.basePath}/apple-touch-icon.png?v=4`],
    shortcut: [`${nextConfig.basePath}/apple-touch-icon.png`],
  },
  manifest: `${nextConfig.basePath}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased vsc-initialized`}
      >
        {children}
      </body>
    </html>
  );
}
