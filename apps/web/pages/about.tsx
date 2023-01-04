import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import landingImage from "@/public/images/about/landing.jpg";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const GridSection = dynamic(() => import("ui").then((mod) => mod.GridSection));
const Scroll = dynamic(() => import("ui").then((mod) => mod.Scroll));
const Testimonials = dynamic(() => import("ui").then((mod) => mod.Testimonials));
const DescriptionSection = dynamic(() => import("ui").then((mod) => mod.DescriptionSection));
const Section = dynamic(() => import("ui").then((mod) => mod.Section));
const CSharpIcon = dynamic(() => import("ui").then((mod) => mod.CSharpIcon));
const DockerIcon = dynamic(() => import("ui").then((mod) => mod.DockerIcon));
const GraphQLIcon = dynamic(() => import("ui").then((mod) => mod.GraphQLIcon));
const NextIcon = dynamic(() => import("ui").then((mod) => mod.NextIcon));
const NodeIcon = dynamic(() => import("ui").then((mod) => mod.NodeIcon));
const PostgresIcon = dynamic(() => import("ui").then((mod) => mod.PostgresIcon));
const ReactIcon = dynamic(() => import("ui").then((mod) => mod.ReactIcon));
const TailwindLogo = dynamic(() => import("ui").then((mod) => mod.TailwindLogo));
const Seo = dynamic(() => import("ui").then((mod) => mod.Seo));
/**
 *
 *
 *
 *
 *
 */
type NatureItem = {
    title: string;
    values: string[];
};

export default function AboutPage() {
    const { t } = useTranslation("pages", { keyPrefix: "about" });

    const natureObject = t("nature", {
        returnObjects: true,
    }) as NatureItem[];

    return (
        <>
            <Seo title={t("seo.title")} description={t("seo.description")} />

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
                />

                <div className="absolute top-0 left-0 -z-10 h-full w-full bg-dark-700 bg-opacity-30 backdrop-blur-[6px] backdrop-filter" />

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
            <Section bg="dark" align="center">
                <div className="flex flex-col gap-6 self-center lg:max-w-xl lg:gap-10 2xl:max-w-4xl">
                    <Heading type="h3" color="red">
                        {t("tools.title")}_
                    </Heading>

                    <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
                        {[
                            {
                                icon: CSharpIcon,
                            },
                            {
                                icon: DockerIcon,
                            },
                            {
                                icon: GraphQLIcon,
                            },
                            {
                                icon: NodeIcon,
                            },
                            {
                                icon: PostgresIcon,
                            },
                            {
                                icon: ReactIcon,
                            },
                            {
                                icon: NextIcon,
                            },
                            {
                                icon: TailwindLogo,
                            },
                        ].map((icon, index) => (
                            <motion.div
                                key={index}
                                className="flex aspect-square h-full w-full flex-col items-center justify-center rounded-xl bg-dark-500"
                                initial={{
                                    opacity: 0,
                                    y: -20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    },
                                }}
                            >
                                {<icon.icon className="w-1/2 fill-light-500 stroke-dark-500" />}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
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
export async function getStaticProps({ locale }: Params) {
    return {
        props: {
            ...(await serverSideTranslations(locale || "nl", ["common", "pages", "testimonials"])),
        },
    };
}
