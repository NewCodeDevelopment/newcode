import Head from "next/head";

type SeoProps = {
  pageTitle: string;
  metaTitle: string;
  description: string;
  canonical: string;
};

export default function Seo({pageTitle ,metaTitle, description, canonical }: SeoProps) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <Head>
      {/* Seo */}
      <title>{pageTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={SITE_URL + canonical} />
      {/* OG Image */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SITE_URL + "/images/og-image.jpg"} />
    </Head>
  );
}
