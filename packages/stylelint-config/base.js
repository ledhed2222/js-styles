export default {
  extends: ['stylelint-config-standard'],
  plugins: ['@stylistic/stylelint-plugin'],
  rules: {
    '@stylistic/block-opening-brace-newline-after': 'always',
    '@stylistic/block-closing-brace-newline-before': 'always',
    '@stylistic/declaration-block-semicolon-newline-after': 'always',
  },
}
