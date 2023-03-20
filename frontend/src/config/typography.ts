import { twMerge } from "tailwind-merge";

export type FontWeights = "light" | "normal" | "medium" | "bold" | "extrabold";

export const fontWeights = (weight: FontWeights) => {
  return {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];
};
/**
 *
 *
 *  Headings
 *
 *
 */
export type HeadingTypes = "h1" | "h2" | "h3" | "h4";

export const headingStyles = (type: HeadingTypes, weight?: FontWeights) => {
  return {
    h1: twMerge(
      "text-7xl md:text-[9rem] lg:text-9xl 2xl:text-[10vw]",
      fontWeights(weight || "extrabold"),
    ),
    h2: twMerge(
      "text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl",
      fontWeights(weight || "extrabold"),
    ),
    h3: twMerge("text-2xl md:text-3xl", fontWeights(weight || "extrabold")),
    h4: twMerge("text-lg md:text-xl", fontWeights(weight || "bold")),
  }[type];
};
/**
 *
 *
 *  Paragraphs
 *
 *
 */
export type ParagraphSizes = "small" | "medium" | "large";

export const paragraphStyles = (size: ParagraphSizes, weight?: FontWeights) => {
  return {
    small: twMerge("text-base xl:text-lg", fontWeights(weight || "normal")),
    medium: twMerge("text-md xl:text-xl 2xl:text-2xl", fontWeights(weight || "normal")),
    large: twMerge("text-xl lg:text-2xl 2xl:text-3xl", fontWeights(weight || "normal")),
  }[size];
};
