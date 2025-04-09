/** @type {import('next').NextConfig} */

// Cloudflare Pages configuration
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  distDir: 'out',
  // Ensure basePath is empty for Cloudflare Pages
  basePath: '',
  // Ensure assetPrefix is empty for Cloudflare Pages
  assetPrefix: '',
  // Disable server-side features
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig; 