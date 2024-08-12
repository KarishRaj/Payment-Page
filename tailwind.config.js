/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{html,js}"],
  theme: {
    screens:{
      xs: "360px",
    },
    extend: {
      colors: {
        "mariner-50": "#f1f8fd", 
        "mariner-100": "#e0f0f9",
        "mariner-300": "#a1d4ef", 
        "mariner-500": "#54a1dd", 
        "mariner-600": "#3F87d1", 
        "mariner-700": "#3775c3", 
        "mariner-800": "#315d9c",
        
      },
      fontFamily:{
        roboto:"Roboto",
      }
    },
  },
  plugins: [],
}

