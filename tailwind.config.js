/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      container: {
        center: true,
      },
      // fontFamily : {
      //   bai : ['Bai Jamjuree'],
      // },
      colors : {
        "strongCyan" : 'hsl(171, 66%, 44%)',
        "darkStrongCyan" : 'hsl(171, 66%, 40%)',
        "lightBlue" : 'hsl(233, 100%, 69%)',
        "darkLightBlue" : 'hsl(233, 100%, 60%)',
        "darkGrayishBlue" : 'hsl(210, 10%, 33%)',
        "grayishBlue" : 'hsl(201, 11%, 66%)',
        "bgGrayish" : 'hsl(240, 17%, 98%)' 
      },
      backgroundImage: {
        'mobile-hero-pattern': "url('../images/bg-header-mobile.png')",
        'desktop-hero-pattern': "url('../images/bg-header-desktop.png')"
      }
    },
  },
  plugins: [],
}

