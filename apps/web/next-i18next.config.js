const path = require("path");

module.exports = {
	// https://www.i18next.com/overview/configuration-options#logging
	debug: process.env.NODE_ENV === "development",
	i18n: {
		locales: ["en", "nl"],
		defaultLocale: "nl",
		localeDetection: true,
		localePath: path.resolve("./public/locales"),
	},
	reloadOnPrerender: process.env.NODE_ENV === "development",
};
