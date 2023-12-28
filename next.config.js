/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
            },
        ],
    },
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
