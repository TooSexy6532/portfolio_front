<script context="module">
	import categoriesApi from '../api/index.js';

	export async function load({ params, fetch, session, stuff }) {
		const categories = await categoriesApi.getCategories({ fetch });
		return {
			props: { categories }
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
