/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build', // 정적 웹 사이트 구축을 위한 설정
  // output: 'export', // 정적 웹 사이트 구축을 위한 설정
  // trailingSlash: true, // 정적 웹 사이트 구축을 위한 설정
  images: {
    unoptimized: true, // 정적 웹 사이트 구축을 위한 설정
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 's3.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'images',
      },
      {
        protocol: 'https',
        hostname: 'montevista.greatheartsamerica.org',
      },
    ],
  },
};

export default nextConfig;
