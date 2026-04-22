import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects",
        permanent: false,
      },
    ];
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "placecats.com",
  //     },
  //   ],
  // },

  // for debug on local network
  allowedDevOrigins: ["192.168.1.132"],
};

export default nextConfig;
