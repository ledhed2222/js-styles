Stylelint configs I like, split so a plain CSS project doesn't need SCSS tooling installed.

- `@ledhed2222/stylelint-config` — the base ruleset. Needs only `stylelint`.
- `@ledhed2222/stylelint-config/scss` — adds SCSS support on top of the base ruleset. Needs `stylelint-config-standard-scss` too (its own deps pull in `stylelint-scss` and `postcss-scss` for you).
- `@ledhed2222/stylelint-config/react` — a small standalone add-on for React naming conventions, not a full preset — combine it with `.` or `./scss`. Needs nothing extra.

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
