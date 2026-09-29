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
        editorial: {
          bg: '#F7F5F2',          // Warm Off-White
          white: '#FFFFFF',       // Section White
          black: '#111111',       // Primary Text
          gray: '#777777',        // Secondary Text
          muted: '#999999',       // Muted Text
          border: 'rgba(17, 17, 17, 0.08)',
          'border-dark': 'rgba(17, 17, 17, 0.16)',
          accent: '#8B7355',      // Muted Gold / Warm Brown
          'accent-light': '#A89274',
          'accent-subtle': 'rgba(139, 115, 85, 0.10)',
        }
      },
      letterSpacing: {
        editorial: '0.22em',
        widest: '0.3em',
        ultra: '0.45em',
      },
      animation: {
        'fade-in': 'fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
