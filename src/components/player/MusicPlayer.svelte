<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { fade, slide } from "svelte/transition";

	let audio: HTMLAudioElement;
	let progress = 0;
	let duration = 0;
	let currentTime = 0;
	let isPlaying = false;
	let volume = 1;

	export let src: string = "";
	export let title: string = "";

	$: formattedCurrentTime = formatTime(currentTime);
	$: formattedDuration = formatTime(duration);

	function formatTime(seconds: number): string {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);
		return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
	}

	function togglePlay() {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
		isPlaying = !isPlaying;
	}

	function handleTimeUpdate() {
		currentTime = audio.currentTime;
		progress = (currentTime / duration) * 100;
	}

	function handleProgressClick(event: MouseEvent) {
		const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect();
		const x = event.clientX - bounds.left;
		const width = bounds.width;
		const percentage = x / width;
		audio.currentTime = percentage * duration;
	}

	function handleVolumeChange(event: Event) {
		const input = event.target as HTMLInputElement;
		volume = parseFloat(input.value);
		audio.volume = volume;
	}

	onMount(() => {
		audio = new Audio(src);
		audio.addEventListener("loadedmetadata", () => {
			duration = audio.duration;
		});
		audio.addEventListener("timeupdate", handleTimeUpdate);
	});

	onDestroy(() => {
		if (audio) {
			audio.removeEventListener("timeupdate", handleTimeUpdate);
			audio.pause();
		}
	});
</script>

<div
	class="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-lg border-t border-secondary/10 p-4"
	transition:slide={{ duration: 300 }}
>
	<div class="max-w-7xl mx-auto flex items-center gap-4">
		<button
			class="w-12 h-12 flex items-center justify-center rounded-full bg-accent hover:bg-accent/80 transition-colors duration-300"
			on:click={togglePlay}
			aria-label={isPlaying ? "Pause" : "Play"}
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
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{/if}
		</button>

		<div class="flex-1">
			<div class="text-sm font-medium mb-1">{title}</div>
			<div class="flex items-center gap-2">
				<span class="text-xs text-secondary/60">{formattedCurrentTime}</span>
				<div
					class="flex-1 h-1 bg-secondary/20 rounded-full cursor-pointer"
					on:click={handleProgressClick}
					role="slider"
					aria-label="Progress"
					aria-valuemin="0"
					aria-valuemax="100"
					aria-valuenow={progress}
				>
					<div
						class="h-full bg-accent rounded-full"
						style="width: {progress}%"
					></div>
				</div>
				<span class="text-xs text-secondary/60">{formattedDuration}</span>
			</div>
		</div>

		<div class="flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0l-2.828 2.828"
				/>
			</svg>
			<input
				type="range"
				min="0"
				max="1"
				step="0.1"
				value={volume}
				on:input={handleVolumeChange}
				class="w-24"
				aria-label="Volume"
			/>
		</div>
	</div>
</div>
