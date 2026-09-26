/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'muvwzgovydm6kz0t.public.blob.vercel-storage.com',
        pathname: '/private-portfolio/rentals/**'
      }
    ]
  }
};

export default nextConfig;
