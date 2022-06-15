module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        base: ['Google Sans, Helvetica, sans-serif'],
        diavolo: 'Diavlo',
      },
      colors: {
        accent: 'var(--accent)',
        ligth: 'var(--ligth)',
        gray: 'var(--gray)',
        blue: 'var(--blue)',
        brown: 'var(--brown)',
      },
      zIndex: {
        '-1': -1,
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
