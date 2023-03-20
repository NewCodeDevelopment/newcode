import { twMerge } from "tailwind-merge";
import { bgColors, Color, textColors } from "./colors";

export type buttonVariant = "filled" | "outlined" | "text";
export type buttonSize = "small" | "medium" | "large";
export type buttonShape = "default" | "pill" | "square" | "circle" | "none";

export const buttonColors = (variant: buttonVariant, color: Color) => {
  return {
    filled: {
      red: twMerge("text-white", bgColors.red[500]),
      light: twMerge("text-white", bgColors.light[500]),
      dark: twMerge("text-white", bgColors.dark[500]),
      transparent: bgColors.transparent[500],
    },
    outlined: {
      red: twMerge("border-red-500 border-2", textColors.red[500]),
      light: twMerge("border-light-500 border-2", textColors.light[500]),
      dark: twMerge("border-dark-500 border-2", textColors.dark[500]),
      transparent: twMerge("border-transparent"),
    },
    text: {
      red: twMerge(textColors.red[500]),
      light: twMerge(textColors.light[500]),
      dark: twMerge(textColors.dark[500]),
      transparent: twMerge(textColors.transparent[500]),
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
    default: twMerge("rounded-lg", sizes.textSizes[size], sizes.paddingSizes.long[size]),
    pill: twMerge("rounded-full", sizes.textSizes[size], sizes.paddingSizes.long[size]),
    square: twMerge(
      "rounded-xl aspect-square",
      sizes.textSizes[size],
      sizes.paddingSizes.square[size],
    ),
    circle: twMerge(
      "rounded-full aspect-square",
      sizes.textSizes[size],
      sizes.paddingSizes.square[size],
    ),
    none: sizes.textSizes[size],
  }[shape];
};
