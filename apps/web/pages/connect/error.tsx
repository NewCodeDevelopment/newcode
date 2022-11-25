import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Error = dynamic(() => import("ui").then((mod) => mod.Error));
/**
 *
 *
 *
 *
 *
 */
export default function ErrorPage() {
    const { t } = useTranslation("pages", { keyPrefix: "form.fail" });

    return <Error title={t("title")} statusCode={500} />;
}
/**
 *
 *
 *
 *
 *
 */
ErrorPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout footer={false} scroll={false}>
            {page}
        </MainLayout>
    );
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
            ...(await serverSideTranslations(locale || "nl", ["common", "pages"])),
        },
    };
}
