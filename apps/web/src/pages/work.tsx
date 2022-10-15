import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { promises as fs } from "fs";
import path from "path";
import { Case } from "utils";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Landing = dynamic(() => import("ui").then((mod) => mod.Landing));
const CaseBanner = dynamic(() => import("ui").then((mod) => mod.CaseBanner));

interface Props {
	cases: Case[];
}

export default function Home({ cases }: Props) {
	return (
		<>
			<Landing title="Life made easier" />
			{/* 
				*
				*
				Cases
				*
			 */}
			{cases.map((c, index) => (
				<CaseBanner key={index} case={c} />
			))}
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
