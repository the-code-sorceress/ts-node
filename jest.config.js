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
    "^Configs/(.*)$": "<rootDir>/dist/Configs/$1",
    "^EventSources/(.*)$": "<rootDir>/dist/EventSources/$1",
    "^TestHelpers/(.*)$": "<rootDir>/dist/TestHelpers/$1",
  },
  setupFiles: [
    "<rootDir>/dist/Configs/jestSetup.js",
  ],
};
