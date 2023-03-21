import { CASES_QUERY } from "@/utils/api/cases";
import { client } from "@/utils/api/client";
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
  return (
    <>
      <Seo
        title="Onze Case Studies - NewCode"
        description="Bekijk onze case studies en ontdek hoe wij onze klanten hebben geholpen."
        canonical="/work"
      />
      {/*
       *
       *
       * Landing
       *
       * */}
      <Landing title="Life made easier" />
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
export async function getStaticProps() {
  const { allCase } = await client.request<CasesQuery>(CASES_QUERY, { limit: 20 });

  return {
    props: {
      cases: allCase,
    },
  };
}
