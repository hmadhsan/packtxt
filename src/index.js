import prompts from 'prompts'
import { collectFiles } from './collect.js'
import { serialize } from './serialize.js'
import clipboard from 'clipboardy'
import fs from 'fs'
import path from 'path'

export async function runPacktxt() {
  const args = process.argv.slice(2)
  const interactive = args.includes('-i') || args.includes('--interactive')

  let folder = process.cwd()

  if (interactive) {
    const res = await prompts({
      type: 'text',
      name: 'folder',
      message: 'Folder to convert',
      initial: folder
    })

    folder = res.folder
  }

  console.log(`\n📁 Reading folder: ${folder}\n`)

  const files = await collectFiles(folder)
  const output = serialize(files, folder)

  const outputPath = path.join(folder, 'packtxt-output.txt')
  fs.writeFileSync(outputPath, output)

  try {
    clipboard.writeSync(output)
    console.log('📋 Copied to clipboard!')
  } catch {
    console.log('⚠️ Could not copy to clipboard')
  }

  console.log(`\n✅ Done! Saved as: ${outputPath}\n`)
}
