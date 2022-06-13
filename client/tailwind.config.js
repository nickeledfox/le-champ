module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        diavolo: 'Diavlo',
      },
      colors: {
        accent: '#E7A925',
        ligth: '#D9D1D1',
        gray: '#6A6A6A',
        blue: '#3F57B2',
        brown: '#613F1B',
      },
      zIndex: {
        '-1': -1,
      },
      container: {
        padding: '1rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
