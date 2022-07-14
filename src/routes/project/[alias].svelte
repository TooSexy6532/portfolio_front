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
</script>

<div class="container">ProjectPage</div>
