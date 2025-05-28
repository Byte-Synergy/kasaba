module.exports = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3bucket.api.digitalaggregator.team",
        port: "",
        pathname: "/kasaba/**",
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
