#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Ensure we're using the out directory directly
rm -rf public
mv out public

# Debug: List contents of public directory
echo "Contents of public directory:"
ls -la public/

# Create a basic _redirects file for SPA routing
echo "/* /index.html 200" > public/_redirects 