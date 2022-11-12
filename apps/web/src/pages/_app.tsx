import "ui/src/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode, Suspense } from "react";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config.js";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const PageLoader = dynamic(() => import("ui").then((mod) => mod.PageLoader));
const Root = dynamic(() => import("ui").then((mod) => mod.Root));
/**
 *
 *
 *
 *
 *
 */
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
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Root>
                    <Suspense fallback={<PageLoader />}>
                        {getLayout(<Component {...pageProps} />)}
                    </Suspense>
                </Root>
            </RecoilRoot>
        </QueryClientProvider>
    );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
