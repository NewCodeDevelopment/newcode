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
  return <Error title="Pagina niet gevonden" statusCode={404} />;
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
