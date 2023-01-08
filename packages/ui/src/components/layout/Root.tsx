import { Partytown } from "@builder.io/partytown/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { scrollState } from "utils";

const InitialLoader = dynamic(() => import("..").then((mod) => mod.InitialLoader));
const Analytics = dynamic(() => import("..").then((mod) => mod.Analytics));
const Cookie = dynamic(() => import("..").then((mod) => mod.Cookie), {
    ssr: false,
});

export function Root({ children }: any) {
    const [scroll] = useRecoilState(scrollState);

    return (
        <>
            <Head>
                <title>NewCode</title>
                <Partytown debug={true} forward={["dataLayer.push"]} />
            </Head>

            {process.env.NODE_ENV !== "development" && <InitialLoader />}
            <Analytics />
            <Cookie />
            {children}

            {!scroll.enabled && (
                <style
                    // @ts-ignore
                    jsx
                    global
                >
                    {`
                        body,
                        html {
                            overflow: hidden !important;
                        }
                    `}
                </style>
            )}
        </>
    );
}
