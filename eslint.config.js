import base from '@ledhed2222/eslint-config'

export default [
  ...base,
  {
    files: ['packages/*/base.js', 'packages/*/typescript.js', 'packages/*/react.js', 'packages/*/prettier.js', 'packages/*/scss.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
]
