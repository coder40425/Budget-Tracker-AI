const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ensures App Router is enabled
  },
  eslint: {
    ignoreDuringBuilds: true, // avoids build failing due to lint
  },
};

