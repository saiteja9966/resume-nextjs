import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/resume-nextjs",        // 👈 YOUR REPO NAME
  assetPrefix: "/resume-nextjs/",    
   images: {
    unoptimized: true,
  },// 👈 SAME REPO NAME
};

export default nextConfig;
