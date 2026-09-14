import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'

export default [
  js.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import/no-default-export': 'error',
    },
  },
  {
    files: ['**/*.config.{js,mjs,cjs,ts,mts,cts}', '**/*.d.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
]
