#! /usr/bin/env node
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { exec } from 'shelljs'
import { initConfig, getConfig } from './utils'

const params = process.argv.slice(2)

switch (true) {
  case params.includes('init'):
    initConfig()
    break
  case params.includes('run'):
    {
      const workingDir = process.cwd()
      const sourceTsConfigPath = join(workingDir, 'tsconfig.json')
      const targetTsConfigPath = join(__dirname, 'tsconfig.json')
      const config = getConfig()

      try {
        const tsConfig = require(sourceTsConfigPath)

        tsConfig.compilerOptions.baseUrl = workingDir

        if (Array.isArray(tsConfig.include) && tsConfig.include.length > 0) {
          tsConfig.include = tsConfig.include.map((item) => {
            return workingDir + '/' + item
          })
        }

        tsConfig['ts-node'] = {
          require: ['tsconfig-paths/register'],
        }

        writeFileSync(targetTsConfigPath, JSON.stringify(tsConfig), {
          encoding: 'utf8',
        })
      } catch (error) {
        console.log(error)
      }

      if (config.length == 0) {
        console.log('no config')
        break
      }

      process.chdir(join(__dirname))

      const commands = config.reduce((res, configItem, index) => {
        const { entry, output, params = {} } = configItem
        const paramsStr = JSON.stringify(params)
        const runScriptPath = join(__dirname, `./run${index}.tsx`)

        const runScipt = `
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import Doc from '${entry}'
import React, { render } from '../lib/'

const res = render(<Doc {...(${paramsStr}) as any}/>)

writeFileSync('${output}', res, {
  encoding: 'utf8',
})
`
        // Generate temp script file
        writeFileSync(runScriptPath, runScipt, {
          encoding: 'utf8',
        })

        const command = `npx ts-node-dev -r tsconfig-paths/register --files --respawn ${runScriptPath}`

        res.push(command)
        return res
      }, [])
      exec(commands.join(' & '))
    }
    break
  default:
    console.log('no match command found')
    break
}
