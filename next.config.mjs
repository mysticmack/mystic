/** @type {import('next').NextConfig} */

// Cloudflare Pages configuration
const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true
  }
};

export default nextConfig; 