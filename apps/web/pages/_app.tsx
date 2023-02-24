import localFont from "@next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode, Suspense } from "react";
import { RecoilRoot } from "recoil";
import "ui/src/styles/globals.css";
import nextI18NextConfig from "../next-i18next.config.js";

const PageLoader = dynamic(() => import("ui").then((mod) => mod.PageLoader));
const Root = dynamic(() => import("ui").then((mod) => mod.Root));
/**
 *
 *
 *
 *
 *
 */
const font = localFont({
    src: [
        {
            path: "../public/font/Gilroy-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/font/Gilroy-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/font/Gilroy-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/font/Gilroy-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/font/Gilroy-ExtraBold.otf",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-family",
});

const queryClient = new QueryClient();

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <div className={font.variable}>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <Root>
                        <Suspense fallback={<PageLoader />}>
                            {getLayout(<Component {...pageProps} />)}
                        </Suspense>
                    </Root>
                </RecoilRoot>
            </QueryClientProvider>
        </div>
    );
};

export default appWithTranslation(MyApp, nextI18NextConfig as any);
