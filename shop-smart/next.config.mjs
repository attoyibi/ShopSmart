/** @type {import('next').NextConfig} */
const nextConfig = {
    ignoreDuringBuilds: true,
    images: {
        domains: ['pagedone.io', 'loremflickr.com'],
    },
};

export default nextConfig;
