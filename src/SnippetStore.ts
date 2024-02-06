import { writable, get } from 'svelte/store';

// Snippet Store
// Code Snippet
// Title, Code, Language, Favorite
export const snippetStore = writable<CodeSnippet[]>([]);

// addSnippet
export function addSnippet(input: CodeSnippetInput) {
	let snippets = get(snippetStore); // $snippetStore -> listen to the changes to the values of snippetStore
	snippetStore.update((): CodeSnippet[] => {
		return [{ ...input, favorite: false }, ...snippets];
	});
}

// deleteSnippet
export function deleteSnippet(index: number) {
	let snippets = get(snippetStore);
	snippets.splice(index, 1);

	snippetStore.update((): CodeSnippet[] => {
		return snippets;
	});
}

// toggleFavorite
export function toggleFavorite(index: number) {
	let snippets = get(snippetStore);

	snippetStore.update((): CodeSnippet[] => {
		return snippets.map((snippet, snippetIndex) => {
			if (snippetIndex === index) {
				return { ...snippet, favorite: !snippet.favorite };
			}
			return snippet;
		});
	});
}
