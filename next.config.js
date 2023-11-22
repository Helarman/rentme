/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      appDir: true,
      serverActions: {
        bodySizeLimit: '2mb',
      },
    },
    images: {
      domains: [
        'res.cloudinary.com',
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com'
      ]
    }
  }
  
  module.exports = nextConfig