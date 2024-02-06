import type { PageLoad } from './$types';

export const load = (() => {
	return {
		snippets: [
			{
				title: 'Create array with certain number of specified values (ES6)',
				language: 'typescript',
				code: `const myArr = [...Array(10).fill(' ')];`,
				favorite: false
			},
			{
				title: 'Create Array with values of 1-10',
				language: 'typescript',
				code: `const myArr = Array.from({length: 10}, (_, i) => i + 1);`,
				favorite: false
			}
		]
	};
}) satisfies PageLoad; // Page Load -> PageData (in our frontend)
