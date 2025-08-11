import { transform } from '@tailwindcss/postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

