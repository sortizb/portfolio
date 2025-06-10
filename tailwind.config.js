/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D1117',
        card: '#161B22',
        primary: '#F0F6FC',
        secondary: '#8B949E',
        accent: '#2F81F7',
        border: '#21262D',
        tag: '#30363D',
        error: '#DA3633',
      },
    },
  },
  plugins: [],
}