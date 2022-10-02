import { Html, Main, NextScript, Head, DocumentProps } from "next/document";
import i18nextConfig from "../../next-i18next.config";

export default function Document(props: DocumentProps) {
	const currentLocale =
		props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

	return (
		<Html lang={currentLocale}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
				<meta name="keywords" content="koffie koffie-ervaring duurzaam" />
				<meta
					name="title"
					content="Koffie op maat, bonen, machines, workshops, advies - The God Shot "
				/>
				<meta
					name="description"
					content="Je kan bij ons terecht voor het trainen en optimaliseren van jouw koffie-ervaring. Zowel particulieren als bedrijven."
				/>
				<link rel="icon" href="/favicon.svg" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
