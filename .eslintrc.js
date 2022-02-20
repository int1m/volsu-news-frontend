module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'arrow-parens': ['error', 'as-needed'],
    'no-trailing-spaces': 'error',
    'computed-property-spacing': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'space-in-parens': ['error', 'never'],
    'key-spacing': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'no-multi-spaces': ['error'],
    'space-unary-ops': 1,
    'space-infix-ops': ['error', { int32Hint: true }],
    'arrow-spacing': 'error',
    'vue/component-tags-order': [
      'error',
      {
        order: ['route', 'template', 'script', 'style'],
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/valid-define-props': 'error',
    'vue/valid-define-emits': 'error',
    'vue/static-class-names-order': 'error',
    'vue/space-in-parens': ['error', 'never'],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/space-infix-ops': ['error', { int32Hint: true }],
    'vue/arrow-spacing': 'error',
  },
};
