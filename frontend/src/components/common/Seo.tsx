import Head from "next/head";

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
};

export default function Seo({ title, description, canonical }: SeoProps) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <Head>
      {/* Seo */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={SITE_URL + canonical} />
      {/* OG Image */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SITE_URL + "/images/og-image.jpg"} />
    </Head>
  );
}
