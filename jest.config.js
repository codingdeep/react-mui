// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    roots: ['<rootDir>'],
    clearMocks: true,
    resetModules: true,
    collectCoverage: true,
    testEnvironment: 'jsdom',
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
    preset: 'ts-jest',
    testMatch: ['**/?(*.)(spec).(js|ts)?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    transform: {
        '^.+\\.[t|j]s?(x)?$': 'ts-jest',
        "^.+\\.jsx$": "babel-jest"
    },
    transformIgnorePatterns: ['/node_modules/(?!(@atlaskit|@atlassiansox)/)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        '.*\\.(css|less|styl|scss|sass)$': 'css-loader',
        '^~src/(.*)$': '<rootDir>/src/$1',
        '^type$': 'component-type',
        'src/(.*)': '<rootDir>/src/$1',
    },
};

