/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: 'export', // 정적 웹 사이트 구축을 위한 설정
  trailingSlash: true, // 정적 웹 사이트 구축을 위한 설정
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
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
