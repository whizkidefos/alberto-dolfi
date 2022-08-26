<header>
	<div class="logo">
		<a href="/">Alberto Dolfi</a>
	</div>
	<nav>
		<a href="/bio">Bio</a>
		<a href="/photos">Photos</a>
		<a href="/contact">Contact me</a>
		<div class="nav-socials">
			<a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram" /></a>
			<a href="https://Youtube.com" target="_blank"><i class="fa-brands fa-youtube" /></a>
			<a href="https://twitter.com" target="_blank"><i class="fa-brands fa-twitter" /></a>
			<a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook" /></a>
		</div>
		<div class="burger">
			<i class="fa-solid fa-grid-2" />
		</div>
	</nav>
</header>

<slot />

<footer>
	<div class="uk-container uk-text-center uk-padding">
		<div class="footer-socials">
			<a href="https://instagram.com" target="_blank">Instagram</a>
			<a href="https://Youtube.com" target="_blank">YouTube</a>
			<a href="https://twitter.com" target="_blank">Twitter</a>
			<a href="https://facebook.com" target="_blank">Facebook</a>
		</div>
		<p>&copy; 2022 Alberto Dolfi | Made with <i class="fa-solid fa-heart" /> in Manchester</p>
	</div>
</footer>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 5rem;
		box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.05);
	}

	.logo a {
		color: inherit;
		font-size: 2rem;
		font-weight: bold;
		text-decoration: none;
	}

	nav {
		display: flex;
	}

	nav a {
		color: inherit;
		padding: 0 15px;
		text-decoration: none;
		transition: 200ms;
	}

	nav .burger i {
		color: #040404;
		cursor: pointer;
	}

	nav a:is(:active, :focus) {
		color: black;
	}

	footer {
		background: #eee;
	}

	footer a {
		color: black;
		padding: 0 10px;
		text-decoration: none;
	}

	@media (max-width: 820px) {
		nav {
			background: white;
			flex-direction: column;

			width: 300px;
			height: auto;

			position: absolute;
			top: 8rem;
			right: 0;
			z-index: 2;
		}

		nav a {
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}
</style>
