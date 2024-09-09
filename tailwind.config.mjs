/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				"bg-color1": "#F3F9FE",
				"bg-color2": "#9BCCF5",
				"bg-color3": "#5EAFF2",
				"bg-color4": "#0284F0"
			},
			padding: {
				"paddingGeneral": " 0 1rem"
			}
		}
	},
	plugins: [],
}
