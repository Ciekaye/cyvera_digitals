/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    if (isServer) {
      config.externals = [...(config.externals || []), 'better-sqlite3'];
    }

    // Make PNG/image imports return a URL string (matching Vite behaviour)
    // This avoids StaticImageData type mismatches from next/image auto-processing
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
      type: 'asset/resource',
    });

    return config;
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
