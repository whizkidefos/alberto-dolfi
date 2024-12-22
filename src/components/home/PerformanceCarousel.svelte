<script lang="ts">
  import { onMount } from 'svelte';
  import type { Performance } from '../../data/performances';
  import { theme } from '../../stores/theme';

  export let performances: Performance[];
  
  let currentIndex = 0;
  let autoplayInterval: NodeJS.Timeout;
  let container: HTMLElement;
  let isDragging = false;
  let startX: number;
  let scrollLeft: number;

  $: currentPerformance = performances[currentIndex];

  function goToSlide(index: number) {
    currentIndex = (index + performances.length) % performances.length;
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  }

  function handleMouseDown(e: MouseEvent) {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  }

  function handleMouseMove(e: MouseEvent) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  }

  function handleMouseUp() {
    isDragging = false;
  }

  onMount(() => {
    startAutoplay();
    return () => stopAutoplay();
  });

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function toggleTheme() {
    theme.toggleTheme();
    document.documentElement.classList.toggle('dark');
  }
</script>

<div
  class="relative overflow-hidden bg-gray-900 dark:bg-black"
  on:mouseenter={stopAutoplay}
  on:mouseleave={startAutoplay}
>
  <!-- Main Carousel -->
  <div
    class="relative h-[600px] w-full"
    bind:this={container}
    on:mousedown={handleMouseDown}
    on:mousemove={handleMouseMove}
    on:mouseup={handleMouseUp}
    on:mouseleave={handleMouseUp}
  >
    <div
      class="absolute inset-0 transition-opacity duration-500"
      style="background-image: url({currentPerformance.image}); background-size: cover; background-position: center;"
    >
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 dark:from-black/90 to-gray-900/20 dark:to-black/20" />
    </div>

    <!-- Content -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl space-y-6 text-white">
          <div class="space-y-2">
            <p class="text-accent">{formatDate(currentPerformance.date)} at {currentPerformance.time}</p>
            <h2 class="text-5xl font-playfair font-bold">{currentPerformance.title}</h2>
          </div>

          <p class="text-xl text-white/80">{currentPerformance.description}</p>

          <div class="space-y-2">
            <p class="text-lg">
              <span class="text-white/60">Venue:</span>
              {currentPerformance.venue}, {currentPerformance.location}
            </p>
            <div class="text-white/60">
              <p class="font-medium">Program:</p>
              <ul class="list-disc list-inside">
                {#each currentPerformance.program as piece}
                  <li>{piece}</li>
                {/each}
              </ul>
            </div>
          </div>

          {#if currentPerformance.ticketUrl}
            <a
              href={currentPerformance.ticketUrl}
              class="inline-flex items-center rounded-full bg-accent px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-accent/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Tickets
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <div class="absolute bottom-8 left-0 right-0">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between">
        <!-- Dots -->
        <div class="flex space-x-3">
          {#each performances as _, i}
            <button
              class="h-2 w-2 rounded-full transition-all duration-300 {i === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}"
              on:click={() => goToSlide(i)}
              aria-label="Go to slide {i + 1}"
            />
          {/each}
        </div>

        <div class="flex items-center space-x-4">
          <!-- Arrows -->
          <div class="flex space-x-4">
            <button
              class="rounded-full p-2 text-white/60 transition-colors hover:text-white"
              on:click={prevSlide}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              class="rounded-full p-2 text-white/60 transition-colors hover:text-white"
              on:click={nextSlide}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <!-- Theme Toggle -->
          <button
            class="rounded-full p-2 text-white/60 transition-colors hover:text-white"
            on:click={toggleTheme}
            aria-label="Toggle theme"
          >
            {#if $theme === 'dark'}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
