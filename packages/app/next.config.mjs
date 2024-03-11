/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    // Api
    API_INTERNAL_GRAPHQL_URL: process.env.API_INTERNAL_GRAPHQL_URL,
    API_INTERNAL_GRAPHQL_WS_URL: process.env.API_INTERNAL_GRAPHQL_WS_URL,
    // Auth
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_SESSION_MAX_AGE: process.env.AUTH_SESSION_MAX_AGE,
    AUTH_GOOGLE_CLIENT_ID: process.env.AUTH_GOOGLE_CLIENT_ID,
    AUTH_GOOGLE_CLIENT_SECRET: process.env.AUTH_GOOGLE_CLIENT_SECRET,
  },
  transpilePackages: ['react-daisyui'],
  reactStrictMode: true,

  // Fix sharp error
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    })
    return config
  },
}

export default nextConfig
