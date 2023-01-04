import { useTranslation } from "next-i18next";
import Head from "next/head";

interface Props {
	title?: string;
	description?: string;
	keywords?: string;
}

export default function Seo({ title, description, keywords }: Props) {
	const { t } = useTranslation("common", { keyPrefix: "seo" });

	return (
		<Head>
			<meta name="title" content={title || (t("title") as string)} />
			<meta
				name="description"
				content={description || (t("description") as string)}
			/>
			<meta name="keywords" content={keywords || (t("keywords") as string)} />
		</Head>
	);
}
