/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      screens: {
        extraSmal: "20rem",
        small: "640px",
        medium: "768px",
        large: "1024px", 
        extraLarge: "1280px",
        "2xextraLarge": "1536px",
      },
      fontFamily: {
        basic: ['Montserrat Alternates', 'sans-serif'],
        title: ['Kaisei HarunoUmi', 'serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      fontSize: {
        basicSize: '16px',
        subtitleSize: '20px',
        titleSize: '36px',
        bigtitleSize: '64px',
      },
      colors: {
        gray: "#6F8493",
        title: "#153B55",
        accent: "#59BE68",
        black: "#000",
        white: "#fff",
        bgcolor: "#EEF2F0",
        footer: '#edf2f0',
      },
      boxShadow: {
        'custom-dark': '0px 11px 15px rgba(0, 0, 0, 0.4)',
      },
      backgroundPosition: {
        "left-center": "left center",
        "right-center": "right center",
        "top-center": "center 5%",
      },
      backgroundSize: {
        50: "50vw",
      },
      padding: {
        "pt-44%": "44%",
      },
    },
  },
  plugins: [],
}