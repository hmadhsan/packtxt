# packtxt — Convert Any Folder Into One Clean Text File
packtxt is a simple and fast tool that takes your entire folder and converts it into **one single text fThis is perfect when you want to share your whole codebase with AI tools like ChatGPT, Claude, Gemini, o---
## ■ The Problem
AI ko sahi jawaab tabhi milta hai jab **poora context** diya jaye.
Lekin normally yeh issues hotay hain:
- Bohat saari files hoti hain → copy/paste impossible
- ZIP file AI nahi kholta
- Ek file dene se AI confused hota hai
- Multi-file code analysis fail hota hai
- Structure AI ko samajh nahi aata
- Files mix hojati hain → AI hallucination
---
## ■ The Solution: packtxt
packtxt aik folder leta hai aur **har file ko clearly separated format** me ek text file me daal deta haIt looks like this:
```
--- intro.js ---
console.log("This is intro file")
--- about.js ---
console.log("This is about file")
--- contact.js ---
console.log("This is contact file")
```
AI ko crystal clear hojata hai:
- Kon si file kaha start hoti hai
- Kaha end hoti hai
- Kis file ka kya naam hai
- Kis tarah ka structure hai
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
Everything clean, readable, structured, and AI-friendly.
---
## ■ Installation
No installation needed:
```
npx packtxt
```
Interactive mode:
```
npx packtxt -i
```
---
## ■ What packtxt currently supports (Your REAL version)
✔ Full folder → one text file
✔ Respects `.gitignore`
✔ Auto-ignore `node_modules`
✔ Auto-ignore system folders
✔ Sorted output
✔ Interactive folder selection
✔ Clipboard copy
*(No markdown mode, no tokens, no exclude — because you reverted them.)*
---
## ■ Why You Should Use This
- AI gets **full project context**
- No missing files
- No manual copy-paste
- No confusion about structure
- Perfect for debugging
- Perfect for refactoring
- Perfect for rewriting whole projects
Basically, AI ko wo sab mil jata hai jo usay chahiye — bina tension ke.
---
## ■ Testing Instructions
1. Create a folder with 2–3 JS files.
2. Run:
```
npx packtxt
```
3. Check `packtxt-output.txt`
4. Verify:
 - sari files included
 - correct headings
 - sorted output
5. Try `.gitignore` to skip files
---
## ■ Roadmap
- Markdown mode
- Token counting
- Pretty TUI
- Diff mode
- Web UI
---
## ■ License
MIT © Hammad Hassan