/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'Gunmetal': '#16262e',
        'Charcoal': '#2e4756',
        'Cerulean': '#3c7a89',
        'CoolGray': '#9fa2b2',
        'Thistle': '#dbc2cf',
      }
    },
  },
  plugins: [],
}

