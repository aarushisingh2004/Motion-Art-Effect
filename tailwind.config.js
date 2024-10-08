/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customColor: '#0e0f1a',
        newColor:'#181129',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
