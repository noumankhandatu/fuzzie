/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdnb.artstation.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'aceternity.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
