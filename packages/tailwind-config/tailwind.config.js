/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"../../packages/ui/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			red: {
				300: "#ff7d5c",
				400: "#ff5a36",
				500: "#ff1800",
				600: "#f10300",
				700: "#da0000",
			},
			light: {
				300: "#f9f9f9",
				400: "#E4E4E4",
				500: "#d8d8d8",
				600: "#b4b4b4",
				700: "#c8c8c8",
			},
			dark: {
				300: "#373734",
				400: "#5e565a",
				500: "#262626",
				600: "#151515",
				700: "#0d0208",
			},
			black: "#000",
			white: "#fff",
		},
		fontFamily: {
			sans: ["Gilroy", "sans-serif"],
		},
	},
};
