/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: [
        '@react-email/components',
        '@react-email/tailwind'
    ]
    },
  };
  
  module.exports = nextConfig;