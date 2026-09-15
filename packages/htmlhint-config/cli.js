#!/usr/bin/env node
// HTMLHint's own CLI can't resolve a config by npm package name (no
// `extends` mechanism like ESLint/Stylelint) — it only reads a literal
// .htmlhintrc JSON file. This wraps HTMLHint.verify() with this package's
// ruleset so consumers don't each need their own runner script.
import fs from 'node:fs'
import path from 'node:path'
import htmlhint from 'htmlhint'
import ruleset from './base.js'

function parseTargets(argv, ignoreNames) {
  const targets = []
  const args = argv[Symbol.iterator]()
  for (const arg of args) {
    if (arg === '--ignore') {
      ignoreNames.add(args.next().value)
    } else {
      targets.push(arg)
    }
  }
  return targets.length ? targets : ['.']
}

function collectFromEntry(target, entry, ignoreNames) {
  if (ignoreNames.has(entry.name)) {
    return []
  }
  const full = path.join(target, entry.name)
  if (entry.isDirectory()) {
    return collectHtmlFiles(full, ignoreNames)
  }
  if (entry.isFile() && entry.name.endsWith('.html')) {
    return [full]
  }
  return []
}

function collectHtmlFiles(target, ignoreNames) {
  if (fs.statSync(target).isFile()) {
    return [target]
  }
  return fs
    .readdirSync(target, { withFileTypes: true })
    .flatMap((entry) => collectFromEntry(target, entry, ignoreNames))
}

function lintFile(file) {
  const html = fs.readFileSync(file, 'utf8')
  const messages = htmlhint.HTMLHint.verify(html, ruleset)
  for (const m of messages) {
    console.log(`${file}:${m.line}:${m.col} ${m.message} (${m.rule.id})`)
  }
  return messages.length
}

function main() {
  const ignoreNames = new Set(['node_modules', 'dist'])
  const targets = parseTargets(process.argv.slice(2), ignoreNames)
  const files = targets.flatMap((target) =>
    collectHtmlFiles(target, ignoreNames),
  )
  const errorCount = files.reduce((sum, file) => sum + lintFile(file), 0)

  if (errorCount) {
    console.log(`\n${errorCount} problem(s) in ${files.length} file(s)`)
    process.exit(1)
  }
  console.log(`0 problems in ${files.length} file(s)`)
}

main()
