module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-prune-var')(),
    require('cssnano'),
  ],
};
