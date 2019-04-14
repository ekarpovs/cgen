const { expect, test } = require('@oclif/test')
const cmd = require('..')
const mocha = require('mocha')

mocha.describe('cgen', () => {
  test
    .stdout()
    .do(() => cmd.run([]))
    .it('runs default', ctx => {
      expect(ctx.stdout).to.contain('Will be generated 10 codes into "./tmp"\n')
    })

  // test
  //   .stdout()
  //   .do(() => cmd.run(['--file', '1.zip']))
  //   .it('runs --f="1.zip"', ctx => {
  //     expect(ctx.stdout).to.contain('Will be generated 10 codes into "./tmp/1.zip"\n')
  //   })
})
