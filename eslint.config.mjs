import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: {globals: globals.browser}},
  {ignores: ['dist']},
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
];
