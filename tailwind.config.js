module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: "#060140",
				secondary: "#ffe1e1",
				accent: "#e99b48b2",
			},
			fontFamily: {
				// heading: ["Cinzel", "Inter", "sans-serif"],
				main: ["Barlow", "sans-serif"],
			},
		},
	},
	plugins: [],
};
