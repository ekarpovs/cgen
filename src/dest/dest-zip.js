const fs = require('fs')
const archiver = require('archiver')

const removeArchiveIfExists = (file) => {
  if (fs.existsSync(file)) {
    // Delete zip file
    fs.unlinkSync(file)
  }
}

let archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
})

exports.openArchive = (path, file) => {
  const archiveFullName = `${path}/${file}`
  // Check for tmp directory
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }

  removeArchiveIfExists(archiveFullName)

  // create a file to stream archive data to.
  let output = fs.createWriteStream(archiveFullName)

  // listen for all archive data to be written
  // 'close' event is fired only when a file descriptor is involved
  output.on('close', () => {
    console.log(`${archive.pointer()} total bytes`)
    console.log('archiver has been finalized and the output file descriptor has closed.')
  })

  // This event is fired when the data source is drained no matter what was the data source.
  // It is not part of this library but rather from the NodeJS Stream API.
  // @see: https://nodejs.org/api/stream.html#stream_event_end
  output.on('end', () => {
    console.log('Data has been drained')
  })

  // let archive = archiver('zip', {
  //   zlib: { level: 9 } // Sets the compression level.
  // })

  // pipe archive data to the file
  archive.pipe(output)

  // good practice to catch warnings (ie stat failures and other non-blocking errors)
  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      console.log(`warning ${err}`)
    } else {
      console.log(`error ${err}`)
      throw err
    }
  })

  // good practice to catch this error explicitly
  archive.on('error', (err) => {
    console.log(`error ${err}`)
    throw err
  })
}

exports.archiveData = (stream, uuid) => {
  archive.append(stream, { name: `${uuid}.png` })
}

exports.closeArchive = async () => {
  await archive.finalize()
}
