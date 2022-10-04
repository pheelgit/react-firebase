// // ***********default tailwind config*****************
//** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ["./src/**/*.{js,jsx,ts,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };

// *****tailwind-elements config***********
// module.exports = {
// 	content: [
// 		"./src/**/*.{html,js,jsx}",
// 		"./node_modules/tw-elements/dist/js/**/*.js",
// 	],
// 	plugins: [require("tw-elements/dist/plugin")],
// };

// tailwind-kit  config  with tailwind-conponent plugins
module.exports = {
	important: true,
	// Active dark mode on class basis
	darkMode: "class",
	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US",
	},
	purge: {
		content: [
			"./src/**/*.{html,js,jsx}",
			"./node_modules/tw-elements/dist/js/**/*.js",
		],
		// These options are passed through directly to PurgeCSS
	},
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				check: "url('/icons/check.svg')",
				landscape: "url('/images/landscape/2.jpg')",
			}),
		},
	},
	variants: {
		extend: {
			backgroundColor: ["checked"],
			borderColor: ["checked"],
			inset: ["checked"],
			zIndex: ["hover", "active"],
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
	future: {
		purgeLayersByDefault: true,
	},
};
