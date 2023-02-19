/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["github.com", "media.licdn.com"],
  },
};

module.exports = nextConfig;
