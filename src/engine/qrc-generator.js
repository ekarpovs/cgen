const qr = require('qr-image')

// Overwrite from configuration file
const opts = {
  ec_level: 'M',
  type: 'png',
  size: 1,
  margin: 1
}

exports.qrToStream = (uuid) => {
  return qr.image(uuid, opts)
}

exports.qrToBuffer = (uuid) => {
  return qr.imageSync(uuid, opts)
}
