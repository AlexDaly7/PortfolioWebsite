// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Fraunces",
			cssVariable: "--font-Fraunces",
			options: {
				variants: [{
					src: ['./src/assets/fonts/Fraunces.ttf'],
					weight: 400,
					style: 'normal',
					display: 'swap',
				}],
			},
		},
		{
			provider: fontProviders.local(),
			name: "OpenSans",
			cssVariable: "--font-OpenSans",
			options: {
				variants: [{
					src: ['./src/assets/fonts/OpenSans.ttf'],
					weight: 400,
					style: 'normal',
					display: 'swap',
				}],
			},
		},
		{
			provider: fontProviders.local(),
			name: "Recursive",
			cssVariable: "--font-Recursive",
			options: {
				variants: [{
					src: ['./src/assets/fonts/Recursive.ttf'],
					weight: 400,
					style: 'normal',
					display: 'swap',
				}],
			},
		},
		{
			provider: fontProviders.local(),
			name: "Roboto",
			cssVariable: "--font-Roboto",
			options: {
				variants: [{
					src: ['./src/assets/fonts/Roboto.ttf'],
					weight: 400,
					style: 'normal',
					display: 'swap',
				}],
			},
		},
	],
});
