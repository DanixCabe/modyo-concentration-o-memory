/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
        '3xl': '1920px',
        '2xl': '1535px',
        '1xl': '1440px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '767px',
        'sm': '560px',
        'xs': '360px',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


