/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['Inter', '"Plus Jakarta Sans"', 'Montserrat', '-apple-system', 'sans-serif'],
      },
      colors: {
        homepage: {
          orange: '#FFAD5A',
          dark: '#171717',
          gray: '#555555',
        }
      },
      letterSpacing: {
        editorial: '0.22em',
        widest: '0.3em',
        ultra: '0.45em',
      }
    },
  },
  plugins: [],
}
