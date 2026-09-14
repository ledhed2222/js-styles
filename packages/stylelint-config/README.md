Stylelint configs I like, split so a plain CSS project doesn't need SCSS tooling installed.

- `@ledhed2222/stylelint-config` — `stylelint-config-standard`, plus `@stylistic/stylelint-plugin` rules requiring every rule block to be multi-line (no `.foo { color: red; }` even for a single declaration). Needs only `stylelint`.
- `@ledhed2222/stylelint-config/scss` — `stylelint-config-standard-scss` plus the base rules above. Needs `stylelint-config-standard-scss` too (its own deps pull in `stylelint-scss` and `postcss-scss` for you).
- `@ledhed2222/stylelint-config/react` — turns off `selector-class-pattern` (kebab-case enforcement), since React projects commonly name a component's root class after the component itself (`.NavBar`, `.Header`), not kebab-case. A small standalone add-on, not a full preset — combine it with `.` or `./scss`. Needs nothing extra.

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
