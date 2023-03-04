/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      colors:{
      secondary: '#ffb84d',  
      primary: '#e6ac00',
      red: '#ff0000',
      black: '#222222',
      gray: '#666666',
      lightgray: '#000000',
      green: '#28c165'




      }
      

    },
  },
  plugins: [require("tailwind-scrollbar")],
};
