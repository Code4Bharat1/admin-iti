/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.shutterstock.com',
      'images.app.goo.gl',
      'localhost',  // ✅ allow your local backend host
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig; // ✅ Use CommonJS if using next.config.js
