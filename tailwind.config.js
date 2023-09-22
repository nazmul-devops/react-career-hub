/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBgColor: 'bg-gradient-to-r from-[#7E90FE] to-[#9873FF]',
      },
    },
  },
  plugins: [require("daisyui")],
}

