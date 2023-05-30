module.exports = {
  plugins: ['@kaizentech/react-native'],
  extends: ['./index.js'].map(require.resolve),
  rules: {
    // allow .js files to contain JSX code
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // detect unused styles
    '@kaizentech/react-native/no-unused-styles': 'error',

    // split platfrom components
    '@kaizentech/react-native/split-platform-components': 'error',

    // detect inline styles
    '@kaizentech/react-native/no-inline-styles': 'error',

    // use colors as variable
    '@kaizentech/react-native/no-color-literals': 'error',

    // detect raw text
    '@kaizentech/react-native/no-raw-text': 'error',

    // detect unnecessary array style
    '@kaizentech/react-native/no-single-element-style-arrays': 'error'
  }
}
