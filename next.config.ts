import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kurs",
        destination: "/ru/course",
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

export default withNextIntl(nextConfig);
