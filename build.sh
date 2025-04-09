#!/bin/bash

# Exit on error
set -e

echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Ensure the public directory exists
echo "Creating public directory..."
mkdir -p public

# Copy the Next.js static export to public
echo "Copying build output to public directory..."
cp -r out/* public/

# Create _redirects file for SPA routing
echo "Creating _redirects file..."
echo "/* /index.html 200" > public/_redirects

# Create _routes.json for Cloudflare Pages
echo "Creating _routes.json file..."
echo '{
  "version": 1,
  "include": ["/*"],
  "exclude": []
}' > public/_routes.json

# Create a simple index.html in the root if it doesn't exist
echo "Checking for index.html..."
if [ ! -f public/index.html ]; then
  echo "Creating fallback index.html..."
  echo '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Mystic</title>
  <meta http-equiv="refresh" content="0;url=/">
</head>
<body>
  <p>Redirecting to <a href="/">home page</a>...</p>
</body>
</html>' > public/index.html
fi

# List contents of public directory for verification
echo "Contents of public directory:"
ls -la public/

echo "Build process completed successfully!" 