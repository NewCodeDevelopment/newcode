const withTM = require("next-transpile-modules")(["ui", "utils"]);
const { RecoilEnv } = require("recoil");
const { i18n } = require("./next-i18next.config");

if (process.env.NODE_ENV === "development") {
    RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
}

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTM({
    reactStrictMode: true,
    i18n,
    nextScriptWorkers: true,
});
