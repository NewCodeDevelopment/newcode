const withTM = require("next-transpile-modules")(["ui", "utils"]);
const { i18n } = require("./next-i18next.config");

module.exports = withTM({
    reactStrictMode: true,
    i18n,
    images: {
        domains: ["picsum.photos"],
    },
});

// if (process.env.ANALYZE === "true") {
//     const withNextBundleAnalyzer = require("next-bundle-analyzer")();
//     nextConfig = withNextBundleAnalyzer(nextConfig);
// }
