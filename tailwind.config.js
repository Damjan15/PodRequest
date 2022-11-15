/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "#54E6AF",
        darkBlue: "#2C344B",
        veryDarkBlue: "#121725",
        lightBlue: "#5A668A",
        veryLightBlue: "#C2CBE5"
      },
      fontFamily: {
        sans: ['Chivo', 'sans-serif']
      },
      backgroundImage: {
        bodyMobile: "url('../assets/mobile/image-host.jpg')"
      }
    },
  },
  plugins: [],
}
