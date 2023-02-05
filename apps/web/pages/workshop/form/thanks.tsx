import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import { ReactElement } from "react";
import { motion } from "framer-motion";
import { useWindow } from "utils";
import { useTranslation } from "next-i18next";

const MainLayout = dynamic(() => import("ui").then((mod) => mod.MainLayout));
const Heading = dynamic(() => import("ui").then((mod) => mod.Heading));
const Section = dynamic(() => import("ui").then((mod) => mod.Section));
const HomeIcon = dynamic(() => import("ui").then((mod) => mod.HomeIcon));
const HyperLink = dynamic(() => import("ui").then((mod) => mod.HyperLink));
/**
 *
 *
 *
 *
 *
 */
export default function ThanksPage() {
    const { height } = useWindow();

    const { t } = useTranslation("pages", { keyPrefix: "form.thanks" });

    return (
        <Section bg="dark" align="center" className="relative" style={{ height }}>
            <Image
                src="/images/footer-background.jpg"
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
