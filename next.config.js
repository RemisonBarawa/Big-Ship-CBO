/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // Restrict to your specific Cloudinary cloud name (from your URL: /dwhp5xrhn/...)
        // This is safer than allowing everything on res.cloudinary.com
      },
      // Optional: If you ever use Cloudinary subdomains or other patterns, add more entries
    ],
  },
};

module.exports = nextConfig;