import fs from 'fs'
import path from 'path'
import ignore from 'ignore'

export async function collectFiles(root) {
  const ig = ignore()

  const gitignorePath = path.join(root, '.gitignore')
  if (fs.existsSync(gitignorePath)) {
    ig.add(fs.readFileSync(gitignorePath, 'utf8'))
  }

  const files = []

  function walk(dir) {
    const items = fs.readdirSync(dir)

    for (const item of items) {
      const full = path.join(dir, item)
      const rel = path.relative(root, full)

      if (ig.ignores(rel)) continue

      if (fs.statSync(full).isDirectory()) {
        walk(full)
      } else {
        files.push(rel)
      }
    }
  }

  walk(root)

  return files.sort()
}
