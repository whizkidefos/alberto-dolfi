<script lang="ts">
	import { fade } from "svelte/transition";
	import { trapFocus } from "../../utils/a11y";
	import { onMount } from "svelte";

	export let videoUrl: string;
	export let title: string;
	export let onClose: () => void;

	let dialog: HTMLDialogElement;

	onMount(() => {
		trapFocus(dialog);
	});

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			onClose();
		}
	}
</script>

<div
	class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
	transition:fade={{ duration: 200 }}
	on:keydown={handleKeydown}
>
	<dialog
		bind:this={dialog}
		class="bg-transparent p-4 w-full max-w-5xl mx-auto"
		open
	>
		<div class="relative">
			<button
				class="absolute -top-12 right-0 text-white hover:text-accent transition-colors duration-300"
				on:click={onClose}
				aria-label="Close video"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<div class="aspect-w-16 aspect-h-9">
				<iframe
					src={videoUrl}
					{title}
					class="w-full h-full"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</dialog>
</div>
