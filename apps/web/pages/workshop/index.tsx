import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ReactElement } from "react";
import { useInView } from "react-intersection-observer";
import { useDevice } from "utils";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Seo = dynamic(() => import("ui").then((mod) => mod.Seo));
const Logo = dynamic(() => import("ui").then((mod) => mod.Logo));
const Section = dynamic(() => import("ui").then((mod) => mod.Section));
const DescriptionSection = dynamic(() => import("ui").then((mod) => mod.DescriptionSection));
const Text = dynamic(() => import("ui").then((mod) => mod.Text));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const Paragraph = dynamic(() => import("ui").then((mod) => mod.Paragraph));
const CountUp = dynamic(() => import("react-countup"));
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
    const device = useDevice();

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
                <div className="absolute inset-0 grid h-full max-h-fit w-full grid-rows-2">
                    <div className="relative grid place-items-center">
                        <Image
                            src={
                                device === "mobile"
                                    ? "/images/background/1x.jpg"
                                    : "/images/background/2x.jpg"
                            }
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
                            className="w-1/2 min-w-[15rem] max-w-4xl lg:w-1/4"
                        />
                    </div>

                    <div className="relative z-0 grid place-items-center overflow-hidden">
                        <div className="bg-light-600 absolute inset-0 -z-10 h-full w-full opacity-90" />

                        <Image
                            src="/images/workshop/banner.jpg"
                            alt="footer background"
                            width={768}
                            height={355}
                            className="absolute inset-0 -z-20 h-full w-full object-cover lg:h-fit"
                        />

                        <Image
                            src="/images/workshop/logo.svg"
                            alt="Campus Quadrant Logo"
                            width={1000}
                            height={1000}
                            className="w-1/3 min-w-[20rem] max-w-3xl"
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
            <Section bg="red" align="center">
                <span ref={ref}>
                    {inView && (
                        <Text
                            type="h2"
                            color="dark"
                            shade={700}
                            weight="extrabold"
                            className="py-40 text-center text-8xl lg:text-[10vw]"
                        >
                            <CountUp start={0} end={23} duration={1} />
                            <span className="block text-3xl lg:text-[3vw]">Maart 2023</span>
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

{
    /* <svg
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 841.89 595.28"
                            className="w-1/3 min-w-[20rem] max-w-3xl"
                        >
                            <g>
                                <rect
                                    x="432.45"
                                    y="218.59"
                                    width="102"
                                    height="102"
                                    fill="#bbd536"
                                />
                                <path
                                    d="M427.58,154.81v-43.24c-55.87,1.17-100.97,46.17-102.28,102.01h44.31c2.02-31.27,26.81-56.33,57.97-58.77Z"
                                    fill="#303435"
                                />
                                <path
                                    d="M495.55,213.59h38.76c-1.31-55.66-46.11-100.55-101.73-102v43.01c33.47,0,60.84,26.06,62.97,58.99Z"
                                    fill="#303435"
                                />
                                <path
                                    d="M432.58,280.84v39.75c55.62-1.45,100.43-46.34,101.73-102h-38.64c-.47,34.46-28.53,62.25-63.1,62.25Z"
                                    fill="#849537"
                                />
                                <path
                                    d="M369.49,218.59h-44.18c1.31,55.84,46.4,100.84,102.28,102.01v-39.97c-32.23-2.53-57.65-29.26-58.1-62.04Z"
                                    fill="#303435"
                                />
                            </g>
                            <g>
                                <path
                                    d="M339.97,366.36c-3.29,0-6-1.09-8.15-3.28-2.14-2.18-3.21-4.88-3.21-8.08s1.07-5.92,3.21-8.1c2.14-2.17,4.86-3.26,8.15-3.26,1.98,0,3.8,.46,5.48,1.39,1.67,.93,2.98,2.18,3.92,3.76l-3.71,2.15c-.54-.98-1.31-1.74-2.31-2.29-1-.55-2.12-.83-3.37-.83-2.12,0-3.83,.67-5.13,2-1.3,1.33-1.95,3.06-1.95,5.18s.65,3.82,1.95,5.15c1.3,1.33,3.01,2,5.13,2,1.25,0,2.38-.28,3.39-.83,1.01-.55,1.77-1.31,2.29-2.26l3.71,2.15c-.94,1.58-2.24,2.83-3.9,3.76-1.66,.93-3.5,1.39-5.49,1.39Z"
                                    fill="#303435"
                                />
                                <path
                                    d="M378.74,365.93l-1.39-3.93h-8.97l-1.31,3.93h-4.65l7.65-21.85h5.34l7.71,21.85h-4.37Zm-8.96-7.96h6.15l-3.15-8.93-3,8.93Z"
                                    fill="#303435"
                                />
                                <path
                                    d="M419.06,344.08v21.85h-4.28v-14.17l-6.16,10.13-.5,.02-6.13-10.1v14.12h-4.31v-21.85h4.43l6.26,10.32,6.23-10.32h4.45Z"
                                    fill="#303435"
                                />
                                <path
                                    d="M443.71,344.08c2.1,0,3.87,.71,5.31,2.12s2.15,3.15,2.15,5.21-.72,3.8-2.15,5.21c-1.44,1.42-3.21,2.12-5.31,2.12h-3.84v7.18h-4.31v-21.85h8.15Zm0,10.64c.92,0,1.67-.32,2.28-.95,.6-.63,.9-1.42,.9-2.36s-.3-1.75-.9-2.37c-.6-.62-1.36-.94-2.28-.94h-3.84v6.62h3.84Z"
                                    fill="#303435"
                                />
                                <path
                                    d="M474.58,366.36c-2.43,0-4.43-.69-5.99-2.06-1.56-1.37-2.34-3.21-2.34-5.52v-14.7h4.28v14.36c0,1.14,.33,2.05,.98,2.71,.66,.67,1.68,1,3.07,1s2.42-.33,3.07-1c.66-.67,.98-1.57,.98-2.71v-14.36h4.31v14.7c0,2.31-.78,4.15-2.34,5.52s-3.57,2.06-6.02,2.06Z"
                                    fill="#303435"
                                />
                                <path
                                    d="M506.72,366.36c-2.17,0-3.99-.48-5.46-1.45-1.48-.97-2.52-2.28-3.12-3.95l3.68-2.15c.85,2.23,2.53,3.34,5.02,3.34,1.21,0,2.09-.22,2.65-.66,.56-.44,.84-.99,.84-1.65,0-.77-.34-1.37-1.03-1.79-.69-.43-1.91-.89-3.68-1.39-.98-.29-1.81-.58-2.48-.87-.68-.29-1.35-.68-2.03-1.17-.68-.49-1.19-1.11-1.54-1.86-.35-.75-.53-1.62-.53-2.62,0-1.98,.7-3.55,2.11-4.73,1.4-1.17,3.09-1.76,5.07-1.76,1.77,0,3.32,.43,4.67,1.3s2.39,2.06,3.14,3.6l-3.62,2.09c-.87-1.87-2.27-2.81-4.18-2.81-.89,0-1.6,.2-2.11,.61s-.76,.93-.76,1.58c0,.69,.29,1.24,.86,1.67s1.67,.89,3.29,1.39c.67,.21,1.17,.37,1.51,.48,.34,.12,.81,.29,1.4,.53,.59,.24,1.05,.46,1.37,.67,.32,.21,.69,.49,1.11,.84s.73,.72,.95,1.09c.22,.38,.41,.83,.56,1.36,.16,.53,.23,1.11,.23,1.73,0,2.02-.73,3.62-2.2,4.81-1.47,1.19-3.38,1.78-5.73,1.78Z"
                                    fill="#303435"
                                />
                            </g>
                            <g>
                                <path
                                    d="M274.22,415.29l4.01,4.24-6.58,5.84-4.29-4.52c-2.81,1.37-6.01,2.18-9.39,2.18-11.51,0-20.84-9.05-20.84-20.84s9.33-20.84,20.84-20.84,20.84,9.04,20.84,20.84c0,5.04-1.72,9.56-4.58,13.11Zm-13.45-1.49l-5.78-6.13,6.58-5.84,6.41,6.81c1.03-1.83,1.66-4.01,1.66-6.47,0-7.16-5.15-11.91-11.68-11.91s-11.68,4.75-11.68,11.91,5.15,11.91,11.68,11.91c.97,0,1.89-.11,2.81-.29Z"
                                    fill="#bbd536"
                                />
                                <path
                                    d="M294.26,409.28v-27.14h9.16v26.34c0,3.03,1.43,5.61,6.3,5.61s6.3-2.58,6.3-5.61v-26.34h9.16v27.14c0,8.59-6.64,13.74-15.46,13.74s-15.46-5.15-15.46-13.74Z"
                                    fill="#bbd536"
                                />
                                <path
                                    d="M364.69,415.92h-14.89l-2,6.3h-10.02l13.63-40.08h11.68l13.63,40.08h-10.02l-2-6.3Zm-2.75-8.59l-4.69-14.71-4.69,14.71h9.39Z"
                                    fill="#bbd536"
                                />
                                <path
                                    d="M426.24,402.18c0,11.34-8.42,20.04-19.47,20.04h-16.03v-40.08h16.03c11.05,0,19.47,8.7,19.47,20.04Zm-8.82,0c0-6.87-4.35-11.22-10.65-11.22h-6.87v22.44h6.87c6.3,0,10.65-4.35,10.65-11.22Z"
                                    fill="#bbd536"
                                />
                                <path
                                    d="M455.5,409.05h-4.35v13.17h-9.16v-40.08h16.03c7.62,0,13.74,6.13,13.74,13.74,0,4.92-2.98,9.39-7.38,11.62l8.53,14.71h-9.85l-7.56-13.17Zm-4.35-8.01h6.87c2.52,0,4.58-2.23,4.58-5.15s-2.06-5.15-4.58-5.15h-6.87v10.31Z"
                                    fill="#bbd536"
                                />
                                <path
                                    d="M511.27,415.92h-14.89l-2,6.3h-10.02l13.63-40.08h11.68l13.63,40.08h-10.02l-2-6.3Zm-2.75-8.59l-4.69-14.71-4.7,14.71h9.39Z"
                                    fill="#bbd536"
                                />
                                <path
                                    d="M568.81,382.14v40.08h-6.87l-15.46-21.76v21.76h-9.16v-40.08h6.87l15.46,21.76v-21.76h9.16Z"
                                    fill="#bbd536"
                                />
                                <path
                                    d="M613.19,390.96h-10.3v31.26h-9.16v-31.26h-10.31v-8.82h29.77v8.82Z"
                                    fill="#bbd536"
                                />
                            </g>
                        </svg> */
}
