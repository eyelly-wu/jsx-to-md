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

      if (config?.source?.length == 0) {
        console.log('no config')
        break
      }

      process.chdir(join(__dirname))

      const filenames = config?.source?.reduce((res, configItem, index) => {
        const { entry, output, params = {} } = configItem
        const paramsStr = JSON.stringify(params)
        const originFilename = `render${index}`
        const filename = `${originFilename}.tsx`
        const runScriptPath = join(__dirname, filename)
        const runScript = `
import { writeFileSync, existsSync } from 'node:fs'
import Doc from '${entry}'
import React, { render } from '../lib/'

const res = render(<Doc {...(${paramsStr}) as any}/>)

try {
  const isExist = existsSync('${output}')
  writeFileSync('${output}', res, {
    encoding: 'utf8',
  })
  console.log(\`${new Date().toLocaleTimeString()} ${output} has been ${'${ isExist?"updated":"created" }'} \`)
} catch (err) {
  console.error(err)
}
`
        // Generate temp script file
        writeFileSync(runScriptPath, runScript, {
          encoding: 'utf8',
        })

        res.push(originFilename)
        return res
      }, [])

      const runScript = `
${filenames
  .map((item) => {
    return `import './${item}'\n`
  })
  .join('')}
      `
      writeFileSync(join(__dirname, 'run.tsx'), runScript, {
        encoding: 'utf8',
      })
      exec(
        `npx ts-node-dev -r tsconfig-paths/register --files --respawn ${join(
          __dirname,
          'run.tsx',
        )}`,
      )
    }
    break
  default:
    console.log('no match command found')
    break
}
