const { RecoilEnv } = require("recoil");

if (process.env.NODE_ENV === "development") {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
};

module.exports = nextConfig;
