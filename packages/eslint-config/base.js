import js from '@eslint/js'
import importX from 'eslint-plugin-import-x'

export default [
  js.configs.recommended,
  {
    plugins: {
      'import-x': importX,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import-x/no-default-export': 'error',
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
      'import-x/no-default-export': 'off',
    },
  },
]
