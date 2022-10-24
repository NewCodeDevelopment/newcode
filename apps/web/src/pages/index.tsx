import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { promises as fs } from "fs";
import path from "path";
import { Case } from "utils";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Landing = dynamic(() => import("ui").then((mod) => mod.Landing));
const HyperLink = dynamic(() => import("ui").then((mod) => mod.HyperLink));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const Paragraph = dynamic(() => import("ui").then((mod) => mod.Paragraph));
const CaseBanner = dynamic(() => import("ui").then((mod) => mod.CaseBanner));
const ServicesSection = dynamic(() =>
	import("ui").then((mod) => mod.ServicesSection)
);
const Section = dynamic(() => import("ui").then((mod) => mod.Section));

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
			<Section bg="light">
				<div className="flex flex-col gap-6 xl:py-[20%] self-center">
					<Heading type="h3" color="red">
						{t("mission.title")}
					</Heading>
					<Paragraph color="dark" maxCharacters={50}>
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
				<div className="flex flex-col gap-6 lg:gap-10 self-center w-full">
					<Heading type="h3" color="dark">
						Services_
					</Heading>

					<ServicesSection />

					<HyperLink href="/services">Learn about our services</HyperLink>
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
					await fs.readFile(path.join(directory, filename), "utf8")
				),
				path: filename.split(".")[0],
			};
		})
	);

	return {
		props: {
			...(await serverSideTranslations(locale || "nl", ["common", "pages"])),
			cases: data,
		},
	};
}
