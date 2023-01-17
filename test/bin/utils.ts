import * as BinIndex from '../../src/bin'
import * as BinConstant from '../../src/bin/constant'
import * as BinRun from '../../src/bin/run'
import * as BinConfig from '../../src/bin/config'
import * as BinUtils from '../../src/bin/utils'

async function getCurrentModule<T>(path: string): Promise<T> {
  const pkg = await import(path)

  return pkg
}

export function changeProcessArgv(...args: string[]) {
  process.argv.splice(2, process.argv.length - 1, ...args)
}

export const binIndex = await getCurrentModule<typeof BinIndex>(
  '../../src/bin/index',
)

export const binRun = await getCurrentModule<typeof BinRun>('../../src/bin/run')

export const binConfig = await getCurrentModule<typeof BinConfig>(
  '../../src/bin/config',
)

export const binConstant = await getCurrentModule<typeof BinConstant>(
  '../../src/bin/constant',
)

export const binUtils = await getCurrentModule<typeof BinUtils>(
  '../../src/bin/utils',
)
