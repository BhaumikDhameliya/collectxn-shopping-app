/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundPosition: {
        'select-caret': 'calc(100% - 24px) center',
      },
      borderRadius: {
        10: '10px',
      },
      borderWidth: {
        5: '5px',
      },
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
        card: '5px 5px 0px #161617',
        black110: '1px 1px 0px #000000',
        blog: '5px 5px 0px #BCD63F',
        men: '6px 6px 0px #64731B',
        women: '6px 6px 0px #125C2F',
      },
      fontSize: {
        8: ['8px', '120%'],
        10: ['10px', '120%'],
        13: ['13px', '120%'],
        31: ['31px', '120%'],
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
      },
      spacing: {
        13: '52px',
        15: '60px',
        16.5: '66px',
        22: '88px',
        37: '148px',
        39: '156px',
        42: '168px',
        55: '220px',
        74: '296px',
        '1/20': '5%',
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
      borderColor: {
        DEFAULT: 'black',
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
