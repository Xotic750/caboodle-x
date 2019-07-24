// https://facebook.github.io/jest/docs/en/configuration.html
module.exports = {
  coverageDirectory: '__tests__/coverage/',
  collectCoverageFrom: ['<rootDir>/*.js', '!<rootDir>/.*.js', '!<rootDir>/*.*.js'],
  testMatch: ['**/*.test.js'],
  verbose: true
};
//# sourceMappingURL=jest.config.js.map