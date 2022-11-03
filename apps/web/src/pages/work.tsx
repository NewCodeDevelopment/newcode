import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useCases } from "utils";
import { useTranslation } from "next-i18next";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Landing = dynamic(() => import("ui").then((mod) => mod.Landing), {
    ssr: false,
});
const CaseBanner = dynamic(() => import("ui").then((mod) => mod.CaseBanner), {
    ssr: false,
});

export default function Work() {
    const { t } = useTranslation("pages", { keyPrefix: "work" });

    const cases = useCases();

    return (
        <>
            <Landing title={t("landing.title")} />
            {/* 
				*
				*
				Cases
				*
			 */}
            {cases.map((c, index) => (
                <CaseBanner key={index} case={c} />
            ))}
        </>
    );
}

Work.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps({ locale }: Params) {
    return {
        props: {
            ...(await serverSideTranslations(locale || "nl", [
                "common",
                "pages",
                "cases",
            ])),
        },
    };
}
