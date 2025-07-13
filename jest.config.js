module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue', 'mjs'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@?mermaid|@mermaid-js|d3|d3-.*|dagre|graphlib|internmap|delaunator|robust-predicates|khroma|dayjs|uuid|micromark|mdast|unist|hast|rehype|remark|vfile|lodash-es|.*\\.mjs$))'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**'
  ]
}
