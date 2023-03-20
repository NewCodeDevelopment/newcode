import { CASES_QUERY } from "@/utils/api/cases";
import { client } from "@/utils/api/client";
import { SERVICES_QUERY } from "@/utils/api/services";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { Case, CasesQuery, ServiceGroup, ServicesQuery } from "schema";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Landing = dynamic(() => import("@/components/common/Landing"));
const HyperLink = dynamic(() => import("@/components/actions/HyperLink"));
const Heading = dynamic(() => import("@/components/typography/Heading"));
const CaseBanner = dynamic(() => import("@/components/cases/CaseBanner"));
const Section = dynamic(() => import("@/components/sections/Section"));
const ServicesSection = dynamic(() => import("@/components/services/ServicesSection"));
const DescriptionSection = dynamic(() => import("@/components/sections/DescriptionSection"));
const Seo = dynamic(() => import("@/components/common/Seo"));
/**
 *
 *
 *
 *
 *
 */
type HomePageProps = {
  serviceGroups: ServiceGroup[];
  cases: Case[];
};

export default function HomePage({ serviceGroups, cases }: HomePageProps) {
  const { t } = useTranslation("pages", { keyPrefix: "home" });

  return (
    <>
      <Seo
        title={t("seo.title") as string}
        description={t("seo.description") as string}
        canonical=""
      />
      {/* 
				*
				*
				Landing
				*
			 */}
      <Landing title={t("landing.title")} />
      {/* 
				*
				*
				About
				*
			 */}
      <DescriptionSection
        bg="light"
        title={t("mission.title")}
        description={t("mission.description")}
        link={{
          href: "/about",
          text: t("mission.button"),
        }}
      />
      {/* 
				*
				*
				Case
				*
			 */}
      <CaseBanner case={cases[0]} />

      {/* 
			 	*
				*
				Services
				*
			 */}
      <Section
        bg="light"
        style={{
          position: "unset",
        }}
      >
        <div className="flex w-full flex-col gap-6 self-center lg:gap-10">
          <Heading type="h3" color="dark">
            {t("services.title")}_
          </Heading>

          <ServicesSection theme="light" serviceGroups={serviceGroups} />

          <HyperLink href="/services">{t("services.link")}</HyperLink>
        </div>
      </Section>
      {/* 
				*
				*
				Case
				*
			 */}
      <CaseBanner case={cases[1]} />
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
HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
/**
 *
 *
 *
 *
 *
 */
export async function getStaticProps({ locale, res }: Params) {
  const { allServiceGroup } = await client.request<ServicesQuery>(SERVICES_QUERY);
  const { allCase } = await client.request<CasesQuery>(CASES_QUERY, { limit: 2 });

  return {
    props: {
      cases: allCase,
      serviceGroups: allServiceGroup,
      ...(await serverSideTranslations(locale || "nl", ["common", "pages", "services", "cases"])),
    },
  };
}
