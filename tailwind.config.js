
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes:{
        scroll:{
          '0%':{transform:'translatex(0%)'},
          '100%':{transform:'translatex(50%)'}
        },
      },
      anmition:{
        scroll:'scroll 20s linear infinite'
      },
    },
  },
  plugins: [],
}

