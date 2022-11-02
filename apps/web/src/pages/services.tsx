import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { promises as fs } from "fs";
import path from "path";
import { motion } from "framer-motion";
import { Testimonial } from "ui";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const Paragraph = dynamic(() => import("ui").then((mod) => mod.Paragraph));
const Section = dynamic(() => import("ui").then((mod) => mod.Section), {
    ssr: false,
});
const ServicesSection = dynamic(() =>
    import("ui").then((mod) => mod.ServicesSection),
);
const Testimonials = dynamic(() =>
    import("ui").then((mod) => mod.Testimonials),
);

interface Props {
    testimonials: Testimonial[];
}

export default function Home({ testimonials }: Props) {
    const { t } = useTranslation("pages", { keyPrefix: "home" });

    return (
        <>
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
                        Services_
                    </Heading>

                    <ServicesSection theme="dark" />
                </div>
            </Section>
            {/* 
        
        
        Approach
        
        */}
            <Section bg="light" align="center">
                <div className="flex w-full flex-col gap-6 self-center lg:gap-10">
                    <Heading type="h3" color="dark" className="max-w-fit">
                        Aanpak_
                    </Heading>

                    <div className="grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
                        {[
                            {
                                title: "Analysis",
                                description:
                                    "In de analysefase worden de problemen geanalyseerd en bekijken we hoe we het proces zullen aanpakken. We bekijken in deze fase niet enkel de technische im- plementatie, maar gaan eveneens na hoe we het best mogelijke gebruiksge- mak kunnen aanbieden.",
                            },
                            {
                                title: "Strategy",
                                description:
                                    "In de strategiefase definiëren we doel- stellingen qua tijd en kwaliteit, om u een doordacht product op te leveren waar- op u kan rekenen. We definiëren onze doelstellingen niet enkel technisch, maar ook visueel zodat het resultaat perfect plaats kan nemen in uw ecosysteem.",
                            },
                            {
                                title: "Creation",
                                description:
                                    "Na een onderzoeksfase zijn we klaar en voorbereid om te starten met de imple- mentatie. In deze fase realiseren we uw oplossing.",
                            },
                            {
                                title: "Polishing",
                                description:
                                    "Wanneer alles is afgewerkt, kunnen er nog oneffenheden achterblijven. Daar- om gaan we in deze fase alle imperfec- ties polijsten. Dit doen we door het pro- duct uitvoerig te testen, te optimaliseren en te herevalueren, zodat uw product van de beste kwaliteit is.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex min-w-fit flex-col gap-3"
                                whileInView={{
                                    opacity: [0, 1],
                                    y: [-20, 0],
                                    transition: {
                                        delay: index * 0.1,
                                    },
                                }}
                            >
                                <Heading
                                    type="h3"
                                    color="red"
                                    className="max-w-fit"
                                >
                                    {`${index + 1}. ` + item.title + "_"}
                                </Heading>
                                <Paragraph color="dark" maxCharacters={50}>
                                    {item.description}
                                </Paragraph>
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
            <Testimonials testimonials={testimonials} />
        </>
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps({ locale }: Params) {
    const directory = path.join(process.cwd(), "public/data/testimonials");
    const filenames = await fs.readdir(directory);

    const data = await Promise.all(
        filenames.map(async (filename) => {
            return {
                ...JSON.parse(
                    await fs.readFile(path.join(directory, filename), "utf8"),
                ),
            };
        }),
    );

    return {
        props: {
            ...(await serverSideTranslations(locale || "nl", [
                "common",
                "pages",
            ])),
            testimonials: data,
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
