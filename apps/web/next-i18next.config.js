const path = require("path");

module.exports = {
    // https://www.i18next.com/overview/configuration-options#logging
    debug: false,
    i18n: {
        locales: ["nl", "en"],
        defaultLocale: "nl",
        localeDetection: true,
        localePath: path.resolve("./public/locales"),
    },
    reloadOnPrerender: process.env.NODE_ENV === "development",
};
