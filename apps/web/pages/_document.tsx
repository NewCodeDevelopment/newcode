import { Html, Main, NextScript, Head, DocumentProps } from "next/document";
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
                <meta name="keywords" content="code software automation solutions" />
                <meta name="title" content="Code makes life easier. - NewCode" />
                <meta
                    name="description"
                    content="Bij NewCode willen we graag jouw leven vergemakkelijken aan de hand van technologie, door naar jouw verhaal te luisteren."
                />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
