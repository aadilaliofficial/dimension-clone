/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        borderSpin: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '100%': {
            backgroundPosition: '200% 50%',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      colors: {
        primary: '#0a0a23', // dark purple background
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
