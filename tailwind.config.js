module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#fa4f00",
			},
			fontFamily: {
				sans: ["Open Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
