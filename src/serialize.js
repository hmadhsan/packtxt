import fs from 'fs'
import path from 'path'

export function serialize(files, root) {
  return files
    .map(file => {
      const full = path.join(root, file)
      const content = fs.readFileSync(full, 'utf8')
      return `--- ${file} ---\n${content}\n`
    })
    .join('\n')
}
