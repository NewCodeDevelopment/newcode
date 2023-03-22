import { Partytown } from "@builder.io/partytown/react";
import dynamic from "next/dynamic";
import Head from "next/head";

const InitialLoader = dynamic(() => import("../loaders/InitialLoader"));
const Analytics = dynamic(() => import("../common/Analytics"));
const Cookie = dynamic(() => import("../common/Cookie"), {
  ssr: false,
});

export default function Root({ children }: any) {
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
    </>
  );
}
