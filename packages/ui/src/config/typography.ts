import classNames from "classnames";

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
		h1: classNames(
			"text-7xl md:text-[9rem] lg:text-9xl 2xl:text-[10vw]",
			fontWeights(weight || "extrabold")
		),
		h2: classNames(
			"text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl",
			fontWeights(weight || "extrabold")
		),
		h3: classNames("text-2xl md:text-3xl", fontWeights(weight || "extrabold")),
		h4: classNames("text-lg md:text-xl", fontWeights(weight || "bold")),
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
		small: classNames("text-base xl:text-lg", fontWeights(weight || "normal")),
		medium: classNames(
			"text-md xl:text-xl 2xl:text-2xl",
			fontWeights(weight || "normal")
		),
		large: classNames(
			"text-xl lg:text-2xl 2xl:text-3xl",
			fontWeights(weight || "normal")
		),
	}[size];
};
