/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tab: { max: "1025px" },
        mob: { max: "767px" },
      },
      colors: {
        'loader-start': '#444444',
        'loader-middle': '#555555',
        'loader-end': '#666666',
      }

    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.darkLoader': {
          display: 'inline-block',
          width: '100%',
          height: '100%',
          background: '#444',
          backgroundImage: 'linear-gradient(to right, #444 0%, #555 20%, #444 40%, #666 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1000px 100%',
          animation: 'darkLoader 2s infinite linear',
          '@keyframes darkLoader': {
            '0%': { backgroundPosition: '-1000px 0' },
            '100%': { backgroundPosition: '1000px 0' },
          },
        },
        '.lightLoader': {
          display: 'inline-block',
          width: '100%',
          height: '100%',
          background: '#eee',
          backgroundImage: 'linear-gradient(to right, #eee 0%, #ddd 20%, #eee 40%, #ccc 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1000px 100%',
          animation: 'lightLoader 2s infinite linear',

          '@keyframes lightLoader': {
            '0%': { backgroundPosition: '-1000px 0' },
            '100%': { backgroundPosition: '1000px 0' },
          },
        },
      })
    })
  ],
}

