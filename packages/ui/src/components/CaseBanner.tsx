import { HTMLAttributes } from "react";
import { Case, checkImage } from "utils";
import Image from "next/image";
import { Heading, Paragraph, ArrowLink } from "..";
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
		<section {...props} className={classNames("relative", className)}>
			<Image
				{...checkImage(bannerImage)}
				layout="fill"
				width={100}
				height={100}
				objectFit="cover"
				className="top-0 left-0 -z-10"
			/>

			<div className="bg-red-500 px-page pb-20 pt-[60vh] flex flex-col gap-4 bg-opacity-30 backdrop-filter backdrop-blur-sm">
				<Heading type="h3">Case Study_</Heading>
				<Heading type="h2">{title + "_"}</Heading>
				<Paragraph size="small">{description.short}</Paragraph>
				<ArrowLink description="See case study" href={"/work/case/" + path} />
			</div>
		</section>
	);
}
