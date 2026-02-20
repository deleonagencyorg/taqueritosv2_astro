#!/bin/bash

# Exit immediately if a command fails
set -e

# File to modify (default: vercel.json)
FILE=${1:-vercel.json}

# Check if US_DOMAIN is set
if [ -z "$US_DOMAIN" ]; then
  echo "❌ Error: US_DOMAIN environment variable is not set."
  exit 1
fi

# Escape forward slashes for sed safety
ESCAPED_DOMAIN=$(printf '%s\n' "$US_DOMAIN" | sed 's/[&/\]/\\&/g')

# Replace the placeholder in file
sed -i.bak "s|https://{{US_DOMAIN}}/:path\*|https://${ESCAPED_DOMAIN}/:path*|g" "$FILE"

echo "✅ Replacement complete in $FILE"
echo "   → https://${US_DOMAIN}/:path*"