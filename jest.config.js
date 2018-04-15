// https://facebook.github.io/jest/docs/en/configuration.html

module.exports = {
  coverageDirectory: '__tests__/coverage/',
  collectCoverageFrom: [
    'dist/caboodle-x.js',
    '!<rootDir>/node_modules/',
    '!<rootDir>/__tests__/helpers/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/helpers/',
  ],
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/?(*.)(spec|test).js?(x)'],
  verbose: true,
};
