import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["172.20.10.4"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "davadmin.kasaba.uz",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
