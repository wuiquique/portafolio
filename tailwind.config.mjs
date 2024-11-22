/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
        colors: {
            dark: {
                bg: "#16161A",
                titles: "#FFFFFE",
                texts: "#b0bed1",
                primary: "#7F5AF0",
                secondary: "#2CB67D",
                strokes: "#010101",
            },
            light: {
                bg: "#F3F3F3",
                titles: "#000000",
                texts: "#40454D",
                primary: "#2CB67D",
                secondary: "#B62C62",
                strokes: "#FFFFFF",
            },
        },
        fontFamily: {
            titles: ['Hepta Slab', 'serif'],
            texts: ['Roboto', 'sans-serif'],
        }
    },
  },
  plugins: [],
};
