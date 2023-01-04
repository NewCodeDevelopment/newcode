import dynamic from "next/dynamic";
import { Fragment, ReactElement, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { checkImage, useCase, useSiblingCases } from "utils";
import Image from "next/legacy/image";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import casesFile from "@/public/locales/nl/cases.json";
import { DescriptionSection } from "ui";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const HyperLink = dynamic(() => import("ui").then((mod) => mod.HyperLink));
const Paragraph = dynamic(() => import("ui").then((mod) => mod.Paragraph));
const Scroll = dynamic(() => import("ui").then((mod) => mod.Scroll));
const Section = dynamic(() => import("ui").then((mod) => mod.Section));
const Arrow = dynamic(() => import("ui").then((mod) => mod.Arrow));
const Seo = dynamic(() => import("ui").then((mod) => mod.Seo));
/**
 *
 *
 *
 *
 *
 */
interface Props {
    handle: string;
}

export default function CasePage({ handle }: Props) {
    const router = useRouter();
    const { t } = useTranslation("pages", { keyPrefix: "case" });
    // const workTranslation = useTranslation("pages", { keyPrefix: "work" });

    // const { inView, ref } = useInView({
    //     threshold: 1,
    // });

    const {
        title,
        description,
        client,
        sector,
        service,
        type,
        year,
        productUrl,
        images,
        bannerImage,
    } = useCase(handle);

    const { left, right } = useSiblingCases(handle);

    // useEffect(() => {
    //     if (inView) {
    //         router.prefetch("/work");
    //         router.push("/work", undefined, { shallow: true, scroll: false });
    //
    //     }
    // }, [inView]);

    return (
        <>
            <Seo title={title} description={description.short} />
            {/* 
            
            
                Landing
            
            */}
            <Section bg="dark">
                <div className="flex w-full flex-col gap-20 pt-12 lg:h-full lg:justify-between lg:pt-32 2xl:pt-64">
                    <div className="flex flex-col gap-6 lg:w-full lg:flex-row lg:justify-between lg:gap-20">
                        <Heading type="h2">
                            {title}
                            <span className="text-red-500">_</span>
                        </Heading>
                        <Paragraph size="large" weight="bold" maxCharacters={30}>
                            {description.main}
                        </Paragraph>
                    </div>

                    <div className="grid-rows-[min-content_ min-content_ min-content_ min-content_ min-content_max-content] grid w-full gap-y-3 lg:grid-cols-6 lg:grid-rows-1 lg:gap-y-0 lg:gap-x-8">
                        {[
                            {
                                title: t("landing.client"),
                                value: client,
                            },
                            {
                                title: t("landing.sector"),
                                value: sector,
                            },
                            {
                                title: t("landing.service"),
                                value: service,
                            },
                            {
                                title: t("landing.type"),
                                value: type,
                            },
                            {
                                title: t("landing.year"),
                                value: year,
                            },
                        ].map(({ title, value }, index) => (
                            <div
                                key={index}
                                className="grid h-min grid-cols-2 lg:grid-cols-1 lg:grid-rows-[min-content_1fr] lg:gap-y-3"
                            >
                                <Heading type="h4" weight="extrabold">
                                    {title}
                                </Heading>
                                <Heading type="h4" weight="normal">
                                    {value}
                                </Heading>
                            </div>
                        ))}

                        {productUrl && (
                            <div className="py-10 lg:flex lg:flex-col lg:justify-center lg:p-0">
                                <HyperLink href={productUrl} target="_blank">
                                    {t("landing.link")}
                                </HyperLink>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
            {/* 
            
            
                Banner
            
            */}
            <Section bg="dark" className="relative">
                <Image
                    {...checkImage(bannerImage)}
                    width={100}
                    height={100}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </Section>
            {/* 
            
            
                Problem & Solution
            
            */}
            {[
                {
                    title: t("content.problem"),
                    description: description.problem,
                },
                {
                    title: t("content.solution"),
                    description: description.solution,
                },
            ].map(({ title, description }, index) => (
                <Fragment key={index}>
                    <DescriptionSection bg="dark" title={title} description={description} />

                    <Section bg="dark" className="relative">
                        <Image
                            {...checkImage(images[index])}
                            width={100}
                            height={100}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </Section>
                </Fragment>
            ))}
            {/* 
                    
                    
                Call to action
            
            
            */}
            <Section
                bg="red"
                align="center"
                className="relative"
                mobileScreen
                // py={false}
                // onScroll={() => router.push("/work")}
                // onTouchMove={() => router.push("/work")}
                // onWheel={() => router.push("/work")}
            >
                <div className="flex h-full w-full flex-col justify-evenly">
                    <div className="flex flex-row items-center justify-between">
                        {right ? (
                            <HyperLink
                                href={`/case/${right.handle}`}
                                className="flex flex-row gap-4"
                                variant="text"
                                shape="none"
                            >
                                <Arrow direction="right-to-left" className="w-8 fill-light-500" />
                                <Heading type="h4">{right.title}</Heading>
                            </HyperLink>
                        ) : (
                            <div>&nbsp;</div>
                        )}
                        {left ? (
                            <HyperLink
                                href={`/case/${left.handle}`}
                                className="flex flex-row gap-4"
                                variant="text"
                                shape="none"
                            >
                                <Heading type="h4">{left.title}</Heading>
                                <Arrow direction="left-to-right" className="w-8 fill-light-500" />
                            </HyperLink>
                        ) : (
                            <div>&nbsp;</div>
                        )}
                    </div>

                    <div className="flex  flex-col items-center justify-center gap-12 text-center">
                        <Heading type="h2">{t("connect.title")}_</Heading>

                        <HyperLink href="/connect" target="_blank" color="dark" size="large">
                            {t("connect.link")}
                        </HyperLink>
                    </div>

                    <div>&nbsp;</div>
                </div>
                {/* 
                <div className="absolute left-0 right-0 bottom-20 mx-auto flex flex-col items-center justify-center gap-4 lg:bottom-20">
                    <Heading type="h4">{t("connect.scroll")}</Heading>
                    <Scroll />
                </div> */}
            </Section>
            {/* 
            
            
                Overflow
            
            */}
            {/* <Landing
                title={workTranslation.t("landing.title")}
                hiddenSection
                ref={ref}
            /> */}
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
CasePage.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout footer={false}>{page}</MainLayout>;
};
/**
 *
 *
 *
 *
 *
 */
export async function getStaticProps({ params, locale }: Params) {
    const { handle } = params;

    return {
        props: {
            ...(await serverSideTranslations(locale || "nl", ["common", "pages", "cases"])),
            handle,
        },
    };
}

export async function getStaticPaths() {
    const paths = Object.keys(casesFile.cases).map((item) => {
        return {
            params: { handle: item },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

// {[
//     {
//         title: t("content.problem"),
//         description: description.problem,
//     },
//     {
//         title: t("content.solution"),
//         description: description.solution,
//     },
// ].map(({ title, description }, index) => (
//     <Section bg="dark" align="center" key={index}>
//         <div className="flex h-full w-full flex-col gap-12 lg:gap-20">
//             <Image
//                 src={images[index].url}
//                 alt={images[index].alt}
//                 width={100}
//                 height={100}
//                 layout="responsive"
//                 objectFit="cover"
//             />

//             <div className="flex flex-col gap-6 lg:flex-row lg:gap-40">
//                 <Heading type="h3">
//                     {title}
//                     <span className="text-red-500">_</span>
//                 </Heading>

//                 <Paragraph size="large" weight="bold">
//                     {description}
//                 </Paragraph>
//             </div>
//         </div>
//     </Section>
// ))}

{
    /* <Section bg="dark" align="center">
                        <div className="flex w-1/2 flex-col gap-6 lg:flex-row lg:gap-40 lg:py-20">
                            <Heading type="h3">
                                {title}
                                <span className="text-red-500">_</span>
                            </Heading>

                            <Paragraph size="large" weight="bold">
                                {description}
                            </Paragraph>
                        </div>
                    </Section> */
}

{
    /* <Section bg="dark" py={false} px={false}>
    <div className="grid h-full w-full grid-cols-1 grid-rows-3 gap-y-12 gap-x-12 pt-8 lg:grid-cols-2 lg:grid-rows-2 lg:p-0">
        <Image
            {...checkImage(images[2])}
            width={100}
            height={100}
            objectFit="cover"
            layout="responsive"
        />
        <Image
            {...checkImage(images[3])}
            width={100}
            height={100}
            objectFit="cover"
            layout="responsive"
        />

        <span className="relative lg:col-span-2">
            <Image {...checkImage(images[4])} objectFit="cover" layout="fill" />
        </span>
    </div>
</Section>; */
}
