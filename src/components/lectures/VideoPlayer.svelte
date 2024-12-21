<script lang="ts">
	import { onMount } from "svelte";

	export let videoUrl: string;
	export let title: string;

	let player: HTMLIFrameElement;
	let isPlaying = false;

	onMount(() => {
		// Initialize video player (e.g., YouTube or Vimeo API)
		// This is a placeholder for actual video player implementation
	});

	function togglePlay() {
		if (isPlaying) {
			player.contentWindow?.postMessage(
				'{"event":"command","func":"pauseVideo","args":""}',
				"*"
			);
		} else {
			player.contentWindow?.postMessage(
				'{"event":"command","func":"playVideo","args":""}',
				"*"
			);
		}
		isPlaying = !isPlaying;
	}
</script>

<div class="relative aspect-w-16 aspect-h-9">
	<iframe
		bind:this={player}
		src={videoUrl}
		{title}
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
		class="absolute inset-0 w-full h-full rounded-lg"
	></iframe>

	<button
		class="absolute bottom-4 right-4 bg-accent rounded-full p-3 shadow-lg hover:bg-accent/80 transition-colors duration-300"
		on:click={togglePlay}
	>
		{#if isPlaying}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
				/>
			</svg>
		{/if}
	</button>
</div>
