import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Error = dynamic(() => import("@/components/common/Error"));
/**
 *
 *
 *
 *
 *
 */
export default function ErrorPage() {
  const { t } = useTranslation("common", { keyPrefix: "error" });

  return <Error title={t("404")} statusCode={404} />;
}
/**
 *
 *
 *
 *
 *
 */
ErrorPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout footer={false} scroll={false}>
      {page}
    </MainLayout>
  );
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
