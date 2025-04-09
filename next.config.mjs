/** @type {import('next').NextConfig} */

// Cloudflare Pages configuration
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  distDir: 'out',
};

export default nextConfig; 