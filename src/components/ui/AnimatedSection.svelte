<script lang="ts">
	import { onMount } from "svelte";
	import { fadeInUp } from "../../utils/animations";

	let section: HTMLElement;

	onMount(() => {
		fadeInUp(section);
	});
</script>

<section bind:this={section}>
	<slot />
</section>
