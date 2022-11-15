/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'neutral-light-grey': '#D2D2D2',
      },
      screens: {
        'tablet': '640px',  
        'laptop': '1024px',
      },
      spacing: {
        '1/10':'10%',
        '1/5': '20%',
        '1/4': '25%',
        '3/10':'30%',
        '1/3': '33%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '2/3': '66%',
        '7/10':'70%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10':'90%',
      }
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