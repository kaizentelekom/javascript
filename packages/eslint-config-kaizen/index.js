module.exports = {
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
    'react/jsx-indent-props': ['error', 2]
  }
}
