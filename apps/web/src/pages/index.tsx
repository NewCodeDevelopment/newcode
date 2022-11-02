import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { promises as fs } from "fs";
import path from "path";
import { Case } from "utils";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Landing = dynamic(() => import("ui").then((mod) => mod.Landing), {
    ssr: false,
});
const HyperLink = dynamic(() => import("ui").then((mod) => mod.HyperLink));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const Paragraph = dynamic(() => import("ui").then((mod) => mod.Paragraph));
const CaseBanner = dynamic(() => import("ui").then((mod) => mod.CaseBanner), {
    ssr: false,
});
const ServicesSection = dynamic(() =>
    import("ui").then((mod) => mod.ServicesSection),
);
const Section = dynamic(() => import("ui").then((mod) => mod.Section), {
    ssr: false,
});

interface Props {
    cases: Case[];
}

export default function Home({ cases }: Props) {
    const { t } = useTranslation("pages", { keyPrefix: "home" });

    return (
        <>
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
            <Section bg="light" align="center">
                <div className="flex flex-col gap-6 self-center xl:py-[20%]">
                    <Heading type="h3" color="red">
                        {t("mission.title")}
                    </Heading>
                    <Paragraph
                        size="large"
                        color="dark"
                        maxCharacters={45}
                        className="font-extrabold"
                    >
                        {t("mission.description")}
                    </Paragraph>
                    <HyperLink href="/about">{t("mission.button")}</HyperLink>
                </div>
            </Section>
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

                    <ServicesSection theme="light" />

                    <HyperLink href="/services">
                        Learn about our services
                    </HyperLink>
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

Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps({ locale }: Params) {
    const directory = path.join(process.cwd(), "public/data/cases");
    const filenames = await fs.readdir(directory);

    const data = await Promise.all(
        filenames.map(async (filename) => {
            return {
                ...JSON.parse(
                    await fs.readFile(path.join(directory, filename), "utf8"),
                ),
                path: filename.split(".")[0],
            };
        }),
    );

    return {
        props: {
            ...(await serverSideTranslations(locale || "nl", [
                "common",
                "pages",
            ])),
            cases: data,
        },
    };
}

{
    /* <div className="absolute left-0 right-0 top-0 bottom-0 -z-30 grid place-items-center text-[10rem] font-extrabold text-light-400 shadow-inner">
<span
  style={{
    textShadow: "0px 2px 5px #00000005",
  }}
>
  NewCode
</span>
</div> */
}
