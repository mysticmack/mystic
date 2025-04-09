#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Create the public directory if it doesn't exist
mkdir -p public

# Copy the output files to the public directory
cp -r out/* public/

# Create a basic _redirects file for SPA routing
echo "/* /index.html 200" > public/_redirects 