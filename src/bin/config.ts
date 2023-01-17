import { join } from 'node:path'
import { CONFIG_NAME, INIT_CONFIG_CONTENT } from './constant'
import { Config } from '../types'
import { writeFileWithPath } from './utils'

export function getConfigPath() {
  return join(process.cwd(), CONFIG_NAME)
}

export function initConfig(params: { '--path'?: string }) {
  const path = params['--path'] || getConfigPath()
  writeFileWithPath(path, INIT_CONFIG_CONTENT)
}

export function getConfig() {
  let config: Config = { source: [] }

  try {
    config = require(getConfigPath())
  } catch (error) {
    console.error(error)
  }

  return config
}
