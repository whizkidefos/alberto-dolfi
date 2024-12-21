<script lang="ts">
	export let topics: string[];
	export let selectedTopic: string = "All";

	function handleTopicChange(topic: string) {
		selectedTopic = topic;
		dispatch("topicChange", { topic });
	}

	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
</script>

<div class="flex flex-wrap gap-4 justify-center mb-12">
	<button
		class="px-6 py-2 rounded-full transition-colors duration-300 {selectedTopic ===
		'All'
			? 'bg-accent text-secondary'
			: 'bg-secondary/5 hover:bg-secondary/10'}"
		on:click={() => handleTopicChange("All")}
	>
		All
	</button>

	{#each topics as topic}
		<button
			class="px-6 py-2 rounded-full transition-colors duration-300 {selectedTopic ===
			topic
				? 'bg-accent text-secondary'
				: 'bg-secondary/5 hover:bg-secondary/10'}"
			on:click={() => handleTopicChange(topic)}
		>
			{topic}
		</button>
	{/each}
</div>
