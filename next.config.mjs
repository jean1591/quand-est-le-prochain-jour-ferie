/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
