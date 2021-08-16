module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    MNI: 'readonly',
    CMS: 'readonly',
    MMP: 'readonly',
    MIC: 'readonly',
    isPath: 'readonly',
    Cookies: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    strict: ['error', 'global'],
    'func-style': ['error', 'expression'],
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'prefer-arrow-callback': 'error',
    'new-cap': 'error',
    'no-invalid-this': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      { array: true, object: true },
      { enforceForRenamedProperties: true }
    ],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    eqeqeq: 'error',
    'no-plusplus': 'error'
  }
}
