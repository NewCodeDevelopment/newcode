const path = require("path");

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
    // https://www.i18next.com/overview/configuration-options#logging
    debug: false,
    i18n: {
        locales: ["nl"],
        defaultLocale: "nl",
        localeDetection: true,
        localePath: path.resolve("./public/locales"),
    },
    reloadOnPrerender: process.env.NODE_ENV === "development",
};
