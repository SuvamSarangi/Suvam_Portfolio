module.exports = {
    content: [
      "./*.html", // Include all HTML files in the root directory
      "./js/**/*.js", // Include all JavaScript files in the `js` folder
    ],
    theme: {
      screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

      extend: {
       animation: {
        'spin-border':'spin-border 10s linear infinite',
      },
      keyframes: {
        'spin-border': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
    plugins: [],
  };
  