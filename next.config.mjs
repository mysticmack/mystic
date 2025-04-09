/** @type {import('next').NextConfig} */

// Cloudflare Pages configuration
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export' // Enable static exports for Cloudflare Pages
};

export default nextConfig; 