<script lang="ts">
	import { slide } from "svelte/transition";

	export let items: Array<{ name: string; path: string }>;
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}
</script>

<button
	class="p-2 rounded-lg hover:bg-secondary/10 transition-colors duration-300"
	on:click={toggleMenu}
	aria-label={isOpen ? "Close menu" : "Open menu"}
	aria-expanded={isOpen}
>
	{#if isOpen}
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
				d="M6 18L18 6M6 6l12 12"
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
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	{/if}
</button>

{#if isOpen}
	<div
		class="fixed inset-0 top-20 bg-primary/95 backdrop-blur-lg z-50"
		transition:slide={{ duration: 300 }}
	>
		<nav class="p-4">
			<ul class="space-y-4">
				{#each items as item}
					<li>
						<a
							href={item.path}
							class="block py-2 text-xl text-center text-secondary/80 hover:text-secondary transition-colors duration-300"
							on:click={toggleMenu}
						>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
{/if}
