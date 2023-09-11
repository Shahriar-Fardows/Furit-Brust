/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],

    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('./images/banner1.png')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      }
    }
  }

  