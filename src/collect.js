import fs from 'fs'
import path from 'path'
import ignore from 'ignore'

// Built-in ignore rules
const BUILT_IN_IGNORES = [
  'node_modules/',
  '.git/',
  '.cache/',
  'dist/',
  'build/',
  'temp/',
  'tmp/',
  'packtxt-output.txt',
  '**/AppData/**',         // Windows per-user system data
  '**/Windows/**',         // Prevent scanning C:\Windows
  '**/Program Files/**',   // Protected directory
  '**/Program Files (x86)/**',
]

export async function collectFiles(root) {
  const ig = ignore()
  ig.add(BUILT_IN_IGNORES)

  const gitignoreFile = path.join(root, '.gitignore')
  if (fs.existsSync(gitignoreFile)) {
    ig.add(fs.readFileSync(gitignoreFile, 'utf8'))
  }

  const files = []

  function walk(dir) {
    let items = []

    try {
      items = fs.readdirSync(dir)
    } catch {
      return // skip protected folder
    }

    for (const item of items) {
      const full = path.join(dir, item)
      const rel = path.relative(root, full)

      // Ignore hidden folders like .vscode, .config, etc.
      if (item.startsWith('.')) continue

      if (ig.ignores(rel)) continue

      let stat
      try {
        stat = fs.statSync(full)
      } catch {
        continue // skip unreadable files
      }

      if (stat.isDirectory()) {
        walk(full)
      } else {
        files.push(rel)
      }
    }
  }

  walk(root)

  return files.sort()
}
