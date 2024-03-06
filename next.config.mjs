/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3t32hsnjxo7q6.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
