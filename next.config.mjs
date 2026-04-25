/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/jours-feries-:periodFilter', // URL users will see
        destination: '/bank-holidays/:periodFilter', // The internal dynamic route
      },
    ]
  },
}

export default nextConfig
