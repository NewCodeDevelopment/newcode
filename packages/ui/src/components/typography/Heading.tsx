import {
	Color,
	textColors,
	headingStyles,
	HeadingTypes,
	FontWeights,
} from "../..";
import classNames from "classnames";
import { createElement, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	children: any;
	type: HeadingTypes;
	color?: Color;
	className?: string;
	breakpoint?: number;
	maxCharacters?: number;
	weight?: FontWeights;
}

export default function Heading({
	children,
	type,
	weight,
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
				headingStyles(type, weight),
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
