/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pokemonBlue: '#3A85D3',
        pokemonYellow: '#F6D02F',
        pokemonRed: '#E03C31',
        pokemonGreen: '#A5C85A',
        pokemonPurple: '#7A5E9A',
        pokemonBlack: '#101820',
        pokemonWhite: '#FFFFFF',
      },
      screens: {
        xs: '300px',
      },
    },
  },
  plugins: [],
}

