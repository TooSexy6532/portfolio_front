<script>
	export let project;
</script>

<article class="project-card">
	<div class="project-card__title">{project.title}</div>
	<div class="project-card__preview-wrapper">
		<img class="project-card__preview" src={project.previewImage} alt="Project preview" />
	</div>
</article>

<style lang="scss">
	.project-card {
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		position: relative;

		&:hover {
			@include with-shadow;
		}
		
		&__title {
			padding: 1em 0.5em;
		}

		&__preview-wrapper {
			max-height: 300px;
			height: 100%;
		}

		&__preview {
			object-fit: cover;
			height: 100%;
			width: 100%;
		}
	}
</style>
