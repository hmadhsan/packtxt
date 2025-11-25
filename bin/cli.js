#!/usr/bin/env node

import { runPacktxt } from '../src/index.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Fix JSON import issue on Windows / Node 24
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')
)

const args = process.argv.slice(2)

// Version flag
if (args.includes('-v') || args.includes('--version')) {
  console.log(pkg.version)
  process.exit(0)
}

// Help flag
if (args.includes('-h') || args.includes('--help')) {
  console.log(`
packtxt — Convert any folder into a single text file

Usage:
  packtxt [options]

Options:
  -i, --interactive     Interactive mode
  -h, --help            Show help
  -v, --version         Show version

Examples:
  packtxt
  packtxt -i
`)
  process.exit(0)
}

runPacktxt()
