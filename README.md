# 📦 packtxt  
A fast CLI that turns any folder into a single text file — perfect for sharing codebases with AI.

```
npx packtxt
npx packtxt -i
```

## ✨ Features

- ⎈ Interactive mode (`-i`)
- 📋 Auto clipboard copy
- 🧹 Respects `.gitignore`
- 🔄 Deterministic sorted output
- 🗂️ Includes full folder structure
- ⚡ Zero config
- 💡 Ideal for AI context collection

## 🚀 Quick Start

### Convert the current folder:

```
npx packtxt
```

### Interactive mode (choose a folder):

```
npx packtxt -i
```

## 📁 Output Format

`packtxt` generates a `packtxt-output.txt` file in the selected folder.

The format looks like this:

```
--- src/index.js ---
console.log("hello")

--- package.json ---
{
  "name": "example",
  "version": "1.0.0"
}
```

## 🧠 Why packtxt?

Perfect for:

- Sharing a codebase with ChatGPT, Claude or any LLM
- Applying mass code changes using AI
- Reviewing or sending entire folders in one text file
- Getting reproducible, deterministic file dumps
- Using AI to analyze multi-file projects fast

## 📝 License

MIT © Hammad Hassan
