#! /usr/bin/env node
import { getArgs } from './utils'
import { initConfig } from './config'
import { run } from './run'

export function executeCommand() {
  const params = process.argv.slice(2)
  const argsObject = getArgs(params)

  switch (true) {
    case params.includes('init'):
      initConfig(argsObject)
      break
    case params.includes('run'):
      run(argsObject)
      break
    default:
      console.log('no match command found')
      break
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(global as any).IS_TEST) {
  executeCommand()
}
