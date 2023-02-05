import classNames from "classnames";
import { createElement, HTMLAttributes } from "react";
import { Color, ColorShades, fontWeights, FontWeights, textColors } from "../..";

interface Props extends HTMLAttributes<HTMLElement> {
    children: any;

    type: "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p";
    weight?: FontWeights;

    color?: Color;
    shade?: ColorShades;

    breakpoint?: number;
    maxCharacters?: number;
}

export function Text({
    children,

    type,
    weight = "normal",

    color = "dark",
    shade = 500,

    breakpoint = 0,
    maxCharacters,

    className,
    ...props
}: Props) {
    return createElement(
        type,
        {
            ...props,
            className: classNames(textColors[color][shade], fontWeights(weight), className),
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
