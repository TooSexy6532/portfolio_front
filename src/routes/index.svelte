<script context="module">
	import { getCategories,getProjects } from '../api/index.js';

	export async function load({ fetch }) {
		const categories = await getCategories({ fetch });
		const projects = await getProjects({ fetch });
		return {
			props: { categories, projects }
		};
	}
</script>

<script>
	import Filter from '../components/Filter.svelte';
	import ProjectsGrid from '../components/ProjectsGrid.svelte';

	export let categories;
	export let projects;

	let filter = '';

	const updateFilter = (event) => {
		filter = event.detail.filter;
	};
	let filteredProjects;
	$: {
		if (filter === '') {
			filteredProjects = projects;
		}

		if (filter.length) {
			filteredProjects = projects.filter((p) => p.category == filter);
		}
	}
</script>

<Filter {categories} on:filterChange={updateFilter} />

<ProjectsGrid {filteredProjects} />
