import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },

  // 👇 ONLY add this if deploying to GitHub Pages
  // Replace "resume-nextjs" with your repo name
  basePath: "/portfolio",
  assetPrefix: "/rportfolio/",
};

export default nextConfig;