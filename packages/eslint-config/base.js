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
      curly: ['error', 'all'],
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'array-callback-return': 'error',
      'no-throw-literal': 'error',
      'prefer-promise-reject-errors': 'error',
      'no-promise-executor-return': 'error',
      'require-await': 'error',
      'no-eval': 'error',
      'no-else-return': 'error',
      'no-lonely-if': 'error',
      'no-useless-concat': 'error',
    },
  },
  {
    files: ['**/*.config.{js,mjs,cjs,ts,mts,cts}', '**/*.d.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
]
