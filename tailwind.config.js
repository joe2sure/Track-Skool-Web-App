// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: '#374151',
        lightGray: '#D1D5DB',
        hover: '#2563EB',
        darkHover: '#60A5FA',
        light: '#ffffff',
        dark: '#000000',
        background: '#001832'
      },
    },
  },
  plugins: [],
}
