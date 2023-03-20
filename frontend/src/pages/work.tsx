import { CASES_QUERY } from "@/utils/api/cases";
import { client } from "@/utils/api/client";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { Case, CasesQuery } from "schema";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Landing = dynamic(() => import("@/components/common/Landing"));
const CaseBanner = dynamic(() => import("@/components/cases/CaseBanner"));
const Seo = dynamic(() => import("@/components/common/Seo"));
/**
 *
 *
 *
 *
 *
 */
type WorkPageProps = {
  cases: Case[];
};

export default function WorkPage({ cases }: WorkPageProps) {
  const { t } = useTranslation("pages", { keyPrefix: "work" });

  return (
    <>
      <Seo
        title={t("seo.title") as string}
        description={t("seo.description") as string}
        canonical="/work"
      />
      {/*
       *
       *
       * Landing
       *
       * */}
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
/**
 *
 *
 *
 *
 *
 */
WorkPage.getLayout = function getLayout(page: ReactElement) {
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
  const { allCase } = await client.request<CasesQuery>(CASES_QUERY, { limit: 20 });

  return {
    props: {
      cases: allCase,
      ...(await serverSideTranslations(locale || "nl", ["common", "pages", "cases"])),
    },
  };
}
