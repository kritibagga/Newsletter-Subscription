module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/fileMock.ts',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
