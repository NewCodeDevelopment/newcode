import { CASES_QUERY } from "@/utils/api/cases";
import { client } from "@/utils/api/client";
import { SERVICES_QUERY } from "@/utils/api/services";
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
  return (
    <>
      <Seo
        pageTitle="NewCode"
        metaTitle="Code makes life easier - NewCode"
        description="Bij NewCode willen we graag jouw leven vergemakkelijken aan de hand van technologie, door naar jouw verhaal te luisteren."
        canonical=""
      />
      {/* 
				*
				*
				Landing
				*
			 */}
      <Landing title="Code makes life easier" />
      {/* 
				*
				*
				About
				*
			 */}
      <DescriptionSection
        bg="light"
        title="Onze Missie"
        description="NewCode wilt het leven van de mens vergemakkelijken met behulp van technologie. Er wordt geluisterd naar de problemen en verhalen, en lossen deze op een zo effectief mogelijke manier op aan de hand van een kwalitatieve, transparante en eerlijke werkwijze."
        link={{
          href: "/about",
          text: "De backend van NewCode",
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
            Services_
          </Heading>

          <ServicesSection theme="light" serviceGroups={serviceGroups} />

          <HyperLink href="/services">Bekijk onze services</HyperLink>
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
export async function getStaticProps() {
  const { allServiceGroup } = await client.request<ServicesQuery>(SERVICES_QUERY);
  const { allCase } = await client.request<CasesQuery>(CASES_QUERY, { limit: 2 });

  return {
    props: {
      cases: allCase,
      serviceGroups: allServiceGroup,
    },
  };
}
