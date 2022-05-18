const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'amaterasu-black': '#231F20',
				'amaterasu-white': '#F4F4F4',
				'amaterasu-gray': '#231F20',
				'amaterasu-light-gray': '#D9D9D9',
				'amaterasu-brown': '#824F02',
				'gray-custom': '#646464',
				'gray-med-custom': '#4D4D4D',
			},
			fontFamily: {
				'gotham-narrow-bold': ['Gotham Narrow Bold', 'sans-serif'],
				'gotham-narrow-book': ['Gotham Narrow Book', 'sans-serif'],
				'gotham-thin': ['Gotham Thin', 'sans-serif']
			},
			listStyleType: {
				square: 'square'
			}
		}
	},
	plugins: []
};

module.exports = config;
