import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';
import { readFileSync } from 'fs';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const gitignore = readFileSync('.gitignore', 'utf-8');

export default defineConfig([
  globalIgnores(gitignore.split('\n').filter(n => n && !n.startsWith('#'))),
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
]);
