#!/bin/bash

# Age Calculator Bangladesh - Vercel Deployment Script
echo "🚀 Deploying Age Calculator Bangladesh to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel first:"
    vercel login
fi

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your app should be available at: https://agecalculator.yec.org.bd"
echo "📱 Android app: https://play.google.com/store/apps/details?id=com.yec.agecalculatorbangladesh"
