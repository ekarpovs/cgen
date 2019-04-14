const { Command, flags } = require('@oclif/command')

const { generate } = require('./engine')

class CgenCommand extends Command {
  async run () {
    const { flags } = this.parse(CgenCommand)
    const amount = flags.amount || 10
    const path = flags.path || './tmp'
    const file = flags.file || ''

    generate(amount, path, file)
  }
}

CgenCommand.description = `Describe the command here
...
Example, the command:
$ cgen -a=1000000 -p="./outputPath" -f="myCodes.zip"
will create myCodes.zip file in outputPath within 1000000 png files
`

CgenCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: 'v' }),
  // add --help flag to show CLI version
  help: flags.help({ char: 'h' }),
  amount: flags.string({ char: 'a', description: 'amount of codes' }),
  path: flags.string({ char: 'p', description: 'output path' }),
  file: flags.string({ char: 'f', description: 'output file. If not defined output will be not compressed' })
}

module.exports = CgenCommand
