import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'selector',

	theme: {
		extend: {
			colors: {
				'soft-white': '#f5f5f5',
				'primary-text': '#1f1f1f'
			},
			fontFamily: {
				jakarta: ['Plus Jakarta Sans', 'sans-serif']
			}
		}
	},

	plugins: []
} satisfies Config;
