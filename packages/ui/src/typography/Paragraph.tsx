import { Color, textColors } from "../config/colors";
import classNames from "classnames";
import { createElement, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	children: any;
	color?: Color;
	className?: string;
	breakpoint?: number;
	size?: paragraphSizes;
	maxCharacters?: number;
}

type paragraphSizes = "small" | "medium" | "large";

export const paragraphStyles: { [K in paragraphSizes]: string } = {
	small: "text-base xl:text-lg",
	medium: "text-md xl:text-2xl",
	large: "text-2xl xl:text-3xl",
};

export default function Paragraph({
	children,
	className,
	color = "light",
	breakpoint = 0,
	size = "medium",
	maxCharacters,
	...props
}: Props) {
	return createElement(
		"p",
		{
			...props,
			className: classNames(
				"font-light",
				paragraphStyles[size],
				textColors[color][500],
				className
			),
			style: {
				...(breakpoint > 0 && {
					WebkitLineClamp: breakpoint,
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
