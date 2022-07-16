<script>
	export let project;
</script>

<article class="project-card">
	<div class="project-card__title">{project.title}</div>
	<img class="project-card__privew" src={project.previewImage} alt="Project preview" />
</article>

<style lang="scss">
	.project-card {
		min-width: 300px;
	}
</style>
