<script>
	export let projects;
	export let array;
</script>

<h1>home</h1>
<div>{projects}</div>
{#each array as item}
	<div>{item.title}</div>
{/each}
