/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ...other experimental options if any...
  },
  webpack: (config) => {
    // ...existing code...
    return config;
  },
};

module.exports = nextConfig;