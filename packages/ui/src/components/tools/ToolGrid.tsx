import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

const Section = dynamic(() => import("..").then((mod) => mod.Section));
const Heading = dynamic(() => import("..").then((mod) => mod.Heading));
const ToolCard = dynamic(() => import("..").then((mod) => mod.ToolCard));

export function ToolGrid() {
    const { t } = useTranslation("pages", { keyPrefix: "about" });

    return (
        <Section bg="dark" align="center">
            <div className="flex flex-col gap-6 self-center lg:max-w-xl lg:gap-10 2xl:max-w-4xl">
                <Heading type="h3" color="red">
                    {t("tools.title")}_
                </Heading>

                <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
                    {[
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.NestIcon)),
                            title: "NestJS",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.DockerIcon)),
                            title: "Docker",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.GraphQLIcon)),
                            title: "GraphQL",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.NodeIcon)),
                            title: "NodeJS",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.PostgresIcon)),
                            title: "PostgreSQL",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.ReactIcon)),
                            title: "ReactJS",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.NextIcon)),
                            title: "NextJS",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.TailwindLogo)),
                            title: "TailwindCSS",
                        },
                    ].map((icon, index) => (
                        <ToolCard key={index} index={index} {...icon} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
