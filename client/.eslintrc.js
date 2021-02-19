module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'only-warn',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-named-as-default': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-props-no-spreading': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': 'off',
  },
};
