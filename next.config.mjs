/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- THIS makes Next.js fully static
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
