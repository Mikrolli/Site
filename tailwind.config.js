/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'img-bg': 'url("./assets/bg-form.jpg")'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
