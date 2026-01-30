/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['*'],
  async redirects() {
    return [
      {
        source: "/wp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
