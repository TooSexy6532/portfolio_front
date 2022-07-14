<script context="module">
	import '../style.css';
	export async function load({ params, fetch, session, stuff }) {
		const url = `/api/preferences`;
		const response = await fetch(url);
		const data = await response.json();
		return {
			status: response.status,
			props: {
				preferences: data.preferences
			}
		};
	}
</script>

<script>
	import Header from '../components/Header.svelte';

	export let preferences;
</script>

{#if preferences}
	<section class="main-img__wrapper">
		<img class="main-img" src={preferences.mainImage} alt="A women with flowers" />
	</section>
{/if}

<Header />
<main class="main">
	<slot />
</main>

<style>
	.main-img__wrapper {
		display: flex;
		justify-content: center;
	}

	.main-img {
		height: 300px;
	}

	.main {
		display: flex;
		flex-direction: column;
	}
</style>
