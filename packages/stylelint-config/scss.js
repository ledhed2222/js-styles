export default {
  extends: ['./base.js', 'stylelint-config-standard-scss'],
  rules: {
    // Prettier wraps a long `$variable: value, value, ...` onto its own line
    // once it exceeds printWidth, which this rule (expecting a single-line
    // value) then flags. Defer to Prettier, which already owns formatting.
    'scss/dollar-variable-colon-space-after': null,
  },
}
