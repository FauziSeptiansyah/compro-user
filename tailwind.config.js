/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B263B',
        secondary: '#2C2C2C',
        lightGray: '#E5E5E5',
        extraLightGray: '#F7F7F7',
        gold: '#D4AF37',
        redAccent: '#E42032',
      },
    },
  },
  plugins: [require("daisyui")],
}

