#!/usr/bin/env node
// HTMLHint's own CLI can't resolve a config by npm package name (no
// `extends` mechanism like ESLint/Stylelint) — it only reads a literal
// .htmlhintrc JSON file. This wraps HTMLHint.verify() with this package's
// ruleset so consumers don't each need their own runner script.
import fs from 'node:fs'
import path from 'node:path'
import htmlhintPkg from 'htmlhint'
import ruleset from './base.js'

const { HTMLHint } = htmlhintPkg

const ignoreNames = new Set(['node_modules', 'dist'])
const targets = []
const args = process.argv.slice(2)[Symbol.iterator]()

for (const arg of args) {
  if (arg === '--ignore') {
    ignoreNames.add(args.next().value)
  } else {
    targets.push(arg)
  }
}
if (targets.length === 0) {
  targets.push('.')
}

function collectHtmlFiles(target) {
  if (fs.statSync(target).isFile()) {
    return [target]
  }

  const files = []
  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    if (ignoreNames.has(entry.name)) {
      continue
    }
    const full = path.join(target, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectHtmlFiles(full))
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(full)
    }
  }
  return files
}

const files = targets.flatMap(collectHtmlFiles)
let errorCount = 0

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8')
  for (const m of HTMLHint.verify(html, ruleset)) {
    errorCount++
    console.log(`${file}:${m.line}:${m.col} ${m.message} (${m.rule.id})`)
  }
}

if (errorCount) {
  console.log(`\n${errorCount} problem(s) in ${files.length} file(s)`)
  process.exit(1)
}
console.log(`0 problems in ${files.length} file(s)`)
