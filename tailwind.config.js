/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 3s ease infinite',
      },
      backgroundSize: {
        'size:200%': '200%',
      },
    },
  },
  plugins: [],
};
