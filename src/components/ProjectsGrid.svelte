<script>
	import ProjectsCard from './ProjectsCard.svelte';

	export let filteredProjects;
</script>

<div class="container">
	<section class="projects">
		{#each filteredProjects as project}
			<ProjectsCard {project} />
		{/each}
	</section>
</div>

<style>
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 20px;
	}
</style>
