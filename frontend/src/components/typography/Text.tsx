import { Color, ColorShades, textColors } from "@/config/colors";
import { fontWeights, FontWeights } from "@/config/typography";
import { createElement, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type TextProps = HTMLAttributes<HTMLElement> & {
  children: any;

  type: "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p";
  weight?: FontWeights;

  color?: Color;
  shade?: ColorShades;

  breakpoint?: number;
  maxCharacters?: number;
};

export default function Text({
  children,

  type,
  weight = "normal",

  color = "dark",
  shade = 500,

  breakpoint = 0,
  maxCharacters,

  className,
  ...props
}: TextProps) {
  return createElement(
    type,
    {
      ...props,
      className: twMerge(textColors[color][shade], fontWeights(weight), className),
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
