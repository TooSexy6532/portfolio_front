import { derived, writable } from 'svelte/store';

export const projectStore = () => {
	const projects = writable([]);

	const filter = writable('');

	const filteredProjects = derived([projects, filter], ([$projects, $filter]) => {
		$projects.filter((p) => p.category!== $filter);
	});

	return {
		projects,
		filter,
		filteredProjects
	};
};
