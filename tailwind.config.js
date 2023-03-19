/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1048px',
    },
    extend: {
      colors: {
        mainPurple: '#8c52ff',
        projectColor: '#5e17eb',
        yellow: '#ffff00',
        btnColor: '#ff443a',
        black: '#0000',
        redlight: '#ff1155',
        pColor: '#9b9b9b',
        css: '#0000ff',
        tailwind: '#c0f0f7',
        bootstrap: '#563d7c',
      },
    },
  },
  plugins: [],
}
