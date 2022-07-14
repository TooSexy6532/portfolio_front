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
			<Icon class="social-icon" icon="simple-line-icons:social-facebook" />

			<Icon class="social-icon" icon="simple-line-icons:social-instagram" />

			<Icon class="social-icon" icon="simple-line-icons:social-vkontakte" />
		</div>
	</div>
</header>

<style lang="scss">
	div :global(.social-icon) {
		font-size: 24px;
		color: gray;
		cursor: pointer;
		&:hover {
			color: black;
		}

		@media (max-width: 768px) {
			font-size: 28px;
		}
	}

	.social-links {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;		
		gap: 12px;

		@media (max-width: 768px) {
			padding-right: 10px;
			gap: 15px;
		}
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

		@media (max-width: 768px) {
			height: 80px;
			margin-top: 10px;
			margin-left: 0;
			margin-right: 0;
			margin-bottom: 30px;
		}

		nav {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: start;
			gap: 10px;

			a {
				font-weight: 700;
				text-decoration: none;
				color: gray;
				transition: color 0.2s ease-in-out;
				padding: 20px 10px;

				&:hover {
					color: black;
				}
			}
		}
	}
</style>
