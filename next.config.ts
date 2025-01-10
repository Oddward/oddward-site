import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "components/design", "lib", "app"],
  },
};

export default nextConfig;
