/** @type {import('next').NextConfig} */

// Cloudflare Pages configuration
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  }
};

export default nextConfig; 