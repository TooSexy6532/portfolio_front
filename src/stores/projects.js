import { derived, writable } from 'svelte/store';

export const projectStore = () => {
	const projects = writable([]);

	const filter = writable('');

	const filteredProjects = derived([projects, filter], ([$projects, $filter]) => {
		if ($filter) return $projects.filter((p) => p.category !== $filter);
		else return $projects;
	});

	const currentPage = writable(1);

	const paginatedProjects = derived(
		[filteredProjects, currentPage],
		([$projects, $currentPage]) => {
			const _pagesize = 10;

			const startIndex = $currentPage === 1 ? 0 : ($currentPage - 1) * _pagesize;
			const endIndex = $currentPage * _pagesize;

			return $projects.slice(startIndex, endIndex);
		}
	);

	return {
		projects,
		filter,
		currentPage,
		filteredProjects,
		paginatedProjects
	};
};
