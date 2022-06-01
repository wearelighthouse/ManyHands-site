module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      borderWidth: {
        '10': '10px',
      },

      dropShadow: {
        'glow': [
          '0 4px 6px rgba(0, 0, 0, 0.12)',
          '0 2px 60px rgba(241, 255, 188, 0.7)',
        ],
      },
    },

    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'mimosa': '#F1FFBC',
      'pink': '#E80070',
      'smoke': '#3A3A4E',
      'dark-gray': '#717173',
      'gray': '#DEDEE2',
      'light-gray': '#F7F7F9',
    },

    fontFamily: {
      'sailec': ['Sailec, sans-serif'],
      'tiempos': ['Tiempos, serif'],
    },

    fontSize: {
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '3.5xl': '2rem',
      '4xl': '2.125rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },

    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1035px',
    },
  },
  plugins: [],
};
