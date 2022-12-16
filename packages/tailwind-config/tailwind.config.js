/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"../../packages/ui/**/*.{js,ts,jsx,tsx}",
		"../../apps/web/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			red: {
				300: "rgb(var(--tailwind-color-red-300) / <alpha-value>)",
				400: "rgb(var(--tailwind-color-red-400) / <alpha-value>)",
				500: "rgb(var(--tailwind-color-red-500) / <alpha-value>)", // prima)ry
				600: "rgb(var(--tailwind-color-red-600) / <alpha-value>)",
				700: "rgb(var(--tailwind-color-red-700) / <alpha-value>)",
			},
			light: {
				300: "rgb(var(--tailwind-color-light-300) / <alpha-value>)",
				400: "rgb(var(--tailwind-color-light-400) / <alpha-value>)",
				500: "rgb(var(--tailwind-color-light-500) / <alpha-value>)", // prima)ry
				600: "rgb(var(--tailwind-color-light-600) / <alpha-value>)",
				700: "rgb(var(--tailwind-color-light-700) / <alpha-value>)",
			},
			dark: {
				300: "rgb(var(--tailwind-color-dark-300) / <alpha-value>)",
				400: "rgb(var(--tailwind-color-dark-400) / <alpha-value>)",
				500: "rgb(var(--tailwind-color-dark-500) / <alpha-value>)", // prima)ry
				600: "rgb(var(--tailwind-color-dark-600) / <alpha-value>)",
				700: "rgb(var(--tailwind-color-dark-700) / <alpha-value>)",
			},
			black: "#000",
			white: "#fff",
		},
		fontFamily: {
			sans: "var(--font-family)",
		},
		fontWeight: {
			light: 300,
			normal: 400,
			medium: 500,
			bold: 700,
			extrabold: 800,
		},
	},
};
