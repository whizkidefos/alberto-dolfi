import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    // Check localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  
  return 'light';
}

// Create the store with initial value
export const theme = writable<Theme>(getInitialTheme());
