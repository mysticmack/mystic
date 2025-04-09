/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Remove standalone output as it's not needed for Cloudflare Pages
  // output: 'standalone',
  // Enable static exports for Cloudflare Pages
  experimental: {
    appDir: true
  }
};

export default nextConfig; 