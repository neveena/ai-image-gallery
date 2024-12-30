module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^axios$': 'axios', // Map axios imports if needed
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testEnvironment: 'jsdom', // For React
};
