/** @type {import('next').NextConfig} */

// Cloudflare Pages configuration
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    domains: ['*'],
  },
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig; 