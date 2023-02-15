import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import {
    client,
    ServiceGroup,
    ServicesQuery,
    SERVICES_QUERY,
    Testimonial,
    TestimonialsQuery,
    TESTIMONIALS_QUERY,
} from "utils";

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
type ServicesPageProps = {
    serviceGroups: ServiceGroup[];
    testimonials: Testimonial[];
};

export default function ServicesPage({ serviceGroups, testimonials }: ServicesPageProps) {
    const { t } = useTranslation("pages", { keyPrefix: "services" });

    return (
        <>
            <Seo title={t("seo.title") as string} description={t("seo.description") as string} />
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

                    <ServicesSection theme="dark" serviceGroups={serviceGroups} />
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
            <Testimonials testimonials={testimonials} />
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
export async function getServerSideProps({ locale, res }: Params) {
    const { allServiceGroup } = await client.request<ServicesQuery>(SERVICES_QUERY);
    const { allTestimonial } = await client.request<TestimonialsQuery>(TESTIMONIALS_QUERY);

    res.setHeader("Cache-Control", "public, s-maxage=59, stale-while-revalidate=299");

    return {
        props: {
            testimonials: allTestimonial,
            serviceGroups: allServiceGroup,
            ...(await serverSideTranslations(locale || "nl", [
                "common",
                "pages",
                "services",
                "testimonials",
            ])),
        },
    };
}
