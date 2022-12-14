// // ***********default tailwind config*****************
//** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	important: "#root",
	// important: true,
	theme: {
		extend: {},
	},
	corePlugins: {
		// Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
		preflight: false,
	},
	plugins: [],
};
