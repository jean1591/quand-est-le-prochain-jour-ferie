/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/jours-feries-:year", // URL users will see
        destination: "/bank-holidays/:year", // The internal dynamic route
      },
      // TODO
      {
        source: "/jours-feries-:month", // URL users will see
        destination: "/bank-holidays/:month", // The internal dynamic route
      },
      // TODO
      {
        source: "/jours-feries-:month-:year", // URL users will see
        destination: "/bank-holidays/:year/:month", // The internal dynamic route
      },
    ];
  },
};

export default nextConfig;
