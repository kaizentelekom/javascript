module.exports = {
  env: {
    es6: true
  },
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
    'jsx-quotes': ['error', 'prefer-double'],

    // show error if variable can be const
    'prefer-const': 'error',

    // show error if trying to reassign const
    'no-const-assign': 'error',

    // use let
    'no-var': 'error',

    // do not use object constructor
    'no-new-object': 'error',

    // use short version of object properties
    'object-shorthand': 'error',

    // do not use quotes if not need
    'quote-props': ['error', 'as-needed'],

    // do not use array constructor
    'no-array-constructor': 'error',

    // muust return in array functions
    'array-callback-return': 'error',

    // prefer destructuring
    'prefer-destructuring': 'error',

    // do not use spacing in literal template strings
    'template-curly-spacing': 'error',

    // do not use eval
    'no-eval': 'error',

    // show error for unnecessary escape
    'no-useless-escape': 'error',

    // do not define func inside loops
    'no-loop-func': 'error',

    // do not use arguments
    'prefer-rest-params': 'error',

    // do not use func constructor
    'no-new-func': 'error',

    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],

    // put space before blocks
    'space-before-blocks': 'error',

    // prefer spread
    'prefer-spread': 'error',

    // use arraw functions
    'prefer-arrow-callback': 'error',

    // put space before and after arrow
    'arrow-spacing': 'error',

    // always put arrow parentheses
    'arrow-parens': 'error',

    // do not use curly if not need
    'arrow-body-style': 'error',

    // put parantheses
    'no-confusing-arrow': 'error',

    // require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow use of multiple spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false
      }
    ]
  }
}
