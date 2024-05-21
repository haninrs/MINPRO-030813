const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ['daisyui.com', 'images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/public/images/**',
      },
    ],
  },
};
