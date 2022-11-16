/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        error: '#EF4949',
        gray: {
          DEFAULT: '#808080',
          dark: '#797979',
          mid: '#B3B3B3',
          light: '#D2D2D2',
          'extra-light': '#E9E9E9',
        },
        blue: '#396CB4',
        pink: '#EF4985',
        green: '#3BB76C',
        purple: '#733DB8',
        yellow: '#FFC907',
        black: {
          DEFAULT: '#000000',
          mate: '#161617',
        },
        'punchy-neon': '#BCD63F',
      },
      boxShadow: {
        btn: '3px 3px 0px #000000',
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
      },
      spacing: {
        '1/10': '10%',
        '1/5': '20%',
        '1/4': '25%',
        '3/10': '30%',
        '1/3': '33%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '2/3': '66%',
        '7/10': '70%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
      },
    },
    fontFamily: {
      display: ['Space\\ Grotesk'],
      body: ['Space\\ Grotesk'],
      'space-grotesk': ['Space\\ Grotesk'],
      'cera-pro': ['Cera\\ Pro'],
    },
  },
  plugins: [],
}