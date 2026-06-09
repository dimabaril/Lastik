import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/kurs",
        destination: "/course",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placecats.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },

  // for debug on local network
  allowedDevOrigins: ["192.168.1.132", "192.168.8.207"],
};

export default nextConfig;
