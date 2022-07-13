<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		let categories = await fetch('/api/categories');
		 categories = await categories.json();

		let projects = await fetch('/api/projects');
		projects = await projects.json();
		return {
			props: { projects, categories }
		};
	}
</script>

<script>
	import Filter from '../components/Filter.svelte';
	import ProjectsGrid from '../components/ProjectsGrid.svelte';

	export let categories;
</script>

<Filter {categories} />
<ProjectsGrid />
