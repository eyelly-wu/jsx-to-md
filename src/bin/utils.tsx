import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { CONFIG_NAME, INIT_CONFIG_CONTENT } from './constant'
import { Config } from '../types'

function getConfigPath() {
  return join(process.cwd(), CONFIG_NAME)
}

export function initConfig() {
  writeFileSync(getConfigPath(), INIT_CONFIG_CONTENT, {
    encoding: 'utf8',
  })
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

export function getArgs(args: string[]) {
  const argObject = args.reduce((res, item, index) => {
    if (item?.startsWith('--')) {
      if (index === args.length - 1 || item[index + 1]?.startsWith('--')) {
        res[item] = true
      } else {
        res[item] = args[index + 1]
      }
    }
    return res
  }, {} as any)

  return argObject
}
