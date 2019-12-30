module.exports = {
    env: {
      es6: true,
    },
    extends: [
      'airbnb', 'prettier', 'prettier/react'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      __DEV__: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react', 'jsx-a11y', 'prettier', 'import'
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
      'import/prefer-default-export': 'off',
      'no-console': ['error', { allow: ['tron'] }],
      'react/jsx-props-no-spreading': 0,
      'no-param-reassign': 'off',
      'no-use-before-define': 'off',
      'import/no-cycle': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      "react/prop-types": ["error", { "ignore": ["navigation", "tintColor"] }],
    },
    settings: {
      'import/resolver': {
        'babel-plugin-root-import': {
          rootPathSuffix: 'src'
        }
      }
    }
  };
