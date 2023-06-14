module.exports = {
  env: {
    browser: false
  },
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    AbortController: false,
    Blob: true,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    File: true,
    FileReader: false,
    FormData: false,
    global: false,
    Headers: false,
    Intl: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    queueMicrotask: true,
    URL: false,
    URLSearchParams: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: false
  },
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

    // disable raw text detech cause crash https://github.com/babel/babel/discussions/13742
    '@kaizentech/react-native/no-raw-text': 'off',

    // detect unnecessary array style
    '@kaizentech/react-native/no-single-element-style-arrays': 'error'
  }
}
