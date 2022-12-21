/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,tsx}',
    './components/**/*.{js,jsx,tsx}',
    './pages/**/*.{js,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#5445AE',
        secondary: '#F99148',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
