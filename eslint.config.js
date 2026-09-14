import base from '@ledhed2222/eslint-config'

export default [
  ...base,
  {
    files: ['packages/*/*.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
]
