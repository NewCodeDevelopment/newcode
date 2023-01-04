import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useCases } from "utils";

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
export default function HomePage() {
    const { t } = useTranslation("pages", { keyPrefix: "home" });

    const cases = useCases();

    return (
        <>
            <Seo title={t("seo.title")} description={t("seo.description")} />
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

                    <ServicesSection theme="light" />

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
export async function getStaticProps({ locale }: Params) {
    return {
        props: {
            ...(await serverSideTranslations(locale || "nl", [
                "common",
                "pages",
                "services",
                "cases",
            ])),
        },
    };
}
