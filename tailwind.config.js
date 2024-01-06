/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        '120': '30rem',
        '132': '33rem',
        '156': '40rem'
      },
      colors: {
        'fluorescente': '#17fc03'
      }
    },
  },
  plugins: [],
}

