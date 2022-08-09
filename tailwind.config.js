/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'hero-h1': 'clamp(1.8rem, 7vw, 4rem)',
        'section-h2': 'clamp(2.4rem, 9vw, 4rem)',
        'contact-h3': 'clamp(1.6rem, 5vw, 3rem)',
        'contact-h4': 'clamp(1.1rem, 3vw, 1.6rem)'
      },
      boxShadow: {
        'lg': '2px 2px 10px -2px rgb(130, 130, 130)',
      },
    },
  },
  plugins: [],
}