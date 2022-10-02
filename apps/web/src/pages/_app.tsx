import "../styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode, Suspense } from "react";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config.js";

const PageLoader = dynamic(() => import("ui").then((mod) => mod.PageLoader));

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<Suspense fallback={<PageLoader />}>
			{getLayout(<Component {...pageProps} />)}
		</Suspense>
	);
};

export default appWithTranslation(MyApp, nextI18NextConfig);
