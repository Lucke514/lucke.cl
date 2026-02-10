/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // Colores para WorkExperience (clases dinámicas)
    {
      pattern: /^(bg|text|from|to)-(?:orange|red|blue|green|purple)-(?:400|500|600)$/,
      variants: ['dark', 'group-hover'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

