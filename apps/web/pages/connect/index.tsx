import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
/**
 *
 *
 *
 *
 *
 */
export default function ConnectPage() {
    return <></>;
}
/**
 *
 *
 *
 *
 *
 */
ConnectPage.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
/**
 *
 *
 *
 *
 *
 */
export async function getStaticProps({ locale }: Params) {
    return {
        props: {
            ...(await serverSideTranslations(locale || "nl", ["common"])),
        },
    };
}
