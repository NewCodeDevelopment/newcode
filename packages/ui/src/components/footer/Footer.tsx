import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useDevice } from "utils";
import { ArrowCircleLink, Heading, Paragraph, Section, useContactInformation } from "../..";

export function Footer() {
    const { t } = useTranslation("common", { keyPrefix: "footer" });

    const { contact, socials } = useContactInformation();
    const device = useDevice();

    const currentYear = new Date().getFullYear();

    return (
        <Section
            bg="dark"
            pt
            py={false}
            mobileScreen
            className="relative pt-24 pb-12 lg:py-20 lg:pb-12"
        >
            <Image
                src={
                    device === "mobile" ? "/images/background/1x.jpg" : "/images/background/2x.jpg"
                }
                alt="footer background"
                width={3840}
                height={2160}
                className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center"
            />

            <footer className="z-0 grid h-full w-full grid-cols-1 gap-y-20 self-start lg:grid-cols-2 lg:grid-rows-[1fr_min-content] lg:gap-x-20 lg:self-center">
                {/* 
				
				
					Title
				*/}
                <div className="flex flex-col gap-6 lg:gap-12 lg:self-center">
                    <Heading type="h2" color="light" maxCharacters={10}>
                        {t("title")}_
                    </Heading>

                    <Paragraph maxCharacters={25}>{t("description")}</Paragraph>
                </div>

                {/* 
            
            
            
                Contact container 
            
            */}
                <div className="text-light-500 flex flex-col gap-6 lg:place-self-end lg:self-center">
                    <ArrowCircleLink
                        description={t("connect")}
                        path="/connect/form"
                        bgColor="red"
                    />

                    <div className="flex flex-col gap-2 text-2xl font-bold lg:text-3xl xl:text-4xl">
                        <motion.a href={contact.phone.href}>{contact.phone.text}</motion.a>
                        <motion.a href={contact.email.href}>{contact.email.text}</motion.a>
                    </div>

                    <motion.div className="text-md flex flex-row gap-8 font-bold text-red-500 lg:text-lg xl:text-xl">
                        {socials.map(({ name, url }, index) => (
                            <a key={index} href={url} target="_blank" rel="noreferrer">
                                {name}_
                            </a>
                        ))}
                    </motion.div>
                </div>
                {/* 
				
				
					Privacy
				*/}
                <div className="text-light-500 flex flex-col gap-8 text-xs lg:col-span-2 lg:h-min lg:flex-row lg:justify-between lg:self-end">
                    <div className="flex flex-col gap-1 lg:w-1/2">
                        <Link
                            href="/policy/privacy-policy"
                            className="cursor-pointer hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        {/* <a className="cursor-pointer hover:underline">ReCaptcha terms</a>
                        <a className="cursor-pointer hover:underline"> ReCaptcha Serviceterms</a> */}
                    </div>
                    <div className="flex flex-col gap-1 lg:w-1/2 lg:flex-row lg:justify-between lg:self-end">
                        <span>© {currentYear} NewCode_ All rights reserved_</span>
                        <span>
                            Branded by{" "}
                            <a
                                href="kapmes.be"
                                target="_blank"
                                className="cursor-pointer font-bold hover:underline"
                            >
                                KAPMES
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </Section>
    );
}
