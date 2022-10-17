import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { Config } from '../types'

const CONFIG_NAME = 'jsx-to-md.config.js'

function getConfigPath() {
  return join(process.cwd(), CONFIG_NAME)
}

export function initConfig() {
  writeFileSync(
    getConfigPath(),
    `
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
  `,
    {
      encoding: 'utf8',
    },
  )
}

export function getConfig() {
  let config: Config[] = []

  try {
    config = require(getConfigPath())
  } catch (error) {
    console.error(error)
  }

  return config
}
