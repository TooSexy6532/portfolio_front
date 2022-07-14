<script>
	import { filter } from '../stores/projects.js';
	export let categories = [];
</script>

<div class="container">
	<section class="filter">
		{#each categories as category}
			<div
				class:activ={category._id === $filter}
				class="filter-item"
				on:click={filter.set(category._id)}
			>
				{category.name}
			</div>
		{/each}
	</section>
</div>

<style lang="scss">
	.filter {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		gap: 20px;
	}

	.filter-item {
		padding: 0.5em 1em;
		border: 1px solid transparent;
		border-radius: 1em;
		cursor: pointer;
		background-color: #fff;
		transition: all 0.2s ease-in-out;
		box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

		&:hover {
			font-weight: 600;
			transform: translate3d(1px, 1px, 1px);
		}

		&.activ {
			color: #fff;
			background-color: gray;
			border: 1px solid gray;
			font-weight: 600;
		}
	}
</style>
