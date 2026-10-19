ESLint flat configs I like, split so a plain JS project only pulls in what it needs.

Each entry point default-exports an array of flat config objects, meant to be spread into your own `eslint.config.js`. Compose only the pieces your project needs; put `prettier` last so it can turn off formatting rules the others turn on.

- `@ledhed2222/eslint-config` — the base ruleset. Needs nothing but `eslint`.
- `@ledhed2222/eslint-config/typescript` — TypeScript support. Needs `typescript-eslint`.
- `@ledhed2222/eslint-config/react` — React support. Needs `@eslint-react/eslint-plugin`.
- `@ledhed2222/eslint-config/prettier` — disables formatting rules that conflict with Prettier. Needs `eslint-plugin-prettier` and `eslint-config-prettier`.

Only `eslint` and `typescript-eslint`/`@eslint-react/eslint-plugin`/`eslint-plugin-prettier`/`eslint-config-prettier` are peer deps, and all but `eslint` are optional — install only the plugins for the entry points you actually import.

## Bare JS project

```js
// eslint.config.js
import base from '@ledhed2222/eslint-config'

export default [...base]
```

## TS + React project

```js
// eslint.config.js
import tseslint from 'typescript-eslint'
import base from '@ledhed2222/eslint-config'
import typescript from '@ledhed2222/eslint-config/typescript'
import react from '@ledhed2222/eslint-config/react'
import prettier from '@ledhed2222/eslint-config/prettier'

export default tseslint.config(
  { ignores: ['build/**', 'node_modules/**'] },
  ...base,
  ...typescript,
  ...react,
  ...prettier,
)
```

## TypeScript 7

TypeScript 7.0 has no JavaScript API, so `typescript-eslint` (and the `/typescript` entry point) can't run against it and throws `typescript-eslint does not support TS 7.0.` Until `typescript-eslint` supports the 7.x API, install TypeScript 7 side by side with the 6.0 compatibility package, as [recommended by the TypeScript team](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0):

```sh
npm install -D typescript@npm:@typescript/typescript6@^6.0.2 @typescript/native@npm:typescript@^7.0.2
```

`typescript` then resolves to the 6.0 API for `typescript-eslint`, while `npx tsc` still runs TypeScript 7.
