import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
   output: "export",
   basePath: isProd ? "/leetcode-tools" : "",
   assetPrefix: isProd ? "/leetcode-tools" : "",
   images: {
     unoptimized: true,
   },
};

export default nextConfig;
