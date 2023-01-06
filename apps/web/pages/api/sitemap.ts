import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const sitemap = await generateSitemap();
    res.setHeader("Content-Type", "text/xml");
    // res.write(sitemap);
    res.end();
}
