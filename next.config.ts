import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
const buildVersion = new Date().getTime().toString();
const basePath = "";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },

    // Image optimization
    images: {
        formats: ["image/webp", "image/avif"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Compression
    compress: true,

    // Powered by header
    poweredByHeader: false,

    output: "standalone",

    // Security headers
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "origin-when-cross-origin",
                    },
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                ],
            },
        ];
    },

    basePath,

    // environment variables
    env: {
        buildVersion,
    },

    sassOptions: {
        prependData: `$version-image: '${buildVersion}';`,
    },

    async rewrites() {
        return [
            {
                source: "/health",
                destination: "/api/health",
            },
        ];
    },
};

export default withSentryConfig(nextConfig, {
    silent: true,
    sourcemaps: { deleteSourcemapsAfterUpload: true },
});
