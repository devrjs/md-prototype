const fs = require('node:fs')
const path = require('node:path')

const TARGET_DIR = './src/http/kubb'
const fileExt = /\.ts$/i

function walk(dir, callback) {
  for (const file of fs.readdirSync(dir)) {
    const filepath = path.join(dir, file)
    const stat = fs.statSync(filepath)
    if (stat.isDirectory()) {
      walk(filepath, callback)
    } else if (fileExt.test(file)) {
      callback(filepath)
    }
  }
}

function transformForEach(content) {
  const pattern =
    /Object\.keys\((\w+)\)\.forEach\(\((\w+)\)\s*=>\s*{([\s\S]*?)^\s*}\)/gm
  let changed = false

  const result = content.replace(pattern, (match, obj, keyVar, body) => {
    changed = true
    return `for (const ${keyVar} of Object.keys(${obj})) {${body}\n}`
  })

  return { changed, result }
}

walk(TARGET_DIR, filepath => {
  const code = fs.readFileSync(filepath, 'utf-8')
  const { changed, result } = transformForEach(code)

  if (changed) {
    fs.writeFileSync(filepath, result, 'utf-8')
    console.log(`✅ Corrigido: ${filepath}`)
  }
})
