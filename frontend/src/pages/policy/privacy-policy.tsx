import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Landing = dynamic(() => import("@/components/common/Landing"));
const DescriptionSection = dynamic(() => import("@/components/sections/DescriptionSection"));
const Seo = dynamic(() => import("@/components/common/Seo"));
/**
 *
 *
 *
 *
 *
 */
export default function HomePage() {
  const { t } = useTranslation("pages", { keyPrefix: "privacy-policy" });

  const body = t("body", { returnObjects: true }) as { title: string; description: string }[];

  return (
    <>
      <Seo
        title={t("seo.title") as string}
        description={t("seo.description") as string}
        canonical="/privacy-policy"
      />
      {/* 
				*
				*
				Landing
				*
			 */}
      <Landing title={t("title")} />
      {/* 
				*
				*
				Content
				*
			 */}
      {body.map(({ title, description }, index) => (
        <DescriptionSection key={index} bg="dark" title={title} description={description} />
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
HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
/**
 *
 *
 *
 *
 *
 */
export async function getStaticProps({ locale }: Params) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "nl", ["common", "pages", "services", "cases"])),
    },
  };
}
