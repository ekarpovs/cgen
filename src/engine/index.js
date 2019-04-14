const { generateUuid } = require('./uuid-generator')
const { qrToBuffer } = require('./qrc-generator')
// const { openArchive, archiveData, closeArchive } = require('../dest/dest-zip')
const { checkPath, saveData } = require('../dest/dest-dir')

exports.generate = (amount, path) => {
  const t0 = new Date()

  console.log(`Will be generated ${amount} codes into "${path}"`)
  generateToDirectory(amount, path)

  const t1 = new Date()
  const duration = t1 - t0
  console.log(`${amount} codes generated during ${duration} ms`)
}

const generateToDirectory = async (amount, path) => {
  checkPath(path)
  for (let i = 0; i < amount; i++) {
    const uuid = generateUuid()
    saveData(qrToBuffer(uuid), path, uuid)
  }
}
