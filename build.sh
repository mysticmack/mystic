#!/bin/bash

# Exit on error
set -e

# Install dependencies
npm install

# Build the Next.js application
npm run build

# Ensure the public directory exists
mkdir -p public

# Copy the Next.js static export to public
cp -r out/* public/

# Create _redirects file for SPA routing
echo "/* /index.html 200" > public/_redirects

# Create _routes.json for Cloudflare Pages
echo '{
  "version": 1,
  "include": ["/*"],
  "exclude": []
}' > public/_routes.json

# List contents of public directory for verification
echo "Contents of public directory:"
ls -la public/ 