import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const Section = dynamic(() => import("ui").then((mod) => mod.Section));
const GridSection = dynamic(() => import("ui").then((mod) => mod.GridSection));
const ServicesSection = dynamic(() => import("ui").then((mod) => mod.ServicesSection));
const Testimonials = dynamic(() => import("ui").then((mod) => mod.Testimonials));
const Seo = dynamic(() => import("ui").then((mod) => mod.Seo));
/**
 *
 *
 *
 *
 *
 */
export default function ServicesPage() {
    const { t } = useTranslation("pages", { keyPrefix: "services" });

    return (
        <>
            <Seo title={t("seo.title")} description={t("seo.description")} />
            {/* 
    
    
            Services
            
            */}
            <Section
                bg="dark"
                style={{
                    position: "unset",
                    height: "100vh",
                }}
            >
                <div className="flex w-full flex-col gap-6 self-center lg:gap-10">
                    <Heading type="h3" color="light">
                        {t("landing.title")}_
                    </Heading>

                    <ServicesSection theme="dark" />
                </div>
            </Section>
            {/* 
        
        
        Approach
        
        */}
            <GridSection
                bg="light"
                title={t("approach.title")}
                items={t("approach.items", { returnObjects: true })}
                styles={{
                    title: "dark",
                    items: {
                        title: "red",
                        description: "dark",
                    },
                }}
            />
            {/* 
			 	*
				*
				Testimonials
				*
			 */}
            <Testimonials />
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
ServicesPage.getLayout = function getLayout(page: ReactElement) {
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
                "testimonials",
            ])),
        },
    };
}
