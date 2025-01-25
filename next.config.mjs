/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  env: {
    DEV_API: `http://localhost:7272`,
    PRODUCTION_API: 'https://api-dev-minimal-v630.pages.dev',
  },
};

export default nextConfig;
