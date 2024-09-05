import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
   { ignores: ['package*.json'] },
   { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
   { languageOptions: { globals: { ...globals.node, ...globals.jest } } },
   pluginJs.configs.recommended,
   eslintConfigPrettier,
];
