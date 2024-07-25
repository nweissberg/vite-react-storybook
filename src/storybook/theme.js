import { create } from '@storybook/theming/create';

export const lightTheme = create({
	base: 'light',
	brandTitle: 'Meu Projeto',
	brandUrl: 'https://example.com',
	brandImage: 'https://placehold.it/350x150',
});

export const darkTheme = create({
	base: 'dark',
	brandTitle: 'Meu Projeto',
	brandUrl: 'https://example.com',
	brandImage: 'https://placehold.it/350x150',
});
