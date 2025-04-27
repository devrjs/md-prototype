const fs = require('node:fs')
const path = require('node:path')

const kubbDir = './src/http/kubb'

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  content = content.replace(/from '(.+?)\.ts'/g, "from '$1'")
  fs.writeFileSync(filePath, content, 'utf8')
}

function walkDir(dir) {
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

walkDir(kubbDir)
console.log('Importações corrigidas nos arquivos da pasta kubb.')
