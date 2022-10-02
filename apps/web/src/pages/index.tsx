import dynamic from "next/dynamic";
import { ReactElement, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

interface Props {
	cases: Case[];
}

export default function Home({ cases }: Props) {
	const [state, setState] = useState(false);

	return (
		<>
			<Landing title="Code makes life easier" />
			{/* 
				*
				*
				About
				*
			 */}
			<div className="px-page bg-light-500 py-20 flex flex-col gap-6">
				<Heading type="h3" color="red">
					Our Mission_
				</Heading>
				<Paragraph color="dark">
					At NewCode, we like to make life easier through technology. We do this
					by defining problems, listening to the story and solving them in the
					best possible way. We tackle this in a qualitative, transparent and
					honest way.
				</Paragraph>
				<HyperLink href="/about">The back-end of NewCode</HyperLink>
			</div>
			{/* 
				*
				*
				Case
				*
			 */}
			<CaseBanner case={cases[0]} />

			<section className="bg-light-500 px-page py-20 flex flex-col gap-8">
				<Heading type="h3" color="dark">
					Services_
				</Heading>

				<ServicesSection />

				<HyperLink href="/services">Learn about our services</HyperLink>
			</section>

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
