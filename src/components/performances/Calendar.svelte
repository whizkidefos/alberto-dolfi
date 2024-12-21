<script lang="ts">
	import { onMount } from "svelte";

	export let events: Array<{
		date: string;
		title: string;
		venue: string;
	}>;

	let currentDate = new Date();
	let calendar: Array<Array<{ date: Date; events: typeof events }>>;

	$: {
		const month = currentDate.getMonth();
		const year = currentDate.getFullYear();
		calendar = generateCalendar(month, year);
	}

	function generateCalendar(month: number, year: number) {
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDate = new Date(firstDay);
		startDate.setDate(startDate.getDate() - startDate.getDay());

		const weeks = [];
		let currentWeek = [];

		while (startDate <= lastDay || currentWeek.length > 0) {
			if (currentWeek.length === 7) {
				weeks.push(currentWeek);
				currentWeek = [];
			}

			const date = new Date(startDate);
			const dayEvents = events.filter((event) => {
				const eventDate = new Date(event.date);
				return eventDate.toDateString() === date.toDateString();
			});

			currentWeek.push({ date, events: dayEvents });
			startDate.setDate(startDate.getDate() + 1);
		}

		if (currentWeek.length > 0) {
			weeks.push(currentWeek);
		}

		return weeks;
	}

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	function previousMonth() {
		currentDate.setMonth(currentDate.getMonth() - 1);
		currentDate = new Date(currentDate);
	}

	function nextMonth() {
		currentDate.setMonth(currentDate.getMonth() + 1);
		currentDate = new Date(currentDate);
	}
</script>

<div class="bg-secondary/5 rounded-lg p-6">
	<div class="flex justify-between items-center mb-6">
		<button
			class="p-2 hover:bg-secondary/10 rounded-full transition-colors duration-300"
			on:click={previousMonth}
			aria-label="Previous month"
		>
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
					d="M15 19l-7-7 7-7"
				/>
			</svg>
		</button>

		<h2 class="text-2xl font-playfair">
			{monthNames[currentDate.getMonth()]}
			{currentDate.getFullYear()}
		</h2>

		<button
			class="p-2 hover:bg-secondary/10 rounded-full transition-colors duration-300"
			on:click={nextMonth}
			aria-label="Next month"
		>
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
					d="M9 5l7 7-7 7"
				/>
			</svg>
		</button>
	</div>

	<div
		class="grid grid-cols-7 gap-px bg-secondary/20 rounded-lg overflow-hidden"
	>
		{#each ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as day}
			<div class="p-2 text-center text-sm font-medium bg-secondary/5">
				{day}
			</div>
		{/each}

		{#each calendar as week}
			{#each week as { date, events }}
				<div
					class="p-2 min-h-[80px] bg-primary relative group hover:bg-secondary/5 transition-colors duration-300"
					class:opacity-50={date.getMonth() !== currentDate.getMonth()}
				>
					<span class="text-sm">{date.getDate()}</span>

					{#if events.length > 0}
						<div
							class="absolute bottom-1 left-1 right-1 bg-accent/20 rounded p-1 text-xs"
						>
							{events.length} event{events.length > 1 ? "s" : ""}
						</div>
					{/if}
				</div>
			{/each}
		{/each}
	</div>
</div>
