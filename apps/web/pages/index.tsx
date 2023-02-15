import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { Case, CASES_QUERY, client, ServiceGroup, ServicesQuery, SERVICES_QUERY } from "utils";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Landing = dynamic(() => import("ui").then((mod) => mod.Landing));
const HyperLink = dynamic(() => import("ui").then((mod) => mod.HyperLink));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const CaseBanner = dynamic(() => import("ui").then((mod) => mod.CaseBanner));
const Section = dynamic(() => import("ui").then((mod) => mod.Section));
const ServicesSection = dynamic(() => import("ui").then((mod) => mod.ServicesSection));
const DescriptionSection = dynamic(() => import("ui").then((mod) => mod.DescriptionSection));
const Seo = dynamic(() => import("ui").then((mod) => mod.Seo));
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
            <Seo title={t("seo.title") as string} description={t("seo.description") as string} />
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
export async function getServerSideProps({ locale, res }: Params) {
    const { allServiceGroup } = await client.request<ServicesQuery>(SERVICES_QUERY);
    const { allCase } = await client.request(CASES_QUERY, { limit: 2 });

    res.setHeader("Cache-Control", "public, s-maxage=59, stale-while-revalidate=299");

    return {
        props: {
            cases: allCase,
            serviceGroups: allServiceGroup,
            ...(await serverSideTranslations(locale || "nl", [
                "common",
                "pages",
                "services",
                "cases",
            ])),
        },
    };
}
