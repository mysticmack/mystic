/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'standalone',
  // Enable static exports for Cloudflare Pages
  experimental: {
    appDir: true
  }
};

export default nextConfig; 