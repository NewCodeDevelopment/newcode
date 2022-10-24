import { Color, textColors } from "../config/colors";
import classNames from "classnames";
import { createElement, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	children: any;
	type: HeadingTypes;
	color?: Color;
	className?: string;
	breakpoint?: number;
	maxCharacters?: number;
}

type HeadingTypes = "h1" | "h2" | "h3" | "h4";

export const headingStyles: { [K in HeadingTypes]: string } = {
	h1: "font-black text-8xl md:text-[9rem] lg:text-9xl 2xl:text-[15rem]",
	h2: "font-black text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl",
	h3: "font-black text-2xl md:text-3xl",
	h4: "font-bold text-lg md:text-xl",
};

export default function Heading({
	children,
	type,
	color = "light",
	breakpoint = 0,
	className,
	maxCharacters,
	...props
}: Props) {
	return createElement(
		type,
		{
			...props,
			className: classNames(
				headingStyles[type],
				textColors[color][500],
				className
			),
			style: {
				...(breakpoint > 0 && {
					WebkitLineClamp: breakpoint,
					lineHeight: 1.2,
					overflow: "hidden",
					textOverflow: "ellipsis",
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
				}),
				...(maxCharacters != undefined && {
					maxWidth: `${maxCharacters}ch`,
				}),
			},
		},
		children
	);
}
