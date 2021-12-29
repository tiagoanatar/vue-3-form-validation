module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FFA522'
			}
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
