import Head from "next/head";
import { useCookieStatus } from "utils";

export function Analytics() {
    const [cookieAccepted] = useCookieStatus();

    return (
        <Head>
            {cookieAccepted && (
                <>
                    <script
                        async
                        type="text/partytown"
                        src="https://www.googletagmanager.com/gtag/js?id=G-GC84HEE4ZZ"
                    />
                    <script
                        id="gtm-script"
                        type="text/partytown"
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-GC84HEE4ZZ');`,
                        }}
                    />
                </>
            )}
        </Head>
    );
}
