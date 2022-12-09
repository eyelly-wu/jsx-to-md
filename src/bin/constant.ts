export const CONFIG_NAME = 'jsx-to-md.config.js'

export const INIT_CONFIG_CONTENT = `const path = require('path')
const join = path.join

module.exports = {
  source: [
    {
      entry: join(__dirname, 'docs/index'),
      output: join(__dirname, 'README.md'),
      params: {
        param1: 'xxx',
        param2: 'xxx',
      },
    },
  ],
}`

export const TEMP_DIR = '.temp'
