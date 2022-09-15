module.exports = {
  // collectCoverageFrom: ['<rootDir>/packages/g/src/**/*.{ts,tsx}'],
  // coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/', '/__node__tests__/'],
  // coverageDirectory: 'coverage',
  // coverageReporters: ['text', 'clover', 'lcov'],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },

  runner: 'jest-electron/runner',
  testEnvironment: 'jest-electron/environment',
  testMatch: ['<rootDir>/__tests__/**/*.spec.+(ts|tsx|js)'],
  testPathIgnorePatterns: ['<rootDir>/packages/g-gesture'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsConfig: {
        allowJs: true,
        target: 'ES2019',
      },
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  modulePathIgnorePatterns: ['dist', '.fatherrc.ts'],
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@mapbox)'],
};
