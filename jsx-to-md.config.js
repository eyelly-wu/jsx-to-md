const path = require('path')
const join = path.join

module.exports = [
  {
    entry: join(__dirname, 'docs/index'),
    output: join(__dirname, 'readme.md'),
    params: {
      param1: 'xxx',
      param2: 'xxx',
    },
  },
]
