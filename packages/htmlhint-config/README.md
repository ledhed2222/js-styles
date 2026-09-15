A conservative HTMLHint ruleset — deliberately skips anything that assumes a
full document (`doctype-first`, `title-require`, `html-lang-require`,
`meta-charset-require`, etc.), so it also works against HTML fragments
(partials, template snippets) that never have a `<!doctype>` or `<title>`.

- `tagname-lowercase`, `attr-lowercase`, `attr-value-double-quotes` — basic
  consistency.
- `attr-no-duplication`, `id-unique`, `tag-pair` — correctness (duplicate
  attributes, duplicate ids, mismatched tags).
- `tag-self-close` — void elements (`<br>`, `<hr>`, `<img>`, ...) must be
  written self-closed: `<br />`, not `<br>`.
- `spec-char-escape` — special characters must be HTML-escaped.

## Usage

Unlike this repo's other configs, HTMLHint's own CLI has no `extends`
mechanism — it only reads a literal `.htmlhintrc` JSON file, it can't resolve
an npm package name. So this package exports a plain ruleset object, and you
call `HTMLHint.verify()` with it yourself instead of pointing the CLI at a
config file:

```js
import { HTMLHint } from 'htmlhint'
import ruleset from '@ledhed2222/htmlhint-config'
import fs from 'node:fs'

const html = fs.readFileSync('some.html', 'utf8')
const messages = HTMLHint.verify(html, ruleset)
```

`messages` is an array (empty if clean) of `{ line, col, message, rule, type }`
objects. Needs `htmlhint` itself as a peer dependency.
