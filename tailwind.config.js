/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      '--color-dark-violet': '#100C1B',
      '--color-medium-violet': '#4F3881',
      '--color-live-pink': '#9D6FFF',
      '--color-pink': '#F1CAFF',
      '--color-orange': '#FFA800',
      '--color-dark-orange': '#A87B24',
      '--color-clear-orange': '#A08653',
      '--color-light-grey': '#8E8E8E',
      '--color-white': '#DFDFDF',
    },
  },
  plugins: [],
}
