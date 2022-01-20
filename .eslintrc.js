module.exports = {

  env: {
    browser: true,
    es2021: true
  },

  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  settings: {
    'import/resolver': {

      alias: {
        map: [ [ '@', './src' ] ],
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
      },
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
      }
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/script-setup-uses-vars': 'error',
    indent: [ 'error', 2 ],
    quotes: [ 'error', 'single' ],
    semi: [ 'error', 'never' ],
    'object-shorthand': [ 'error', 'always' ],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        objectsInArrays: true,
        arraysInArrays: true
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'arrow-parens': [ 'error', 'as-needed' ],
    'comma-dangle': [ 2, 'never' ],
    'max-len': [ 'error', { code: 120, ignoreTrailingComments: true } ],
    'vue/no-multiple-template-root': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [ 'error' ],
    'import/no-extraneous-dependencies': [ 'error', { devDependencies: true } ]

  }

}
