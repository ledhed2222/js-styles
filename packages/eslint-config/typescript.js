import tseslint from 'typescript-eslint'

export default [
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
]
