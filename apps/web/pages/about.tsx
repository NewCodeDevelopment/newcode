import landingImage from "@/public/images/about/landing.jpg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import { ReactElement } from "react";
import { client, Testimonial, TestimonialsQuery, TESTIMONIALS_QUERY } from "utils";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const GridSection = dynamic(() => import("ui").then((mod) => mod.GridSection));
const Scroll = dynamic(() => import("ui").then((mod) => mod.Scroll));
const Testimonials = dynamic(() => import("ui").then((mod) => mod.Testimonials));
const DescriptionSection = dynamic(() => import("ui").then((mod) => mod.DescriptionSection));
const Section = dynamic(() => import("ui").then((mod) => mod.Section));
const ToolGrid = dynamic(() => import("ui").then((mod) => mod.ToolGrid));
const Seo = dynamic(() => import("ui").then((mod) => mod.Seo));
/**
 *
 *
 *
 *
 *
 */
type AboutPageProps = {
    testimonials: Testimonial[];
};

type NatureItem = {
    title: string;
    values: string[];
};

export default function AboutPage({ testimonials }: AboutPageProps) {
    const { t } = useTranslation("pages", { keyPrefix: "about" });

    const natureObject = t("nature", {
        returnObjects: true,
    }) as NatureItem[];

    return (
        <>
            <Seo title={t("seo.title") as string} description={t("seo.description") as string} />

            {/* 
				*
				*
				Landing
				*
			 */}
            <Section bg="dark" align="center" className="relative h-screen pb-52" mobileScreen>
                <Image
                    src={landingImage}
                    alt="Landing"
                    layout="fill"
                    objectFit="cover"
                    className="-z-10"
                    priority
                />

                <div className="bg-dark-700 absolute top-0 left-0 -z-10 h-full w-full bg-opacity-30 backdrop-blur-[6px] backdrop-filter" />

                <Heading
                    type="h1"
                    color="light"
                    className="col-start-1 row-start-1 lg:text-center"
                    maxCharacters={10}
                >
                    {t("landing.title")}
                    <span className="text-red-500">_</span>
                </Heading>

                <Scroll className="absolute left-0 right-0 bottom-40 mx-auto lg:bottom-20" />
            </Section>
            {/* 
                *
                *
                Nature of the company
                *
                *
            */}
            <Section bg="light" align="center">
                <div className="flex w-full flex-col justify-evenly gap-16 md:flex-row">
                    {natureObject.map(({ title, values }, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <Heading type="h3" color="red">
                                {title + "_"}
                            </Heading>

                            <ul className="text-2xl font-bold lg:text-3xl">
                                {values.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
            {/* 
                *
                *
                Vision
                *
                *
            */}
            <DescriptionSection
                bg="dark"
                title={t("vision.title")}
                description={t("vision.description")}
            />
            {/* 
                *
                *
                Values
                *
            */}
            <GridSection
                bg="light"
                title={t("values.title")}
                items={t("values.items", { returnObjects: true })}
                styles={{
                    title: "red",
                    items: {
                        title: "dark",
                        description: "dark",
                    },
                }}
            />
            {/* 
                *
                *
                Tools
                *
            */}
            <ToolGrid />
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
AboutPage.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
/**
 *
 *
 *
 *
 *
 */
export async function getServerSideProps({ locale }: Params) {
    const { allTestimonial } = await client.request<TestimonialsQuery>(TESTIMONIALS_QUERY);

    return {
        props: {
            testimonials: allTestimonial,
            ...(await serverSideTranslations(locale || "nl", ["common", "pages", "testimonials"])),
        },
    };
}
