/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'thoophoms.com',
            },
            {
                protocol: 'https',
                hostname: 'i0.wp.com', // The new CDN domain
            },
        ]
    }
};

export default nextConfig;
