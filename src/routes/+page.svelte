<section class="banner uk-container">
	<article>
		<h1>Italy-based composer & music producer.</h1>
		<h4>Hip-hop, house, bass and downtempo. Think global, dance local.</h4>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum id, tenetur temporibus fugit
			perspiciatis fugiat quidem dolor a minus dolore doloremque quo quisquam similique unde
			perferendis est suscipit itaque voluptate cupiditate quae? Dolores ad debitis velit totam
			tempore dolor error, ab nemo distinctio placeat temporibus modi sequi molestias laboriosam
			cum, ducimus explicabo earum iusto fuga! Laboriosam et natus debitis accusamus nostrum quia
			vitae! Consequuntur dolor ipsa natus. Sit, magnam earum!
		</p>
		<a href="/bio" class="btn-global uk-button uk-button-secondary">Read Bio</a>
	</article>
	<figure>
		<img src="./images/alberto-dolfi-chi-sono.jpg" alt="Alberto Dolfi" />
	</figure>
</section>

<section class="intro">
	<div class="uk-container uk-text-center">
		<h3>
			The child of a jazz pianist and a record store owner, Alberto grew up in a world of diverse
			sounds.
		</h3>
		<a href="/bio" class="btn-white uk-button uk-button-default">Learn More</a>
	</div>
</section>

<section class="events uk-container uk-padding">
	<h2>Events</h2>
</section>

<section class="contact">
	<div class="uk-container">
		<h2><a href="/contact">Contact Me</a></h2>
	</div>
</section>

<style>
	.banner {
		padding: 5rem 1rem;

		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}

	.banner figure,
	.banner article {
		width: calc(50% - 20px);
	}

	article h1,
	article h4 {
		margin: 5px 0;
	}

	.banner img {
		width: 100%;
		filter: grayscale();
	}

	.intro {
		background: black;
		color: white;
		padding: 5rem 0;
	}

	.contact {
		background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.6)),
			url('images/bosendorfer-alberto-dolfi.jpg') no-repeat center / cover;
		background-attachment: fixed;
		filter: grayscale();
		height: 700px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.contact h2 a {
		font-size: 5rem;
		font-weight: bold;
		color: black;
		text-decoration: none;
	}

	@media (max-width: 892px) {
		.banner {
			flex-direction: column;
			padding: 3rem 1rem;
		}

		.banner figure,
		.banner article {
			width: 100%;
		}
	}
</style>
