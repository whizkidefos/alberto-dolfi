<script lang="ts">
  import { theme } from "../../stores/theme";

  function toggleTheme() {
    theme.update(currentTheme => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  }
</script>

<button
  type="button"
  class="group relative rounded-lg bg-gray-50 p-2 ring-1 ring-gray-200 transition hover:ring-accent dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-accent"
  on:click={toggleTheme}
  aria-label="Toggle theme"
>
  <div class="relative h-5 w-5">
    <!-- Sun -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute h-full w-full text-gray-600 transition-all duration-500 group-hover:text-accent dark:text-gray-400 {$theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>

    <!-- Moon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute h-full w-full text-gray-600 transition-all duration-500 group-hover:text-accent dark:text-gray-400 {$theme === 'light' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  </div>
</button>

<style lang="postcss">
  button::after {
    position: absolute;
    inset: 0;
    transform: scale(0);
    border-radius: 9999px;
    background-color: theme(colors.gray.100);
    transition-property: transform;
    transition-duration: 300ms;
    content: '';
  }

  :global(.dark) button::after {
    background-color: theme(colors.gray.800);
  }

  button:hover::after {
    transform: scale(100%);
  }
</style>
