const { RecoilEnv } = require("recoil");
const { i18n } = require("./next-i18next.config");

if (process.env.NODE_ENV === "development") {
    RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
}

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    reactStrictMode: true,
    i18n,
    nextScriptWorkers: true,
    transpilePackages: ["ui", "utils"],
    images: {
        domains: ["cdn.sanity.io"],
    }
};
