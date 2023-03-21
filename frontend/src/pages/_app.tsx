import "@/styles/globals.css";
import localFont from "@next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode, Suspense } from "react";
import { RecoilRoot } from "recoil";

const PageLoader = dynamic(() => import("@/components/loaders/PageLoader"));
const Root = dynamic(() => import("@/components/layouts/Root"));
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
      path: "../../public/font/Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-family",
  fallback: ["sans-serif"],
});

const queryClient = new QueryClient();

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className={`${font.variable} font-sans`}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Root>
            <Suspense fallback={<PageLoader />}>
              {/* <Navigation pathsHook={usePaths} />
              <Scrollable>
                <Component {...pageProps} />
              </Scrollable> */}
              {getLayout(<Component {...pageProps} />)}
            </Suspense>
          </Root>
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
}
