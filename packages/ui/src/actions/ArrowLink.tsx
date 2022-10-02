import Link from "next/link";
import { HTMLAttributes } from "react";
import { Arrow, Color, fillColors, textColors } from "..";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
	href: string;
	description: string;
	color?: Color;
	target?: string;
}

export default function ArrowLink({
	description,
	href,
	color = "light",
	className,
	target,
	...props
}: Props) {
	return (
		<Link href={href} target={target}>
			<a
				{...props}
				className={classNames(
					"flex flex-row items-center gap-4",
					textColors[color][700],
					fillColors[color][500],
					className
				)}
			>
				{description} <Arrow className="w-8" direction="left-to-right" />
			</a>
		</Link>
	);
}
