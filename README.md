# packtxt — Convert Any Folder Into One Clean Text File
packtxt is a simple and fast CLI tool that takes your entire folder and converts it into **one single text file**.
This is perfect when you want to share your whole codebase with AI tools like ChatGPT, Claude, Gemini, or Copilot.
---
## ■ The Problem
AI tools work best when they receive **complete project context**.
But normally, you face these problems:
- Too many files to copy manually
- ZIP files cannot be read by AI
- Missing files confuse AI
- Multi-file refactoring becomes difficult
- Code structure gets lost
- Files get mixed up
- AI hallucinates when given incomplete code
---
## ■ The Solution: packtxt
packtxt takes an entire folder and converts each file into a **clean, well■structured text format** that AI can easily undersHere’s what the output looks like:
```
--- intro.js ---
console.log("This is intro file")
--- about.js ---
console.log("This is about file")
--- contact.js ---
console.log("This is contact file")
```
AI can instantly understand:
- Which file starts where
- Which file ends where
- The file names
- The structure of the project
---
## ■ Example Folder Structure
```
project/
■■■ intro.js
■■■ about.js
■■■ contact.js
```
### Example file contents:
**intro.js**
```
console.log("This is intro file")
```
**about.js**
```
console.log("This is about file")
```
**contact.js**
```
console.log("This is contact file")
```
---
## ■ packtxt Output
Running:
```
npx packtxt
```
Produces:
```
--- intro.js ---
console.log("This is intro file")
--- about.js ---
console.log("This is about file")
--- contact.js ---
console.log("This is contact file")
```
Everything is clean, readable, structured, and AI-friendly.
---
## ■ Usage
No installation required:
```
npx packtxt
```
Interactive mode:
```
npx packtxt -i
```
---
## ■ What packtxt currently supports (Your REAL version)
✔ Converts an entire folder into one text file
✔ Respects `.gitignore`
✔ Auto■ignores `node_modules`
✔ Auto■ignores system folders
✔ Sorted file output
✔ Interactive mode (`-i`)
✔ Auto clipboard copy
*(Markdown output, token counting, exclude patterns NOT included — since you reverted those features.)*
---
## ■ Why You Should Use This
- AI gets **complete context**
- No missing files
- No manual copy/paste
- Perfect for debugging
- Perfect for rewriting whole projects
- Makes LLM responses accurate and useful
---
## ■ Testing Instructions
1. Create a folder with a few files.
2. Run:
```
npx packtxt
```
3. Check the output file:
 `packtxt-output.txt`
4. Verify:
 - All files are included
 - Correct headings
 - Sorted output
5. Try using `.gitignore` to skip files
---
## ■ Roadmap
- Markdown output
- Token counting
- Pretty TUI
- Diff mode
- Web UI (packtxt-server)
---
## ■ License
MIT © Hammad Hassan