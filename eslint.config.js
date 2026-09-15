import base from '@ledhed2222/eslint-config'
import globals from 'globals'

export default [
  ...base,
  {
    files: ['packages/*/*.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['packages/htmlhint-config/cli.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
]
