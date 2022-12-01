import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useCases } from "utils";
import { useTranslation } from "next-i18next";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Landing = dynamic(() => import("ui").then((mod) => mod.Landing));
const CaseBanner = dynamic(() => import("ui").then((mod) => mod.CaseBanner));
/**
 *
 *
 *
 *
 *
 */
export default function WorkPage({ data }: any) {
    console.log(data);
    const { t } = useTranslation("pages", { keyPrefix: "work" });

    const cases = useCases();

    return (
        <>
            <Landing title={t("landing.title")} />
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
/**
 *
 *
 *
 *
 *
 */
WorkPage.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
/**
 *
 *
 *
 *
 *
 */
// export async function getStaticProps({ locale }: Params) {
//     const data = await fetch(process.env.API_URL + "/cases").then((res) => res.json());
//     console.log(
//         `

//             Data fetched from: ${process.env.NEXT_PUBLIC_API_URL}

//             json: ${data}

//         `,
//     );

//     return {
//         props: {
//             ...(await serverSideTranslations(locale || "nl", ["common", "pages", "cases"])),
//         },
//     };
// }

export async function getServerSideProps({ locale }: Params) {
    const data = await fetch(process.env.API_URL + "/cases", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
    }).then((res) => res.json());
    console.log(
        `
        
            Data fetched from: ${process.env.NEXT_PUBLIC_API_URL}

            json: ${JSON.stringify(data)}
        
        `,
    );

    return {
        props: {
            ...(await serverSideTranslations(locale || "nl", ["common", "pages", "cases"])),
            data,
        },
    };
}
