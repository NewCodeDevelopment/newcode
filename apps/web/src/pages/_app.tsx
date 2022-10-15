import "ui/src/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode, Suspense } from "react";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config.js";
import { RecoilRoot } from "recoil";

const PageLoader = dynamic(() => import("ui").then((mod) => mod.PageLoader));
const Root = dynamic(() => import("../components/Root"));

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<RecoilRoot>
			<Root>
				<Suspense fallback={<PageLoader />}>
					{getLayout(<Component {...pageProps} />)}
				</Suspense>
			</Root>
		</RecoilRoot>
	);
};

export default appWithTranslation(MyApp, nextI18NextConfig);
