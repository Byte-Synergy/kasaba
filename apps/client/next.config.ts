import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3bucket-api.kasaba.uz",
        port: "",
        pathname: "/kasaba/**",
      },
      {
        protocol: "https",
        hostname: "davadmin.kasaba.uz",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
        pathname: "/kasaba/**",
      },
    ],
  },
};

export default nextConfig;
