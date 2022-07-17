<script context="module">
	import '../styles/index.scss';

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

	import { navigating } from '$app/stores';

	import Loading from '../components/Loader.svelte';
	import { loading } from '../stores/loader.js';

	$: loading.setNavigate(!!$navigating);
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

<Loading />

<style lang="scss">
	.main-img__wrapper {
		margin-top: 20px;
		display: flex;
		justify-content: center;

		@media (max-width: 560px) {
			display: none;
		}
	}

	.main-img {
		height: 300px;
	}

	.main {
		display: flex;
		flex-direction: column;
	}
</style>
