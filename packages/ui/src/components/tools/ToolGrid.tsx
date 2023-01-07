import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const Section = dynamic(() => import("..").then((mod) => mod.Section));
const Heading = dynamic(() => import("..").then((mod) => mod.Heading));
const ToolCard = dynamic(() => import("..").then((mod) => mod.ToolCard));

export function ToolGrid() {
    const { t } = useTranslation("pages", { keyPrefix: "about" });

    return (
        <Section bg="dark" align="center">
            <div className="flex w-full flex-col gap-6 self-center lg:max-w-xl lg:gap-10 2xl:max-w-4xl">
                <Heading type="h3" color="red">
                    {t("tools.title")}_
                </Heading>

                <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4">
                    {[
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.NestIcon)),
                            title: "Nest.js",
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
                            title: "Node.js",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.PostgresIcon)),
                            title: "PostgreSQL",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.ReactIcon)),
                            title: "React",
                        },
                        {
                            icon: dynamic(() => import("../..").then((mod) => mod.NextIcon)),
                            title: "Next.js",
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
