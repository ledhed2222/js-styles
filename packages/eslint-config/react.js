import eslintReact from '@eslint-react/eslint-plugin'

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...eslintReact.configs.recommended,
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
]
