/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Add this for path aliases
  experimental: {
    appDir: true,
  },

  // Webpack config for path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    }
    return config
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com", 
      "images.unsplash.com", 
      "ext.same-assets.com", 
      "ugc.same-assets.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // More flexible pattern
      },
    ],
  },

  // Correct property for external packages
  transpilePackages: ["mongoose", "exceljs", "nodemailer"],

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
          { key: "Access-Control-Max-Age", value: "86400" },
        ],
      },
    ]
  },
}

module.exports = nextConfig