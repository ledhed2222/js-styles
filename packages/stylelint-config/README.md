Stylelint configs I like, split so a plain CSS project doesn't need SCSS tooling installed.

- `@ledhed2222/stylelint-config` — `stylelint-config-standard`. Needs only `stylelint`.
- `@ledhed2222/stylelint-config/scss` — `stylelint-config-standard-scss`. Needs `stylelint-config-standard-scss` too (its own deps pull in `stylelint-scss` and `postcss-scss` for you).

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
