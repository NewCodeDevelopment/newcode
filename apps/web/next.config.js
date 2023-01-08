const withTM = require("next-transpile-modules")(["ui", "utils"]);
const { i18n } = require("./next-i18next.config");

module.exports = withTM({
    reactStrictMode: true,
    i18n,
    nextScriptWorkers: true,
    images: {
        domains: ["picsum.photos"],
    },
});

// assetPrefix:
//     process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_CDN_URL : undefined,
