import fs from 'node:fs'
import path from 'node:path'

const generatedDir = './generated'

function fixImports(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8')
  content = content.replace(/from '(.+?)\.ts'/g, "from '$1'")
  fs.writeFileSync(filePath, content, 'utf8')
}

function walkDir(dir: string) {
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkDir(filePath)
    } else if (file.endsWith('.ts')) {
      fixImports(filePath)
    }
  }
}

walkDir(generatedDir)
console.log('Imports fixed in generated files.')
