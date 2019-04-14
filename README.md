# QR CODE GENERATOR CLI

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![CircleCI](https://circleci.com/gh/ekarpovs/cgen.svg?style=shield&circle-token=ce835e2136ad71da54133bf585e5881aa78dbe21)](https://circleci.com/gh/ekarpovs/cgen)

## Usage

* ./bin/run

### OPTIONS

* -a, --amount=amount  amount of codes
* -p, --path=path      output path
* -h, --help           show CLI help
* -v, --version        show CLI version

### EXAMPLE

  The command:
  $ cgen -a=1000000 -p="./outputPath"
  will create 1000000 png files within outputPath.
