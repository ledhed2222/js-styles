A conservative HTMLHint ruleset — deliberately skips anything that assumes a
full document (`doctype-first`, `title-require`, `html-lang-require`,
`meta-charset-require`, etc.), so it also works against HTML fragments
(partials, template snippets) that never have a `<!doctype>` or `<title>`.

- `tagname-lowercase`
- `attr-lowercase`
- `attr-value-double-quotes`
- `attr-no-duplication`
- `id-unique`
- `tag-pair`
- `tag-self-close`
- `spec-char-escape`

## Usage

Unlike this repo's other configs, HTMLHint's own CLI has no `extends`
mechanism — it only reads a literal `.htmlhintrc` JSON file, it can't resolve
an npm package name. So this package ships its own CLI that already has the
ruleset baked in:

```
npx htmlhint-config-lint [path...] [--ignore <name>]...
```

- `path...` — files or directories to check (default: `.`). Directories are
  walked recursively for `.html` files.
- `--ignore <name>` — an extra directory name to skip during the walk;
  repeatable. `node_modules` and `dist` are always skipped.
- Exits non-zero if any file has a violation.

```json
// package.json
{ "scripts": { "lint:html": "htmlhint-config-lint src" } }
```

### Programmatic use

For embedding in a custom script instead, the ruleset is also exported
directly, to call `HTMLHint.verify()` with yourself:

```js
import { HTMLHint } from 'htmlhint'
import ruleset from '@ledhed2222/htmlhint-config'
import fs from 'node:fs'

const html = fs.readFileSync('some.html', 'utf8')
const messages = HTMLHint.verify(html, ruleset)
```

`messages` is an array (empty if clean) of `{ line, col, message, rule, type }`
objects.
