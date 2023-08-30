module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-unresolved': 0,
    // Fix `no-shadow` false positives
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': [2],
    // Allow empty functions mainly for default function arguments
    '@typescript-eslint/no-empty-function': 0,
    // Fix `no-use-before-define` false positives
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [2, { functions: false }],
    // Enforce type-only imports
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
    // Allow named exports when module exports only a single declaration
    'import/prefer-default-export': 0,
    // No imports with file extensions
    'import/extensions': 0,
    // 'promise/prefer-await-to-then': 2,
    // 'promise/prefer-await-to-callbacks': 2,
    // Force trailing comma only for multiline
    'comma-dangle': [2, 'always-multiline'],
    // Enforce ES2017 async/await syntax
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'security/detect-object-injection': 0,
  },
};
