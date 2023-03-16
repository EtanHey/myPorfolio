/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "github.com",
      "media.licdn.com",
      "res.cloudinary.com",
      "cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
