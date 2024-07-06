/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'poliglotam_black': '#373935',
        'poliglotam_orange': '#EF7521'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

