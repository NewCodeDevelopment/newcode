import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ReactElement } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Seo = dynamic(() => import("ui").then((mod) => mod.Seo));
const Logo = dynamic(() => import("ui").then((mod) => mod.Logo));
const Section = dynamic(() => import("ui").then((mod) => mod.Section));
const DescriptionSection = dynamic(() => import("ui").then((mod) => mod.DescriptionSection));
const Text = dynamic(() => import("ui").then((mod) => mod.Text));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const Paragraph = dynamic(() => import("ui").then((mod) => mod.Paragraph));
/**
 *
 *
 *
 *
 *
 */
export default function WorkshopPage() {
    const { t } = useTranslation("pages", { keyPrefix: "workshop" });
    const { ref, inView } = useInView();

    return (
        <>
            <Seo title={t("seo.title") as string} description={t("seo.description") as string} />
            {/* 
				*
				*
				Landing
				*
			 */}
            <Section className="relative" mobileScreen>
                <div className="absolute inset-0 grid h-full w-full grid-rows-2">
                    <div className="relative grid place-items-center">
                        <Image
                            src="/images/background.jpg"
                            alt="footer background"
                            width={3840}
                            height={2160}
                            className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center"
                        />

                        <Logo
                            colors={{
                                symbol: "red",
                                text: "light",
                            }}
                            className="w-1/2 max-w-4xl lg:w-1/4"
                        />
                    </div>

                    <div className="relative grid place-items-center">
                        <div className="bg-light-500 absolute inset-0 -z-20 h-full w-full" />

                        <Image
                            src="/images/workshop/banner.jpg"
                            alt="footer background"
                            width={768}
                            height={355}
                            className="absolute bottom-0 left-0 -z-10 h-full w-full object-cover object-center opacity-10"
                        />

                        <Image
                            src="/images/workshop/logo.png"
                            alt="Campus Quadrant Logo"
                            width={780}
                            height={672}
                            // className="w-1/2 max-w-4xl lg:w-1/4"
                            className="w-32 lg:w-64"
                        />
                    </div>
                </div>
            </Section>
            {/* 
				*
				*
				Wat is het?
				*
			 */}
            <DescriptionSection
                bg="light"
                title={t("about.title")}
                description={t("about.description")}
                link={{
                    href: "/workshop/form",
                    text: t("about.button"),
                }}
            />

            {/* 
				*
				*
				Wanneer is het?
				*
			 */}
            <Section bg="dark" align="center">
                <span ref={ref}>
                    {inView && (
                        <Text type="h2" color="red" weight="bold" className="text-[7vw]">
                            <CountUp start={0} end={23} duration={2} />
                            {" Maart 2023"}
                        </Text>
                    )}
                </span>
            </Section>
            {/* 
				*
				*
				Sprekers
				*
			 */}
            <Section bg="dark" align="center">
                <div className="grid h-full min-h-fit w-full flex-grow grid-rows-[70vh_70vh] gap-20 lg:max-h-full lg:grid-cols-2 2xl:gap-[15vw]">
                    {[
                        {
                            image: "/images/workshop/people/burak.jpg",
                            name: "Burak Gozen",
                            job: "Creative Developer",
                            short: "Innovation is his middle name.",
                        },
                        {
                            image: "/images/workshop/people/farah.jpg",
                            name: "Farah Amri",
                            job: "Digital Maker",
                            short: "Most creative person you'll ever meet.",
                        },
                    ].map((speaker, index) => (
                        <div
                            key={index}
                            className="relative z-0 flex h-full w-full flex-col justify-end gap-4 rounded-xl"
                        >
                            <Image
                                src={speaker.image}
                                alt={speaker.name}
                                width={768}
                                height={1024}
                                className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
                            />

                            <div className="bg-dark-500 flex flex-col gap-1 px-12 py-8">
                                <Heading type="h3" color="red">
                                    {speaker.name}
                                </Heading>
                                <Heading type="h4">{speaker.job}</Heading>

                                <Paragraph size="small">{speaker.short}</Paragraph>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
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
WorkshopPage.getLayout = function getLayout(page: ReactElement) {
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
            ...(await serverSideTranslations(locale || "nl", ["common", "pages"])),
        },
    };
}
