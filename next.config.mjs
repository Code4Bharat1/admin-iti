/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.shutterstock.com',
      'images.app.goo.gl',
      'localhost',
      'imgs.search.brave.com', // ✅ Add this line
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

export default nextConfig;
