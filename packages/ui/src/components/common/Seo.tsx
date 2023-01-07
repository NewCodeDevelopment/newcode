import { useTranslation } from "next-i18next";
import Head from "next/head";

interface Props {
    title?: string;
    description?: string;
    keywords?: string;
}

export function Seo({ title, description, keywords }: Props) {
    const { t } = useTranslation("common", { keyPrefix: "seo" });

    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

    return (
        <Head>
            {/* Seo */}
            <meta name="title" content={title || (t("title") as string)} />
            <meta name="description" content={description || (t("description") as string)} />
            <meta name="keywords" content={keywords || (t("keywords") as string)} />
            <link rel="canonical" href={SITE_URL} />
            {/* OG Image */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={SITE_URL} />
            <meta property="og:title" content={title || (t("title") as string)} />
            <meta property="og:description" content={description || (t("description") as string)} />
            <meta property="og:image" content="/images/og-image.jpg" />
        </Head>
    );
}
