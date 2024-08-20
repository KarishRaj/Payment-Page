/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
        
        'sm': { 'max': '768px',}, // Define your desired breakpoint here
        'md': { 'min': '769px'},
        'lg': { 'min': '1024px'},
        'mq1125': {raw: "screen and (max-width: 1125px)",},
        'mq1050': {raw: "screen and (max-width: 1050px)",},
        'mq750': {raw: "screen and (max-width: 750px)",},
        'mq450': {raw: "screen and (max-width: 450px)",},
        
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
