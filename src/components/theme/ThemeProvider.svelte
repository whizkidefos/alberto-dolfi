<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '../../stores/theme';

  function applyTheme(value: 'light' | 'dark') {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(value);
    localStorage.setItem('theme', value);
  }

  onMount(() => {
    // Initialize theme
    const currentTheme = $theme;
    applyTheme(currentTheme);

    // Subscribe to theme changes
    const unsubscribe = theme.subscribe(value => {
      applyTheme(value);
    });

    // Watch for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        theme.set(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      unsubscribe();
      mediaQuery.removeEventListener('change', handleChange);
    };
  });
</script>

<div class="contents">
  <slot />
</div>

<style lang="postcss">
  :global(html) {
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  :global(html.light) {
    background-color: theme(colors.white);
    color: theme(colors.gray.900);
  }

  :global(html.dark) {
    background-color: theme(colors.gray.900);
    color: theme(colors.white);
  }

  :global(html.dark) :global(.dark\:bg-gray-800) {
    background-color: theme(colors.gray.800);
  }

  :global(html.dark) :global(.dark\:text-white) {
    color: theme(colors.white);
  }

  :global(html.dark) :global(.dark\:text-gray-400) {
    color: theme(colors.gray.400);
  }

  :global(html.dark) :global(.dark\:border-gray-800) {
    border-color: theme(colors.gray.800);
  }

  :global(html.dark) :global(.dark\:hover\:bg-gray-800:hover) {
    background-color: theme(colors.gray.800);
  }
</style>
