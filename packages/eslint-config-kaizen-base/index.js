module.exports = {
  parserOptions: {
    ecmaVersion: 'latest'
  },
  extends: ['airbnb-base', 'plugin:import/recommended', 'prettier'],
  rules: {
    // turn off prefer default export error
    'import/prefer-default-export': 'off',

    // import order
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '*.png',
            group: 'sibling',
            patternOptions: { matchBase: true },
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],

    // prevent eslint to complain about the "styles" variable being used before it was defined
    'no-use-before-define': ['error', { variables: false }],

    // show error if there is semicolon
    semi: ['error', 'never'],

    // allow "_id" property
    'no-underscore-dangle': ['error', { allow: ['_id'] }],

    // conflict with prettier
    'object-curly-newline': 'off',

    // do not use comma end of the object
    'comma-dangle': ['error', 'never'],

    // disable nested ternary error
    'no-nested-ternary': 'off',

    // put newline
    'newline-before-return': 'error',

    // put newline
    'newline-after-var': ['error', 'always'],

    'object-curly-spacing': ['error', 'always'],

    // use unix line breaks \n
    'linebreak-style': ['error', 'unix'],

    // use single quotes
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // use double quotes if jsx
    'jsx-quotes': ['error', 'prefer-double']
  }
}
