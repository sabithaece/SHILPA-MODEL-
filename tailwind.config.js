/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
      },
      colors: {
        luxury: {
          black: '#080808',
          dark: '#111111',
          surface: '#151515',
          card: '#181818',
          border: 'rgba(246, 244, 238, 0.08)',
          'border-light': 'rgba(246, 244, 238, 0.15)',
          cream: '#F6F4EE',
          sand: '#E7E2D7',
          muted: '#9E9A93',
          gold: '#C5A880',
          'gold-light': '#E2D2BE',
          bronze: '#9E7E55',
        }
      },
      letterSpacing: {
        editorial: '0.25em',
        widest: '0.35em',
        ultra: '0.5em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
