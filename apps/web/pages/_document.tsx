import { DocumentProps, Head, Html, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";
/**
 *
 *
 *
 *
 *
 */
export default function Document(props: DocumentProps) {
    const currentLocale = props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

    return (
        <Html lang={currentLocale}>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
