import classNames from "classnames";
import { bgColors, Color, textColors } from "./colors";

export type buttonVariant = "filled" | "outlined" | "text";
export type buttonSize = "small" | "medium" | "large";
export type buttonShape = "default" | "pill" | "square" | "circle" | "none";

export const buttonColors = (variant: buttonVariant, color: Color) => {
    return {
        filled: {
            red: classNames("text-white", bgColors.red[500]),
            light: classNames("text-white", bgColors.light[500]),
            dark: classNames("text-white", bgColors.dark[500]),
            transparent: bgColors.transparent[500],
        },
        outlined: {
            red: classNames("border-red-500 border-2", textColors.red[500]),
            light: classNames("border-light-500 border-2", textColors.light[500]),
            dark: classNames("border-dark-500 border-2", textColors.dark[500]),
            transparent: classNames("border-transparent"),
        },
        text: {
            red: classNames(textColors.red[500]),
            light: classNames(textColors.light[500]),
            dark: classNames(textColors.dark[500]),
            transparent: classNames(textColors.transparent[500]),
        },
    }[variant][color];
};

const sizes = {
    textSizes: {
        small: "text-xs",
        medium: "text-sm",
        large: "text-lg",
    },
    paddingSizes: {
        long: {
            small: "py-2 px-8",
            medium: "py-3 px-10",
            large: "py-4 px-16 lg:py-5 lg:px-20",
        },
        square: {
            small: "py-3 px-3",
            medium: "py-4 px-4",
            large: "py-5 px-5",
        },
    },
};

export const buttonShapes = (shape: buttonShape, size: buttonSize) => {
    return {
        default: classNames("rounded-lg", sizes.textSizes[size], sizes.paddingSizes.long[size]),
        pill: classNames("rounded-full", sizes.textSizes[size], sizes.paddingSizes.long[size]),
        square: classNames(
            "rounded-xl aspect-square",
            sizes.textSizes[size],
            sizes.paddingSizes.square[size],
        ),
        circle: classNames(
            "rounded-full aspect-square",
            sizes.textSizes[size],
            sizes.paddingSizes.square[size],
        ),
        none: sizes.textSizes[size],
    }[shape];
};
