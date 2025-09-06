/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  './src/i18n.ts'
);

const nextConfig = {
  // Remove output: 'export' for Vercel deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/bn/:path*',
        destination: '/bn/:path*',
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
