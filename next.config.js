/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["en-US", "zh-Hant"],
        defaultLocale: "en-US",
        localeDetection: false,
    },
};

module.exports = nextConfig;
