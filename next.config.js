/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack(config) {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      os: false,
      'pino-pretty': false,
      encoding: false,
      lokijs: false,
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random/**',
      },
    ],
  },
}

module.exports = nextConfig
