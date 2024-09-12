/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				"bg-color1": "#102356",
				"bg-color2": "#242344",
				"bg-color3": "#1A1631",
				"bg-color4": "#121728"
			},
			padding: {
				"paddingGeneral": " 0 1rem"
			},
			fontSize:{
				"size_text_desk": "3rem",
				"size_text_mobile": "2rem"
			}
		}
	},
	plugins: [],
}
