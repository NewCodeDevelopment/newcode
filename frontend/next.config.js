const { RecoilEnv } = require("recoil");
const { i18n } = require("./next-i18next.config");

if (process.env.NODE_ENV === "development") {
    RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
    i18n,
    images: {
        domains: ["cdn.sanity.io"],
    },
}

module.exports = nextConfig
