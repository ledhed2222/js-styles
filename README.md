# js-styles

JavaScript/TypeScript/CSS/HTML style config packages I use across projects.

- [`packages/prettier-config`](packages/prettier-config) — `@ledhed2222/prettier-config`
- [`packages/eslint-config`](packages/eslint-config) — `@ledhed2222/eslint-config`
- [`packages/stylelint-config`](packages/stylelint-config) — `@ledhed2222/stylelint-config`
- [`packages/htmlhint-config`](packages/htmlhint-config) — `@ledhed2222/htmlhint-config`

Each package is published independently to npm.

## Publishing

1. Bump `version` in the package's own `package.json` (semver).
2. `npm login` once per machine/session if not already logged in.
3. From the repo root: `npm publish --access public --workspace packages/<name>` (or `cd packages/<name> && npm publish --access public`).
4. If the account has 2FA, the first publish of a session pauses for a one-time password — it prints a `npmjs.com/auth/cli/...` URL to authenticate in a browser, then rerun the same publish command.
5. Tag the release and mirror it as a GitHub release, so the repo's release history matches what's on npm: `git tag <package-name>@<version> && git push origin <package-name>@<version>`, then `gh release create <package-name>@<version> --title "<package-name> <version>" --notes "Published to npm: https://www.npmjs.com/package/<package-name>/v/<version>"`.
