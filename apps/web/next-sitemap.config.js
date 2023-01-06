/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://newcode.be",
    generateRobotsTxt: true, // (optional)
    // ...other options
};
