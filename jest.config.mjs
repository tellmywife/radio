export default {
  testEnvironment: 'jest-environment-node',
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};