/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://newcode.be",
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    sitemapSize: 7000,
    exclude: ["/api/*", "/connect/error", "/connect/success"],
};
