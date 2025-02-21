import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{ts,jsx,tsx}'],
		languageOptions: {
			parser: tsParser,
			globals: globals.browser
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off'
		}
	}
];
