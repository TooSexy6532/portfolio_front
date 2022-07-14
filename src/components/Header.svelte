<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<header>
	<div class="container wrapper">
		<nav>
			<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
		</nav>

		<div class="social-links">
			<Icon icon="mdi-light:home" />
		</div>
	</div>
</header>

<style lang="scss">
	.social-links {
		display: flex;
		flex-flow: row nowrap;
		gap: 5px;
	}

	.active {
		color: #000000;
	}

	.wrapper {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}

	header {
		height: 60px;
		margin-top: 50px;
		border-top: 1px solid #000000;
		border-bottom: 1px solid #000000;
		margin-left: 5%;
		margin-right: 5%;
		margin-bottom: 50px;

		nav {
			height: 100%;
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: start;
			gap: 10px;

			a {
				font-weight: 700;
				text-decoration: none;
				color: gray;
				transition: color 0.2s ease-in-out;

				&:hover {
					color: black;
				}
			}
		}
	}
</style>
