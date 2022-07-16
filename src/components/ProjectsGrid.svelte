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
	}
</style>
