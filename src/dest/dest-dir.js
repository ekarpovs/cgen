const fs = require('fs')

exports.checkPath = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true })
  }
}

exports.saveData = (data, path, uuid) => {
  const outFile = fs.openSync(`${path}/${uuid}.png`, 'w')
  fs.writeFileSync(outFile, data)
  fs.closeSync(outFile)
}
