module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'mimosa': '#F1FFBC',
      'smoke': '#3A3A4E',
      'dark-gray': '#7E7E81',
    },
    
    fontFamily: {
      'sailec': ['Sailec-Bold, sans-serif'],
      'tiempos': ['Tiempos Headline, sans-serif'],
    },

    rotate: {
      '15': '-15.96deg',
      '5': '5.19deg'
    },

    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1440px',
    },
  },
  plugins: [],
};
