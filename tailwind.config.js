const glob = require('glob');

module.exports = {
  content: glob.sync('./**/*.html'),
  theme: {
    extend: {},
  },
  plugins: [],
};
