/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			tablet: "768px",
			laptop: "1024px",
			desktop: "1280px",
		},
		container: {
			center: true,
		},
		fontSize: {
			xs: "0.834rem",
			sm: "0.5rem",
			base: "1rem",
			xl: "1.5rem",
			"2xl": "2rem",
			"3xl": "4rem",
			"4xl": "5.333rem",
		},
		fontFamily: {
			title: ["Azonix"],
			text: ["Azeret_Mono"],
		},
		borderRadius: {
			round: "50%",
		},
		extend: {
			colors: {
				"bgd-light": "#f4f4f4",
				"bgd-dark": "#1d1d1d",
			},
			backgroundImage: {
				"gradient-light": "linear-gradient(to top left, #8fc6fd, #e0c4fd)",
				"gradient-dark": "linear-gradient(to top left, #ee4f60, #ffcaa4)",
			},
			lineHeight: {
				xs: "0.834rem",
				"3xl": "4rem",
				"4xl": "5.333rem",
			},
			spacing: {
				"1/5": "20%",
				"2/5": "40%",
				104: "26rem",
				120: "30rem",
				160: "40rem",
				extra: "120vh",
				"2extra": "170vh",
				"screen/2": "50vh",
				"screen3/5": "60vh",
				"screen2/3": "66vh",
				"screen85": "85vh",
			},
		},
		plugins: [],
	},
};
