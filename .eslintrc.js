module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'eslint-plugin',
    'import',
    'react',
    'react-hooks',
    '@typescript-eslint',
    '@compiled'
  ],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars':[
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ],
    'no-unused-vars': 'off',
    'no-shadow': "off",
    '@typescript-eslint/no-shadow': 1,
    'no-undef': 'off',
    'import/no-duplicates': 'error',
    'react/jsx-no-literals': 'off',
    'react/no-unknown-property': ['error', {ignore: ['css']}]
  }
}
