import { Color, textColors } from "@/config/colors";
import { FontWeights, headingStyles, HeadingTypes } from "@/config/typography";
import { createElement, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: any;
  type: HeadingTypes;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p";
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
  const elementType = props.element || type;

  return createElement(
    elementType,
    {
      ...props,
      className: twMerge(headingStyles(type, weight), textColors[color][500], className),
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
    children,
  );
}
