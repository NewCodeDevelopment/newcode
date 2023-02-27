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
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ff1800" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#0d0208" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                <meta name="theme-color" content="#0d0208" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
