/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
  env: {
    bfic_Price: process.env.NEXT_PUBLIC_BFIC_PRICE,
    get_Statastics: process.env.NEXT_PUBLIC_GET_STATASTICS,
  },
};

module.exports = nextConfig;
