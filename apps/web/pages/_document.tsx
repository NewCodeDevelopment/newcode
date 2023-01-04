import { Html, Main, NextScript, Head, DocumentProps } from "next/document";
import Script from "next/script";
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
                <Script
                    async
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-GC84HEE4ZZ"
                />
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-GC84HEE4ZZ');`,
                    }}
                />

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
