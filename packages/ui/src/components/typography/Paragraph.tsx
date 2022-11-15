import {
	Color,
	textColors,
	ParagraphSizes,
	paragraphStyles,
	FontWeights,
} from "../..";
import classNames from "classnames";
import { createElement, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	children: any;
	color?: Color;
	className?: string;
	breakpoint?: number;
	size?: ParagraphSizes;
	maxCharacters?: number;
	weight?: FontWeights;
}

export default function Paragraph({
	children,
	className,
	color = "light",
	breakpoint = 0,
	size = "medium",
	weight,
	maxCharacters,
	...props
}: Props) {
	return createElement(
		"p",
		{
			...props,
			className: classNames(
				paragraphStyles(size, weight),
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
