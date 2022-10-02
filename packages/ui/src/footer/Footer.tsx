import classNames from "classnames";
import FooterLink from "./FooterLink";
import { useTranslation } from "next-i18next";
import { HTMLAttributes } from "react";
import { usePathHook } from "../config/paths";
import { FacebookIcon, InstagramIcon, Logo } from "../../icons";

interface Props extends HTMLAttributes<HTMLElement> {
	pathsHook: () => usePathHook;
}

export default function Footer({ pathsHook, className, ...props }: Props) {
	const { t } = useTranslation("common");
	const { mainRoutes, policyRoutes } = pathsHook();

	return (
		<footer
			{...props}
			className={classNames(
				"bg-green-700   px-10 py-24 	lg:px-36 lg:py-32",
				"grid grid-cols-1   gap-y-36",
				"lg:grid-cols-4 lg:gap-x-24 lg:gap-y-8",
				"xl:grid-cols-[fit-content_1fr_1fr_1fr_1fr] xl:gap-x-40 2xl:gap-x-64",
				className
			)}
		>
			{/* 
			
			
				Logo
			*/}
			<Logo className="fill-light-700 w-40 ml-auto mx-auto		lg:hidden lg:row-start-1 xl:block" />
			{/* 
			
			
				Main Routes
			*/}
			<div className="flex flex-col items-center gap-4		lg:row-start-1 lg:items-start">
				{mainRoutes.map(({ name, path }, index) => (
					<FooterLink key={index} href={path}>
						{name}
					</FooterLink>
				))}
			</div>
			{/* 
			
			
				Policy Routes
			*/}
			<div className="flex flex-col items-center gap-4		lg:row-start-1 lg:items-start">
				{policyRoutes.map(({ name, path }, index) => (
					<FooterLink key={index} href={path}>
						{name}
					</FooterLink>
				))}
			</div>
			{/* 
			
			
				Socials
			*/}
			<div className="flex flex-col items-center gap-24		lg:row-start-1 lg:items-start">
				{/* 
					Contact
				*/}
				<div className="flex flex-col items-center gap-4	lg:items-start">
					<FooterLink
						href="https://goo.gl/maps/9m3jZ56F6f5h8uRXA"
						target="_blank"
						color="light"
					>
						Reyderstraat 41, 3511 Kuringen
					</FooterLink>

					<span className="text-light-700 font-medium hover:underline cursor-pointer text-3xl md:text-4xl lg:text-2xl xl:text-2xl">
						BE0768786861
					</span>

					<FooterLink
						href="mailto:info@thegodshot.be"
						target="_blank"
						color="light"
					>
						info@thegodshot.be
					</FooterLink>
				</div>
				{/* 
					Socials
				*/}
				<div className="flex flex-row gap-16">
					<FacebookIcon className="w-8" />
					<InstagramIcon className="w-8" />
				</div>
			</div>
		</footer>
	);
}
