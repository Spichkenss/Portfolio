/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		extend: {
			colors: {
				'text-white': '#FFFFFF',
				'text-black': '#000000',
			},
			transitionDuration: {
				300: '300ms',
			},
		},
	},

	plugins: [],
}
