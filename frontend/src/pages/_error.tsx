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
  return <Error title="Er is een fout opgetreden" statusCode={500} />;
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
