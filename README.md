packtxt — README
A fast CLI that turns any folder into a single text file — perfect for sharing codebases with AI.
■ Features
• Interactive mode (-i)
• Auto clipboard copy
• Respects .gitignore
• Deterministic sorted output
• Includes full folder structure
• Zero config
• Ideal for AI context collection
■ Quick Start
Convert the current folder:
npx packtxt
Interactive mode (choose folder):
npx packtxt -i
■ Output Format
packtxt generates packtxt-output.txt in the selected folder.
Format:
--- src/index.js ---
console.log("hello")
--- package.json ---
{ "name": "example", "version": "1.0.0" }
■ Why packtxt?
Perfect for:
• Sending a codebase to ChatGPT or Claude
• Applying mass code changes using AI
• Reviewing multi-file projects
• Deterministic text snapshots
■ Testing Instructions
1. Create a folder with a few test files.
2. Run `npx packtxt` inside that folder.
3. Output should combine files and copy to clipboard.
4. Test .gitignore by adding ignored folders.
5. Avoid running inside system directories like C:\Windows.
■ Roadmap
• Token counting
• Markdown output
• Exclude patterns
• Pretty TUI
• Minified output mode
■ License
MIT © Hammad Hassan