const { default: umiConfig } = require('@umijs/test/lib/createDefaultConfig/createDefaultConfig');

const defaultConfig = umiConfig(process.cwd(), {});

const path = require('path');

module.exports = {
  ...defaultConfig,
  rootDir: path.resolve(__dirname, '.'),
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  coverageDirectory: '<rootDir>/coverage/',
  testEnvironment: 'jsdom',
};
