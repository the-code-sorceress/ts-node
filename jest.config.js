module.exports = {
  testEnvironment: 'node',
  roots: [
    "<rootDir>/dist/",
  ],
  moduleNameMapper: {
    "^Entities/(.*)$": "<rootDir>/dist/Entities/$1",
    "^Services/(.*)$": "<rootDir>/dist/Services/$1",
    "^Actions/(.*)$": "<rootDir>/dist/Actions/$1",
    "^Constants/(.*)$": "<rootDir>/dist/Constants/$1",
    "^EventSources/(.*)$": "<rootDir>/dist/EventSources/$1",
    "^Setup/(.*)$": "<rootDir>/dist/Setup/$1",
  },
  setupFiles: [
    "<rootDir>/dist/Configs/jestSetup.js",
  ],
};
