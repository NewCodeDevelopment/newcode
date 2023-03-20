export type Color = "red" | "light" | "dark" | "transparent";

export type ColorShades = 300 | 400 | 500 | 600 | 700;

export const [
  // basic
  textColors,
  bgColors,
  fillColors,
  borderColors,
  // hover
  hoverTextColors,
  hoverBgColors,
  hoverFillColors,
  hoverBorderColors,
]: {
  [key in Color]: {
    [key in ColorShades]: string;
  };
}[] = [
  /*



		Basic
	*/
  {
    red: {
      300: "text-red-300",
      400: "text-red-400",
      500: "text-red-500",
      600: "text-red-600",
      700: "text-red-700",
    },
    light: {
      300: "text-light-300",
      400: "text-light-400",
      500: "text-light-500",
      600: "text-light-600",
      700: "text-light-700",
    },
    dark: {
      300: "text-dark-300",
      400: "text-dark-400",
      500: "text-dark-500",
      600: "text-dark-600",
      700: "text-dark-700",
    },
    transparent: {
      300: "text-transparent",
      400: "text-transparent",
      500: "text-transparent",
      600: "text-transparent",
      700: "text-transparent",
    },
  },
  {
    red: {
      300: "bg-red-300",
      400: "bg-red-400",
      500: "bg-red-500",
      600: "bg-red-600",
      700: "bg-red-700",
    },
    light: {
      300: "bg-light-300",
      400: "bg-light-400",
      500: "bg-light-500",
      600: "bg-light-600",
      700: "bg-light-700",
    },
    dark: {
      300: "bg-dark-300",
      400: "bg-dark-400",
      500: "bg-dark-500",
      600: "bg-dark-600",
      700: "bg-dark-700",
    },
    transparent: {
      300: "bg-transparent",
      400: "bg-transparent",
      500: "bg-transparent",
      600: "bg-transparent",
      700: "bg-transparent",
    },
  },
  {
    red: {
      300: "fill-red-300",
      400: "fill-red-400",
      500: "fill-red-500",
      600: "fill-red-600",
      700: "fill-red-700",
    },
    light: {
      300: "fill-light-300",
      400: "fill-light-400",
      500: "fill-light-500",
      600: "fill-light-600",
      700: "fill-light-700",
    },
    dark: {
      300: "fill-dark-300",
      400: "fill-dark-400",
      500: "fill-dark-500",
      600: "fill-dark-600",
      700: "fill-dark-700",
    },
    transparent: {
      300: "fill-transparent",
      400: "fill-transparent",
      500: "fill-transparent",
      600: "fill-transparent",
      700: "fill-transparent",
    },
  },
  {
    red: {
      300: "border-red-300",
      400: "border-red-400",
      500: "border-red-500",
      600: "border-red-600",
      700: "border-red-700",
    },
    light: {
      300: "border-light-300",
      400: "border-light-400",
      500: "border-light-500",
      600: "border-light-600",
      700: "border-light-700",
    },
    dark: {
      300: "border-dark-300",
      400: "border-dark-400",
      500: "border-dark-500",
      600: "border-dark-600",
      700: "border-dark-700",
    },
    transparent: {
      300: "border-transparent",
      400: "border-transparent",
      500: "border-transparent",
      600: "border-transparent",
      700: "border-transparent",
    },
  },
  /*



		Hover
	*/
  {
    red: {
      300: "hover:text-red-300",
      400: "hover:text-red-400",
      500: "hover:text-red-500",
      600: "hover:text-red-600",
      700: "hover:text-red-700",
    },
    light: {
      300: "hover:text-light-300",
      400: "hover:text-light-400",
      500: "hover:text-light-500",
      600: "hover:text-light-600",
      700: "hover:text-light-700",
    },
    dark: {
      300: "hover:text-dark-300",
      400: "hover:text-dark-400",
      500: "hover:text-dark-500",
      600: "hover:text-dark-600",
      700: "hover:text-dark-700",
    },
    transparent: {
      300: "hover:text-transparent",
      400: "hover:text-transparent",
      500: "hover:text-transparent",
      600: "hover:text-transparent",
      700: "hover:text-transparent",
    },
  },
  {
    red: {
      300: "hover:bg-red-300",
      400: "hover:bg-red-400",
      500: "hover:bg-red-500",
      600: "hover:bg-red-600",
      700: "hover:bg-red-700",
    },
    light: {
      300: "hover:bg-light-300",
      400: "hover:bg-light-400",
      500: "hover:bg-light-500",
      600: "hover:bg-light-600",
      700: "hover:bg-light-700",
    },
    dark: {
      300: "hover:bg-dark-300",
      400: "hover:bg-dark-400",
      500: "hover:bg-dark-500",
      600: "hover:bg-dark-600",
      700: "hover:bg-dark-700",
    },
    transparent: {
      300: "hover:bg-transparent",
      400: "hover:bg-transparent",
      500: "hover:bg-transparent",
      600: "hover:bg-transparent",
      700: "hover:bg-transparent",
    },
  },
  {
    red: {
      300: "hover:fill-red-300",
      400: "hover:fill-red-400",
      500: "hover:fill-red-500",
      600: "hover:fill-red-600",
      700: "hover:fill-red-700",
    },
    light: {
      300: "hover:fill-light-300",
      400: "hover:fill-light-400",
      500: "hover:fill-light-500",
      600: "hover:fill-light-600",
      700: "hover:fill-light-700",
    },
    dark: {
      300: "hover:fill-dark-300",
      400: "hover:fill-dark-400",
      500: "hover:fill-dark-500",
      600: "hover:fill-dark-600",
      700: "hover:fill-dark-700",
    },
    transparent: {
      300: "hover:fill-transparent",
      400: "hover:fill-transparent",
      500: "hover:fill-transparent",
      600: "hover:fill-transparent",
      700: "hover:fill-transparent",
    },
  },
  {
    red: {
      300: "hover:border-red-300",
      400: "hover:border-red-400",
      500: "hover:border-red-500",
      600: "hover:border-red-600",
      700: "hover:border-red-700",
    },
    light: {
      300: "hover:border-light-300",
      400: "hover:border-light-400",
      500: "hover:border-light-500",
      600: "hover:border-light-600",
      700: "hover:border-light-700",
    },
    dark: {
      300: "hover:border-dark-300",
      400: "hover:border-dark-400",
      500: "hover:border-dark-500",
      600: "hover:border-dark-600",
      700: "hover:border-dark-700",
    },
    transparent: {
      300: "hover:border-transparent",
      400: "hover:border-transparent",
      500: "hover:border-transparent",
      600: "hover:border-transparent",
      700: "hover:border-transparent",
    },
  },
];
