<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const url = `/api/projects`;

		const res = await fetch(url);
		const { projects } = await res.json();
		return {
			status: res.status,
			props: {
				projects
			}
		};
	}
</script>
<script>
	export let projects;
</script>

<h1>projects</h1>
<div>{projects}</div>
