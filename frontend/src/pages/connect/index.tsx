import Seo from "@/components/common/Seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
/**
 *
 *
 *
 *
 *
 */
export default function ConnectPage() {
  const { t } = useTranslation("pages", { keyPrefix: "connect" });

  return (
    <>
      <Seo title="Connect" description="Connect" canonical="/connect" />
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
ConnectPage.getLayout = function getLayout(page: ReactElement) {
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
      ...(await serverSideTranslations(locale || "nl", ["common"])),
    },
  };
}
