<script lang="ts">
	let visible = false;
</script>

<button
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-secondary focus:rounded-lg"
	on:click={() => document.querySelector("main")?.focus()}
>
	Skip to main content
</button>
