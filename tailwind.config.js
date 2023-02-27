/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'blob-pattern': "url('assets/blob-haikei.svg')",
        'wave-pattern': "url('assets/wave-haikei.svg')",
        'circle-pattern': "url('assets/circle-scatter-haikei.svg')",
        'layered-waves-pattern': "url('assets/layered-waves-haikei.svg')",
      }
    },
  },
  plugins: [],
}