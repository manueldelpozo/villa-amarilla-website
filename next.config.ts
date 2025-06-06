import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'pl'],
  },
};

export default nextConfig;
