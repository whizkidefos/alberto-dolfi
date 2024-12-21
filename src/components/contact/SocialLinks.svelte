<script lang="ts">
	export let socialLinks: {
		platform: string;
		url: string;
		icon: string;
	}[];
</script>

<div class="flex space-x-6">
	{#each socialLinks as { platform, url, icon }}
		<a
			href={url}
			class="text-secondary/60 hover:text-accent transition-colors duration-300"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={platform}
		>
			{@html icon}
		</a>
	{/each}
</div>
