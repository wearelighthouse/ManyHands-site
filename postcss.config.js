module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('cssnano'),
    require('postcss-css-variables')(),
  ],
};
