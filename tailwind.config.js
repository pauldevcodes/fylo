/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primaryOne: 'hsl(243, 87%, 12%)',
        primaryTwo: 'hsl(238, 22%, 44%)',
        accentOne: 'hsl(224, 93%, 58%)',
        accentTwo: 'hsl(170, 45%, 43%)',
        neutralOne: 'hsl(240, 75%, 98%)',
        neutralTwo: 'hsl(0, 0%, 75%)'
      },
      backgroundImage: {
        mobileCurve: 'url("/src/images/bg-curve-mobile.svg")',
        desktopCurve: 'url("/src/images/bg-curve-desktop.svg")'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

