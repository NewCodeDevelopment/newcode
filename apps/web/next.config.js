const withTM = require("next-transpile-modules")(["ui", "utils"]);
const { i18n } = require("./next-i18next.config");

let nextConfig = {
    reactStrictMode: true,
    i18n,
    images: {
        domains: ["picsum.photos"],
    },
};

nextConfig = withTM(nextConfig);

if (process.env.ANALYZE === "true") {
    const withNextBundleAnalyzer = require("next-bundle-analyzer")();
    nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
