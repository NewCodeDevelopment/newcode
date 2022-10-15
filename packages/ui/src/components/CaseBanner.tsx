import { HTMLAttributes } from "react";
import { Case, checkImage } from "utils";
import Image from "next/image";
import { Heading, Paragraph, ArrowLink, Section } from "..";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLElement> {
	case: Case;
}

export default function CaseBanner({
	case: { title, description, path, bannerImage },
	className,
	...props
}: Props) {
	return (
		<Section
			{...props}
			className={classNames(
				"relative px-page py-64 flex flex-col justify-end items-start",
				className
			)}
		>
			<Image
				{...checkImage(bannerImage)}
				layout="fill"
				width={100}
				height={100}
				objectFit="cover"
				className="top-0 left-0 -z-20"
			/>

			<div className="absolute bg-dark-500 -z-10 w-full h-full top-0 left-0 bg-opacity-30 backdrop-filter backdrop-blur-md" />

			<div className="flex flex-col gap-4 self-end">
				<Heading type="h3">Case Study_</Heading>
				<Heading type="h2">{title + "_"}</Heading>
				<Paragraph size="small">{description.short}</Paragraph>
				<ArrowLink description="See case study" href={"/work/case/" + path} />
			</div>
		</Section>
	);
}
