// GITHUB_PAGES=true : export statique servi sous /rse (voir .github/workflows/pages.yml)
const pages = process.env.GITHUB_PAGES === 'true';
const base = pages ? '/rse' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  ...(pages && { output: 'export', basePath: base, trailingSlash: true }),
  env: { NEXT_PUBLIC_BASE_PATH: base },
  images: {
    unoptimized: pages,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
