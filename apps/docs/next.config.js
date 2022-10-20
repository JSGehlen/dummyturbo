/** @format */

const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
  env: {
    BASEURL: 'https://turborepo.org',
  },
});
