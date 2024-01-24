/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        'theme-primary': '#010a5e',
        'theme-primary-light': '#010d78',
        'theme-secondary': '#ffcc00',
        'theme-paragraph': '#c0c0c0',
        'theme-white': '#ffffff',
        'theme-black': '#000000',
        'theme-green': '#007936',
        'theme-red': '#cc3433',
        'theme-dark': '#000000',
        'theme-dark-light': '#171717',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
      },
    },
    fontFamily: {
      oswald: ['oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
