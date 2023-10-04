/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "qb7w5b0egor0wdxc.public.blob.vercel-storage.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
