Stylelint configs I like, split so a plain CSS project doesn't need SCSS tooling installed.

- `@ledhed2222/stylelint-config` — `stylelint-config-standard`, plus `@stylistic/stylelint-plugin` rules requiring every rule block to be multi-line (no `.foo { color: red; }` even for a single declaration). Needs only `stylelint`.
- `@ledhed2222/stylelint-config/scss` — `stylelint-config-standard-scss` plus the base rules above, with `scss/dollar-variable-colon-space-after` turned off since it fights Prettier's habit of wrapping a long `$variable: value, value, ...` onto its own line. Needs `stylelint-config-standard-scss` too (its own deps pull in `stylelint-scss` and `postcss-scss` for you).
- `@ledhed2222/stylelint-config/react` — turns off `selector-class-pattern` (kebab-case enforcement), since React projects commonly name a component's root class after the component itself (`.NavBar`, `.Header`), not kebab-case. A small standalone add-on, not a full preset — combine it with `.` or `./scss`. Needs nothing extra.

There's no `stylelint-config-prettier`-equivalent entry point here: that package only supports stylelint `< 15` and is effectively dead now that stylelint core dropped most of the rules it used to disable. Prettier conflicts get resolved rule-by-rule as they're found, in whichever entry point they actually apply to.

## Plain CSS project

```json
// .stylelintrc.json
{ "extends": "@ledhed2222/stylelint-config" }
```

## SCSS project

```json
// .stylelintrc.json
{ "extends": "@ledhed2222/stylelint-config/scss" }
```

## React + SCSS project

```json
// .stylelintrc.json
{ "extends": ["@ledhed2222/stylelint-config/scss", "@ledhed2222/stylelint-config/react"] }
```
