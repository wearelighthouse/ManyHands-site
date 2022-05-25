module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      borderWidth: {
        '10': '10px',
      },
    },

    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'mimosa': '#F1FFBC',
      'smoke': '#3A3A4E',
      'dark-gray': '#7E7E81',
    },

    fontFamily: {
      'sailec': ['Sailec, sans-serif'],
      'tiempos': ['Tiempos, serif'],
    },

    fontSize: {
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2.125rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },

    rotate: {
      '15': '-15.96deg',
      '5': '5.19deg'
    },

    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1035px',
    },
  },
  plugins: [],
};
