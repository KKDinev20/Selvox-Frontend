/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localhost:7095/swagger/index.html' // Adjust the port as needed
      }
    ];
  }
};

export default nextConfig;
