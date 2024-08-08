/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': 'linear-gradient(135deg, #FBCB73, #733EBB)' // can support only 2 colors
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.1)', 
      },
      borderColor: {
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      

    },
  },
  plugins: [],
}

