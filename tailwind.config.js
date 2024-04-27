/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      'sm': '100px',
      // => @media (min-width: 576px) { ... }
      'md': '760px',
      // => @media (min-width: 960px) { ... }
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}