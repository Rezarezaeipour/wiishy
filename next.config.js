/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/index',
        destination: '/signIn',
      },
      {
        source: '/',
        destination: '/signIn',
      }
    ]
  }
}

module.exports = nextConfig
// module.exports = {
//   env: {
//     customKey: 'my-value',
//   },
// }

