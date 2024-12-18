/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['Playfair Display', 'serif'],
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          'primary': '#1a1a1a',
          'secondary': '#f5f5f5',
          'accent': '#8B0000',
        },
      },
    },
    plugins: [],
  }