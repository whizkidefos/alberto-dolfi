<script lang="ts">
	import { onMount } from "svelte";
	import { pageTransition } from "../../utils/animations";

	let isTransitioning = false;

	onMount(() => {
		document.addEventListener("astro:before-preparation", () => {
			isTransitioning = true;
			pageTransition();
		});

		document.addEventListener("astro:after-preparation", () => {
			isTransitioning = false;
		});
	});
</script>

{#if isTransitioning}
	<div class="page-transition fixed inset-0 bg-primary z-50 scale-y-0"></div>
{/if}
