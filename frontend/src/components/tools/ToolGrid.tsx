import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const Section = dynamic(() => import("../sections/Section"));
const Heading = dynamic(() => import("../typography/Heading"));
const ToolCard = dynamic(() => import("./ToolCard"));

export default function ToolGrid() {
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
              icon: dynamic(() => import("@/icons/tools/NestIcon")),
              title: "Nest.js",
            },
            {
              icon: dynamic(() => import("@/icons/tools/DockerIcon")),
              title: "Docker",
            },
            {
              icon: dynamic(() => import("@/icons/tools/GraphQLIcon")),
              title: "GraphQL",
            },
            {
              icon: dynamic(() => import("@/icons/tools/NodeIcon")),
              title: "Node.js",
            },
            {
              icon: dynamic(() => import("@/icons/tools/PostgresIcon")),
              title: "PostgreSQL",
            },
            {
              icon: dynamic(() => import("@/icons/tools/ReactIcon")),
              title: "React",
            },
            {
              icon: dynamic(() => import("@/icons/tools/NextIcon")),
              title: "Next.js",
            },
            {
              icon: dynamic(() => import("@/icons/tools/TailwindLogo")),
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
