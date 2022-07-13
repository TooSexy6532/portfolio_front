<script context="module">
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
	export let preferences;
</script>

{#if preferences}
	<div class="main-img__wrapper">
		<img class="main-img" src={preferences.mainImage} alt="" />
	</div>
{/if}
<div>{JSON.stringify(preferences)}</div>
<slot />

<style>
	.main-img__wrapper {
    display: flex;
    justify-content: center;
  }

	.main-img {
		height: 300px;
	}
</style>
