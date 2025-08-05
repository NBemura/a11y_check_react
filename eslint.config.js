import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  {
    files: ["**/*.jsx", "**/*.js"],
    plugins: {
      react: reactPlugin,
      "jsx-a11y": jsxA11y
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/no-distracting-elements": "warn",
      "jsx-a11y/no-redundant-roles": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/tabindex-no-positive": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-props": "error"
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
