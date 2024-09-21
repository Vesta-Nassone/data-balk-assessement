/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        overlock: ['Overlock', 'sans-serif']
      },
      boxShadow: {
        custom: '0 2px 10px rgba(0,0,0,.2);',
        nav: `
        0px 6px 13px 0px #0000000D, 
        0px 23px 23px 0px #0000000A, 
        0px 52px 31px 0px #00000005, 
        0px 93px 37px 0px #00000003, 
        0px 145px 41px 0px #00000000;
      `
      }
    },
  },
  plugins: [],
};
