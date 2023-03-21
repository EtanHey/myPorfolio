"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  images: {
    domains: ["github.com", "media.licdn.com", "res.cloudinary.com", "cloudinary.com"]
  }
};
module.exports = nextConfig;