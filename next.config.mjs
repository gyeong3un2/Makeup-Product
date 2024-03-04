/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'sdcdn.io',
        },
      ],
    },
};

export default nextConfig;
