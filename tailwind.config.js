/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'retro-yellow': '#FCBB6D',
        'retro-red': '#D8737F',
        'retro-dark-red': '#AB6C82',
        'retro-violet': '#685D79',
        'retro-blue': '#475C7A'
      }
    }
  },
  plugins: []
}
