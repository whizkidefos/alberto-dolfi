<script lang="ts">
	let formData = {
		name: "",
		email: "",
		subject: "",
		message: "",
	};
	let isSubmitting = false;
	let submitStatus: "idle" | "success" | "error" = "idle";

	async function handleSubmit() {
		isSubmitting = true;
		submitStatus = "idle";

		try {
			// Replace with your actual form submission logic
			await new Promise((resolve) => setTimeout(resolve, 1000));
			submitStatus = "success";
			formData = { name: "", email: "", subject: "", message: "" };
		} catch (error) {
			submitStatus = "error";
		} finally {
			isSubmitting = false;
		}
	}
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="max-w-2xl mx-auto space-y-6"
>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div>
			<label for="name" class="block text-sm font-medium mb-2">Name</label>
			<input
				type="text"
				id="name"
				bind:value={formData.name}
				required
				class="w-full px-4 py-2 bg-secondary/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
			/>
		</div>
		<div>
			<label for="email" class="block text-sm font-medium mb-2">Email</label>
			<input
				type="email"
				id="email"
				bind:value={formData.email}
				required
				class="w-full px-4 py-2 bg-secondary/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
			/>
		</div>
	</div>

	<div>
		<label for="subject" class="block text-sm font-medium mb-2">Subject</label>
		<input
			type="text"
			id="subject"
			bind:value={formData.subject}
			required
			class="w-full px-4 py-2 bg-secondary/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
		/>
	</div>

	<div>
		<label for="message" class="block text-sm font-medium mb-2">Message</label>
		<textarea
			id="message"
			bind:value={formData.message}
			required
			rows="6"
			class="w-full px-4 py-2 bg-secondary/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
		></textarea>
	</div>

	<button
		type="submit"
		disabled={isSubmitting}
		class="w-full bg-accent py-3 rounded-lg hover:bg-accent/80 transition-colors duration-300 disabled:opacity-50"
	>
		{#if isSubmitting}
			Sending...
		{:else}
			Send Message
		{/if}
	</button>

	{#if submitStatus === "success"}
		<p class="text-green-500 text-center">Message sent successfully!</p>
	{:else if submitStatus === "error"}
		<p class="text-red-500 text-center">An error occurred. Please try again.</p>
	{/if}
</form>
