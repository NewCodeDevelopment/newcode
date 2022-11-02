import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { HTMLAttributes } from "react";
import Section from "../components/Section";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import { motion } from "framer-motion";
import ArrowCircleLink from "../actions/ArrowCircleLink";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLElement> {}

export default function Footer({ className, ...props }: Props) {
	const { t } = useTranslation("common");

	return (
		<Section
			bg="dark"
			className="relative pt-24 pb-12 lg:py-20 lg:pb-12"
			pt
			py={false}
		>
			<Image
				src="/images/footer-background.jpg"
				alt="footer background"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				className="-z-10"
			/>
			<footer className="z-0 grid h-full w-full grid-cols-1 gap-y-20 self-start lg:grid-cols-2 lg:grid-rows-[1fr_min-content] lg:gap-x-20 lg:self-center">
				{/* 
				
				
					Title
				*/}
				<div className="flex flex-col gap-6 lg:gap-12 lg:self-center">
					<Heading type="h2" color="light" maxCharacters={10}>
						Let’s get this code going_
					</Heading>

					<Paragraph maxCharacters={25}>
						Got an exciting project to work on or just want to say hello ?
					</Paragraph>
				</div>

				{/* 
            
            
            
                Contact container 
            
            */}
				<div className="text-light-500 flex flex-col gap-6 lg:place-self-end lg:self-center">
					<ArrowCircleLink
						description="5 steps to connect"
						path="/connect/form"
						bgColor="red"
					/>

					<div className="flex flex-col gap-2 text-2xl font-bold lg:text-3xl xl:text-4xl">
						<motion.a href="tel:+32471492451">+32 (0) 471 492 451</motion.a>
						<motion.a href="mailto:info@newcode.be">info@newcode.be</motion.a>
					</div>

					<motion.div className="text-md flex flex-row gap-8 font-bold text-red-500 lg:text-lg xl:text-xl">
						<a
							href="https://www.facebook.com/newcodedevelopment"
							target="_blank"
							rel="noreferrer"
						>
							Facebook_
						</a>
						<a
							href="https://www.instagram.com/newcode.be/"
							target="_blank"
							rel="noreferrer"
						>
							Instagram_
						</a>
						<a
							href="https://www.linkedin.com/company/newcode-development"
							target="_blank"
							rel="noreferrer"
						>
							Linkedin_
						</a>
					</motion.div>
				</div>
				{/* 
				
				
					Privacy
				*/}
				<div className="text-light-500 flex flex-col gap-8 text-xs lg:col-span-2 lg:h-min lg:flex-row lg:justify-between lg:self-end">
					<div className="flex flex-col gap-1 lg:w-1/2">
						<a className="cursor-pointer hover:underline">
							Privacy-and cookieterms
						</a>
						<a className="cursor-pointer hover:underline">ReCaptcha terms</a>
						<a className="cursor-pointer hover:underline">
							{" "}
							ReCaptcha Serviceterms
						</a>
					</div>
					<div className="flex flex-col gap-1 lg:w-1/2 lg:flex-row lg:justify-between lg:self-end">
						<span>© NewCode_ All rights reserved_</span>
						<span>
							Branded by{" "}
							<a
								href="kapmes.be"
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
