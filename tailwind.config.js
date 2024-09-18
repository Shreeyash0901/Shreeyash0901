/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle farthest-side, rgba(255,0,182,.15), rgba(255,255,255,0))',
      },
      width: {
        '500': '500px',
      },
      height: {
        '500': '500px',
      },
    
    },
  },
  plugins: [],
}