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
		padding: 40px 20px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		gap: 20px;
		overflow-x: auto;

		@media(max-width: 768px) {
		justify-content: flex-start;
		padding: 20px 10px;
		}

	}

	.filter-item {
		padding: 0.5em 1em;
		border: 1px solid transparent;
		border-radius: 1em;
		cursor: pointer;
		background-color: #f4f4f5;
		transition: all 0.2s ease-in-out;
		box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap;

		&:hover {
			font-weight: 600;
			transform:  translateY(-2px);
		}

		&.activ {
			color: #fff;
			background-color: gray;
			border: 1px solid gray;
			font-weight: 600;

			&:hover {
			font-weight: 600;
			transform:  translateY(0);
		}
		}

		@media(max-width: 768px) {
			box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
		}
	}
</style>
