const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@studio': path.resolve(__dirname, 'src/'),
      '@stories': path.resolve(__dirname, 'src/stories'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
