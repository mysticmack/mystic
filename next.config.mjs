/** @type {import('next').NextConfig} */

// Cloudflare Pages configuration
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig; 