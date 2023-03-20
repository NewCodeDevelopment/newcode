import { useDevice } from "@/utils/hooks/device";
import { useWindow } from "@/utils/hooks/window";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Heading = dynamic(() => import("@/components/typography/Heading"));
const Section = dynamic(() => import("@/components/sections/Section"));
const HyperLink = dynamic(() => import("@/components/actions/HyperLink"));
const HomeIcon = dynamic(() => import("@/icons/actions/HomeIcon"));
/**
 *
 *
 *
 *
 *
 */
export default function ThanksPage() {
  const { height } = useWindow();
  const device = useDevice();

  const { t } = useTranslation("pages", { keyPrefix: "form.thanks" });

  return (
    <Section bg="dark" align="center" className="relative" style={{ height }}>
      <Image
        src={device === "mobile" ? "/images/background/1x.jpg" : "/images/background/2x.jpg"}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />

      <motion.div
        className="z-0 flex flex-col items-center justify-center gap-20 text-center lg:gap-32"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <Heading type="h2" maxCharacters={15}>
          {t("title")}
        </Heading>

        <HyperLink href="/" shape="circle" variant="filled" color="dark" size="large">
          <HomeIcon className="w-8 fill-red-500" />
        </HyperLink>
      </motion.div>
    </Section>
  );
}
/**
 *
 *
 *
 *
 *
 */
ThanksPage.getLayout = function getLayout(page: ReactElement) {
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
      ...(await serverSideTranslations(locale || "nl", ["common", "pages"])),
    },
  };
}
