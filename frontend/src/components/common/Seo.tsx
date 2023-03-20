import { useTranslation } from "next-i18next";
import Head from "next/head";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonical: string;
};

export default function Seo({ title, description, keywords, canonical }: SeoProps) {
  const { t } = useTranslation("common", { keyPrefix: "seo" });

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <Head>
      {/* Seo */}
      <meta name="title" content={title || (t("title") as string)} />
      <meta name="description" content={description || (t("description") as string)} />
      <link rel="canonical" href={SITE_URL + canonical} />
      {/* OG Image */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={title || (t("title") as string)} />
      <meta property="og:description" content={description || (t("description") as string)} />
      <meta property="og:image" content={SITE_URL + "/images/og-image.jpg"} />
    </Head>
  );
}
