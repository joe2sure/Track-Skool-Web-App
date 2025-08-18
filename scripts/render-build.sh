#!/bin/bash
set -e

# Fix case sensitivity issues
find . -type f -name "*.tsx" -exec sed -i 's/\/button2/\/Button2/g' {} +
find . -type f -name "*.tsx" -exec sed -i 's/\/card2/\/Card2/g' {} +

# Run build
npm run build