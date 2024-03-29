import Seo from "@/components/common/Seo";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
/**
 *
 *
 *
 *
 *
 */
export default function ConnectPage() {
  return (
    <>
      <Seo
        pageTitle="Connect - NewCode"
        metaTitle="Start een project - NewCode"
        description="Wil je een project starten, of gewoon gedag zeggen? Neem dan hier contact met ons op."
        canonical="/connect"
      />

      <div className="hidden" data-visibility="hidden">
        <h1>Connect</h1>
        <p>Wil je een project starten, of gewoon gedag zeggen? Neem dan hier contact met ons op.</p>
      </div>
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
