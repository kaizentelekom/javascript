module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['airbnb/rules/react', 'airbnb/rules/react-a11y', 'airbnb/hooks', '@kaizentech/base'],
  rules: {
    // ignore errors for prop types
    'react/prop-types': 'off',

    // conflict with prettier
    'react/jsx-curly-newline': 'error',

    // use arrow function
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],

    // use 2 space indent
    'react/jsx-indent-props': ['error', 2],

    // use pascal case naming for component
    'react/jsx-pascal-case': 'error',

    'react/jsx-closing-bracket-location': 'error',

    'react/jsx-closing-tag-location': 'error',

    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],

    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    'jsx-a11y/img-redundant-alt': 'error',

    'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],

    'jsx-a11y/no-access-key': 'error',

    'react/no-string-refs': 'error',

    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ],

    'react/self-closing-comp': 'error',

    'react/require-render-return': 'error'
  }
}
