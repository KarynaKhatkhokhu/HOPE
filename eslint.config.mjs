// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['commitlint.config.js', 'i18next-parser.config.js'],
  },
  ...tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended
  )
];
